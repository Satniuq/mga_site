import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { firm, practices, featured, people, institutional } from '../src/site-data.mjs';
import { practiceTopics } from '../src/practice-topics.mjs';

const pages = [...institutional, ...practices];

test('each practice has complete PT and EN content and valid related practices', () => {
  for (const practice of practices) {
    for (const lang of ['pt', 'en']) {
      assert.ok(practice.files[lang]);
      assert.ok(practice[lang].title && practice[lang].summary && practice[lang].intro);
      assert.ok(practice[lang].services.length >= 4);
      assert.equal(practice.pt.services.length, practice.en.services.length);
      assert.equal(practice.pt.sections.length, practice.en.sections.length);
    }
    for (const id of practice.related) {
      assert.notEqual(id, practice.id);
      assert.ok(practices.some(item => item.id === id));
    }
    for (const id of practice.people) assert.ok(people.some(person => person.id === id));
  }
});

test('the six featured practices follow the meeting brief', () => {
  assert.deepEqual(featured, ['public', 'corporate', 'employment', 'criminal', 'credit', 'property']);
  assert.ok(people.find(person => person.id === 'mcp').practices.includes('employment'));
  assert.ok(people.find(person => person.id === 'cfs').practices.includes('criminal'));
});

test('all practice pages have at least two lawyers and match their team profiles', async () => {
  const expected = {
    public: ['jsm', 'mjg'], administrative: ['jsm', 'mjg'], procurement: ['jsm', 'mcp'],
    corporate: ['mcp', 'cfs'], employment: ['mcp', 'sca'], criminal: ['cfs', 'jvq'],
    credit: ['mm', 'nsc', 'sca'], property: ['mjg', 'mcp', 'jvq', 'sca'],
    civil: ['cfs', 'mcp', 'jvq'], family: ['cfs', 'sca'], succession: ['sca', 'mcp'],
    litigation: ['mcp', 'cfs', 'mm', 'nsc', 'sca'], notarial: ['jvq', 'sca'],
    immigration: ['jvq', 'mcp'], residence: ['jvq', 'mcp'], d2: ['jvq', 'mcp'],
    d7: ['jvq', 'mcp'], ari: ['jvq', 'mcp'], reunification: ['jvq', 'mcp'],
  };
  for (const practice of practices) {
    assert.deepEqual(practice.people, expected[practice.id] ?? expected[practice.parentPractice], practice.id);
    assert.ok(new Set(practice.people).size >= 2, practice.id);
    const profilePractice = practice.parentPractice ?? practice.id;
    if (practice.parentPractice) {
      assert.deepEqual(practice.people, practices.find(item => item.id === profilePractice).people);
    }
    for (const id of practice.people) {
      const person = people.find(item => item.id === id);
      assert.equal(person.type, 'legal');
      assert.ok(!person.trainee);
      assert.ok(person.practices.includes(profilePractice), `${id}: ${practice.id}`);
    }
    for (const lang of ['pt', 'en']) {
      const prefix = lang === 'en' ? 'en/' : '';
      const teamFile = lang === 'pt' ? 'equipa.html' : 'team.html';
      const html = await readFile(new URL(`../${prefix}${practice.files[lang]}`, import.meta.url), 'utf8');
      const section = html.match(/<section class="article-section associated-people"[\s\S]*?<\/section>/)?.[0];
      assert.ok(section, `${lang}: ${practice.id}`);
      assert.equal((section.match(/<li>/g) || []).length, practice.people.length);
      for (const id of practice.people) assert.ok(section.includes(`href="${teamFile}#${id}"`));
    }
  }
  for (const person of people) {
    for (const id of person.practices) {
      assert.ok(practices.find(item => item.id === id).people.includes(person.id), `${person.id}: ${id}`);
    }
    for (const lang of ['pt', 'en']) {
      const teamPath = lang === 'pt' ? 'equipa.html' : 'en/team.html';
      const html = await readFile(new URL(`../${teamPath}`, import.meta.url), 'utf8');
      const card = html.match(new RegExp(`<article[^>]*id="${person.id}"[\\s\\S]*?<\\/article>`))?.[0];
      for (const id of person.practices) {
        assert.ok(card.includes(`href="${practices.find(item => item.id === id).files[lang]}"`));
      }
      const graph = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
      assert.deepEqual(graph.find(item => item['@type'] === 'Person' && item.name === person.name).knowsAbout,
        person.practices.map(id => practices.find(item => item.id === id)[lang].title));
    }
  }
});

