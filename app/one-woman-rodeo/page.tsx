import Link from "next/link";

export const metadata = {
  title: "One Woman Rodeo | Outcrop Manor",
  description:
    "Three single-occupancy rooms on the upper level of Outcrop Manor. Each with its own personality, views, and a full-size memory foam bed.",
};

const rooms = [
  {
    name: "High Noon",
    tag: "Master Suite · Queen Bed · Ensuite Bath",
    color: "var(--clay-pale)",
    desc: [
      "The largest and most private single at Outcrop — with its own ensuite bathroom. Two vanities, a separate soaking tub, and a zero-entry shower. A queen bed, the only one at the property, faces east with two doors opening to a covered patio.",
      "Individual mini-split cooling and radiant-floor heat keep the room comfortable year-round. Planned additions include patio privacy coverings, lighting, seating, closet doors, and a waterfall-style shower fixture.",
    ],
  },
  {
    name: "Desperado",
    tag: "Single · Full Bed · Shared Bath",
    color: "var(--sky-pale)",
    desc: [
      "Blue accents within an earthy palette give this room a softer, cowgirl-romantic feel. Faces east with two doors to the covered stamped-concrete patio — morning light and open sky.",
      "Shares a hallway bathroom with The Lone Ranger and one double-occupancy room. That bathroom serves up to four guests at a time.",
    ],
  },
  {
    name: "The Lone Ranger",
    tag: "Single · Full Bed · Shared Bath",
    color: "var(--sage-pale)",
    desc: [
      "Terracotta bedding, mid-century and early-American-inspired art, and a reading chair. Wide country views stretch out in every direction. Its own mini-split system means you control the temperature.",
      "Shares the hallway bathroom with Desperado.",
    ],
  },
];

export default function OneWomanRodeoPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Single Occupancy · 3 Rooms</p>
        <h1>One Woman Rodeo</h1>
        <p>
          Three private rooms on the upper level, each with its own layout, views,
          and personality. For solo attendees who want their own space to decompress
          between sessions — or just to sleep well.
        </p>
      </section>

      {/* ── Room cards ─────────────────────────────────────────────────── */}
      <section className="section">
        <p className="section-kicker">The rooms</p>
        <h2 className="section-heading">Three singles, three stories</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {rooms.map((room) => (
            <div
              key={room.name}
              className="m-stack room-row" style={{
                background: room.color,
                border: "1px solid var(--line)",
                borderRadius: 22,
                display: "grid",
                gridTemplateColumns: "1fr 1.6fr",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background: `${room.color}`,
                  minHeight: 260,
                  opacity: 0.7,
                }}
              />
              <div style={{ padding: "40px 44px" }}>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--forest-soft)",
                    marginBottom: 10,
                  }}
                >
                  {room.tag}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 32,
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    margin: "0 0 20px",
                  }}
                >
                  {room.name}
                </h3>
                {room.desc.map((p, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: 15,
                      lineHeight: 1.65,
                      color: "var(--forest-soft)",
                      margin: i < room.desc.length - 1 ? "0 0 14px" : 0,
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── What every room includes ────────────────────────────────────── */}
      <section
        style={{
          background: "var(--paper)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          padding: "var(--section-y) 5vw",
        }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <p className="section-kicker">Every room includes</p>
          <h2 className="section-heading">Comfortable by design</h2>
          <div
            className="m-stack" style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
          >
            {[
              {
                title: "Memory Foam",
                body: "Full-size (or queen in High Noon) 10-inch cooling memory foam mattress, four pillows, microfiber sheets, comforter, and a throw blanket.",
              },
              {
                title: "Climate Control",
                body: "Ceiling fans, bedside fans, or both. Individual mini-splits in select rooms for precise temperature control year-round.",
              },
              {
                title: "Charging & Storage",
                body: "Nightstands with built-in electrical outlets — great for CPAP machines too. Dedicated luggage and belonging space in every room.",
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

      {/* ── Nav links ──────────────────────────────────────────────────── */}
      <section className="section">
        <p className="section-kicker">Also at Outcrop</p>
        <h2 className="section-heading">See all the rooms</h2>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="/double-shot-of-whiskey" className="btn-secondary">Double Shot of Whiskey →</Link>
          <Link href="/three-sheets-to-the-wind" className="btn-secondary">Three Sheets to the Wind →</Link>
          <Link href="/the-hitching-post" className="btn-secondary">The Hitching Post →</Link>
          <Link href="/explore-the-rooms" className="btn-secondary">All Rooms Overview →</Link>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section
        className="cta-band"
        style={{ textAlign: "center" }}
      >
        <div className="cta-band-inner" style={{ display: "block", maxWidth: 680 }}>
          <h2>All rooms come with the whole home</h2>
          <p style={{ color: "rgba(244,243,232,0.7)", marginBottom: 32, fontSize: 15, lineHeight: 1.7 }}>
            Outcrop is booked whole-home only. Every room, every space, entirely yours
            for the duration of your retreat.
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
