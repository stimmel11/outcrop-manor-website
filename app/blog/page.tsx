import Link from "next/link";
import { posts } from "./posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Outcrop Manor",
  description:
    "Behind-the-scenes stories, property updates, and the journey of building Outcrop Manor in Byers, Colorado.",
};

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <h1>The Outcrop Journal</h1>
        <p>
          Behind-the-scenes stories, property updates, and the journey of
          building something worth coming back to.
        </p>
      </section>

      <section className="section">
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
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
                {/* Thumbnail */}
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
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.imageAlt ?? post.title}
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
                      🏡
                    </div>
                  )}
                </div>

                {/* Text */}
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
                    {post.date} · {post.author}
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
                    {post.title}
                  </h2>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: "var(--forest-soft)",
                      margin: 0,
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <span
                    style={{
                      fontSize: 13,
                      color: "var(--sky)",
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                    }}
                  >
                    Read more →
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
