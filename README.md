# The Missing Billionaires — Study Lab

An interactive study guide to *The Missing Billionaires: A Guide to Better Financial Decisions* by Victor Haghani & James White. Learn the whole book step by step: why sizing beats stock-picking, how expected utility turns risk into arithmetic, and how to make every big money decision with one framework.

**Live app:** https://missing-billionaires-study.vercel.app

## What's inside

- **12 topics covering the full book** across four parts — the missing-billionaires puzzle, the $25 biased-coin experiment, expected utility & risk aversion, estimating risk & return, volatility drag, the Merton share, the Kelly criterion, fat tails & options, lifetime spending rules, annuities & insurance, human capital, and taxes & the closing checklist.
- **Problem-first guides** — each section opens with a "try this first" problem, then reveals the idea, with *why it works* derivations and named strategy tags.
- **Quizzes with hint ladders** — 96 questions in warm-up / core / challenge tiers; hints unlock one step at a time and hint-free solves earn a bonus star.
- **An interactive explorable per topic** — dynasty compounding simulator, coin-flip casino, utility-curve explorer, portfolio mixer, volatility-drag machine, Merton share calculator, Kelly curve, option payoff sculptor, retirement spending lab, annuity desk, total-wealth balance sheet, and tax-drag meter.
- **Spaced repetition** — missed questions come back on a 1/3/7/16/35-day schedule.
- **Gamification** — stars, ranks, daily streaks, a daily-minutes goal, and a timed challenge mode per topic.
- **AI tutor** — Socratic hints and explanations on every topic (needs an API key, see below).

Progress is stored in the browser (`localStorage`) — no account needed.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Enabling the AI tutor

The tutor endpoint (`app/api/ai/route.ts`) uses the Anthropic API. Without a key the rest of the app works fine and the tutor shows a friendly notice. To enable it, set:

```
ANTHROPIC_API_KEY=sk-ant-...
AI_MODEL=claude-opus-4-8   # optional override
```

locally in `.env.local`, or in the Vercel project's environment variables (Settings → Environment Variables), then redeploy.

## Project layout

- `lib/types.ts` — content data model (topics, guide sections, MCQs with hints/difficulty)
- `lib/content/` — one audited content module per topic + registry (`index.ts`)
- `lib/store.tsx` — progress store: stars, streaks, spaced repetition, daily goals
- `components/` — learning engine (GuideView, QuizRunner, ChallengeMode, AskAI)
- `components/explorables/` — the 12 interactive widgets + shared chart/slider kit

Unofficial study companion for educational use — not investment advice.
