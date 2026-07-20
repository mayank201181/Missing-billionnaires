"use client";

import { useMemo } from "react";
import Link from "next/link";
import { QUESTION_INDEX } from "@/lib/content";
import { useStore } from "@/lib/store";
import { QuizRunner } from "@/components/QuizRunner";

export default function ReviewPage() {
  const { ready, dueReviews, progress } = useStore();

  // freeze the due list on first render so answering doesn't reshuffle mid-run
  const questions = useMemo(
    () => dueReviews.map((qid) => QUESTION_INDEX[qid]).filter(Boolean),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ready]
  );

  const upcoming = Object.entries(progress.srs).length - dueReviews.length;

  if (!ready) return null;

  return (
    <div className="pt-8 space-y-6">
      <div>
        <Link href="/" className="text-sm text-muted hover:text-accent">
          ← All topics
        </Link>
        <h1 className="text-3xl font-semibold mt-2">🔁 Review queue</h1>
        <p className="text-muted mt-1">
          Questions you missed come back on a spaced schedule (1, 3, 7, 16, then 35 days).
          Answer correctly to push them further out; miss again and they reset.
        </p>
      </div>

      {questions.length === 0 ? (
        <div className="card p-10 text-center">
          <div className="text-5xl mb-3">🌤️</div>
          <h2 className="text-xl font-semibold mb-1">Nothing due right now</h2>
          <p className="text-muted">
            {upcoming > 0
              ? `${upcoming} question${upcoming === 1 ? " is" : "s are"} scheduled for later — keep quizzing to stay sharp.`
              : "Miss a quiz question anywhere in the app and it will appear here on a spaced-repetition schedule."}
          </p>
          <Link
            href="/"
            className="inline-block mt-5 px-5 py-2.5 rounded-lg bg-accent text-white font-medium hover:opacity-90"
          >
            Browse topics
          </Link>
        </div>
      ) : (
        <QuizRunner questions={questions} title="Spaced review" />
      )}
    </div>
  );
}
