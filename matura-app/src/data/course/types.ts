/**
 * Types for the Complete CKE Matura Podstawowa Course
 * matura-app/src/data/course/types.ts
 */

export type CalloutVariant = 'amber' | 'emerald' | 'blue';

export interface CalloutBlock {
  type: 'callout';
  variant: CalloutVariant;
  title: string;
  items: string[];
}

export interface QuoteBlock {
  type: 'quote';
  label: string;
  text: string;
}

export interface GridItemDetails {
  summary?: string;
  bullets?: string[];
  essayUse?: string;
}

export interface GridItem {
  term: string;
  desc: string;
  details?: GridItemDetails;
}

export interface GridBlock {
  type: 'grid';
  items: GridItem[];
}

export interface ProseBlock {
  type: 'prose';
  heading?: string;
  paragraphs: string[];
}

export type ContentBlock = ProseBlock | CalloutBlock | QuoteBlock | GridBlock;

export interface StudyNote {
  id: string;                    // np. 'kn9-1', 'kn10-1'
  title: string;
  badge: string;
  intro?: string;
  blocks: ContentBlock[];
}

export type FlashcardCategory =
  | 'lektura'
  | 'pojecie'
  | 'motyw'
  | 'cytat'
  | 'bohater'
  | 'kontekst'
  | 'wypracowanie';

export interface Flashcard {
  id: string;                    // np. 'kf9-1', 'kf10-1'
  front: string;
  back: string;
  hint?: string;
  category?: FlashcardCategory;
}

export interface QuizQuestion {
  id?: string;                   // np. 'kq9-1', 'kq10-1'
  q: string;
  options: [string, string, string, string]; // dokładnie 4 opcje
  correct: number;               // 0..3
  explanation: string;
  whyWrong?: {
    0?: string;
    1?: string;
    2?: string;
    3?: string;
  };
  examTip?: string;
}

export interface CourseDepartment {
  id: string;                    // np. 'dept-09', 'dept-10'
  displayNum: number;            // 1..10
  code: string;                  // np. 'DZIAŁ 9', 'DZIAŁ 10'
  title: string;
  subtitle: string;
  duration: string;              // np. '85 min', '100 min'
  xp: number;                    // np. 260, 300
  notes: StudyNote[];
  flashcards: Flashcard[];
  quiz: QuizQuestion[];
}
