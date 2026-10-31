import Link from "next/link";

export const metadata = {
  title: "Double Shot of Whiskey | Outcrop Manor",
  description:
    "Two double rooms at Outcrop Manor. Two full beds each — one east-facing, one west-facing. Two personalities, one comfortable place to land.",
};

const rooms = [
  {
    name: "Neon Moon",
    tag: "Double · 2 Full Beds · Main Level",
    color: "var(--sky-pale)",
    img: "/images/rooms/neon-moon.webp",
    desc: [
      "The softer of the two rooms. Main-level location with two full-size beds and an east-facing window — morning sunlight and the promise of night sky views after dark.",
      "Two doors open onto the covered patio, making it easy to step outside for fresh air between sessions.",
    ],
  },
  {
    name: "Tennessee Whiskey",
    tag: "Double · 2 Full Beds",
    color: "var(--clay-pale)",
    img: "/images/rooms/tennessee-whiskey.webp",
    desc: [
      "Warmer and a little more adventurous in personality. Still coming together — décor and finishing touches being added to make it feel fully its own.",
      "Two full beds, the same thoughtful comfort as every Outcrop room: memory foam mattresses, quality bedding, dedicated charging and storage.",
    ],
  },
];

export default function DoubleShotOfWhiskeyPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Double Occupancy · 2 Rooms</p>
        <h1>Double Shot of Whiskey</h1>
        <p>
          Two beds. Two personalities. One comfortable place to land. Perfect for pairs who want
          a bit more space — or for groups where everyone gets their own bed without sharing a room.
        </p>
      </section>

      {/* ── Room cards ─────────────────────────────────────────────────── */}
      <section className="section">
        <p className="section-kicker">The rooms</p>
        <h2 className="section-heading">East meets west</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {rooms.map((room) => (
            <div
              key={room.name}
              style={{
                background: room.color,
                border: "1px solid var(--line)",
                borderRadius: 22,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background: room.color,
                  height: 220,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={room.img} alt={room.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", position: "absolute", inset: 0 }} />
              </div>
              <div style={{ padding: "32px 36px 40px" }}>
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
                    fontSize: 30,
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    margin: "0 0 18px",
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
                      margin: i < room.desc.length - 1 ? "0 0 12px" : 0,
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
          padding: "72px 5vw",
        }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <p className="section-kicker">Every room includes</p>
          <h2 className="section-heading">Two beds, done right</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
            }}
          >
            {[
              {
                title: "Two Full Beds",
                body: "Each room has two full-size beds. 10-inch cooling memory foam mattresses, four pillows per bed, microfiber sheets, and comforters.",
              },
              {
                title: "Natural Views",
                body: "One room faces east for sunrise light, one faces west for sunset. Both have windows looking out over the Colorado landscape.",
              },
              {
                title: "Climate Control",
                body: "Individual cooling and radiant floor heat. Ceiling fans in every room.",
              },
              {
                title: "Charging & Storage",
                body: "Nightstands with built-in electrical outlets, luggage racks, and dedicated space for everyone's belongings.",
              },
            ].map((f) => (
              <div
                key={f.title}
                style={{
                  background: "var(--cream)",
                  border: "1px solid var(--line)",
                  borderRadius: 18,
                  padding: 24,
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
          <Link href="/one-woman-rodeo" className="btn-secondary">One Woman Rodeo →</Link>
          <Link href="/three-sheets-to-the-wind" className="btn-secondary">Three Sheets to the Wind →</Link>
          <Link href="/the-hitching-post" className="btn-secondary">The Hitching Post →</Link>
          <Link href="/explore-the-rooms" className="btn-secondary">All Rooms Overview →</Link>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="cta-band" style={{ textAlign: "center" }}>
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
