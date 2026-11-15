import { describe, it, beforeEach, after } from 'node:test';
import assert from 'node:assert/strict';

import { AppSimulator, STORAGE_KEY } from './helpers/app-simulator.js';
import { mockLocalStorage, resetMockStorage } from './helpers/mock-browser.js';
import { loadKursPodstawowyLevels } from './helpers/test-data.js';
import { loadComponent, renderComponentToString, closeViteServer } from './helpers/component-loader.js';

describe('Tier 4: Real-World Student Workload Scenarios (5 Comprehensive Workflows)', async () => {
  const { levels } = await loadKursPodstawowyLevels();
  let sim;

  beforeEach(() => {
    resetMockStorage();
    sim = new AppSimulator();
  });

  // =========================================================================
  // Scenario 1: Comprehensive First-Day Onboarding in Dept 01
  // =========================================================================
  it('Scenario 1: Janek — First-day onboarding in Dept 01 (Notes -> Flashcards -> 100% Quiz -> Milestone)', async () => {
    // 1. Janek opens app, switches to Kurs Główny
    sim.selectCourse('kurs');
    assert.equal(sim.activeCourse, 'kurs');

    // 2. Initial state verification: clean slate
    const initialStats = sim.calculateStats(levels);
    assert.equal(initialStats.xp, 0);
    assert.equal(initialStats.completedLevelsCount, 0);
    assert.equal(initialStats.progressPct, 0);

    const dept1 = levels[0];
    assert.equal(dept1.id, 'dept-01');

    // 3. Studying notes: marks all note sections in Dept 01 as read
    dept1.notes.forEach((note) => {
      sim.toggleNote(note.id);
    });
    const afterNotesStats = sim.calculateStats(levels);
    assert.equal(afterNotesStats.masteredNotesCount, dept1.notes.length);
    assert.equal(afterNotesStats.xp, dept1.notes.length * 15);

    // 4. Flashcards active recall: rates 2 cards as review, rest as known
    sim.setStage('flashcards');
    assert.equal(sim.stage, 'flashcards');
    const cards = dept1.flashcards;
    assert.ok(cards.length >= 2);

    sim.setCardStatus(cards[0].id, 'review');
    sim.setCardStatus(cards[1].id, 'review');
    for (let i = 2; i < cards.length; i++) {
      sim.setCardStatus(cards[i].id, 'known');
    }
    const afterCardsStats = sim.calculateStats(levels);
    assert.equal(afterCardsStats.reviewCount, 2);
    assert.equal(afterCardsStats.masteredCardsCount, cards.length - 2);

    // 5. Quiz challenge: scores 100%
    sim.setStage('quiz');
    const totalQ = dept1.quiz.length;
    sim.saveQuizScore(dept1.id, totalQ);

    // 6. Milestone verification: level completed, 80 XP bonus, 10% progress
    assert.equal(sim.isLevelCompleted(dept1), true);
    const finalStats = sim.calculateStats(levels);
    assert.equal(finalStats.completedLevelsCount, 1);
    assert.equal(finalStats.progressPct, 10);
    const expectedXP =
      dept1.notes.length * 15 + (cards.length - 2) * 10 + 1 * 80;
    assert.equal(finalStats.xp, expectedXP);

    // 7. Persistence verification: exact values in localStorage
    const saved = mockLocalStorage._getJSON(STORAGE_KEY);
    assert.equal(saved.activeCourse, 'kurs');
    assert.equal(saved.quizScores['dept-01'], totalQ);
    assert.equal(saved.cardStatus[cards[0].id], 'review');
    assert.equal(saved.cardStatus[cards[2].id], 'known');
  });

  // =========================================================================
  // Scenario 2: High-Stakes Reading Mastery & Spaced Repetition in Dept 04
  // =========================================================================
  it('Scenario 2: Zuzia — High-stakes reading mastery in Romantyzm & Spaced Repetition drill', async () => {
    // 1. Zuzia navigates to Dział 4 (Romantyzm)
    sim.selectCourse('kurs');
    const dept4 = levels.find((l) => l.id === 'dept-04') || levels[3];
    assert.ok(dept4, 'Department 4 must exist');
    sim.selectLevel(dept4.id);
    assert.equal(sim.activeLevelByCourse.kurs, dept4.id);

    // 2. Studies notes on Dziady cz. III and Kordian
    const noteIds = dept4.notes.map((n) => n.id);
    noteIds.forEach((id) => sim.toggleNote(id));
    let stats = sim.calculateStats(levels);
    assert.equal(stats.masteredNotesCount, noteIds.length);

    // 3. Flags tricky flashcards as 'review'
    const trickyCards = dept4.flashcards.slice(0, 3);
    trickyCards.forEach((c) => sim.setCardStatus(c.id, 'review'));
    stats = sim.calculateStats(levels);
    assert.equal(stats.reviewCount, 3);

    // 4. Global spaced repetition review drill
    sim.toggleReviewMode();
    assert.equal(sim.reviewMode, true);
    const reviewDeck = sim.getReviewCards(levels);
    assert.equal(reviewDeck.length, 3);

    // 5. Masters all cards in review drill
    reviewDeck.forEach((c) => sim.setCardStatus(c.id, 'known'));
    stats = sim.calculateStats(levels);
    assert.equal(stats.reviewCount, 0, 'Review pool must be emptied');
    assert.equal(stats.masteredCardsCount, 3, 'Mastered cards incremented');

    const emptyPool = sim.getReviewCards(levels);
    assert.equal(emptyPool.length, 0);
  });

  // =========================================================================
  // Scenario 3: Essay Preparation & Threshold Mastery in Dept 10
  // =========================================================================
  it('Scenario 3: Michał — Essay prep in Dept 10 (Fail attempt -> Remediation -> 75% Threshold Pass)', async () => {
    // 1. Michał navigates to Dept 10
    sim.selectCourse('kurs');
    const dept10 = levels.find((l) => l.id === 'dept-10') || levels[9];
    sim.selectLevel(dept10.id);

    // 2. Studies essay and motifs notes
    dept10.notes.forEach((n) => sim.toggleNote(n.id));

    // 3. Quiz Attempt 1 (Failure: score below 75% threshold)
    const passThreshold = Math.ceil(dept10.quiz.length * 0.75);
    const failScore = passThreshold - 1;
    sim.saveQuizScore(dept10.id, failScore);

    // 4. Verifies failure state
    assert.equal(sim.isLevelCompleted(dept10), false, 'Must not pass on score < threshold');
    let stats = sim.calculateStats(levels);
    assert.equal(stats.completedLevelsCount, 0);
    assert.equal(stats.progressPct, 0);

    // 5. Remediation: Retakes quiz and achieves passing score
    sim.saveQuizScore(dept10.id, passThreshold);

    // 6. Verifies success state
    assert.equal(sim.isLevelCompleted(dept10), true, 'Must pass on score >= threshold');
    stats = sim.calculateStats(levels);
    assert.equal(stats.completedLevelsCount, 1);
    assert.equal(stats.progressPct, 10);
    assert.ok(stats.xp >= 80, 'Level completion awards 80 XP');
    assert.equal(sim.quizScores[dept10.id], passThreshold);
  });

  // =========================================================================
  // Scenario 4: Multi-Course Concurrent Preparation
  // =========================================================================
  it('Scenario 4: Ola — Concurrent multi-course preparation (Kurs Główny ↔ Próbna ↔ Ustna)', async () => {
    const { LEVELS } = await loadComponent('/src/data/levels.js');
    const { ORAL_LEVELS } = await loadComponent('/src/data/oralLevels.js');

    // 1. Kurs Główny work: check note in Dept 01, rate 2 cards known
    sim.selectCourse('kurs');
    sim.selectLevel('dept-01');
    sim.toggleNote('kn1-1');
    sim.setCardStatus(levels[0].flashcards[0].id, 'known');
    sim.setCardStatus(levels[0].flashcards[1].id, 'known');

    // 2. Matura Próbna work: select level 2, score 100%
    sim.selectCourse('probna');
    sim.selectLevel(2);
    const probnaLvl2 = LEVELS.find((l) => l.id === 2) || LEVELS[1];
    sim.saveQuizScore(probnaLvl2.id, probnaLvl2.quiz.length);

    // 3. Matura Ustna work: select level 101, rate oral card known
    sim.selectCourse('ustna');
    sim.selectLevel(101);
    sim.setCardStatus(ORAL_LEVELS[0].flashcards[0].id, 'known');

    // 4. Return to Kurs Główny and verify complete isolation
    sim.selectCourse('kurs');
    assert.equal(sim.activeCourse, 'kurs');
    assert.equal(sim.activeLevelByCourse.kurs, 'dept-01');
    assert.equal(sim.activeLevelByCourse.probna, 2);
    assert.equal(sim.activeLevelByCourse.ustna, 101);

    assert.equal(sim.checkedNotes['kn1-1'], true);
    assert.equal(sim.cardStatus[levels[0].flashcards[0].id], 'known');
    assert.equal(sim.quizScores[probnaLvl2.id], probnaLvl2.quiz.length);
    assert.equal(sim.cardStatus[ORAL_LEVELS[0].flashcards[0].id], 'known');

    // Course stats are scoped to active course
    const kursStats = sim.calculateStats(levels);
    assert.equal(kursStats.masteredNotesCount, 1);
    assert.equal(kursStats.masteredCardsCount, 2);
  });

  // =========================================================================
  // Scenario 5: Multi-Session Cold Start & Interrupted Learning Recovery
  // =========================================================================
  it('Scenario 5: Bartek — Cold start rehydration and crash recovery from localStorage', async () => {
    // 1. Session 1 Activity
    sim.toggleTheme(); // switch to 'light'
    sim.selectCourse('kurs');
    const dept3 = levels.find((l) => l.id === 'dept-03') || levels[2];
    sim.selectLevel(dept3.id);

    // Checks 2 notes in Dept 3
    sim.toggleNote(dept3.notes[0].id);
    if (dept3.notes[1]) sim.toggleNote(dept3.notes[1].id);

    // Rates 3 cards
    sim.setCardStatus(dept3.flashcards[0].id, 'known');
    if (dept3.flashcards[1]) sim.setCardStatus(dept3.flashcards[1].id, 'known');
    if (dept3.flashcards[2]) sim.setCardStatus(dept3.flashcards[2].id, 'review');

    // Solves Dept 3 quiz with passing score
    const passScore = Math.ceil(dept3.quiz.length * 0.75);
    sim.saveQuizScore(dept3.id, passScore);

    const preCrashStats = sim.calculateStats(levels);

    // 2. Abrupt interruption simulation (window close)
    sim = null;

    // 3. Cold Start: user reopens application next morning
    const coldSim = new AppSimulator();

    // 4. Assertions: complete state rehydration
    assert.equal(coldSim.theme, 'light', 'Theme must rehydrate to light');
    assert.equal(globalThis.document.documentElement.getAttribute('data-theme'), 'light');
    assert.equal(coldSim.activeCourse, 'kurs', 'Active course must restore to kurs');
    assert.equal(coldSim.activeLevelByCourse.kurs, dept3.id, 'Active department must restore to dept-03');
    assert.equal(coldSim.stage, 'notes', 'Stage defaults to notes');
    assert.equal(coldSim.reviewMode, false, 'Review mode defaults to false');

    const postCrashStats = coldSim.calculateStats(levels);
    assert.equal(postCrashStats.xp, preCrashStats.xp, 'XP must match pre-crash value');
    assert.equal(postCrashStats.completedLevelsCount, preCrashStats.completedLevelsCount);
    assert.equal(postCrashStats.masteredNotesCount, preCrashStats.masteredNotesCount);
    assert.equal(postCrashStats.masteredCardsCount, preCrashStats.masteredCardsCount);
    assert.equal(postCrashStats.reviewCount, preCrashStats.reviewCount);
  });

  after(async () => {
    await closeViteServer();
  });
});
