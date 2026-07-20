export type Difficulty = "warmup" | "core" | "challenge";

export interface Discovery {
  /** A problem posed BEFORE the idea is taught — the learner should attempt it first. */
  problem: string;
  /** The idea the problem motivates, revealed after an attempt. */
  idea: string;
}

export interface GuideSection {
  heading: string;
  /** Markdown-lite: paragraphs split by blank lines, **bold**, *italic*, `code`, lines starting with "- " are bullets. */
  body: string;
  discovery?: Discovery;
  /** Named problem-solving strategies used in this section. */
  strategies?: string[];
  /** Short derivation / intuition for why the rule works. */
  whyItWorks?: string;
  keyPoints?: string[];
}

export interface MCQ {
  id: string; // globally unique, e.g. "merton-q3"
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  difficulty: Difficulty;
  /** Hint ladder: gentle nudge -> bigger hint -> key step. Revealed one at a time. */
  hints?: string[];
  /** Named strategy tag, e.g. "Try small cases". */
  strategy?: string;
  /** Index into topic.guide for a "back to the guide" link. */
  guideRef?: number;
}

export interface Topic {
  id: string;
  title: string;
  icon: string; // emoji
  part: string; // book part, e.g. "Part I — Lessons from the coin flip"
  order: number;
  /** Which learning track the topic belongs to. Defaults to "book" (The Missing Billionaires). */
  track?: "book" | "wealth";
  tagline: string;
  intro: string;
  guide: GuideSection[];
  quiz: MCQ[];
  /** Key into the explorable-widget registry. */
  interactive: string;
  interactiveTitle: string;
  interactiveBlurb: string;
}
