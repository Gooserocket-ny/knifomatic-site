import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Knifomatic",
  description: "Knifomatic Privacy Policy — Gooserocket Corp.",
};

export default function Privacy() {
  return (
    <main className="main-doc">
      <article className="policy">
        <h1>Privacy Policy</h1>
        <div className="meta">
          <p className="product">Knifomatic</p>
          <p>Last updated: July 6, 2026</p>
          <p>Operator: Gooserocket Corp</p>
        </div>

        <p className="intro">This policy explains what Knifomatic (&quot;we&quot;, &quot;us&quot;) collects and how we use it.</p>

        <div className="policy-scroll">
          <h2>1. Data We Collect</h2>
          <ul>
            <li><strong>Account data:</strong> your email address (for sign-in, password reset, and account management). Passwords are stored hashed by our auth provider; we never see them.</li>
            <li><strong>Content you create:</strong> your collections, knives, specifications, notes, values, and photos you add. Photos you add are stored on your device; collection data is stored in your account so it syncs across your devices.</li>
            <li><strong>Technical data needed to run the service:</strong> basic logs from our providers, plus crash and error reports (which may include device model, OS version, and app version) sent to our diagnostics provider to help us fix problems.</li>
          </ul>
          <p>We do NOT collect location, contacts, advertising identifiers, or analytics, and we do not use third-party tracking or ads.</p>

          <h2>2. How We Use It</h2>
          <ul>
            <li>To provide the app: authentication, saving and syncing your collection, and sending transactional emails (e.g., password reset).</li>
            <li>To maintain security and prevent abuse.</li>
          </ul>
          <p>We do not sell your data or use it for advertising.</p>

          <h2>3. Community Content</h2>
          <p>If you submit content to the in-app Community feed (for example, video links), that content is visible to other users of the app.</p>

          <h2>4. Service Providers (Subprocessors)</h2>
          <ul>
            <li><strong>Supabase</strong> — authentication and database (stores your email and collection data); servers in the US or EU; SOC 2 compliant.</li>
            <li><strong>Cloudflare</strong> — image hosting and infrastructure/CDN.</li>
            <li><strong>Zoho Mail</strong> — sending transactional emails.</li>
            <li><strong>Sentry</strong> (Functional Software, Inc.) — crash and error diagnostics used to detect and fix problems in the app.</li>
            <li><strong>Apple App Store / Google Play</strong> — app distribution and, if you purchase an upgrade, payment processing (we never receive your card details).</li>
          </ul>

          <h2>5. Data Retention &amp; Deletion</h2>
          <p>You can delete your account in the app (Settings → Delete Account). Deletion is scheduled with a 14-day grace period, during which you can sign back in to restore it; after that, your account and its data are permanently erased. You may also request deletion at <a href="mailto:support@knifomatic.com">support@knifomatic.com</a>.</p>

          <h2>6. Guest Use</h2>
          <p>You can use the app as a guest without an account; in that case your data is stored locally on your device only.</p>

          <h2>7. Children</h2>
          <p>Knifomatic is not directed at children under 13 (or the minimum age in your country) and we do not knowingly collect their data.</p>

          <h2>8. Security</h2>
          <p>We use industry-standard measures (encrypted transport, hashed passwords, access controls). No method is 100% secure, but we work to protect your data.</p>

          <h2>9. Your Rights</h2>
          <p>Depending on your region (e.g., GDPR/CCPA), you may access, correct, or delete your data, or object to processing. Contact us to exercise these rights.</p>

          <h2>10. Changes</h2>
          <p>We may update this policy; the &quot;Last updated&quot; date will change. Material changes will be noted in the app or by email.</p>

          <h2>11. Contact</h2>
          <p><a href="mailto:support@knifomatic.com">support@knifomatic.com</a><br />Gooserocket Corp</p>
        </div>
      </article>
    </main>
  );
}
