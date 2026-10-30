"""Check generated pages, accessible labels, local links and multilingual SEO."""

from collections import Counter
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import sys
from urllib.parse import unquote, urlsplit
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parent.parent
VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"}


class Page(HTMLParser):
    def __init__(self, filename):
        super().__init__(convert_charrefs=True)
        self.filename = filename
        self.tags = []
        self.stack = []
        self.errors = []
        self.scripts = []
        self.script = None
        self.ids = []
        self.title = ""
        self.in_title = False

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.tags.append((tag, attrs))
        if attrs.get("id"):
            self.ids.append(attrs["id"])
        if tag == "a" and "a" in self.stack:
            self.errors.append("Nested anchor")
        if tag not in VOID:
            self.stack.append(tag)
        if tag == "title":
            self.in_title = True
        if tag == "script":
            self.script = [attrs.get("type"), ""]
            self.scripts.append(self.script)

    def handle_endtag(self, tag):
        if not self.stack or self.stack[-1] != tag:
            self.errors.append(f"Unexpected closing tag {tag}")
        else:
            self.stack.pop()
        if tag == "title":
            self.in_title = False
        if tag == "script":
            self.script = None

    def handle_data(self, data):
        if self.in_title:
            self.title += data
        if self.script:
            self.script[1] += data


pages = {}
errors = []
for filename in sorted(ROOT.glob("*.html")) + sorted((ROOT / "en").glob("*.html")):
    page = Page(filename)
    page.feed(filename.read_text(encoding="utf-8"))
    pages[filename.resolve()] = page


def fail(page, message):
    errors.append(f"{page.filename.relative_to(ROOT)}: {message}")


canonical_pages = {}
for filename, page in pages.items():
    for error in page.errors:
        fail(page, error)
    if page.stack:
        fail(page, f"Unclosed tags {page.stack}")
    if any(count > 1 for count in Counter(page.ids).values()):
        fail(page, "Duplicate IDs")
    if sum(tag == "h1" for tag, _ in page.tags) != 1:
        fail(page, "Expected exactly one H1")
    if not page.title:
        fail(page, "Missing title")
    if not any(tag == "meta" and attrs.get("name") == "description" and attrs.get("content") for tag, attrs in page.tags):
        fail(page, "Missing description")
    canonicals = [attrs["href"] for tag, attrs in page.tags if tag == "link" and attrs.get("rel") == "canonical"]
    if len(canonicals) != 1:
        fail(page, "Expected exactly one canonical")
    else:
        canonical_pages[canonicals[0]] = page
    alternates = {attrs.get("hreflang"): attrs.get("href") for tag, attrs in page.tags if tag == "link" and attrs.get("rel") == "alternate"}
    if set(alternates) != {"pt-PT", "en", "x-default"}:
        fail(page, "Missing language alternates")
    if not any(tag == "meta" and attrs.get("property") == "og:image" for tag, attrs in page.tags):
        fail(page, "Missing share image")
    for script_type, content in page.scripts:
        if script_type in {"application/json", "application/ld+json"}:
            try:
                json.loads(content)
            except ValueError:
                fail(page, f"Invalid {script_type}")
    labels = {attrs.get("for") for tag, attrs in page.tags if tag == "label"}
    for tag, attrs in page.tags:
        if tag == "img" and ("alt" not in attrs or not attrs.get("width") or not attrs.get("height")):
            fail(page, "Image lacks alt or explicit dimensions")
        if tag in {"input", "select", "textarea"} and attrs.get("type") != "hidden":
            if attrs.get("id") and attrs["id"] not in labels and not attrs.get("aria-label"):
                fail(page, f"Missing label for {attrs['id']}")
        for attribute in ("href", "src", "action"):
            reference = attrs.get(attribute)
            if not reference:
                continue
            url = urlsplit(reference)
            if url.scheme or url.netloc:
                continue
            target = (filename.parent / unquote(url.path)).resolve() if url.path else filename
            if not target.exists():
                fail(page, f"Missing local target {reference}")
                continue
            cursor = ROOT
            for part in target.relative_to(ROOT).parts:
                if part not in {child.name for child in cursor.iterdir()}:
                    fail(page, f"Incorrect path case {reference}")
                cursor /= part
            if url.fragment and target in pages and url.fragment not in pages[target].ids:
                fail(page, f"Missing anchor {reference}")

for page in pages.values():
    alternates = {attrs.get("hreflang"): attrs.get("href") for tag, attrs in page.tags if tag == "link" and attrs.get("rel") == "alternate"}
    for url in alternates.values():
        if url not in canonical_pages:
            fail(page, f"Language target is not a generated canonical: {url}")
    for language in ("pt-PT", "en"):
        target = canonical_pages.get(alternates.get(language))
        if target:
            target_alternates = {attrs.get("hreflang"): attrs.get("href") for tag, attrs in target.tags if tag == "link" and attrs.get("rel") == "alternate"}
            if target_alternates != alternates:
                fail(page, "Language links are not reciprocal")

sitemap = ET.parse(ROOT / "sitemap.xml")
locations = [element.text for element in sitemap.getroot().iter("{http://www.sitemaps.org/schemas/sitemap/0.9}loc")]
if set(locations) != set(canonical_pages):
    errors.append("Sitemap does not match generated canonical pages")
if len(locations) != len(set(locations)):
    errors.append("Duplicate sitemap URLs")
if len(pages) != 72 or len(canonical_pages) != 72:
    errors.append("Expected 72 distinct bilingual pages")

for stylesheet in [ROOT / "css" / "site.css", ROOT / "assets" / "fontawesome" / "css" / "all.min.css"]:
    for reference in re.findall(r"url\(\s*['\"]?([^)'\"\s]+)", stylesheet.read_text(encoding="utf-8")):
        if not urlsplit(reference).scheme and not (stylesheet.parent / reference).resolve().exists():
            errors.append(f"Missing CSS asset: {reference}")

for lang in ("pt", "en"):
    index = json.loads((ROOT / "js" / f"search-{lang}.json").read_text(encoding="utf-8"))
    for entry in index:
        target = urlsplit(entry["path"])
        filename = (ROOT / target.path).resolve()
        if filename not in pages or (target.fragment and target.fragment not in pages[filename].ids):
            errors.append(f"Invalid search target: {entry['path']}")

if errors:
    print("\n".join(errors))
    sys.exit(1)
print(f"PASS: {len(pages)} pages; valid structure, local references, labels, JSON, reciprocal language links and complete sitemap.")
