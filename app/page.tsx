import Link from "next/link";
import { SITE } from "./_data/site";

export default function HomePage() {
  return (
    <main className="container-max" style={{ padding: "44px 0 56px" }}>
      {/* HERO */}
      <section
        className="glass"
        style={{
          borderRadius: 28,
          padding: "34px 28px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 900,
            letterSpacing: 6,
            marginTop: 6,
          }}
        >
          {SITE.name}
        </div>
        <div style={{ opacity: 0.7, letterSpacing: 4, fontSize: 12, marginTop: 2 }}>
          {SITE.city}
        </div>

        <p style={{ maxWidth: 720, margin: "18px auto 0", opacity: 0.78, lineHeight: 1.6 }}>
          Underground techno collective from Atlanta. No influencers, no VIP section — just a dark room,
          heavy sound, and people who actually came to dance.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 18, flexWrap: "wrap" }}>
          <a
            href={SITE.currentEvent.url}
            target="_blank"
            rel="noreferrer"
            className="glass"
            style={{
              padding: "10px 14px",
              borderRadius: 999,
              textDecoration: "none",
              color: "rgba(255,255,255,0.92)",
              border: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            Get tickets
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
              background: "rgba(0,0,0,0.18)",
            }}
          >
            Shotgun page
          </a>
        </div>
      </section>

      {/* NEXT EVENT */}
      <section style={{ marginTop: 18 }}>
        <div className="glass" style={{ borderRadius: 24, padding: 22 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <div style={{ opacity: 0.6, letterSpacing: 3, fontSize: 11 }}>NEXT EVENT</div>
            <div
              style={{
                opacity: 0.75,
                fontSize: 11,
                letterSpacing: 1.5,
                border: "1px solid rgba(255,255,255,0.12)",
                padding: "6px 10px",
                borderRadius: 999,
              }}
            >
              {SITE.currentEvent.badge}
            </div>
          </div>

          <div style={{ marginTop: 10, fontSize: 14 }}>
            <span style={{ fontWeight: 800 }}>{SITE.name}</span> presents:{" "}
            <span style={{ fontWeight: 900 }}>{SITE.currentEvent.title.replace("BRAINWASH presents: ", "")}</span>
          </div>

          <div style={{ marginTop: 6, opacity: 0.75, fontSize: 13 }}>
            {SITE.currentEvent.locationLine}
          </div>

          <div style={{ marginTop: 10, opacity: 0.7, fontSize: 13 }}>
            {SITE.currentEvent.tagsLine}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16, flexWrap: "wrap", gap: 10 }}>
            <div style={{ opacity: 0.6, fontSize: 12 }}>
              <Link href="/events" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "none" }}>
                See events page →
              </Link>
              <span style={{ opacity: 0.5 }}> · </span>
              <Link href="/links" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "none" }}>
                All links →
              </Link>
            </div>

            <a
              href={SITE.currentEvent.url}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "10px 14px",
                borderRadius: 999,
                textDecoration: "none",
                color: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(0,0,0,0.22)",
              }}
            >
              Open ticket link →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
