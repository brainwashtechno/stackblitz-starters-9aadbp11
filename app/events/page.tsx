import { SITE } from "../_data/site";

export default function EventsPage() {
  return (
    <main className="container-max" style={{ padding: "40px 0 56px" }}>
      <h1 style={{ fontSize: 28, letterSpacing: 1, margin: 0 }}>Events</h1>
      <p style={{ opacity: 0.75, marginTop: 10, lineHeight: 1.6, maxWidth: 760 }}>
        Current event + official ticket links. We’ll add past events, media, and RSVP logic later.
      </p>

      <div className="glass" style={{ borderRadius: 22, padding: 22, marginTop: 18 }}>
        <div style={{ opacity: 0.6, letterSpacing: 3, fontSize: 11 }}>CURRENT</div>
        <div style={{ marginTop: 10, fontSize: 18, fontWeight: 900 }}>{SITE.currentEvent.title}</div>
        <div style={{ marginTop: 6, opacity: 0.75 }}>{SITE.currentEvent.locationLine}</div>
        <div style={{ marginTop: 10, opacity: 0.7 }}>{SITE.currentEvent.tagsLine}</div>

        <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
          <a
            href={SITE.currentEvent.url}
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "10px 14px",
              borderRadius: 999,
              textDecoration: "none",
              color: "rgba(255,255,255,0.92)",
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(0,0,0,0.18)",
            }}
          >
            Tickets →
          </a>

          <a
            href={SITE.shotgunVenueUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "10px 14px",
              borderRadius: 999,
              textDecoration: "none",
              color: "rgba(255,255,255,0.78)",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            Shotgun venue →
          </a>
        </div>
      </div>
    </main>
  );
}

