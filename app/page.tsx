import { Slogan } from "./Slogan";
import { Wordmark } from "./layout";

// A screenshot slot. Until a real capture exists, it renders a labelled
// drafting placeholder at the exact device aspect ratio, so the layout is final
// and adding the image later is just passing `src`.
// Screenshots: portrait 1080 × 2340 (9:19.5), WebP, full device resolution.
function Figure({
  ref_,
  what,
  src,
  small = true,
}: {
  ref_: string;
  what: string;
  src?: string;
  small?: boolean;
}) {
  return (
    <div className={small ? "device sm" : "device"}>
      <div className="screen">
        {src ? (
          // Plain <img>: these are fixed-size static screenshots inside a frame
          // that already constrains them, so next/image's optimizer would add
          // Cloudflare cost for no benefit.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={`Knifomatic — ${what}`} />
        ) : (
          <>
            <span className="crosshair" aria-hidden="true">
              <span className="h" />
              <span className="v" />
            </span>
            <span className="fig">{ref_}</span>
            <span className="what">{what}</span>
            <span className="dim">1080 × 2340</span>
          </>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="hero">
        <div className="hero-copy">
          <div className="logo">
            <Wordmark className="wordmark" />
            <Slogan />
          </div>

          <h1>Every blade you own, measured and accounted for.</h1>
          <p className="sub">
            Catalog each knife with real specs, sort them into collections that match how you
            actually think about your gear, and keep it all synced across your devices.
          </p>

          <div className="cta">
            <a
              className="btn btn-primary"
              href="https://play.google.com/store/apps/details?id=com.gooserocket.knifomatic"
            >
              Get it on Google Play
            </a>
            <span className="btn btn-disabled" aria-disabled="true">
              Download on the App Store <span className="soon">Soon</span>
            </span>
          </div>

          <div className="hero-meta">
            <span>FREE TO USE</span>
            <span>NO DATA SELLING</span>
            <span>WORKS OFFLINE</span>
            <span>GUEST MODE</span>
          </div>
        </div>

        <div className="hero-figure">
          <div className="dimline" aria-hidden="true">
            <svg viewBox="0 0 52 520" preserveAspectRatio="none">
              <line x1="40" y1="4" x2="40" y2="516" />
              <line x1="30" y1="4" x2="50" y2="4" />
              <line x1="30" y1="516" x2="50" y2="516" />
              <path d="M40 4 L36 14 M40 4 L44 14" />
              <path d="M40 516 L36 506 M40 516 L44 506" />
            </svg>
          </div>
          <Figure ref_="FIG. 01" what="Home screen" src="/screens/home.webp" small={false} />
        </div>
      </div>

      {/* ── Screens ──────────────────────────────────────────────────────── */}
      <section className="sec" id="screens">
        <div className="sec-head">
          <div className="eyebrow">Sheet 02 — Interface</div>
          <h2>See it before you install it.</h2>
          <p>
            Four views that cover how the app is actually used day to day: your collections, the
            knives inside them, the built-in catalog, and a single knife written down properly.
          </p>
        </div>

        <div className="figs">
          <div className="fig-item">
            <Figure ref_="FIG. 02" what="Collections" src="/screens/collections.webp" />
            <div className="fig-cap">
              <span className="ref">FIG. 02</span>
              <span className="name">Collections</span>
              <span className="note">
                Shelves, tier lists, or a carry rotation — grouped the way you think about them.
              </span>
            </div>
          </div>

          <div className="fig-item">
            <Figure ref_="FIG. 03" what="Collection contents" src="/screens/collection-contents.webp" />
            <div className="fig-cap">
              <span className="ref">FIG. 03</span>
              <span className="name">Inside a collection</span>
              <span className="note">
                Every knife in a collection at a glance, with brand and steel on each row.
              </span>
            </div>
          </div>

          <div className="fig-item">
            <Figure ref_="FIG. 04" what="Catalog" src="/screens/catalog.webp" />
            <div className="fig-cap">
              <span className="ref">FIG. 04</span>
              <span className="name">Built-in catalog</span>
              <span className="note">
                Find the knife you own and add it with steel, dimensions, and photo already filled in.
              </span>
            </div>
          </div>

          <div className="fig-item">
            <Figure ref_="FIG. 05" what="Knife detail" src="/screens/knife-detail.webp" />
            <div className="fig-cap">
              <span className="ref">FIG. 05</span>
              <span className="name">Full spec sheet</span>
              <span className="note">
                Steel, handle, lock, length, weight — recorded per knife and ready to export.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <section className="sec" id="features">
        <div className="sec-head">
          <div className="eyebrow">Sheet 03 — Capabilities</div>
          <h2>Built for people who keep track.</h2>
        </div>

        <div className="grid">
          <div className="card">
            <svg className="ico" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="4" y="6" width="24" height="6" rx="1" />
              <rect x="4" y="14" width="24" height="6" rx="1" />
              <rect x="4" y="22" width="24" height="6" rx="1" />
              <path d="M8 9h3M8 17h3M8 25h3" />
            </svg>
            <h3><span className="idx">01</span>Collections</h3>
            <p>
              Organize your blades your way — plain shelves, ranked tier lists, or a daily-rotation
              set. Build as many as you need and reorder them in a tap.
            </p>
          </div>

          <div className="card">
            <svg className="ico" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M16 9 C12.5 6.5 8 6.5 4.5 7.8 L4.5 25 C8 23.7 12.5 23.7 16 26" />
              <path d="M16 9 C19.5 6.5 24 6.5 27.5 7.8 L27.5 25 C24 23.7 19.5 23.7 16 26" />
              <path d="M16 9 L16 26" />
            </svg>
            <h3><span className="idx">02</span>Built-in catalog</h3>
            <p>
              Start from a curated library of popular knives with steel, dimensions, and photos
              already filled in — instead of typing every spec by hand.
            </p>
          </div>

          <div className="card">
            <svg className="ico" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M27 16a11 11 0 1 1-3.6-8.1" />
              <path d="M27 5v6h-6" />
              <circle cx="16" cy="16" r="2.4" />
            </svg>
            <h3><span className="idx">03</span>Daily rotation</h3>
            <p>
              Knifomatic features a different knife on your home screen every day — a fresh reason
              to appreciate pieces you don&apos;t carry as often.
            </p>
          </div>

          <div className="card">
            <svg className="ico" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 12 L20 12 L26 16 L20 20 L6 20 Z" />
              <path d="M6 8 L6 5 M26 8 L26 5" />
              <path d="M6 6.5 L26 6.5" />
              <path d="M11 24 L11 27 M21 24 L21 27" />
            </svg>
            <h3><span className="idx">04</span>Full specs</h3>
            <p>
              Record blade steel, handle material, lock type, length, and weight for every knife.
              Export a clean spec sheet to share, insure, or file away.
            </p>
          </div>

          <div className="card">
            <svg className="ico" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="16" cy="16" r="11" />
              <path d="M16 5 A11 11 0 0 1 16 27 Z" fill="currentColor" stroke="none" opacity=".55" />
            </svg>
            <h3><span className="idx">05</span>Themes</h3>
            <p>
              Switch between the signature blueprint look and a clean simple theme, then pick your
              own accent color to make the app feel like yours.
            </p>
          </div>

          <div className="card">
            <svg className="ico" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 21a5 5 0 0 1 .6-9.96 7 7 0 0 1 13.2 2.1A4.5 4.5 0 0 1 22.5 21z" />
              <path d="M13 25.5h6" />
              <path d="M15 23.5 L13 25.5 L15 27.5" />
            </svg>
            <h3><span className="idx">06</span>Cloud sync</h3>
            <p>
              Your collections, knives, and specs back up to your account and sync across devices.
              Sign in on a new phone and your catalog is already there. Photos stay on the device
              that added them.
            </p>
          </div>
        </div>
      </section>

      {/* ── Themes ───────────────────────────────────────────────────────── */}
      <section className="sec" id="themes">
        <div className="sec-head">
          <div className="eyebrow">Sheet 04 — Editions</div>
          <h2>Free to use. Bigger if you need bigger.</h2>
          <p>
            Knifomatic costs nothing and stays useful that way. If your collection outgrows the
            starting limits, an edition raises them — once, permanently, with nothing recurring to
            cancel.
          </p>
        </div>

        <div className="editions">
          <div className="edition">
            <div className="ed-head">
              <span className="ed-rank">01</span>
              <h3>Starter Edition</h3>
            </div>
            <p className="ed-note">Where every account starts. Free, no purchase, all core features.</p>
            <div className="ed-spec">
              <div className="row"><span className="k">Knives</span><span className="v">100</span></div>
              <div className="row"><span className="k">Photos each</span><span className="v">1</span></div>
            </div>
          </div>

          <div className="edition">
            <div className="ed-head">
              <span className="ed-rank">02</span>
              <h3>Enthusiast Edition</h3>
            </div>
            <p className="ed-note">A one-time step up in room for a collection that keeps growing.</p>
            <div className="ed-spec">
              <div className="row"><span className="k">Knives</span><span className="v">300</span></div>
              <div className="row"><span className="k">Photos each</span><span className="v">3</span></div>
            </div>
          </div>

          <div className="edition">
            <div className="ed-head">
              <span className="ed-rank">03</span>
              <h3>Collector Edition</h3>
            </div>
            <p className="ed-note">The most room there is, for a serious collection.</p>
            <div className="ed-spec">
              <div className="row"><span className="k">Knives</span><span className="v">3,000</span></div>
              <div className="row"><span className="k">Photos each</span><span className="v">6</span></div>
            </div>
          </div>
        </div>

        <div className="ed-terms">
          <p>
            <strong>One-time purchases, not subscriptions.</strong> Nothing renews, nothing lapses,
            and there is nothing to remember to cancel. Moving up replaces the edition below rather
            than stacking on top of it.
          </p>
          <p>
            <strong>What you buy stays bought.</strong> We will not reduce the limits of an edition
            you already own. They can go up — and if they do, you get the increase — but they will
            not go down.
          </p>
          <p>
            Prices are set by the App Store and Google Play in your own currency, and are shown in
            the app before you buy. Guests can use Knifomatic without an account at all, with lower
            limits and no sync.
          </p>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────────────── */}
      <section className="sec" id="about">
        <div className="sec-head">
          <div className="eyebrow">Sheet 05 — Who builds this</div>
          <h2>Gooserocket Corp</h2>
        </div>

        <div className="about">
          <div>
            <p>
              <strong>Knifomatic</strong> is developed and published by Gooserocket Corp, a mobile
              software company based in New York.
            </p>
            <p>
              We build focused, practical apps for enthusiast communities. Knifomatic is our first
              product in the collector tools space — designed to be fast, simple, and respectful of
              your privacy.
            </p>
            <p>
              Our goal is to give collectors a tool that works the way they think: organized by what
              you own, what you want, and what you&apos;re selling.
            </p>
          </div>

          <div className="spec-table">
            <div className="row"><span className="k">Publisher</span><span className="v">Gooserocket Corp</span></div>
            <div className="row"><span className="k">Based in</span><span className="v">New York, USA</span></div>
            <div className="row"><span className="k">Platforms</span><span className="v">Android · iOS soon</span></div>
            <div className="row"><span className="k">Price</span><span className="v">Free</span></div>
            <div className="row"><span className="k">Ads</span><span className="v">Non-personalized</span></div>
            <div className="row"><span className="k">Data selling</span><span className="v">None</span></div>
          </div>
        </div>
      </section>
    </main>
  );
}
