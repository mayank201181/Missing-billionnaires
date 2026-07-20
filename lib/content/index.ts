import type { MCQ, Topic } from "../types";
import { missingBillionaires } from "./missing-billionaires";

export const TOPICS: Topic[] = [missingBillionaires].sort(
  (a, b) => a.order - b.order
);

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
