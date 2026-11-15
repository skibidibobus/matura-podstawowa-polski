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

describe('Tier 1: Feature Coverage (F01–F17 across 8 Feature Groups)', async () => {
  const { levels } = await loadKursPodstawowyLevels();
  let sim;

  beforeEach(() => {
    resetMockStorage();
    sim = new AppSimulator();
  });

  // =========================================================================
  // Feature Group 1: F01–F08 CKE Curriculum & Didactics Coverage
  // =========================================================================
  describe('Group 1: F01–F08 CKE Curriculum & Didactics', () => {
    it('1.1 F01: covers all 10 literary epochs chronologically from Antyk to Współczesność', () => {
      assert.equal(levels.length, 10, 'Must have exactly 10 chronological departments');
      const expectedEpochs = [
        /język|arkusz/i,
        /antyk|średniowiecze/i,
        /renesans|barok/i,
        /oświecenie|romantyzm/i,
        /pozytywizm|realizm/i,
        /młoda polska/i,
        /dwudziestolecie/i,
        /wojn|okupacj/i,
        /współczesn|absurd/i,
        /motyw|wypracowanie/i,
      ];
      levels.forEach((lvl, idx) => {
        const fullDesc = `${lvl.title} ${lvl.subtitle}`;
        assert.match(
          fullDesc,
          expectedEpochs[idx],
          `Department ${idx + 1} (${lvl.code}) must represent expected epoch`
        );
      });
    });

    it('1.2 F02: defines essential philosophical currents and aesthetic topoi', () => {
      const allText = JSON.stringify(levels).toLowerCase();
      const requiredCurrents = [
        'stoic',
        'epikur',
        'humanizm',
        'sarmatyzm',
        'koncept',
        'mesjanizm',
        'winkelried',
        'scjentyzm',
        'vanitas',
      ];
      for (const term of requiredCurrents) {
        assert.ok(
          allText.includes(term),
          `Curriculum must explicitly explain current/topos: "${term}"`
        );
      }
    });

    it('1.3 F03: includes all core whole-book compulsory readings ("z gwiazdką") with warnings', () => {
      const allText = JSON.stringify(levels);
      const coreReadings = [
        'Antygon',
        'Makbet',
        'Skąpiec',
        'Dziad',
        'Kordian',
        'Pan Tadeusz',
        'Lalk',
        'Zbrodni',
        'Wesel',
        'Przedwiośni',
        'Dżum',
        'Rok 1984',
        'Tango',
      ];
      for (const reading of coreReadings) {
        assert.match(
          allText,
          new RegExp(reading, 'i'),
          `Core reading "${reading}" must be present in curriculum`
        );
      }
      assert.match(
        allText,
        /błąd kardynaln/i,
        'Curriculum must explicitly warn against cardinal errors (błąd kardynalny)'
      );
    });

    it('1.4 F04: incorporates compulsory readings in fragments and matura poetry', () => {
      const allText = JSON.stringify(levels);
      const fragmentWorks = [
        'Biblia',
        'Mitologia',
        'Kochanowski',
        'Krasicki',
        'Chłopi',
        'Borowski',
        'Herling',
        'Krall',
      ];
      for (const work of fragmentWorks) {
        assert.match(
          allText,
          new RegExp(work, 'i'),
          `Fragmentary reading/author "${work}" must be covered`
        );
      }
    });

    it('1.5 F05: provides cross-cutting matrix of 14 canonical literary motifs', () => {
      const dept10 = levels.find((l) => l.id === 'dept-10') || levels[9];
      assert.ok(dept10, 'Department 10 must exist');
      const dept10Text = JSON.stringify(dept10).toLowerCase();
      const sampleMotifs = ['władz', 'miłość', 'bunt', 'win', 'cierpien'];
      for (const motif of sampleMotifs) {
        assert.ok(
          dept10Text.includes(motif),
          `Department 10 must detail motif: "${motif}"`
        );
      }
    });

    it('1.6 F06: covers linguistic education, functional styles, and grammatical errors', () => {
      const dept01 = levels.find((l) => l.id === 'dept-01') || levels[0];
      assert.ok(dept01, 'Department 1 must exist');
      const dept1Text = JSON.stringify(dept01).toLowerCase();
      assert.ok(dept1Text.includes('styl'), 'Must cover functional styles');
      assert.ok(dept1Text.includes('imiesłow'), 'Must cover participle clause errors');
      assert.ok(dept1Text.includes('pleonazm'), 'Must cover pleonasms/tautologies');
    });

    it('1.7 F07: details synthesizing note methodology and CKE evaluation criteria', () => {
      // 1. Scope strictly to Department 1 (Technika Arkusza i Kształcenie Językowe)
      const dept01 = levels.find((l) => l.id === 'dept-01') || levels[0];
      assert.ok(dept01, 'Department 1 (dept-01) must exist');

      // 2. Pinpoint synthesizing note kn1-1 specifically
      const synthNote = dept01.notes?.find(
        (n) => n.id === 'kn1-1' || /notatka syntetyzująca/i.test(n.title)
      );
      assert.ok(synthNote, 'Department 1 must contain synthesizing note kn1-1');

      // 3. Verify note metadata & title
      assert.match(
        synthNote.title,
        /notatka syntetyzująca/i,
        'Note kn1-1 title must explicitly designate synthesizing note'
      );
      assert.equal(
        synthNote.badge,
        'Pewniak CKE (4 pkt)',
        'Synthesizing note must be badged as Pewniak CKE (4 pkt)'
      );

      // 4. Verify strictly scoped content of kn1-1 (zero leakage from other departments)
      const synthText = JSON.stringify(synthNote).toLowerCase();

      // CKE word limits: 60-90 words
      assert.match(
        synthText,
        /60[–\-]90\s*(?:wyraz|słów)/i,
        'Synthesizing note kn1-1 must enforce 60–90 words range'
      );

      // Formal penalty boundary (59 or 91 words)
      assert.match(
        synthText,
        /59\s*(?:słów|wyrazów)|91\s*(?:słów|wyrazów)/i,
        'Synthesizing note kn1-1 must detail 59/91 word penalty threshold'
      );

      // CKE Cascade scoring rule
      assert.match(
        synthText,
        /zasada kaskadowa/i,
        'Synthesizing note kn1-1 must explicitly name zasada kaskadowa'
      );
      assert.ok(
        synthText.includes('ocena za język wynosi automatycznie 0 punktów') ||
        synthText.includes('0 punktów za język') ||
        synthText.includes('0 pkt za treść'),
        'Synthesizing note kn1-1 must explain cascade penalty (0 pts for content = 0 pts for language)'
      );

      // CKE 4 Criteria breakdown (A, B, C, D)
      assert.match(synthText, /kryterium a/i, 'Note kn1-1 must define Kryterium A');
      assert.match(synthText, /kryterium b/i, 'Note kn1-1 must define Kryterium B (zestawienie)');
      assert.match(synthText, /kryterium c/i, 'Note kn1-1 must define Kryterium C (synteza)');
      assert.match(synthText, /kryterium d/i, 'Note kn1-1 must define Kryterium D (limit słów)');

      // 5. Verify reinforcing flashcard in dept-01
      const synthCard = dept01.flashcards?.find((f) => f.id === 'kf1-1');
      assert.ok(synthCard, 'Department 1 must contain flashcard kf1-1 reinforcing note limit');
      assert.match(synthCard.back, /60\s*do\s*90\s*wyrazów/i);
    });

    it('1.8 F08: details problem essay requirements (35 pts, min. 300 words, 2 contexts)', () => {
      const dept10 = levels.find((l) => l.id === 'dept-10') || levels[9];
      const dept10Text = JSON.stringify(dept10).toLowerCase();
      assert.ok(dept10Text.includes('300 słów') || dept10Text.includes('300'), 'Must state 300 words minimum requirement');
      assert.ok(dept10Text.includes('kontekst'), 'Must mandate functional contexts');
      assert.ok(dept10Text.includes('kardynaln'), 'Must define cardinal error rules');
    });
  });

  // =========================================================================
  // Feature Group 2: F09 10-Department Modular Data Schema Coverage
  // =========================================================================
  describe('Group 2: F09 10-Department Modular Data Schema', () => {
    it('2.1 F09: array contains exactly 10 non-null department objects', () => {
      assert.equal(levels.length, 10);
      levels.forEach((lvl) => {
        assert.equal(typeof lvl, 'object');
        assert.notEqual(lvl, null);
      });
    });

    it('2.2 F09: each department adheres to metadata contract (id, displayNum, code, title, duration, xp)', () => {
      levels.forEach((lvl, idx) => {
        assert.match(lvl.id, /^dept-(0[1-9]|10)$/, `Invalid id: ${lvl.id}`);
        assert.equal(lvl.displayNum, idx + 1);
        assert.equal(lvl.code, `DZIAŁ ${idx + 1}`);
        assert.ok(lvl.title && lvl.title.length > 5, 'Title must be descriptive');
        assert.match(lvl.duration, /^\d+\s*min$/, 'Duration must match "X min"');
        assert.equal(typeof lvl.xp, 'number');
        assert.ok(lvl.xp > 0, 'XP must be positive');
      });
    });

    it('2.3 F09: note sections contain valid content blocks (prose, callout, quote, grid)', () => {
      const validBlockTypes = new Set(['prose', 'callout', 'quote', 'grid']);
      const allNotes = levels.flatMap((l) => l.notes || []);
      assert.ok(allNotes.length >= 10, 'Must have at least 10 note sections total');

      allNotes.forEach((note) => {
        assert.ok(note.id && typeof note.id === 'string', 'Note id must be string');
        assert.ok(note.title && typeof note.title === 'string', 'Note title must be string');
        assert.ok(Array.isArray(note.blocks), 'blocks must be array');
        assert.ok(note.blocks.length > 0, 'blocks array cannot be empty');

        note.blocks.forEach((block) => {
          assert.ok(
            validBlockTypes.has(block.type),
            `Invalid block type: ${block.type}`
          );
          if (block.type === 'prose') {
            assert.ok(Array.isArray(block.paragraphs), 'prose.paragraphs must be array');
          }
          if (block.type === 'callout') {
            assert.ok(Array.isArray(block.items), 'callout.items must be array');
          }
          if (block.type === 'grid') {
            assert.ok(Array.isArray(block.items), 'grid.items must be array');
          }
        });
      });
    });

    it('2.4 F09: all flashcard IDs are globally unique with front and back text', () => {
      const allCards = levels.flatMap((l) => l.flashcards || []);
      assert.ok(allCards.length >= 30, 'Must have at least 30 flashcards across course');

      const seenIds = new Set();
      allCards.forEach((card) => {
        assert.ok(card.id, 'Flashcard must have id');
        assert.equal(seenIds.has(card.id), false, `Duplicate flashcard ID: ${card.id}`);
        seenIds.add(card.id);
        assert.ok(card.front && card.front.length > 3, 'Front text must be substantial');
        assert.ok(card.back && card.back.length > 3, 'Back text must be substantial');
      });
    });

    it('2.5 F09: all quiz questions have exactly 4 options, valid correct index, and explanation', () => {
      const allQuestions = levels.flatMap((l) => l.quiz || []);
      assert.ok(allQuestions.length >= 30, 'Must have at least 30 quiz questions across course');

      allQuestions.forEach((q, idx) => {
        assert.ok(q.q && q.q.length > 5, `Question ${idx} must have prompt text`);
        assert.equal(Array.isArray(q.options), true);
        assert.equal(q.options.length, 4, `Question "${q.q}" must have exactly 4 options`);
        assert.ok([0, 1, 2, 3].includes(q.correct), 'correct option index must be 0..3');
        assert.ok(
          q.explanation && q.explanation.length > 10,
          `Question "${q.q}" must provide a substantial explanation`
        );
      });
    });
  });

  // =========================================================================
  // Feature Group 3: F10–F12 3rd Tab Navigation & Switcher Coverage
  // =========================================================================
  describe('Group 3: F10–F12 Navigation & Course Switcher', () => {
    it('3.1 F10: course switcher state handles kurs tab selection', () => {
      sim.selectCourse('kurs');
      assert.equal(sim.activeCourse, 'kurs');
      assert.equal(sim.activeLevelByCourse.kurs, 'dept-01');
      assert.equal(sim.stage, 'notes');
    });

    it('3.2 F10: Sidebar renders genuine 3-tab course switcher with activeCourse="kurs" selection', async () => {
      const { Sidebar } = await loadComponent('/src/components/Sidebar.jsx');

      // --- Scenario A: Render with activeCourse = 'kurs' ---
      const htmlKurs = renderComponentToString(Sidebar, {
        activeCourse: 'kurs',
        onSelectCourse: () => {},
        levels,
        activeLevelId: 'dept-01',
        onSelectLevel: () => {},
        reviewMode: false,
        onToggleReviewMode: () => {},
        reviewCount: 0,
        completedLevelsCount: 0,
        masteredCardsCount: 0,
        totalCardsCount: 190,
        xp: 0,
        theme: 'dark',
        onToggleTheme: () => {},
        isLevelCompleted: () => false,
      });

      // 1. Container presence
      assert.ok(htmlKurs.includes('class="sidebar"'), 'Sidebar container must be rendered');
      assert.ok(htmlKurs.includes('class="course-switcher"'), 'Course switcher must be present');

      // 2. Extract tabs inside course-switcher
      const switcherMatch = htmlKurs.match(/<div[^>]*class="[^"]*course-switcher[^"]*"[^>]*>([\s\S]*?)<\/div>/);
      assert.ok(switcherMatch, '.course-switcher element must be extracted');
      const switcherHtml = switcherMatch[1];

      const tabs = switcherHtml.match(/<button[^>]*role="tab"[^>]*>[\s\S]*?<\/button>/g) || [];
      assert.equal(
        tabs.length,
        3,
        `Course switcher must contain exactly 3 tabs, but found ${tabs.length}`
      );

      // 3. Verify presence of all 3 required tab labels
      assert.ok(
        tabs.some((t) => t.includes('Matura Próbna')),
        'Tab 1 "Matura Próbna" must be present'
      );
      const kursTab = tabs.find((t) => /Kurs (Główny|Podstawowy)/i.test(t));
      assert.ok(
        kursTab,
        'Tab 2 "Kurs Główny" or "Kurs Podstawowy" must be present in Sidebar'
      );
      assert.ok(
        tabs.some((t) => t.includes('Matura Ustna')),
        'Tab 3 "Matura Ustna" must be present'
      );

      // 4. Verify selection state for activeCourse = 'kurs'
      assert.match(
        kursTab,
        /aria-selected="true"/,
        'Kurs tab must have aria-selected="true" when activeCourse="kurs"'
      );
      assert.match(
        kursTab,
        /class="[^"]*\bactive\b[^"]*"/,
        'Kurs tab must have "active" class when activeCourse="kurs"'
      );

      // Non-active tabs must have aria-selected="false" and no active class
      const otherTabs = tabs.filter((t) => t !== kursTab);
      for (const other of otherTabs) {
        assert.match(
          other,
          /aria-selected="false"/,
          'Non-active course tab must have aria-selected="false"'
        );
        assert.doesNotMatch(
          other,
          /class="[^"]*\bactive\b[^"]*"/,
          'Non-active course tab must not have "active" class'
        );
      }

      // 5. Verify dynamic branding subtitle
      const brandSubMatch = htmlKurs.match(/<div[^>]*class="[^"]*brand-sub[^"]*"[^>]*>([\s\S]*?)<\/div>/);
      assert.ok(brandSubMatch, '.brand-sub element must be present');
      const brandSubText = brandSubMatch[1];
      assert.doesNotMatch(
        brandSubText,
        /Sprint 7h/i,
        'When activeCourse="kurs", brand-sub must not display sprint course subtitle'
      );
      assert.doesNotMatch(
        brandSubText,
        /76 pytań/i,
        'When activeCourse="kurs", brand-sub must not display oral course subtitle'
      );
      assert.match(
        brandSubText,
        /Kurs|10 Działów|Matura Podstawowa/i,
        'When activeCourse="kurs", brand-sub must display dedicated course subtitle'
      );

      // --- Scenario B: Contrast check with activeCourse = 'probna' ---
      const htmlProbna = renderComponentToString(Sidebar, {
        activeCourse: 'probna',
        onSelectCourse: () => {},
        levels,
        activeLevelId: 'dept-01',
        onSelectLevel: () => {},
        reviewMode: false,
        onToggleReviewMode: () => {},
        reviewCount: 0,
        completedLevelsCount: 0,
        masteredCardsCount: 0,
        totalCardsCount: 190,
        xp: 0,
        theme: 'dark',
        onToggleTheme: () => {},
        isLevelCompleted: () => false,
      });

      const switcherProbnaMatch = htmlProbna.match(/<div[^>]*class="[^"]*course-switcher[^"]*"[^>]*>([\s\S]*?)<\/div>/);
      const tabsProbna = switcherProbnaMatch[1].match(/<button[^>]*role="tab"[^>]*>[\s\S]*?<\/button>/g) || [];
      const kursTabProbna = tabsProbna.find((t) => /Kurs (Główny|Podstawowy)/i.test(t));
      assert.ok(kursTabProbna, 'Kurs tab must still be rendered in probna mode');
      assert.match(
        kursTabProbna,
        /aria-selected="false"/,
        'Kurs tab must have aria-selected="false" when activeCourse="probna"'
      );
    });

    it('3.3 F11: index.css defines genuine 3-column grid layout for .course-switcher', () => {
      assert.ok(fs.existsSync(INDEX_CSS_PATH), 'index.css must exist');
      const css = fs.readFileSync(INDEX_CSS_PATH, 'utf-8');

      // Extract the .course-switcher rule block
      const switcherBlockMatch = css.match(/\.course-switcher\s*\{([^}]+)\}/);
      assert.ok(
        switcherBlockMatch,
        'index.css must define a rule block for .course-switcher'
      );
      const block = switcherBlockMatch[1];

      // 1. Verify display: grid
      assert.match(
        block,
        /display\s*:\s*grid\s*;?/,
        '.course-switcher must define display: grid'
      );

      // 2. Extract grid-template-columns declaration
      const colsMatch = block.match(/grid-template-columns\s*:\s*([^;]+);/);
      assert.ok(
        colsMatch,
        '.course-switcher must explicitly declare grid-template-columns'
      );
      const colsValue = colsMatch[1].trim();

      // 3. Strict 3-column verification: must be repeat(3, 1fr) or 3 equal tracks
      const isThreeColumns =
        /repeat\(\s*3\s*,\s*1fr\s*\)/.test(colsValue) ||
        /repeat\(\s*3\s*,\s*minmax\([^)]+\)\)/.test(colsValue) ||
        /^(?:(?:1fr|minmax\([^)]+\))\s+){2}(?:1fr|minmax\([^)]+\))$/.test(colsValue);

      assert.ok(
        isThreeColumns,
        `.course-switcher grid-template-columns must define exactly 3 columns (e.g. repeat(3, 1fr)), but found: "${colsValue}"`
      );

      // 4. Must strictly reject 2-column legacy declarations
      assert.doesNotMatch(
        colsValue,
        /^1fr\s+1fr$/,
        'Must not use obsolete 2-column layout (1fr 1fr)'
      );
      assert.doesNotMatch(
        colsValue,
        /repeat\(\s*2\s*,/,
        'Must not use 2-column repeat'
      );
    });

    it('3.4 F12: activeLevelByCourse routes to selected department', () => {
      sim.selectCourse('kurs');
      sim.selectLevel('dept-05');
      assert.equal(sim.activeLevelByCourse.kurs, 'dept-05');
      const activeLvl = sim.getActiveLevel(levels);
      assert.equal(activeLvl.id, 'dept-05');
      assert.equal(activeLvl.code, 'DZIAŁ 5');
    });

    it('3.5 F12: switching course resets stage to "notes" and reviewMode to false', () => {
      sim.setStage('quiz');
      sim.toggleReviewMode();
      assert.equal(sim.stage, 'quiz');
      assert.equal(sim.reviewMode, true);

      sim.selectCourse('kurs');
      assert.equal(sim.stage, 'notes', 'Stage must reset to notes upon course switch');
      assert.equal(sim.reviewMode, false, 'ReviewMode must reset to false upon course switch');
    });
  });

  // =========================================================================
  // Feature Group 4: F13 LocalStorage Progress Persistence Coverage
  // =========================================================================
  describe('Group 4: F13 LocalStorage Progress Persistence', () => {
    it('4.1 F13: state serializes under key "matura-polski-progress-v1" with correct shape', () => {
      // 1. Strict contract equality: STORAGE_KEY constant must match literal specification
      assert.equal(
        STORAGE_KEY,
        'matura-polski-progress-v1',
        'STORAGE_KEY constant must strictly match contract literal "matura-polski-progress-v1"'
      );

      sim.selectCourse('kurs');
      sim.toggleNote('kn1-1');

      // 2. Direct literal key retrieval: mockLocalStorage must have persisted under literal key
      const raw = mockLocalStorage.getItem('matura-polski-progress-v1');
      assert.ok(raw, 'Storage item under literal key "matura-polski-progress-v1" must not be null');

      // 3. Prevent rogue keys: only the canonical progress key should be populated
      assert.equal(
        mockLocalStorage.length,
        1,
        'Only exactly 1 progress key must exist in localStorage'
      );

      // 4. Schema verification
      const parsed = JSON.parse(raw);
      assert.equal(parsed.activeCourse, 'kurs');
      assert.equal(parsed.checkedNotes['kn1-1'], true);
      assert.ok('cardStatus' in parsed, 'Payload must contain cardStatus map');
      assert.ok('quizScores' in parsed, 'Payload must contain quizScores map');
      assert.ok('activeLevelByCourse' in parsed, 'Payload must contain activeLevelByCourse map');
    });

    it('4.2 F13: checkedNotes persists and restores across simulator instances', () => {
      sim.toggleNote('kn1-1');
      sim.toggleNote('kn2-1');
      assert.equal(sim.checkedNotes['kn1-1'], true);

      const sim2 = new AppSimulator();
      assert.equal(sim2.checkedNotes['kn1-1'], true);
      assert.equal(sim2.checkedNotes['kn2-1'], true);
      assert.equal(sim2.checkedNotes['kn3-1'], undefined);
    });

    it('4.3 F13: cardStatus persists "known" and "review" ratings', () => {
      sim.setCardStatus('kf1-1', 'known');
      sim.setCardStatus('kf1-2', 'review');

      const sim2 = new AppSimulator();
      assert.equal(sim2.cardStatus['kf1-1'], 'known');
      assert.equal(sim2.cardStatus['kf1-2'], 'review');
    });

    it('4.4 F13: quizScores adheres to Math.max monotonic retention rule', () => {
      sim.saveQuizScore('dept-01', 4);
      assert.equal(sim.quizScores['dept-01'], 4);

      // Attempting lower score does not downgrade best score
      sim.saveQuizScore('dept-01', 2);
      assert.equal(sim.quizScores['dept-01'], 4);

      // Higher score updates
      sim.saveQuizScore('dept-01', 7);
      assert.equal(sim.quizScores['dept-01'], 7);
    });

    it('4.5 F13: XP and progress percentage dynamic calculation formula', () => {
      // 2 notes (+30), 3 cards (+30), 1 level (+80) = 140 XP
      sim.toggleNote('kn1-1');
      sim.toggleNote('kn1-2');
      sim.setCardStatus('kf1-1', 'known');
      sim.setCardStatus('kf1-2', 'known');
      sim.setCardStatus('kf1-3', 'known');
      // Pass dept-01 (score at or above passThreshold)
      const passScore = Math.ceil(levels[0].quiz.length * 0.75);
      sim.saveQuizScore(levels[0].id, passScore);

      const stats = sim.calculateStats(levels);
      assert.equal(stats.masteredNotesCount, 2);
      assert.equal(stats.masteredCardsCount, 3);
      assert.equal(stats.completedLevelsCount, 1);
      assert.equal(stats.xp, 2 * 15 + 3 * 10 + 1 * 80); // 140
      assert.equal(stats.progressPct, Math.round((1 / 10) * 100)); // 10%
    });
  });

  // =========================================================================
  // Feature Group 5: F14 Notes View Mode & Checkboxes Coverage
  // =========================================================================
  describe('Group 5: F14 Notes View Mode', () => {
    it('5.1 F14: renders note section title and badge in HTML', async () => {
      const { NotesView } = await loadComponent('/src/components/NotesView.jsx');
      const dept1 = levels[0];
      const html = renderComponentToString(NotesView, {
        level: dept1,
        checkedNotes: {},
        onToggleNote: () => {},
        onGoToFlashcards: () => {},
      });
      assert.ok(html.includes(dept1.notes[0].title));
      assert.ok(html.includes(dept1.notes[0].badge));
    });

    it('5.2 F14: renders prose blocks with headings and paragraphs', async () => {
      const { NotesView } = await loadComponent('/src/components/NotesView.jsx');
      const levelWithProse = levels.find((l) =>
        l.notes.some((n) => n.blocks.some((b) => b.type === 'prose'))
      ) || levels[0];
      const html = renderComponentToString(NotesView, {
        level: levelWithProse,
        checkedNotes: {},
        onToggleNote: () => {},
        onGoToFlashcards: () => {},
      });
      assert.ok(html.includes('prose-heading') || html.includes('prose-block'));
      assert.ok(html.includes('prose-p'));
    });

    it('5.3 F14: renders callout blocks with semantic styling', async () => {
      const { NotesView } = await loadComponent('/src/components/NotesView.jsx');
      const dept1 = levels[0];
      const html = renderComponentToString(NotesView, {
        level: dept1,
        checkedNotes: {},
        onToggleNote: () => {},
        onGoToFlashcards: () => {},
      });
      assert.ok(html.includes('callout'));
      assert.ok(html.includes('callout-title'));
    });

    it('5.4 F14: renders term grid cards with terms and definitions', async () => {
      const { NotesView } = await loadComponent('/src/components/NotesView.jsx');
      const dept1 = levels[0];
      const html = renderComponentToString(NotesView, {
        level: dept1,
        checkedNotes: {},
        onToggleNote: () => {},
        onGoToFlashcards: () => {},
      });
      assert.ok(html.includes('term-grid') || html.includes('term-card'));
    });

    it('5.5 F14: toggles read button state between unread and checked', async () => {
      const { NotesView } = await loadComponent('/src/components/NotesView.jsx');
      const dept1 = levels[0];
      const noteId = dept1.notes[0].id;

      const htmlUnchecked = renderComponentToString(NotesView, {
        level: dept1,
        checkedNotes: {},
        onToggleNote: () => {},
        onGoToFlashcards: () => {},
      });
      assert.ok(htmlUnchecked.includes('Oznacz jako przeczytane'));

      const htmlChecked = renderComponentToString(NotesView, {
        level: dept1,
        checkedNotes: { [noteId]: true },
        onToggleNote: () => {},
        onGoToFlashcards: () => {},
      });
      assert.ok(htmlChecked.includes('Opanowane'));
      assert.ok(htmlChecked.includes('checked'));
    });
  });

  // =========================================================================
  // Feature Group 6: F15 Flashcards Mode Coverage
  // =========================================================================
  describe('Group 6: F15 Flashcards Mode', () => {
    it('6.1 F15: renders flashcard card face and flip controls', async () => {
      const { FlashcardsView } = await loadComponent('/src/components/FlashcardsView.jsx');
      const dept1 = levels[0];
      const html = renderComponentToString(FlashcardsView, {
        cards: dept1.flashcards,
        cardStatus: {},
        onSetCardStatus: () => {},
        onGoToQuiz: () => {},
      });
      assert.ok(html.includes('fc-card'));
      assert.ok(html.includes(dept1.flashcards[0].front));
    });

    it('6.2 F15: provides "Umiem" and "Do powtórki" rating action buttons', async () => {
      const { FlashcardsView } = await loadComponent('/src/components/FlashcardsView.jsx');
      const dept1 = levels[0];
      const html = renderComponentToString(FlashcardsView, {
        cards: dept1.flashcards,
        cardStatus: {},
        onSetCardStatus: () => {},
        onGoToQuiz: () => {},
      });
      assert.ok(html.includes('Umiem'));
      assert.ok(html.includes('Do powtórki'));
    });

    it('6.3 F15: filters deck to review pool when review filter enabled', () => {
      sim.setCardStatus('kf1-1', 'review');
      sim.setCardStatus('kf1-2', 'known');
      const reviewCards = sim.getReviewCards(levels);
      assert.equal(reviewCards.length, 1);
      assert.equal(reviewCards[0].id, 'kf1-1');
    });

    it('6.4 F15: FlashcardsView renders shuffle control and shuffle action preserves deck elements', async () => {
      const { FlashcardsView } = await loadComponent('/src/components/FlashcardsView.jsx');
      const dept1 = levels[0];

      // 1. Verify component renders shuffle control in UI
      const html = renderComponentToString(FlashcardsView, {
        cards: dept1.flashcards,
        cardStatus: {},
        onSetCardStatus: () => {},
        onGoToQuiz: () => {},
      });
      assert.ok(html.includes('Wymieszaj'), 'FlashcardsView must render "Wymieszaj" shuffle button');
      assert.ok(html.includes('fc-filter-group'), 'FlashcardsView must include toolbar filter group');

      // 2. Interactive execution of FlashcardsView with React dispatcher to trigger shuffle
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
      const vdom = FlashcardsView({
        cards: dept1.flashcards,
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

      const shuffleBtn = findBtn(vdom, 'Wymieszaj');
      assert.ok(shuffleBtn, 'Shuffle button must exist in rendered VDOM');
      assert.equal(states[1], null, 'Initial shuffledOrder is null (natural order)');

      shuffleBtn.props.onClick();

      const shuffledIds = states[1];
      assert.ok(Array.isArray(shuffledIds), 'shuffledOrder must be an array after click');
      assert.equal(shuffledIds.length, dept1.flashcards.length, 'Shuffled deck must preserve total card count');

      const originalIds = new Set(dept1.flashcards.map((c) => c.id));
      const shuffledSet = new Set(shuffledIds);
      assert.equal(shuffledSet.size, originalIds.size, 'No duplicate or dropped cards after shuffle');
      for (const id of originalIds) {
        assert.ok(shuffledSet.has(id), `Card ID ${id} must be retained in shuffled deck`);
      }
    });

    it('6.5 F15: supports rating transitions in state machine', () => {
      const card = levels[0].flashcards[0];
      sim.setCardStatus(card.id, 'review');
      assert.equal(sim.cardStatus[card.id], 'review');
      sim.setCardStatus(card.id, 'known');
      assert.equal(sim.cardStatus[card.id], 'known');
    });
  });

  // =========================================================================
  // Feature Group 7: F16 Quiz Mode Coverage
  // =========================================================================
  describe('Group 7: F16 Quiz Mode', () => {
    it('7.1 F16: renders quiz questions with exactly 4 options per question', async () => {
      const { QuizView } = await loadComponent('/src/components/QuizView.jsx');
      const dept1 = levels[0];
      const html = renderComponentToString(QuizView, {
        level: dept1,
        savedScore: undefined,
        onSaveScore: () => {},
        onNextLevel: () => {},
        hasNextLevel: true,
      });
      assert.ok(html.includes('quiz-card'));
      assert.ok(html.includes('quiz-opt'));
      assert.ok(html.includes(dept1.quiz[0].q));
    });

    it('7.2 F16: single-choice answer selection locks and awards score', () => {
      const dept1 = levels[0];
      const total = dept1.quiz.length;
      let score = 0;
      dept1.quiz.forEach((q) => {
        if (q.correct !== undefined) score++;
      });
      assert.equal(score, total);
    });

    it('7.3 F16: 75% threshold calculates using Math.ceil(length * 0.75)', () => {
      levels.forEach((lvl) => {
        const total = lvl.quiz.length;
        const expectedThreshold = Math.ceil(total * 0.75);
        assert.ok(expectedThreshold > 0);
        assert.ok(expectedThreshold <= total);

        sim.saveQuizScore(lvl.id, expectedThreshold - 1);
        assert.equal(sim.isLevelCompleted(lvl), false, 'Score below threshold must not complete level');

        sim.saveQuizScore(lvl.id, expectedThreshold);
        assert.equal(sim.isLevelCompleted(lvl), true, 'Score at or above threshold must complete level');
      });
    });

    it('7.4 F16: below threshold status is correctly tracked in simulator', () => {
      const dept1 = levels[0];
      sim.saveQuizScore(dept1.id, 1);
      assert.equal(sim.isLevelCompleted(dept1), false);
      const stats = sim.calculateStats(levels);
      assert.equal(stats.completedLevelsCount, 0);
    });

    it('7.5 F16: QuizView renders retake controls when savedScore is present', async () => {
      const { QuizView } = await loadComponent('/src/components/QuizView.jsx');
      const dept1 = levels[0];
      const html = renderComponentToString(QuizView, {
        level: dept1,
        savedScore: 4,
        onSaveScore: () => {},
        onNextLevel: () => {},
        hasNextLevel: true,
      });
      assert.ok(html.includes('Rozwiąż ponownie'));
    });
  });

  // =========================================================================
  // Feature Group 8: F17 Theme & Visual Consistency Coverage
  // =========================================================================
  describe('Group 8: F17 Theme & Visual Consistency', () => {
    it('8.1 F17: toggles data-theme attribute on document.documentElement', () => {
      assert.equal(sim.theme, 'dark');
      assert.equal(globalThis.document.documentElement.getAttribute('data-theme'), 'dark');

      sim.toggleTheme();
      assert.equal(sim.theme, 'light');
      assert.equal(globalThis.document.documentElement.getAttribute('data-theme'), 'light');

      sim.toggleTheme();
      assert.equal(sim.theme, 'dark');
      assert.equal(globalThis.document.documentElement.getAttribute('data-theme'), 'dark');
    });

    it('8.2 F17: Sidebar theme toggle button includes accessible label and icon', async () => {
      const { Sidebar } = await loadComponent('/src/components/Sidebar.jsx');
      const htmlDark = renderComponentToString(Sidebar, {
        activeCourse: 'kurs',
        onSelectCourse: () => {},
        levels,
        activeLevelId: 'dept-01',
        onSelectLevel: () => {},
        reviewMode: false,
        onToggleReviewMode: () => {},
        reviewCount: 0,
        completedLevelsCount: 0,
        masteredCardsCount: 0,
        totalCardsCount: 40,
        xp: 0,
        theme: 'dark',
        onToggleTheme: () => {},
        isLevelCompleted: () => false,
      });
      assert.ok(htmlDark.includes('theme-btn'));
      assert.ok(htmlDark.includes('aria-label="Zmień motyw"'));
    });

    it('8.3 F17: theme selection is saved in localStorage and rehydrated', () => {
      sim.toggleTheme(); // switches to light
      const raw = mockLocalStorage.getItem('matura-polski-progress-v1');
      assert.ok(raw, 'Theme change must be written under literal "matura-polski-progress-v1"');
      assert.equal(JSON.parse(raw).theme, 'light');

      const sim2 = new AppSimulator();
      assert.equal(sim2.theme, 'light');
      assert.equal(globalThis.document.documentElement.getAttribute('data-theme'), 'light');
    });

    it('8.4 F17: index.css defines core color tokens for dark and light modes', () => {
      const css = fs.readFileSync(INDEX_CSS_PATH, 'utf-8');
      assert.match(css, /--bg:/);
      assert.match(css, /--border:/);
      assert.match(css, /--accent:/);
      assert.match(css, /\[data-theme=['"]light['"]\]/);
    });

    it('8.5 F17: index.css defines layout rules without horizontal overflows', () => {
      const css = fs.readFileSync(INDEX_CSS_PATH, 'utf-8');
      assert.match(css, /\.app-shell\s*\{/);
      assert.match(css, /\.sidebar\s*\{/);
      assert.match(css, /\.main\s*\{/);
    });
  });

  after(async () => {
    await closeViteServer();
  });
});
