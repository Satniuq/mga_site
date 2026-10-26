const configElement = document.getElementById('site-config');
const config = JSON.parse(configElement.textContent);
const t = config.strings;
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const mobile = matchMedia('(max-width: 980px)');
document.documentElement.classList.add('js-enabled');

const header = document.querySelector('[data-header]');
const navigation = document.querySelector('[data-navigation]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const areasToggle = document.querySelector('[data-areas-toggle]');
const areasPanel = document.getElementById('practice-menu');

function setAreas(open) {
  areasToggle.setAttribute('aria-expanded', String(open));
  areasPanel.hidden = !open;
}

function setMenu(open) {
  navigation.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? t.close : t.menu);
  menuToggle.firstElementChild.className = `fa-solid fa-${open ? 'xmark' : 'bars'}`;
  if (!open) setAreas(false);
}

menuToggle.hidden = false;
areasToggle.hidden = false;
menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
areasToggle.addEventListener('click', () => setAreas(areasPanel.hidden));
mobile.addEventListener('change', () => setMenu(false));
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) setMenu(false);
});
document.addEventListener('click', event => {
  if (!event.target.closest('.nav-areas')) setAreas(false);
  if (!event.target.closest('.site-header')) setMenu(false);
});
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  if (!areasPanel.hidden) {
    setAreas(false);
    areasToggle.focus();
  } else if (menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuToggle.focus();
  }
});
document.addEventListener('focusin', event => {
  if (!event.target.closest('.nav-areas')) setAreas(false);
  if (mobile.matches && !event.target.closest('.site-header')) setMenu(false);
});

let scrollQueued = false;
function updateHeader() {
  header.classList.toggle('is-scrolled', scrollY > 8);
  scrollQueued = false;
}
addEventListener('scroll', () => {
  if (!scrollQueued) { scrollQueued = true; requestAnimationFrame(updateHeader); }
}, {passive: true});
updateHeader();

// Content remains visible if animation support or JavaScript is unavailable.
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      observer.unobserve(entry.target);
      if (reducedMotion.matches || typeof entry.target.animate !== 'function') continue;
      entry.target.animate([{opacity: .65, transform: 'translateY(10px)'}, {opacity: 1, transform: 'translateY(0)'}], {duration: 400, easing: 'ease-out'});
    }
  }, {threshold: 0});
  document.querySelectorAll('.section-heading, .practice-card, .person-card, .article-section').forEach(element => observer.observe(element));
}

const normalise = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase(config.lang).trim();
const directory = document.querySelector('[data-filter-directory]');
if (directory) {
  const controls = directory.querySelector('[data-filter-controls]');
  const search = controls.querySelector('[data-filter-search]');
  const items = [...directory.querySelectorAll('[data-filter-item]')];
  const groups = [...directory.querySelectorAll('[data-filter-group]')];
  const count = controls.querySelector('[data-filter-count]');
  const empty = directory.querySelector('[data-filter-empty]');
  controls.hidden = false;
  function filter() {
    const group = controls.querySelector('input[name="group-filter"]:checked').value;
    const words = normalise(search.value).split(/\s+/).filter(Boolean);
    let visible = 0;
    for (const item of items) {
      const haystack = normalise(item.dataset.searchText);
      item.hidden = (group !== 'all' && item.dataset.group !== group) || !words.every(word => haystack.includes(word));
      if (!item.hidden) visible++;
    }
    groups.forEach(groupElement => { groupElement.hidden = ![...groupElement.querySelectorAll('[data-filter-item]')].some(item => !item.hidden); });
    count.textContent = `${visible} ${t.results}`;
    empty.hidden = visible !== 0;
  }
  controls.addEventListener('change', filter);
  search.addEventListener('input', filter);
  filter();
}

const searchDialog = document.querySelector('[data-search-dialog]');
const searchInput = searchDialog.querySelector('[data-site-search]');
const searchResults = searchDialog.querySelector('[data-search-results]');
const searchStatus = searchDialog.querySelector('[data-search-status]');
let searchData;
let searchLoad;
let searchReturnFocus;
let searchTimer;

async function loadSearch() {
  if (!searchLoad) searchLoad = fetch(config.searchIndex).then(response => {
    if (!response.ok) throw new Error('Search unavailable');
    return response.json();
  }).then(items => { searchData = items; return items; }).catch(error => { searchLoad = undefined; throw error; });
  return searchLoad;
}

function renderSearch() {
  if (!searchData) return;
  const query = normalise(searchInput.value);
  const words = query.split(/\s+/).filter(Boolean);
  const matches = searchData.map((item, index) => {
    const title = normalise(item.title);
    const text = normalise(`${item.title} ${item.description} ${item.keywords}`);
    return {item, index, score: (title === query ? 100 : title.startsWith(query) && query ? 20 : 0) + words.filter(word => title.includes(word)).length * 10 + item.priority, matches: words.every(word => text.includes(word))};
  }).filter(result => result.matches).sort((a, b) => b.score - a.score || a.index - b.index);
  searchResults.replaceChildren();
  searchStatus.textContent = matches.length ? `${matches.length} ${t.results}` : t.searchEmpty;
  for (const {item} of matches) {
    const row = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.href = new URL(item.path, new URL(config.rootPrefix, document.baseURI)).href;
    const kind = document.createElement('small'); kind.textContent = item.kind;
    const title = document.createElement('strong'); title.textContent = item.title;
    const description = document.createElement('p'); description.textContent = item.description;
    anchor.append(kind, title, description); row.append(anchor); searchResults.append(row);
  }
}

