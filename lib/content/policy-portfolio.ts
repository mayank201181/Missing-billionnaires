import type { Topic } from "../types";

export const policyPortfolio: Topic = {
  id: "policy-portfolio",
  title: "Building the Policy Portfolio",
  icon: "📐",
  part: "The Allocator's Track — Portfolio Construction",
  order: 105,
  track: "wealth",
  tagline:
    "One risky bucket, one safe bucket, one number that is yours — all written down before the storm arrives",
  intro:
    "Most portfolio conversations start in the wrong place: which manager, which theme, which country. This module starts from a classical result that makes most of those conversations irrelevant. Two-fund separation says the risky portfolio is a *design* problem you solve once — build the most diversified, highest-Sharpe mix available — and everything personal about you collapses into a single number: how much of that mix you hold versus genuinely safe assets. Get that split right, write it into an Investment Policy Statement with rebalancing bands and rules for when policy may change, and you have converted investing from a stream of judgment calls made under stress into a policy you merely maintain. The families who kept their fortunes mostly did something like this. The missing ones mostly didn't.",
  guide: [
    {
      heading: "Two-fund separation: everyone holds the same risky portfolio",
      discovery: {
        problem:
          "A cautious 70-year-old and an aggressive 40-year-old both want equity exposure. Intuition says the cautious investor should own 'safer' stocks — utilities, staples, dividend payers — while the aggressive one loads up on tech. Before reading on: is that right? Should risk tolerance change *which* risky assets you own?",
        idea:
          "No. Both should own the *same* risky portfolio — the most diversified, highest reward-per-risk mix available — and differ only in *how much* of it they hold versus safe assets. The cautious investor waters the mix down; the aggressive one takes a bigger dose. Tilting toward 'safe stocks' instead just buys a worse portfolio at full strength.",
      },
      body:
        "Two-fund separation is one of the deepest results in classical finance, and it is a gift to the practical allocator: it splits one messy problem into two clean ones.\n\n- **Problem one — design.** Build the best risky bucket: the most diversified, highest-Sharpe portfolio you can assemble. For most wealthy families that means broad global equities plus genuine diversifiers. This is an engineering problem, largely the same for everyone, and it gets solved *once*.\n- **Problem two — dosage.** Decide what fraction of wealth goes into that bucket versus safe assets. This is where *you* enter the picture — your risk aversion, your circumstances — and it compresses into a single number.\n\nThe separation is liberating. You stop asking 'should a person like me own emerging markets?' The risky bucket either improves for everyone by including them or it doesn't; your personality has nothing to do with it. Your personality shows up in exactly one place: the size of the dose. Conservative investors who instead express caution by holding a less diversified, 'gentler' risky portfolio at full weight are making a category error — they hold a worse engine, not a smaller one.",
      whyItWorks:
        "Blending any risky portfolio with safe assets scales its excess return and its risk down by the *same* factor, so the reward-per-risk ratio (the Sharpe ratio) is unchanged along the whole blend. That means every investor, timid or bold, gets the best available trade-off by starting from the single highest-Sharpe risky mix and diluting or concentrating it to taste. Any other risky portfolio, blended to the same risk level, delivers less expected return — it is dominated at every dose.",
      strategies: ["Separate design from dosage"],
      keyPoints: [
        "Everyone should hold the same best risky portfolio — the most diversified, highest-Sharpe mix available",
        "Risk preferences change how MUCH of it you hold, never WHICH risky assets you hold",
        "Design the risky bucket once; personalize only the dose",
      ],
    },
    {
      heading: "Sizing the dose: the Merton share is the one number that is you",
      body:
        "With the risky bucket designed, dosage is a computation, not a mood. The **Merton share** gives the optimal fraction of wealth in the risky bucket:\n\n`k* = expected excess return / (gamma × variance)`\n\nwhere gamma is your coefficient of risk aversion and variance is volatility squared.\n\nWorked example. Suppose your diversified risky bucket offers an expected **4%** return above safe assets, with volatility **15%** — so variance is 0.15 × 0.15 = **0.0225**.\n\n- Gamma 3 (a common middle setting): k* = 0.04 / (3 × 0.0225) = 0.04 / 0.0675 ≈ **59%** in the risky bucket\n- Gamma 2 (more risk-tolerant): 0.04 / 0.045 ≈ **89%**\n- Gamma 4 (more risk-averse): 0.04 / 0.09 ≈ **44%**\n\nNotice what the formula does and does not care about. It cares about your estimate of the reward on offer, the risk of the vehicle, and your own tolerance. It does not care about headlines, what your friends hold, or what the market did last quarter. Halving your gamma doubles your share; doubling the variance halves it. Everything personal about your portfolio — decades of temperament, circumstance, and obligation — is expressed in one number you choose deliberately, in daylight, rather than implied by a thousand small decisions made under pressure.",
      whyItWorks:
        "For an investor whose satisfaction in extra wealth falls off at rate gamma, expected utility is approximately (expected excess return × k) minus (gamma/2 × variance × k²). The first term grows linearly with the dose; the penalty grows with its square. The peak of that trade-off sits exactly at k* = excess return / (gamma × variance) — beyond it, added risk costs more utility than added return buys.",
      strategies: ["Compute, don't vibe"],
      keyPoints: [
        "k* = expected excess return / (gamma × variance)",
        "With 4% excess return and 15% volatility: gamma 3 → ~59%, gamma 2 → ~89%, gamma 4 → ~44%",
        "The Merton share responds to estimates and to you — never to headlines",
      ],
    },
    {
      heading: "The safe bucket is not cash — it is your spending, defeased",
      discovery: {
        problem:
          "A family parks its 'safe' money in Treasury bills and money-market funds, rolling them forever. Over the next 20 years inflation averages 3.5%. Is that money actually safe? Safe with respect to what, exactly?",
        idea:
          "T-bills are safe over weeks and treacherous over decades: at 3.5% inflation, cash that earns nothing real loses about half its purchasing power in 20 years, and reinvestment rates wobble the whole way. Safety is only defined relative to a horizon and a unit. For a family that spends real dollars over decades, the true safe asset is an inflation-protected bond maturing when the spending happens — not cash.",
      },
      body:
        "The second bucket deserves as much design care as the first, because 'safe' is a slippery word. For a wealthy family, safe should mean: *the money will be there, in purchasing-power terms, when we actually plan to spend it.*\n\nThat definition points away from cash-forever and toward a **ladder of inflation-protected bonds (TIPS) and high-grade bonds matched to several years of planned spending**. If the family plans to draw a certain real amount in each of the next several years, the ladder holds inflation-protected bonds maturing into each of those years. Each rung arrives at face value, in real terms, exactly when needed. No reinvestment gamble, no inflation erosion, no forced selling of the risky bucket into a drawdown.\n\nThis reframing matters psychologically as much as financially. When the risky bucket falls 30%, a family whose next several years of spending sit in a dedicated real ladder can truthfully say: *nothing about our life changes for years, no matter what markets do next.* That sentence is what makes it possible to hold — and rebalance into — the risky bucket at the bottom. The safe bucket's job is not to earn; it is to make the risky bucket's volatility survivable, in both arithmetic and temperament.",
      keyPoints: [
        "Safety is horizon-relative: T-bills are safe for weeks, dangerous for decades of real spending",
        "The family safe asset is a TIPS and high-grade bond ladder matched to several years of planned spending",
        "A funded spending ladder is what lets you hold the risky bucket through a deep drawdown",
      ],
    },
    {
      heading: "Write it down: the Investment Policy Statement",
      discovery: {
        problem:
          "Two families hold identical 60/40 portfolios into a 35% equity crash. Family A sells 'until things are clearer.' Family B buys equities back up to target weight. Months later, Family B also *raises* its target from 60 to 70. One of these three moves is different in kind from the others. Which — and why?",
        idea:
          "Family A is timing: the trade is driven by fear, triggered by nothing measurable. Family B's rebalancing is maintenance of an existing policy. Family B's target raise is a *policy change* — legitimate only because a Merton input changed: the crash raised the earnings yield, lifting expected excess returns, so k* itself moved. Same market, three trades; only the ones traceable to written rules or changed inputs are policy.",
      },
      body:
        "A policy portfolio that lives in your head is not policy; it is intention, and intentions do not survive drawdowns. The **Investment Policy Statement (IPS)** puts three things in writing:\n\n- **Target weights** for the risky and safe buckets (your Merton share, and the composition of each bucket)\n- **Permitted ranges** — rebalancing bands, for example plus or minus 5 percentage points around each target\n- **The rule for when policy itself may change**: when expected-return inputs move materially (say, valuations after a crash meaningfully raise the earnings yield), or when the family's circumstances change (a sale, an inheritance, a new generation). Never because of headlines or forecasts.\n\nThat third clause carries the crucial distinction between **policy and timing**. Raising the equity share because a crash raised the earnings yield is policy — a Merton *input* changed, so the output changed. Cutting equities because you are frightened is timing. The same trade ticket, opposite disciplines.\n\nA practical **direction test** separates them: valuation-driven policy usually has you *buying* after falls and *trimming* after booms, because expected returns rise when prices fall. Emotion-driven timing does the reverse — it sells fear and buys comfort. If your proposed trade points the same way your stomach does, be suspicious.",
      strategies: ["The direction test", "Pre-commitment"],
      keyPoints: [
        "The IPS records target weights, rebalancing bands, and the rule for when policy may change",
        "Policy changes only when Merton inputs or family circumstances change — never on headlines or forecasts",
        "Direction test: policy buys after falls and trims after booms; emotion does the reverse",
      ],
    },
    {
      heading: "Bands, bonuses, and beating your own amygdala",
      body:
        "How do you keep actual weights near policy? **Rebalancing bands beat calendar rebalancing**: act when sizes drift outside their permitted range, not when the calendar says. A December 31 review can miss a March crash entirely, or trigger pointless trades in a flat year. Bands respond to the thing that actually matters — how far your risk exposure has strayed from the dose you chose.\n\nWith volatile, imperfectly correlated assets, rebalancing also adds a modest return bonus. But keep it in proportion: the bonus is a tip, not the wage. Rebalancing's real job is **keeping size at policy** — making sure the risk you carry tomorrow is the risk you chose in daylight, not the risk that price drift handed you.\n\nThe deepest reason for all of this apparatus is behavioural. The IPS exists because *the worst decisions arrive at the worst moments* — the 2am urge to sell everything in a crash, the 2021-style urge to chase what tripled. Simplicity is a feature, not a compromise: a portfolio you fully understand at 3am in a 40% drawdown is worth more than a clever one you don't, because understanding is what stops the panic sale. Pre-commitment — bands, written rules, an annual review date — is how a family beats its own amygdala: the decisions are made *before* the emergency, by the calm version of you, and the frightened version merely executes.",
      whyItWorks:
        "The rebalancing bonus comes from arithmetic, not clairvoyance: with two volatile, imperfectly correlated assets, rebalancing systematically trims whichever has recently outperformed and adds to the laggard — selling relatively high and buying relatively low, over and over. Each round trip harvests a sliver of the volatility. The effect is modest precisely because it needs no forecast; the reliable payoff is that your risk stays the size you chose.",
      strategies: ["Pre-commitment"],
      keyPoints: [
        "Rebalance on bands (when sizes drift), not on the calendar",
        "The rebalancing bonus is modest; the real job is keeping size at policy",
        "Simplicity and written pre-commitment are how the calm you outvotes the frightened you",
      ],
    },
  ],
  quiz: [
    {
      id: "policy-q1",
      question:
        "Under two-fund separation, how should a very risk-averse investor's holdings differ from a risk-tolerant investor's?",
      options: [
        "The risk-averse investor should hold defensive stocks; the risk-tolerant one, aggressive stocks",
        "Both hold the same best risky portfolio; the risk-averse investor simply holds less of it versus safe assets",
        "The risk-averse investor should skip equities entirely in favour of high-grade bonds",
        "The risk-averse investor should hold more asset classes to spread the risk further",
      ],
      answerIndex: 1,
      explanation:
        "Two-fund separation says the risky portfolio is a design problem with one best answer for everyone: the most diversified, highest-Sharpe mix available. Risk preferences enter only through the dose — the fraction of wealth in that portfolio versus safe assets. Expressing caution by holding 'gentler' stocks at full weight buys a worse portfolio, not a safer one.",
      difficulty: "warmup",
      guideRef: 0,
    },
    {
      id: "policy-q2",
      question:
        "According to this module, what is the appropriate 'safe bucket' for a wealthy family with a multi-decade horizon?",
      options: [
        "Cash and money-market funds, rolled indefinitely",
        "Gold, which holds its value in a crisis",
        "A ladder of TIPS and high-grade bonds matched to several years of planned spending",
        "Whatever asset has shown the lowest volatility over the past year",
      ],
      answerIndex: 2,
      explanation:
        "Safety is only defined relative to a horizon and a unit. For a family spending real dollars over decades, cash is safe for weeks but loses purchasing power over years, while a ladder of inflation-protected and high-grade bonds delivers known real amounts exactly when the spending happens. That funded ladder is also what makes it psychologically possible to hold the risky bucket through a drawdown.",
      difficulty: "warmup",
      guideRef: 2,
    },
    {
      id: "policy-q3",
      question:
        "Your diversified risky bucket has an expected excess return of 4% and volatility of 15%. With risk aversion gamma = 3, what is your Merton share — the policy fraction in the risky bucket?",
      options: ["About 44%", "About 59%", "About 74%", "About 89%"],
      answerIndex: 1,
      explanation:
        "k* = excess return / (gamma × variance) = 0.04 / (3 × 0.0225) = 0.04 / 0.0675 ≈ 0.59, so about 59% in the risky bucket and 41% in the spending ladder. Note that 44% and 89% are what gamma 4 and gamma 2 would give — the formula is sensitive to the one number that expresses you.",
      difficulty: "core",
      hints: [
        "The Merton share is k* = expected excess return / (gamma × variance). Variance is volatility squared.",
        "Volatility 15% means variance = 0.15 × 0.15 = 0.0225.",
        "Compute the denominator: 3 × 0.0225 = 0.0675. Now divide 0.04 by it.",
      ],
      strategy: "Compute, don't vibe",
      guideRef: 1,
    },
    {
      id: "policy-q4",
      question:
        "After a sharp crash, a family raises its equity target from 55% to 65%, citing the much higher earnings yield on stocks. Under this module's framework, that move is:",
      options: [
        "Market timing — they are trading in reaction to a market move",
        "Policy — a Merton input (expected excess return) changed materially, so the computed target changed",
        "Reckless — targets should never change once written into the IPS",
        "Only legitimate if a professional forecaster confirms the market has bottomed",
      ],
      answerIndex: 1,
      explanation:
        "The policy-versus-timing line is drawn at the *inputs*, not the trade. A crash that raises the earnings yield raises the expected excess return, which mechanically raises k* — updating the target is running the same formula on new inputs. Timing is trading on fear or forecasts with no changed input. The direction test confirms it: valuation-driven policy buys after falls, exactly as here, while emotion sells them.",
      difficulty: "core",
      hints: [
        "Ask what triggered the trade: a measurable change in a Merton input, or a feeling or forecast?",
        "Which ingredient of k* = excess return / (gamma × variance) does a higher earnings yield move?",
        "Apply the direction test: after a fall, which way does valuation-driven policy trade, and which way does fear trade?",
      ],
      strategy: "The direction test",
      guideRef: 3,
    },
    {
      id: "policy-q5",
      question:
        "You and your sibling agree on the same risky bucket: 4% expected excess return, 15% volatility. Your gamma is 4; your sibling's is 2. How do your policy risky shares compare?",
      options: [
        "Yours ~44%, sibling's ~89% — halving gamma doubles the share",
        "Yours ~59%, sibling's ~74% — the share moves gently with gamma",
        "Yours ~89%, sibling's ~44% — higher gamma means more risk taken",
        "Identical — two-fund separation says all investors hold the same portfolio weights",
      ],
      answerIndex: 0,
      explanation:
        "Gamma sits in the denominator, so the share is inversely proportional to it: k* for gamma 4 is 0.04/(4 × 0.0225) ≈ 44%, and for gamma 2 it is 0.04/(2 × 0.0225) ≈ 89% — exactly double. And note the trap in the last option: two-fund separation says everyone holds the same *risky portfolio composition*, not the same overall weights; the dose is precisely where investors differ.",
      difficulty: "core",
      hints: [
        "Gamma appears in the denominator of k* = excess return / (gamma × variance). What does that imply about proportionality?",
        "If gamma halves and nothing else changes, what happens to k*?",
        "Compute one of the two: for gamma 4 the denominator is 4 × 0.0225 = 0.09. Divide 0.04 by it, then use the proportionality for the other.",
      ],
      strategy: "Compute, don't vibe",
      guideRef: 1,
    },
    {
      id: "policy-q6",
      question:
        "Why does this module recommend rebalancing bands (e.g. ±5 percentage points) over fixed calendar-date rebalancing?",
      options: [
        "Bands generate a much larger return bonus than calendar rebalancing",
        "Bands respond to actual drift in position sizes, keeping the risk you carry at the size you chose",
        "Bands guarantee you buy at market bottoms and sell at tops",
        "Calendar rebalancing is fine for institutions but illegal in family accounts",
      ],
      answerIndex: 1,
      explanation:
        "The purpose of rebalancing is keeping size at policy, and bands act exactly when size drifts materially — a calendar rule can sleep through a crash or trade pointlessly in a flat year. Rebalancing volatile, imperfectly correlated assets does earn a modest bonus, but the bonus is incidental under either scheme; controlling drift is the job, and bands do that job directly.",
      difficulty: "core",
      hints: [
        "Start from rebalancing's real job in this framework: is it earning a bonus, or controlling something?",
        "Consider a 35% crash in March under an every-December rule. How long does your portfolio sit far from policy, and what triggers the fix?",
      ],
      strategy: "Pre-commitment",
      guideRef: 4,
    },
    {
      id: "policy-q7",
      question:
        "Your IPS sets the risky share by Merton with gamma 3 and volatility 15% (variance 0.0225). At the last review, expected excess return was 4% (target ≈ 59%). A crash then lifts your estimate of the excess return to 5.5%, volatility unchanged. What does policy now prescribe?",
      options: [
        "Cut the target to about 44% — crashes mean risk is elevated",
        "Hold the target at 59% — targets change only when gamma changes",
        "Raise the target to about 66% and wait for confirmation before acting",
        "Raise the target to about 81% — which means buying equities into the fall",
      ],
      answerIndex: 3,
      explanation:
        "k* = 0.055 / (3 × 0.0225) = 0.055 / 0.0675 ≈ 0.81, up from 0.59 — the same formula on a materially changed input, which is precisely the IPS's condition for a policy change. The direction is the tell: valuation-driven policy has you buying after the fall, the opposite of what fear prescribes at that exact moment. That discomfort is what the written rule exists to override.",
      difficulty: "challenge",
      hints: [
        "This is a legitimate policy change: an expected-return input moved materially. Re-run k* = excess return / (gamma × variance) with the new numerator.",
        "The denominator hasn't changed: it is still 3 × 0.0225 = 0.0675.",
        "Divide 0.055 by 0.0675, and compare the result to the old 59% to get the trade direction.",
      ],
      strategy: "Compute, don't vibe",
      guideRef: 3,
    },
    {
      id: "policy-q8",
      question:
        "Your IPS: 60% risky / 40% safe, with ±5 percentage point bands. The risky bucket falls 30% while the safe bucket is flat, and you make no trades. What does the IPS now require?",
      options: [
        "Nothing — after both buckets are marked, the risky weight is still inside the 55-65% band",
        "Sell risky assets — the crash proves the bucket was too large to begin with",
        "Buy risky assets — the weight has fallen to roughly 51%, breaching the 55% lower band",
        "Wait until the annual review date, then rebalance whatever the weights are",
      ],
      answerIndex: 2,
      explanation:
        "Per 100 of prior wealth: the risky bucket falls from 60 to 60 × 0.7 = 42 while safe stays 40, so total wealth is 82 and the risky weight is 42/82 ≈ 51.2% — below the 55% lower band, which obliges you to buy the risky bucket back toward 60%. This is the machinery of pre-commitment doing its work: the band converts 'buy in a crash', which no one feels like doing, into a rule the calm version of you already signed.",
      difficulty: "challenge",
      hints: [
        "Work per 100 of starting wealth: 60 in the risky bucket, 40 in the safe one. Apply the 30% fall to the risky side only.",
        "The risky bucket becomes 60 × 0.7 = 42; the safe bucket is still 40. What is total wealth now?",
        "Divide the new risky value by the new total (42 by 82) and compare the weight to the 55% lower band.",
      ],
      strategy: "Pre-commitment",
      guideRef: 4,
    },
  ],
  interactive: "policy-portfolio",
  interactiveTitle: "The Policy Portfolio Builder",
  interactiveBlurb:
    "Choose your risk aversion and your market estimates; get a two-bucket policy portfolio with rebalancing bands you could actually live with.",
};