test('Portuguese uses capitalised practice labels and lower-case branches in prose and SEO', async () => {
  const capitalisedBranch = /[Dd]ireito (?:Público|Privado|Administrativo|Civil|Penal|Comercial|do Trabalho|da Família|dos Estrangeiros)/u;
  for (const practice of practices) {
    if (practice.pt.title.startsWith('Direito ')) assert.match(practice.pt.title, capitalisedBranch);
    for (const text of [practice.pt.summary, practice.pt.intro, ...practice.pt.services, ...practice.pt.sections.flatMap(([, ...paragraphs]) => paragraphs)]) {
      assert.doesNotMatch(text, capitalisedBranch);
    }
  }
  for (const page of institutional) assert.doesNotMatch(page.pt.description, capitalisedBranch);
  const about = await readFile(new URL('../sobre.html', import.meta.url), 'utf8');
  assert.ok(about.includes('O direito público e a recuperação de crédito'));
  assert.ok(about.includes('As restantes áreas de direito privado'));
  const home = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  assert.ok(home.includes('Direito público e privado.'));
  assert.ok(home.includes('Experiência no direito.'));
  assert.ok(home.includes('O direito, na sua realidade.'));
});

test('the ten approved topics are published in both languages and linked only inside their areas', async () => {
  const expectedParents = {
    'administrative-challenges': 'administrative',
    'public-tender-bids': 'procurement',
    'tender-exclusion-award': 'procurement',
    'debt-collection-payment-orders': 'credit',
    'credit-portfolio-management': 'credit',
    'company-formation': 'corporate',
    'property-purchase-sale': 'property',
    'divorce-separation': 'family',
    'inheritance-division': 'succession',
    'document-authentication': 'notarial',
  };
  assert.equal(practiceTopics.length, 10);
  assert.deepEqual(Object.fromEntries(practiceTopics.map(topic => [topic.id, topic.parentPractice])), expectedParents);
  const sitemap = await readFile(new URL('../sitemap.xml', import.meta.url), 'utf8');
  for (const lang of ['pt', 'en']) {
    const prefix = lang === 'en' ? 'en/' : '';
    const areasFile = lang === 'pt' ? 'areas.html' : 'practice-areas.html';
    const contactFile = lang === 'pt' ? 'contactos.html' : 'contacts.html';
    const areas = await readFile(new URL(`../${prefix}${areasFile}`, import.meta.url), 'utf8');
    assert.equal((areas.match(/class="practice-card"/g) || []).length, 14);
    const contact = await readFile(new URL(`../${prefix}${contactFile}`, import.meta.url), 'utf8');
    const index = JSON.parse(await readFile(new URL(`../js/search-${lang}.json`, import.meta.url), 'utf8'));
    for (const topic of practiceTopics) {
      const parent = practices.find(practice => practice.id === topic.parentPractice);
      const html = await readFile(new URL(`../${prefix}${topic.files[lang]}`, import.meta.url), 'utf8');
      const parentHtml = await readFile(new URL(`../${prefix}${parent.files[lang]}`, import.meta.url), 'utf8');
      const topicsSection = parentHtml.match(/<section class="article-section practice-topics"[\s\S]*?<\/section>/)?.[0];
      assert.ok(topicsSection?.includes(`href="${topic.files[lang]}"`));
      assert.ok(html.includes(`href="${parent.files[lang]}#topics"`));
      assert.ok(parentHtml.includes('href="#topics" data-section-link'));
      assert.ok(parentHtml.includes(lang === 'pt' ? 'Temas nesta área' : 'Topics in this practice'));
      const header = html.match(/<header[\s\S]*?<\/header>/)[0];
      assert.ok(!header.includes(`href="${topic.files[lang]}"`));
      assert.ok(!areas.includes(`href="${topic.files[lang]}"`));
      assert.equal(index.filter(entry => entry.path === `${prefix}${topic.files[lang]}`).length, 1);
      assert.ok(contact.includes(`data-area-id="${topic.id}"`));
      assert.ok(sitemap.includes(`<loc>${firm.url}/${prefix}${topic.files[lang]}</loc><lastmod>2026-10-30</lastmod>`));
      assert.ok(html.includes(`?area=${topic.id}`));
      assert.equal(topic[lang].sections.length, 3);
      assert.equal(topic[lang].services.length, 6);
    }
  }
});

test('both published team pages contain the current team and no sample portrait', async () => {
  const [pt, en] = await Promise.all(['equipa.html','en/team.html'].map(file => readFile(new URL(`../${file}`, import.meta.url), 'utf8')));
  for (const person of people) {
    assert.ok(pt.includes(`id="${person.id}"`));
    assert.ok(en.includes(`id="${person.id}"`));
  }
  assert.equal(people.length, 11);
  for (const html of [pt, en]) {
    assert.equal((html.match(/class="person-card"/g) || []).length, people.length);
  }
  assert.ok(!pt.includes('jsmiguel.jpg') && !en.includes('jsmiguel.jpg'));
});

