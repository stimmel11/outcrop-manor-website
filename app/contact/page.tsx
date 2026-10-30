"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
    innerCircle: false,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const target = e.target;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;
    setForm((f) => ({ ...f, [target.name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire to an API route or Resend / Formspree
    console.log("Contact form submitted:", form);
    setSubmitted(true);
  }

  return (
    <>
      <section className="page-hero">
        <h1>The Inner Circle</h1>
        <p>
          Get in touch, ask a question about the property, or join our small
          list of people who hear about Outcrop first.
        </p>
      </section>

      <section className="contact-section">
        {/* ── Left: contact info ──────────────────────────────────────── */}
        <div className="contact-info">
          <h2>Let&apos;s talk</h2>
          <p>
            We&apos;re happy to answer any question about Outcrop Manor, whether
            you&apos;re ready to book or just exploring the idea. Reach out by
            phone, email, or fill out the form.
          </p>

          <div className="contact-detail">
            <span style={{ fontSize: 18 }}>📞</span>
            <a href="tel:7202094800" style={{ textDecoration: "none" }}>
              (720) 209-4800
            </a>
          </div>
          <div className="contact-detail">
            <span style={{ fontSize: 18 }}>✉️</span>
            <a href="mailto:melissarmcginness@gmail.com" style={{ textDecoration: "none" }}>
              melissarmcginness@gmail.com
            </a>
          </div>
          <div className="contact-detail">
            <span style={{ fontSize: 18 }}>📍</span>
            <span>Byers, Colorado · ~30 min from Denver</span>
          </div>

          <div
            style={{
              marginTop: 40,
              background: "var(--sky-pale)",
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
                marginBottom: 10,
              }}
            >
              The Inner Circle
            </strong>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--forest-soft)", margin: "0 0 0" }}>
              Check the box on the form to join our small list. You&apos;ll hear
              about new dates before they open to the public, and occasionally
              about what we&apos;re working on at the property.
            </p>
          </div>
        </div>

        {/* ── Right: form ───────────────────────────────────────────── */}
        <div>
          {submitted ? (
            <div
              style={{
                background: "var(--paper)",
                border: "1px solid var(--line)",
                borderRadius: 24,
                padding: 36,
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 28,
                  fontWeight: 400,
                  margin: "0 0 12px",
                }}
              >
                Message sent ✓
              </p>
              <p style={{ color: "var(--forest-soft)", fontSize: 15 }}>
                We&apos;ll be in touch soon. Thank you for reaching out!
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px" }}>
                <div>
                  <label htmlFor="name">Your name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <label htmlFor="phone">Phone *</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="(303) 555-0100"
              />

              <label htmlFor="interest">What are you interested in?</label>
              <select
                id="interest"
                name="interest"
                value={form.interest}
                onChange={handleChange}
              >
                <option value="">Select one…</option>
                <option value="booking">Booking a retreat</option>
                <option value="wedding">Wedding or ceremony</option>
                <option value="corporate">Corporate offsite</option>
                <option value="wellness">Wellness or yoga retreat</option>
                <option value="family">Family reunion or celebration</option>
                <option value="info">General information</option>
                <option value="other">Something else</option>
              </select>

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your group, your dates, what you're hoping to do…"
              />

              <label
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  cursor: "pointer",
                  marginBottom: 24,
                  fontSize: 13,
                }}
              >
                <input
                  type="checkbox"
                  name="innerCircle"
                  checked={form.innerCircle}
                  onChange={handleChange}
                  style={{ marginTop: 2, width: "auto" }}
                />
                <span style={{ color: "var(--forest-soft)" }}>
                  Add me to the Inner Circle. I want early access to new retreat dates and Outcrop updates.
                </span>
              </label>

              <button type="submit" className="btn-primary" style={{ width: "100%", minHeight: 52 }}>
                Send message
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
