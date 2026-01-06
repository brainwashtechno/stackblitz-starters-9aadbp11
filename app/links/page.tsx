const LINKS = [
  { label: "Tickets (AIDEN)", href: "https://shotgun.live/en/events/brainwash-presents-aiden" },
  { label: "Brainwash Shotgun page", href: "https://shotgun.live/en/venues/brainwash" },
  // Add Instagram, RA, SoundCloud, etc later
];

export default function LinksPage() {
  return (
    <main className="main">
      <section className="page">
        <h1 className="h1">Links</h1>
        <p className="muted">Everything in one place.</p>

        <div className="stack">
          {LINKS.map((l) => (
            <a key={l.href} className="linkCard" href={l.href} target="_blank" rel="noreferrer">
              <span>{l.label}</span>
              <span className="arrow">→</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
