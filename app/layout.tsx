import "./globals.css";
import type { Metadata } from "next";
import Nav from "./_components/Nav";

export const metadata: Metadata = {
  title: "BRAINWASH ATL",
  description: "Underground techno collective from Atlanta.",
  metadataBase: new URL("https://brainwashtechno.vercel.app"),
  openGraph: {
    title: "BRAINWASH ATL",
    description: "Underground techno collective from Atlanta.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="bg" />
        <header className="header">
          <Nav />
        </header>
        {children}
        <footer className="footer">
          <div className="footerInner">
            <span>© {new Date().getFullYear()} BRAINWASH ATL</span>
            <span className="dot">•</span>
            <span>Built for the underground.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}

