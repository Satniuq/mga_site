import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { firm, groups, practices, featured, people, institutional, copy } from '../src/site-data.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const allPages = [...institutional, ...practices];
const byId = new Map(allPages.map(page => [page.id, page]));
const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[char]));
const json = value => JSON.stringify(value).replace(/</g, '\\u003c');
const icon = name => `<i class="fa-solid fa-${name}" aria-hidden="true"></i>`;
const prefix = lang => lang === 'en' ? '../' : '';
const href = (id, lang) => byId.get(id).files[lang];
const pagePath = (page, lang) => `${lang === 'en' ? 'en/' : ''}${page.files[lang]}`;
const absolute = (page, lang) => `${firm.url}/${page.id === 'home' ? (lang === 'en' ? 'en/' : '') : pagePath(page, lang)}`;
const role = (person, lang) => person.roles?.[lang] ?? (person.type === 'admin' ? copy[lang].admin : person.trainee ? copy[lang].trainee : person.female ? copy[lang].lawyerFemale : copy[lang].lawyer);
const personPracticeLabel = (person, id, lang) => person.practiceLabels?.[id]?.[lang] ?? byId.get(id)[lang].title;
const paragraph = text => `<p>${escape(text)}</p>`;

const assetHash = createHash('sha256');
for (const asset of ['css/site.css', 'js/site.js']) assetHash.update(await readFile(path.join(root, asset)));
assetHash.update(JSON.stringify([firm, practices, people, copy]));
const version = assetHash.digest('hex').slice(0, 12);

function link(id, lang, label, className = '') {
  return `<a href="${href(id, lang)}"${className ? ` class="${className}"` : ''}>${escape(label ?? byId.get(id)[lang].title)}${className.includes('text-link') ? icon('arrow-right') : ''}</a>`;
}

function header(page, lang) {
  const t = copy[lang];
  const other = lang === 'pt' ? 'en' : 'pt';
  const alternate = lang === 'pt' ? `en/${page.files.en}` : `../${page.files.pt}`;
  const active = practices.includes(page) ? 'areas' : page.id;
  const navLink = id => `<a href="${href(id, lang)}"${active === id ? ' aria-current="page"' : ''}>${escape(t[id])}</a>`;
  return `<a class="skip-link" href="#main">${t.skip}</a>
<header class="site-header" data-header>
  <div class="header-inner container">
    <a class="brand" href="${href('home', lang)}" aria-label="${escape(firm.name)} · ${t.home}">
      <img src="${prefix(lang)}img/logo.webp" width="112" height="47" alt="MG&A" decoding="async">
      <span class="brand-name">${escape(firm.name)}<small>${lang === 'pt' ? 'Sociedade de Advogados, SP, RL' : 'Law Firm, SP, RL'}</small></span>
    </a>
    <nav class="primary-nav" id="site-navigation" aria-label="${lang === 'pt' ? 'Navegação principal' : 'Main navigation'}" data-navigation>
      ${navLink('home')}${navLink('about')}${navLink('team')}
      <div class="nav-areas">
        ${navLink('areas')}
        <button class="icon-button areas-toggle" type="button" aria-label="${t.submenu}" aria-expanded="false" aria-controls="practice-menu" data-areas-toggle title="${t.submenu}" hidden>${icon('chevron-down')}</button>
        <div class="mega-panel" id="practice-menu" hidden>
          <div class="container mega-inner">
            ${Object.entries(groups).map(([key, label]) => `<section><h2>${label[lang]}</h2><ul>${practices.filter(p => p.group === key && !['residence','d2','d7','ari','reunification'].includes(p.id)).map(p => `<li>${link(p.id, lang)}</li>`).join('')}</ul></section>`).join('')}
            <a class="mega-all text-link" href="${href('areas', lang)}">${t.allAreas}${icon('arrow-right')}</a>
          </div>
        </div>
      </div>
      ${navLink('contact')}
    </nav>
    <div class="header-actions">
      <button class="icon-button" type="button" data-search-open aria-label="${t.search}" aria-haspopup="dialog" aria-controls="site-search" title="${t.search}" hidden>${icon('magnifying-glass')}</button>
      <div class="language-switch" aria-label="${t.language}"><span aria-current="true">${lang.toUpperCase()}</span><a href="${alternate}" lang="${other}" hreflang="${other}" aria-label="${other === 'pt' ? 'Português' : 'English'}">${other.toUpperCase()}</a></div>
      <button class="icon-button menu-toggle" type="button" aria-label="${t.menu}" aria-expanded="false" aria-controls="site-navigation" data-menu-toggle hidden>${icon('bars')}</button>
    </div>
  </div>
</header>`;
}

