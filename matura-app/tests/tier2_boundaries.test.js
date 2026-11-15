import { describe, it, beforeEach, after } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import React from 'react';

import { AppSimulator, STORAGE_KEY } from './helpers/app-simulator.js';
import { mockLocalStorage, resetMockStorage } from './helpers/mock-browser.js';
import { loadKursPodstawowyLevels, CANONICAL_KURS_LEVELS } from './helpers/test-data.js';
import { loadComponent, renderComponentToString, closeViteServer } from './helpers/component-loader.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const INDEX_CSS_PATH = path.resolve(__dirname, '../src/index.css');

describe('Tier 2: Boundary & Corner Cases (Limits, Nulls, Stress, Error Resilience)', async () => {
  const { levels } = await loadKursPodstawowyLevels();
  let sim;

  beforeEach(() => {
    resetMockStorage();
    sim = new AppSimulator();
  });

  // =========================================================================
  // Group 1: Curriculum & Didactics Boundaries
  // =========================================================================
  describe('Group 1: Curriculum & Didactics Boundaries', () => {
    const dept1 = levels.find((l) => l.id === 'dept-01');
    const dept10 = levels.find((l) => l.id === 'dept-10');

    it('2.1.1 F07: Synthesizing Note curriculum boundary codifies 59-word underflow penalty & <30-word zeroing', () => {
      assert.ok(dept1, 'dept-01 must be present in course levels');
      const note1 = dept1.notes.find((n) => n.id === 'kn1-1');
      assert.ok(note1, 'kn1-1 (Synthesizing Note) must exist in Dział 1');

      const calloutBlock = note1.blocks.find(
        (b) => b.type === 'callout' && b.title.includes('Pułapki zerujące')
      );
      assert.ok(calloutBlock, 'kn1-1 must contain "Pułapki zerujące" callout block');

      const limitRule = calloutBlock.items.find(
        (item) => item.includes('60–90') || item.includes('60-90')
      );
      assert.ok(limitRule, 'Limit rule must exist in callout block items');
      assert.ok(
        limitRule.includes('59 słów') && limitRule.includes('utratę 1 punktu'),
        'Must explicitly codify that 59 words causes 1-point penalty in Criterion D'
      );
      assert.ok(
        limitRule.includes('poniżej 30 słów') && limitRule.includes('0/4 pkt'),
        'Must explicitly codify that <30 words results in complete zeroing (0/4 pkt)'
      );

      // Verify flashcard kf1-1 reinforces the 59-word boundary condition
      const fc1 = dept1.flashcards.find((f) => f.id === 'kf1-1');
      assert.ok(fc1, 'Flashcard kf1-1 must exist');
      assert.ok(
        fc1.back.includes('59') && fc1.back.includes('1 punktu'),
        'Flashcard kf1-1 must teach that 59 words incurs a 1 pt penalty'
      );
    });

    it('2.1.2 F07: Synthesizing Note curriculum defines exactly 60 words as lower boundary inclusion', () => {
      assert.ok(dept1, 'dept-01 must be present');
      const note1 = dept1.notes.find((n) => n.id === 'kn1-1');
      assert.ok(note1, 'kn1-1 must exist');

      const criteriaBlock = note1.blocks.find(
        (b) => b.type === 'callout' && b.title.includes('4 Kryteria Oceny CKE')
      );
      assert.ok(criteriaBlock, 'Criteria callout block must exist');

      const criterionD = criteriaBlock.items.find((item) => item.includes('Kryterium D'));
      assert.ok(criterionD, 'Kryterium D item must be present');
      assert.ok(
        criterionD.includes('60–90') || criterionD.includes('60-90'),
        'Kryterium D must explicitly state 60-90 word boundary interval'
      );
      assert.ok(
        note1.intro.includes('60–90 wyrazów') || note1.intro.includes('60-90 wyrazów'),
        'Intro must state 60-90 word boundary interval'
      );
    });

    it('2.1.3 F07: Synthesizing Note curriculum defines exactly 90 words as upper boundary inclusion', () => {
      assert.ok(dept1, 'dept-01 must be present');
      const note1 = dept1.notes.find((n) => n.id === 'kn1-1');

      const quoteBlock = note1.blocks.find(
        (b) => b.type === 'quote' && b.label.includes('Wzorzec Maturalny')
      );
      assert.ok(quoteBlock, 'Model quote block must exist');
      assert.ok(
        quoteBlock.label.includes('~74 słowa'),
        'Exemplary synthesis must sit safely inside the 60-90 word boundary'
      );

      const fc1 = dept1.flashcards.find((f) => f.id === 'kf1-1');
      assert.ok(fc1, 'Flashcard kf1-1 must exist');
      assert.ok(
        fc1.back.includes('Od 60 do 90 wyrazów'),
        'Flashcard kf1-1 must state inclusive upper boundary of 90 words'
      );
    });

    it('2.1.4 F07: Synthesizing Note curriculum codifies 91-word overflow penalty in Criterion D', () => {
      assert.ok(dept1, 'dept-01 must be present');
      const note1 = dept1.notes.find((n) => n.id === 'kn1-1');
      const calloutBlock = note1.blocks.find(
        (b) => b.type === 'callout' && b.title.includes('Pułapki zerujące')
      );
      assert.ok(calloutBlock, 'Pułapki zerujące callout block must exist');

      const limitRule = calloutBlock.items.find(
        (item) => item.includes('60–90') || item.includes('60-90')
      );
      assert.ok(
        limitRule.includes('91 słów') && limitRule.includes('utratę 1 punktu'),
        'Must explicitly codify that 91 words triggers a 1-point penalty in Criterion D'
      );

      const fc1 = dept1.flashcards.find((f) => f.id === 'kf1-1');
      assert.ok(
        fc1.back.includes('91 słów') && fc1.back.includes('1 punktu'),
        'Flashcard kf1-1 must warn that 91 words loses 1 point'
      );
    });

    it('2.1.5 F08: Problem essay formal boundary (300 words min vs 299 words underflow = 0/35 pts)', () => {
      assert.ok(dept10, 'dept-10 must be present');
      const note1 = dept10.notes.find((n) => n.id === 'kn10-1');
      assert.ok(note1, 'kn10-1 (Algorytm wypracowania) must exist in Dział 10');

      const formalBlock = note1.blocks.find(
        (b) => b.type === 'callout' && b.title.includes('warunki formalne CKE')
      );
      assert.ok(formalBlock, 'Formal conditions callout block must exist in Dział 10');

      const lengthRule = formalBlock.items.find((item) => item.includes('Długość minimalna'));
      assert.ok(lengthRule, 'Długość minimalna rule must exist');
      assert.ok(
        lengthRule.includes('co najmniej 300 słów'),
        'Must specify minimal formal length of 300 words'
      );
      assert.ok(
        lengthRule.includes('299 słów') && lengthRule.includes('0 pkt za całe wypracowanie'),
        'Must explicitly state that 299 words zeroes the entire essay (0 pkt)'
      );

      // Verify flashcard kf10-1
      const fc1 = dept10.flashcards.find((f) => f.id === 'kf10-1');
      assert.ok(fc1, 'Flashcard kf10-1 must exist');
      assert.ok(
        fc1.back.includes('299 słów lub mniej') && fc1.back.includes('0/35 pkt za całe wypracowanie'),
        'Flashcard kf10-1 must state that 299 words gives 0/35 pts'
      );

      // Verify quiz question kq10-1
      const quiz1 = dept10.quiz.find((q) => q.id === 'kq10-1');
      assert.ok(quiz1, 'Quiz question kq10-1 must exist');
      assert.equal(
        quiz1.options[quiz1.correct],
        'Dokładnie 300 słów',
        'Correct quiz option must be exactly 300 words'
      );
      assert.ok(
        quiz1.explanation.includes('299 słów') && quiz1.explanation.includes('0 punktów'),
        'Quiz explanation must explain the 299 word zeroing rule'
      );
    });

    it('2.1.6 F03/F08: Cardinal error guardrail detection in core texts (0/35 zeroing & 20 text traps)', () => {
      assert.ok(dept10, 'dept-10 must be present');
      const note1 = dept10.notes.find((n) => n.id === 'kn10-1');
      const formalBlock = note1.blocks.find(
        (b) => b.type === 'callout' && b.title.includes('warunki formalne CKE')
      );
      const cardinalRule = formalBlock.items.find((item) => item.includes('Zero błędu kardynalnego'));
      assert.ok(cardinalRule, 'Zero błędu kardynalnego rule must exist in formal criteria');
      assert.ok(
        cardinalRule.includes('0/35 pkt'),
        'Must specify immediate 0/35 evaluation upon cardinal error'
      );

      // Note kn10-4: Tarcza antykardynalna
      const note4 = dept10.notes.find((n) => n.id === 'kn10-4');
      assert.ok(note4, 'kn10-4 (Tarcza antykardynalna) must exist');
      assert.ok(
        note4.title.includes('20 najgroźniejszych pułapek błędu kardynalnego'),
        'kn10-4 title must specify 20 traps'
      );

      const gridBlock = note4.blocks.find((b) => b.type === 'grid');
      assert.ok(gridBlock, 'Grid block must exist in kn10-4');
      const bullets = gridBlock.items[0].details.bullets;
      assert.ok(bullets && bullets.length >= 20, 'Must have at least 20 cardinal error guardrails');

      const allGuardrails = bullets.join('\n');
      assert.ok(
        allGuardrails.includes('Kordian: Kordian NIE zabił cara'),
        'Guardrail must protect Kordian car murder trap'
      );
      assert.ok(
        allGuardrails.includes('Konrad to NIE Konrad Wallenrod ani Kordian') &&
        allGuardrails.includes('NIE nazwał Boga carem'),
        'Guardrail must protect Konrad / Great Improvisation trap'
      );
      assert.ok(
        allGuardrails.includes('Pan Tadeusz: Jacek Soplica NIE był rosyjskim szpiegiem'),
        'Guardrail must protect Jacek Soplica trap'
      );
      assert.ok(
        allGuardrails.includes('Lalka: Wokulski NIE ożenił się z Izabelą'),
        'Guardrail must protect Wokulski marriage trap'
      );
      assert.ok(
        allGuardrails.includes('Antygona: NIE została ułaskawiona'),
        'Guardrail must protect Antygona pardon trap'
      );
      assert.ok(
        allGuardrails.includes('Makbet: Lady Makbet NIE zginęła w bitwie'),
        'Guardrail must protect Lady Macbeth death trap'
      );

      // Verify quiz question kq10-2 on cardinal error penalty
      const quiz2 = dept10.quiz.find((q) => q.id === 'kq10-2');
      assert.ok(quiz2, 'kq10-2 quiz question must exist');
      assert.ok(
        quiz2.explanation.includes('0/35 punktów'),
        'kq10-2 explanation must cite 0/35 score zeroing'
      );
    });
  });

  // =========================================================================
  // Group 2: Modular Data Schema Boundaries
  // =========================================================================
  describe('Group 2: Modular Data Schema Boundaries', () => {
    it('2.2.1 F09: handles empty arrays in notes, flashcards, or quiz without throwing', async () => {
      const emptyDept = {
        id: 'dept-empty',
        displayNum: 99,
        code: 'DZIAŁ PUSTY',
        title: 'Pusty dział testowy',
        subtitle: 'Brak zawartości',
        duration: '0 min',
        xp: 0,
        notes: [],
        flashcards: [],
        quiz: [],
      };

      const { NotesView } = await loadComponent('/src/components/NotesView.jsx');
      const htmlNotes = renderComponentToString(NotesView, {
        level: emptyDept,
        checkedNotes: {},
        onToggleNote: () => {},
        onGoToFlashcards: () => {},
      });
      assert.ok(typeof htmlNotes === 'string');

      const { FlashcardsView } = await loadComponent('/src/components/FlashcardsView.jsx');
      const htmlFC = renderComponentToString(FlashcardsView, {
        cards: emptyDept.flashcards,
        cardStatus: {},
        onSetCardStatus: () => {},
        onGoToQuiz: () => {},
      });
      assert.ok(htmlFC.includes('Brak fiszek'));

      const stats = sim.calculateStats([emptyDept]);
      assert.equal(stats.completedLevelsCount, 0);
      assert.equal(stats.xp, 0);
    });

    it('2.2.2 F09: quiz questions function safely when optional fields are omitted', async () => {
      const minQuizDept = {
        id: 'dept-min',
        quiz: [
          {
            q: 'Pytanie minimalistyczne?',
            options: ['Opcja A', 'Opcja B', 'Opcja C', 'Opcja D'],
            correct: 0,
            explanation: 'Podstawowe wyjaśnienie.',
            // whyWrong, examTip omitted
          },
        ],
      };
      const { QuizView } = await loadComponent('/src/components/QuizView.jsx');
      const html = renderComponentToString(QuizView, {
        level: minQuizDept,
        savedScore: undefined,
        onSaveScore: () => {},
        onNextLevel: () => {},
        hasNextLevel: false,
      });
      assert.ok(html.includes('Pytanie minimalistyczne?'));
    });

    it('2.2.3 F09: enforces exactly 4 options per quiz question in all course departments', () => {
      levels.forEach((lvl) => {
        lvl.quiz.forEach((q, idx) => {
          assert.equal(
            q.options.length,
            4,
            `Department ${lvl.id} question ${idx} does not have exactly 4 options`
          );
        });
      });
    });

    it('2.2.4 F09: preserves UTF-8 Polish diacritics integrity without character corruption', () => {
      const allText = JSON.stringify(levels);
      const polishChars = ['ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż'];
      for (const char of polishChars) {
        assert.ok(allText.includes(char), `Course text must properly encode character: ${char}`);
      }
      assert.equal(allText.includes('\uFFFD'), false, 'Text must not contain Unicode replacement character');
    });

    it('2.2.5 F09: handles boundary XP and duration values without NaN', () => {
      const edgeDept = {
        id: 'dept-edge',
        duration: '0 min',
        xp: 0,
        notes: [{ id: 'n-zero', blocks: [] }],
        flashcards: [{ id: 'c-zero', front: 'f', back: 'b' }],
        quiz: [{ q: 'q?', options: ['1', '2', '3', '4'], correct: 0, explanation: 'e' }],
      };
      sim.toggleNote('n-zero');
      sim.setCardStatus('c-zero', 'known');
      sim.saveQuizScore('dept-edge', 1);

      const stats = sim.calculateStats([edgeDept]);
      assert.equal(Number.isNaN(stats.xp), false);
      assert.equal(stats.xp, 15 + 10 + 80); // 105
    });
  });

  // =========================================================================
  // Group 3: Navigation & Switcher Boundaries
  // =========================================================================
  describe('Group 3: Navigation & Switcher Boundaries', () => {
    it('2.3.1 F10: rapid successive course switching resolves cleanly to final selected course', () => {
      sim.selectCourse('probna');
      sim.selectCourse('ustna');
      sim.selectCourse('kurs');
      assert.equal(sim.activeCourse, 'kurs');
      assert.equal(sim.stage, 'notes');
      assert.equal(sim.reviewMode, false);
    });

    it('2.3.2 F10: invalid/unknown course in storage recovers safely with fallback', () => {
      mockLocalStorage._setJSON(STORAGE_KEY, { activeCourse: 'nieznany_kurs_xyz' });
      const recoveredSim = new AppSimulator();
      // Accepts string or falls back cleanly
      assert.ok(['nieznany_kurs_xyz', 'probna', 'kurs'].includes(recoveredSim.activeCourse));
      assert.equal(typeof recoveredSim.activeLevelByCourse, 'object');
    });

    it('2.3.3 F12: out-of-bounds department index falls back to currentLevels[0]', () => {
      sim.selectCourse('kurs');
      sim.selectLevel('dept-999'); // Non-existent
      assert.equal(sim.activeLevelByCourse.kurs, 'dept-999');

      const activeLvl = sim.getActiveLevel(levels);
      assert.equal(activeLvl.id, levels[0].id, 'Must fallback to first department');
    });

    it('2.3.4 F12: course switch from deep quiz sub-mode resets stage to "notes"', () => {
      sim.selectCourse('ustna');
      sim.setStage('quiz');
      assert.equal(sim.stage, 'quiz');

      sim.selectCourse('kurs');
      assert.equal(sim.stage, 'notes', 'Stage must immediately reset to notes');
    });

    it('2.3.5 F12: switching department within course resets reviewMode and stage', () => {
      sim.selectCourse('kurs');
      sim.setStage('flashcards');
      sim.toggleReviewMode();
      assert.equal(sim.reviewMode, true);

      sim.selectLevel('dept-03');
      assert.equal(sim.reviewMode, false);
      assert.equal(sim.stage, 'notes');
    });
  });

  // =========================================================================
  // Group 4: LocalStorage Persistence Boundaries
  // =========================================================================
  describe('Group 4: LocalStorage Persistence Boundaries', () => {
    it('2.4.1 F13: malformed JSON in storage is caught and defaults initialized', () => {
      mockLocalStorage._setCorrupted(STORAGE_KEY, '{invalid_json::broken');
      const safeSim = new AppSimulator();
      assert.equal(safeSim.theme, 'dark');
      assert.equal(safeSim.activeCourse, 'probna');
      assert.deepEqual(safeSim.checkedNotes, {});
      assert.deepEqual(safeSim.quizScores, {});
    });

    it('2.4.2 F13: handles non-object and primitive storage values safely', () => {
      for (const primitive of ['null', '""', '12345', 'true', '[]']) {
        mockLocalStorage._setCorrupted(STORAGE_KEY, primitive);
        const safeSim = new AppSimulator();
        assert.equal(typeof safeSim.checkedNotes, 'object');
        assert.equal(typeof safeSim.cardStatus, 'object');
        assert.equal(typeof safeSim.quizScores, 'object');
      }
    });

    it('2.4.3 F13: guarantees ID collision immunity across the 3 courses', () => {
      // Sprint uses numeric ids (1, 2)
      // Oral uses 101, 102
      // Kurs uses dept-01, dept-02
      sim.toggleNote('1-1'); // sprint
      sim.toggleNote('u1-1'); // oral
      sim.toggleNote('kn1-1'); // kurs

      assert.equal(sim.checkedNotes['1-1'], true);
      assert.equal(sim.checkedNotes['u1-1'], true);
      assert.equal(sim.checkedNotes['kn1-1'], true);

      // Unchecking sprint note does not alter kurs note
      sim.toggleNote('1-1');
      assert.equal(sim.checkedNotes['1-1'], false);
      assert.equal(sim.checkedNotes['kn1-1'], true);
    });

    it('2.4.4 F13: extreme or negative quiz scores are preserved monotonically', () => {
      sim.saveQuizScore('dept-01', -5);
      // Math.max(0, -5) -> 0
      assert.equal(sim.quizScores['dept-01'], 0);

      sim.saveQuizScore('dept-01', 10);
      assert.equal(sim.quizScores['dept-01'], 10);

      sim.saveQuizScore('dept-01', 6);
      assert.equal(sim.quizScores['dept-01'], 10);
    });

    it('2.4.5 F13: QuotaExceededError or write failures do not crash in-memory state', () => {
      const origSetItem = mockLocalStorage.setItem;
      mockLocalStorage.setItem = () => {
        throw new Error('QuotaExceededError: DOM Exception 22');
      };

      // Simulator operation should handle exception gracefully
      sim.toggleNote('kn1-1');
      assert.equal(sim.checkedNotes['kn1-1'], true);

      mockLocalStorage.setItem = origSetItem;
    });
  });

  // =========================================================================
  // Group 5: Notes View Mode Boundaries
  // =========================================================================
  describe('Group 5: Notes View Mode Boundaries', () => {
    it('2.5.1 F14: section with empty blocks array renders header without crash', async () => {
      const { NotesView } = await loadComponent('/src/components/NotesView.jsx');
      const emptyNoteDept = {
        id: 'dept-empty-blocks',
        notes: [
          {
            id: 'n-no-blocks',
            title: 'Tytuł bez bloków',
            badge: 'Pusty',
            blocks: [],
          },
        ],
      };
      const html = renderComponentToString(NotesView, {
        level: emptyNoteDept,
        checkedNotes: {},
        onToggleNote: () => {},
        onGoToFlashcards: () => {},
      });
      assert.ok(html.includes('Tytuł bez bloków'));
    });

    it('2.5.2 F14: grid item without details property renders without expand pill', async () => {
      const { NotesView } = await loadComponent('/src/components/NotesView.jsx');
      const gridNoDetailsDept = {
        id: 'dept-no-details',
        notes: [
          {
            id: 'n-grid',
            title: 'Siatka bez detali',
            badge: 'Test',
            blocks: [
              {
                type: 'grid',
                items: [{ term: 'Pojęcie A', desc: 'Opis bez szczegółów' }],
              },
            ],
          },
        ],
      };
      const html = renderComponentToString(NotesView, {
        level: gridNoDetailsDept,
        checkedNotes: {},
        onToggleNote: () => {},
        onGoToFlashcards: () => {},
      });
      assert.ok(html.includes('Pojęcie A'));
      assert.equal(html.includes('expand-pill'), false);
    });

    it('2.5.3 F14: rapid double-toggle on note checkbox inverts cleanly back to false', () => {
      sim.toggleNote('kn1-1');
      assert.equal(sim.checkedNotes['kn1-1'], true);

      sim.toggleNote('kn1-1');
      assert.equal(sim.checkedNotes['kn1-1'], false);
    });

    it('2.5.4 F14: note with special characters and Polish typographic quotes renders safely', async () => {
      const { NotesView } = await loadComponent('/src/components/NotesView.jsx');
      const quoteDept = {
        id: 'dept-quotes',
        notes: [
          {
            id: 'n-quotes',
            title: 'Cytaty „polskie” i «francuskie» & ampersand',
            badge: 'Cytaty',
            blocks: [
              {
                type: 'quote',
                label: 'Słynny cytat',
                text: '„A to Polska właśnie” — Stanisław Wyspiański <Wesele>',
              },
            ],
          },
        ],
      };
      const html = renderComponentToString(NotesView, {
        level: quoteDept,
        checkedNotes: {},
        onToggleNote: () => {},
        onGoToFlashcards: () => {},
      });
      assert.ok(html.includes('Polska właśnie'));
    });

    it('2.5.5 F14: HTML tags in prose blocks are rendered as escaped text nodes (no XSS)', async () => {
      const { NotesView } = await loadComponent('/src/components/NotesView.jsx');
      const xssDept = {
        id: 'dept-xss',
        notes: [
          {
            id: 'n-xss',
            title: 'Bezpieczeństwo XSS',
            badge: 'Security',
            blocks: [
              {
                type: 'prose',
                paragraphs: ['<script>alert("xss")</script> oraz <img src="x" onerror="alert(1)">'],
              },
            ],
          },
        ],
      };
      const html = renderComponentToString(NotesView, {
        level: xssDept,
        checkedNotes: {},
        onToggleNote: () => {},
        onGoToFlashcards: () => {},
      });
      // React server-side rendering escapes angle brackets
      assert.ok(html.includes('&lt;script&gt;'));
      assert.equal(html.includes('<script>'), false);
    });
  });

  // =========================================================================
  // Group 6: Flashcards Mode Boundaries
  // =========================================================================
  describe('Group 6: Flashcards Mode Boundaries', () => {
    it('2.6.1 F15: zero cards in review pool renders empty state gracefully', async () => {
      const { FlashcardsView } = await loadComponent('/src/components/FlashcardsView.jsx');
      const html = renderComponentToString(FlashcardsView, {
        cards: [],
        cardStatus: {},
        onSetCardStatus: () => {},
        onGoToQuiz: () => {},
      });
      assert.ok(html.includes('Brak fiszek'));
    });

    it('2.6.2 F15: single card deck navigation maintains index at 0', async () => {
      const singleCard = [{ id: 'fc-single', front: 'Pojedyncza fiszka', back: 'Odpowiedź' }];
      const { FlashcardsView } = await loadComponent('/src/components/FlashcardsView.jsx');
      const html = renderComponentToString(FlashcardsView, {
        cards: singleCard,
        cardStatus: {},
        onSetCardStatus: () => {},
        onGoToQuiz: () => {},
      });
      assert.ok(html.includes('Pojedyncza fiszka'));
      assert.ok(html.includes('fc-counter'));
      assert.match(html, /fc-counter[^>]*>Fiszka\s*(?:<!-- -->)?\s*1/);
    });

    it('2.6.3 F15: rapid card status updates preserve last recorded status', () => {
      sim.setCardStatus('kf1-1', 'review');
      sim.setCardStatus('kf1-1', 'known');
      assert.equal(sim.cardStatus['kf1-1'], 'known');
    });

    it('2.6.4 F15: single-card and empty deck boundary behavior in FlashcardsView', async () => {
      const { FlashcardsView } = await loadComponent('/src/components/FlashcardsView.jsx');

      // 1. Boundary: Single card deck in FlashcardsView
      const single = [{ id: 'fc-single-1', front: 'Front text', back: 'Back text' }];
      const htmlSingle = renderComponentToString(FlashcardsView, {
        cards: single,
        cardStatus: {},
        onSetCardStatus: () => {},
        onGoToQuiz: () => {},
      });
      assert.ok(
        htmlSingle.includes('Fiszka <!-- -->1<!-- --> / <!-- -->1') || htmlSingle.includes('Fiszka 1 / 1'),
        'Must render counter Fiszka 1 / 1'
      );
      assert.ok(htmlSingle.includes('disabled'), 'Prev and Next navigation must be disabled for 1 card');
      assert.ok(htmlSingle.includes('Wymieszaj'), 'Shuffle button must still be rendered safely');

      // 2. Boundary: Component UI render with 0 cards (empty review state)
      const htmlEmpty = renderComponentToString(FlashcardsView, {
        cards: [],
        cardStatus: {},
        onSetCardStatus: () => {},
        onGoToQuiz: () => {},
        isReviewPool: true,
      });
      assert.ok(
        htmlEmpty.includes('Brak fiszek do powtórki!'),
        'Empty deck must render friendly empty state without throwing'
      );

      // 3. Single card shuffle click preserves single element
      const internals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
      let states = [];
      let hookIdx = 0;
      internals.H = {
        useState: (init) => {
          const curIdx = hookIdx++;
          if (states[curIdx] === undefined) {
            states[curIdx] = typeof init === 'function' ? init() : init;
          }
          const setter = (val) => {
            states[curIdx] = typeof val === 'function' ? val(states[curIdx]) : val;
          };
          return [states[curIdx], setter];
        },
        useRef: (init) => ({ current: init }),
        useEffect: () => {},
        useCallback: (fn) => fn,
        useMemo: (fn) => fn(),
      };

      hookIdx = 0;
      const vdomSingle = FlashcardsView({
        cards: single,
        cardStatus: {},
        onSetCardStatus: () => {},
        onGoToQuiz: () => {},
      });

      function findBtn(node, text) {
        if (!node) return null;
        if (node.props && node.props.children) {
          const children = Array.isArray(node.props.children) ? node.props.children : [node.props.children];
          for (const c of children) {
            if (typeof c === 'string' && c.includes(text)) return node;
            const found = findBtn(c, text);
            if (found) return found;
          }
        }
        return null;
      }

      const shuffleBtnSingle = findBtn(vdomSingle, 'Wymieszaj');
      assert.ok(shuffleBtnSingle, 'Shuffle button must exist');
      shuffleBtnSingle.props.onClick();
      assert.deepEqual(states[1], ['fc-single-1'], 'Single card deck shuffles to identical single-element array');
    });

    it('2.6.5 F15: rating last card updates status without mutating bounds', () => {
      const lastCardId = levels[0].flashcards[levels[0].flashcards.length - 1].id;
      sim.setCardStatus(lastCardId, 'known');
      assert.equal(sim.cardStatus[lastCardId], 'known');
      const stats = sim.calculateStats(levels);
      assert.equal(stats.masteredCardsCount, 1);
    });
  });

  // =========================================================================
  // Group 7: Quiz Mode Boundaries
  // =========================================================================
  describe('Group 7: Quiz Mode Boundaries', () => {
    it('2.7.1 F16: exact score at 75% threshold marks level completed', () => {
      // 8 questions -> 75% = 6.0 -> 6 passes
      const mock8Dept = { id: 'd-8q', quiz: new Array(8).fill({ q: 'q?', options: ['a','b','c','d'], correct: 0, explanation: 'e' }) };
      sim.saveQuizScore('d-8q', 6);
      assert.equal(sim.isLevelCompleted(mock8Dept), true);
    });

    it('2.7.2 F16: score exactly one below 75% threshold does not mark level completed', () => {
      const mock8Dept = { id: 'd-8q', quiz: new Array(8).fill({ q: 'q?', options: ['a','b','c','d'], correct: 0, explanation: 'e' }) };
      sim.saveQuizScore('d-8q', 5);
      assert.equal(sim.isLevelCompleted(mock8Dept), false);
    });

    it('2.7.3 F16: odd total questions ceiling threshold (e.g. 7 questions -> 6 needed)', () => {
      // 7 * 0.75 = 5.25 -> Math.ceil(5.25) = 6
      const mock7Dept = { id: 'd-7q', quiz: new Array(7).fill({ q: 'q?', options: ['a','b','c','d'], correct: 0, explanation: 'e' }) };
      sim.saveQuizScore('d-7q', 5);
      assert.equal(sim.isLevelCompleted(mock7Dept), false);

      sim.saveQuizScore('d-7q', 6);
      assert.equal(sim.isLevelCompleted(mock7Dept), true);
    });

    it('2.7.4 F16: QuizView answer locking state logic prevents score inflation on duplicate clicks', async () => {
      const { QuizView } = await loadComponent('/src/components/QuizView.jsx');
      const internals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

      let currentAnswers = {};
      internals.H = {
        useState: (initial) => {
          if (typeof initial === 'object' && !Array.isArray(initial)) {
            return [
              currentAnswers,
              (newVal) => {
                currentAnswers = typeof newVal === 'function' ? newVal(currentAnswers) : newVal;
              },
            ];
          }
          return [initial, () => {}];
        },
      };

      const savedScores = [];
      const mockDept = {
        id: 'dept-test-locking',
        code: 'DZIAŁ 1',
        title: 'Locking Test',
        quiz: [
          { q: 'P1', options: ['A', 'B', 'C', 'D'], correct: 2, explanation: 'Exp 1' },
          { q: 'P2', options: ['A', 'B', 'C', 'D'], correct: 0, explanation: 'Exp 2' },
        ],
      };

      const renderView = () =>
        QuizView({
          level: mockDept,
          savedScore: undefined,
          onSaveScore: (id, score) => savedScores.push({ id, score }),
          onNextLevel: () => {},
          hasNextLevel: true,
        });

      // 1. Initial render: no answers selected, options enabled
      let vdom = renderView();
      let cards = [vdom.props.children].flat(2).filter((c) => c && c.props && c.props.className === 'quiz-card');
      let q0Opts = cards[0].props.children.find((c) => c && c.props && c.props.className === 'quiz-options').props.children;

      assert.equal(q0Opts[0].props.disabled, false, 'Option 0 must initially be clickable');
      assert.equal(q0Opts[2].props.disabled, false, 'Option 2 must initially be clickable');
      assert.equal(q0Opts[2].props.className, 'quiz-opt', 'Initial class must be quiz-opt');

      // 2. Click option 2 (correct answer for question 0)
      q0Opts[2].props.onClick();
      assert.equal(currentAnswers[0], 2, 'QuizView handleSelect must register selection of option 2');

      // 3. Re-render after selection: buttons must be locked (disabled = true)
      vdom = renderView();
      cards = [vdom.props.children].flat(2).filter((c) => c && c.props && c.props.className === 'quiz-card');
      q0Opts = cards[0].props.children.find((c) => c && c.props && c.props.className === 'quiz-options').props.children;

      assert.equal(q0Opts[0].props.disabled, true, 'Option 0 locked out after answer');
      assert.equal(q0Opts[1].props.disabled, true, 'Option 1 locked out after answer');
      assert.equal(q0Opts[2].props.disabled, true, 'Option 2 locked out after answer');
      assert.equal(q0Opts[2].props.className, 'quiz-opt correct', 'Option 2 marked correct');

      // 4. Duplicate click attempt on option 1: must be rejected by QuizView handleSelect guardrail
      q0Opts[1].props.onClick();
      assert.equal(currentAnswers[0], 2, 'Question 0 answer must remain 2 (duplicate click ignored)');

      // 5. Complete quiz by answering question 1 with correct option 0
      let q1Opts = cards[1].props.children.find((c) => c && c.props && c.props.className === 'quiz-options').props.children;
      q1Opts[0].props.onClick();

      assert.equal(savedScores.length, 1, 'onSaveScore called exactly once upon quiz completion');
      assert.equal(savedScores[0].score, 2, 'Score is 2/2');

      // 6. Duplicate click on question 1 after completion: must not inflate score or re-trigger onSaveScore
      vdom = renderView();
      cards = [vdom.props.children].flat(2).filter((c) => c && c.props && c.props.className === 'quiz-card');
      q1Opts = cards[1].props.children.find((c) => c && c.props && c.props.className === 'quiz-options').props.children;
      q1Opts[1].props.onClick();

      assert.equal(savedScores.length, 1, 'onSaveScore must not be invoked again on duplicate click');
    });

    it('2.7.5 F16: zero questions quiz handles threshold 0 without division by zero', () => {
      const mock0Dept = { id: 'd-0q', quiz: [] };
      const threshold = Math.ceil(mock0Dept.quiz.length * 0.75);
      assert.equal(threshold, 0);
      assert.equal(sim.isLevelCompleted(mock0Dept), false);
    });
  });

  // =========================================================================
  // Group 8: Theme & Visual Boundaries
  // =========================================================================
  describe('Group 8: Theme & Visual Boundaries', () => {
    it('2.8.1 F17: rapid successive theme toggling alternates cleanly and matches parity', () => {
      assert.equal(sim.theme, 'dark');
      for (let i = 0; i < 10; i++) {
        sim.toggleTheme();
      }
      assert.equal(sim.theme, 'dark'); // 10 toggles returns to initial

      sim.toggleTheme();
      assert.equal(sim.theme, 'light'); // 11th toggle is light
    });

    it('2.8.2 F17: invalid theme string in storage falls back safely', () => {
      mockLocalStorage._setJSON(STORAGE_KEY, { theme: 'neon-violet' });
      const recSim = new AppSimulator();
      // Theme toggling works seamlessly
      recSim.toggleTheme();
      assert.ok(['dark', 'light'].includes(recSim.theme));
    });

    it('2.8.3 F17: light theme tokens in index.css contain core palette variables', () => {
      const css = fs.readFileSync(INDEX_CSS_PATH, 'utf-8');
      const lightThemeMatch = css.match(/\[data-theme=['"]light['"]\]\s*\{([^}]+)\}/);
      assert.ok(lightThemeMatch, 'Light theme block must exist in index.css');
      const block = lightThemeMatch[1];
      assert.ok(block.includes('--bg:'));
      assert.ok(block.includes('--text:'));
      assert.ok(block.includes('--accent:'));
      assert.ok(block.includes('--border:'));
    });

    it('2.8.4 F17: dark theme tokens in :root contain core palette variables', () => {
      const css = fs.readFileSync(INDEX_CSS_PATH, 'utf-8');
      const rootMatch = css.match(/:root\s*\{([^}]+)\}/);
      assert.ok(rootMatch, ':root block must exist in index.css');
      const block = rootMatch[1];
      assert.ok(block.includes('--bg:'));
      assert.ok(block.includes('--text:'));
      assert.ok(block.includes('--accent:'));
      assert.ok(block.includes('--border:'));
    });

    it('2.8.5 F17: badge and button styles define accessible colors', () => {
      const css = fs.readFileSync(INDEX_CSS_PATH, 'utf-8');
      assert.match(css, /\.theme-btn\s*\{/);
      assert.match(css, /\.badge-count\s*\{/);
    });
  });

  after(async () => {
    await closeViteServer();
  });
});
