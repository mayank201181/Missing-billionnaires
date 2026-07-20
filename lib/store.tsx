"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Difficulty } from "./types";
import { QUESTION_INDEX } from "./content";

// ---------- progress model ----------

export interface SrsItem {
  step: number; // index into SRS_LADDER; graduates past the end
  due: string; // YYYY-MM-DD
  lapses: number;
}

export interface Progress {
  stars: number;
  /** qid -> best stars earned on that question */
  awarded: Record<string, number>;
  attempts: Record<string, { right: number; wrong: number }>;
  /** topicId -> read section indexes */
  guidesRead: Record<string, number[]>;
  srs: Record<string, SrsItem>;
  streak: { current: number; best: number; lastDay: string };
  /** day (YYYY-MM-DD) -> activity */
  daily: Record<string, { minutes: number; stars: number }>;
  goalMinutes: number;
  /** topicId -> best challenge score */
  challengeBest: Record<string, number>;
}

export const SRS_LADDER = [1, 3, 7, 16, 35]; // days

const STORAGE_KEY = "mb-study-progress-v1";

const emptyProgress = (): Progress => ({
  stars: 0,
  awarded: {},
  attempts: {},
  guidesRead: {},
  srs: {},
  streak: { current: 0, best: 0, lastDay: "" },
  daily: {},
  goalMinutes: 15,
  challengeBest: {},
});