function footer(lang) {
  const t = copy[lang];
  return `<footer class="site-footer">
  <div class="container footer-grid">
    <div class="footer-identity"><p class="footer-name">${escape(firm.name)}</p><p>${lang === 'pt' ? 'Sociedade de Advogados, SP, RL' : 'Law Firm, SP, RL'}<br>${lang === 'pt' ? 'Lisboa, desde 1998.' : 'Lisbon, since 1998.'}</p></div>
    <div><h2>${t.about}</h2><ul><li>${link('about', lang)}</li><li>${link('team', lang, t.team)}</li><li>${link('areas', lang, t.areas)}</li></ul></div>
    <div><h2>${t.contact}</h2><ul><li><a href="tel:${firm.phoneHref}">${firm.phone}</a></li><li><a href="mailto:${firm.email}">${firm.email}</a></li><li><a href="${href('contact', lang)}">${escape(firm.street)}<br>${firm.postcode} ${t.city}</a></li></ul></div>
    <div class="footer-practices"><h2>${lang === 'pt' ? 'Áreas de atuação' : 'Practice areas'}</h2><ul><li>${link('public', lang)}</li><li>${link('credit', lang)}</li><li>${link('corporate', lang)}</li></ul></div>
  </div>
  <div class="container footer-bottom"><p>© ${new Date().getUTCFullYear()} ${escape(firm.name)}</p><div>${link('privacy', lang, t.privacy)}${link('legal', lang, t.legal)}</div><a href="#top" class="back-top" aria-label="${t.backTop}" title="${t.backTop}">${icon('arrow-up')}</a></div>
</footer>`;
}

function searchDialog(lang) {
  const t = copy[lang];
  return `<dialog class="search-dialog" id="site-search" aria-labelledby="search-title" data-search-dialog>
  <div class="search-heading"><h2 id="search-title">${t.searchTitle}</h2><button type="button" class="icon-button" data-search-close aria-label="${t.close}" title="${t.close}">${icon('xmark')}</button></div>
  <label class="search-field"><span class="sr-only">${t.search}</span>${icon('magnifying-glass')}<input type="search" data-site-search autocomplete="off" placeholder="${t.searchPlaceholder}" aria-controls="site-search-results"></label>
  <p class="search-count" data-search-status role="status" aria-live="polite"></p>
  <ul class="search-results" id="site-search-results" data-search-results></ul>
  <div class="search-shortcuts">${link('areas', lang, t.allAreas, 'text-link')}${link('team', lang, t.viewTeam, 'text-link')}</div>
</dialog>`;
}

function contactBand(lang) {
  const t = copy[lang];
  return `<section class="contact-band"><div class="container contact-band-inner"><div><p class="eyebrow">${t.contact}</p><h2>${t.contactHeading}</h2><p>${t.contactText}</p></div>${link('contact', lang, t.contactAction, 'button button-light')}</div></section>`;
}

function picture(lang, className = '', priority = false) {
  return `<picture${className ? ` class="${className}"` : ''}><source type="image/webp" srcset="${prefix(lang)}img/office-768.webp 768w, ${prefix(lang)}img/office-1280.webp 1280w, ${prefix(lang)}img/office-1748.webp 1748w" sizes="${priority ? '100vw' : '(min-width: 900px) 50vw, 100vw'}"><img src="${prefix(lang)}img/office-1280.webp" width="1748" height="1240" alt="${lang === 'pt' ? 'Sala de reuniões' : 'Meeting room'}" ${priority ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"></picture>`;
}

function breadcrumb(page, lang) {
  if (page.id === 'home') return '';
  return `<nav class="breadcrumbs" aria-label="${lang === 'pt' ? 'Percurso de navegação' : 'Breadcrumb'}"><ol><li>${link('home', lang, copy[lang].home)}</li>${practices.includes(page) ? `<li>${link('areas', lang)}</li>` : ''}<li aria-current="page">${escape(page[lang].title)}</li></ol></nav>`;
}

function pageHeading(page, lang, description, eyebrow = '') {
  return `<div class="container page-heading">${breadcrumb(page, lang)}${eyebrow ? `<p class="eyebrow">${escape(eyebrow)}</p>` : ''}<h1>${escape(page[lang].title)}</h1>${description ? `<p class="page-lead">${escape(description)}</p>` : ''}</div>`;
}

function practiceCard(practice, lang, index, filter = false) {
  const data = practice[lang];
  return `<article class="practice-card"${filter ? ` data-filter-item data-group="${practice.group}" data-search-text="${escape(`${data.title} ${data.summary} ${data.services.join(' ')}`)}"` : ''}>
  <a href="${practice.files[lang]}"><span class="practice-card-top"><span class="practice-number">${String(index + 1).padStart(2, '0')}</span>${icon(practice.icon)}</span><h3>${escape(data.title)}</h3><p>${escape(data.summary)}</p><span class="card-link">${copy[lang].explore}${icon('arrow-right')}</span></a>
</article>`;
}

