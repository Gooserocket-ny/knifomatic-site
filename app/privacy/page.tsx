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
          Knifomatic keeps track of your knife collection. We collect as little as we can to make
          that work. We do not sell your data, show ads, or track you. The rules for using the app
          are in our <Link href="/terms">Terms of Service</Link>.
        </p>

        <h2>1. What We Collect</h2>
        <ul>
          <li>
            <strong>Your email address</strong> — for sign-in, password reset, and account
            management. Passwords are stored hashed; we never see them. If you sign in with Apple or
            Google, we get your email and a verified ID from them, never your password.
          </li>
          <li>
            <strong>Your collection</strong> — the collections, knives, specifications, notes, and
            values you enter. This is stored in your account so it syncs across your devices.
          </li>
          <li>
            <strong>Crash reports and basic logs</strong> — so we can find and fix problems. These
            may include your device model, OS version, and app version.
          </li>
        </ul>
        <p>
          We do not collect your location, contacts, advertising IDs, or usage analytics, and we use
          no third-party tracking.
        </p>

        <h2>2. Your Photos Stay on Your Device</h2>
        <p>
          Photos you add are saved only in the app&apos;s private storage on your phone. They are
          not uploaded, are not part of cloud sync, and we cannot see them.
        </p>
        <p>
          <strong>So photos are not backed up.</strong> If you reinstall the app, switch phones, or
          delete your account, your collection comes back but your photos do not. Keep your own
          copies of anything you would hate to lose. Photo backup is planned as part of a future
          optional subscription; we will update this policy and tell you in the app before any photo
          of yours is ever uploaded.
        </p>

        <h2>3. What We Use It For</h2>
        <p>
          To run the app: signing you in, saving and syncing your collection, sending emails you ask
          for (password reset, email verification), applying any edition you purchased, and keeping
          the service secure. That is all. We do not use your collection for anything else.
        </p>

        <h2>4. Who We Share It With</h2>
        <p>We use a few companies to run the service. They only handle what they need to:</p>
        <ul>
          <li>
            <strong>Supabase</strong> — sign-in and database (your email and collection).
          </li>
          <li>
            <strong>Cloudflare</strong> — hosting and delivery, including our own catalog photos.
            Your personal photos are never uploaded.
          </li>
          <li>
            <strong>Zoho Mail</strong> — sending account emails.
          </li>
          <li>
            <strong>Sentry</strong> — crash and error reports.
          </li>
          <li>
            <strong>RevenueCat</strong> — checking that a purchase is valid.
          </li>
          <li>
            <strong>Apple App Store and Google Play</strong> — distributing the app and taking
            payment. We never see your card details.
          </li>
        </ul>
        <p>
          We are based in the United States and these companies may process data in the US or
          Europe. We never sell or rent your data to anyone.
        </p>

        <h2>5. Your Rights</h2>
        <p>
          Wherever you live, you can ask us to show you your data, correct it, export it, or delete
          it, and you can object to how we use it. Write to{" "}
          <a href="mailto:support@knifomatic.com">support@knifomatic.com</a> and we will reply within
          30 days, free of charge.
        </p>

        <h2>6. Deleting Your Account</h2>
        <p>
          You can delete your account in the app: Settings → Delete Account. You then have 14 days to
          change your mind — sign back in and everything is restored. After 14 days your account and
          its data are erased for good and we cannot get them back. You can also ask us to delete it
          by email.
        </p>
        <p>
          We keep a record of purchases (what was bought and when) after deletion, because refunds
          can arrive later and we have to account for them. It is not tied to a usable account.
        </p>

        <h2>7. Children</h2>
        <p>
          Knifomatic is not for children under 13, or older where your country requires it. We do
          not knowingly collect their data. If you think a child has given us data, tell us and we
          will delete it.
        </p>

        <h2>8. Changes and Contact</h2>
        <p>
          If we change this policy, the date at the top changes, and we will tell you in the app or
          by email if the change matters. Questions go to{" "}
          <a href="mailto:support@knifomatic.com">support@knifomatic.com</a> — Gooserocket Corp, New
          York, USA.
        </p>
      </article>
    </main>
  );
}
