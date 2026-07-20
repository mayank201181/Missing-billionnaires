import type { Topic } from "../types";

export const kellyCriterion: Topic = {
  id: "kelly-criterion",
  title: "The Kelly Criterion — and Why It's Too Hot",
  icon: "🎯",
  part: "Part III — Sizing",
  order: 7,
  tagline: "Growth-optimal betting is a speed limit to respect, not a target to hit",
  intro:
    "In 1956, Bell Labs physicist John Kelly asked a deceptively simple question: if you get to make a favourable bet over and over, what fraction of your wealth should you stake each time? His answer — choose the size that maximizes the expected *growth rate* of your wealth — produces a beautiful formula and a seductive promise: over a long enough horizon, the Kelly bettor ends up richer than anyone playing any other strategy, with probability approaching certainty. This chapter derives the Kelly fraction, connects it to the Merton share, and then delivers the book's crucial warning: full Kelly is only right if your risk aversion is unusually low, and the ride it produces is far wilder than most investors can stomach. The professionals' answer is fractional Kelly — and it turns out to be old advice in new clothes.",
  guide: [
    {
      heading: "A bet-sizing question from 1956",
      discovery: {
        problem:
          "You're offered the coin from the famous experiment: it lands heads 60% of the time, and you can bet any fraction of your wealth on each flip at even odds, repeatedly, for as long as you like. Betting nothing wastes a golden opportunity; betting everything guarantees eventual ruin (one tails wipes you out). Before reading on: what fraction would you bet, and — more importantly — what *quantity* would you try to maximize in choosing it?",
        idea:
          "John Kelly's 1956 insight at Bell Labs: don't maximize expected *wealth* (that absurdly tells you to bet everything, since each flip has positive expected value). Instead, maximize the expected **growth rate** of wealth — equivalently, the expected *logarithm* of wealth. For an even-odds bet with win probability p, the answer is `f* = 2p − 1`. With p = 0.6, that's 20% of your wealth per flip.",
      },
      body:
        "Kelly reframed bet sizing as a question about compounding. When you bet a fixed fraction of wealth repeatedly, your fortune is a *product* of random growth factors, one per flip. What matters in the long run is not the expected value of any single flip but the rate at which the whole product compounds.\n\nMaximizing expected wealth is the wrong objective for repeated bets: expected wealth is maximized by staking everything every time, a strategy that ends in certain ruin. Maximizing the expected growth rate — expected log wealth — threads the needle between timidity and recklessness.\n\nAnd Kelly proved something remarkable about his criterion: over a long enough horizon, the wealth of the Kelly bettor exceeds the wealth of *any* other strategy with probability approaching 1. Bet more than Kelly, or less, or erratically, and eventually — almost surely — the growth-optimal bettor overtakes you. That promise is why the criterion has an almost cult following among gamblers and some investors. The rest of this chapter is about the fine print.",
      whyItWorks:
        "Wealth after n bets is a product of per-bet growth factors. Taking logs turns the product into a sum, and by the law of large numbers that sum grows at a rate equal to the *expected log* growth per bet. Whoever has the highest expected log growth compounds fastest, so in the long run their wealth pulls ahead of everyone else's with probability approaching 1. Maximizing expected log wealth is therefore exactly the same thing as maximizing the long-run growth rate.",
      strategies: ["Work backwards from the objective", "Consider extremes"],
      keyPoints: [
        "Kelly (1956, Bell Labs): choose the bet size that maximizes the expected growth rate of wealth — expected log wealth",
        "For an even-odds bet with win probability p, the Kelly fraction is f* = 2p − 1 (p = 0.6 gives 20%)",
        "Kelly's promise: over a long enough horizon, the Kelly bettor beats any other strategy with probability approaching 1",
        "Maximizing expected wealth is the wrong objective — it tells you to bet everything and guarantees ruin",
      ],
    },
    {
      heading: "The formulas — and a familiar face",
      body:
        "The even-odds coin rule `f* = 2p − 1` is a special case of a more general recipe. For an even-payoff bet, the Kelly fraction is your **edge divided by the odds**: how much you expect to make per unit staked, scaled by the payoff structure. Sports bettors and card counters have used this form for decades.\n\nFor continuous, market-like assets — a stock with expected excess return `mu − r` and volatility `sigma` — the Kelly allocation becomes:\n\n- `k = (mu − r) / sigma^2`\n\nStop and look closely at that formula. It is *exactly* the **Merton share** `k = (mu − r) / (gamma × sigma^2)` with risk aversion `gamma = 1`. That is no coincidence: logarithmic utility *is* a member of the CRRA family — the member with gamma equal to 1. Maximizing expected log wealth is just expected-utility maximization for one particular, quite aggressive, risk preference.\n\nThis is the book's key reframing. Kelly is not a rival framework to expected utility; it is a *special case* of it. The question 'should I bet full Kelly?' translates precisely into 'is my risk aversion really as low as gamma = 1?' For most people, the honest answer — revealed by how they actually feel about large losses — is no: typical investors behave as if gamma is around 2 to 3.",
      whyItWorks:
        "CRRA utility with gamma = 1 is log utility, so the Merton formula k = (mu − r)/(gamma × sigma^2) evaluated at gamma = 1 gives k = (mu − r)/sigma^2 — the Kelly allocation. Kelly and Merton are the same optimization with different risk-aversion settings, which is why the two formulas differ only by the gamma in the denominator.",
      strategies: ["Connect to what you know"],
      keyPoints: [
        "General even-payoff form: Kelly fraction = edge / odds",
        "For continuous assets: k = (mu − r) / sigma^2",
        "This is exactly the Merton share with gamma = 1, because log utility is CRRA utility with gamma = 1",
        "So 'should I bet full Kelly?' means 'is my risk aversion really only gamma = 1?' — for most people it isn't",
      ],
    },
    {
      heading: "The ride you signed up for",
      discovery: {
        problem:
          "Suppose you commit to full Kelly betting forever, in a game where you genuinely have the edge you think you have. Estimate: what is the probability that at *some point* along the way your wealth falls to just one tenth of what you started with?",
        idea:
          "About **10%**. Full Kelly betting obeys a startlingly clean drawdown law: the probability of ever falling to `1/n` of your starting wealth is about `1/n`. So there's roughly a 50% chance you'll at some point be down half, a 10% chance you'll at some point be down 90%, a 1% chance of being down 99%. The growth-optimal path is, with meaningful probability, a stomach-churning one.",
      },
      body:
        "Kelly's long-run promise is real, but the path that delivers it is brutal. The `1/n` drawdown rule means a lifelong full-Kelly bettor should *expect* — as a coin-flip proposition — to watch half their wealth vanish at some point, and should treat a 90% peak-to-trough collapse as a one-in-ten career event rather than a tail scenario.\n\nHere is the crucial logical point: none of this is a flaw *if your utility really is logarithmic*. A true log-utility investor accepts those swings as the fair price of maximal growth, and would not sleep better betting less. But maximizing the growth rate is only optimal *for that investor*. If your gamma is 2 or 3 — as it is for most people, judged by how they actually respond to the prospect of losing half their fortune — then full Kelly systematically takes more risk than you want. It maximizes a quantity you don't actually care most about.\n\nThe practical test is visceral, not mathematical: imagine actually living through a 50% drawdown while following 'the optimal strategy'. If you would abandon the strategy at the bottom — and most people would — then full Kelly was never optimal for you, because a strategy you can't stick with has no long run at all.",
      strategies: ["Stress-test with extremes"],
      keyPoints: [
        "Under full Kelly, the probability of ever falling to 1/n of starting wealth is about 1/n",
        "That means roughly a 50% chance of being down half at some point, and 10% of being down 90%",
        "Growth-rate maximization is only utility-maximization if your utility is log (gamma = 1); most investors are gamma 2-3",
        "A strategy you'd abandon in a drawdown has no long run — feasibility is part of optimality",
      ],
    },
    {
      heading: "The cliff beyond the peak",
      discovery: {
        problem:
          "Two bettors each misjudge the Kelly fraction by a factor of two. Cautious Carla bets *half* of Kelly; Aggressive Aaron bets *double* Kelly. Their errors look symmetric. Are the consequences symmetric?",
        idea:
          "Not remotely. Carla still captures about **75% of the maximum growth rate**. Aaron's long-run growth rate is **zero** — for all his extra risk, he compounds to nowhere. And anyone betting *beyond* 2x Kelly has a *negative* growth rate: they are grinding toward ruin while holding a genuinely favourable bet. The punishment for oversizing vastly exceeds the reward for undersizing.",
      },
      body:
        "The growth rate as a function of bet size, `g(f)`, is a **downward-opening parabola**. It rises from zero (bet nothing, earn nothing), peaks at the Kelly fraction, and then falls. The algebra says it recrosses zero at exactly *twice* Kelly, and goes negative beyond that.\n\nThink about what that means. At 2x Kelly you are taking four times the variance of a half-Kelly bettor's position — and earning, in the long run, precisely nothing for it. Past 2x, a bet with positive expected value on every single play still destroys wealth over time, because occasional deep losses dominate the compounding.\n\nIn pure mathematics the parabola is symmetric around its peak. In practice the far side is much worse than the near side, for a reason the parabola doesn't show: on the timid side you merely grow slower, while on the aggressive side you take deep drawdowns from which you may never recover — capital, nerve, or career can all run out first. You cannot compound your way back from zero, and you rarely get to keep playing after a 90% loss.\n\nThis asymmetry is the strategic heart of the chapter: when uncertain about your edge — and you are always uncertain — err small. The cost of underbetting is modest; the cost of overbetting is catastrophic and, beyond a point, certain.",
      whyItWorks:
        "For a continuous asset the growth rate is approximately g(f) = f × mu − f^2 × sigma^2 / 2 (using mu for the excess return). Setting the derivative to zero gives the peak at f* = mu/sigma^2 — the Kelly fraction. Because g is a parabola through the origin, it returns to zero at f = 2f* and is negative beyond. Plugging in f = f*/2 gives exactly 3/4 of the peak growth rate, which is why halving your bet costs so little.",
      strategies: ["Exploit asymmetry", "When uncertain, err on the safe side"],
      keyPoints: [
        "g(f) is a downward parabola: zero at f = 0, peak at Kelly, back to zero at exactly 2x Kelly, negative beyond",
        "Betting 2x Kelly means four times half-Kelly's variance for zero long-run growth",
        "The penalty for oversizing exceeds the reward for undersizing — in practice you can't recover from deep ruin",
        "Since your edge is always uncertain, the asymmetry says: err on the small side",
      ],
    },
    {
      heading: "Fractional Kelly: a speed limit, not a target",
      body:
        "The professionals' resolution is **fractional Kelly**: bet a fixed fraction — typically a half or a third — of the full Kelly amount. The economics are startlingly favourable. Betting *half*-Kelly delivers about **75% of the maximum growth rate with roughly half the variance**. You give up a quarter of the growth to cut the wildness of the ride roughly in half — a trade almost every real investor should take.\n\nAnd here the book's threads tie together. Betting half-Kelly is *mathematically identical* to holding the Merton share with `gamma = 2`. Betting third-Kelly is the Merton share with `gamma = 3`. 'Fractional Kelly' and 'expected utility with realistic risk aversion' are **the same advice in different clothes** — gamblers and economists converged on one answer from opposite directions.\n\nPaul Samuelson's famous critique of Kelly says the same thing from the theory side: growth-optimality is not utility-optimality, and 'the long run' over which Kelly's dominance kicks in can be very long indeed — longer than an investing lifetime. Almost-sure victory *eventually* is cold comfort during the 90% drawdown you may suffer along the way.\n\nThe book's practical stance: treat full Kelly as a **speed limit**. Never knowingly exceed it — beyond it lies the cliff — and don't drive at the limit either. Cruise at a half or a third of Kelly, which is simply the Merton share for the risk aversion you actually have.",
      whyItWorks:
        "Using g(f) = f × mu − f^2 × sigma^2/2, betting a fraction c of Kelly gives growth equal to (2c − c^2) times the maximum. At c = 1/2 that is 3/4 of peak growth, while variance — proportional to f^2 — falls by a factor of four; the *swing size* (volatility of the ride) is halved. Meanwhile the Merton share with gamma = 2 is (mu − r)/(2 sigma^2), which is literally half the Kelly allocation — so half-Kelly and gamma = 2 are one and the same policy.",
      strategies: ["Unify two frameworks", "Trade a little upside for a lot of safety"],
      keyPoints: [
        "Half-Kelly captures about 75% of maximum growth with roughly half the variance",
        "Half-Kelly = Merton share with gamma = 2; third-Kelly = gamma = 3 — fractional Kelly is expected utility with realistic risk aversion",
        "Samuelson's critique: growth-optimality is not utility-optimality, and the long run is very long",
        "Treat full Kelly as a speed limit: never exceed it, and normally cruise at a half or a third",
      ],
    },
  ],
  quiz: [
    {
      id: "kelly-q1",
      question: "What quantity does the Kelly criterion tell you to maximize when choosing a bet size?",
      options: [
        "The expected value of your wealth after each bet",
        "The expected growth rate of your wealth — expected log wealth",
        "The probability of never having a losing streak",
        "The Sharpe ratio of the betting strategy",
      ],
      answerIndex: 1,
      explanation:
        "Kelly's 1956 insight was to maximize the expected growth rate of wealth, which is the same as maximizing expected log wealth. Maximizing expected wealth itself fails badly for repeated bets: it tells you to stake everything every time, which guarantees eventual ruin.",
      difficulty: "warmup",
      guideRef: 0,
    },
    {
      id: "kelly-q2",
      question:
        "You can repeatedly bet on a coin that lands heads 60% of the time, at even odds. What fraction of your wealth does the Kelly criterion say to bet on each flip?",
      options: ["60%", "40%", "20%", "10%"],
      answerIndex: 2,
      explanation:
        "For an even-odds bet with win probability p, the Kelly fraction is f* = 2p − 1. With p = 0.6, that gives 2 × 0.6 − 1 = 0.2, or 20% of wealth per flip — the growth-optimal answer to the book's famous coin-flip experiment.",
      difficulty: "warmup",
      guideRef: 0,
    },
    {
      id: "kelly-q3",
      question: "Which statement correctly describes Kelly's famous long-run promise?",
      options: [
        "The Kelly bettor is guaranteed a profit in every year of betting",
        "Over a long enough horizon, the Kelly bettor's wealth beats any other strategy's with probability approaching 1",
        "The Kelly bettor has the highest expected wealth at every horizon, short or long",
        "The Kelly bettor's wealth has the lowest possible variance for its expected return",
      ],
      answerIndex: 1,
      explanation:
        "Kelly maximizes the long-run compounding rate, so eventually the Kelly bettor overtakes any rival with probability approaching 1. But the promise is only about the eventual outcome: expected wealth at any horizon is actually maximized by betting everything, and Kelly's path has plenty of variance along the way — Samuelson's point that 'eventually' can be very long.",
      difficulty: "core",
      hints: [
        "Kelly maximizes a growth rate, not a per-period expectation. What does the highest compounding rate buy you as the horizon grows?",
        "Two of the options claim guarantees about every period or every horizon — Kelly promises nothing of the sort.",
        "The claim is probabilistic and asymptotic: as the horizon grows, the chance the Kelly bettor is ahead of any given rival approaches 1.",
      ],
      strategy: "Read the fine print",
      guideRef: 0,
    },
    {
      id: "kelly-q4",
      question:
        "You bet full Kelly indefinitely with a genuine edge. Roughly what is the probability that at some point your wealth falls to one tenth of its starting value?",
      options: ["About 50%", "About 25%", "About 10%", "About 1%"],
      answerIndex: 2,
      explanation:
        "Full Kelly obeys a clean drawdown law: the probability of ever falling to 1/n of your starting wealth is about 1/n. For n = 10 that is about a 10% chance of at some point being down 90% — and by the same rule, a 50% chance of at some point being down half. This is the 'wild ride' that makes full Kelly intolerable for most investors.",
      difficulty: "core",
      hints: [
        "There is a simple rule linking the depth of a drawdown to its probability under full Kelly.",
        "The chance of ever falling to 1/n of starting wealth is about 1/n. Here, one tenth means n = 10.",
      ],
      strategy: "Learn the drawdown law",
      guideRef: 2,
    },
    {
      id: "kelly-q5",
      question: "What is the long-run growth rate of a bettor who consistently bets exactly twice the Kelly fraction?",
      options: [
        "Twice the maximum growth rate — double the bet, double the growth",
        "The same growth rate as full Kelly, with more variance",
        "About half the maximum growth rate",
        "Zero — all that extra risk earns no long-run growth at all",
      ],
      answerIndex: 3,
      explanation:
        "The growth curve g(f) is a downward parabola through the origin that peaks at Kelly and recrosses zero at exactly 2x Kelly. So the double-Kelly bettor endures four times the variance of a half-Kelly bettor and compounds to nothing; beyond 2x, growth turns negative even though every individual bet has positive expected value.",
      difficulty: "core",
      hints: [
        "Growth versus bet size is a downward-opening parabola. Where does a parabola that starts at zero and peaks at f* return to zero?",
        "By symmetry of the parabola, the second zero sits as far beyond the peak as the first zero (f = 0) sits before it.",
        "The peak is at f*, the first zero at 0 — so the second zero is at 2f*. What growth rate does a bettor at a zero of g(f) earn?",
      ],
      strategy: "Sketch the curve",
      guideRef: 3,
    },
    {
      id: "kelly-q6",
      question: "According to the book, what does betting half-Kelly deliver compared with full Kelly?",
      options: [
        "About 75% of the maximum growth rate, with roughly half the variance",
        "About 50% of the maximum growth rate, with half the variance",
        "About 90% of the maximum growth rate, with the same variance",
        "The full maximum growth rate, since fractional Kelly loses nothing in the long run",
      ],
      answerIndex: 0,
      explanation:
        "Plugging f = f*/2 into the growth formula g(f) = f × mu − f^2 × sigma^2/2 gives exactly 3/4 of the peak growth rate, while the size of the wealth swings is roughly halved. Giving up a quarter of the growth for half the wildness is the trade that makes fractional Kelly the professionals' standard.",
      difficulty: "core",
      hints: [
        "The growth curve is a parabola, so it is flat near its peak — moving halfway down the bet axis costs surprisingly little growth.",
        "A fraction c of Kelly earns (2c − c^2) of the maximum growth. Evaluate that at c = 1/2.",
        "2 × (1/2) − (1/2)^2 = 1 − 1/4 = 3/4 of peak growth, while volatility scales with the bet, so it is roughly halved.",
      ],
      strategy: "Plug into the formula",
      guideRef: 4,
    },
    {
      id: "kelly-q7",
      question:
        "A stock offers a 5% expected excess return with 20% volatility. What is the full-Kelly allocation, and what allocation would an investor with risk aversion gamma = 2 choose instead?",
      options: [
        "Kelly: 25% of wealth; the gamma = 2 investor holds 12.5%",
        "Kelly: 125% of wealth (a leveraged position); the gamma = 2 investor holds 62.5%",
        "Kelly: 125% of wealth; the gamma = 2 investor holds 31.25%",
        "Kelly: 62.5% of wealth; the gamma = 2 investor holds 31.25%",
      ],
      answerIndex: 1,
      explanation:
        "Full Kelly is k = (mu − r)/sigma^2 = 0.05/0.20^2 = 0.05/0.04 = 1.25, i.e. 125% of wealth — Kelly happily prescribes leverage. The Merton share with gamma = 2 divides that by 2, giving 62.5%, which is exactly half-Kelly. This is the identity at the heart of the chapter: fractional Kelly and the Merton share with realistic risk aversion are the same advice.",
      difficulty: "challenge",
      hints: [
        "Kelly for a continuous asset is the excess return divided by the *variance*, not the volatility — remember to square sigma.",
        "sigma = 0.20, so sigma^2 = 0.04. Now compute 0.05/0.04.",
        "That gives 1.25, or 125%. The gamma = 2 investor uses k = (mu − r)/(gamma × sigma^2) — divide the Kelly answer by 2.",
      ],
      strategy: "Careful with units: variance, not volatility",
      guideRef: 1,
    },
    {
      id: "kelly-q8",
      question:
        "An overconfident bettor stakes 1.5x the Kelly fraction. Using the rule that a fraction c of Kelly earns (2c − c^2) of the maximum growth rate, what does the overbetter earn — and how does it compare with a half-Kelly bettor?",
      options: [
        "About 112% of the maximum growth — extra risk buys extra growth",
        "About 90% of the maximum growth — slightly less than full Kelly",
        "About 75% of the maximum growth — identical to the half-Kelly bettor, but with nine times the variance",
        "Zero growth — 1.5x Kelly is already past the cliff",
      ],
      answerIndex: 2,
      explanation:
        "At c = 1.5: 2 × 1.5 − 1.5^2 = 3 − 2.25 = 0.75, so the 1.5x-Kelly bettor earns exactly the same 75% of peak growth as the half-Kelly bettor. But variance scales with the square of the bet, and (1.5/0.5)^2 = 9 — nine times the variance for identical growth. The parabola's symmetry makes overbetting pure waste: everything above Kelly buys risk and no return.",
      difficulty: "challenge",
      hints: [
        "Substitute c = 1.5 into (2c − c^2) carefully: compute 1.5 squared first.",
        "2 × 1.5 = 3 and 1.5^2 = 2.25, so the growth fraction is 3 − 2.25 = 0.75. Which other value of c also gives 0.75?",
        "By the parabola's symmetry, c = 0.5 and c = 1.5 sit equally far from the peak at c = 1. To compare risk, note variance scales as c^2: (1.5)^2/(0.5)^2 = 9.",
      ],
      strategy: "Exploit symmetry",
      guideRef: 3,
    },
  ],
  interactive: "kelly",
  interactiveTitle: "The Kelly Curve",
  interactiveBlurb:
    "Growth rate versus bet size: find the Kelly peak, peer over the cliff beyond it, and see why professionals bet half-Kelly.",
};