function home(lang) {
  const t = copy[lang];
  return `<main id="main">
  <section class="home-hero" aria-labelledby="hero-title">
    ${picture(lang, 'hero-image', true)}<div class="hero-shade"></div>
    <div class="container hero-content"><p class="hero-brand">${escape(firm.name)}</p><h1 id="hero-title">${lang === 'pt' ? 'Advogados em Lisboa<br>Desde 1998' : 'Legal Advice<br>in Portugal'}</h1><p class="hero-description">${lang === 'pt' ? 'Direito público e privado.<br> Acompanhamos pessoas, famílias e empresas.' : 'Public and private law.<br> A Lisbon law firm advising individuals, families and businesses since 1998.'}</p><div class="hero-actions">${link('contact', lang, t.contactAction, 'button')}${link('areas', lang, t.areas, 'button button-outline')}</div></div>
    <div class="hero-caption">${lang === 'pt' ? 'Miguel, Goes & Associados · Lisboa' : 'Miguel, Goes & Associados · Lisbon'}</div>
  </section>
  <section class="home-intro section-space"><div class="container intro-grid"><div><p class="eyebrow">${t.about}</p><h2>${lang === 'pt' ? 'Experiência no direito.<br> Proximidade na resposta.' : 'Experience in law.<br> Personal attention.'}</h2></div><div class="intro-copy"><p>${lang === 'pt' ? 'A Miguel, Goes & Associados é uma sociedade de advogados fundada em 1998. A nossa prática abrange as relações com o Estado e a Administração, a atividade empresarial e as questões da vida pessoal e familiar.' : 'Miguel, Goes & Associados is a law firm founded in 1998. Our practice covers dealings with public authorities, business activity, and personal and family matters.'}</p><p>${lang === 'pt' ? 'Trabalhamos na prevenção e na resolução de litígios, reunindo as áreas necessárias ao acompanhamento de cada assunto.' : 'We work to prevent and resolve disputes, bringing together the practice areas needed for each matter.'}</p>${link('about', lang, lang === 'pt' ? 'Conhecer a sociedade' : 'About the firm', 'text-link')}</div></div></section>
  <section class="featured-practices section-space"><div class="container"><div class="section-heading"><div><p class="eyebrow">${lang === 'pt' ? 'Áreas de atuação' : 'Practice areas'}</p><h2>${lang === 'pt' ? 'O direito, na sua realidade.' : 'Legal advice for real situations.'}</h2></div>${link('areas', lang, t.allAreas, 'text-link')}</div><div class="practice-grid">${featured.map((id, i) => practiceCard(byId.get(id), lang, i)).join('')}</div></div></section>
  <section class="experience-band"><div class="container experience-grid"><div><p class="eyebrow">${lang === 'pt' ? 'Uma prática consolidada' : 'An established practice'}</p><h2>${lang === 'pt' ? 'Direito Público.<br>Recuperação de crédito.' : 'Public Law.<br>Debt Recovery.'}</h2></div><div class="experience-links"><a href="${href('public', lang)}"><h3>${lang === 'pt' ? 'Perante a Administração' : 'Working with public authorities'}</h3><p>${lang === 'pt' ? 'Procedimentos, contratação pública, urbanismo e defesa de direitos perante entidades públicas.' : 'Administrative procedures, public procurement, urban planning and protection of rights.'}</p>${icon('arrow-right')}</a><a href="${href('credit', lang)}"><h3>${lang === 'pt' ? 'Mais de 20 anos em recuperação de crédito' : 'Over 20 years in debt recovery'}</h3><p>${lang === 'pt' ? 'Crédito ao consumo e hipotecário, execuções e gestão de processos em massa.' : 'Consumer and mortgage debt, enforcement and high-volume case management.'}</p>${icon('arrow-right')}</a></div></div></section>
  <section class="home-team section-space"><div class="container"><div class="section-heading"><div><p class="eyebrow">${t.team}</p><h2>${lang === 'pt' ? 'Conheça quem acompanha o seu assunto.' : 'Meet the people behind the advice.'}</h2></div>${link('team', lang, t.viewTeam, 'text-link')}</div><div class="home-people">${people.slice(0, 4).map(p => `<a href="${href('team', lang)}#${p.id}"><span class="person-monogram">${p.initials}</span><h3>${escape(p.name)}</h3><p>${escape(p.practices.slice(0, 2).map(id => byId.get(id)[lang].title).join(' · '))}</p>${icon('arrow-right')}</a>`).join('')}</div></div></section>
  ${contactBand(lang)}
</main>`;
}

function filters(kind, lang) {
  const t = copy[lang];
  const options = kind === 'areas' ? [['all', t.all], ...Object.entries(groups).map(([id, value]) => [id, value[lang]])] : [['all', t.all], ['legal', t.legalTeam], ['admin', t.adminTeam]];
  const label = kind === 'areas' ? t.filterAreas : t.filterPeople;
  return `<div class="filter-bar" data-filter-controls hidden><fieldset class="segmented-control"><legend class="sr-only">${lang === 'pt' ? 'Filtrar por grupo' : 'Filter by group'}</legend>${options.map(([value, name], i) => `<label><input type="radio" name="group-filter" value="${value}"${i === 0 ? ' checked' : ''}><span>${escape(name)}</span></label>`).join('')}</fieldset><label class="filter-search">${icon('magnifying-glass')}<span class="sr-only">${label}</span><input type="search" placeholder="${label}" data-filter-search autocomplete="off"></label><p class="sr-only" data-filter-count role="status" aria-live="polite"></p></div>`;
}

function areasPage(page, lang) {
  const t = copy[lang];
  return `<main id="main">${pageHeading(page, lang, lang === 'pt' ? 'Direito público e privado. Uma prática organizada em torno dos assuntos e das pessoas que os acompanham.' : 'Public and private law. A practice built around the matters we handle and the people who handle them.')}<div class="container directory" data-filter-directory>${filters('areas', lang)}${Object.entries(groups).map(([key, group]) => `<section class="directory-group" data-filter-group><div class="directory-group-heading"><span class="eyebrow">${group[lang]}</span><h2>${lang === 'pt' ? ({public: 'Estado, Administração e território', business: 'Empresas, trabalho e recuperação de crédito', people: 'Vida pessoal, património e litígios'})[key] : ({public: 'Public authorities and planning', business: 'Business, employment and debt recovery', people: 'Personal matters, property and disputes'})[key]}</h2></div><div class="practice-grid">${practices.filter(p => p.group === key && !['residence','d2','d7','ari','reunification'].includes(p.id)).map((p, i) => practiceCard(p, lang, i, true)).join('')}</div></section>`).join('')}<p class="empty-state" data-filter-empty hidden>${t.noAreas}</p></div>${contactBand(lang)}</main>`;
}