test('immigration clearly links all five subpages before services without adding them to the topbar', async () => {
  const immigration = practices.find(practice => practice.id === 'immigration');
  const topics = practices.filter(practice => practice.parentPractice === immigration.id);
  assert.equal(topics.length, 5);
  for (const lang of ['pt', 'en']) {
    const prefix = lang === 'en' ? 'en/' : '';
    const html = await readFile(new URL(`../${prefix}${immigration.files[lang]}`, import.meta.url), 'utf8');
    const section = html.match(/<section class="article-section practice-topics"[\s\S]*?<\/section>/)?.[0];
    assert.ok(section);
    assert.equal((section.match(/<li>/g) || []).length, topics.length);
    assert.ok(html.indexOf('id="topics"') < html.indexOf('id="services"'));
    assert.ok(html.includes('href="#topics" data-section-link'));
    const header = html.match(/<header[\s\S]*?<\/header>/)[0];
    for (const topic of topics) {
      assert.ok(section.includes(`href="${topic.files[lang]}"`));
      assert.ok(section.includes(topic[lang].title));
      assert.ok(section.includes(topic[lang].summary));
      assert.ok(!header.includes(`href="${topic.files[lang]}"`));
    }
  }
  const civil = await readFile(new URL('../direito-civil.html', import.meta.url), 'utf8');
  assert.ok(!civil.includes('id="topics"'));
});

test('all topic pages have a visible return link and parent breadcrumb in PT and EN', async () => {
  for (const topic of practices.filter(practice => practice.parentPractice)) {
    const parent = practices.find(practice => practice.id === topic.parentPractice);
    for (const lang of ['pt', 'en']) {
      const prefix = lang === 'en' ? 'en/' : '';
      const html = await readFile(new URL(`../${prefix}${topic.files[lang]}`, import.meta.url), 'utf8');
      const backLink = html.match(/<a class="text-link parent-practice-link"[\s\S]*?<\/a>/)?.[0];
      assert.ok(backLink?.includes(`href="${parent.files[lang]}#topics"`));
      assert.ok(backLink.includes(`${lang === 'pt' ? 'Voltar a' : 'Back to'} ${parent[lang].title}`));
      assert.ok(html.indexOf(backLink) < html.indexOf('class="container practice-layout"'));
      const breadcrumbs = html.match(/<nav class="breadcrumbs"[\s\S]*?<\/nav>/)[0];
      assert.ok(breadcrumbs.includes(`href="${parent.files[lang]}"`));
      const graph = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
      const items = graph.find(item => item['@type'] === 'BreadcrumbList').itemListElement;
      assert.equal(items.length, 4);
      assert.deepEqual(items.map(item => item.position), [1, 2, 3, 4]);
      assert.equal(items[2].name, parent[lang].title);
      assert.equal(items[2].item, `${firm.url}/${prefix}${parent.files[lang]}`);
      assert.equal(items[3].name, topic[lang].title);
    }
  }
  const civil = await readFile(new URL('../direito-civil.html', import.meta.url), 'utf8');
  assert.ok(!civil.includes('class="text-link parent-practice-link"'));
});

test('Carla has commercial, civil and family practice without a focus qualifier in both languages', async () => {
  const carla = people.find(person => person.id === 'cfs');
  for (const id of ['criminal', 'corporate', 'civil', 'family', 'litigation']) {
    assert.ok(carla.practices.includes(id));
  }
  for (const lang of ['pt', 'en']) {
    const teamPath = lang === 'pt' ? 'equipa.html' : 'en/team.html';
    const html = await readFile(new URL(`../${teamPath}`, import.meta.url), 'utf8');
    const card = html.match(/<article[^>]*id="cfs"[\s\S]*?<\/article>/)?.[0];
    assert.ok(card);
    const familyTitle = practices.find(item => item.id === 'family')[lang].title;
    assert.ok(card.includes(`>${familyTitle}</a>`));
    assert.ok(!card.includes('(especial incidência)') && !card.includes('(particular focus)'));
    for (const id of ['corporate', 'civil']) {
      const practice = practices.find(item => item.id === id);
      assert.ok(practice.people.includes(carla.id));
      assert.ok(card.includes(`href="${practice.files[lang]}"`));
      const practicePath = `${lang === 'en' ? 'en/' : ''}${practice.files[lang]}`;
      const practiceHtml = await readFile(new URL(`../${practicePath}`, import.meta.url), 'utf8');
      assert.ok(practiceHtml.includes(`href="${teamPath.split('/').pop()}#cfs"`));
    }
    const index = JSON.parse(await readFile(new URL(`../js/search-${lang}.json`, import.meta.url), 'utf8'));
    const description = index.find(item => item.title === carla.name).description;
    assert.ok(description.includes(familyTitle));
    assert.ok(!description.includes('(especial incidência)') && !description.includes('(particular focus)'));
  }
});

