import { notFound } from "next/navigation";
import Link from "next/link";
import { chronicles, getChronicle } from "../chronicles";
import type { Metadata } from "next";

export function generateStaticParams() {
  return chronicles.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const chronicle = getChronicle(slug);
  if (!chronicle) return {};
  return {
    title: `${chronicle.title} — Outcrop Chronicles`,
    description: chronicle.excerpt,
  };
}

export default async function ChroniclePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chronicle = getChronicle(slug);
  if (!chronicle) notFound();

  return (
    <>
      <section className="page-hero">
        <div
          style={{
            fontSize: 12,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "rgba(244,243,232,0.7)",
            marginBottom: 12,
          }}
        >
          {chronicle.date} · {chronicle.author}
        </div>
        <h1 style={{ maxWidth: 700, margin: "0 auto" }}>{chronicle.title}</h1>
      </section>

      {/* Audio player */}
      {chronicle.audioSrc && (
        <div
          style={{
            background: "var(--forest)",
            padding: "20px 5vw",
          }}
        >
          <div
            style={{
              maxWidth: 760,
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <span
              style={{
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(244,243,232,0.65)",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              🎙 Listen to the story
            </span>
            <audio
              controls
              style={{ width: "100%", accentColor: "#c5a46e" }}
              preload="none"
            >
              <source src={chronicle.audioSrc} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      )}

      <section className="prose-section">
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
          }}
        >
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: chronicle.content }}
          />
        </div>
      </section>

      <section
        className="section"
        style={{ borderTop: "1px solid var(--line)", paddingTop: 48 }}
      >
        <div style={{ textAlign: "center" }}>
          <Link href="/outcrop-chronicles" className="btn-secondary">
            ← All Chronicles
          </Link>
        </div>
      </section>
    </>
  );
}