function teamPage(page, lang) {
  const t = copy[lang];
  return `<main id="main">${pageHeading(page, lang, lang === 'pt' ? 'Conheça os profissionais, as suas áreas de atuação e os contactos diretos.' : 'Meet our professionals, explore their practice areas and find their direct contact details.')}<div class="container directory team-directory" data-filter-directory>${filters('people', lang)}${['legal','admin'].map(type => `<section class="directory-group" data-filter-group><div class="directory-group-heading"><h2>${type === 'legal' ? t.legalTeam : t.adminTeam}</h2></div><div class="people-grid">${people.filter(p => p.type === type).map(p => `<article class="person-card" id="${p.id}" data-filter-item data-group="${p.type}" data-search-text="${escape(`${p.name} ${role(p, lang)} ${p.practices.map(id => personPracticeLabel(p, id, lang)).join(' ')}`)}"><span class="person-monogram">${p.initials}</span><h3>${escape(p.name)}</h3><p class="person-role">${role(p, lang)}</p>${p.practices.length ? `<ul class="person-practices">${p.practices.map(id => `<li>${link(id, lang, personPracticeLabel(p, id, lang))}</li>`).join('')}</ul>` : ''}${p.email ? `<a class="person-email" href="mailto:${p.email}">${icon('envelope')}<span>${p.email}</span></a>` : ''}</article>`).join('')}</div></section>`).join('')}<p class="empty-state" data-filter-empty hidden>${t.noPeople}</p></div>${contactBand(lang)}</main>`;
}

function aboutPage(page, lang) {
  const t = copy[lang];
  const sections = lang === 'pt' ? [
    ['Prevenir', 'Analisar documentos, contratos e procedimentos antes de uma decisão, identificando riscos e alternativas.'],
    ['Resolver', 'Definir a resposta quando existe conflito, incumprimento ou uma decisão que exige reação.'],
    ['Acompanhar', 'Assegurar continuidade, informação ao cliente e articulação entre as áreas necessárias.'],
  ] : [
    ['Prevent', 'Review documents, contracts and procedures before a decision, identifying risks and alternatives.'],
    ['Resolve', 'Develop a response to a dispute, breach of obligations or decision that needs to be challenged.'],
    ['Follow through', 'Provide continuity, keep clients informed and coordinate the practice areas a matter requires.'],
  ];
  return `<main id="main">${pageHeading(page, lang, lang === 'pt' ? 'Uma sociedade de advogados em Lisboa, fundada em 1998, com prática em direito público e direito privado.': 'A Lisbon law firm founded in 1998, advising on public law and private law matters.')}<section class="container about-intro"><div class="prose"><p class="eyebrow">Miguel, Goes & Associados</p><h2>${lang === 'pt' ? 'Uma história construída<br>no acompanhamento dos clientes.' : 'Built on lasting<br>client relationships.'}</h2><p>${lang === 'pt' ? 'A nossa prática abrange as relações do cidadão e das empresas com o Estado e a Administração, bem como as relações jurídicas entre pessoas, famílias, empresas e investidores.' : 'Our practice covers the relationship between individuals, businesses and public authorities, as well as legal matters involving individuals, families, companies and investors.'}</p><p>${lang === 'pt' ? 'O direito público e a recuperação de crédito fazem parte da experiência consolidada da sociedade. As restantes áreas de direito privado completam uma resposta que atende ao assunto e ao contexto de cada cliente.' : 'Public law and debt recovery form part of the firm’s established experience. Our other private law practices support advice tailored to each matter and each client’s circumstances.'}</p></div>${picture(lang, 'about-image')}</section><section class="about-method section-space"><div class="container"><div class="section-heading"><div><p class="eyebrow">${lang === 'pt' ? 'Forma de atuação' : 'Our approach'}</p><h2>${lang === 'pt' ? 'Atenção ao assunto.<br>Continuidade na resposta.' : 'Attention to the matter.<br>Continuity in our work.'}</h2></div></div><div class="method-grid">${sections.map(([title, text], i) => `<article><span class="practice-number">0${i + 1}</span><h3>${title}</h3><p>${text}</p></article>`).join('')}</div></div></section><section class="container about-people section-space"><div><p class="eyebrow">${t.team}</p><h2>${lang === 'pt' ? 'A experiência tem pessoas.' : 'Experience comes from people.'}</h2></div><div class="prose"><p>${lang === 'pt' ? 'A organização das áreas parte da experiência dos profissionais e da natureza dos assuntos que acompanham. O contacto direto e a colaboração entre áreas permitem tratar o problema sem perder a visão do conjunto.' : 'Our practice areas reflect the experience of our professionals and the matters they handle. Direct contact and collaboration across practices help us address each issue within its wider context.'}</p>${link('team', lang, t.viewTeam, 'text-link')}</div></section>${contactBand(lang)}</main>`;
}

