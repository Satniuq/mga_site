import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { practices, featured, people, institutional } from '../src/site-data.mjs';

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

test('Carla has commercial and civil practice with particular focus on family law in both languages', async () => {
  const carla = people.find(person => person.id === 'cfs');
  for (const id of ['criminal', 'corporate', 'civil', 'family', 'litigation']) {
    assert.ok(carla.practices.includes(id));
  }
  for (const lang of ['pt', 'en']) {
    const teamPath = lang === 'pt' ? 'equipa.html' : 'en/team.html';
    const html = await readFile(new URL(`../${teamPath}`, import.meta.url), 'utf8');
    const card = html.match(/<article[^>]*id="cfs"[\s\S]*?<\/article>/)?.[0];
    assert.ok(card);
    assert.ok(card.includes(carla.practiceLabels.family[lang]));
    for (const id of ['corporate', 'civil']) {
      const practice = practices.find(item => item.id === id);
      assert.ok(practice.people.includes(carla.id));
      assert.ok(card.includes(`href="${practice.files[lang]}"`));
      const practicePath = `${lang === 'en' ? 'en/' : ''}${practice.files[lang]}`;
      const practiceHtml = await readFile(new URL(`../${practicePath}`, import.meta.url), 'utf8');
      assert.ok(practiceHtml.includes(`href="${teamPath.split('/').pop()}#cfs"`));
    }
    const index = JSON.parse(await readFile(new URL(`../js/search-${lang}.json`, import.meta.url), 'utf8'));
    assert.ok(index.find(item => item.title === carla.name).description.includes(carla.practiceLabels.family[lang]));
  }
});

test('existing public URLs are preserved and every page has its own language pair', () => {
  assert.equal(pages.length, 26);
  for (const lang of ['pt', 'en']) {
    const files = pages.map(page => page.files[lang]);
    assert.equal(new Set(files).size, files.length);
  }
  assert.equal(practices.find(practice => practice.id === 'credit').files.en, 'credit-recovery-process-management.html');
  assert.equal(practices.find(practice => practice.id === 'succession').files.en, 'family-succession-estate-planning.html');
});
