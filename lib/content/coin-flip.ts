import type { Topic } from "../types";

export const coinFlip: Topic = {
  id: "coin-flip",
  title: "The $25 Biased-Coin Experiment",
  icon: "🪙",
  part: "Part I — Lessons from the Coin Flip",
  order: 2,
  tagline: "Smart people, a known 60% edge, real money — and most of them blew it",
  intro:
    "How badly can smart people play a game they fully understand? In 2016, Victor Haghani and Rich Dewey handed 61 finance students and young finance professionals $25 each of real money and let them bet for about half an hour on a virtual coin they were *told* lands heads 60% of the time. The result was carnage: about a third finished with less than they started with, 28% lost everything, and only 21% reached the $250 cap — a cap that careful play reaches roughly 95% of the time. This topic unpacks the experiment and the piece of mathematics the players were missing: expected log growth, which says the right bet is a constant 20% of your current bankroll — and that betting much more than twice that turns a wonderful game into a losing one.",
  guide: [
    {
      heading: "A $25 stake and a 60/40 coin",
      discovery: {
        problem:
          "You are handed $25 of real money and 30 minutes to bet, in any amounts, on a coin you are *told* lands heads 60% of the time, at even odds. Winnings are capped at $250. Before reading on, write down an actual plan: how much do you bet on the first flip? What do you do after two losses in a row? Do you ever bet tails?",
        idea:
          "If you found yourself improvising — 'I'd feel it out' — you have discovered the point of the experiment. Almost nobody arrives with a sizing rule, and without one, even a known 20% edge gets destroyed. In the real experiment, 28% of financially literate players lost *everything* on a coin they knew favoured them.",
      },
      body:
        "In 2016, Victor Haghani and Rich Dewey sat 61 people — college students in finance and economics, plus young professionals from finance firms — in front of a simple betting website. Each received $25 of real money and about 30 minutes to bet, in any amounts, on a virtual coin flip that they were told pays even money and lands heads **60% of the time**. Winnings were capped at $250, and participants knew a cap existed.\n\nThis is close to the best gamble anyone will ever offer you: a known 20% edge, at even odds, repeatable well over a hundred times in the session, with real money on the table.\n\nThe results were startling:\n\n- About **one-third** finished with less than their starting $25\n- **28% went bust entirely**, losing every dollar\n- Only **21%** reached the $250 cap\n\nSensible play makes reaching the cap about a 95% proposition. A room full of exactly the people you would expect to ace this game collectively left most of the free money on the table — not because they lacked information, but because they had no idea *how much* to bet.",
      keyPoints: [
        "61 finance-literate players, $25 real money, ~30 minutes, a coin known to land heads 60% of the time, winnings capped at $250",
        "Results: about a third lost money, 28% went completely bust, only 21% hit the cap",
        "Steady 10-20% fractional betting reaches the cap about 95% of the time — the shortfall was pure sizing error",
      ],
    },
    {
      heading: "A catalogue of sizing pathologies",
      body:
        "The betting logs read like a field guide to everything that can go wrong when instinct replaces a framework.\n\n- **Betting on tails.** Two-thirds of participants bet on tails at some point. A tails bet at even odds wins 40% of the time: it loses an expected 20 cents per dollar wagered. Nothing that happened on previous flips changes this — the coin has no memory. Betting tails even once is a pure, unforced error.\n- **Doubling down after losses.** Many players ramped up their bets to 'win back' what they had lost — martingale-style escalation that converts a small drawdown into a serious risk of ruin.\n- **All-in bets.** Some staked their entire bankroll on a single flip: a 40% chance of instant, irreversible bust, accepted voluntarily in a game they were winning on average.\n- **Erratic sizing.** Bets jumped around with mood and momentum rather than following any consistent rule.\n\nThe crucial observation is that every one of these mistakes is a *how much* (or *which side*) error. Nobody lacked the facts; the odds were printed on the screen. What was missing was any process for converting a known edge into a bet size — and under pressure, with real money moving, feelings filled the vacuum. Judge these players by their process, not their luck: even the busts who 'almost came back' were playing a losing strategy.",
      strategies: ["Separate process from outcome"],
      keyPoints: [
        "Two-thirds bet on tails at some point — a bet with negative expected value every single time",
        "Doubling down after losses and all-in bets converted a favourable game into a serious chance of ruin",
        "All the errors were sizing/side errors made with full information — instinct is not a sizing framework",
      ],
    },
    {
      heading: "Bet fractions, not dollars",
      body:
        "The first structural insight is to stop thinking in dollars and start thinking in **fractions of your current bankroll**.\n\nCompare two rules. Rule A: bet a fixed $10 every flip. Rule B: bet 20% of whatever you currently have. Rule A can go bust — a bad enough run of losses grinds $25 down to zero, and once you are at zero the 60% edge can never help you again. Rule B *cannot* go fully bust: every loss multiplies your bankroll by 0.8, and no number of multiplications by 0.8 ever reaches zero. You get smaller, but you always have a stake left to compound with when the wins come.\n\nProportional betting has a second virtue: it automatically **compounds the edge**. After wins your bets grow with your bankroll, so success snowballs; after losses your bets shrink, so drawdowns are self-limiting. The bettor who wagers a constant fraction is playing the same game at every wealth level — which is exactly the property you want when the same favourable bet will be offered again and again.\n\nThis single change of units — from dollars to fractions — already rules out the two most catastrophic behaviours in the experiment: the all-in bet (a 100% fraction) and the loss-chasing escalation (a fraction that *rises* as wealth falls).",
      whyItWorks:
        "With fractional betting, wealth evolves multiplicatively: after each flip your bankroll is multiplied by (1+f) or (1−f). Since f < 1 keeps both factors strictly positive, the product of any sequence of them is strictly positive — ruin is mathematically impossible. And because next flip's bet scales with this flip's outcome, gains earn on gains: the edge compounds geometrically instead of accumulating additively.",
      strategies: ["Consider extremes", "Try small cases"],
      keyPoints: [
        "A constant-fraction bettor multiplies wealth by (1+f) or (1−f) each flip and can never hit zero",
        "Proportional bets compound the edge: bets grow after wins, shrink after losses",
        "Fixed-dollar betting and loss-chasing both allow ruin — after which the edge is worthless",
      ],
    },
    {
      heading: "Finding the magic number: 20%",
      discovery: {
        problem:
          "Suppose you bet a fraction f of your bankroll every flip, and you get one win followed by one loss. Your wealth is multiplied by (1+f)(1−f) = 1 − f². Try f = 0.1, f = 0.5, and f = 0.9. What happens to a win-loss pair as f grows — and what does that suggest about betting big even with the odds in your favour?",
        idea:
          "A win and a loss never cancel: the pair multiplies wealth by 1 − f², which is *always* below 1 and collapses as f grows (0.99 at f = 0.1, but 0.75 at f = 0.5 and 0.19 at f = 0.9). Volatility itself taxes compound growth, and the tax grows with the square of bet size. The best fraction must balance harvesting the edge against this volatility drag — that balance point is 20%.",
      },
      body:
        "Because fractional betting is multiplicative, the natural yardstick is the expected growth rate of the *logarithm* of wealth:\n\n`g(f) = 0.6*ln(1+f) + 0.4*ln(1-f)`\n\nThe shape of this curve is the heart of the whole topic:\n\n- For small f, g(f) is **positive** — any modest bet grows wealth\n- g(f) is **maximized at f = 0.20**, the Kelly fraction, worth about 2% expected growth per flip\n- g(f) falls back to roughly **zero near f ≈ 0.40**\n- Beyond ~40%, g(f) is **negative**: your *expected wealth* still rises every flip, but your typical outcome shrinks toward zero\n\nThe optimum has a beautifully simple closed form for even-money bets: bet the edge. **f* = 2p − 1 = 2(0.6) − 1 = 20%** of current bankroll, every flip, regardless of what just happened.\n\nThe most counterintuitive line of that summary deserves emphasis: with a 60% coin in your favour, betting more than about 40% of your bankroll each flip is a *losing* strategy over time. The all-in players were not merely aggressive; they were on the wrong side of zero. 'How much' is not a matter of taste — it is a computable quantity, and getting it wrong by enough flips the sign of the game.",
      whyItWorks:
        "To maximize g(f) = 0.6*ln(1+f) + 0.4*ln(1-f), set its derivative to zero: 0.6/(1+f) − 0.4/(1−f) = 0. Cross-multiplying gives 0.6(1−f) = 0.4(1+f), so 0.6 − 0.6f = 0.4 + 0.4f, hence 0.2 = f. In general, for an even-money bet won with probability p, f* = p − (1−p) = 2p − 1: bet your edge. Sanity-check with the win-loss pair: at f = 0.2 a win-loss pair multiplies wealth by 1 − 0.04 = 0.96, a small drag easily overcome by the surplus of wins; at f = 0.5 the pair costs 25%, which the edge can no longer outrun.",
      strategies: ["Try small cases", "Consider extremes"],
      keyPoints: [
        "Expected log growth g(f) = 0.6*ln(1+f) + 0.4*ln(1-f) is the right objective for repeated fractional bets",
        "It peaks at the Kelly fraction f* = 2p − 1 = 20%, worth about 2% expected growth per flip",
        "g is roughly zero at f ≈ 0.40 and negative beyond — oversizing flips a winning game into a losing one",
      ],
    },
    {
      heading: "A miniature of lifetime investing",
      body:
        "The coin game is not a parlour trick; it is a scale model of a lifetime of investing, with the noise turned up so the lessons arrive in 30 minutes instead of 30 years.\n\nThe mapping is direct. The 60/40 coin is the stock market's **equity risk premium**: a real, persistent, but modest edge that you get to harvest repeatedly. Your $25 is your savings. The session's hundred-plus flips are your investing decades. And the failure mode is identical: for an investor holding a genuinely favourable asset, the danger is rarely that the edge is imaginary — it is **oversizing**, which converts a positive-edge proposition into likely ruin, exactly as g(f) < 0 beyond 40% did for the all-in bettors.\n\nThe experiment's lessons, restated for investors:\n\n- Even smart, motivated people with a *known* edge size their bets terribly without a framework\n- 'How much' is a computable question, not a temperamental one\n- Constant-fraction exposure can never bust you and lets the edge compound\n- Betting against the edge (tails) is always an error — the market-timer's version is abandoning a good strategy after a drawdown\n\nOne caveat carries forward: Kelly assumes you care only about long-run growth. Most humans feel losses more keenly than that, which is why the book will later argue for betting *less* than Kelly. But the coin flip already delivers the core message — sizing, not selection, is where fortunes are made and lost.",
      keyPoints: [
        "The 60/40 coin models the equity premium: a known-ish, repeatable, modest edge",
        "The real danger for investors is oversizing a good bet, not the edge failing to exist",
        "Kelly is the growth-maximizing ceiling; later chapters argue most people should bet less than Kelly",
      ],
    },
  ],
  quiz: [
    {
      id: "coinflip-q1",
      question:
        "Participants in the 2016 Haghani-Dewey experiment were given $25 of real money to bet on a virtual coin. What crucial fact were they told up front?",
      options: [
        "The coin was fair, but winning bets paid 2-to-1",
        "The coin lands heads 60% of the time, at even-money payoffs",
        "The coin was biased, but the direction of the bias had to be discovered by betting",
        "They could lose at most $10 of the $25",
      ],
      answerIndex: 1,
      explanation:
        "The edge was handed to the players on a plate: they were told the coin lands heads 60% of the time and bets paid even money. That is what makes the results so damning — every mistake was made with full information, so the failures were failures of sizing, not of knowledge.",
      difficulty: "warmup",
      guideRef: 0,
    },
    {
      id: "coinflip-q2",
      question:
        "Roughly what fraction of the 61 participants went completely bust — losing the entire $25 despite the known 60% edge?",
      options: ["About 3%", "About 10%", "About 28%", "About 50%"],
      answerIndex: 2,
      explanation:
        "28% lost everything, and about a third finished below their starting $25. Since a constant-fraction bettor can never go bust at all, every single bust required betting all (or nearly all) of the bankroll at some point — a choice, not bad luck.",
      difficulty: "warmup",
      guideRef: 0,
    },
    {
      id: "coinflip-q3",
      question:
        "For an even-money bet that wins with probability p = 0.6, the growth-optimal (Kelly) prescription is f* = 2p − 1. What exactly should you bet on each flip?",
      options: [
        "10% of your current bankroll",
        "60% of your current bankroll",
        "A fixed $5 every flip — 20% of the original $25",
        "20% of your current bankroll, whatever it is at that moment",
      ],
      answerIndex: 3,
      explanation:
        "f* = 2(0.6) − 1 = 0.20, applied to your *current* bankroll each flip: bets grow after wins and shrink after losses. The fixed-$5 option is the tempting trap — it starts out identical but does not adapt, so it can be ground down to zero by a losing streak and fails to compound after a winning one.",
      difficulty: "core",
      hints: [
        "Plug p = 0.6 into f* = 2p − 1 first.",
        "You get 0.20 — but 20% of what? Re-read the options: one is a dollar amount, one is a proportion.",
        "Kelly is a *fraction of current wealth* rule. What does that imply after your bankroll has doubled to $50?",
      ],
      strategy: "Work backwards",
      guideRef: 3,
    },
    {
      id: "coinflip-q4",
      question:
        "Two-thirds of participants bet on tails at least once, often after a run of heads. Under the book's framework, a tails bet is:",
      options: [
        "A reasonable hedge against a long run of tails",
        "Correct occasionally, since tails becomes 'due' after several heads",
        "Always a pure error: an even-money bet that wins only 40% of the time loses 20 cents per dollar in expectation, regardless of what came before",
        "Harmless, as long as the amount wagered is small",
      ],
      answerIndex: 2,
      explanation:
        "Flips are independent, so no history makes tails more likely — 'due' is the gambler's fallacy. A tails bet has expected value 0.4 − 0.6 = −0.2 per dollar every single time it is made. The 'harmless if small' option fails too: a small negative-EV bet is a small error, but it is still an error with no offsetting benefit.",
      difficulty: "core",
      hints: [
        "Does the coin remember previous flips? What is P(tails) on the next flip after five heads in a row?",
        "Compute the expected value of $1 on tails: win $1 with probability 0.4, lose $1 with probability 0.6.",
      ],
      strategy: "Separate process from outcome",
      guideRef: 1,
    },
    {
      id: "coinflip-q5",
      question:
        "Why can a bettor who always wagers a constant 20% of current bankroll never go completely bust?",
      options: [
        "Each loss multiplies wealth by 0.8, and repeated multiplication by 0.8 shrinks wealth but never reaches zero",
        "Because at a 60% win rate, wins must outnumber losses in the long run",
        "Because the $250 cap also acted as a floor on losses",
        "Because 20% of $25 is too small an amount to lose meaningfully",
      ],
      answerIndex: 0,
      explanation:
        "Fractional betting makes wealth evolve multiplicatively: every loss leaves 80% of whatever you had, and 0.8 × 0.8 × ... is always positive. The 'wins outnumber losses' option fails because a fixed-dollar or all-in bettor can be ruined *before* the long run arrives — and once at zero, the edge can never rescue you.",
      difficulty: "core",
      hints: [
        "After one loss you have 0.8 of your bankroll. After two losses in a row?",
        "Consider the extreme: a hundred losses in a row. What is 0.8^100 — small, or zero?",
        "Contrast with betting a fixed $10 per flip from $25: how many straight losses until ruin there?",
      ],
      strategy: "Consider extremes",
      guideRef: 2,
    },
    {
      id: "coinflip-q6",
      question:
        "You decide to bet 50% of your bankroll on heads every flip. Which best describes your prospects on the 60/40 coin?",
      options: [
        "Both expected wealth and typical wealth grow — bigger bets harvest a bigger edge",
        "Expected wealth rises every flip, yet expected log growth g(0.5) is negative, so your typical (median) outcome shrinks toward zero",
        "Expected wealth shrinks, because any bet above the Kelly fraction has negative expected value",
        "Prospects are identical to betting 20% — with a positive edge, every fraction compounds the same way",
      ],
      answerIndex: 1,
      explanation:
        "g(0.5) = 0.6*ln(1.5) + 0.4*ln(0.5) ≈ 0.243 − 0.277 ≈ −0.03 < 0: the typical path decays about 3% per flip, even though the *average* across all paths grows 10% per flip (that average is propped up by a few astronomically lucky sequences). The third option confuses the two concepts — expected value per bet stays positive above Kelly; it is expected *growth* that turns negative.",
      difficulty: "core",
      hints: [
        "Try the small case: one win then one loss at f = 0.5. Your wealth is multiplied by 1.5 × 0.5 = ?",
        "That pair costs you 25%. Roughly how many surplus wins does a 60% coin give you per win-loss pair to make it back?",
        "Compare with the section's map of g(f): where does f = 0.5 sit relative to the ~0.40 breakeven point?",
      ],
      strategy: "Try small cases",
      guideRef: 3,
    },
    {
      id: "coinflip-q7",
      question:
        "Betting a constant 20% gives expected log growth g(0.2) ≈ 0.02 per flip. A 30-minute session allows roughly 120 flips, and the cap is 10x your stake ($25 → $250). What does this imply about a disciplined 20% bettor?",
      options: [
        "Typical wealth grows by about e^(0.02 × 120) = e^2.4 ≈ 11x, comfortably above the 10x cap — which is why steady fractional bettors reach the cap about 95% of the time",
        "Typical wealth grows by about e^0.24 ≈ 1.3x, so the cap is almost never reached",
        "Growth of 2% per flip for 120 flips is about 240%, i.e. roughly 3.4x — well short of the cap",
        "Nothing can be concluded without knowing the exact sequence of heads and tails",
      ],
      answerIndex: 0,
      explanation:
        "Log growth is additive across flips: 120 flips × 0.02 ≈ 2.4 in log terms, and e^2.4 ≈ 11, beyond the 10x needed. The 3.4x option makes the classic error of adding percentages instead of compounding them — 240 percentage points of *log* growth is an 11-fold multiplication, not a 3.4-fold one. With typical growth exceeding the cap, only unusually unlucky sessions miss it, which matches the ~95% success rate.",
      difficulty: "challenge",
      hints: [
        "The virtue of log growth is that it adds across flips. What is the total log growth over 120 flips?",
        "Total log ≈ 2.4. To turn log growth back into a wealth multiple, exponentiate: you need e^2.4.",
        "e^2 ≈ 7.4 and e^0.4 ≈ 1.5. Multiply, then compare with the 10x cap.",
      ],
      strategy: "Work backwards",
      guideRef: 3,
    },
    {
      id: "coinflip-q8",
      question:
        "An aggressive player bets 40% of bankroll every flip and gets exactly the expected outcome: 6 heads and 4 tails over 10 flips. Starting from $25, roughly where do they end up?",
      options: [
        "About $100 — winning 60% of flips at high stakes quadruples the money",
        "About $250 — they hit the cap",
        "Roughly $25 — about breakeven, despite winning 60% of the flips",
        "Under $3 — effectively wiped out",
      ],
      answerIndex: 2,
      explanation:
        "Order doesn't matter, so pair 4 wins with the 4 losses: each win-loss pair multiplies wealth by 1.4 × 0.6 = 0.84, and 0.84^4 ≈ 0.5 — half the bankroll gone to volatility drag. The 2 surplus wins multiply by 1.4² = 1.96 ≈ 2, cancelling it: 25 × 0.5 × 2 ≈ $24. This is exactly what g(0.4) ≈ 0 means — at double Kelly, the *entire* edge is consumed by drag, so even a perfectly typical run of luck earns nothing.",
      difficulty: "challenge",
      hints: [
        "Each win multiplies wealth by 1.4, each loss by 0.6, and the order of flips doesn't matter to the product.",
        "Pair up 4 of the wins with the 4 losses. What does one win-loss pair do to wealth at f = 0.4?",
        "Each pair multiplies by 0.84, so four pairs give about 0.84^4 ≈ 0.5; then apply the two leftover wins at 1.4 each.",
      ],
      strategy: "Try small cases",
      guideRef: 3,
    },
  ],
  interactive: "coin-flip",
  interactiveTitle: "The Biased-Coin Casino",
  interactiveBlurb:
    "Bet on a 60/40 coin yourself. Pick a betting fraction, simulate hundreds of flips, and discover why 20% is the magic number.",
};
