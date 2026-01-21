import "./globals.css";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";

export const metadata = {
  title: "BRAINWASH ATL",
  description: "Underground techno collective from Atlanta.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, color: "rgba(255,255,255,0.92)" }}>
        <div className="noise-overlay" />
        <div className="bw-bg">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
