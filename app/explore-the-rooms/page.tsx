import Link from "next/link";

export const metadata = {
  title: "Explore the Rooms | Outcrop Manor",
  description: "Eight sleeping spaces named for western spirit, from solo travelers to triple-bunk rooms. Cooling memory foam mattresses throughout.",
};

const rooms = [
  {
    slug: "one-woman-rodeo",
    name: "One Woman Rodeo",
    type: "Single",
    count: 3,
    beds: "1 queen bed",
    bg: "var(--clay-pale)",
    img: "/images/rooms/one-woman-rodeo.webp",
    desc: "Three single-occupancy rooms, each with a queen bed. Perfect for solo attendees who need their own private space to decompress between sessions.",
  },
  {
    slug: "double-shot-of-whiskey",
    name: "Double Shot of Whiskey",
    type: "Double",
    count: 2,
    beds: "2 full beds",
    bg: "var(--sky-pale)",
    img: "/images/rooms/double-shot-of-whiskey.webp",
    desc: "Two double rooms, one east-facing and one west-facing, each with two beds. Great for pairs who want a bit more space without sharing a single bed.",
  },
  {
    slug: "three-sheets-to-the-wind",
    name: "Three Sheets to the Wind",
    type: "Triple",
    count: 3,
    beds: "3 twin beds",
    bg: "var(--sage-pale)",
    img: "/images/rooms/three-sheets-to-the-wind.webp",
    desc: "Three triple-bed rooms for groups of three. Named with a wink: the west-facing windows will convince anyone that the sky is moving.",
  },
  {
    slug: "the-hitching-post",
    name: "The Hitching Post",
    type: "Suite",
    count: 1,
    beds: "1 king bed",
    bg: "var(--gold)",
    img: "/images/rooms/the-hitching-post.webp",
    desc: "Our 1,600 sq. ft. Event Center is being designed with your retreat in mind. The vision is to create a bright, comfortable, highly functional space where guests can spread out, create, connect, and enjoy the experience without feeling crowded. The space will include 6-foot L-shaped adjustable tables, custom lighting, electric access at each station, a design wall for sewing and creative groups, a grid wall for selling or displaying items, and a wet bar for easy snacks, drinks, and gathering.",
  },
];

export default function ExploreTheRoomsPage() {
  return (
    <>
      <section className="page-hero">
        <h1>The Rooms</h1>
        <p>
          Eight sleeping spaces named for western spirit. Every bed has a
          10-inch cooling memory foam mattress. Mini-splits and radiant floor
          heat keep every room comfortable year-round.
        </p>
      </section>

      {/* ── Room overview ──────────────────────────────────────────────── */}
      <section className="section">
        <p className="section-kicker">Sleeping arrangements</p>
        <h2 className="section-heading">Named for the West</h2>
        <div className="room-grid">
          {rooms.map((room) => (
            <Link key={room.slug} href={`/${room.slug}`} className="room-card" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <div
                className="room-card-img"
                style={{ background: room.bg, overflow: "hidden", position: "relative" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={room.img} alt={room.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <div className="room-card-body">
                <span className="room-badge">{room.type} · {room.count} room{room.count > 1 ? "s" : ""}</span>
                <h3>{room.name}</h3>
                <p style={{ color: "var(--forest-soft)", fontSize: 13, marginBottom: 8 }}>{room.beds}</p>
                <p>{room.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Comfort details ────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--paper)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          padding: "72px 5vw",
        }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <p className="section-kicker">Every room</p>
          <h2 className="section-heading">Built for rest</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
            }}
          >
            {[
              {
                title: "Memory Foam",
                body: "10-inch cooling memory foam mattresses. The kind of sleep that makes guests ask where we got the bed.",
              },
              {
                title: "Climate Control",
                body: "Mini-splits in each room for individual cooling. Radiant floor heat throughout the home for winter retreats.",
              },
              {
                title: "Natural Light",
                body: "Every room has exterior windows. East or west-facing views of the Colorado landscape.",
              },
              {
                title: "Linens & Towels",
                body: "All bedding, linens, and towels provided. We take care of the setup so you can focus on your retreat.",
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

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="section" style={{ textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 36,
            fontWeight: 400,
            letterSpacing: "-0.03em",
            margin: "0 0 16px",
          }}
        >
          Ready to book the whole home?
        </h2>
        <p style={{ color: "var(--forest-soft)", marginBottom: 28 }}>
          All rooms come with your whole-home booking. We don&apos;t sell rooms individually.
        </p>
        <a
          href="https://booking.outcrop-manor.com"
          className="btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check availability →
        </a>
      </section>
    </>
  );
}
