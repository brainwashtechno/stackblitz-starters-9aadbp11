import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/links", label: "Links" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <div className="nav">
      <Link className="brand" href="/">
        BRAINWASH
      </Link>

      <nav className="navLinks">
        {nav.map((item) => (
          <Link key={item.href} className="navLink" href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
