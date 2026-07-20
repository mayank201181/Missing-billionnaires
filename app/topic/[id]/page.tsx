import { Suspense } from "react";
import { notFound } from "next/navigation";
import { TOPICS, TOPIC_BY_ID } from "@/lib/content";
import { TopicView } from "@/components/TopicView";

export function generateStaticParams() {
  return TOPICS.map((t) => ({ id: t.id }));
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const topic = TOPIC_BY_ID[id];
  if (!topic) notFound();

  return (
    <Suspense>
      <TopicView topic={topic} />
    </Suspense>
  );
}
