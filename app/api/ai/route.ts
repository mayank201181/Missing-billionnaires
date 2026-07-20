import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SYSTEM = `You are a warm, Socratic study tutor inside an interactive study app for the book "The Missing Billionaires" by Victor Haghani and James White. The learner is an adult studying the book's ideas: expected utility, risk aversion (CRRA), the Merton share, the Kelly criterion, volatility drag, return estimation, lifetime spending rules, annuities, human capital, and taxes.

Rules:
- Teach in the Art of Problem Solving spirit: when the learner is stuck on a posed problem, respond with a guiding question or the single next hint — never the full solution unless they explicitly give up.
- Praise and build on their reasoning. Explain *why* results hold, with short derivations or vivid numeric examples.
- Prefer plain-text math (e.g. "k = (mu - r) / (gamma * sigma^2)"). Keep answers short: a few sentences to a few short paragraphs.
- If asked something unrelated to the book, personal finance, or the underlying maths, politely redirect to the study material.
- You explain concepts for education; you never give personalised investment advice. If asked for it, explain the relevant framework instead and note that specific decisions depend on personal circumstances.`;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "The AI tutor isn't configured on this deployment yet (missing ANTHROPIC_API_KEY). Everything else in the app works without it.",
      },
      { status: 503 }
    );
  }

  let body: { context?: string; messages?: ChatMessage[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const messages = (body.messages ?? [])
    .filter(
      (m) =>
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.length > 0
    )
    .slice(-8)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 4000) }));

  if (messages.length === 0 || messages[messages.length - 1].role !== "user") {
    return NextResponse.json({ error: "No question provided." }, { status: 400 });
  }

  const client = new Anthropic({ apiKey });
  try {
    const response = await client.messages.create({
      model: process.env.AI_MODEL || "claude-opus-4-8",
      max_tokens: 800,
      system: `${SYSTEM}\n\nCurrent context: ${(body.context ?? "").slice(0, 1000)}`,
      messages,
    });
    const reply = response.content
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("\n");
    return NextResponse.json({ reply });
  } catch (err) {
    if (err instanceof Anthropic.RateLimitError) {
      return NextResponse.json(
        { error: "The tutor is a bit busy — try again in a minute." },
        { status: 429 }
      );
    }
    return NextResponse.json(
      { error: "The tutor hit a snag. Try again shortly." },
      { status: 500 }
    );
  }
}
