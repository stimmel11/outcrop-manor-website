"use client";

import Link from "next/link";
import { useState, useRef } from "react";

const exploreLinks = [
  { href: "/explore-the-manor", label: "The Manor", desc: "35.5 acres, an elevator, and sweeping views" },
  { href: "/explore-the-rooms", label: "All Rooms", desc: "Overview of all 8 sleeping spaces" },
  { href: "/explore-the-event-center", label: "Event Center", desc: "1,600 sq ft of flexible gathering space" },
  { href: "/explore-outdoor-spaces", label: "Outdoor Spaces", desc: "Porches, trails, and open Colorado sky" },
  { href: "/one-woman-rodeo", label: "One Woman Rodeo", desc: "3 single-occupancy rooms" },
  { href: "/double-shot-of-whiskey", label: "Double Shot of Whiskey", desc: "2 double rooms, east & west views" },
  { href: "/three-sheets-to-the-wind", label: "Three Sheets to the Wind", desc: "3 triple rooms, one per floor" },
  { href: "/the-hitching-post", label: "The Hitching Post", desc: "The creative crafting studio" },
];

export function SiteHeader() {
  const [exploreOpen, setExploreOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openExplore() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setExploreOpen(true);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setExploreOpen(false), 120);
  }

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
          {/* Explore dropdown */}
          <div
            className="nav-dropdown-wrap"
            onMouseEnter={openExplore}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              className="nav-dropdown-trigger"
              aria-expanded={exploreOpen}
              onClick={() => setExploreOpen((v) => !v)}
            >
              Explore
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                style={{
                  marginLeft: 4,
                  transform: exploreOpen ? "rotate(180deg)" : "none",
                  transition: "transform 160ms",
                }}
              >
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {exploreOpen && (
              <div
                className="nav-dropdown"
                onMouseEnter={openExplore}
                onMouseLeave={scheduleClose}
              >
                <div className="nav-dropdown-section">
                  <p className="nav-dropdown-label">The Property</p>
                  {exploreLinks.slice(0, 4).map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="nav-dropdown-item"
                      onClick={() => setExploreOpen(false)}
                    >
                      <span className="nav-dropdown-item-name">{l.label}</span>
                      <span className="nav-dropdown-item-desc">{l.desc}</span>
                    </Link>
                  ))}
                </div>
                <div className="nav-dropdown-divider" />
                <div className="nav-dropdown-section">
                  <p className="nav-dropdown-label">Individual Rooms</p>
                  {exploreLinks.slice(4).map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="nav-dropdown-item"
                      onClick={() => setExploreOpen(false)}
                    >
                      <span className="nav-dropdown-item-name">{l.label}</span>
                      <span className="nav-dropdown-item-desc">{l.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

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
