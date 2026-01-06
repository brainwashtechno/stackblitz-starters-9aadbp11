const NEXT_EVENT = "https://shotgun.live/en/events/brainwash-presents-aiden";
const SHOTGUN_VENUE = "https://shotgun.live/en/venues/brainwash";

export default function EventsPage() {
  return (
    <main className="main">
      <section className="page">
        <h1 className="h1">Events</h1>
        <p className="muted">
          Tickets + official event info live on Shotgun.
        </p>

        <div className="grid">
          <div className="card">
            <div className="eyebrow">Current / Next</div>
            <h2 className="cardTitle">BRAINWASH presents: AIDEN</h2>
            <p className="cardMeta">Secret warehouse • Atlanta, GA</p>
            <div className="ctaRow">
              <a className="btn btnPrimary" href={NEXT_EVENT} target="_blank" rel="noreferrer">
                Tickets
              </a>
              <a className="btn btnGhost" href={SHOTGUN_VENUE} target="_blank" rel="noreferrer">
                Brainwash venue page
              </a>
            </div>
          </div>

          <div className="card">
            <div className="eyebrow">More events</div>
            <h2 className="cardTitle">All Brainwash listings</h2>
            <p className="cardMeta">
              This is the main page for the Brainwash Shotgun account.
            </p>
            <a className="btn" href={SHOTGUN_VENUE} target="_blank" rel="noreferrer">
              Open Shotgun venue →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
