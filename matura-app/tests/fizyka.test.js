import test from 'node:test';
import assert from 'node:assert/strict';
import { loadComponent } from './helpers/component-loader.js';

const { FIZYKA_LEVELS } = await loadComponent('/src/data/fizyka/index.js');
const { PHYSICS_DIAGRAMS } = await loadComponent('/src/data/fizyka/diagrams/index.jsx');
const { default: App } = await loadComponent('/src/App.jsx');
const React = (await import('react')).default;
const { renderToStaticMarkup } = await import('react-dom/server');

test('Physics Course (FIZYKA_LEVELS): 12 departments, unique IDs, valid SVG diagrams & CKE tasks', () => {
  assert.equal(FIZYKA_LEVELS.length, 12);

  const noteIds = new Set();
  const cardIds = new Set();
  const quizIds = new Set();
  const taskIds = new Set();

  FIZYKA_LEVELS.forEach((dept, idx) => {
    assert.equal(dept.id, `phys-${String(idx + 1).padStart(2, '0')}`);
    assert.equal(dept.displayNum, idx + 1);
    assert.ok(dept.title && dept.subtitle && dept.duration);
    assert.ok(Array.isArray(dept.notes) && dept.notes.length >= 3, `${dept.id} should have >=3 note sections`);
    assert.ok(Array.isArray(dept.flashcards) && dept.flashcards.length >= 4, `${dept.id} should have >=4 flashcards`);
    assert.ok(Array.isArray(dept.quiz) && dept.quiz.length >= 2, `${dept.id} should have >=2 quiz questions`);
    assert.ok(Array.isArray(dept.examTasks) && dept.examTasks.length >= 1, `${dept.id} should have >=1 CKE task`);

    for (const note of dept.notes) {
      assert.ok(!noteIds.has(note.id), `Duplicate note id: ${note.id}`);
      noteIds.add(note.id);
      for (const block of note.blocks || []) {
        if (block.type === 'diagram') {
          assert.ok(
            typeof PHYSICS_DIAGRAMS[block.svgId] === 'function',
            `Missing SVG diagram ${block.svgId} in ${dept.id}`
          );
        }
      }
    }

    for (const card of dept.flashcards) {
      assert.ok(!cardIds.has(card.id), `Duplicate flashcard id: ${card.id}`);
      cardIds.add(card.id);
      assert.ok(card.front && card.back);
    }

    for (const q of dept.quiz) {
      assert.ok(!quizIds.has(q.id), `Duplicate quiz id: ${q.id}`);
      quizIds.add(q.id);
      assert.equal(q.options.length, 4);
      assert.ok(q.correct >= 0 && q.correct <= 3);
    }

    for (const t of dept.examTasks) {
      assert.ok(!taskIds.has(t.id), `Duplicate task id: ${t.id}`);
      taskIds.add(t.id);
      if (t.svgId) {
        assert.ok(
          typeof PHYSICS_DIAGRAMS[t.svgId] === 'function',
          `Missing task SVG diagram ${t.svgId} in ${t.id}`
        );
      }
    }
  });
});

test('App SSR: locks Physics course by default for guests and unlocks for admin', () => {
  globalThis.localStorage.setItem(
    'matura-polski-progress-v1',
    JSON.stringify({
      activeCourse: 'fizyka',
      activeLevelByCourse: { fizyka: 'phys-01' },
    })
  );
  const guestHtml = renderToStaticMarkup(React.createElement(App));
  assert.ok(guestHtml.includes('Ten kurs jest obecnie zablokowany'), 'Guest should see locked Physics course');

  globalThis.localStorage.setItem(
    'matura-polski-auth-v1',
    JSON.stringify({
      token: 'test-admin-token',
      user: { id: 'admin', username: 'admin', displayName: 'Admin', role: 'admin' },
    })
  );
  globalThis.localStorage.setItem(
    'matura-polski-progress-v1:user:admin',
    JSON.stringify({
      activeCourse: 'fizyka',
      activeLevelByCourse: { fizyka: 'phys-01' },
    })
  );
  const adminHtml = renderToStaticMarkup(React.createElement(App));
  assert.ok(adminHtml.includes('Matura Fizyka'), 'Admin should render Matura Fizyka brand');
  assert.ok(adminHtml.includes('4. Zadania CKE'), 'Admin should render 4. Zadania CKE tab');
  assert.ok(adminHtml.includes('Fundamenty Matematyczne'), 'Admin should render Dział 1');
  globalThis.localStorage.clear();
});
