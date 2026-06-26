import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Knifomatic',
  description: 'Knifomatic Privacy Policy — Gooserocket Corp',
};

export default function Privacy() {
  return (
    <>
      <style>{css}</style>
      <header>
        <a href="/" style={{ textDecoration: 'none' }}>
          <div className="logo">
            <div className="logo-name">Knifo<span>matic</span></div>
            <div className="logo-by">by Gooserocket Corp</div>
          </div>
        </a>
        <nav>
          <a href="/#features">Features</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
          <a href="/privacy">Privacy</a>
          <a href="/support">Support</a>
        </nav>
      </header>

      <div className="page-hero">
        <h1>Privacy Policy</h1>
        <p>Last updated: June 22, 2026</p>
      </div>

      <div className="content">
        <div className="card">
          <h2>Overview</h2>
          <p>Knifomatic is operated by Gooserocket Corp. This policy explains what information we collect, how we use it, and your rights.</p>
        </div>

        <div className="card">
          <h2>Information We Collect</h2>
          <p>When you create an account, we collect your email address and a password (stored securely via Supabase Auth). We do not collect your name, phone number, or payment information.</p>
          <p>We store the collections and knives you create in order to sync them across your devices.</p>
          <p>We do not collect any analytics, advertising identifiers, or location data.</p>
        </div>

        <div className="card">
          <h2>How We Use Your Information</h2>
          <p>Your email is used solely to authenticate your account and to send password reset emails when requested. We do not send marketing emails.</p>
          <p>Your collection data is stored on secure servers to enable cross-device sync. We do not sell, share, or use your data for any purpose other than providing the app.</p>
        </div>

        <div className="card">
          <h2>Data Storage</h2>
          <p>Your data is stored on servers provided by Supabase, Inc. Data may be stored in the United States or the European Union. Supabase is SOC 2 compliant.</p>
        </div>

        <div className="card">
          <h2>Guest Users</h2>
          <p>You may use Knifomatic without creating an account. In this case, all data is stored locally on your device only and is not transmitted to our servers.</p>
        </div>

        <div className="card">
          <h2>Data Deletion</h2>
          <p>You may delete your account and all associated data at any time by contacting us at <a href="mailto:support@knifomatic.com">support@knifomatic.com</a>. We will process your request within 30 days.</p>
        </div>

        <div className="card">
          <h2>Children</h2>
          <p>Knifomatic is not directed at children under the age of 13. We do not knowingly collect personal information from children.</p>
        </div>

        <div className="card">
          <h2>Changes to This Policy</h2>
          <p>We may update this policy from time to time. Changes will be posted on this page with an updated date.</p>
          <p>Questions? Contact us at <a href="mailto:support@knifomatic.com">support@knifomatic.com</a></p>
        </div>
      </div>

      <footer>
        <div>© 2026 Gooserocket Corp. All rights reserved.</div>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/support">Support</a>
          <a href="mailto:support@knifomatic.com">Contact</a>
        </div>
      </footer>
    </>
  );
}

const css = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --black: #111111; --dark: #222222; --mid: #444444; --body: #333333;
    --accent: #b8860b; --bg: #f8f6f2; --card: #ffffff; --border: #e0dbd0; --radius: 10px;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    background: var(--bg); color: var(--body); font-size: 17px;
    line-height: 1.6; -webkit-font-smoothing: antialiased;
  }
  a { color: var(--accent); text-decoration: none; }
  a:hover { text-decoration: underline; }
  header {
    background: var(--black); padding: 18px 40px;
    display: flex; align-items: center; justify-content: space-between;
  }
  .logo { display: flex; flex-direction: column; line-height: 1.15; }
  .logo-name { font-size: 38px; font-weight: 800; color: #fff; letter-spacing: -.8px; }
  .logo-name span { color: var(--accent); }
  .logo-by { font-size: 16px; font-weight: 400; color: #888; letter-spacing: .2px; }
  nav a { color: #ccc; font-size: 15px; margin-left: 28px; font-weight: 500; }
  nav a:hover { color: #fff; text-decoration: none; }
  .page-hero {
    background: var(--black); color: #fff;
    padding: 48px 40px; border-bottom: 3px solid var(--accent);
  }
  .page-hero h1 { font-size: 38px; font-weight: 800; color: #fff; letter-spacing: -1px; margin-bottom: 8px; }
  .page-hero p { font-size: 16px; color: #aaa; }
  .content { max-width: 760px; margin: 0 auto; padding: 56px 40px; }
  .card {
    background: var(--card); border: 1px solid var(--border);
    border-radius: var(--radius); padding: 32px 36px; margin-bottom: 20px;
  }
  h2 { font-size: 22px; font-weight: 700; color: var(--black); margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid var(--border); }
  p { color: var(--body); margin-bottom: 12px; font-size: 16px; }
  p:last-child { margin-bottom: 0; }
  footer {
    background: var(--black); color: #888; text-align: center;
    padding: 28px 40px; font-size: 14px; border-top: 1px solid #333;
  }
  footer a { color: #aaa; }
  footer a:hover { color: #fff; }
  .footer-links { margin-top: 8px; }
  .footer-links a { margin: 0 12px; }
  @media (max-width: 600px) {
    header { padding: 16px 20px; } nav { display: none; }
    .page-hero { padding: 36px 24px; } .page-hero h1 { font-size: 28px; }
    .content { padding: 36px 24px; } .card { padding: 24px 20px; }
  }
`;
