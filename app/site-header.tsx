"use client";

import Link from "next/link";
import { useState, useRef } from "react";

const chroniclesLinks = [
  { href: "/outcrop-chronicles/the-house-that-wouldnt-let-them-leave", label: "The House That Wouldn't Let Them Leave", desc: "A Halloween legend — and maybe something more" },
];

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
  const [chroniclesOpen, setChroniclesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const chroniclesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openExplore() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setExploreOpen(true);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setExploreOpen(false), 120);
  }

  function openChronicles() {
    if (chroniclesCloseTimer.current) clearTimeout(chroniclesCloseTimer.current);
    setChroniclesOpen(true);
  }

  function scheduleChroniclesClose() {
    chroniclesCloseTimer.current = setTimeout(() => setChroniclesOpen(false), 120);
  }

  // Close everything after a link is chosen (matters most for the mobile menu)
  function closeAll() {
    setMenuOpen(false);
    setExploreOpen(false);
    setChroniclesOpen(false);
  }

  // Hover should only open dropdowns for a real mouse. On touch, a tap fires
  // "enter" and then "click", which would open and immediately re-close.
  const isMouse = (e: React.PointerEvent) => e.pointerType === "mouse";

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand-lockup" onClick={closeAll}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/outcrop-logo.png" alt="Outcrop Manor logo" className="brand-logo" />
          <span>
            <strong>Outcrop Manor</strong>
            <small>Make time together matter</small>
          </span>
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            {menuOpen ? (
              <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
        <nav id="site-nav" className={`site-nav${menuOpen ? " site-nav--open" : ""}`}>
          {/* Explore dropdown */}
          <div
            className="nav-dropdown-wrap"
            onPointerEnter={(e) => isMouse(e) && openExplore()}
            onPointerLeave={(e) => isMouse(e) && scheduleClose()}
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
                onPointerEnter={(e) => isMouse(e) && openExplore()}
                onPointerLeave={(e) => isMouse(e) && scheduleClose()}
              >
                <div className="nav-dropdown-section">
                  <p className="nav-dropdown-label">The Property</p>
                  {exploreLinks.slice(0, 4).map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="nav-dropdown-item"
                      onClick={closeAll}
                    >
                      <span className="nav-dropdown-item-name">{l.label}</span>
                      <span className="nav-dropdown-item-desc">{l.desc}</span>
                    </Link>
                  ))}
                </div>
                <div className="nav-dropdown-divider" />
                <div className="nav-dropdown-section">
                  <p className="nav-dropdown-label">Estate Rooms</p>
                  {exploreLinks.slice(4).map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="nav-dropdown-item"
                      onClick={closeAll}
                    >
                      <span className="nav-dropdown-item-name">{l.label}</span>
                      <span className="nav-dropdown-item-desc">{l.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/about" onClick={closeAll}>About</Link>

          {/* Blog dropdown with Outcrop Chronicles submenu */}
          <div
            className="nav-dropdown-wrap"
            onPointerEnter={(e) => isMouse(e) && openChronicles()}
            onPointerLeave={(e) => isMouse(e) && scheduleChroniclesClose()}
          >
            <button
              type="button"
              className="nav-dropdown-trigger"
              aria-expanded={chroniclesOpen}
              onClick={() => setChroniclesOpen((v) => !v)}
            >
              Blog
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                style={{
                  marginLeft: 4,
                  transform: chroniclesOpen ? "rotate(180deg)" : "none",
                  transition: "transform 160ms",
                }}
              >
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {chroniclesOpen && (
              <div
                className="nav-dropdown"
                onPointerEnter={(e) => isMouse(e) && openChronicles()}
                onPointerLeave={(e) => isMouse(e) && scheduleChroniclesClose()}
              >
                <div className="nav-dropdown-section">
                  <Link
                    href="/blog"
                    className="nav-dropdown-item"
                    onClick={closeAll}
                  >
                    <span className="nav-dropdown-item-name">Blog</span>
                    <span className="nav-dropdown-item-desc">Updates from the manor</span>
                  </Link>
                </div>
                <div className="nav-dropdown-divider" />
                <div className="nav-dropdown-section">
                  <Link
                    href="/outcrop-chronicles"
                    className="nav-dropdown-item"
                    onClick={closeAll}
                  >
                    <span className="nav-dropdown-item-name">Outcrop Chronicles</span>
                    <span className="nav-dropdown-item-desc">Lore and legends from the land</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/contact" onClick={closeAll}>Contact</Link>
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
