import { describe, it, beforeEach, after } from 'node:test';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';

import { AppSimulator, STORAGE_KEY } from './helpers/app-simulator.js';
import { mockLocalStorage, resetMockStorage } from './helpers/mock-browser.js';
import { loadKursPodstawowyLevels } from './helpers/test-data.js';
import { loadComponent, renderComponentToString, closeViteServer } from './helpers/component-loader.js';

describe('Tier 3: Cross-Feature Interactions (10 Pairwise Interaction Suites)', async () => {
  const { levels } = await loadKursPodstawowyLevels();
  let sim;

  beforeEach(() => {
    resetMockStorage();
    sim = new AppSimulator();
  });

  // Suite 3.1: F10 Course Switch ↔ F14 Mode Switch
  describe('Suite 3.1: Course Switch ↔ Mode Reset', () => {
    it('switching courses while deep in quiz mode immediately resets stage to "notes"', () => {
      sim.selectCourse('probna');
      sim.setStage('quiz');
      sim.toggleReviewMode();
      assert.equal(sim.stage, 'quiz');
      assert.equal(sim.reviewMode, true);

      sim.selectCourse('kurs');
      assert.equal(sim.activeCourse, 'kurs');
      assert.equal(sim.stage, 'notes', 'Stage must reset to notes upon switching courses');
      assert.equal(sim.reviewMode, false, 'ReviewMode must reset to false');
    });
  });

  // Suite 3.2: F10 Course Switch ↔ F12 Level Selection
  describe('Suite 3.2: Course Switch ↔ Level Memory per Course', () => {
    it('remembers active level individually per course without overwriting', () => {
      sim.selectCourse('kurs');
      sim.selectLevel('dept-04');
      assert.equal(sim.activeLevelByCourse.kurs, 'dept-04');

      sim.selectCourse('probna');
      sim.selectLevel(3);
      assert.equal(sim.activeLevelByCourse.probna, 3);

      sim.selectCourse('ustna');
      sim.selectLevel(105);
      assert.equal(sim.activeLevelByCourse.ustna, 105);

      // Return to kurs
      sim.selectCourse('kurs');
      assert.equal(sim.activeLevelByCourse.kurs, 'dept-04', 'Kurs must preserve Dept 4');

      // Return to probna
      sim.selectCourse('probna');
      assert.equal(sim.activeLevelByCourse.probna, 3, 'Probna must preserve level 3');
    });
  });

  // Suite 3.3: F14 Notes Checked ↔ F13 Storage Persistence
  describe('Suite 3.3: Multi-Course Note Checkbox Storage Isolation', () => {
    it('preserves checked notes from different courses without namespace collisions', () => {
      sim.selectCourse('kurs');
      sim.toggleNote('kn1-1');

      sim.selectCourse('probna');
      sim.toggleNote('1-1');

      sim.selectCourse('ustna');
      sim.toggleNote('u101-1');

      const saved = mockLocalStorage._getJSON(STORAGE_KEY);
      assert.equal(saved.checkedNotes['kn1-1'], true);
      assert.equal(saved.checkedNotes['1-1'], true);
      assert.equal(saved.checkedNotes['u101-1'], true);

      // Mutate one course note
      sim.toggleNote('kn1-1'); // unchecked
      const updated = mockLocalStorage._getJSON(STORAGE_KEY);
      assert.equal(updated.checkedNotes['kn1-1'], false);
      assert.equal(updated.checkedNotes['1-1'], true, 'Probna note unaffected');
      assert.equal(updated.checkedNotes['u101-1'], true, 'Ustna note unaffected');
    });
  });

  // Suite 3.4: F17 Theme Toggle ↔ F13 Storage ↔ Session Reload
  describe('Suite 3.4: Theme Toggle ↔ Storage Persistence ↔ Session Reload', () => {
    it('theme choice persists through course changes and browser session reload', () => {
      assert.equal(sim.theme, 'dark');
      sim.toggleTheme(); // switch to light
      assert.equal(sim.theme, 'light');
      assert.equal(globalThis.document.documentElement.getAttribute('data-theme'), 'light');

      // Switch courses back and forth
      sim.selectCourse('kurs');
      sim.selectCourse('probna');
      sim.selectCourse('ustna');
      assert.equal(sim.theme, 'light');

      // Simulate full page reload
      const newSessionSim = new AppSimulator();
      assert.equal(newSessionSim.theme, 'light');
      assert.equal(globalThis.document.documentElement.getAttribute('data-theme'), 'light');
    });
  });

  // Suite 3.5: F15 Spaced Repetition ↔ F10 Course Context
  describe('Suite 3.5: Review Pool Isolation ↔ Course Context', () => {
    it('isolates review pool flashcards strictly to the currently active course', async () => {
      const { ORAL_LEVELS } = await loadComponent('/src/data/oralLevels.js');

      // Kurs flashcards
      const kursCard = levels[0].flashcards[0];
      sim.setCardStatus(kursCard.id, 'review');

      // Oral flashcards
      const oralCard = ORAL_LEVELS[0].flashcards[0];
      sim.setCardStatus(oralCard.id, 'review');

      // When in kurs, review pool contains only kurs card
      const kursReviewPool = sim.getReviewCards(levels);
      assert.equal(kursReviewPool.length, 1);
      assert.equal(kursReviewPool[0].id, kursCard.id);

      // When in oral, review pool contains only oral card
      const oralReviewPool = sim.getReviewCards(ORAL_LEVELS);
      assert.equal(oralReviewPool.length, 1);
      assert.equal(oralReviewPool[0].id, oralCard.id);
    });
  });

  // Suite 3.6: F16 Quiz Threshold ↔ Sidebar Progress Bar ↔ XP
  describe('Suite 3.6: Quiz Pass Threshold ↔ Level Completion ↔ Course Progress & XP', () => {
    it('passing a quiz threshold dynamically awards 80 XP and increases progress percentage', () => {
      const dept1 = levels[0];
      const passThreshold = Math.ceil(dept1.quiz.length * 0.75);

      const initialStats = sim.calculateStats(levels);
      assert.equal(initialStats.completedLevelsCount, 0);
      assert.equal(initialStats.progressPct, 0);
      const initialXP = initialStats.xp;

      // Score below threshold
      sim.saveQuizScore(dept1.id, passThreshold - 1);
      const failStats = sim.calculateStats(levels);
      assert.equal(failStats.completedLevelsCount, 0);
      assert.equal(failStats.progressPct, 0);
      assert.equal(failStats.xp, initialXP);

      // Score at threshold
      sim.saveQuizScore(dept1.id, passThreshold);
      const passStats = sim.calculateStats(levels);
      assert.equal(passStats.completedLevelsCount, 1);
      assert.equal(passStats.progressPct, 10, '1 of 10 levels = 10%');
      assert.equal(passStats.xp, initialXP + 80, '+80 XP for level completion');
    });
  });

  // Suite 3.7: F14 Note Read ↔ Sidebar Stats ↔ LocalStorage Sync
  describe('Suite 3.7: Note Mastery ↔ Real-Time XP Increment ↔ Storage Sync', () => {
    it('marking note as read gives +15 XP and synchronizes immediately to localStorage', () => {
      const noteId = levels[0].notes[0].id;
      const initialStats = sim.calculateStats(levels);
      assert.equal(initialStats.masteredNotesCount, 0);

      sim.toggleNote(noteId);
      const updatedStats = sim.calculateStats(levels);
      assert.equal(updatedStats.masteredNotesCount, 1);
      assert.equal(updatedStats.xp, initialStats.xp + 15, '+15 XP per mastered note');

      const saved = mockLocalStorage._getJSON(STORAGE_KEY);
      assert.equal(saved.checkedNotes[noteId], true);
    });
  });

  // Suite 3.8: F15 Card Rating ↔ Filter Toggle ↔ Review Counter
  describe('Suite 3.8: Card Rating ↔ Review Counter Badge ↔ Spaced Repetition Mastery', () => {
    it('transitioning card from review to known updates badge, review pool, and awards +10 XP', () => {
      const card = levels[0].flashcards[0];

      // Mark card for review
      sim.setCardStatus(card.id, 'review');
      let stats = sim.calculateStats(levels);
      assert.equal(stats.reviewCount, 1);
      assert.equal(stats.masteredCardsCount, 0);
      let reviewPool = sim.getReviewCards(levels);
      assert.equal(reviewPool.length, 1);

      // Master the card
      sim.setCardStatus(card.id, 'known');
      stats = sim.calculateStats(levels);
      assert.equal(stats.reviewCount, 0);
      assert.equal(stats.masteredCardsCount, 1);
      assert.equal(stats.xp, 10, '+10 XP for mastered flashcard');
      reviewPool = sim.getReviewCards(levels);
      assert.equal(reviewPool.length, 0);
    });
  });

  // Suite 3.9: F12 Level Switch ↔ F14/F15/F16 Mode States
  describe('Suite 3.9: Intra-Course Level Switch ↔ Stage Reset ↔ View Header Update', () => {
    it('selecting different department resets stage to "notes" and updates active level', () => {
      sim.selectCourse('kurs');
      sim.selectLevel('dept-01');
      sim.setStage('flashcards');
      assert.equal(sim.stage, 'flashcards');

      sim.selectLevel('dept-02');
      assert.equal(sim.activeLevelByCourse.kurs, 'dept-02');
      assert.equal(sim.stage, 'notes', 'Stage resets to notes on department switch');

      const activeLvl = sim.getActiveLevel(levels);
      assert.equal(activeLvl.id, 'dept-02');
      assert.equal(activeLvl.code, 'DZIAŁ 2');
    });
  });

  // Suite 3.10: F16 Quiz Retake ↔ Math.max ↔ Level Completed
  describe('Suite 3.10: Quiz Retake Monotonicity ↔ Best Score Retention', () => {
    it('retaking a passed quiz with a lower score never degrades completion status or XP', () => {
      const dept1 = levels[0];
      const maxScore = dept1.quiz.length;

      // Perfect score initially
      sim.saveQuizScore(dept1.id, maxScore);
      let stats = sim.calculateStats(levels);
      assert.equal(sim.quizScores[dept1.id], maxScore);
      assert.equal(stats.completedLevelsCount, 1);
      const earnedXP = stats.xp;

      // Retake with low score (e.g. 1)
      sim.saveQuizScore(dept1.id, 1);
      stats = sim.calculateStats(levels);
      assert.equal(sim.quizScores[dept1.id], maxScore, 'Best score preserved');
      assert.equal(stats.completedLevelsCount, 1, 'Level remains completed');
      assert.equal(stats.xp, earnedXP, 'XP remains untouched');
    });
  });

  // Suite 3.11: App.jsx Direct SSR Rendering & Routing Integration
  describe('Suite 3.11: App.jsx Direct SSR Rendering & Routing Integration', async () => {
    const { App } = await loadComponent('/src/App.jsx');
    const { KURS_PODSTAWOWY_LEVELS } = await loadComponent('/src/data/kursPodstawowyLevels.js');
    const stripComments = (str) => str.replace(/<!--.*?-->/g, '');

    it('App-SSR.1: clean state renders default course (probna) with sprint header', () => {
      resetMockStorage();
      const html = stripComments(renderComponentToString(App));
      assert.ok(html.includes('app-shell'), 'App container must render');
      assert.ok(html.includes('Sprint 7h • Matura Próbna'), 'Default state must render Sprint 7h subtitle');
      assert.ok(html.includes('BLOK 1'), 'Default state must render sprint level 1 (BLOK 1)');
      assert.doesNotMatch(html, /DZIAŁ 1/, 'Default state must not render matura course Dział 1');
    });

    it('App-SSR.2: activeCourse="kurs" routes to KURS_PODSTAWOWY_LEVELS and renders Dept 1', () => {
      resetMockStorage();
      mockLocalStorage._setJSON('matura-polski-progress-v1', {
        activeCourse: 'kurs',
      });

      const html = stripComments(renderComponentToString(App));

      // 1. Must render Kurs Główny branding & sidebar
      assert.ok(
        html.includes('DZIAŁ 1') && html.includes('DZIAŁ 10'),
        'Sidebar level-list must render all 10 departments of KURS_PODSTAWOWY_LEVELS'
      );
      assert.doesNotMatch(
        html,
        /Sprint 7h • Matura Próbna/,
        'Must NOT render sprint course subtitle when activeCourse="kurs"'
      );

      // 2. Must render Active Level Header for Dept 01
      assert.ok(
        html.includes('Technika Arkusza i Kształcenie Językowe'),
        'Must render Dział 1 title in level header'
      );
      assert.ok(
        html.includes('DZIAŁ 1'),
        'Must render level kicker with DZIAŁ 1'
      );

      // 3. Must render NotesView for Dept 01 notes
      assert.ok(
        html.includes('Notatka syntetyzująca'),
        'Must render Dział 1 note content on synthesizing notes'
      );
      assert.ok(
        html.includes('Funkcje języka'),
        'Must render Dział 1 note content on language functions'
      );

      // 4. Must render 3-stage tabs with Dept 01 counts
      const dept1 = KURS_PODSTAWOWY_LEVELS[0];
      assert.ok(
        html.includes(`0/${dept1.notes.length}`),
        `Notes tab must display 0/${dept1.notes.length}`
      );
      assert.ok(
        html.includes(`0/${dept1.flashcards.length}`),
        `Flashcards tab must display 0/${dept1.flashcards.length}`
      );
      assert.ok(
        html.includes(`0/${dept1.quiz.length}`),
        `Quiz tab must display 0/${dept1.quiz.length}`
      );
    });

    it('App-SSR.3: activeLevelByCourse remembers individual department selection (Dept 04 - Romantyzm)', () => {
      resetMockStorage();
      mockLocalStorage._setJSON('matura-polski-progress-v1', {
        activeCourse: 'kurs',
        activeLevelByCourse: {
          kurs: 'dept-04',
        },
      });

      const html = stripComments(renderComponentToString(App));

      // 1. Must render Dept 04 Header
      assert.ok(
        html.includes('Romantyzm — Serce, Wolność i Metafizyka'),
        'Must render Dział 4 title in level header'
      );
      assert.ok(
        html.includes('DZIAŁ 4'),
        'Level kicker must display DZIAŁ 4'
      );

      // 2. Must render Romantyzm compulsory reading notes
      assert.ok(
        html.includes('Dziady cz. III'),
        'Must render notes for core reading Dziady cz. III'
      );
      assert.ok(
        html.includes('Kordian'),
        'Must render notes for core reading Kordian'
      );
    });

    it('App-SSR.4: activeLevelByCourse navigates to Dept 10 (Wypracowanie & Motywy)', () => {
      resetMockStorage();
      mockLocalStorage._setJSON('matura-polski-progress-v1', {
        activeCourse: 'kurs',
        activeLevelByCourse: {
          kurs: 'dept-10',
        },
      });

      const html = stripComments(renderComponentToString(App));

      assert.ok(
        html.includes('Matryca Motywów, Konteksty i Wypracowanie 35/35'),
        'Must render Dział 10 essay and motif matrix title'
      );
      assert.ok(
        html.includes('DZIAŁ 10'),
        'Level kicker must display DZIAŁ 10'
      );
      assert.ok(
        html.includes('Wypracowanie'),
        'NotesView must render essay formulation guidance'
      );
    });

    it('App-SSR.5: hydrates student progress (checked notes, quiz score, XP) into rendered HTML', () => {
      resetMockStorage();
      mockLocalStorage._setJSON('matura-polski-progress-v1', {
        activeCourse: 'kurs',
        activeLevelByCourse: { kurs: 'dept-01' },
        checkedNotes: {
          'kn1-1': true,
          'kn1-2': true,
        },
        cardStatus: {
          'kf1-1': 'known',
          'kf1-2': 'known',
          'kf1-3': 'known',
        },
        quizScores: {
          'dept-01': 12, // 12/12 = 100% -> level completed
        },
      });

      const html = stripComments(renderComponentToString(App));

      // 1. Notes stage tab reflects 2/4 completed
      assert.ok(
        html.includes('2/4'),
        'Stage tab for notes must display 2/4 read notes'
      );

      // 2. Quiz stage tab reflects 12/12 completed
      assert.ok(
        html.includes('12/12'),
        'Stage tab for quiz must display 12/12 score'
      );

      // 3. Completed level marker in sidebar
      assert.ok(
        html.includes('completed'),
        'Sidebar level button or stage tab must have "completed" class'
      );

      // 4. XP Calculation in sidebar:
      // 2 notes * 15 XP + 3 known cards * 10 XP + 1 completed level * 80 XP = 30 + 30 + 80 = 140 XP
      assert.ok(
        html.includes('140'),
        'Sidebar XP stat pill must render 140 XP'
      );
    });

    it('App-SSR.6: isolates oral exam course (activeCourse="ustna") from kurs', () => {
      resetMockStorage();
      mockLocalStorage._setJSON('matura-polski-progress-v1', {
        activeCourse: 'ustna',
      });

      const html = stripComments(renderComponentToString(App));

      assert.ok(
        html.includes('Kurs 76 pytań jawnych • CKE 2026–2028'),
        'Must display oral course subtitle'
      );
      assert.ok(
        html.includes('POZIOM 1'),
        'Must render oral exam levels (POZIOM 1)'
      );
      assert.doesNotMatch(
        html,
        /DZIAŁ 1/,
        'Oral exam view must not leak kurs departments'
      );
    });
  });

  after(async () => {
    await closeViteServer();
  });
});
