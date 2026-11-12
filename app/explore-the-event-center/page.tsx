import Link from "next/link";

export const metadata = {
  title: "The Event Center | Outcrop Manor",
  description: "1,600 sq ft of flexible gathering space for workshops, yoga, ceremonies, dinners, and celebrations at Outcrop Manor.",
};

export default function ExploreEventCenterPage() {
  return (
    <>
      <section className="page-hero">
        <h1>The Event Center</h1>
        <p>
          1,600 square feet of flexible, light-filled space, designed for
          whatever your group needs. Workshops, ceremonies, dinners, movement
          classes, or simply a place to gather.
        </p>
      </section>

      {/* ── What it's for ─────────────────────────────────────────────── */}
      <section className="section">
        <div className="prose-grid">
          <div className="prose">
            <h2>Flexible by design</h2>
            <p>
              The Outcrop Manor event center was built to accommodate many
              kinds of gatherings. At 1,600 square feet, it has enough room for
              a fully seated dinner, a yoga class, a corporate presentation, or
              a ceremony, and the open design means it can be reconfigured
              quickly between uses.
            </p>
            <p>
              Connected directly to the main home, it sits alongside the kitchen
              so caterers can work efficiently. Large windows fill the space with
              natural light and views of the Colorado foothills.
            </p>
          </div>
          <div className="prose">
            <h2>Common uses</h2>
            <ul>
              <li>Scrapbooking retreats</li>
              <li>Quilting guild retreats</li>
              <li>Wedding ceremonies and receptions</li>
              <li>Family reunions and milestone celebrations</li>
              <li>Creative workshops and artistic residencies</li>
              <li>Nonprofit gatherings and board retreats</li>
              <li>Speaker events and small conferences</li>
            </ul>
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
              margin: "0 0 48px",
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
              { label: "Capacity: theater style", value: "~80 people" },
              { label: "Capacity: dining style", value: "~50 people" },
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

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="section" style={{ textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 400, letterSpacing: "-0.03em", margin: "0 0 16px" }}>
          Plan your event at Outcrop
        </h2>
        <p style={{ color: "var(--forest-soft)", marginBottom: 28 }}>
          The event center is included in every whole-home booking.
        </p>
        <a
          href="https://booking.outcrop-manor.com"
          className="btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a Retreat →
        </a>
        <span style={{ display: "inline-block", width: 14 }} />
        <Link href="/contact" className="btn-secondary">
          Ask about your event
        </Link>
      </section>
    </>
  );
}
