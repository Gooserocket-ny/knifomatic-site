import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Knifomatic — Your Knife Collection. Engineered.",
  description:
    "Knifomatic is a knife-collection toolkit: catalog your knives, organize collections, browse the catalog, and sync across devices.",
};

// The gear that stands in for the "O" in the wordmark. Reused at two sizes, so
// it lives in <defs> once and is referenced with <use>.
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={className} role="img" aria-label="Knifomatic">
      <span aria-hidden="true">KNIF</span>
      <svg className="wm-gear" viewBox="-50 -50 100 100" aria-hidden="true">
        <use href="#gearO" />
      </svg>
      <span aria-hidden="true">MATIC</span>
    </span>
  );
}

function Header() {
  return (
    <header className="top">
      <Link className="brand" href="/" aria-label="Knifomatic — home">
        <Wordmark className="mark" />
        <span className="tag">v1.0</span>
      </Link>
      <nav aria-label="Top navigation">
        <Link href="/#features">Features</Link>
        <Link href="/#screens">Screens</Link>
        <Link href="/support">Support</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}

// Drafting title block: the sheet stamp that carries publisher, documents, and
// contact — the same information a footer would, in the drawing's own idiom.
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="titleblock">
      <div className="tb brandcell">
        <span className="k">Product</span>
        <span className="v">Knifomatic</span>
      </div>
      <div className="tb">
        <span className="k">Published by</span>
        <span className="v">
          Gooserocket Corp
          <br />© {year}
        </span>
      </div>
      <div className="tb">
        <span className="k">Documents</span>
        <span className="v">
          <Link href="/privacy">Privacy Policy</Link>
          <br />
          <Link href="/terms">Terms of Service</Link>
        </span>
      </div>
      <div className="tb">
        <span className="k">Contact</span>
        <span className="v">
          <Link href="/support">Support</Link>
          <br />
          <a href="mailto:support@knifomatic.com">support@knifomatic.com</a>
        </span>
      </div>
    </footer>
  );
}

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
