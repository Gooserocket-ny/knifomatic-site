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
          Knifomatic helps you keep a record of your knife collection. We collect only what the app
          needs in order to work. We do not sell your data, we show no advertising, and we do not
          track you across other apps or websites. The rules for using the app are set out
          separately in our <Link href="/terms">Terms of Service</Link>.
        </p>

        <h2>1. Who Is Responsible for Your Data</h2>
        <p>
          Knifomatic is operated by Gooserocket Corp, a company based in New York, USA. Gooserocket
          Corp decides what data the app collects and why, and is the party responsible for it
          (the &quot;data controller&quot;, if you are in the EEA or the UK). You can reach us at any
          time at <a href="mailto:support@knifomatic.com">support@knifomatic.com</a>.
        </p>

        <h2>2. What We Collect</h2>
        <ul>
          <li>
            <strong>Account data.</strong> Your email address, used to sign you in, to reset your
            password, and to manage your account. Passwords are stored in hashed form by our
            authentication provider and are never visible to us. If you sign in with Apple or
            Google, we receive your email address and a verified identifier from them — never your
            password.
          </li>
          <li>
            <strong>The collection you build.</strong> Your collections, knives, specifications,
            notes, and the values you record. This is stored in your account so that it is available
            on each device where you sign in.
          </li>
          <li>
            <strong>Purchase and entitlement data.</strong> Which edition you bought, when, the
            store transaction identifier, whether it was later refunded, and an identifier linking
            that purchase to your account. We receive this from the app stores through RevenueCat.
            We never receive your payment card details.
          </li>
          <li>
            <strong>Community submissions.</strong> If you post to the Fresh Cuts feed, we store the
            video identifier, its title and channel, its publication date, the time you submitted
            it, and your account identifier, together with any moderation decision made about it.
          </li>
          <li>
            <strong>Technical and network data.</strong> Ordinary server and infrastructure logs
            generated when your device contacts our services, which include IP addresses and
            timestamps. These are produced automatically by our hosting and database providers as
            part of operating and securing the service.
          </li>
          <li>
            <strong>Diagnostic data.</strong> Crash and error reports, which may include your device
            model, operating system version, and app version. We have configured our diagnostics
            provider not to attach personally identifying information, and performance tracing and
            session replay are switched off.
          </li>
          <li>
            <strong>Support correspondence.</strong> If you email us, we keep your message, your
            email address, and our reply, so that we can deal with the matter and refer back to it.
          </li>
        </ul>
        <p>
          We do not collect your location, your contacts, or advertising identifiers, we do not
          build behavioural profiles, and we use no third-party advertising networks and no
          personalised advertising.
        </p>

        <h2>3. Your Photos Remain on Your Device</h2>
        <p>
          Photographs you attach to knives and collections are written to the app&apos;s private
          storage area on your device. They are not uploaded to our servers, they form no part of
          cloud sync, and we have no means of accessing them.
        </p>
        <p>
          <strong>The practical consequence is that your photos are not backed up.</strong> If you
          reinstall the app, move to a different device, or delete your account, your collection data
          is restored when you sign in again, but your photographs are not. Please keep your own
          copies of any images you would not want to lose.
        </p>
        <p>
          Photo backup is planned as part of a future optional subscription. Should that be
          introduced, we will update this policy and notify you in the app before any photograph of
          yours is uploaded anywhere.
        </p>

        <h2>4. Why We Use Your Data, and on What Basis</h2>
        <p>We use the data described above for the following purposes only:</p>
        <ul>
          <li>
            <strong>To provide the service you asked for</strong> — signing you in, storing and
            syncing your collection, sending you account emails such as password resets and email
            verification, and applying any edition you have purchased. Without this data the app
            cannot function, so we process it in order to perform our agreement with you.
          </li>
          <li>
            <strong>To keep the service working and secure</strong> — diagnosing crashes, preventing
            abuse, and enforcing our Terms of Service. We do this on the basis of our legitimate
            interest in running a reliable service, balanced against your privacy.
          </li>
          <li>
            <strong>To meet our obligations</strong> — retaining records of purchases where tax and
            consumer-protection rules require it.
          </li>
        </ul>
        <p>
          We do not use your collection data for any other purpose, and we make no automated
          decisions that produce legal or similarly significant effects for you.
        </p>

        <h2>5. Who Else Processes Your Data</h2>
        <p>
          We rely on a small number of service providers. These act on our instructions, handle only
          what their function requires, and are not permitted to use your data for their own
          purposes:
        </p>
        <ul>
          <li>
            <strong>Supabase</strong> — authentication and database hosting, holding your email
            address and collection data.
          </li>
          <li>
            <strong>Cloudflare</strong> — infrastructure and content delivery, including hosting for
            our own catalog reference photographs. Your personal photographs are never uploaded to
            it.
          </li>
          <li>
            <strong>Zoho Mail</strong> — delivery of account emails.
          </li>
          <li>
            <strong>Sentry</strong> — crash and error diagnostics.
          </li>
          <li>
            <strong>RevenueCat</strong> — validating in-app purchases and recording the edition an
            account is entitled to.
          </li>
        </ul>
        <p>
          <strong>Apple and Google are different.</strong> When you download the app or make a
          purchase, Apple and Google process your store account, device, and payment information for
          their own purposes as well as ours — running their stores, preventing fraud, and whatever
          else their own terms permit. They act independently of us there, not on our instructions,
          and their own privacy policies govern what they do. Your payment card details go to them
          and are never seen by us.
        </p>
        <p>
          We are based in the United States and our providers may process data in the United States
          or in Europe. Where data is transferred out of the EEA or the UK, we rely on the transfer
          safeguards offered by each provider, such as Standard Contractual Clauses. We never sell,
          rent, or trade your data, and we disclose it to anyone else only where the law obliges us
          to.
        </p>

        <h2>6. How Long We Keep It</h2>
        <p>
          Your account and collection data are kept for as long as your account exists. When you
          delete your account, deletion is scheduled with a 14-day grace period, during which signing
          back in restores everything. After that period your account and collection data are deleted
          from our active systems and we can no longer retrieve them for you.
        </p>
        <p>
          Two things outlive that deletion, and we would rather say so plainly than imply a clean
          erasure we cannot deliver:
        </p>
        <ul>
          <li>
            <strong>Encrypted backups.</strong> Our database provider takes routine backups for
            disaster recovery. Residual copies of deleted data may persist in those backups until
            they expire on their normal rotation, after which they are overwritten. We do not restore
            deleted accounts from backups.
          </li>
          <li>
            <strong>Limited records we are required to keep.</strong> Purchase history — what was
            bought, when, and whether it was refunded — is retained for tax, accounting, fraud
            prevention, and dispute resolution, because a refund can arrive long after an account is
            gone. These records are not linked to any usable account.
          </li>
        </ul>
        <p>
          Community submissions stop being visible in the feed 24 hours after posting, but the
          underlying record is retained after that so we can handle moderation, complaints, and
          repeat-infringement decisions. Diagnostic logs and crash reports are kept for up to 90 days
          and then discarded. Support correspondence is kept for up to two years.
        </p>

        <h2>7. Posts in the Community Feed Are Public</h2>
        <p>
          If you submit a video link to the in-app Fresh Cuts feed, that submission is visible to
          other users of the app for as long as it remains active, and it is subject to moderation by
          us. Please do not submit anything you would not wish to be seen publicly.
        </p>

        <h2>8. Using Knifomatic Without an Account</h2>
        <p>
          You may use the app as a guest. In that case the collection you build stays on your device
          and is not synced to our servers: we hold no copy of it, and it is not backed up, so it is
          lost permanently if you remove the app.
        </p>
        <p>
          Guest use is not entirely invisible to us, and we will not pretend otherwise. The app still
          contacts our services for things like the knife catalog, so the technical and diagnostic
          data described in section 2 — crash reports, and ordinary network logs including IP
          addresses — is still generated. It is not tied to any account, because there is none.
        </p>

        <h2>9. Security</h2>
        <p>
          We protect your data using encrypted connections, hashed passwords, and database access
          rules that prevent one account from reading another&apos;s data. No system can be
          guaranteed completely secure, but we take reasonable measures to keep yours safe and will
          tell you promptly if a breach affects you.
        </p>

        <h2>10. Your Rights over Your Data</h2>
        <p>
          Wherever you live, you may ask us to give you a copy of your data, correct it, export it,
          or delete it, and you may object to the way we use it or ask us to restrict that use. Write
          to <a href="mailto:support@knifomatic.com">support@knifomatic.com</a> and we will respond
          within 30 days, free of charge. We will never treat you differently for exercising these
          rights.
        </p>
        <p>
          If you are in the EEA or the UK and you believe we have handled your data improperly, you
          also have the right to complain to your national data protection authority. We would ask
          you to contact us first so that we have the chance to put it right.
        </p>

        <h2>11. Children</h2>
        <p>
          Knifomatic is not intended for children under 13, or under the higher minimum age that
          applies in your country. We do not knowingly collect data from them. If you believe a child
          has provided us with data, contact us and we will delete it.
        </p>

        <h2>12. Changes to This Policy, and How to Reach Us</h2>
        <p>
          If we change this policy, the date at the top of the page will change, and where the change
          is significant we will notify you in the app or by email. Continuing to use Knifomatic
          after a change means the updated policy applies to you.
        </p>
        <p>
          <a href="mailto:support@knifomatic.com">support@knifomatic.com</a>
          <br />
          Gooserocket Corp, New York, USA
        </p>
      </article>
    </main>
  );
}