export function today(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

function addDays(day: string, n: number): string {
  const d = new Date(day + "T12:00:00");
  d.setDate(d.getDate() + n);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

export const RANKS: { min: number; name: string; icon: string }[] = [
  { min: 0, name: "Coin Flipper", icon: "🪙" },
  { min: 15, name: "Risk Apprentice", icon: "📈" },
  { min: 40, name: "Utility Thinker", icon: "🧠" },
  { min: 80, name: "Sizing Strategist", icon: "⚖️" },
  { min: 130, name: "Merton Scholar", icon: "🎓" },
  { min: 200, name: "Kelly Master", icon: "🏆" },
  { min: 280, name: "Chief Risk Officer", icon: "🛡️" },
  { min: 380, name: "Billionaire Keeper", icon: "💎" },
];

export function rankFor(stars: number) {
  let r = RANKS[0];
  for (const rank of RANKS) if (stars >= rank.min) r = rank;
  const next = RANKS.find((rank) => rank.min > stars) ?? null;
  return { ...r, next };
}

export function starsFor(difficulty: Difficulty): number {
  return difficulty === "challenge" ? 3 : difficulty === "core" ? 2 : 1;
}

// ---------- context ----------

interface StoreValue {
  ready: boolean;
  progress: Progress;
  recordResult: (qid: string, correct: boolean, hintsUsed: number) => number;
  markSectionRead: (topicId: string, sectionIndex: number) => void;
  recordChallenge: (topicId: string, score: number) => void;
  setGoalMinutes: (m: number) => void;
  dueReviews: string[]; // qids due today or earlier
  todayStats: { minutes: number; stars: number };
}

const StoreContext = createContext<StoreValue | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<Progress>(emptyProgress);
  const [ready, setReady] = useState(false);

  // load once on mount (must run after hydration; localStorage is client-only)
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<Progress>;
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setProgress({ ...emptyProgress(), ...parsed });
      }
    } catch {
      // corrupted storage — start fresh
    }
    setReady(true);
  }, []);

  // persist on change
  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // storage full/unavailable — ignore
    }
  }, [progress, ready]);

  const touchStreak = useCallback((p: Progress): Progress => {
    const day = today();
    if (p.streak.lastDay === day) return p;
    const yesterday = addDays(day, -1);
    const current = p.streak.lastDay === yesterday ? p.streak.current + 1 : 1;
    return {
      ...p,
      streak: { current, best: Math.max(p.streak.best, current), lastDay: day },
    };
  }, []);

  const bumpDaily = useCallback(
    (p: Progress, minutes: number, stars: number): Progress => {
      const day = today();
      const prev = p.daily[day] ?? { minutes: 0, stars: 0 };
      return {
        ...p,
        daily: {
          ...p.daily,
          [day]: { minutes: prev.minutes + minutes, stars: prev.stars + stars },
        },
      };
    },
    []
  );

  // time-on-task heartbeat: +0.5 min per 30s while the tab is visible
  useEffect(() => {
    if (!ready) return;
    const iv = setInterval(() => {
      if (document.visibilityState !== "visible") return;
      setProgress((p) => bumpDaily(p, 0.5, 0));
    }, 30_000);
    return () => clearInterval(iv);
  }, [ready, bumpDaily]);

  const recordResult = useCallback(
    (qid: string, correct: boolean, hintsUsed: number): number => {
      const q = QUESTION_INDEX[qid];
      let earned = 0;
      setProgress((prev) => {
        let p = touchStreak(prev);
        const attempts = { ...p.attempts };
        const a = attempts[qid] ?? { right: 0, wrong: 0 };
        attempts[qid] = correct
          ? { ...a, right: a.right + 1 }
          : { ...a, wrong: a.wrong + 1 };

        // spaced repetition
        const srs = { ...p.srs };
        const item = srs[qid];
        if (!correct) {
          srs[qid] = {
            step: 0,
            due: today(),
            lapses: (item?.lapses ?? 0) + 1,
          };
        } else if (item) {
          const nextStep = item.step + 1;
          if (nextStep >= SRS_LADDER.length) {
            delete srs[qid]; // graduated
          } else {
            srs[qid] = { ...item, step: nextStep, due: addDays(today(), SRS_LADDER[nextStep]) };
          }
        }

        // stars: base by difficulty, +1 bonus for solving with no hints,
        // only the improvement over your previous best is awarded
        const awarded = { ...p.awarded };
        if (correct && q) {
          const base = starsFor(q.difficulty);
          const bonus = hintsUsed === 0 && a.wrong === 0 ? 1 : 0;
          const total = base + bonus;
          const prevBest = awarded[qid] ?? 0;
          earned = Math.max(0, total - prevBest);
          if (earned > 0) awarded[qid] = total;
        }

        p = { ...p, attempts, srs, awarded, stars: p.stars + earned };
        if (earned > 0) p = bumpDaily(p, 0, earned);
        return p;
      });
      return earned;
    },
    [touchStreak, bumpDaily]
  );

  const markSectionRead = useCallback(
    (topicId: string, sectionIndex: number) => {
      setProgress((prev) => {
        const read = prev.guidesRead[topicId] ?? [];
        if (read.includes(sectionIndex)) return prev;
        const p = touchStreak(prev);
        return {
          ...p,
          guidesRead: {
            ...p.guidesRead,
            [topicId]: [...read, sectionIndex].sort((x, y) => x - y),
          },
        };
      });
    },
    [touchStreak]
  );

  const recordChallenge = useCallback(
    (topicId: string, score: number) => {
      setProgress((prev) => {
        const p = touchStreak(prev);
        const best = p.challengeBest[topicId] ?? 0;
        if (score <= best) return p;
        return { ...p, challengeBest: { ...p.challengeBest, [topicId]: score } };
      });
    },
    [touchStreak]
  );

  const setGoalMinutes = useCallback((m: number) => {
    setProgress((prev) => ({ ...prev, goalMinutes: m }));
  }, []);

  const dueReviews = useMemo(() => {
    const day = today();
    return Object.entries(progress.srs)
      .filter(([qid, item]) => item.due <= day && QUESTION_INDEX[qid])
      .map(([qid]) => qid);
  }, [progress.srs]);

  const todayStats = progress.daily[today()] ?? { minutes: 0, stars: 0 };

  const value: StoreValue = {
    ready,
    progress,
    recordResult,
    markSectionRead,
    recordChallenge,
    setGoalMinutes,
    dueReviews,
    todayStats,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore(): StoreValue {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}
