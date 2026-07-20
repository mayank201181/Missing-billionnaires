import type { Topic } from "../types";

export const sizingBeatsSelection: Topic = {
  id: "sizing-beats-selection",
  title: "Sizing Beats Selection",
  icon: "⚖️",
  part: "The Allocator's Track — Foundations",
  order: 102,
  track: "wealth",
  tagline: "One formula for 'how much' — and why it outranks every 'what'",
  intro:
    "Your advisor's pitch deck is about selection: which managers, which themes, which funds. Almost nobody in the industry is paid to discuss the variable that actually governs your family's outcome — sizing, the fraction of your wealth at risk at any moment. This module makes the case with one formula and one experiment. The formula is the Merton share, which converts an expected return, a volatility, and your own risk aversion into a specific allocation. The experiment is a 2016 study in which finance-trained players were handed a coin they knew was 60/40 in their favour — and a third of them still lost money. The best investment in the world, held at five times the right size, will ruin you. A mediocre index, held at the right size, compounds for decades. Size first; select later.",
  guide: [
    {
      heading: "The industry sells the wrong question",
      discovery: {
        problem:
          "You must commit for thirty years to one of two offers. Offer A: the best-performing fund in the world — but you must hold it at five times the size your risk tolerance can support. Offer B: a perfectly ordinary index fund, held at exactly the right size for you. Which offer preserves your family's wealth?",
        idea:
          "Offer B, and it isn't close. The brilliant fund at 5x the right size will eventually meet a drawdown deep enough to force a panicked exit — or ruin — before its brilliance can pay. The mediocre index at the right size quietly compounds for decades. Selection cannot rescue bad sizing, but sound sizing rescues mediocre selection.",
      },
      body:
        "Walk through any private bank's offering and count what is for sale: access funds, thematic baskets, star managers, structured notes on this year's story. Every one is an answer to *what*. The fee machine runs on selection because selection is endlessly renewable — there is always a new fund to rotate into and a new theme for the quarterly review.\n\nYet examine the ledger of ruined fortunes and the cause is almost never picking the wrong fund. It is holding assets in the wrong *amount*: a concentrated position five times too large, or a portfolio parked in cash for a lost decade because the last drawdown was terrifying. Sizing — the fraction of your wealth exposed to risk — sets the distribution of outcomes you actually live through: the rate you compound at, the drawdowns you must sit through, and the probability of the one outcome that matters most, ruin.\n\nThere is also a difference in kind. Selection is a claim about other people's behaviour — markets, managers, the future. Sizing is a decision entirely inside your control, and it can be computed rather than guessed. The rest of this module hands you the computation.",
      keyPoints: [
        "The industry sells selection (funds, managers, themes); wealth outcomes are governed by sizing (the fraction at risk)",
        "The best fund at 5x the right size ruins you; a mediocre index at the right size compounds for decades",
        "Selection is a forecast about others; sizing is a controllable, computable decision",
      ],
    },
    {
      heading: "The Merton share: the master formula",
      body:
        "The optimal fraction of wealth to hold in a risky asset has a closed form, due to Robert Merton, and Haghani and White put it at the centre of the book:\n\nk* = (mu − r) / (gamma × sigma^2)\n\n- `mu − r` is the expected excess return over the safe rate — for equities, the equity risk premium\n- `sigma^2` is the variance of returns (volatility squared)\n- `gamma` is your personal risk aversion — how much a loss hurts relative to how much an equal gain helps\n\nA worked example with realistic numbers for a wealthy family. Take an equity risk premium of 4% and portfolio volatility of 18%, so variance is 0.18 × 0.18 = 0.0324. With gamma of 3:\n\nk* = 0.04 / (3 × 0.0324) = 0.04 / 0.0972 ≈ 41%\n\nAbout 41% in the risky portfolio, the rest safe. Not 60/40 because a committee blessed it — 41% because your premium estimate, the market's volatility, and your own measured risk tolerance jointly say so. Change an input and the answer changes, which is exactly the point: the formula turns 'how much risk should we take?' from a vibe into a computation you can defend to your spouse, your board, and the next generation.",
      whyItWorks:
        "Double your risky fraction k and your expected excess return doubles — but the variance you bear quadruples, because variance scales with k^2. Expected utility is therefore a linear benefit minus a quadratic penalty: a downward-opening parabola in k. The peak sits where the marginal return from one more unit of risk equals its marginal penalty, and solving that first-order condition gives k* = (mu − r) / (gamma × sigma^2).",
      strategies: ["Compute, don't guess"],
      keyPoints: [
        "Merton share: k* = (mu − r) / (gamma × sigma^2)",
        "With a 4% premium, 18% volatility, and gamma 3, the answer is about 41% in risky assets",
        "Benefit scales with k, penalty with k^2 — so an interior optimum exists and is computable",
      ],
    },
    {
      heading: "Kelly is a speed limit, not a target",
      discovery: {
        problem:
          "The Kelly criterion gives the allocation that maximizes the long-run growth rate of wealth — over a long horizon, nothing compounds faster. Ed Thorp used it to beat blackjack and then ran Princeton Newport Partners for twenty years without a single losing year. So here is the puzzle: why did the greatest living practitioner of Kelly betting routinely stake *half* or less of what the formula told him?",
        idea:
          "Because the formula's inputs are estimates. Kelly sits exactly on the edge: size beyond it and additional risk *reduces* long-run growth. If your edge is even slightly overestimated — and estimated edges usually are — then what you computed as full Kelly was actually over-Kelly. Thorp treated Kelly as a speed limit, the boundary past which aggression is guaranteed self-harm, never as a target to drive at.",
      },
      body:
        "In the Merton framework, Kelly is simply the gamma = 1 special case: k = (mu − r) / sigma^2. For our worked numbers that is 0.04 / 0.0324 ≈ 123% — a *leveraged* equity position, three times the gamma-3 allocation. Kelly is the most aggressive sizing any growth-seeking investor can rationally justify.\n\nBut the formula assumes you know mu and sigma exactly and that returns are well-behaved. Real markets grant neither: expected returns carry wide error bars, and fat tails mean realized risk runs worse than measured variance. Both problems push the honest speed limit *below* the formula's output — and, as the next section shows, the cost of overshooting the optimum far exceeds the cost of undershooting it. That asymmetry is why Thorp's practice was half-Kelly or less: give up a little growth, buy back a lot of survival.\n\nThorp's record is the argument made flesh. Princeton Newport compounded for two decades, every year positive, at fractional Kelly. The traders who ran full Kelly on estimated edges are, disproportionately, no longer trading. When someone pitches you the growth-optimal allocation, remember what it optimizes: the average of a distribution whose bad paths you personally cannot live through.",
      keyPoints: [
        "Kelly is the Merton share with gamma = 1: k = (mu − r) / sigma^2 — about 123% in the worked example",
        "It maximizes long-run growth but assumes perfect inputs; estimation error and fat tails lower the true limit",
        "Thorp bet half-Kelly or less: treat Kelly as a ceiling you stay under, never a target",
      ],
    },
    {
      heading: "The hill is flat on top — with a cliff past the peak",
      body:
        "In 2016, Victor Haghani and Rich Dewey gave 61 finance-trained players — students and young professionals from top firms — real money and a digital coin they were told, truthfully, lands heads 60% of the time. Thirty minutes of betting on a known favourable coin. The result: a *third of the players lost money*. They bet erratically, doubled up after losses, and staked everything on single flips. Knowing the edge did not produce sensible sizing — even for people who price risk professionally. Sizing discipline is not instinct; it has to be adopted as policy.\n\nThe consolation is the shape of the ground you are standing on. The utility hill around the Merton share is a parabola — flat on top, catastrophic past the peak:\n\n- Hold 80% of the optimal amount and you keep about 96% of the benefit of investing\n- Hold 2x the optimal amount and the benefit is *zero* — your certainty-equivalent is back to holding cash\n- Beyond 2x, you are actively worse off than cash, despite owning a positive-return asset\n\nThe errors are radically asymmetric. Undershooting costs basis points; overshooting costs everything. So the practical rule for every allocator who is honest about estimation error: **when uncertain, size down**.",
      whyItWorks:
        "Write x = k/k* for your holding as a fraction of optimal. The certainty-equivalent benefit retained is 2x − x^2 = 1 − (1 − x)^2. At x = 0.8 the shortfall is (0.2)^2 = 4%, so 96% of the benefit survives. At x = 2 the shortfall is (1)^2 = 100% — all benefit gone. The parabola is symmetric in x, but your errors are not: you can undershoot by at most a factor of one, while overshooting is unbounded.",
      strategies: ["Consider extremes", "When uncertain, size down"],
      keyPoints: [
        "In the 60/40 coin-flip experiment, a third of finance-literate players lost money on a known favourable bet",
        "80% of optimal keeps ~96% of the benefit; 2x optimal keeps none; beyond 2x is worse than cash",
        "Sizing errors are asymmetric — when in doubt, err small",
      ],
    },
    {
      heading: "Choosing your gamma — and when the dial moves",
      body:
        "The formula needs one number from you: gamma. You find it by introspection, with calibration questions rather than questionnaires. The central one: *would a permanent 30% loss of family wealth hurt more than a permanent 30% gain would help — and how much more?* If the loss looms about twice as large, you are near gamma 2; if the mere thought is intolerable, you are higher. Most wealthy families land between **gamma 2 and 4**. Whatever you conclude: choose it once, write it down, and let it drive *every* sizing decision — the equity allocation, the concentrated position, the deal your friend is raising for. Coherence across decisions is the entire point of the framework; a family that is gamma 2 in bull markets and gamma 8 in drawdowns has no gamma at all.\n\nDoes the allocation ever change? Yes — through the numerator, not through nerves. When expected returns move, the Merton share moves. After a crash cuts prices, valuation-based estimates of the premium rise: if the premium goes from 4% to 6% while volatility rises from 18% to 20% (variance 0.04), then k* = 0.06 / (3 × 0.04) = 50% — up from 41%. That is not prediction; it is slow, valuation-anchored policy adjustment. The allocator responds to prices, never to forecasts of headlines.",
      strategies: ["Write it down once, apply it everywhere"],
      keyPoints: [
        "Calibrate gamma with loss-versus-gain questions; most wealthy families land at gamma 2-4",
        "Fix gamma once, in writing, and apply it to every sizing decision — coherence is the point",
        "The dial moves when valuation-based expected returns move (buy after crashes cheapen assets), never on forecasts",
      ],
    },
  ],
  quiz: [
    {
      id: "sizesel-q1",
      question:
        "According to this framework, which decision dominates a family's long-run wealth outcome?",
      options: [
        "Selecting the best funds, managers, and themes",
        "The fraction of wealth exposed to risk at any time",
        "Timing entries and exits around market headlines",
        "Negotiating the lowest possible management fees",
      ],
      answerIndex: 1,
      explanation:
        "The industry sells selection because it is endlessly renewable, but ruined fortunes almost always trace to sizing errors — too much risk, or too little. Sizing sets your compounding rate, your drawdowns, and your probability of ruin, and unlike selection it is fully within your control.",
      difficulty: "warmup",
      guideRef: 0,
    },
    {
      id: "sizesel-q2",
      question:
        "In the Merton share k* = (mu − r) / (gamma × sigma^2), what does gamma represent?",
      options: [
        "The expected excess return of the risky asset",
        "The volatility of the risky portfolio",
        "Your personal risk aversion — how much losses hurt relative to equal gains",
        "The risk-free rate of return",
      ],
      answerIndex: 2,
      explanation:
        "Gamma is the one input that is about you, not the market: it measures how much a loss hurts relative to how much an equal gain helps. Higher gamma means a smaller risky allocation. The premium (mu − r) and variance (sigma^2) come from the market; gamma comes from introspection.",
      difficulty: "warmup",
      guideRef: 1,
    },
    {
      id: "sizesel-q3",
      question:
        "Equity risk premium 4%, portfolio volatility 18%, risk aversion gamma = 3. What risky allocation does the Merton share prescribe?",
      options: ["About 25%", "About 41%", "About 55%", "About 123%"],
      answerIndex: 1,
      explanation:
        "Variance is 0.18^2 = 0.0324; the denominator is 3 × 0.0324 = 0.0972; and 0.04 / 0.0972 ≈ 41%. Note how the answer emerges from three defensible inputs rather than a rule of thumb — change any input and the allocation changes with it.",
      difficulty: "core",
      hints: [
        "The denominator needs the variance, not the volatility — square the 18% first.",
        "Multiply that variance by gamma = 3, then divide it into the 4% premium.",
      ],
      strategy: "Compute, don't guess",
      guideRef: 1,
    },
    {
      id: "sizesel-q4",
      question:
        "Same inputs — 4% premium, 18% volatility — but now apply the Kelly criterion. What allocation results, and what does that reveal about Kelly?",
      options: [
        "About 41% — Kelly and Merton always agree",
        "About 82% — exactly double the gamma-3 answer",
        "About 100% — Kelly always means fully invested",
        "About 123% — a leveraged position, showing Kelly is the most aggressive rational sizing",
      ],
      answerIndex: 3,
      explanation:
        "Kelly is the Merton share with gamma = 1, so k = 0.04 / 0.0324 ≈ 123% — you would borrow to hold more than your whole portfolio in equities. That is the growth-maximizing edge of rational sizing, which is precisely why Thorp treated it as a speed limit rather than a destination.",
      difficulty: "core",
      hints: [
        "Kelly is the special case of the Merton share where gamma equals 1.",
        "So divide the premium by the variance alone — no gamma in the denominator — and compare the result with 100%.",
      ],
      strategy: "Reduce to a known case",
      guideRef: 2,
    },
    {
      id: "sizesel-q5",
      question:
        "Ed Thorp used Kelly to beat blackjack and ran Princeton Newport Partners for twenty years without a losing year. Why did he routinely bet half-Kelly or less?",
      options: [
        "Estimation error and fat tails put the true limit below the formula, and overshooting costs more than undershooting",
        "Regulators capped the leverage his fund was permitted to use",
        "Half-Kelly doubles the long-run growth rate of wealth",
        "He lacked access to borrowing at the risk-free rate",
      ],
      answerIndex: 0,
      explanation:
        "Kelly sits exactly at the edge where more risk starts reducing long-run growth, and it assumes you know mu and sigma perfectly. Real edges are estimated with error and real returns have fat tails, so the honest limit is below the computed one. Since the utility hill is flat below the peak and steep above it, undershooting is cheap insurance against the expensive error.",
      difficulty: "core",
      hints: [
        "Ask what the formula requires as inputs — how precisely can anyone actually know an expected return?",
        "Then compare the cost of holding a bit less than optimal with the cost of holding well more than optimal. Which mistake is survivable?",
      ],
      strategy: "When uncertain, size down",
      guideRef: 2,
    },
    {
      id: "sizesel-q6",
      question:
        "In the 2016 coin-flip experiment, finance-literate players bet real money on a coin they knew paid heads 60% of the time. What happened, and what is the lesson?",
      options: [
        "Nearly all players found a sensible constant-fraction strategy — professionals size well",
        "About a third lost money on a known favourable bet — sizing discipline is not natural, even for professionals",
        "Players broke even on average because a 60/40 edge is too small to exploit",
        "Every player who used Kelly went bust, disproving the criterion",
      ],
      answerIndex: 1,
      explanation:
        "Despite a stated, genuine 60/40 edge, roughly a third of these finance-trained players lost money — betting erratically, doubling after losses, or staking everything on one flip. Knowing the edge is selection; the players failed at sizing. If professionals with a printed edge cannot size by instinct, a written policy is not optional.",
      difficulty: "core",
      hints: [
        "The players were told the exact edge, so selection was solved for them. What decision remained?",
        "Think about what erratic stakes, doubling down, and all-in bets do to a strategy whose per-bet expectation is positive.",
      ],
      strategy: "Separate process from outcome",
      guideRef: 3,
    },
    {
      id: "sizesel-q7",
      question:
        "Investor A holds 80% of her Merton-optimal risky allocation. Investor B holds 200% of his. Roughly what fraction of the maximum certainty-equivalent benefit of investing does each retain?",
      options: [
        "A: 80%, B: 50% — benefit scales roughly with distance from optimal",
        "A: 96%, B: 50% — undershooting is costly, overshooting less so",
        "A: about 96%, B: essentially zero — B's certainty-equivalent is back to holding cash",
        "A: 64%, B: 25% — both lose the square of their deviation",
      ],
      answerIndex: 2,
      explanation:
        "Benefit retained is 1 − (1 − k/k*)^2. Investor A's shortfall is (1 − 0.8)^2 = 4%, so she keeps about 96%. Investor B's shortfall is (1 − 2)^2 = 100% — all benefit erased, leaving him no better than cash despite full market risk. This asymmetry, flat below the peak and a cliff above it, is the mathematical case for sizing down under uncertainty.",
      difficulty: "challenge",
      hints: [
        "The certainty-equivalent benefit is a downward parabola in the risky fraction, peaking at the Merton share k*.",
        "In terms of x = k/k*, the fraction of peak benefit retained is 1 − (1 − x)^2.",
        "For A, the bracket is (1 − 0.8)^2. Now evaluate the same bracket at x = 2 and see what remains.",
      ],
      strategy: "Consider extremes",
      guideRef: 3,
    },
    {
      id: "sizesel-q8",
      question:
        "A crash cuts equity prices. Your valuation-based premium estimate rises from 4% to 6%, while volatility rises from 18% to 20%. With gamma = 3, what does the Merton share now prescribe — and what kind of decision is this?",
      options: [
        "About 33% — higher volatility always means a lower allocation",
        "About 41% — the policy allocation never changes",
        "About 50% — a valuation-anchored increase in the allocation, without any forecast",
        "About 67% — allocations should double after every crash",
      ],
      answerIndex: 2,
      explanation:
        "New variance is 0.20^2 = 0.04, so k* = 0.06 / (3 × 0.04) = 0.06 / 0.12 = 50%, up from about 41%. The allocator adds equities after the crash not by predicting a recovery, but because lower prices mechanically raised the expected return in the formula. This is slow, valuation-anchored policy adjustment — responding to prices, never to headlines.",
      difficulty: "challenge",
      hints: [
        "Both inputs moved. Recompute the variance first: square the new 20% volatility.",
        "Multiply the new variance by gamma = 3 to rebuild the denominator.",
        "Divide the new 6% premium by that denominator, and compare with the pre-crash 41%.",
      ],
      strategy: "Compute, don't guess",
      guideRef: 4,
    },
  ],
  interactive: "growth-vs-risk",
  interactiveTitle: "The Growth-vs-Risk Frontier",
  interactiveBlurb:
    "One dial — how much risk — dominates every other portfolio decision. Move it and watch growth, comfort, and catastrophe trade off.",
};
