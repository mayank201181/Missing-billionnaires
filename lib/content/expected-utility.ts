import type { Topic } from "../types";

export const expectedUtility: Topic = {
  id: "expected-utility",
  title: "Expected Utility & Risk Aversion",
  icon: "🧠",
  part: "Part II — Risk, Return & Utility",
  order: 3,
  tagline: "Why a dollar isn't worth a dollar — and how to put a number on your appetite for risk",
  intro:
    "Ask most people to evaluate a gamble and they'll compute its expected dollar value. Yet a 280-year-old puzzle — a coin game with *infinite* expected payoff that nobody would pay more than a few dollars to play — shows that expected dollars cannot be the right yardstick. The fix, first proposed by Daniel Bernoulli in 1738, is the engine of this entire book: money has diminishing marginal utility, so rational decisions maximize expected **utility**, not expected wealth. This topic builds that engine piece by piece: the CRRA utility function, the risk-aversion dial called gamma, and the certainty equivalent — the sure number that tells you exactly what any gamble is worth *to you*. Get comfortable here, because every sizing, spending, and insurance decision later in the book is just this machinery, reapplied.",
  guide: [
    {
      heading: "A game worth infinity that nobody will pay $50 for",
      discovery: {
        problem:
          "Here is a game. I flip a fair coin until it lands heads. If heads comes up on the first flip, you win $2. On the second flip, $4. On the third, $8 — the pot doubles with every tails. Two questions, in order: what is the expected dollar payoff of this game? And honestly — what is the most *you* would actually pay to play it once?",
        idea:
          "The expected value is 0.5 × $2 + 0.25 × $4 + 0.125 × $8 + ... = $1 + $1 + $1 + ... — an **infinite** sum. Yet almost everyone, when honest, would pay somewhere under $10. This is the *St. Petersburg paradox*, posed in the 1700s. If a game with infinite expected payoff is worth only a few dollars to you, then expected dollars is simply not the quantity your mind — or any sensible decision rule — is maximizing.",
      },
      body:
        "Daniel Bernoulli published his resolution in 1738, and it is the founding insight of decision theory: people value money by the *satisfaction* it brings, and each extra dollar brings less satisfaction than the one before. Going from $1,000 to $2,000 of wealth changes your life; going from $1,001,000 to $1,002,000 barely registers.\n\nBernoulli proposed measuring the value of wealth with a **logarithmic utility function**, `u(w) = ln(w)`. Under log utility the St. Petersburg game is worth a small finite amount, matching what people actually offer to pay.\n\nThe general lesson outlives the puzzle: whenever outcomes are risky, the right move is to convert each possible wealth outcome into *utility*, average the utilities using the probabilities, and choose the option with the highest **expected utility**. Expected dollars and expected utility agree only when utility is a straight line — and for real humans facing meaningful stakes, it never is.",
      whyItWorks:
        "Why does log utility tame an infinite sum? Each doubling of the payoff adds only a constant *increment* of utility — ln(2^n) = n × ln(2) grows linearly in n — while the probability of reaching that payoff halves each round. A series whose terms look like n/2^n converges to a modest finite number. Utility grows too slowly to keep up with the halving probabilities, so the game's expected utility, and hence its fair price, is finite and small.",
      strategies: ["Consider extremes", "Change the units of the problem"],
      keyPoints: [
        "The St. Petersburg game has infinite expected dollar value, yet people rationally value it at only a few dollars",
        "Bernoulli's 1738 fix: value outcomes by utility, not dollars, and maximize expected utility",
        "Log utility makes the paradox vanish because utility gains shrink as payoffs double",
      ],
    },
    {
      heading: "Diminishing marginal utility: the shape behind risk aversion",
      discovery: {
        problem:
          "You have $100,000 of savings. Offer A: a guaranteed gift of $50,000. Offer B: a coin flip — heads you get $110,000, tails you get nothing. Offer B has the higher expected value ($55,000 vs $50,000). Which would you take, and — more importantly — can you say *why* preferring A might be perfectly rational rather than timid?",
        idea:
          "Preferring the sure $50,000 is rational because the two halves of the gamble are not symmetric *in utility*. The first $50,000 of gain buys more life improvement than the second $60,000 does. When the utility curve bends — steep at low wealth, flat at high wealth — the average of the utilities sits *below* the utility of the average. Risk aversion is not a personality trait bolted onto the math; it **is** the curvature.",
      },
      body:
        "This is the single most misunderstood point in the book, so it deserves its own section: **risk aversion is not fear, and it is not pessimism**. A risk-averse decision maker can agree with you about every probability and every payoff and still turn down a positive-expected-value bet — because the *utility* at stake on the downside outweighs the utility on offer on the upside.\n\nA concave (bowed-upward-then-flattening) utility curve mechanically produces three behaviours we observe everywhere:\n\n- Losses hurt more than equal-sized gains help, measured in utility\n- A sure amount can be preferred to a gamble with a higher expected value\n- People pay real money — insurance premiums — to *remove* risk, and this can be rational even when the insurer profits\n\nNone of these require emotion. They fall straight out of the arithmetic of a curved value scale. The practical payoff is liberating: instead of asking the fuzzy question 'how do I feel about risk?', you can ask the precise one — 'what is the *shape* of my utility curve?' — and that shape turns out to be describable with a single number.",
      whyItWorks:
        "Take a concave curve and mark two wealth outcomes on it. Expected utility is the midpoint of the *chord* connecting the two utility values; the utility of the expected wealth sits on the *curve* above it. For any concave function the chord lies below the curve (this is Jensen's inequality), so a sure thing beats a fair gamble of the same expected value. The gap between curve and chord is exactly the price of risk.",
      keyPoints: [
        "Each extra dollar adds less utility than the last — the curve is concave",
        "Risk aversion follows mathematically from that curvature; it is not fear or pessimism",
        "For a concave curve, expected utility of a gamble < utility of its expected value (Jensen's inequality)",
      ],
    },
    {
      heading: "CRRA utility and the gamma dial",
      body:
        "The book's workhorse is the **CRRA** family — *constant relative risk aversion* — written `u(w) = w^(1-gamma)/(1-gamma)`. One parameter, **gamma**, controls the curvature:\n\n- `gamma = 0`: utility is a straight line — you're risk-neutral and maximize expected dollars\n- `gamma = 1`: the formula's limit is exactly Bernoulli's `u(w) = ln(w)`\n- Higher gamma: sharper curvature and stronger risk aversion\n\nGamma is called the *coefficient of relative risk aversion*. 'Relative' is the key word: a CRRA decision maker cares about **percentage** changes in wealth, not dollar amounts. Risking 10% of your wealth feels the same at $100,000 as at $100 million. That scale-invariance is what makes one number usable across a whole lifetime of growing (or shrinking) wealth.\n\nWhat is a reasonable gamma? Observed behaviour and introspective surveys suggest most people act as if **gamma is about 2 to 3**. The book's base case is **gamma = 2**, with a plausible range of roughly **1 to 4**. Below 1 you are close to a coin-flipping riverboat gambler; much above 4 you would refuse gambles almost everyone considers obviously attractive.\n\nDon't worry about the strange look of the formula (for gamma > 1 utility values are negative — only *differences* in utility ever matter). What matters is the dial: one number that summarizes your entire attitude to financial risk.",
      whyItWorks:
        "Why does the same fraction of wealth feel the same at any wealth level? Under CRRA, scaling wealth by a constant k scales utility by k^(1-gamma) plus nothing that alters *choices* — every gamble expressed in percentage terms produces the same ranking of options regardless of starting wealth. That's the 'constant relative' property: your percentage allocations shouldn't drift just because your wealth grew.",
      strategies: ["Reduce to one parameter"],
      keyPoints: [
        "CRRA utility: u(w) = w^(1-gamma)/(1-gamma); gamma = 1 gives u(w) = ln(w)",
        "Higher gamma = more risk averse; gamma = 0 = risk-neutral expected-dollar maximizer",
        "Most people behave as if gamma ≈ 2-3; the book's base case is gamma = 2 (plausible range 1-4)",
        "CRRA is scale-invariant: only fractions of wealth matter, so one gamma works at any wealth level",
      ],
    },
    {
      heading: "The certainty equivalent: what a gamble is really worth",
      discovery: {
        problem:
          "You must take a 50/50 gamble: heads, your total wealth doubles; tails, it is cut in half. Before any formulas: would you pay something to escape this gamble — and if so, roughly what fraction of your wealth? Now check your intuition against the arithmetic: the gamble's expected value is 0.5 × 2w + 0.5 × 0.5w = 1.25w, a 25% *gain* on average. Does that change your answer?",
        idea:
          "Most people would pay a meaningful slice of wealth to escape — even though the gamble is 25% profitable in expected-dollar terms. The number that captures this is the **certainty equivalent (CE)**: the sure wealth that gives exactly the same utility as the gamble. For a log-utility person the CE of double-or-halve is exactly w — total indifference. For gamma = 2 the CE is only 0.8w: they would sacrifice up to 20% of their wealth to avoid a bet that 'averages' +25%.",
      },
      body:
        "The certainty equivalent is the practical output of the whole framework — it converts any risky prospect back into a single sure number you can compare against alternatives.\n\nThe recipe: compute the gamble's expected utility, then find the sure wealth with that same utility. The gap between the expected value and the CE is the **risk premium** — the most you would rationally pay to shed the risk, and equally the minimum extra return you should demand for bearing it.\n\nFor *small* gambles there is a beautifully simple approximation: the risk premium, as a fraction of wealth, is about `0.5 × gamma × sigma^2`, where sigma is the gamble's size (standard deviation as a fraction of wealth). Notice the **square**. A gamble on 2% of your wealth needs only a whisker of compensation; a gamble ten times larger needs a *hundred* times more. This one formula explains two of the book's recurring commands: stop fretting over tiny risks (near risk-neutrality is correct for them — buying insurance on a toaster is a mistake), and treat large concentrated risks with extreme respect, because required compensation grows much faster than position size.",
      whyItWorks:
        "Run the double-or-halve numbers. Log utility (gamma = 1): E[u] = 0.5 × ln(2w) + 0.5 × ln(w/2) = ln(w) + 0.5 × ln(2) − 0.5 × ln(2) = ln(w). Same utility as sure wealth w, so CE = w: exact indifference. Gamma = 2 (u = −1/w): E[u] = 0.5 × (−1/(2w)) + 0.5 × (−1/(0.5w)) = −0.25/w − 1/w = −1.25/w. Set −1/CE = −1.25/w to get CE = w/1.25 = 0.8w. The extra curvature turns a +25% expected-value bet into something worth 20% *less* than doing nothing.",
      strategies: ["Work a concrete example", "Compute the certainty equivalent"],
      keyPoints: [
        "CE = the sure wealth giving the same utility as the gamble; risk premium = expected value − CE",
        "Double-or-halve gamble: CE = w under log utility (indifferent); CE = 0.8w under gamma = 2",
        "Small-gamble risk premium ≈ 0.5 × gamma × sigma^2 — it scales with the square of gamble size",
        "Squared scaling means: be nearly risk-neutral on small risks, extremely careful with big ones",
      ],
    },
    {
      heading: "Choose your gamma — then use it for everything",
      body:
        "Gamma is personal. The book's advice is not 'be less risk averse' or 'be more careful'; it is: **figure out your own gamma, write it down, and apply it consistently**.\n\nHow do you find it? Introspection on calibrated thought experiments. The classic probe: *what fraction of your wealth would you stake on a 50/50 chance to double that stake or lose it?* Or: *how much of your total wealth would you risk for a 50/50 shot at doubling your total wealth?* Your answers pin down a gamma. Someone indifferent to double-or-halve is a gamma-of-1 (log) person; someone who'd pay 20% of wealth to avoid it is near gamma = 2. Most readers land between 1 and 4, and if you have no strong conviction, gamma = 2 is a sensible default.\n\nThe crucial discipline is **consistency**. The same gamma should drive your stock allocation, your position sizing, your spending rate, your insurance purchases, and your mortgage decisions. Using gamma = 1 boldness in your portfolio while buying gamma = 10 extended warranties means some of your decisions are, by your *own* standards, wrong — and the gap is free money left on the table.\n\nOne coherent dial, applied everywhere: that is what turns expected utility from a classroom curiosity into an operating system for financial life. Every remaining topic in this guide — the Merton share, Kelly, spending rules, annuities — is that dial turned to a different task.",
      strategies: ["Calibrate with thought experiments"],
      keyPoints: [
        "Calibrate gamma by introspection: e.g. what would you pay to avoid (or accept to take) a double-or-halve gamble?",
        "Pick one gamma and use it for all decisions — sizing, spending, insurance alike",
        "Inconsistent implied gammas across decisions mean some choices are wrong by your own standards",
      ],
    },
  ],
  quiz: [
    {
      id: "utility-q1",
      question: "According to expected utility theory, a rational decision maker facing risky choices should pick the option with the highest:",
      options: [
        "Expected dollar payoff",
        "Probability of a gain",
        "Expected utility of wealth",
        "Worst-case outcome",
      ],
      answerIndex: 2,
      explanation:
        "Because money has diminishing marginal utility, expected dollars misprice risk — the St. Petersburg game has infinite expected payoff but is worth only a few dollars to anyone. Converting outcomes to utility first, then averaging, is Bernoulli's fix and the book's foundation.",
      difficulty: "warmup",
      guideRef: 0,
    },
    {
      id: "utility-q2",
      question: "In the CRRA utility function u(w) = w^(1-gamma)/(1-gamma), what does a higher gamma mean, and what is the book's base-case value?",
      options: [
        "Higher gamma means more risk averse; the book's base case is gamma = 2",
        "Higher gamma means less risk averse; the book's base case is gamma = 2",
        "Higher gamma means more risk averse; the book's base case is gamma = 10",
        "Gamma measures expected return, not risk aversion; the base case is gamma = 1",
      ],
      answerIndex: 0,
      explanation:
        "Gamma is the coefficient of relative risk aversion: it controls the curvature of the utility function, and more curvature means stronger aversion to risk. Most people behave as if gamma is about 2 to 3; the book uses gamma = 2 as its base case, with a plausible range of roughly 1 to 4.",
      difficulty: "warmup",
      guideRef: 2,
    },
    {
      id: "utility-q3",
      question: "The St. Petersburg game has an infinite expected dollar payoff. Why does log utility value it at only a small finite amount?",
      options: [
        "Log utility assigns zero value to payoffs beyond a certain cap",
        "Each doubling of the payoff adds only a constant utility increment, while its probability halves — so the utility series converges",
        "Log utility discounts future coin flips at the market interest rate",
        "The game's variance is infinite, and log utility penalizes variance directly",
      ],
      answerIndex: 1,
      explanation:
        "Under u(w) = ln(w), the payoff 2^n is worth n × ln(2) — utility grows linearly in the number of flips while the probability of reaching that round shrinks by half each time. Terms like n/2^n sum to a small finite number, so the game's expected utility (and fair price) is modest. Diminishing marginal utility, not any cap or discount, kills the paradox.",
      difficulty: "core",
      hints: [
        "Write down what the nth prize (2^n dollars) is worth in log utility, not in dollars.",
        "ln(2^n) = n × ln(2): utility grows linearly with n while the probability of reaching round n is 1/2^n.",
        "Compare a series with terms n/2^n to the dollar series with terms 2^n/2^n = 1. One converges, one doesn't.",
      ],
      strategy: "Change the units of the problem",
      guideRef: 0,
    },
    {
      id: "utility-q4",
      question: "A person with log utility (gamma = 1) faces a forced 50/50 gamble: wealth doubles or wealth is halved. What is their certainty equivalent?",
      options: [
        "1.25w — the gamble's expected value",
        "Exactly w — they are indifferent between the gamble and doing nothing",
        "0.8w — they would pay 20% of wealth to avoid it",
        "0.5w — they value the gamble at its worst case",
      ],
      answerIndex: 1,
      explanation:
        "E[u] = 0.5 × ln(2w) + 0.5 × ln(w/2) = ln(w) + 0.5 × ln(2) − 0.5 × ln(2) = ln(w). The utility boost from doubling exactly cancels the utility hit from halving, so the gamble is worth precisely current wealth: a log-utility person is exactly indifferent, despite the +25% expected dollar value.",
      difficulty: "core",
      hints: [
        "Compute the expected utility: average ln(2w) and ln(w/2).",
        "Use ln(2w) = ln(w) + ln(2) and ln(w/2) = ln(w) − ln(2). What happens when you average them?",
        "The ln(2) terms cancel. What sure wealth has utility ln(w)?",
      ],
      strategy: "Work a concrete example",
      guideRef: 3,
    },
    {
      id: "utility-q5",
      question: "Same forced double-or-halve gamble, but now for a gamma = 2 investor (u(w) = −1/w). Their certainty equivalent is 0.8w. What does this mean in plain terms?",
      options: [
        "They would need to be paid 0.8w to accept the gamble",
        "They expect to end up with 0.8w on average",
        "They would give up as much as 20% of their wealth to escape the gamble — even though its expected value is +25%",
        "They are indifferent, since 0.8w rounds to w",
      ],
      answerIndex: 2,
      explanation:
        "E[u] = 0.5 × (−1/(2w)) + 0.5 × (−1/(0.5w)) = −1.25/w, and the sure wealth with utility −1.25/w is w/1.25 = 0.8w. A sure 0.8w feels exactly as good as holding the gamble, so anything above a 20%-of-wealth escape fee is worth paying. The gap between the 1.25w expected value and the 0.8w CE — 0.45w — is this investor's risk premium on the gamble.",
      difficulty: "core",
      hints: [
        "With gamma = 2, utility is u(w) = −1/w. Average the utilities of 2w and 0.5w.",
        "0.5 × (−1/(2w)) = −0.25/w and 0.5 × (−1/(0.5w)) = −1/w. Add them.",
        "Find the sure wealth CE with −1/CE = −1.25/w, then compare CE to w.",
      ],
      strategy: "Compute the certainty equivalent",
      guideRef: 3,
    },
    {
      id: "utility-q6",
      question: "For small gambles the required risk premium is approximately 0.5 × gamma × sigma^2. If you double the size of a small gamble, the risk premium you should demand roughly:",
      options: [
        "Doubles, since premium is proportional to size",
        "Quadruples, since premium scales with the square of size",
        "Stays the same, since gamma is constant",
        "Increases eightfold, since risk compounds",
      ],
      answerIndex: 1,
      explanation:
        "Sigma enters the formula squared, so doubling the gamble's size multiplies the required premium by 2^2 = 4. This squared scaling is why tiny risks deserve near risk-neutral treatment (insuring a toaster is a mistake) while large concentrated risks need disproportionately huge compensation — the central asymmetry behind the book's sizing advice.",
      difficulty: "core",
      hints: [
        "Look at where sigma appears in the formula. Is it linear or squared?",
        "Replace sigma with 2 × sigma in 0.5 × gamma × sigma^2 and see what factor pops out.",
      ],
      strategy: "Consider extremes",
      guideRef: 3,
    },
    {
      id: "utility-q7",
      question: "A gamma = 2 investor (u(w) = −1/w) with wealth w is offered a 50/50 gamble: gain 20% of wealth, or lose a fraction x. What is the largest loss fraction x at which they would still accept?",
      options: [
        "About 10% — half the potential gain",
        "About 14% — set expected utility of the gamble equal to u(w) and solve",
        "About 17% — the geometric mean of 20% and 14%",
        "Exactly 20% — matching the gain keeps the bet fair",
      ],
      answerIndex: 1,
      explanation:
        "Indifference requires 0.5 × (−1/(1.2w)) + 0.5 × (−1/((1−x)w)) = −1/w. Multiply through by −2w: 1/1.2 + 1/(1−x) = 2. Since 1/1.2 = 5/6, we need 1/(1−x) = 7/6, so 1−x = 6/7 and x = 1/7 ≈ 14.3%. A gamma = 2 investor demands the downside be meaningfully smaller than the upside — a 'fair-looking' ±20% bet would be rejected.",
      difficulty: "challenge",
      hints: [
        "Set the gamble's expected utility equal to the utility of staying put: 0.5 × u(1.2w) + 0.5 × u((1−x)w) = u(w), with u(w) = −1/w.",
        "Wealth w cancels from every term. You're left with 1/1.2 + 1/(1−x) = 2.",
        "1/1.2 = 5/6, so 1/(1−x) must equal 7/6. Invert to find 1−x.",
      ],
      strategy: "Compute the certainty equivalent",
      guideRef: 3,
    },
    {
      id: "utility-q8",
      question: "Using the small-gamble approximation (premium ≈ 0.5 × gamma × sigma^2) with gamma = 2: what risk premium, as a fraction of wealth, should you demand for a 50/50 gamble of ±2% of wealth, versus one of ±20% of wealth?",
      options: [
        "0.4% and 4% — premiums scale in proportion to the gamble",
        "0.04% and 0.4% — both gambles are nearly costless",
        "0.04% and about 4% — the 10x larger gamble needs roughly 100x the premium",
        "2% and 20% — the premium equals the amount at stake",
      ],
      answerIndex: 2,
      explanation:
        "For ±2%: sigma = 0.02, so premium ≈ 0.5 × 2 × 0.0004 = 0.0004 = 0.04% of wealth — nearly nothing, so treat such gambles almost risk-neutrally. For ±20%: sigma = 0.2, so premium ≈ 0.5 × 2 × 0.04 = 4% of wealth. The gamble grew 10x but the required premium grew 100x, the squared scaling that makes big concentrated risks so expensive in utility terms.",
      difficulty: "challenge",
      hints: [
        "Here sigma is the gamble size as a fraction of wealth: 0.02 for the first gamble, 0.2 for the second.",
        "First gamble: 0.5 × 2 × (0.02)^2. Careful squaring: (0.02)^2 = 0.0004.",
        "Second gamble: 0.5 × 2 × (0.2)^2 = 0.04. Compare the two answers as a ratio.",
      ],
      strategy: "Work a concrete example",
      guideRef: 3,
    },
  ],
  interactive: "utility-explorer",
  interactiveTitle: "The Utility Curve Explorer",
  interactiveBlurb:
    "Dial in your risk aversion and watch the utility curve reshape what a gamble is worth to you — including your personal certainty equivalent.",
};