function practicePage(page, lang) {
  const data = page[lang];
  const t = copy[lang];
  const sectionIds = ['services', ...data.sections.map((_, i) => `section-${i + 1}`)];
  const headings = [t.services, ...data.sections.map(s => s[0])];
  const topics = practices.filter(practice => practice.parentPractice === page.id);
  const topicsTitle = lang === 'pt' ? 'Vistos e residência em Portugal' : 'Visas and residence in Portugal';
  if (topics.length) { sectionIds.unshift('topics'); headings.unshift(topicsTitle); }
  const topicsSection = topics.length ? `<section class="article-section practice-topics" id="topics" aria-labelledby="topics-title"><h2 id="topics-title">${topicsTitle}</h2><ul class="practice-topic-list">${topics.map(topic => `<li><a href="${href(topic.id, lang)}"><div><h3>${escape(topic[lang].title)}</h3><p>${escape(topic[lang].summary)}</p></div>${icon('arrow-right')}</a></li>`).join('')}</ul></section>` : '';
  if (page.people.length) { sectionIds.push('people'); headings.push(t.associatedTeam); }
  return `<main id="main">${pageHeading(page, lang, data.summary, groups[page.group][lang])}<div class="container practice-layout"><aside class="practice-aside"><details class="page-index" open><summary>${t.contents}${icon('chevron-down')}</summary><nav aria-label="${t.contents}"><ul>${headings.map((text, i) => `<li><a href="#${sectionIds[i]}" data-section-link>${escape(text)}</a></li>`).join('')}</ul></nav></details><a class="aside-contact" href="${href('contact', lang)}?area=${page.id}">${t.topicAction}${icon('arrow-right')}</a></aside><article class="practice-content"><div class="practice-intro prose">${paragraph(data.intro)}</div>${topicsSection}<section class="article-section" id="services"><h2>${t.services}</h2><ul class="service-list">${data.services.map(s => `<li>${icon('check')}<span>${escape(s)}</span></li>`).join('')}</ul></section>${data.sections.map(([title, ...paragraphs], i) => `<section class="article-section prose" id="section-${i + 1}"><h2>${escape(title)}</h2>${paragraphs.map(paragraph).join('')}</section>`).join('')}${page.people.length ? `<section class="article-section associated-people" id="people"><h2>${t.associatedTeam}</h2><ul>${page.people.map(id => { const person = people.find(p => p.id === id); return `<li><a href="${href('team', lang)}#${id}"><span><strong>${escape(person.name)}</strong><small>${role(person, lang)}</small></span>${icon('arrow-right')}</a></li>`; }).join('')}</ul></section>` : ''}${page.resources?.length ? `<section class="official-resources"><h2>${t.official}</h2>${page.resources.map(r => `<a href="${r.url}" target="_blank" rel="noopener noreferrer">${escape(r.label[lang])}${icon('arrow-up-right-from-square')}</a>`).join('')}</section>` : ''}<section class="article-contact"><h2>${lang === 'pt' ? 'Tem um assunto nesta área?' : 'Do you need advice in this area?'}</h2><p>${lang === 'pt' ? 'Envie-nos o contexto essencial e os seus contactos. O pedido será encaminhado para a área adequada.' : 'Send us a brief outline and your contact details. We will direct your enquiry to the appropriate practice.'}</p><a class="button" href="${href('contact', lang)}?area=${page.id}">${t.topicAction}${icon('arrow-right')}</a></section></article></div><section class="related-practices section-space"><div class="container"><p class="eyebrow">${t.related}</p><div class="related-grid">${page.related.map(id => `<a href="${href(id, lang)}"><h2>${escape(byId.get(id)[lang].title)}</h2>${icon('arrow-right')}</a>`).join('')}</div></div></section></main>`;
}

function contactPage(page, lang) {
  const t = copy[lang];
  return `<main id="main">${pageHeading(page, lang, lang === 'pt' ? 'Para agendar uma reunião ou colocar uma questão à sociedade.' : 'Contact the firm to arrange a meeting or discuss a legal matter.')}<div class="container contact-layout"><section class="contact-details"><p class="eyebrow">${lang === 'pt' ? 'Contacto direto' : 'Direct contact'}</p><h2>${t.contactHeading}</h2><dl><div><dt>${t.phoneLabel}</dt><dd><a href="tel:${firm.phoneHref}">${firm.phone}</a></dd></div><div><dt>${t.emailLabel}</dt><dd><a href="mailto:${firm.email}">${firm.email}</a></dd></div><div><dt>${t.addressLabel}</dt><dd>${escape(firm.street)}<br>${firm.postcode} ${t.city}</dd></div></dl><a class="text-link" href="https://www.google.com/maps/search/?api=1&amp;query=Avenida+Miguel+Bombarda+147+Lisboa" target="_blank" rel="noopener noreferrer">${t.openMap}${icon('arrow-up-right-from-square')}</a></section><section class="contact-form-panel" aria-labelledby="form-title" id="contact-form"><h2 id="form-title">${lang === 'pt' ? 'Envie-nos uma mensagem' : 'Send us a message'}</h2><form class="contact-form" action="${firm.formEndpoint}" method="POST" data-contact-form><div class="form-row"><div class="field"><label for="name">${t.name} <span aria-hidden="true">*</span></label><input id="name" name="name" type="text" autocomplete="name" maxlength="160" required></div><div class="field"><label for="email">${t.email} <span aria-hidden="true">*</span></label><input id="email" name="email" type="email" autocomplete="email" maxlength="254" required></div></div><div class="field"><label for="subject">${t.subject}</label><select id="subject" name="subject" data-contact-subject><option value="${t.general}">${t.general}</option>${practices.map(p => `<option value="${escape(p[lang].title)}" data-area-id="${p.id}">${escape(p[lang].title)}</option>`).join('')}</select></div><div class="field"><label for="message">${t.message} <span aria-hidden="true">*</span></label><textarea id="message" name="message" rows="6" maxlength="10000" required aria-describedby="message-hint"></textarea><p class="field-hint" id="message-hint">${escape(t.messageHint)}</p></div><div class="honeypot" aria-hidden="true"><label for="company-website">Website</label><input id="company-website" name="_gotcha" type="text" tabindex="-1" autocomplete="off"></div><input type="hidden" name="_language" value="${lang}"><p class="form-privacy">${t.formPrivacy} ${link('privacy', lang, t.privacyLink)}</p><div class="form-actions"><button class="button" type="submit" data-submit-button><span>${t.send}</span>${icon('arrow-right')}</button><span class="required-note">* ${t.required}</span></div><p class="form-status" role="status" aria-live="polite" tabindex="-1" data-form-status hidden></p></form></section></div><section class="office-section section-space"><div class="container"><div class="section-heading"><div><p class="eyebrow">${t.city}</p><h2>${lang === 'pt' ? 'O escritório' : 'Our office'}</h2></div><p>${escape(firm.street)}<br>${firm.postcode} ${t.city}</p></div><div class="map-panel" data-map-panel><div class="map-facade">${picture(lang)}<div class="map-facade-action"><button type="button" class="button button-light" data-map-load hidden>${icon('location-dot')}${t.map}</button><a href="https://www.google.com/maps/search/?api=1&amp;query=Avenida+Miguel+Bombarda+147+Lisboa" target="_blank" rel="noopener noreferrer">${t.openMap}${icon('arrow-up-right-from-square')}</a></div></div></div></div></section></main>`;
}

