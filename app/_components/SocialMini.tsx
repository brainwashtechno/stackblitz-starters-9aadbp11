import { SITE } from "../_data/site";

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4A5.8 5.8 0 0 1 16.2 22H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm8.4 2H7.8A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4ZM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6Zm6.3-.9a1.1 1.1 0 1 1-2.2 0a1.1 1.1 0 0 1 2.2 0Z"
      />
    </svg>
  );
}

function IconLink() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M10.6 13.4a1 1 0 0 1 0-1.4l3.6-3.6a1 1 0 1 1 1.4 1.4l-3.6 3.6a1 1 0 0 1-1.4 0Zm-1.9 5.5l-1.8 1.8a4.5 4.5 0 0 1-6.4-6.4l1.8-1.8a4.5 4.5 0 0 1 6.4 0a1 1 0 1 1-1.4 1.4a2.5 2.5 0 0 0-3.6 0L2 15.7a2.5 2.5 0 0 0 3.6 3.6l1.8-1.8a1 1 0 1 1 1.4 1.4ZM21.5 3.3a4.5 4.5 0 0 1 0 6.4l-1.8 1.8a4.5 4.5 0 0 1-6.4 0a1 1 0 1 1 1.4-1.4a2.5 2.5 0 0 0 3.6 0l1.8-1.8A2.5 2.5 0 0 0 18.5 4a2.5 2.5 0 0 0-1.8.7L14.9 6.5a1 1 0 1 1-1.4-1.4l1.8-1.8a4.5 4.5 0 0 1 6.4 0Z"
      />
    </svg>
  );
}

export function SocialMini() {
  return (
    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
      <a
        href={SITE.instagramUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        title="Instagram"
        style={{ opacity: 0.9 }}
      >
        <IconInstagram />
      </a>

      <a
        href={SITE.linktreeUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Linktree"
        title="Linktree"
        style={{ opacity: 0.9 }}
      >
        <IconLink />
      </a>
    </div>
  );
}
