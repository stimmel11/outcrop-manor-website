import Link from "next/link";

export const metadata = {
  title: "Three Sheets to the Wind | Outcrop Manor",
  description:
    "Three triple-occupancy rooms at Outcrop Manor — one on each level. Among the largest bedrooms in the house, perfect for groups of three.",
};

const rooms = [
  {
    name: "Wide Open Spaces",
    tag: "Triple · 3 Twin Beds · Lower Level",
    color: "var(--sage-pale)",
    img: "/images/rooms/wide-open-spaces.webp",
    desc: [
      "The calmer, more peaceful room — beside the event center on the lower level. Three twin beds (with plans to upgrade to full-size as the layout allows), a recently added ceiling fan, and a large bathroom next door.",
      "Bright days and quieter, warmer evenings. A great option for the group member who wants a bit more quiet.",
    ],
  },
  {
    name: "Amarillo by Morning",
    tag: "Triple · 2 Full + 1 Twin · Main Level",
    color: "var(--clay-pale)",
    img: "/images/rooms/amarillo-by-morning.webp",
    desc: [
      "Spacious and country-elegant on the main level. Two full-size beds and one twin, with windows facing both east for sunrise and northwest for sunset. Eagles nest in nearby trees and are sometimes visible from the room.",
      "A natural gathering point for the group — the kind of room that turns into a late-night conversation.",
    ],
  },
  {
    name: "Friends in Low Places",
    tag: "Triple · 2 Full + 1 Twin · Upper Level",
    color: "var(--sky-pale)",
    img: "/images/rooms/friends-in-low-places.webp",
    desc: [
      "One of the largest rooms in the house — beside the elevator on the upper level. Two full-size beds, one twin, several closets, a bathroom, and nooks. Northwest-facing windows behind the headboards offer sunset views across open Colorado land.",
      "This is the lively room. The adult sleepover room. The one where people are still laughing at 2am.",
    ],
  },
];

export default function ThreeSheetsToTheWindPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Triple Occupancy · 3 Rooms</p>
        <h1>Three Sheets to the Wind</h1>
        <p>
          Three triple-bed rooms — one on each level of the manor. Among the largest
          bedrooms in the house. Each guest gets her own bed and a little more room to
          spread out. Named with a wink: the west-facing windows will convince anyone
          the sky is moving.
        </p>
      </section>

      {/* ── Room cards ─────────────────────────────────────────────────── */}
      <section className="section">
        <p className="section-kicker">The rooms</p>
        <h2 className="section-heading">One on every floor</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {rooms.map((room) => (
            <div
              key={room.name}
              style={{
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
                  background: room.color,
                  minHeight: 260,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={room.img} alt={room.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", position: "absolute", inset: 0 }} />
              </div>
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

      {/* ── Accessibility callout ───────────────────────────────────────── */}
      <section
        style={{
          background: "var(--paper)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          padding: "72px 5vw",
        }}
      >
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6vw",
            alignItems: "center",
          }}
        >
          <div>
            <p className="section-kicker">Accessible by design</p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3vw, 46px)",
                fontWeight: 400,
                letterSpacing: "-0.03em",
                margin: "0 0 16px",
              }}
            >
              Every floor, every guest
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--forest-soft)" }}>
              Outcrop has a residential elevator serving all three levels, so even the upper-floor
              rooms are accessible to every guest. Wide hallways and ADA-considerate design
              throughout.
            </p>
          </div>
          <div
            style={{
              background: "var(--cream)",
              borderRadius: 18,
              padding: "32px",
              border: "1px solid var(--line)",
            }}
          >
            {[
              "Residential elevator to all three levels",
              "Wide hallways throughout",
              "First-floor accessible bedroom suite",
              "No mountain-pass driving required",
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

      {/* ── Nav links ──────────────────────────────────────────────────── */}
      <section className="section">
        <p className="section-kicker">Also at Outcrop</p>
        <h2 className="section-heading">See all the rooms</h2>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="/one-woman-rodeo" className="btn-secondary">One Woman Rodeo →</Link>
          <Link href="/double-shot-of-whiskey" className="btn-secondary">Double Shot of Whiskey →</Link>
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
