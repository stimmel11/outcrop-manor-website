import Link from "next/link";

export const metadata = {
  title: "Explore the Manor | Outcrop Manor",
  description: "35.5 acres, 7 bedrooms, a 1,600 sq ft event center, elevator, 4 decks, and big Colorado sky - everything in one whole-home retreat.",
};

export default function ExploreTheManorPage() {
  return (
    <>
      <section className="page-hero">
        <h1>Explore the Manor</h1>
        <p>
          35.5 acres of Colorado foothills. A fully equipped home with 7 bedrooms,
          5.5 bathrooms, a residential elevator, and a 1,600 sq ft event center,
          all yours for the duration of your retreat.
        </p>
      </section>

      {/* ── Stats bar ──────────────────────────────────────────────────── */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div
          className="m-2col" style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 2,
            background: "var(--line)",
            border: "1px solid var(--line)",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          {[
            { num: "35.5", label: "Acres" },
            { num: "7", label: "Bedrooms" },
            { num: "5.5", label: "Bathrooms" },
            { num: "4", label: "Decks" },
            { num: "1,600", label: "Sq ft event center" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                background: "var(--paper)",
                padding: "28px 24px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 42,
                  fontWeight: 400,
                  letterSpacing: "-0.04em",
                  color: "var(--sky)",
                }}
              >
                {s.num}
              </div>
              <div style={{ fontSize: 12, color: "var(--forest-soft)", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Feature sections ───────────────────────────────────────────── */}
      <section className="prose-section">
        <div className="prose-grid">
          <div className="prose">
            <h2>The Home</h2>
            <p>
              Outcrop Manor is a 7-bedroom, 5.5-bathroom home designed from the
              ground up to host groups. It&apos;s not a converted barn or a repurposed
              vacation rental; it was built to be a retreat, and every decision
              reflects that intention.
            </p>
            <p>
              Four decks give different vantage points on the property and the
              surrounding Colorado foothills. A residential elevator makes every
              floor accessible to every guest. The kitchen is equipped for real
              cooking (caterers welcome).
            </p>
          </div>
          <div className="prose">
            <h2>Accessibility</h2>
            <p>
              We believe a great retreat is one where everyone can participate
              fully. Outcrop features a residential elevator serving all floors,
              a first-floor master bedroom suite, wide doorways, and
              ADA-considerate design throughout.
            </p>
            <p>
              Getting here doesn&apos;t require mountain-pass driving. The property
              is accessible off well-maintained roads near Byers, Colorado,
              approximately 30 minutes from Denver.
            </p>
          </div>
        </div>
      </section>

      {/* ── Feature list ──────────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <p className="section-kicker">What&apos;s included</p>
        <h2 className="section-heading">Everything you need</h2>
        <div className="feature-list">
          {[
            {
              title: "Bedrooms",
              body: "7 bedrooms sleeping up to 16 guests. Single, double, and triple-bed configurations. Cooling memory foam mattresses (10-inch) in every room.",
            },
            {
              title: "Bathrooms",
              body: "5.5 bathrooms distributed across the home. First-floor full bathroom for accessible use.",
            },
            {
              title: "The Hitching Post",
              body: "Our 1,600 sq ft event center, set up as a workshop studio with 16 crafting stations, tables, chairs, and a full-size fridge.",
            },
            {
              title: "Kitchen",
              body: "Fully equipped, caterer-ready kitchen. Perfect for meal prep during multi-day retreats.",
            },
            {
              title: "Elevator",
              body: "A residential elevator ensures every floor is accessible to every guest, regardless of mobility.",
            },
            {
              title: "Outdoor Spaces",
              body: "35.5 acres of Colorado foothills. Four decks, fire pits, trails, and wide open sky.",
            },
          ].map((f) => (
            <div key={f.title} className="feature-item">
              <strong>{f.title}</strong>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 0, textAlign: "center" }}>
        <p style={{ fontSize: 16, color: "var(--forest-soft)", marginBottom: 24 }}>
          Ready to see availability for your dates?
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
          Ask a question
        </Link>
      </section>
    </>
  );
}