function legalContent(lang) {
  return lang === 'pt' ? [
    ['Identificação', [`Este site é disponibilizado por ${firm.legalName}, com escritório em ${firm.street}, ${firm.postcode} Lisboa.`, `Telefone: ${firm.phone}. Email: ${firm.email}. A atividade da sociedade está sujeita à legislação portuguesa e às regras profissionais aplicáveis à advocacia.`]],
    ['Natureza dos conteúdos', ['Os conteúdos têm natureza informativa e geral. Não constituem aconselhamento jurídico para um caso concreto nem substituem a análise dos factos e documentos relevantes.', 'O envio de um pedido de contacto não constitui, por si só, a aceitação de um mandato ou o início de uma relação de prestação de serviços jurídicos. As condições de intervenção são acordadas com o cliente.']],
    ['Atualização e utilização', ['Procuramos manter os conteúdos corretos e atuais. A aplicação de uma norma ou procedimento deve ser confirmada tendo em conta a situação e o momento da consulta.', 'Os textos, fotografias e sinais distintivos são utilizados no âmbito deste site. A sua reprodução ou utilização por terceiros depende da autorização dos respetivos titulares de direitos.']],
    ['Ligações externas', ['As ligações para entidades e recursos externos destinam-se a facilitar a consulta. Os conteúdos e as condições de utilização desses serviços são da responsabilidade dos respetivos prestadores.']],
    ['Contacto', [`Para questões relativas ao site ou à sociedade, contacte ${firm.email} ou ${firm.phone}.`]],
  ] : [
    ['Identification', [`This website is provided by ${firm.legalName}, with an office at ${firm.street}, ${firm.postcode} Lisbon, Portugal.`, `Telephone: ${firm.phone}. Email: ${firm.email}. The firm’s practice is subject to Portuguese law and the professional rules governing the legal profession.`]],
    ['Nature of the information', ['The content is general information. It is not legal advice on a particular case and does not replace an assessment of the relevant facts and documents.', 'Sending an enquiry does not in itself mean that the firm has accepted instructions or that a lawyer-client relationship has been established. The terms of any engagement are agreed with the client.']],
    ['Updates and use', ['We aim to keep the content accurate and current. The application of any rule or procedure should be checked against the circumstances and at the time advice is sought.', 'Text, photographs and branding are used for the purposes of this website. Reproduction or use by third parties requires the permission of the relevant rights holders.']],
    ['External links', ['Links to external organisations and resources are provided for reference. Their content and terms of use are the responsibility of the relevant providers.']],
    ['Contact', [`For enquiries about the website or firm, contact ${firm.email} or ${firm.phone}.`]],
  ];
}