async function openSearch() {
  if (searchDialog.open) return;
  setMenu(false);
  searchReturnFocus = document.activeElement;
  searchDialog.showModal();
  document.body.classList.add('search-open');
  searchInput.focus();
  searchStatus.textContent = config.lang === 'pt' ? 'A pesquisar…' : 'Searching…';
  try { await loadSearch(); if (searchDialog.open) renderSearch(); }
  catch { searchStatus.textContent = t.searchUnavailable; }
}

if (typeof searchDialog.showModal === 'function') {
  document.querySelectorAll('[data-search-open]').forEach(button => {
    button.hidden = false;
    button.addEventListener('click', openSearch);
  });
  document.addEventListener('keydown', event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault(); openSearch();
    }
  });
}
searchDialog.querySelector('[data-search-close]').addEventListener('click', () => searchDialog.close());
searchDialog.addEventListener('click', event => {
  const bounds = searchDialog.getBoundingClientRect();
  if (event.target === searchDialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) searchDialog.close();
});
searchDialog.addEventListener('close', () => {
  document.body.classList.remove('search-open');
  searchReturnFocus?.focus();
});
searchInput.addEventListener('input', () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(renderSearch, 100);
});

const contents = document.querySelector('.page-index');
if (contents) {
  const small = matchMedia('(max-width: 720px)');
  if (small.matches) contents.open = false;
  const sectionLinks = [...contents.querySelectorAll('[data-section-link]')];
  contents.addEventListener('click', event => { if (small.matches && event.target.closest('a')) contents.open = false; });
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      const first = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (!first) return;
      sectionLinks.forEach(anchor => {
        if (anchor.hash === `#${first.target.id}`) anchor.setAttribute('aria-current', 'location');
        else anchor.removeAttribute('aria-current');
      });
    }, {rootMargin: '-110px 0px -45% 0px', threshold: 0});
    sectionLinks.forEach(anchor => { const section = document.getElementById(anchor.hash.slice(1)); if (section) sectionObserver.observe(section); });
  }
}

const contactForm = document.querySelector('[data-contact-form]');
if (contactForm) {
  const select = contactForm.querySelector('[data-contact-subject]');
  const area = new URLSearchParams(location.search).get('area');
  const selected = [...select.options].find(option => option.dataset.areaId === area);
  if (selected) select.value = selected.value;
  const submit = contactForm.querySelector('[data-submit-button]');
  const label = submit.querySelector('span');
  const submitIcon = submit.querySelector('i');
  const status = contactForm.querySelector('[data-form-status]');
  function showStatus(message, state) {
    status.textContent = message;
    status.dataset.state = state;
    status.hidden = false;
    status.scrollIntoView({behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'nearest'});
  }
  contactForm.addEventListener('submit', async event => {
    event.preventDefault();
    if (submit.disabled || !contactForm.reportValidity()) return;
    if (!navigator.onLine) { showStatus(t.offline, 'error'); return; }
    submit.disabled = true;
    contactForm.setAttribute('aria-busy', 'true');
    label.textContent = t.sending;
    submitIcon.className = 'fa-solid fa-circle-notch fa-spin';
    status.hidden = true;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(contactForm.action, {method: 'POST', body: new FormData(contactForm), headers: {Accept: 'application/json'}, signal: controller.signal});
      if (!response.ok) {
        showStatus(response.status === 429 ? t.limited : t.failed, 'error');
        return;
      }
      showStatus(t.sent, 'success');
      contactForm.reset();
      status.focus({preventScroll: true});
    } catch {
      showStatus(navigator.onLine ? t.failed : t.offline, 'error');
    } finally {
      clearTimeout(timeout);
      submit.disabled = false;
      contactForm.removeAttribute('aria-busy');
      label.textContent = t.send;
      submitIcon.className = 'fa-solid fa-arrow-right';
    }
  });
}

const mapButton = document.querySelector('[data-map-load]');
if (mapButton) {
  mapButton.hidden = false;
  mapButton.addEventListener('click', () => {
    const panel = document.querySelector('[data-map-panel]');
    const frame = document.createElement('iframe');
    frame.src = 'https://maps.google.com/maps?q=Avenida%20Miguel%20Bombarda%20147%20Lisboa&output=embed';
    frame.title = t.mapTitle;
    frame.referrerPolicy = 'no-referrer';
    frame.allowFullscreen = true;
    panel.replaceChildren(frame);
  }, {once: true});
}
