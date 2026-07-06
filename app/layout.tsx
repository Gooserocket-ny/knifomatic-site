import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Knifomatic — Your Knife Collection. Engineered.",
  description:
    "Knifomatic is a knife-collection toolkit: catalog your knives, organize collections, browse the catalog, and sync across devices.",
};

function Header() {
  return (
    <header>
      <nav aria-label="Top navigation">
        <a href="/privacy">Privacy</a>
        <a href="/contact">Contact</a>
        <a href="/support">Support</a>
      </nav>
    </header>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="links">
        <a href="/privacy">Privacy Policy</a>
        <a href="mailto:support@knifomatic.com">support@knifomatic.com</a>
      </div>
      © {year} Gooserocket Corp · Knifomatic
    </footer>
  );
}

// Hidden gear used as the "O" in the wordmark (matches the app login screen).
function GearDefs() {
  const teeth = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <g id="gearO" fill="currentColor">
          {teeth.map((deg) => (
            <rect key={deg} x="-8" y="-50" width="16" height="22" rx="3" transform={`rotate(${deg})`} />
          ))}
          <circle r="33" fill="none" stroke="currentColor" strokeWidth="17" />
        </g>
      </defs>
    </svg>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="wrap">
          <Header />
          {children}
          <Footer />
        </div>
        <GearDefs />
      </body>
    </html>
  );
}
