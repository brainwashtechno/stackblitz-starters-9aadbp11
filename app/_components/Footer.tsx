import { SITE } from "../_data/site";
import { SocialMini } from "./SocialMini";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: 48 }}>
      <div
        className="container-max"
        style={{
          padding: "22px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 14,
          flexWrap: "wrap",
        }}
      >
        <div style={{ fontSize: 12, opacity: 0.65 }}>
          © {new Date().getFullYear()} {SITE.name} {SITE.city} · Built for the underground.
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <a
            href={`mailto:${SITE.contactEmail}`}
            style={{ fontSize: 12, opacity: 0.7, textDecoration: "none", color: "rgba(255,255,255,0.85)" }}
          >
            {SITE.contactEmail}
          </a>
          <SocialMini />
        </div>
      </div>
    </footer>
  );
}