function privacyContent(lang) {
  return lang === 'pt' ? [
    ['Responsável pelo tratamento', [`${firm.legalName} é responsável pelos dados recebidos através dos pedidos de contacto. Pode contactar-nos em ${firm.email}, por telefone para ${firm.phone}, ou por correio para ${firm.street}, ${firm.postcode} Lisboa.`]],
    ['Dados e finalidades', ['O formulário recolhe o nome, o email, o assunto e a mensagem que o utilizador envia. Estes elementos são tratados para analisar e responder ao pedido e, quando aplicável, preparar uma eventual prestação de serviços.', 'O tratamento de um pedido de serviços pode assentar em diligências pré-contratuais solicitadas pelo titular. Outras comunicações são tratadas para responder ao pedido, ponderando os interesses legítimos envolvidos. Obrigações legais e profissionais podem justificar tratamentos adicionais.']],
    ['Prestadores e serviços externos', ['O formulário utiliza o Formspree para receber e encaminhar mensagens. O prestador de alojamento pode tratar dados técnicos de acesso para funcionamento e segurança do site.', 'O mapa Google só é carregado quando o utilizador pede para o visualizar. A abertura do mapa ou de uma ligação externa estabelece uma ligação com o respetivo serviço, sujeito às suas próprias condições e política de privacidade.', 'O Formspree indica que utiliza infraestrutura nos Estados Unidos e que pode tratar dados nesse país. As transferências internacionais estão sujeitas às condições do RGPD e às garantias aplicáveis. A informação do prestador pode ser consultada nas ligações abaixo.']],
    ['Conservação', ['Os pedidos e os dados associados são conservados durante o período necessário ao seu tratamento e seguimento. A duração depende da natureza do pedido, da existência de uma relação profissional e dos prazos legais ou profissionais aplicáveis.']],
    ['Direitos', ['Nos termos aplicáveis, pode solicitar acesso, retificação, apagamento, limitação, portabilidade ou oposição ao tratamento. Quando o tratamento assente no consentimento, pode retirá-lo sem afetar a licitude do tratamento anterior.', `Os pedidos de exercício de direitos devem ser dirigidos a ${firm.email}. Pode apresentar reclamação à Comissão Nacional de Proteção de Dados (CNPD).`]],
    ['Cookies e navegação', ['Esta versão do site não utiliza cookies próprios de publicidade ou de medição estatística. As imagens, os tipos de letra e os ícones são servidos pelo próprio site. Os serviços externos utilizados a pedido do utilizador podem aplicar as suas próprias tecnologias de navegação.']],
    ['Alterações', ['Esta política será atualizada quando existam alterações relevantes nos tratamentos ou nos serviços utilizados. A data da versão encontra-se indicada nesta página.']],
  ] : [
    ['Data controller', [`${firm.legalName} is responsible for personal data received through enquiries. Contact us at ${firm.email}, by telephone on ${firm.phone}, or by post at ${firm.street}, ${firm.postcode} Lisbon, Portugal.`]],
    ['Data and purposes', ['The contact form collects the name, email address, subject and message you provide. We use this information to assess and respond to the enquiry and, where relevant, prepare a possible engagement.', 'An enquiry about services may be processed to take pre-contractual steps at your request. Other communications are processed to respond to the enquiry, taking account of the legitimate interests involved. Legal and professional obligations may require additional processing.']],
    ['Service providers and external services', ['The contact form uses Formspree to receive and forward messages. The hosting provider may process technical access information to operate and secure the website.', 'The Google map is loaded only when you request it. Opening the map or an external link connects you to the relevant service, which has its own terms and privacy policy.', 'Formspree states that it uses infrastructure in the United States and may process data there. International transfers are subject to the GDPR and applicable safeguards. Provider information is available through the links below.']],
    ['Retention', ['Enquiries and related data are kept for as long as needed to handle and follow up the request. The period depends on the nature of the enquiry, any professional relationship and applicable legal or professional retention requirements.']],
    ['Your rights', ['Subject to the applicable conditions, you may request access, rectification, erasure, restriction, portability or object to processing. Where processing is based on consent, you may withdraw it without affecting the lawfulness of earlier processing.', `Send requests concerning your rights to ${firm.email}. You may also complain to the Portuguese data protection authority, the CNPD.`]],
    ['Cookies and browsing', ['This version of the website does not use its own advertising or statistical measurement cookies. Images, fonts and icons are served by the website itself. External services opened at your request may use their own browsing technologies.']],
    ['Changes', ['This policy will be updated when there are relevant changes to processing or service providers. The version date is shown on this page.']],
  ];
}

function policyPage(page, lang) {
  const t = copy[lang];
  const content = page.id === 'privacy' ? privacyContent(lang) : legalContent(lang);
  return `<main id="main">${pageHeading(page, lang, page[lang].description)}<div class="container policy-layout"><p class="version-date">${t.updated}</p><article class="policy-content prose">${content.map(([heading, paragraphs], i) => `<section id="policy-${i + 1}"><h2>${escape(heading)}</h2>${paragraphs.map(paragraph).join('')}</section>`).join('')}${page.id === 'privacy' ? `<section><h2>${lang === 'pt' ? 'Informação adicional' : 'Further information'}</h2><ul class="policy-links"><li><a href="https://formspree.io/legal/privacy-policy/" rel="noopener noreferrer" target="_blank">Formspree${icon('arrow-up-right-from-square')}</a></li><li><a href="https://policies.google.com/privacy" rel="noopener noreferrer" target="_blank">Google${icon('arrow-up-right-from-square')}</a></li><li><a href="https://www.cnpd.pt/" rel="noopener noreferrer" target="_blank">CNPD${icon('arrow-up-right-from-square')}</a></li></ul></section>` : ''}</article></div></main>`;
}

