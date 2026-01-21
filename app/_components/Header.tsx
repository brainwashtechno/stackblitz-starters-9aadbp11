import Link from "next/link";
import { SocialMini } from "./SocialMini";
import { SITE } from "../_data/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/links", label: "Links" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div
        className="container-max"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 0",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link href="/" style={{ textDecoration: "none", color: "rgba(255,255,255,0.92)" }}>
            <div style={{ fontWeight: 700, letterSpacing: 2, fontSize: 14 }}>
              {SITE.name}
            </div>
          </Link>

          <div style={{ opacity: 0.6, fontSize: 12, letterSpacing: 2 }}>
            {SITE.city}
          </div>
        </div>

        <nav style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {nav.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                style={{
                  textDecoration: "none",
                  color: "rgba(255,255,255,0.78)",
                  fontSize: 13,
                }}
              >
                {i.label}
              </Link>
            ))}
          </div>

          {/* small + reachable socials */}
          <SocialMini />
        </nav>
      </div>
    </header>
  );
}
