import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, getPost } from "../posts";
import type { Metadata } from "next";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Outcrop Manor Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const prev = posts[currentIndex + 1] ?? null;
  const next = posts[currentIndex - 1] ?? null;

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
          {post.date} · {post.author}
        </div>
        <h1 style={{ maxWidth: 700, margin: "0 auto" }}>{post.title}</h1>
      </section>

      <section className="prose-section">
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: post.image ? "1fr 1fr" : "1fr",
            gap: "6vw",
            alignItems: "start",
          }}
        >
          {/* Left column: image or nothing */}
          {post.image ? (
            <div style={{ position: "sticky", top: 100 }}>
              <img
                src={post.image}
                alt={post.imageAlt ?? post.title}
                style={{
                  width: "100%",
                  borderRadius: 20,
                  display: "block",
                  boxShadow: "var(--shadow)",
                }}
              />
            </div>
          ) : null}

          {/* Right column (or full width): post body */}
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Prev / Next nav */}
      <section
        className="section"
        style={{ borderTop: "1px solid var(--line)", paddingTop: 48 }}
      >
        <div
          style={{
            maxWidth: 720,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
          }}
        >
          {prev ? (
            <Link
              href={`/blog/${prev.slug}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--line)",
                  borderRadius: 16,
                  padding: 24,
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--forest-soft)",
                    opacity: 0.6,
                    marginBottom: 8,
                  }}
                >
                  ← Older
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 16,
                    color: "var(--forest)",
                  }}
                >
                  {prev.title}
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/blog/${next.slug}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--line)",
                  borderRadius: 16,
                  padding: 24,
                  textAlign: "right",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--forest-soft)",
                    opacity: 0.6,
                    marginBottom: 8,
                  }}
                >
                  Newer →
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 16,
                    color: "var(--forest)",
                  }}
                >
                  {next.title}
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Link href="/blog" className="btn-secondary">
            ← All posts
          </Link>
        </div>
      </section>
    </>
  );
}
