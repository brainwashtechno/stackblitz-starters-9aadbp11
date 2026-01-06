import Link from "next/link";

export default function NotFound() {
  return (
    <main className="main">
      <section className="page">
        <h1 className="h1">404</h1>
        <p className="muted">That page doesn’t exist.</p>
        <Link className="btn" href="/">Go home</Link>
      </section>
    </main>
  );
}
