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

test('both published team pages contain the same 12 people and no sample portrait', async () => {
  const [pt, en] = await Promise.all(['equipa.html','en/team.html'].map(file => readFile(new URL(`../${file}`, import.meta.url), 'utf8')));
  for (const person of people) {
    assert.ok(pt.includes(`id="${person.id}"`));
    assert.ok(en.includes(`id="${person.id}"`));
  }
  assert.equal(people.length, 12);
  assert.ok(!pt.includes('jsmiguel.jpg') && !en.includes('jsmiguel.jpg'));
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