function schema(page, lang) {
  const base = { '@type': 'LegalService', '@id': `${firm.url}/#firm`, name: firm.name, legalName: firm.legalName, url: `${firm.url}/`, foundingDate: firm.founded, image: `${firm.url}/img/office-1280.webp`, logo: `${firm.url}/img/logo.webp`, telephone: firm.phoneHref, email: firm.email, address: { '@type': 'PostalAddress', streetAddress: firm.street, postalCode: firm.postcode, addressLocality: 'Lisboa', addressCountry: 'PT' }, areaServed: { '@type': 'Country', name: 'Portugal' } };
  const graph = [base, { '@type': 'WebPage', '@id': `${absolute(page, lang)}#page`, url: absolute(page, lang), name: page[lang].title, inLanguage: lang === 'pt' ? 'pt-PT' : 'en', about: { '@id': base['@id'] } }];
  if (page.id !== 'home') {
    const crumbs = [{id: 'home', name: copy[lang].home}, ...(practices.includes(page) ? [{id: 'areas', name: copy[lang].areas}] : []), {id: page.id, name: page[lang].title}];
    graph.push({ '@type': 'BreadcrumbList', itemListElement: crumbs.map((crumb, i) => ({ '@type': 'ListItem', position: i + 1, name: crumb.name, item: absolute(byId.get(crumb.id), lang) })) });
  }
  if (page.id === 'team') graph.push(...people.map(person => ({ '@type': 'Person', '@id': `${absolute(page, lang)}#${person.id}`, name: person.name, jobTitle: role(person, lang), worksFor: { '@id': base['@id'] }, ...(person.email ? {email: person.email} : {}), knowsAbout: person.practices.map(id => byId.get(id)[lang].title) })));
  return json({ '@context': 'https://schema.org', '@graph': graph });
}

function render(page, lang) {
  const data = page[lang];
  const description = data.description ?? data.summary;
  const title = page.id === 'home' ? data.title : `${data.title} | MGA · Advogados em Lisboa`.replace('Advogados em Lisboa', lang === 'pt' ? 'Advogados em Lisboa' : 'Lawyers in Lisbon');
  const renderers = {home, about: aboutPage, team: teamPage, areas: areasPage, contact: contactPage, privacy: policyPage, legal: policyPage};
  const content = page.id === 'home' ? home(lang) : renderers[page.id] ? renderers[page.id](page, lang) : practicePage(page, lang);
  return `<!doctype html>
<html lang="${lang === 'pt' ? 'pt-PT' : 'en'}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escape(title)}</title>
  <meta name="description" content="${escape(description)}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <meta name="theme-color" content="#ffffff">
  <link rel="canonical" href="${absolute(page, lang)}">
  <link rel="alternate" hreflang="pt-PT" href="${absolute(page, 'pt')}">
  <link rel="alternate" hreflang="en" href="${absolute(page, 'en')}">
  <link rel="alternate" hreflang="x-default" href="${absolute(page, 'pt')}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${escape(firm.name)}">
  <meta property="og:title" content="${escape(title)}">
  <meta property="og:description" content="${escape(description)}">
  <meta property="og:url" content="${absolute(page, lang)}">
  <meta property="og:locale" content="${lang === 'pt' ? 'pt_PT' : 'en_GB'}">
  <meta property="og:locale:alternate" content="${lang === 'pt' ? 'en_GB' : 'pt_PT'}">
  <meta property="og:image" content="${firm.url}/img/office-1280.webp">
  <meta property="og:image:alt" content="${lang === 'pt' ? 'Sala de reuniões' : 'Meeting room'}">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="${prefix(lang)}favicon.ico">
  <link rel="stylesheet" href="${prefix(lang)}assets/fontawesome/css/all.min.css">
  <link rel="stylesheet" href="${prefix(lang)}css/site.css?v=${version}">
  <script type="application/ld+json">${schema(page, lang)}</script>
</head>
<body id="top" class="page-${page.id}" data-lang="${lang}">
${header(page, lang)}
${content}
${footer(lang)}
${searchDialog(lang)}
<script type="application/json" id="site-config">${json({lang, rootPrefix: lang === 'en' ? '../' : './', searchIndex: `${prefix(lang)}js/search-${lang}.json?v=${version}`, strings: copy[lang]})}</script>
<script src="${prefix(lang)}js/site.js?v=${version}" type="module"></script>
</body>
</html>
`;
}

await mkdir(path.join(root, 'en'), { recursive: true });
for (const lang of ['pt', 'en']) {
  for (const page of allPages) await writeFile(path.join(root, pagePath(page, lang)), render(page, lang), 'utf8');
  const index = allPages.map(page => ({title: page[lang].title, description: page[lang].description ?? page[lang].summary, kind: practices.includes(page) ? copy[lang].practice : copy[lang].pages, path: pagePath(page, lang), keywords: page[lang].services?.join(' ') ?? '', priority: featured.includes(page.id) || ['home','team','contact','areas'].includes(page.id) ? 1 : 0}));
  index.push(...people.map(person => ({title: person.name, description: person.practices.map(id => personPracticeLabel(person, id, lang)).join(' · ') || role(person, lang), kind: copy[lang].person, path: `${pagePath(byId.get('team'), lang)}#${person.id}`, keywords: person.email ?? '', priority: 0})));
  await writeFile(path.join(root, `js/search-${lang}.json`), `${JSON.stringify(index)}\n`, 'utf8');
}

const urls = allPages.flatMap(page => ['pt','en'].map(lang => `  <url><loc>${absolute(page, lang)}</loc><lastmod>${firm.updated}</lastmod>${['pt','en'].map(other => `<xhtml:link rel="alternate" hreflang="${other === 'pt' ? 'pt-PT' : 'en'}" href="${absolute(page, other)}"/>`).join('')}</url>`));
await writeFile(path.join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`, 'utf8');
await writeFile(path.join(root, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /src/\nDisallow: /scripts/\nDisallow: /tests/\nSitemap: ${firm.url}/sitemap.xml\n`, 'utf8');
console.log(`Built ${allPages.length * 2} pages; asset version ${version}.`);
