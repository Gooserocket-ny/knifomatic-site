import type { Metadata } from "next";
import Link from "next/link";

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
          <p>Last updated: July 18, 2026</p>
          <p>Operator: Gooserocket Corp</p>
        </div>

        <p className="intro">
          This policy explains what Knifomatic (&quot;we&quot;, &quot;us&quot;) collects and how we
          use it. The rules for using the app are in our <Link href="/terms">Terms of Service</Link>.
        </p>

        <h2>1. Data We Collect</h2>
        <ul>
          <li>
            <strong>Account data:</strong> your email address (for sign-in, password reset, and
            account management). Passwords are stored hashed by our auth provider; we never see
            them. If you sign in with Apple or Google, we receive a verified identifier and your
            email address from them — never your password.
          </li>
          <li>
            <strong>Collection data:</strong> your collections, knives, specifications, notes, and
            recorded values. This is stored in your account so it syncs across your devices.
          </li>
          <li>
            <strong>Technical data needed to run the service:</strong> basic logs from our
            providers, plus crash and error reports (which may include device model, OS version,
            and app version) sent to our diagnostics provider to help us fix problems.
          </li>
        </ul>
        <p>
          We do NOT collect location, contacts, advertising identifiers, or analytics, and we do not
          use third-party tracking or ads.
        </p>

        <h2>2. Photos Stay on Your Device</h2>
        <p>
          Photos you add to your knives and collections are stored only in the app&apos;s private
          storage on your device. They are not currently uploaded to our servers, are not part of
          cloud sync, and we have no access to them.
        </p>
        <p>
          <strong>This means photos are not backed up today.</strong> If you uninstall the app,
          switch to a new device, or delete your account, your collection data returns when you sign
          back in but your photos do not. Keep your own copies of anything you would not want to
          lose.
        </p>
        <p>
          Photo backup is planned as part of a future optional subscription. We will update this
          policy, and tell you in the app, before any photo of yours is uploaded anywhere.
        </p>

        <h2>3. How We Use It</h2>
        <ul>
          <li>
            To provide the app: authentication, saving and syncing your collection, and sending
            transactional emails (e.g., password reset and email verification).
          </li>
          <li>To process and validate purchases, and to apply the account edition you bought.</li>
          <li>To maintain security, enforce our Terms, and prevent abuse.</li>
        </ul>
        <p>We do not sell your data or use it for advertising.</p>

        <h2>4. Legal Bases (EEA/UK)</h2>
        <p>
          Where the GDPR applies, we rely on: <strong>performance of a contract</strong> for account
          data and collection data (we cannot run the service without them);{" "}
          <strong>legitimate interests</strong> for security, abuse prevention, and crash
          diagnostics; and <strong>legal obligation</strong> where we must retain purchase records.
          Community submissions are published on your own initiative.
        </p>

        <h2>5. Community Content</h2>
        <p>
          If you submit content to the in-app Fresh Cuts feed (for example, video links), that
          content is visible to other users of the app while it is active, and is subject to
          moderation. Do not submit anything you would not want to be public.
        </p>

        <h2>6. Guest Use</h2>
        <p>
          You can use the app as a guest without an account. In that case your data stays on your
          device and is never sent to us — we hold no record of guest usage at all. Guest data is
          not backed up and is lost if the app is removed.
        </p>

        <h2>7. Service Providers (Subprocessors)</h2>
        <ul>
          <li>
            <strong>Supabase</strong> — authentication and database (stores your email and
            collection data); servers in the US or EU; SOC 2 compliant.
          </li>
          <li>
            <strong>Cloudflare</strong> — infrastructure and CDN, including hosting for our own
            catalog reference photos. Your personal photos are never uploaded (see section 2).
          </li>
          <li>
            <strong>Zoho Mail</strong> — sending transactional emails.
          </li>
          <li>
            <strong>Sentry</strong> (Functional Software, Inc.) — crash and error diagnostics used
            to detect and fix problems in the app.
          </li>
          <li>
            <strong>RevenueCat</strong> — validating in-app purchases and recording which edition an
            account is entitled to.
          </li>
          <li>
            <strong>Apple App Store / Google Play</strong> — app distribution and payment processing
            (we never receive your card details).
          </li>
        </ul>

        <h2>8. International Transfers</h2>
        <p>
          We are based in the United States and our providers may process data in the US or the EU.
          Where data is transferred out of the EEA or UK, our providers rely on Standard Contractual
          Clauses or an equivalent approved mechanism.
        </p>

        <h2>9. Data Retention &amp; Deletion</h2>
        <p>
          You can delete your account in the app (Settings → Delete Account). Deletion is scheduled
          with a 14-day grace period, during which you can sign back in to restore it; after that,
          your account and its data are permanently erased. You may also request deletion at{" "}
          <a href="mailto:support@knifomatic.com">support@knifomatic.com</a>.
        </p>
        <p>
          Purchase records (which product was bought, when, and whether it was refunded) are kept
          after deletion because we are required to retain transaction history and because refunds
          can arrive after an account is gone. These records are not linked to a usable account.
        </p>

        <h2>10. Children</h2>
        <p>
          Knifomatic is not directed at children under 13 (or the minimum age in your country) and we
          do not knowingly collect their data. If you believe a child has given us data, contact us
          and we will delete it.
        </p>

        <h2>11. Security</h2>
        <p>
          We use industry-standard measures (encrypted transport, hashed passwords, row-level access
          controls so one account cannot read another&apos;s data). No method is 100% secure, but we
          work to protect your data.
        </p>

        <h2>12. Your Rights</h2>
        <p>
          Depending on your region (e.g., GDPR/CCPA), you may access, correct, delete, or export your
          data, or object to processing. Contact us to exercise these rights; we respond within 30
          days. We do not sell or share personal information as those terms are defined under the
          CCPA.
        </p>

        <h2>13. Changes</h2>
        <p>
          We may update this policy; the &quot;Last updated&quot; date will change. Material changes
          will be noted in the app or by email.
        </p>

        <h2>14. Contact</h2>
        <p>
          <a href="mailto:support@knifomatic.com">support@knifomatic.com</a>
          <br />
          Gooserocket Corp, New York, USA
        </p>
      </article>
    </main>
  );
}
