import { Slogan } from "./Slogan";

export default function Home() {
  return (
    <main className="main-home">
      <section className="hero">
        <div className="logo">
          <div className="wordmark">
            KNIF
            <svg className="wm-gear" viewBox="-50 -50 100 100" aria-hidden="true">
              <use href="#gearO" />
            </svg>
            MATIC
          </div>
          <Slogan />
        </div>
        <p className="sub">
          A precision toolkit for knife enthusiasts — catalog every blade, organize your collections, and sync across devices.
        </p>
        <div className="cta">
          <a className="btn btn-primary" href="https://play.google.com/store/apps/details?id=com.gooserocket.knifomatic">Get it on Google Play</a>
          <a className="btn btn-ghost" href="#">Download on the App Store</a>
        </div>
      </section>

      <section className="features">
        <div className="grid">
          <div className="card">
            <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
            <h3>Collections</h3>
            <p>Organize your blades your way — plain shelves, ranked tier lists, or a daily-rotation set. Build as many collections as you need and reorder them in a tap.</p>
          </div>
          <div className="card">
            <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5h18v14H3zM3 9h18" /></svg>
            <h3>Built-in Catalog</h3>
            <p>Start from a curated library of popular knives with steel, dimensions, and photos already filled in. Add one to your collection instead of typing every spec by hand.</p>
          </div>
          <div className="card">
            <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5" /></svg>
            <h3>Daily Rotation</h3>
            <p>Let Knifomatic feature a different knife on your home screen every day — a fresh reason to appreciate pieces you don&apos;t carry as often.</p>
          </div>
          <div className="card">
            <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M6 8h12M6 16h12" /></svg>
            <h3>Full Specs</h3>
            <p>Record blade steel, handle material, lock type, length, and weight for every knife. Export a clean spec sheet to share, insure, or keep for your records.</p>
          </div>
          <div className="card">
            <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a9 9 0 0 0 0 18 4 4 0 0 0 0-8 3 3 0 0 1 0-6z" /></svg>
            <h3>Themes</h3>
            <p>Switch between the signature blueprint look and a clean simple theme, then pick your own accent color to make the app feel like yours.</p>
          </div>
          <div className="card">
            <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12a8 8 0 0 1 14-5M20 12a8 8 0 0 1-14 5M17 4v3h-3M7 20v-3h3" /></svg>
            <h3>Cloud Sync</h3>
            <p>Back up your collection and photos to the cloud and keep every device in sync. Switch phones or reinstall — your whole catalog comes right back.</p>
          </div>
        </div>
        <div className="about-note">
          <p><strong>Knifomatic</strong> is developed and published by Gooserocket Corp, a mobile software company based in New York.</p>
          <p>We build focused, practical apps for enthusiast communities. Knifomatic is our first product in the collector tools space — designed to be fast, simple, and respectful of your privacy.</p>
          <p>Our goal is to give collectors a tool that works the way they think: organized by what you own, what you want, and what you&apos;re selling.</p>
        </div>
      </section>
    </main>
  );
}
