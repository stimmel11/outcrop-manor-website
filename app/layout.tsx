import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outcrop Manor: Private Retreat in the Colorado Foothills",
  description:
    "Whole-home retreats on 35.5 acres in the Colorado foothills, 30 minutes from Denver. 7 bedrooms, 1,600 sq ft event center, elevator, stunning views.",
  metadataBase: new URL("https://outcrop-manor.com"),
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Outcrop Manor",
    description: "Private whole-home retreat in the Colorado foothills.",
    url: "https://outcrop-manor.com",
    siteName: "Outcrop Manor",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand-lockup">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/outcrop-logo.png" alt="Outcrop Manor logo" className="brand-logo" />
          <span>
            <strong>Outcrop Manor</strong>
            <small>Make time together matter</small>
          </span>
        </Link>
        <nav className="site-nav">
          <Link href="/explore-the-manor">Explore</Link>
          <Link href="/explore-the-rooms">Rooms</Link>
          <Link href="/explore-the-event-center">Events</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <a
            href="https://booking.outcrop-manor.com"
            className="nav-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Retreat
          </a>
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)", padding: "44px 5vw" }}>
      <div className="site-footer">
        <div className="brand-lockup" style={{ textDecoration: "none" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/outcrop-logo.png" alt="Outcrop Manor logo" className="brand-logo brand-logo--sm" />
          <span>
            <strong style={{ fontSize: 16 }}>Outcrop Manor</strong>
            <small>Byers, Colorado</small>
          </span>
        </div>
        <nav className="footer-links">
          <Link href="/explore-the-manor">The Manor</Link>
          <Link href="/explore-the-rooms">Rooms</Link>
          <Link href="/explore-the-event-center">Event Center</Link>
          <Link href="/explore-outdoor-spaces">Outdoors</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <a
            href="https://booking.outcrop-manor.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book
          </a>
        </nav>
        <p className="footer-copy">© 2025 Outcrop Manor</p>
      </div>
    </footer>
  );
}
