import type { Topic } from "../types";

export const missingBillionaires: Topic = {
  id: "missing-billionaires",
  title: "The Puzzle of the Missing Billionaires",
  icon: "💰",
  part: "Part I — Lessons from the Coin Flip",
  order: 1,
  tagline: "Why virtually no 1900-era fortunes survived — and what that proves",
  intro:
    "In 1900 the United States had roughly 4,000 millionaires. If just one of those families had kept its money in a boring, diversified portfolio of US stocks and spent at a sensible rate, its heirs would be billionaires today. There should be thousands of 'old money' billionaire dynasties. In reality, you will search the Forbes 400 in vain for fortunes that trace back to 1900. This chapter sets up the book's central question: where did they all go — and what were they doing wrong?",
  guide: [
    {
      heading: "The vanished fortunes",
      discovery: {
        problem:
          "A family had $5 million in 1900. US stocks returned about 10% per year in nominal terms (about 6.5% per year after inflation) over the next 120 years. Before reading on, estimate: roughly what would that stake be worth today, in today's dollars, if the family had simply held the stock market and spent nothing?",
        idea:
          "Compounding at 6.5% real for 120 years multiplies wealth by about 1,900 times. $5 million becomes roughly $9-10 **billion** in today's dollars. Even with generous spending along the way, the family should comfortably be billionaires. That is the puzzle: essentially none of them are.",
      },
      body:
        "Haghani and White open with a simple back-of-the-envelope calculation. Take the roughly 4,000 American millionaires of 1900. Allow for estates being split among children, for taxes, and for healthy annual spending. Even under conservative assumptions, simple arithmetic says there should be **thousands of billionaire families** today whose wealth dates from 1900 or earlier.\n\nThe actual number is close to **zero**. Virtually no fortune on today's rich lists traces back to a millionaire of 1900. The wealth didn't just underperform — it essentially vanished, across an entire population of wealthy families.",
      keyPoints: [
        "About 4,000 US millionaires existed in 1900; a diversified buy-and-hold strategy would have made most of their heirs billionaires",
        "Compounding at ~6.5% real per year for 120 years multiplies wealth ~1,900x",
        "Almost no current billionaire fortune traces back to 1900 — the wealth disappeared",
      ],
    },
    {
      heading: "It wasn't just bad luck",
      discovery: {
        problem:
          "Could this be explained by bad luck alone? Suppose each family independently had a 50% chance of losing its fortune each generation through sheer misfortune. Across four generations, what fraction of 4,000 families would still be rich?",
        idea:
          "Even with a coin-flip survival rate per generation, (1/2)^4 = 1/16 of families — about 250 of the 4,000 — should still be wealthy. To get from 4,000 down to essentially zero, the 'failure rate' must have been overwhelming and systematic. When *everyone* fails, the cause is not luck; it's that the game everyone was playing had negative expected results.",
      },
      body:
        "With thousands of independent families, randomness averages out. A few fortunes lost to fires, frauds, or freak market events would be expected. The near-total extinction of an entire cohort of fortunes cannot be luck — it is evidence of **systematically bad decisions**.\n\nThe authors identify the recurring culprits:\n\n- Taking too much risk in concentrated positions (the family business, one stock, one building)\n- Taking too little risk after a scare — hiding in cash and letting inflation erode wealth\n- Spending at rates that felt small but were unsustainable\n- Paying little attention to taxes and costs\n- Making decisions by instinct and social convention rather than any explicit framework\n\nNotice that these are *sizing and spending* errors, not stock-picking errors. The families didn't need better investment ideas. They needed better decisions about **how much** — how much risk to take and how much to spend.",
      whyItWorks:
        "The argument is statistical: one ruined family tells you nothing, but 4,000 families form a sample. If ruin were driven by independent bad luck at any plausible rate, the survivors would still number in the hundreds. Observing ~zero survivors forces the conclusion that the expected outcome of their collective behaviour was ruin.",
      strategies: ["Consider extremes", "Think in populations, not anecdotes"],
      keyPoints: [
        "A population of thousands can't all be unlucky — near-total extinction implies systematic error",
        "The errors were about sizing (how much risk) and spending (how much to withdraw), not asset selection",
      ],
    },
    {
      heading: "'How much' beats 'what'",
      body:
        "Finance media, professional research, and casual conversation are almost entirely about **what** to invest in: which stock, which fund, which asset class. The book's thesis is that the more consequential question is almost always **how much**: what *size* position, what *fraction* of wealth, what *rate* of spending.\n\nA great investment held at the wrong size can ruin you. A mediocre investment held at the right size is survivable, even fine. The chapters ahead make this precise with a famous experiment: betting on a coin that everyone *knows* is favourable — and watching most people lose money on it anyway, purely through bad sizing.\n\nThis reframing matters because sizing decisions are *controllable and computable*. You can rarely know which asset will do best, but you can always choose position size and spending rate — and there is a rational framework for doing so.",
      keyPoints: [
        "The industry obsesses over 'what to buy'; wealth outcomes are dominated by 'how much'",
        "Sizing and spending are decisions you fully control, and they can be computed, not guessed",
      ],
    },
    {
      heading: "Judge decisions, not outcomes",
      discovery: {
        problem:
          "Your friend put their entire net worth into a single lottery-like startup and it 100x'd. Your colleague bought a diversified index portfolio and had a mediocre decade. Who made the better decision?",
        idea:
          "The friend made a terrible decision that happened to work out; the colleague made a good decision with an unlucky draw. Because investing outcomes are dominated by randomness in the short run, the only thing you can actually control — and should judge — is the *quality of the decision at the time it was made*, given what was knowable.",
      },
      body:
        "A cornerstone of the book: **a good decision is one that maximizes expected utility given the information available at the time** — not one that happens to be followed by a good outcome.\n\nOutcome-based thinking ('it went up, so I was right') teaches you the wrong lessons, because noise overwhelms signal over most horizons people evaluate. Decision-based thinking builds a repeatable process. The missing billionaires mostly weren't judged by anyone — including themselves — on decision quality, and so their errors compounded for generations.",
      strategies: ["Separate process from outcome"],
      keyPoints: [
        "Good decision ≠ good outcome; judge choices by expected utility with information available at the time",
        "Outcome-based feedback is noisy and teaches the wrong lessons",
      ],
    },
    {
      heading: "The roadmap: one tool for every money decision",
      body:
        "The rest of the book builds a single, coherent framework — **expected utility** — and applies it to every major financial decision:\n\n- How much of a favourable bet (or the stock market) to take: *sizing* and the **Merton share**\n- How the famous **Kelly criterion** fits in, and why it is usually too aggressive\n- How much you can safely **spend** from your wealth over a lifetime\n- Whether to buy **annuities and insurance**\n- How to think about your **human capital**, taxes, and big lumpy decisions like houses\n\nThe promise: none of these need to be vibes-based. Each is a computation you can actually do, once you know your own tolerance for risk.",
      keyPoints: [
        "Expected utility is the single framework unifying sizing, spending, insurance, and lifestyle decisions",
        "Each later topic is one application of the same tool",
      ],
    },
  ],
  quiz: [
    {
      id: "puzzle-q1",
      question: "Roughly how many millionaires did the United States have in 1900?",
      options: ["About 40", "About 400", "About 4,000", "About 400,000"],
      answerIndex: 2,
      explanation:
        "The book starts from the estimate of roughly 4,000 American millionaires in 1900 — enough that, with ordinary compounding, thousands of billionaire families should exist today.",
      difficulty: "warmup",
      guideRef: 0,
    },
    {
      id: "puzzle-q2",
      question:
        "According to the book, why are there essentially no billionaires today whose fortunes trace back to 1900?",
      options: [
        "The stock market returned too little over the 20th century",
        "Systematically poor sizing and spending decisions destroyed the fortunes",
        "Estate taxes confiscated nearly all inherited wealth",
        "A run of unusually bad luck hit wealthy families",
      ],
      answerIndex: 1,
      explanation:
        "Markets delivered spectacular compounding, and neither taxes nor luck can explain near-total extinction across thousands of families. The book's diagnosis is systematic decision errors: too much or too little risk, and unsustainable spending.",
      difficulty: "warmup",
      guideRef: 1,
    },
    {
      id: "puzzle-q3",
      question:
        "Wealth compounds at 6.5% per year in real terms for 120 years. What is the approximate real multiple on the initial stake?",
      options: ["About 8x", "About 120x", "About 1,900x", "About 65,000x"],
      answerIndex: 2,
      explanation:
        "1.065^120 ≈ 1,900. A useful mental check: at 6.5%, wealth doubles roughly every 11 years (rule of 72), and 120 years is about 11 doublings — 2^11 ≈ 2,048, the same ballpark.",
      difficulty: "core",
      hints: [
        "You need 1.065 raised to the 120th power. Don't compute it directly — find a shortcut.",
        "Use the rule of 72: at 6.5% per year, how many years does one doubling take?",
        "About 11 years per doubling means about 11 doublings in 120 years. What is 2^11?",
      ],
      strategy: "Rule of 72 / doubling times",
      guideRef: 0,
    },
    {
      id: "puzzle-q4",
      question:
        "The near-total disappearance of 1900-era fortunes is presented as evidence of systematic error rather than bad luck. What is the key statistical idea behind that claim?",
      options: [
        "Wealthy families always make correlated investments, so one crash ruins them all",
        "With thousands of independent families, luck alone would still leave many survivors",
        "Any 120-year period is long enough that all fortunes eventually vanish",
        "Fortunes can only survive if each generation works as hard as the founder",
      ],
      answerIndex: 1,
      explanation:
        "Independent bad luck at any plausible rate would leave hundreds of surviving fortunes out of ~4,000. Observing essentially zero survivors means the expected result of their collective behaviour was ruin — a systematic problem, not variance.",
      difficulty: "core",
      hints: [
        "Think about what a population of 4,000 independent trials tells you that one family's story cannot.",
        "If each family independently survived with probability p per generation, how many of 4,000 survive four generations?",
        "Even p = 0.5 per generation leaves 4,000 × (1/16) ≈ 250 wealthy families. Zero survivors needs p near 0 — that's systematic.",
      ],
      strategy: "Think in populations, not anecdotes",
      guideRef: 1,
    },
    {
      id: "puzzle-q5",
      question:
        "Which pair best captures the two questions the book says dominate real-world wealth outcomes?",
      options: [
        "Which asset to buy, and when to buy it",
        "How much risk to take, and how much to spend",
        "Which manager to hire, and what fee to pay",
        "When to enter the market, and when to exit",
      ],
      answerIndex: 1,
      explanation:
        "The book's thesis is that sizing (how much risk) and spending (how much to withdraw) dominate long-run outcomes — and unlike asset selection, both are fully within your control and can be computed.",
      difficulty: "core",
      guideRef: 2,
    },
    {
      id: "puzzle-q6",
      question:
        "A friend bet their entire savings on one speculative coin which then tripled. Under the book's framework, this was:",
      options: [
        "A good decision, proven by the good outcome",
        "A bad decision that happened to have a good outcome",
        "A good decision only if they took profits afterwards",
        "Impossible to evaluate, since only outcomes are observable",
      ],
      answerIndex: 1,
      explanation:
        "Decisions are judged by expected utility given information available at the time. An all-in bet on a lottery-like asset has terrible expected utility for almost any investor, whatever the outcome. Outcomes are noisy; process is what you control — and decision quality *is* evaluable before the outcome arrives.",
      difficulty: "core",
      hints: [
        "Separate the decision from the outcome. Which one did the friend control?",
        "Ask: at the moment of the bet, with the information available, what was the range of possible results and their probabilities?",
      ],
      strategy: "Separate process from outcome",
      guideRef: 3,
    },
    {
      id: "puzzle-q7",
      question:
        "Suppose 4,000 families each independently had a 70% chance of preserving wealth per generation. After 4 generations, roughly how many wealthy families would remain — and what does comparing this to reality suggest?",
      options: [
        "About 10; reality matches independent bad luck",
        "About 960; reality (≈0) implies the true per-generation survival rate was far below any plausible 'luck' explanation",
        "About 2,800; wealth preservation was actually common",
        "Exactly 0; a 70% rate always leads to extinction",
      ],
      answerIndex: 1,
      explanation:
        "0.7^4 ≈ 0.24, and 0.24 × 4,000 ≈ 960 families. Even mediocre odds per generation leave nearly a thousand dynasties. The observed ~zero means the real survival probability was drastically lower — systematic error, not variance.",
      difficulty: "challenge",
      hints: [
        "Survival across 4 independent generations at rate p occurs with probability p^4.",
        "Compute 0.7^4 first. (0.7² = 0.49, then square it.)",
        "0.49² ≈ 0.24. Multiply by 4,000 families.",
      ],
      strategy: "Try small cases",
      guideRef: 1,
    },
    {
      id: "puzzle-q8",
      question:
        "A family in 1900 invests $5M at 6.5% real, but spends a constant 3% of current wealth every year. Roughly what happens to their real wealth over 120 years?",
      options: [
        "It shrinks to nothing — 3% spending overwhelms returns",
        "It stays roughly constant in real terms",
        "It still grows about 60-fold, since wealth compounds at roughly 3.5% net",
        "It grows the full 1,900-fold, since spending proportional to wealth doesn't affect the growth rate",
      ],
      answerIndex: 2,
      explanation:
        "Spending a constant *fraction* of wealth reduces the compounding rate: growth is about 6.5% − 3% = 3.5% per year. 1.035^120 ≈ 62, so $5M still becomes roughly $300M in real terms. Spending proportional to wealth slows compounding but cannot bankrupt you — a preview of the book's spending chapters.",
      difficulty: "challenge",
      hints: [
        "Spending a fixed percentage of wealth each year acts like a haircut on the annual return.",
        "Net growth ≈ 6.5% − 3% = 3.5% per year. Now compound that for 120 years.",
        "Rule of 72: at 3.5%, doubling takes ~20 years, so ~6 doublings. 2^6 = 64.",
      ],
      strategy: "Rule of 72 / doubling times",
      guideRef: 0,
    },
  ],
  interactive: "wealth-compounding",
  interactiveTitle: "The Dynasty Simulator",
  interactiveBlurb:
    "Compound a 1900 fortune forward yourself. Set the real return, a spending rate, and estate splitting, and see whether the family ends up with billions — or nothing.",
};
