import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support — Knifomatic',
  description: 'Knifomatic Support — Get help with your knife collection app',
};

export default function Support() {
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
        <h1>Support</h1>
        <p>Need help with Knifomatic? We&apos;re here for you.</p>
      </div>

      <div className="content">
        <div className="card">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-item">
            <div className="faq-q">How do I reset my password?</div>
            <div className="faq-a">On the sign-in screen, tap &quot;Forgot password?&quot; and enter your email address. You will receive a reset link within a few minutes.</div>
          </div>

          <div className="faq-item">
            <div className="faq-q">My collections disappeared after reinstalling the app</div>
            <div className="faq-a">Make sure you are signed in with the same account you used before. Your data is synced to the cloud automatically when you log in — it may take a few seconds to appear.</div>
          </div>

          <div className="faq-item">
            <div className="faq-q">Can I use the app without an account?</div>
            <div className="faq-a">Yes. You can use Knifomatic as a guest. Your data will be stored locally on your device only and will not sync across devices.</div>
          </div>

          <div className="faq-item">
            <div className="faq-q">How do I add a knife to my collection?</div>
            <div className="faq-a">Browse the catalog, find the knife you own, and tap &quot;Add to Collection.&quot; You can also mark knives as Wishlist or For Sale from the same screen.</div>
          </div>

          <div className="faq-item">
            <div className="faq-q">How do I delete my account?</div>
            <div className="faq-a">Send us an email at <a href="mailto:support@knifomatic.com">support@knifomatic.com</a> and we will delete your account and all associated data within 30 days.</div>
          </div>
        </div>

        <div className="contact-box">
          <h2>Still need help?</h2>
          <p>We typically reply within 1–2 business days.</p>
          <a href="mailto:support@knifomatic.com" className="contact-btn">Email Support</a>
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
  h2 { font-size: 22px; font-weight: 700; color: var(--black); margin-bottom: 16px; padding-bottom: 10px; border-bottom: 1px solid var(--border); }
  p { color: var(--body); margin-bottom: 12px; font-size: 16px; }
  p:last-child { margin-bottom: 0; }
  .faq-item { margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid var(--border); }
  .faq-item:last-child { margin-bottom: 0; padding-bottom: 0; border-bottom: none; }
  .faq-q { font-size: 17px; font-weight: 700; color: var(--black); margin-bottom: 8px; }
  .faq-a { font-size: 16px; color: var(--body); }
  .contact-box {
    background: var(--black); border-radius: var(--radius);
    padding: 32px 36px; text-align: center;
  }
  .contact-box h2 { color: #fff; border-bottom-color: #333; }
  .contact-box p { color: #aaa; }
  .contact-btn {
    display: inline-block; margin-top: 20px;
    background: var(--accent); color: #fff;
    font-size: 16px; font-weight: 700; padding: 12px 32px;
    border-radius: 999px; letter-spacing: .2px;
  }
  .contact-btn:hover { background: #a07610; text-decoration: none; }
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
    .contact-box { padding: 24px 20px; }
  }
`;
