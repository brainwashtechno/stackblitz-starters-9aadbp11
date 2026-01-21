"use client";

import { useMemo, useState } from "react";
import { SITE } from "../_data/site";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [subject, setSubject] = useState("Booking / Inquiry");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const body = [
      `Name: ${name || "-"}`,
      `Email: ${fromEmail || "-"}`,
      "",
      message || "-",
    ].join("\n");

    const params = new URLSearchParams({
      subject: `[BRAINWASH] ${subject}`,
      body,
    });

    return `mailto:${SITE.contactEmail}?${params.toString()}`;
  }, [name, fromEmail, subject, message]);

  return (
    <main className="container-max" style={{ padding: "40px 0 56px" }}>
      <h1 style={{ fontSize: 28, margin: 0 }}>Contact</h1>
      <p style={{ opacity: 0.75, marginTop: 10 }}>
        This will open your email app and send the message to{" "}
        <a href={`mailto:${SITE.contactEmail}`} style={{ color: "rgba(255,255,255,0.92)" }}>
          {SITE.contactEmail}
        </a>
        .
      </p>

      <div className="glass" style={{ borderRadius: 22, padding: 22, marginTop: 18, maxWidth: 900 }}>
        <div style={{ display: "grid", gap: 12 }}>
          <div style={{ display: "grid", gap: 8 }}>
            <label style={{ fontSize: 12, opacity: 0.75 }}>Your name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              style={inputStyle}
            />
          </div>

          <div style={{ display: "grid", gap: 8 }}>
            <label style={{ fontSize: 12, opacity: 0.75 }}>Your email</label>
            <input
              value={fromEmail}
              onChange={(e) => setFromEmail(e.target.value)}
              placeholder="you@email.com"
              style={inputStyle}
            />
          </div>

          <div style={{ display: "grid", gap: 8 }}>
            <label style={{ fontSize: 12, opacity: 0.75 }}>Subject</label>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Booking / Inquiry"
              style={inputStyle}
            />
          </div>

          <div style={{ display: "grid", gap: 8 }}>
            <label style={{ fontSize: 12, opacity: 0.75 }}>Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message…"
              rows={7}
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
            <a
              href={mailtoHref}
              style={{
                padding: "10px 14px",
                borderRadius: 999,
                textDecoration: "none",
                color: "rgba(255,255,255,0.92)",
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(0,0,0,0.22)",
              }}
            >
              Send email →
            </a>

            <button
              type="button"
              onClick={async () => {
                await navigator.clipboard.writeText(SITE.contactEmail);
                alert("Email copied");
              }}
              style={{
                padding: "10px 14px",
                borderRadius: 999,
                color: "rgba(255,255,255,0.80)",
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(0,0,0,0.14)",
                cursor: "pointer",
              }}
            >
              Copy email
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: 14,
  padding: "12px 12px",
  border: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(0,0,0,0.22)",
  color: "rgba(255,255,255,0.92)",
  outline: "none",
};
