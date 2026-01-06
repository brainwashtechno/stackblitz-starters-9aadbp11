import Link from "next/link";

const NEXT_EVENT = "https://shotgun.live/en/events/brainwash-presents-aiden";
const SHOTGUN_VENUE = "https://shotgun.live/en/venues/brainwash";

export default function HomePage() {
  return (
    <main className="main">
      <section className="hero">
        {/* Logo placeholder (you’ll replace later) */}
        <div className="logoBox">
          <div className="logoText">BRAINWASH</div>
          <div className="logoSub">ATLANTA</div>
        </div>

        <p className="tagline">
          Underground techno collective from Atlanta. No influencers, no VIP section —
          just a dark room, heavy sound, and people who actually came to dance.
        </p>

        <div className="ctaRow">
          <a className="btn btnPrimary" href={NEXT_EVENT} target="_blank" rel="noreferrer">
            Get tickets
          </a>
          <a className="btn btnGhost" href={SHOTGUN_VENUE} target="_blank" rel="noreferrer">
            Shotgun page
          </a>
        </div>

        <div className="card">
          <div className="cardTop">
            <div>
              <div className="eyebrow">Next event</div>
              <h2 className="cardTitle">BRAINWASH presents: AIDEN</h2>
              <p className="cardMeta">
                Atlanta, GA — secret location (sent day of show)
              </p>
            </div>
            <div className="pill">LIMITED CAPACITY • WAREHOUSE</div>
          </div>

          <div className="cardBottom">
            <p className="muted">Hard techno • industrial • rave tools</p>
            <a className="btn btnSmall" href={NEXT_EVENT} target="_blank" rel="noreferrer">
              Open ticket link →
            </a>
          </div>
        </div>

        <div className="smallLinks">
          <Link className="smallLink" href="/events">See events page →</Link>
          <Link className="smallLink" href="/links">All links →</Link>
        </div>

        {/* NOTE: “Listen to us” removed from Home by request */}
      </section>
    </main>
  );
}
