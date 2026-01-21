import { SITE } from "../_data/site";

const LinkRow = ({ label, href }: { label: string; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="glass"
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "14px 16px",
      borderRadius: 16,
      textDecoration: "none",
      color: "rgba(255,255,255,0.9)",
      border: "1px solid rgba(255,255,255,0.10)",
    }}
  >
    <span style={{ fontWeight: 700 }}>{label}</span>
    <span style={{ opacity: 0.7 }}>→</span>
  </a>
);

export default function LinksPage() {
  return (
    <main className="container-max" style={{ padding: "40px 0 56px" }}>
      <h1 style={{ fontSize: 28, margin: 0 }}>Links</h1>
      <p style={{ opacity: 0.75, marginTop: 10 }}>
        Everything important in one place (easy to reach, not spammy).
      </p>

      <div style={{ display: "grid", gap: 12, marginTop: 18, maxWidth: 720 }}>
        <LinkRow label="Current tickets (KLOUD)" href={SITE.currentEvent.url} />
        <LinkRow label="Shotgun venue" href={SITE.shotgunVenueUrl} />
        <LinkRow label="Instagram" href={SITE.instagramUrl} />
        <LinkRow label="Linktree" href={SITE.linktreeUrl} />
      </div>
    </main>
  );
}
