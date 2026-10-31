import Link from "next/link";
import { chronicles } from "./chronicles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outcrop Chronicles — Outcrop Manor",
  description:
    "Stories from the land — legends, lore, and the history beneath Outcrop Manor in Byers, Colorado.",
};

export default function ChroniclesPage() {
  return (
    <>
      <section className="page-hero">
        <h1>Outcrop Chronicles</h1>
        <p>
          Stories from the land. Legends, lore, and the history beneath Outcrop Manor.
        </p>
      </section>

      <section className="section">
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {chronicles.map((chronicle) => (
            <Link
              key={chronicle.slug}
              href={`/outcrop-chronicles/${chronicle.slug}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <article
                style={{
                  borderBottom: "1px solid var(--line)",
                  padding: "36px 0",
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  gap: "24px",
                  alignItems: "start",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: 120,
                    height: 90,
                    borderRadius: 10,
                    overflow: "hidden",
                    flexShrink: 0,
                    background: "var(--sage-pale)",
                    border: "1px solid var(--line)",
                  }}
                >
                  {chronicle.image ? (
                    <img
                      src={chronicle.image}
                      alt={chronicle.imageAlt ?? chronicle.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 28,
                        opacity: 0.3,
                      }}
                    >
                      🌙
                    </div>
                  )}
                </div>

                <div style={{ display: "grid", gap: 8 }}>
                  <div
                    style={{
                      fontSize: 12,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--forest-soft)",
                      opacity: 0.7,
                    }}
                  >
                    {chronicle.date} · {chronicle.author}
                  </div>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(18px, 2vw, 24px)",
                      fontWeight: 400,
                      letterSpacing: "-0.02em",
                      margin: 0,
                      color: "var(--forest)",
                    }}
                  >
                    {chronicle.title}
                  </h2>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: "var(--forest-soft)",
                      margin: 0,
                    }}
                  >
                    {chronicle.excerpt}
                  </p>
                  <span
                    style={{
                      fontSize: 13,
                      color: "var(--sky)",
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                    }}
                  >
                    Read the story →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
