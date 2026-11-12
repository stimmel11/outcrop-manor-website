import Link from "next/link";

export const metadata = {
  title: "The Hitching Post | Outcrop Manor",
  description:
    "The Hitching Post is the 1,600 sq ft event center and crafting studio at Outcrop Manor: 16 crafting stations, design walls, a full-size fridge, and power at every table.",
};

export default function TheHitchingPostPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">The Event Center at Outcrop Manor</p>
        <h1>The Hitching Post</h1>
        <p>
          This is the room we bought the house for. 1,600 square feet of bright
          workshop space, set up and ready when you arrive, with tables, chairs,
          task lighting, and a full-size fridge so your group can settle in and
          get to work.
        </p>
      </section>

      {/* ── Origin story ───────────────────────────────────────────────── */}
      <section className="section">
        <div
          className="m-stack" style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6vw",
            alignItems: "start",
          }}
        >
          <div>
            <p className="section-kicker">The Hitching Post</p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3vw, 48px)",
                fontWeight: 400,
                letterSpacing: "-0.03em",
                margin: "0 0 20px",
              }}
            >
              A place to stop and stay a while
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--forest-soft)", marginBottom: 16 }}>
              Picture this: a crafter looks up from her project at sunset. She sees a cowboy ride up to
              the hitching post. She gets distracted. That&apos;s the room. The kind of place where
              time passes differently, where you look up and it&apos;s two hours later and you
              don&apos;t mind at all.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--forest-soft)" }}>
              The room was already large and open when we bought the property. We designed its
              purpose entirely around what makes a crafting retreat feel right: warm, comfortable,
              country and a little elegant. We&apos;re still refining it, and we add features
              based on what groups tell us they need.
            </p>
          </div>
          <div
            style={{
              background: "var(--gold)",
              borderRadius: 22,
              minHeight: 380,
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/rooms/hitching-post-workspace.webp" alt="The Hitching Post workspace" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", position: "absolute", inset: 0 }} />
          </div>
        </div>
      </section>

      {/* ── What's in the room ─────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--paper)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          padding: "var(--section-y) 5vw",
        }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <p className="section-kicker">What&apos;s inside</p>
          <h2 className="section-heading" style={{ marginBottom: 16 }}>Built for making things</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--forest-soft)", maxWidth: 760, margin: "0 0 32px" }}>
            The Hitching Post is set up as a working studio. Each guest gets an L-shaped table
            with room to spread out, a comfortable chair made for long sessions, a task lamp,
            and power right at the table. There&apos;s nothing to haul in or set up. Bring your
            projects and start. The studio connects directly to the main home, with the kitchen
            right alongside.
          </p>
          <div
            className="m-stack" style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
          >
            {[
              {
                title: "16 Crafting Stations",
                body: "Individual stations arranged in pods of four. Comfortable reclining chairs at every seat. Power and charging access at each table.",
              },
              {
                title: "Cutting & Ironing",
                body: "Dedicated cutting areas and ironing stations so the whole group can work at the same time without waiting.",
              },
              {
                title: "Design Walls",
                body: "Large vertical design walls for sewing, quilting, and visual layouts. Grid walls for displaying or organizing finished work.",
              },
              {
                title: "Full-Size Fridge",
                body: "A full-size fridge in the room keeps drinks, snacks, and meals close, so nobody has to break their momentum.",
              },
              {
                title: "Wet Bar",
                body: "A wet bar for snacks, drinks, and gathering. Because good creative work runs on good snacks.",
              },
              {
                title: "Warm Atmosphere",
                body: "The feel is country and a little elegant. Not a classroom, not a craft fair. A space that makes the work feel special.",
              },
            ].map((f) => (
              <div
                key={f.title}
                style={{
                  background: "var(--cream)",
                  border: "1px solid var(--line)",
                  borderRadius: 18,
                  padding: 28,
                }}
              >
                <strong
                  style={{
                    display: "block",
                    fontFamily: "var(--font-display)",
                    fontSize: 20,
                    fontWeight: 500,
                    marginBottom: 10,
                  }}
                >
                  {f.title}
                </strong>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--forest-soft)", margin: 0 }}>
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Specs ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--forest)",
          color: "var(--cream)",
          padding: "var(--section-y) 5vw",
        }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--sky)", marginBottom: 14 }}>
            Venue details
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 3.5vw, 54px)",
              fontWeight: 400,
              color: "var(--sky)",
              letterSpacing: "-0.03em",
              margin: "0 0 32px",
            }}
          >
            Space specifications
          </h2>
          <div
            className="m-stack" style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
          >
            {[
              { label: "Total area", value: "1,600 sq ft" },
              { label: "Capacity: workshop style", value: "17 people" },
              { label: "Capacity: dining style", value: "17 people" },
              { label: "Natural light", value: "Large windows, east exposure" },
              { label: "Connected to kitchen", value: "Yes, caterer accessible" },
              { label: "AV & power", value: "Multiple circuits, projector-ready" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  background: "rgba(244,243,232,0.06)",
                  border: "1px solid rgba(244,243,232,0.12)",
                  borderRadius: 16,
                  padding: 24,
                }}
              >
                <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(244,243,232,0.55)", marginBottom: 8 }}>
                  {s.label}
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500 }}>
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who it's for ───────────────────────────────────────────────── */}
      <section className="section">
        <p className="section-kicker">Who comes here</p>
        <h2 className="section-heading">For groups that make things together</h2>
        <div
          className="m-2col" style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
          }}
        >
          {[
            "Quilting guild retreats",
            "Scrapbooking retreats",
            "Sewing circles",
            "Fiber arts groups",
            "Mixed-media artists",
            "Creative workshops and artistic residencies",
            "Crafting friends",
            "Creative business teams",
            "Wedding ceremonies and receptions",
            "Family reunions and milestone celebrations",
            "Nonprofit gatherings and board retreats",
            "Speaker events and small conferences",
          ].map((g) => (
            <div
              key={g}
              style={{
                background: "var(--sky-pale)",
                border: "1px solid var(--line)",
                borderRadius: 14,
                padding: "16px 20px",
                fontSize: 14,
                color: "var(--forest-soft)",
                fontWeight: 500,
              }}
            >
              {g}
            </div>
          ))}
        </div>
      </section>

      {/* ── Tell us what you need ───────────────────────────────────────── */}
      <section
        style={{
          background: "var(--sage-pale)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          padding: "var(--section-y) 5vw",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <p className="section-kicker">We&apos;re still building</p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3vw, 48px)",
              fontWeight: 400,
              letterSpacing: "-0.03em",
              margin: "0 0 16px",
            }}
          >
            What would make your retreat better?
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--forest-soft)", marginBottom: 32 }}>
            We add to The Hitching Post based on what groups tell us. If there&apos;s something
            specific your craft requires, or something that would make the experience much better,
            we want to hear it.
          </p>
          <Link href="/contact" className="btn-primary">
            Send us a message →
          </Link>
        </div>
      </section>

      {/* ── Nav links ──────────────────────────────────────────────────── */}
      <section className="section">
        <p className="section-kicker">Also at Outcrop</p>
        <h2 className="section-heading">See the full property</h2>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="/explore-the-rooms" className="btn-secondary">All Rooms →</Link>
          <Link href="/explore-outdoor-spaces" className="btn-secondary">Outdoor Spaces →</Link>
          <Link href="/explore-the-manor" className="btn-secondary">The Manor →</Link>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="cta-band" style={{ textAlign: "center" }}>
        <div className="cta-band-inner" style={{ display: "block", maxWidth: 680 }}>
          <h2>Book the whole home, studio included</h2>
          <p style={{ color: "rgba(244,243,232,0.7)", marginBottom: 32, fontSize: 15, lineHeight: 1.7 }}>
            The Hitching Post is part of every whole-home booking. Your group gets exclusive
            access to the studio for the full duration of your retreat.
          </p>
          <a
            href="https://booking.outcrop-manor.com"
            className="btn-primary"
            style={{ background: "var(--cream)", color: "var(--forest)", border: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Check availability →
          </a>
        </div>
      </section>
    </>
  );
}
