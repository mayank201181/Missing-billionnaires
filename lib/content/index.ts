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
import { preservationMandate } from "./preservation-mandate";
import { sizingBeatsSelection } from "./sizing-beats-selection";
import { diversification } from "./diversification";
import { assetMenu } from "./asset-menu";
import { policyPortfolio } from "./policy-portfolio";
import { concentratedWealth } from "./concentrated-wealth";
import { drawdownsLeverage } from "./drawdowns-leverage";
import { familyOffice } from "./family-office";

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
  preservationMandate,
  sizingBeatsSelection,
  diversification,
  assetMenu,
  policyPortfolio,
  concentratedWealth,
  drawdownsLeverage,
  familyOffice,
].sort((a, b) => a.order - b.order);

export const TOPIC_BY_ID: Record<string, Topic> = Object.fromEntries(
  TOPICS.map((t) => [t.id, t])
);

export const BOOK_TOPICS = TOPICS.filter((t) => (t.track ?? "book") === "book");
export const WEALTH_TOPICS = TOPICS.filter((t) => t.track === "wealth");

export const QUESTION_INDEX: Record<string, MCQ & { topicId: string }> = {};
for (const t of TOPICS) {
  for (const q of t.quiz) {
    if (QUESTION_INDEX[q.id]) {
      throw new Error(`Duplicate question id: ${q.id}`);
    }
    QUESTION_INDEX[q.id] = { ...q, topicId: t.id };
  }
}
