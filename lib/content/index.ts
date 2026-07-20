import type { MCQ, Topic } from "../types";
import { missingBillionaires } from "./missing-billionaires";
import { coinFlip } from "./coin-flip";
import { expectedUtility } from "./expected-utility";
import { riskAndReturn } from "./risk-and-return";
import { volatilityDrag } from "./volatility-drag";
import { mertonShare } from "./merton-share";
import { kellyCriterion } from "./kelly-criterion";
import { beyondNormal } from "./beyond-normal";
import { lifetimeSpending } from "./lifetime-spending";
import { annuitiesInsurance } from "./annuities-insurance";
import { humanCapital } from "./human-capital";
import { taxesAndPractice } from "./taxes-and-practice";

export const TOPICS: Topic[] = [
  missingBillionaires,
  coinFlip,
  expectedUtility,
  riskAndReturn,
  volatilityDrag,
  mertonShare,
  kellyCriterion,
  beyondNormal,
  lifetimeSpending,
  annuitiesInsurance,
  humanCapital,
  taxesAndPractice,
].sort((a, b) => a.order - b.order);

export const TOPIC_BY_ID: Record<string, Topic> = Object.fromEntries(
  TOPICS.map((t) => [t.id, t])
);

export const QUESTION_INDEX: Record<string, MCQ & { topicId: string }> = {};
for (const t of TOPICS) {
  for (const q of t.quiz) {
    if (QUESTION_INDEX[q.id]) {
      throw new Error(`Duplicate question id: ${q.id}`);
    }
    QUESTION_INDEX[q.id] = { ...q, topicId: t.id };
  }
}
