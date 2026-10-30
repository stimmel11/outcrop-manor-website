import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* ── Hero copy ──────────────────────────────────────────────────── */}
      <section className="hero-text-block">
        <div className="hero-text-inner">
          {/* Logo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/outcrop-logo.png"
            alt="Outcrop Manor"
            className="hero-logo"
          />
          {/* Copy */}
          <div>
            <p className="eyebrow">Located in beautiful Byers Colorado</p>
            <h1>Outcrop Manor</h1>
            <p className="hero-intro">
              A whole-home retreat on 35.5 acres: 7 bedrooms, an event center,
              an elevator, and views that make the city feel very far away. Thirty
              minutes from Denver.
            </p>
            <div className="hero-actions">
              <a
                href="https://booking.outcrop-manor.com"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Retreat →
              </a>
              <Link href="/explore-the-manor" className="btn-secondary">
                Explore the Manor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Full-width hero photo ───────────────────────────────────────── */}
      <div className="hero-photo-full">
        <img
          src="/images/hero-exterior-wide.png"
          alt="Outcrop Manor exterior at sunset, Byers Colorado"
        />
      </div>

      {/* ── 4-up explore cards ──────────────────────────────────────────── */}
      <section className="section">
        <p className="section-kicker">What awaits</p>
        <h2 className="section-heading">Every corner of Outcrop</h2>
        <div className="card-grid">
          {[
            {
              href: "/explore-the-manor",
              label: "Explore the Manor",
              desc: "35.5 acres, 7 bedrooms, an elevator, and 4 decks with sweeping views.",
              bg: "var(--sage-pale)",
            },
            {
              href: "/explore-the-rooms",
              label: "Explore the Rooms",
              desc: "Eight sleeping spaces named for western spirit, from solo travelers to triple bunks.",
              bg: "var(--clay-pale)",
            },
            {
              href: "/explore-the-event-center",
              label: "The Event Center",
              desc: "1,600 sq ft of flexible gathering space for workshops, ceremonies, and celebrations.",
              bg: "var(--sky-pale)",
            },
            {
              href: "/explore-outdoor-spaces",
              label: "Outdoor Spaces",
              desc: "Trails, stargazing, fire pits, and open sky stretching to the horizon.",
              bg: "var(--cream)",
            },
          ].map((c) => (
            <Link key={c.href} href={c.href} className="card">
              <div
                className="card-img"
                style={{ background: c.bg }}
              />
              <div className="card-body">
                <strong>{c.label}</strong>
                <p>{c.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Location / place strip ─────────────────────────────────────── */}
      <div className="place-section">
        <div
          className="place-image"
          style={{
            background:
              "linear-gradient(135deg, var(--forest) 0%, var(--forest-soft) 100%)",
            minHeight: 400,
          }}
        />
        <div className="place-copy">
          <h2>Just 30 minutes from Denver</h2>
          <p>
            Outcrop Manor sits in the Colorado foothills near Byers, far enough
            to feel a world away, close enough for guests flying in from anywhere.
            No mountain-pass white-knuckle driving. Just open land, big sky, and
            exactly the space you need.
          </p>
          <a
            href="https://booking.outcrop-manor.com"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check availability
          </a>
        </div>
      </div>

      {/* ── Inner Circle CTA ───────────────────────────────────────────── */}
      <section className="cta-band">
        <div className="cta-band-inner">
          <div>
            <h2>The Inner Circle</h2>
            <p>
              Join our small list of people who hear about Outcrop first, before
              we open new retreat dates to the public.
            </p>
            <ul className="benefit-list">
              {[
                "Early access to new retreat dates",
                "First notice of last-minute openings",
                "Updates on ongoing renovations",
                "A hand in shaping the Outcrop experience",
                "Occasional surprises for loyal guests",
              ].map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <Link href="/contact" className="btn-light">
              Join the Inner Circle
            </Link>
          </div>
          <div>
            <p style={{ color: "rgba(244,243,232,0.7)", fontSize: 15, lineHeight: 1.75 }}>
              Outcrop Manor is a place built on the belief that the right
              environment changes everything. Whether you&apos;re gathering a
              team, hosting a wellness retreat, celebrating a milestone, or simply
              need space to think, we want you to find exactly that here.
            </p>
            <p style={{ color: "rgba(244,243,232,0.7)", fontSize: 15, lineHeight: 1.75, marginTop: 20 }}>
              The Inner Circle isn&apos;t a loyalty program. It&apos;s just our
              way of keeping a small group of people in the loop as Outcrop
              continues to grow.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why Outcrop ───────────────────────────────────────────────── */}
      <section className="why-section">
        <div className="why-inner">
          <h2>Why Outcrop Manor?</h2>
          <div className="why-text">
            <p>
              Outcrop Manor exists because we believe the best retreats happen
              when a group has a place entirely to themselves. No shared lobbies,
              no interruptions, no strangers in the hallway. Just your people, in
              a space that&apos;s genuinely yours for the duration of your stay.
            </p>
            <p>
              We built Outcrop to be flexible, the kind of place that works for
              a corporate offsite, a yoga retreat, a family reunion, or a wedding
              weekend. The 1,600 sq ft event center, the 8 sleeping spaces, the
              accessible design with an elevator, and the 35 acres of outdoor
              space all exist to serve whatever you need.
            </p>
            <p>
              And we keep it simple: you book the whole home. No room-by-room
              pricing, no hidden extras. Just a rate for the whole place, the
              whole time.
            </p>
          </div>
        </div>
      </section>

      {/* ── Accessibility callout ──────────────────────────────────────── */}
      <section className="section">
        <div
          style={{
            background: "var(--sky-pale)",
            border: "1px solid var(--line)",
            borderRadius: 24,
            padding: "48px 48px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4vw",
            alignItems: "center",
          }}
        >
          <div>
            <p className="section-kicker" style={{ marginBottom: 12 }}>Accessibility for All</p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3vw, 46px)",
                fontWeight: 400,
                letterSpacing: "-0.03em",
                margin: "0 0 16px",
              }}
            >
              Everyone belongs at Outcrop
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--forest-soft)", marginBottom: 24 }}>
              Outcrop Manor features a residential elevator, wide doorways, a
              first-floor bedroom suite, and ADA-considerate design throughout,
              so every guest can participate fully in the retreat experience.
            </p>
            <Link href="/explore-the-manor" className="btn-secondary">
              Learn about the manor
            </Link>
          </div>
          <div
            style={{
              background: "var(--paper)",
              borderRadius: 18,
              padding: "32px",
              border: "1px solid var(--line)",
            }}
          >
            {[
              "Residential elevator serving all floors",
              "First-floor lounge room",
              "Wide hallways and accessible bathrooms",
              "No mountain-pass driving required",
              "Paved arrival and parking area",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  gap: 10,
                  marginBottom: 14,
                  fontSize: 14,
                  alignItems: "flex-start",
                  color: "var(--forest-soft)",
                }}
              >
                <span style={{ color: "var(--sky)", flexShrink: 0 }}>✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
