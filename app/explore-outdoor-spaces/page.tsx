export const metadata = {
  title: "Outdoor Spaces | Outcrop Manor",
  description: "35.5 acres of Colorado foothills: trails, fire pits, stargazing, and open sky stretching to the horizon.",
};

export default function ExploreOutdoorSpacesPage() {
  return (
    <>
      <section className="page-hero">
        <h1>Outdoor Spaces</h1>
        <p>
          35.5 acres of Colorado foothills. Open sky, wandering trails,
          fire pits, and a landscape that reminds you why you came.
        </p>
      </section>

      <section className="section">
        <div className="prose-grid">
          <div className="prose">
            <h2>Room to breathe</h2>
            <p>
              One of the great privileges of Outcrop Manor is the land itself.
              35.5 acres means your group has room to wander, to find a quiet
              corner, to spread out after a long day of sessions, without
              bumping into anyone else.
            </p>
            <p>
              Four decks give different views of the property and the
              surrounding landscape. Whether you want to watch the sunrise over
              the foothills or sit quietly with a coffee before the day begins,
              there&apos;s a deck for that.
            </p>
          </div>
          <div className="prose">
            <h2>What&apos;s out there</h2>
            <ul>
              <li>Walking and hiking trails across the property</li>
              <li>Fire pits for evening gatherings</li>
              <li>Stargazing away from city light pollution</li>
              <li>Four decks with Colorado foothills views</li>
              <li>Open meadow for outdoor activities</li>
              <li>Nature and wildlife (deer, raptors, and more)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Four decks feature ──────────────────────────────────────── */}
      <section
        style={{
          background: "var(--forest)",
          padding: "72px 5vw",
          color: "var(--cream)",
        }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--sky)", marginBottom: 14 }}>
            Four decks
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 3.5vw, 54px)",
              fontWeight: 400,
              color: "var(--sky)",
              letterSpacing: "-0.03em",
              margin: "0 0 36px",
            }}
          >
            Every angle of the view
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(244,243,232,0.78)", maxWidth: 660, marginBottom: 0 }}>
            Outcrop Manor&apos;s four decks face different directions, so the
            view is different depending on the time of day and what you&apos;re
            looking for. Morning coffee on the east deck. Afternoon quiet on the
            north. Sunset from the west. Each one feels like its own space.
          </p>
        </div>
      </section>

      <section className="section" style={{ textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 400, letterSpacing: "-0.03em", margin: "0 0 16px" }}>
          See it for yourself
        </h2>
        <p style={{ color: "var(--forest-soft)", marginBottom: 28 }}>
          The land is included with every whole-home booking. Your group, your 35 acres.
        </p>
        <a
          href="https://booking.outcrop-manor.com"
          className="btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a Retreat →
        </a>
      </section>
    </>
  );
}
