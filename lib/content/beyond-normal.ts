import type { Topic } from "../types";

export const beyondNormal: Topic = {
  id: "beyond-normal",
  title: "Fat Tails, Options & Uncertain Estimates",
  icon: "🐉",
  part: "Part III — Sizing",
  order: 8,
  tagline: "What to do when the world is uglier than the formula assumes",
  intro:
    "The Merton share is a beautiful formula, but it was derived in a tidy world: returns are normally distributed, you know the true expected return, and payoffs are symmetric. Real markets fail all three assumptions. Crashes arrive far more often than the bell curve allows, your estimate of expected return is itself a guess, and half of finance — options, insurance, lotteries — is deliberately *asymmetric*. This chapter makes three refinements. Fat tails argue for a haircut to the formula's answer. Uncertainty about the mean effectively inflates variance, arguing for another haircut. And for genuinely lopsided payoffs, you retire the formula altogether and go back to first principles: enumerate the scenarios and directly compute expected utility. The recurring moral is one phrase: when in doubt, size down.",
  guide: [
    {
      heading: "Dragons in the tails",
      discovery: {
        problem:
          "On October 19, 1987, US stocks fell more than 20% in a single day. Daily volatility runs around 1%, so that was roughly a 20-standard-deviation move. Before reading on: under a normal distribution, about how often should a 20-sigma event occur?",
        idea:
          "Under the normal distribution, a 20-sigma daily move is expected far less than once in the age of the universe — multiplied by itself many times over. It is, for practical purposes, *impossible*. Yet it happened, and smaller-but-still-'impossible' crashes recur every decade or so. Real return distributions have **fat tails**: extreme outcomes are dramatically more likely than the bell curve implies.",
      },
      body:
        "The plain Merton formula assumes returns are normally distributed, so it prices risk using variance alone. But actual markets deliver crashes — 1929, 1987, 2008, 2020 — at frequencies a normal distribution simply cannot generate. The tails of the true distribution are fat.\n\nWhy does this change your size? Because CRRA utility is *very* nonlinear in losses. Losing 40% of your wealth hurts far more than twice as much as losing 20%; as wealth heads toward zero, marginal utility explodes. The normal distribution assigns almost no probability to those devastating states, so a formula built on it quietly ignores exactly the outcomes your utility function cares about most.\n\nWhen the authors re-run optimal sizing using realistic, fat-tailed return distributions instead of the normal, the answer comes out **lower** than the plain formula — not dramatically lower for broad equity markets, but reliably lower. Think of it as a modest haircut, on the order of shaving a tenth or so off the position, rather than a wholesale rejection of the framework.\n\nThe durable instinct to take away: whenever the distribution you face is *uglier* than normal — more skewed, more crash-prone, more leveraged — the plain formula is an overestimate, and the correction always points the same way. **Size down.**",
      whyItWorks:
        "CRRA utility punishes large losses more than proportionally: with γ = 2, going from −20% to −40% doesn't double the utility damage, it far more than doubles it. Fat tails move probability mass into precisely those high-pain states. Extra probability of catastrophe adds more expected *pain* than the same probability of a boom adds expected *pleasure*, so the optimal exposure falls.",
      strategies: ["Consider extremes", "Stress-test the assumptions"],
      keyPoints: [
        "Real markets crash far more often than the normal distribution allows — the 1987 crash was a 'once in many universes' event under normality",
        "CRRA utility punishes big losses disproportionately, so fat tails matter even when they barely change the mean and variance",
        "Fat tails imply a modest but real haircut to the plain Merton share: uglier-than-normal distribution → size down",
      ],
    },
    {
      heading: "You never know mu",
      discovery: {
        problem:
          "Two assets both have an estimated 8% excess return and 20% volatility. Asset A's estimate comes from 50 years of data; Asset B is a hot new strategy with 3 years of history. The formula sees identical inputs. Should you really hold them at identical size?",
        idea:
          "No — and the fix is elegant. Your estimate of the expected return has its own standard error, sigma_mu. The variance that belongs in the sizing formula is not sigma^2 but effectively **sigma^2 + sigma_mu^2**. Asset B's short track record means a large sigma_mu, a larger effective variance, and a smaller position — even though the point estimates match.",
      },
      body:
        "The Merton share asks for the *true* expected excess return, mu. You never have it. You have an estimate, extracted from noisy history or from a theory you only partly trust, and that estimate carries a standard error, sigma_mu.\n\nThe book's prescription: keep using the formula, but replace the variance with `sigma^2 + sigma_mu^2`. Uncertainty about the mean behaves, for sizing purposes, exactly like extra volatility.\n\nRun the numbers. For a broad stock market with sigma = 20% and a well-studied premium, sigma_mu might be around 2%: effective variance is 0.04 + 0.0004 = 0.0404 — a haircut of about 1%, barely worth the ink. But for that hot new asset with sigma_mu = 10%, effective variance is 0.04 + 0.01 = **0.05**. Since the Merton share scales with 1/variance, your position drops to 0.04/0.05 = 80% of the naive answer — a full **20% cut**, before you've said anything about fat tails.\n\nNotice the psychology this corrects. The assets that tempt you to size *up* — new, exciting, spectacular recent returns — are exactly the ones with the shortest track records and the biggest sigma_mu. The framework channels your confidence to where it belongs: **confidence belongs to the estimate, not to the position.** When in doubt, size down.",
      whyItWorks:
        "The return you will actually experience equals the true mean plus random noise: r = mu + epsilon. But mu itself is unknown to you — from your seat, *both* terms are random. Your uncertainty about mu (variance sigma_mu^2) is independent of the market's year-to-year noise (variance sigma^2), and independent uncertainties add in variance. So the outcome variance you genuinely face is sigma^2 + sigma_mu^2, and that is what the formula should divide by.",
      strategies: ["Account for what you don't know", "Work a numerical example"],
      keyPoints: [
        "You never know the true mu; your estimate has a standard error sigma_mu",
        "Sizing should use effective variance sigma^2 + sigma_mu^2 — uncertainty about the mean acts like extra volatility",
        "For well-studied markets the haircut is tiny; for short-track-record assets it can cut the position 20% or more",
        "Motto: when in doubt, size down — confidence belongs to the estimate, not the position",
      ],
    },
    {
      heading: "Buying insurance: paying to move money where it matters",
      discovery: {
        problem:
          "A put option on your portfolio costs $4. Careful analysis says its actuarially fair value — probability-weighted payout — is only $3. Buying it locks in an expected *loss* of $1. Every expected-value argument in this book so far screams 'don't'. Can buying it still be rational?",
        idea:
          "Yes — because you maximize expected *utility*, not expected dollars. The put pays off precisely in the states where your wealth has collapsed and each extra dollar is worth the most to you. Transferring wealth from high-wealth states (where marginal utility is low) into disaster states (where it is enormous) can raise expected utility even at a somewhat unfair price. That is the entire logic of insurance.",
      },
      body:
        "Asymmetric payoffs are where mean-variance thinking breaks down completely. An option's payoff is kinked: a put is worthless in most states and enormously valuable in a crash. Summarizing that with a mean and a variance throws away exactly the feature that matters. Expected utility handles it natively.\n\nConsider a concrete scenario. Your wealth is 1.0. With probability 90% the market is fine; with probability 10% it crashes and your wealth halves to 0.5. A put paying 0.30 in the crash has fair value 0.10 × 0.30 = 0.03, but the market charges 0.04. Buying it is negative expected value — your average wealth falls by 0.01. Yet compute expected utility with γ = 2 and the insured position wins comfortably, because that 0.30 arrives when marginal utility is at its peak.\n\nThis is why sensible people buy home insurance, term life insurance, and sometimes portfolio protection at prices they *know* embed a profit margin for the seller. Fair-to-slightly-unfair insurance against ruinous states can be a utility bargain.\n\nThe limit matters too: at a sufficiently unfair price, the utility gain is eaten by the premium and the answer flips back to 'don't buy'. Expected utility doesn't say insurance is always good — it tells you exactly *how much* unfairness protection is worth to you.",
      strategies: ["Change the units — dollars to utility"],
      keyPoints: [
        "Options create asymmetric payoffs that mean-variance thinking cannot evaluate; expected utility can",
        "Buying a put is accepting negative expected value in exchange for wealth in the states where marginal utility is highest",
        "Insurance can be rational at a fair or slightly unfair price — and irrational beyond some level of unfairness, which the framework quantifies",
      ],
    },
    {
      heading: "The premium seller's graveyard — and the lottery counter",
      body:
        "Now reverse the trade. Selling options collects a steady stream of premiums — month after month of small, pleasant wins — in exchange for rare, violent losses when the tail event arrives. The expected value can be genuinely positive: sellers are being paid the insurance margin that buyers rationally give up.\n\nExpected utility renders a sharply size-dependent verdict. At *tiny* size, a short option position is fine: the rare loss dents wealth modestly, and you pocket a real risk premium. But scale the same trade up and the rare loss stops being a dent and becomes ruin — and CRRA utility treats near-ruin as approaching infinitely bad. A trade whose expected utility is positive at 1% of wealth can be catastrophically negative at 20%. The financial graveyard is well stocked with premium sellers — from option-writing funds to 'picking up nickels in front of a steamroller' hedge funds — who were undone not by the strategy but by the **size**.\n\nThe lottery ticket sits at the opposite counter and fails on *both* tests. It has negative expected value — the state takes a large cut — and its payoff arrives in a state that isn't special: a jackpot doesn't hit when your marginal utility is unusually high. For *any* concave utility function, negative EV plus no insurance value means negative expected utility at every size above zero. Lottery tickets are bought for fun, and fun is a fine reason — just don't book it as finance.",
      whyItWorks:
        "Short-option losses scale linearly with position size, but the utility damage scales much faster than linearly, because each further step toward zero wealth costs more utility than the last. Premium income, by contrast, adds utility roughly linearly at these scales. So there is a crossover size — small — beyond which the occasional catastrophe dominates the steady income, and expected utility turns negative.",
      strategies: ["Consider extremes", "Ask how it scales"],
      keyPoints: [
        "Selling options = steady small premiums plus rare large losses; expected value can be positive",
        "The verdict is all about size: fine when tiny, catastrophic when large — utility damage grows faster than linearly with size",
        "Lottery tickets have negative EV and pay off in ordinary-marginal-utility states, so they carry negative expected utility for any risk-averse investor at any size",
      ],
    },
    {
      heading: "The fully general method: enumerate, weight, choose",
      body:
        "The refinements in this chapter share a single engine, and it is worth naming plainly, because it is the fully general version of everything in the book.\n\nFor **any** payoff — normal or fat-tailed, symmetric or kinked, formula-friendly or not — you can always size it by brute force:\n\n- **Enumerate** the scenarios: list the possible outcomes of the position, including the ugly ones\n- **Weight** them: attach your honest probability to each scenario\n- For each candidate size, compute end-of-period wealth in every scenario and convert it to **utility** with your CRRA function\n- **Choose** the size that maximizes probability-weighted average utility, E[u]\n\nThe Merton share is nothing more than the closed-form answer this procedure gives in the special case of normal returns and known parameters. When those special conditions fail, you don't abandon the framework — you abandon the shortcut and run the general procedure directly. A spreadsheet with a dozen scenarios is usually enough.\n\nThis is also the honest response to every exotic pitch you will ever hear — structured notes, covered-call funds, crypto lending at 12%, private deals with 'asymmetric upside'. Don't ask *is this a good asset?* Ask: what are the scenarios, what are their probabilities, and **what size of this thing maximizes my expected utility?** Very often the answer is a much smaller number than the pitch implies. Occasionally it is zero. It is never 'whatever feels right'.",
      strategies: ["Enumerate cases", "Reduce to a solved problem"],
      keyPoints: [
        "Universal recipe: enumerate outcomes, weight by probability, compute utility of wealth at each candidate size, maximize E[u]",
        "The Merton formula is just this procedure's closed-form answer under normality with known parameters",
        "For any non-normal payoff, stop using formulas and compute expected utility across scenarios directly",
      ],
    },
  ],
  quiz: [
    {
      id: "nonnormal-q1",
      question:
        "Real equity markets experience crashes far more often than a normal distribution predicts. According to the book, how should this change the position size given by the plain Merton formula?",
      options: [
        "Increase it — crashes create buying opportunities that raise expected returns",
        "Reduce it modestly — fat tails argue for a haircut below the formula's answer",
        "Leave it unchanged — the formula already accounts for all risk through variance",
        "Cut it to zero — no equity exposure is rational under fat tails",
      ],
      answerIndex: 1,
      explanation:
        "Because CRRA utility punishes large losses far more than proportionally, extra probability in the crash states adds more expected pain than the formula (which assumes normality) accounts for. The correction is a modest but real haircut, not abandonment of equities. The general instinct: when the distribution is uglier than normal, size down.",
      difficulty: "warmup",
      guideRef: 0,
    },
    {
      id: "nonnormal-q2",
      question:
        "A hot new strategy shows a spectacular estimated return, but it only has three years of history. What does the book say your confidence should attach to?",
      options: [
        "The position — a high estimated return justifies a large allocation",
        "Neither — short-history assets should simply never be held",
        "The estimate — a short track record means a shaky estimate, which argues for a smaller position",
        "The manager — track-record length matters less than who runs the strategy",
      ],
      answerIndex: 2,
      explanation:
        "The book's motto is 'when in doubt, size down': confidence belongs to the estimate, not the position. A three-year history means your estimate of the mean carries a large standard error, which inflates the effective variance in the sizing formula and shrinks the optimal position — it doesn't necessarily shrink it to zero.",
      difficulty: "warmup",
      guideRef: 1,
    },
    {
      id: "nonnormal-q3",
      question:
        "An asset has volatility sigma = 20% and your estimate of its expected return has standard error sigma_mu = 10%. Using effective variance sigma^2 + sigma_mu^2, by roughly what fraction is the optimal position cut relative to ignoring estimation error?",
      options: ["About 4%", "About 10%", "About 20%", "About 50%"],
      answerIndex: 2,
      explanation:
        "Plain variance is 0.2^2 = 0.04; adding sigma_mu^2 = 0.1^2 = 0.01 gives effective variance 0.05. The Merton share scales with 1/variance, so the position becomes 0.04/0.05 = 80% of the naive answer — a 20% cut. Contrast a well-studied market with sigma_mu = 2%: 0.04 + 0.0004 = 0.0404, a cut of only about 1%.",
      difficulty: "core",
      hints: [
        "Work in variances, not volatilities: square both numbers first.",
        "Effective variance = 0.04 + 0.01 = 0.05. The Merton share is inversely proportional to variance.",
        "New size / old size = 0.04/0.05 = 0.8. What cut is that?",
      ],
      strategy: "Work a numerical example",
      guideRef: 1,
    },
    {
      id: "nonnormal-q4",
      question:
        "Buying a put option at a price slightly above its actuarially fair value locks in a negative expected dollar return. Why can this still be a rational purchase under expected utility?",
      options: [
        "Because the put's payoff arrives in exactly the states where wealth has collapsed and marginal utility is highest",
        "Because option prices always revert to fair value before expiry",
        "Because the negative expected value is offset by the put's positive skewness raising average returns",
        "Because puts reduce portfolio variance, and lower variance always raises expected utility",
      ],
      answerIndex: 0,
      explanation:
        "Insurance is a transfer of wealth across states: you give up a little in the many states where you're fine (marginal utility low) to receive a lot in the disaster states (marginal utility enormous). That trade can raise expected utility even at a somewhat unfair price. It is not about skewness raising returns — the expected return is genuinely negative — and variance reduction alone can't capture a kinked payoff.",
      difficulty: "core",
      hints: [
        "The framework maximizes expected utility, not expected dollars. When do the put's dollars arrive?",
        "Compare the utility value of one dollar when your wealth is 0.5 versus when it is 1.0 under a concave utility function.",
        "Insurance moves money from low-marginal-utility states to high-marginal-utility states — that transfer itself creates utility value.",
      ],
      strategy: "Change the units — dollars to utility",
      guideRef: 2,
    },
    {
      id: "nonnormal-q5",
      question:
        "Selling options collects steady premiums with occasional large losses, and can have genuinely positive expected value. What is the expected-utility verdict on such a position?",
      options: [
        "Always attractive — positive expected value means positive expected utility",
        "Never attractive — rare large losses make expected utility negative at any size",
        "Attractive at small size but potentially catastrophic when oversized, because utility damage grows faster than linearly with size",
        "Neutral — the premiums and losses cancel in utility terms",
      ],
      answerIndex: 2,
      explanation:
        "Premium income adds utility roughly linearly with size, but the rare loss's utility cost accelerates as it pushes wealth toward zero, where CRRA marginal utility explodes. So there is a small crossover size below which the trade is fine and above which it is ruinous — the 'premium seller's graveyard' is filled with traders who got the strategy right and the size wrong.",
      difficulty: "core",
      hints: [
        "Positive expected value is necessary context, but expected utility depends on the whole distribution of outcomes.",
        "Ask how each component scales as you multiply the position by 10: the premium income, and the utility cost of the rare loss.",
        "The loss in dollars scales linearly, but each further step toward zero wealth costs more utility than the last — so damage scales faster than linearly.",
      ],
      strategy: "Ask how it scales",
      guideRef: 3,
    },
    {
      id: "nonnormal-q6",
      question:
        "Both a portfolio put and a lottery ticket have negative expected value. Why does the book treat the put as potentially rational finance but the lottery ticket as never rational finance?",
      options: [
        "The put's expected value is less negative than the lottery ticket's",
        "The put pays off in high-marginal-utility (disaster) states, while a jackpot arrives in ordinary states — so the lottery has negative expected utility for any concave utility function",
        "The put has a knowable probability distribution while the lottery's odds are hidden",
        "The lottery ticket is riskier because its payoff has higher variance",
      ],
      answerIndex: 1,
      explanation:
        "The put is insurance: its negative EV buys wealth precisely where each dollar is most valuable, which can raise expected utility. A jackpot doesn't arrive when you especially need money, so the lottery offers no state-contingent utility bonus to offset its negative EV — for any risk-averse (concave-utility) investor it fails on both counts, at any size. It's bought for fun, not finance.",
      difficulty: "core",
      hints: [
        "Both have negative EV, so the difference must lie in *which states* the payoffs arrive in.",
        "Insurance value comes from receiving money when marginal utility is unusually high. When does a put pay? When does a jackpot pay?",
        "With no high-marginal-utility timing to compensate, negative EV plus concavity means negative expected utility — twice condemned.",
      ],
      strategy: "Change the units — dollars to utility",
      guideRef: 3,
    },
    {
      id: "nonnormal-q7",
      question:
        "An asset returns +25% with probability 0.9 and −80% with probability 0.1 (expected return +14.5%). Your utility is CRRA with γ = 2, i.e. u(w) = −1/w, and initial wealth is 1. Compare investing 100% of wealth versus 50% (rest in cash at 0%). Which has higher expected utility?",
      options: [
        "The 100% position — its expected return is double, so E[u] must be higher",
        "The 50% position (E[u] ≈ −0.97); the 100% position (E[u] ≈ −1.22) is actually worse than holding pure cash (u = −1)",
        "They are equal, since expected utility is linear in position size",
        "Both beat cash, but the 100% position wins narrowly",
      ],
      answerIndex: 1,
      explanation:
        "Full investment: wealth is 1.25 or 0.20, so E[u] = 0.9(−1/1.25) + 0.1(−1/0.20) = 0.9(−0.8) + 0.1(−5) = −0.72 − 0.50 = −1.22. Half investment: wealth is 1.125 or 0.60, so E[u] = 0.9(−0.8889) + 0.1(−1.6667) = −0.80 − 0.1667 ≈ −0.967. Cash gives u(1) = −1. Despite a strongly positive expected return, the fat left tail makes the full position worse than doing nothing, while half size beats both — sizing, not the asset, determines the verdict.",
      difficulty: "challenge",
      hints: [
        "Run the scenario method: for each size, list the two wealth outcomes, apply u(w) = −1/w, and probability-weight.",
        "Full size: outcomes are 1.25 and 0.20. Compute 0.9(−1/1.25) + 0.1(−1/0.20).",
        "Half size: outcomes are 1.125 and 0.60. Compare both results to cash, which scores u(1) = −1.",
      ],
      strategy: "Enumerate cases",
      guideRef: 4,
    },
    {
      id: "nonnormal-q8",
      question:
        "Wealth is 1. With probability 0.9 nothing happens; with probability 0.1 a crash halves wealth to 0.5. A put paying 0.30 in the crash costs 0.04 (fair value 0.03, so buying loses 0.01 in expectation). With u(w) = −1/w, should you buy it?",
      options: [
        "No — the purchase has negative expected value, and no negative-EV trade can raise expected utility",
        "Yes, but only if the price falls to the fair value of 0.03",
        "You are exactly indifferent, since the 0.01 EV loss cancels the insurance benefit",
        "Yes — E[u] with the put ≈ −1.069 versus −1.100 without it, so the insurance is worth its unfair price",
      ],
      answerIndex: 3,
      explanation:
        "Without the put: E[u] = 0.9(−1/1) + 0.1(−1/0.5) = −0.9 − 0.2 = −1.100. With it, wealth is 0.96 normally and 0.5 + 0.30 − 0.04 = 0.76 in the crash: E[u] = 0.9(−1/0.96) + 0.1(−1/0.76) = −0.9375 − 0.1316 ≈ −1.069. Expected wealth falls (0.94 vs 0.95), yet expected utility rises, because the 0.30 lands where marginal utility is highest. This is the scenario method proving that slightly unfair insurance can be rational.",
      difficulty: "challenge",
      hints: [
        "Compute expected utility in both worlds; don't stop at expected wealth.",
        "Without the put the two wealth outcomes are 1 and 0.5. With it they are 1 − 0.04 = 0.96 and 0.5 + 0.30 − 0.04 = 0.76.",
        "Apply u(w) = −1/w to all four outcomes, weight by 0.9/0.1, and compare the two sums.",
      ],
      strategy: "Enumerate cases",
      guideRef: 4,
    },
  ],
  interactive: "option-payoff",
  interactiveTitle: "The Payoff Sculptor",
  interactiveBlurb:
    "Build option payoffs and see how asymmetry changes what expected utility says a position is worth — and how fat tails and estimation error shrink your size.",
};
