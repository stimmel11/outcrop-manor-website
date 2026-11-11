import Link from "next/link";

export const metadata = {
  title: "About | Outcrop Manor",
  description: "The story of Outcrop Manor, built by Melissa and Chris to create the kind of retreat space they always wished existed.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <h1>About Outcrop</h1>
        <p>
          Built by Melissa and Chris, driven by a belief that the right
          space changes everything about what a group can do together.
        </p>
      </section>

      {/* ── Story ─────────────────────────────────────────────────────── */}
      <section className="prose-section">
        <div className="prose-grid">
          <div className="prose">
            <h2>Driven to be creative</h2>
            <p>
              Outcrop Manor started the way most good ideas do: with a problem.
              Melissa had spent years organizing retreats, team offsites, and
              gatherings of all kinds. She kept running into the same wall:
              finding a space that was truly private, fully equipped, accessible
              to everyone in the group, and close enough to Denver that guests
              didn&apos;t need half a day of travel time just to arrive.
            </p>
            <p>
              The spaces that checked the accessibility box were often sterile
              or institutional. The ones with character required a mountain pass.
              The ones close to Denver were resorts where your group would share
              the building with strangers.
            </p>
            <p>
              So Melissa and Chris built Outcrop Manor.
            </p>
          </div>
          <div className="prose">
            <h2>Melissa &amp; Chris</h2>
            <p>
              Melissa brings her background in retreat facilitation and hospitality
              to every detail of how Outcrop is designed and run. She&apos;s thought
              carefully about what guests need, not just physically, but
              experientially, and those decisions show up everywhere from the
              mattresses in the bedrooms to the layout of the event center.
            </p>
            <p>
              Chris brings the operational side. The building, the land, the
              ongoing renovation work. He&apos;s invested in Outcrop as a place
              that will get better over time, not just a property that&apos;s
              maintained.
            </p>
            <p>
              Together, they&apos;re building something they wish had existed when
              they needed it.
            </p>
          </div>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--paper)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          padding: "var(--section-y) 5vw",
        }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <p className="section-kicker">What we believe</p>
          <h2 className="section-heading">The Outcrop ethos</h2>
          <div className="m-stack" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              {
                title: "Privacy matters",
                body: "When you book Outcrop Manor, you have the whole property. No shared lobbies. No strangers in the hallway. Just your group, in a space that's genuinely yours.",
              },
              {
                title: "Accessibility is non-negotiable",
                body: "Every guest should be able to participate fully in the retreat experience. The elevator, the first-floor suite, the accessible bathrooms: these weren't afterthoughts.",
              },
              {
                title: "Getting better",
                body: "Outcrop is a work in progress, intentionally. The renovations are ongoing because we believe the space should keep improving as we learn what our guests need most.",
              },
            ].map((v) => (
              <div
                key={v.title}
                style={{
                  background: "var(--cream)",
                  border: "1px solid var(--line)",
                  borderRadius: 20,
                  padding: 28,
                }}
              >
                <strong
                  style={{
                    display: "block",
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    fontWeight: 500,
                    marginBottom: 12,
                  }}
                >
                  {v.title}
                </strong>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--forest-soft)", margin: 0 }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Inner Circle CTA ──────────────────────────────────────────── */}
      <section className="section">
        <div
          className="m-stack" style={{
            background: "var(--forest)",
            borderRadius: 28,
            padding: "var(--section-y) 5vw",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6vw",
            alignItems: "start",
          }}
        >
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(244,243,232,0.5)",
                marginBottom: 12,
              }}
            >
              Stay in the loop
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3vw, 44px)",
                fontWeight: 400,
                letterSpacing: "-0.03em",
                color: "var(--cream)",
                margin: "0 0 16px",
              }}
            >
              The Inner Circle
            </h2>
            <p style={{ color: "rgba(244,243,232,0.7)", fontSize: 15, lineHeight: 1.75, marginBottom: 28 }}>
              Join our small list of people who hear about Outcrop first — before
              we open new retreat dates to the public.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 36 }}>
              {[
                "Early access to new retreat dates",
                "First notice of last-minute openings",
                "Updates on ongoing renovations",
                "A hand in shaping the Outcrop experience",
                "Occasional surprises for loyal guests",
              ].map((b) => (
                <div key={b} style={{ display: "flex", gap: 10, alignItems: "flex-start", color: "rgba(244,243,232,0.85)", fontSize: 14 }}>
                  <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: 1 }}>✦</span>
                  {b}
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-light">
              Join the Inner Circle
            </Link>
          </div>
          <div
            style={{
              background: "rgba(244,243,232,0.07)",
              border: "1px solid rgba(244,243,232,0.12)",
              borderRadius: 20,
              padding: "36px 40px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 22,
                fontWeight: 400,
                color: "var(--cream)",
                marginBottom: 20,
                lineHeight: 1.3,
              }}
            >
              &ldquo;The right environment changes everything.&rdquo;
            </p>
            <p style={{ color: "rgba(244,243,232,0.65)", fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>
              Whether you&apos;re gathering a team, hosting a wellness retreat,
              celebrating a milestone, or simply need space to think — we want
              you to find exactly that here.
            </p>
            <p style={{ color: "rgba(244,243,232,0.65)", fontSize: 14, lineHeight: 1.75 }}>
              The Inner Circle isn&apos;t a loyalty program. It&apos;s just our
              way of keeping a small group of people in the loop as Outcrop
              continues to grow.
            </p>
          </div>
        </div>
      </section>

      {/* ── Inner circle invite ───────────────────────────────────────── */}
      <section className="section" style={{ textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 400, letterSpacing: "-0.03em", margin: "0 0 16px" }}>
          Come be part of the story
        </h2>
        <p style={{ color: "var(--forest-soft)", marginBottom: 28, maxWidth: 520, margin: "0 auto 28px" }}>
          Whether you&apos;re ready to book or just want to stay in the loop,
          we&apos;d love to hear from you.
        </p>
        <Link href="/contact" className="btn-primary">
          Get in touch
        </Link>
        <span style={{ display: "inline-block", width: 14 }} />
        <a
          href="https://booking.outcrop-manor.com"
          className="btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a retreat
        </a>
      </section>
    </>
  );
}
