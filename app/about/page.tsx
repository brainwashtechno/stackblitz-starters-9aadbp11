import { SITE } from "../_data/site";

export default function AboutPage() {
  return (
    <main className="container-max" style={{ padding: "40px 0 56px" }}>
      <h1 style={{ fontSize: 28, margin: 0 }}>About</h1>

      <div className="glass" style={{ borderRadius: 22, padding: 22, marginTop: 18, maxWidth: 900 }}>
        <p style={{ opacity: 0.82, lineHeight: 1.7, marginTop: 0 }}>
          <strong>{SITE.name}</strong> is an underground techno collective based in Atlanta.
          The focus is simple: sound system first, honest energy, and a space that feels like a real rave —
          not a content farm.
        </p>

        <p style={{ opacity: 0.75, lineHeight: 1.7 }}>
          We’ll expand this page with our ethos, rules, media, and archive. For now, use the Links tab
          to find tickets and socials quickly.
        </p>
      </div>
    </main>
  );
}