test('Sofia is linked to family and property law in both directions and languages', async () => {
  const sofia = people.find(person => person.id === 'sca');
  for (const lang of ['pt', 'en']) {
    const prefix = lang === 'en' ? 'en/' : '';
    const teamFile = lang === 'pt' ? 'equipa.html' : 'team.html';
    const html = await readFile(new URL(`../${prefix}${teamFile}`, import.meta.url), 'utf8');
    const card = html.match(/<article[^>]*id="sca"[\s\S]*?<\/article>/)?.[0];
    assert.ok(card);
    const index = JSON.parse(await readFile(new URL(`../js/search-${lang}.json`, import.meta.url), 'utf8'));
    const description = index.find(item => item.title === sofia.name).description;
    for (const id of ['family', 'property']) {
      const practice = practices.find(item => item.id === id);
      assert.ok(sofia.practices.includes(id));
      assert.ok(practice.people.includes(sofia.id));
      assert.ok(card.includes(`href="${practice.files[lang]}"`));
      assert.ok(description.includes(practice[lang].title));
      const practiceHtml = await readFile(new URL(`../${prefix}${practice.files[lang]}`, import.meta.url), 'utf8');
      assert.ok(practiceHtml.includes(`href="${teamFile}#sca"`));
    }
  }
});

test('published contact details use the telephone rather than the fax and include the trainee email', async () => {
  assert.equal(firm.phoneHref, '+351213193720');
  assert.equal(people.find(person => person.id === 'arc').email, 'rita.costa@mga.com.pt');
  for (const lang of ['pt', 'en']) {
    for (const page of pages) {
      const file = `${lang === 'en' ? 'en/' : ''}${page.files[lang]}`;
      const html = await readFile(new URL(`../${file}`, import.meta.url), 'utf8');
      assert.ok(html.includes(`href="tel:${firm.phoneHref}"`), file);
      assert.ok(html.includes(`"telephone":"${firm.phoneHref}"`), file);
      assert.ok(!html.includes('213580247') && !html.includes('213 580 247'), file);
      if (page.id === 'team') assert.ok(html.includes('href="mailto:rita.costa@mga.com.pt"'));
      if (page.id === 'contact') assert.ok(page[lang].description.includes(firm.phone));
    }
    const index = JSON.parse(await readFile(new URL(`../js/search-${lang}.json`, import.meta.url), 'utf8'));
    assert.equal(index.find(item => item.path.endsWith('#arc')).keywords, 'rita.costa@mga.com.pt');
  }
});

test('Vania has the requested role in the team, structured data and search in each language', async () => {
  const vania = people.find(person => person.id === 'vf');
  for (const [lang, title] of Object.entries({ pt: 'Secretária forense', en: 'Paralegal' })) {
    assert.equal(vania.roles[lang], title);
    const teamPath = lang === 'pt' ? 'equipa.html' : 'en/team.html';
    const html = await readFile(new URL(`../${teamPath}`, import.meta.url), 'utf8');
    const card = html.match(/<article[^>]*id="vf"[\s\S]*?<\/article>/)?.[0];
    assert.ok(card?.includes(`<p class="person-role">${title}</p>`));
    const graph = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
    assert.equal(graph.find(item => item['@type'] === 'Person' && item.name === vania.name).jobTitle, title);
    const index = JSON.parse(await readFile(new URL(`../js/search-${lang}.json`, import.meta.url), 'utf8'));
    assert.equal(index.find(item => item.path.endsWith('#vf')).description, title);
    const elsa = html.match(/<article[^>]*id="ep"[\s\S]*?<\/article>/)?.[0];
    assert.ok(elsa?.includes(lang === 'pt' ? 'Apoio administrativo' : 'Administrative support'));
  }
});

test('existing public URLs are preserved and every page has its own language pair', () => {
  assert.equal(pages.length, 36);
  for (const lang of ['pt', 'en']) {
    const files = pages.map(page => page.files[lang]);
    assert.equal(new Set(files).size, files.length);
  }
  assert.equal(practices.find(practice => practice.id === 'credit').files.en, 'credit-recovery-process-management.html');
  assert.equal(practices.find(practice => practice.id === 'succession').files.en, 'family-succession-estate-planning.html');
});
