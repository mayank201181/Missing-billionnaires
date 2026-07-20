import type { Topic } from "../types";

export const lifetimeSpending: Topic = {
  id: "lifetime-spending",
  title: "Spending It: Lifetime Consumption Rules",
  icon: "🏖️",
  part: "Part IV — Spending & Real Life",
  order: 9,
  tagline:
    "There is no 'safe withdrawal rate' — only a spending rule you recompute as life unfolds",
  intro:
    "Spending is the other blade of the scissors. The missing billionaires didn't just size their investments badly — they spent their fortunes at rates that felt modest and were anything but. This topic examines the two naive spending rules almost everyone reaches for: constant real dollars (the famous '4% rule'), which smooths consumption but can ruin you or leave you dying on a mountain of unspent wealth, and constant fraction of wealth, which can never hit zero but makes your lifestyle lurch with every bear market. The book's answer is an **amortization rule**: each year, re-run a mortgage-style calculation on your own wealth and remaining horizon. Sustainable spending isn't a magic number — it's a function of wealth, horizon, expected returns, and your risk aversion, recomputed as life unfolds.",
  guide: [
    {
      heading: "The other blade of the scissors",
      discovery: {
        problem:
          "Many 1900-era families spent what looked like a cautious 3% of their fortune per year while their portfolios were expected to earn 6.5% real. Yet plenty still went broke. Before reading on: how can a spending rate below the expected return possibly ruin anyone?",
        idea:
          "Because '3%' was 3% of *initial* (or peak) wealth, fixed in dollars — not 3% of whatever wealth remained. After a crash, an estate split, or a stretch of bad returns, the same dollar spending became 6%, then 10%, then 20% of a shrunken pile. A spending rule that ignores current wealth carries real ruin risk even when the arithmetic looks safe at the start.",
      },
      body:
        "The book's title puzzle has two culprits, and mis-investing is only one of them. **Overspending destroyed the 1900 fortunes as surely as bad sizing did.** The families' error was rarely extravagance in any obvious sense; it was spending an amount anchored to what they *had been* worth rather than what they *were* worth.\n\nThis matters because spending is the one financial decision nobody can avoid. You can decline to pick stocks, but you cannot decline to consume. Every household is running some spending rule, usually an implicit one — and implicit rules are almost always one of two naive types: spend a fixed real amount, or spend a fixed slice of whatever is there.\n\nThe framework is the same expected-utility machinery used for sizing: choose the consumption path that maximizes **expected lifetime utility of consumption**. Diminishing marginal utility now bites in two directions at once — across *states* (a dollar matters more when you're poor) and across *time* (a lavish decade followed by a threadbare one is worse than steady comfort). The ideal rule must trade off spending more now against the risk of forced cuts later.",
      strategies: ["Think in populations, not anecdotes"],
      keyPoints: [
        "The missing billionaires overspent as surely as they mis-invested — spending is the other blade of the scissors",
        "Everyone runs a spending rule, usually implicitly; the question is whether it responds to current wealth",
        "The goal is maximizing expected *lifetime* utility of consumption, trading spending now against forced cuts later",
      ],
    },
    {
      heading: "Constant real dollars: the 4% rule and sequence risk",
      discovery: {
        problem:
          "Two retirees each start with $1M and spend $40,000 per year, inflation-adjusted, no matter what — the classic 4% rule. Over 30 years their portfolios earn the *same average* real return, but one suffers the bad years early and the good years late; the other gets the reverse order. Same rule, same average return. Do they end up in the same place?",
        idea:
          "Not remotely. The retiree who hits bad markets early is forced to sell a large fraction of a shrunken portfolio every year to fund the fixed withdrawal, so there is too little left to enjoy the recovery — they can be ruined. The one with good years first coasts and often dies with far more than they started with. When you withdraw fixed dollars, the *order* of returns matters, not just the average. This is **sequence-of-returns risk**.",
      },
      body:
        "The constant-real-dollar rule — spend 4% of *initial* wealth, adjust it for inflation, and never look at your portfolio again — has one genuine virtue: **perfectly smooth consumption**, which concave utility loves.\n\nIts vice is that it ignores what markets actually do, and that produces two opposite failure modes:\n\n- **Ruin risk.** If early returns disappoint, fixed withdrawals become an ever-larger fraction of remaining wealth, and the portfolio can hit zero while you are very much alive.\n- **Dying rich.** If early returns are good, the same rule leaves you spending a trivial share of a swelling fortune, and you exit with a huge unspent pile — decades of forgone consumption, which is also a utility failure, just a quieter one.\n\nHistorically calibrated 'success rates' for the 4% rule are really statements about which of these two failures dominated in the sample. Neither outcome is what a rational planner wants: the rule cannot tell good luck from bad because it never checks.",
      whyItWorks:
        "Fixed-dollar withdrawals interact with volatility mechanically: after a 30% drop, funding the same dollars requires selling roughly 43% more shares at depressed prices, permanently shrinking the base that any recovery can act on. Withdrawals convert temporary paper losses into permanent realized ones — which is why the order of returns, not just their average, determines survival.",
      strategies: ["Consider extremes", "Interrogate the failure modes"],
      keyPoints: [
        "Constant real dollars gives smooth consumption but ignores portfolio results entirely",
        "Bad early returns → fixed withdrawals become a huge share of shrunken wealth → genuine ruin risk",
        "Good early returns → the same rule often ends in a large unspent pile: dying rich is also a failure",
      ],
    },
    {
      heading: "Constant fraction: never broke, never comfortable",
      body:
        "The opposite naive rule spends a **constant fraction of current wealth** — say 4% of whatever the portfolio is worth each January.\n\nIts virtues are exactly the constant-dollar rule's vices. It adapts automatically: after losses you spend less, after gains you spend more, so withdrawals never grow out of proportion to the portfolio. And it can *never* drive wealth to zero — you are always taking a slice of what remains, never more than what remains.\n\nBut it fails on the other axis: **consumption inherits the full volatility of the portfolio**. A 40% bear market means a 40% pay cut, delivered exactly when the news is already grim. Because the utility of consumption is concave, this volatility is genuinely costly: the pain of cutting from $100,000 to $60,000 far exceeds the pleasure of a symmetric raise. Households experience this as downsizing homes, cancelling plans, and restructuring lives around market noise.\n\nSo the two naive rules bracket the problem. One smooths consumption and risks ruin; the other eliminates ruin and shreds smoothness. The rule worth having must live between them — adapting to wealth like the constant-fraction rule, while damping the swings that concave utility punishes.",
      whyItWorks:
        "Never hitting zero is just arithmetic: each year wealth is multiplied by (1 − f) and then by the portfolio return. A positive number multiplied by positive factors stays positive forever — the rule can impoverish you gradually, but it cannot produce the cliff-edge ruin that fixed-dollar withdrawals can.",
      strategies: ["Consider extremes"],
      keyPoints: [
        "Spending a fixed fraction of current wealth can never hit zero and self-corrects after losses",
        "But consumption then swings with every bear market — and concave utility makes cuts hurt more than raises help",
        "The two naive rules bracket the ideal: one smooths but risks ruin, the other avoids ruin but destroys smoothness",
      ],
    },
    {
      heading: "The amortization rule: re-mortgage your own wealth every year",
      discovery: {
        problem:
          "Forget rules of thumb. You have $1M, a 30-year horizon, and you expect 3% real returns. If you wanted level real spending that *exactly exhausts* the money over 30 years, how much should you spend this year? (Hint: a bank answering the mirror-image question — what payment retires a $1M, 30-year, 3% mortgage — would not guess.)",
        idea:
          "Use annuity math. The annuity factor is AF = (1 − (1+r)^(−n)) / r. For n = 30 and r = 3%: 1.03^30 ≈ 2.43, so AF ≈ (1 − 1/2.43) / 0.03 ≈ 19.6. Spend $1M / 19.6 ≈ $51,000 — about **5.1% of current wealth**, comfortably above the folkloric 4%. At a 0% expected real return the formula collapses to AF = n: just spend W/n.",
      },
      body:
        "The book's practical answer is an **amortization rule, recalculated annually**. Each year, take your *current* wealth W, your *remaining* horizon n, and your portfolio's expected real return r, and spend roughly `W / AF`, where `AF = (1 − (1+r)^(−n)) / r`. It is exactly the calculation behind a mortgage payment, pointed at your own balance sheet — and crucially, you re-run it every year with fresh numbers.\n\nThe annual recalculation is what makes it work:\n\n- **No ruin.** Spending is always a fraction of current wealth, so like the constant-fraction rule it can never hit zero.\n- **Deliberate decumulation.** Unlike a perpetual-endowment mindset, it spends principal on purpose — the plan is to *use* the money over your life, not to enshrine it.\n- **A rising rate as the horizon shortens.** With fewer years left, AF falls, so the spending fraction climbs. An 85-year-old should spend a larger share of wealth than a 55-year-old, and the formula says exactly how much.\n\nSensitivities run the intuitive way: a higher expected return or a shorter horizon raises the sustainable rate; a lower return or longer horizon lowers it.",
      whyItWorks:
        "W/AF is precisely the level real payment whose present value, discounted at r over n years, equals W — so if returns come in exactly as expected, the plan exhausts wealth on schedule. When returns surprise, next year's recalculation absorbs the shock: wealth, horizon, and expectations all feed back in, so the rule is self-correcting rather than self-destructing.",
      strategies: ["Reduce it to a solved problem (mortgage math)", "Recompute, don't set-and-forget"],
      keyPoints: [
        "Each year spend about W / AF, where AF = (1 − (1+r)^(−n)) / r for n remaining years at expected real return r",
        "30 years at 3% real → AF ≈ 19.6 → spend ≈ 5.1% of current wealth; at 0% real, AF = n, so spend W/n",
        "Annual recalculation adapts to markets (no ruin), spends principal deliberately, and raises the rate as the horizon shortens",
      ],
    },
    {
      heading: "Risk aversion, smoothing, and the end of the 'safe' rate",
      body:
        "Two refinements complete the picture.\n\nFirst, **risk aversion enters the spending problem twice**. A more risk-averse investor holds a safer portfolio — that's the sizing chapters — but she also *spends more cautiously from any given portfolio*, holding a precautionary buffer against the twin hazards of a long life and bad markets. Someone with low risk aversion may spend near the full amortization amount; someone highly risk-averse should shade below it. Your gamma shapes both blades of the scissors.\n\nSecond, because consumption volatility is costly in utility terms, **partial smoothing is sensible**. The raw amortization output still jumps when markets do. The fix is not to ignore markets (that's the 4% rule's sin) but to phase changes in: spend a blend — say, part this year's computed amount, part last year's actual spending — so lifestyle adjusts over two or three years rather than overnight. You give up a little adaptiveness to buy a lot of smoothness, a trade concave utility approves of.\n\nThe deepest reframe: **there is no single 'safe withdrawal rate.'** Sustainable spending is a *function* — of wealth, horizon, expected returns, and your risk aversion — and its value changes as those inputs change. The task is not to find the magic number once at retirement, but to keep recomputing a sensible one for the rest of your life.",
      whyItWorks:
        "Blending this year's rule output with last year's spending acts like a low-pass filter: permanent shifts in wealth still flow through to consumption within a few years, while transient market wiggles are largely averaged away. Since utility is concave in each year's consumption, trimming variance at a small cost in responsiveness raises expected lifetime utility.",
      keyPoints: [
        "Risk aversion acts twice: a safer portfolio *and* more cautious spending from it (a buffer against long life and bad markets)",
        "Phase in spending changes — blend this year's computed amount with last year's spending — because consumption volatility is costly",
        "There is no universal safe withdrawal rate: sustainable spending depends on wealth, horizon, expected returns, and gamma, and must be recomputed as life unfolds",
      ],
    },
  ],
  quiz: [
    {
      id: "spending-q1",
      question: "What exactly does the classic '4% rule' tell a retiree to do?",
      options: [
        "Spend 4% of the portfolio's current value each year, whatever that is",
        "Spend 4% of initial wealth, adjusted for inflation each year, regardless of market results",
        "Spend the portfolio's dividend yield, capped at 4%",
        "Reduce spending by 4% every year to be safe",
      ],
      answerIndex: 1,
      explanation:
        "The 4% rule fixes spending in *real dollars* at the start: 4% of the initial pot, then the same inflation-adjusted amount forever. Its defining feature — and its flaw — is that it never looks at the portfolio again, so withdrawals are completely disconnected from what markets actually deliver.",
      difficulty: "warmup",
      strategy: "Define the rule precisely",
      guideRef: 1,
    },
    {
      id: "spending-q2",
      question:
        "Which spending rule is mathematically incapable of driving wealth all the way to zero?",
      options: [
        "Constant real dollars (the 4% rule)",
        "Spending the historical average return each year",
        "A constant fraction of current wealth",
        "Any rule, as long as the rate is below the expected return",
      ],
      answerIndex: 2,
      explanation:
        "Spending a fixed fraction f of *current* wealth multiplies the pot by (1 − f) each year, and a positive number times positive factors stays positive — you can get poorer, but never hit zero. Fixed-dollar rules, by contrast, can demand more than the portfolio has left; note that even a rate below the expected return can ruin you if it's fixed in dollars and early returns disappoint.",
      difficulty: "warmup",
      strategy: "Consider extremes",
      guideRef: 2,
    },
    {
      id: "spending-q3",
      question:
        "Two retirees follow the 4% rule with identical average real returns over 30 years, but one gets the bad years first and the other gets them last. Why can their outcomes differ so drastically?",
      options: [
        "Inflation adjustments compound differently depending on the order of returns",
        "Fixed-dollar withdrawals during early losses force selling a large share of a shrunken portfolio, crippling the recovery base",
        "Average return actually depends on the order in which returns arrive",
        "The rule requires cutting spending after losses, which the early-loss retiree does more often",
      ],
      answerIndex: 1,
      explanation:
        "This is sequence-of-returns risk. Without withdrawals, order wouldn't matter — multiplication commutes. But fixed withdrawals during early losses liquidate a large fraction of a depressed portfolio, converting paper losses into permanent ones, so too little capital remains to enjoy the good years. The late-loss retiree compounds first and only shrinks at the end.",
      difficulty: "core",
      hints: [
        "If nobody withdrew anything, would the order of returns matter? Multiplication is commutative.",
        "Now add a fixed $40,000 withdrawal. After a 30% crash, what fraction of the portfolio does that withdrawal represent?",
        "Selling a big slice at depressed prices permanently shrinks the base the recovery acts on — that's the asymmetry.",
      ],
      strategy: "Interrogate the failure modes",
      guideRef: 1,
    },
    {
      id: "spending-q4",
      question:
        "The constant-fraction rule never risks ruin, yet the book still counts its consumption swings as a serious cost. What is the underlying reason?",
      options: [
        "Volatile spending triggers higher taxes in most jurisdictions",
        "Utility of consumption is concave, so a spending cut hurts more than an equal raise helps",
        "Swinging consumption forces the investor into a riskier portfolio",
        "Frequent budget changes incur large transaction costs",
      ],
      answerIndex: 1,
      explanation:
        "Diminishing marginal utility applies across time as well as across states of the world: dropping from $100k to $60k of consumption costs far more utility than rising from $100k to $140k gains. So a rule whose spending inherits the portfolio's full volatility sacrifices real welfare even though wealth never hits zero — smoothing is genuinely valuable, not just cosmetically pleasant.",
      difficulty: "core",
      hints: [
        "Think about the shape of the utility-of-consumption curve. Is it a straight line?",
        "Compare the utility lost cutting $100k → $60k with the utility gained raising $100k → $140k.",
        "Concavity means losses in consumption loom larger than equal gains — so volatility itself is costly.",
      ],
      strategy: "Reason from the shape of the curve",
      guideRef: 2,
    },
    {
      id: "spending-q5",
      question:
        "Under the amortization rule with a 0% expected real return, what should someone with a 25-year remaining horizon spend this year — and what does that reveal about the famous 4% figure?",
      options: [
        "2% of wealth; the 4% rule is always too aggressive",
        "4% of wealth (W/25); the '4% rule' is the amortization answer only for one special case",
        "5% of wealth, since AF ≈ 19.6 regardless of the return",
        "Nothing can be spent safely when the expected real return is zero",
      ],
      answerIndex: 1,
      explanation:
        "At r = 0% the annuity factor collapses to AF = n, so a 25-year horizon means spending W/25 = 4% of current wealth. The folkloric 4% is thus just one point on a whole surface: with 30 years at 3% real, the same formula gives about 5.1%. There is no universal number — the rate is a function of horizon and expected return.",
      difficulty: "core",
      hints: [
        "Plug r = 0 into AF = (1 − (1+r)^(−n))/r conceptually: with no return, level spending over n years is just an even split.",
        "So AF = n. With n = 25, what fraction of wealth is one year's spending?",
        "W/25 = 4% — the celebrated number is simply the zero-return, 25-year special case.",
      ],
      strategy: "Try the simplest case first",
      guideRef: 3,
    },
    {
      id: "spending-q6",
      question:
        "The book says risk aversion enters retirement planning *twice*. What are the two entries?",
      options: [
        "It lowers both the stock allocation and the expected return you assume",
        "It shortens the planning horizon and raises the spending rate",
        "A more risk-averse investor holds a safer portfolio and also spends more cautiously from it",
        "It raises insurance purchases and lowers bequests",
      ],
      answerIndex: 2,
      explanation:
        "Gamma shapes both blades of the scissors. On the investing side it dictates a smaller risky share (the Merton logic). On the spending side, the same aversion to bad outcomes argues for shading spending below the raw amortization amount, keeping a precautionary buffer against the joint hazard of a long life and poor markets. Two separate dials, one underlying preference.",
      difficulty: "core",
      hints: [
        "One entry is the familiar sizing decision from earlier chapters. What's the other financial choice this topic is about?",
        "Ask what a nervous investor does beyond holding fewer stocks: how would they treat the amortization rule's suggested spending?",
        "They'd spend below it — a precautionary buffer against living long through bad markets. That's the second entry.",
      ],
      strategy: "Separate the decision variables",
      guideRef: 4,
    },
    {
      id: "spending-q7",
      question:
        "A retiree starts the year with $1M, withdraws $45,000 (a 4.5% initial rate), and the remaining portfolio then loses 20% in real terms. To keep the same real spending next year, roughly what fraction of the portfolio must she withdraw?",
      options: ["About 4.5%", "About 5.0%", "About 5.9%", "About 7.2%"],
      answerIndex: 2,
      explanation:
        "After the withdrawal, $955,000 remains; a 20% loss leaves $955,000 × 0.8 = $764,000. The unchanged $45,000 withdrawal is now 45,000/764,000 ≈ 5.9% of wealth. This is the ratchet at the heart of sequence risk: a fixed-dollar rule silently converts one bad year into a permanently higher effective withdrawal rate, compounding the danger.",
      difficulty: "challenge",
      hints: [
        "Work out end-of-year wealth first: subtract the withdrawal, then apply the −20% return.",
        "($1,000,000 − $45,000) × 0.8 = ? ",
        "$764,000. Now divide the unchanged $45,000 by that.",
      ],
      strategy: "Track the state variables step by step",
      guideRef: 1,
    },
    {
      id: "spending-q8",
      question:
        "Using AF = (1 − (1+r)^(−n))/r with a 20-year horizon and a 3% expected real return (1.03^20 ≈ 1.81), roughly what fraction of current wealth does the amortization rule say to spend — and how does that compare with the 0%-return case?",
      options: [
        "About 4.2%, below the 0%-return rate of 5%",
        "About 5.0%, identical to the 0%-return rate",
        "About 6.7%, versus 5.0% at a 0% real return",
        "About 8.3%, versus 6.7% at a 0% real return",
      ],
      answerIndex: 2,
      explanation:
        "AF = (1 − 1/1.81)/0.03 ≈ (1 − 0.553)/0.03 ≈ 0.447/0.03 ≈ 14.9, so spending is 1/14.9 ≈ 6.7% of wealth. At 0% real the factor is just n = 20, giving 5.0%. The comparison shows the general sensitivity: higher expected returns (and shorter horizons) raise the sustainable spending rate — expected growth funds consumption the principal alone could not.",
      difficulty: "challenge",
      hints: [
        "First compute (1+r)^(−n): with 1.03^20 ≈ 1.81, its reciprocal is about 0.553.",
        "AF ≈ (1 − 0.553)/0.03 ≈ 14.9. The spending rate is 1/AF.",
        "1/14.9 ≈ 6.7%. For the comparison case, remember AF = n when r = 0, so W/20 = 5%.",
      ],
      strategy: "Reduce it to a solved problem (mortgage math)",
      guideRef: 3,
    },
  ],
  interactive: "spending-rule",
  interactiveTitle: "The Retirement Spending Lab",
  interactiveBlurb:
    "Stress-test spending rules against random markets: constant-dollar vs constant-fraction vs an adaptive amortization rule — who runs out, who dies rich, who eats well?",
};
