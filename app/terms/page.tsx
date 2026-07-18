import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Knifomatic",
  description: "Knifomatic Terms of Service — Gooserocket Corp.",
};

export default function Terms() {
  return (
    <main className="main-doc">
      <article className="policy">
        <h1>Terms of Service</h1>
        <div className="meta">
          <p className="product">Knifomatic</p>
          <p>Last updated: July 18, 2026</p>
          <p>Operator: Gooserocket Corp</p>
        </div>

        <p className="intro">
          These terms are the agreement between you and Gooserocket Corp for using Knifomatic. How
          we handle your data is covered separately in our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>

        <h2>1. Accepting These Terms</h2>
        <p>
          By creating an account or using Knifomatic, you agree to these terms. If you do not agree,
          do not use the app.
        </p>

        <h2>2. Who May Use Knifomatic</h2>
        <p>
          You must be at least 13 years old, or the minimum age required in your country, whichever
          is higher. If you are under the age of majority where you live, you may use Knifomatic
          only with the involvement of a parent or guardian.
        </p>
        <p>
          Knifomatic is a record-keeping tool for knife collectors. It does not sell knives and is
          not involved in any transaction between you and any seller. You are responsible for
          complying with the laws that apply to you regarding owning, carrying, and transporting
          knives — these vary widely by country, state, and city.
        </p>

        <h2>3. Your Account</h2>
        <p>
          Keep your sign-in details secure and do not share your account. You are responsible for
          activity that happens under it. Tell us promptly at{" "}
          <a href="mailto:support@knifomatic.com">support@knifomatic.com</a> if you believe your
          account has been used without your permission.
        </p>
        <p>
          Some actions — including purchases — require a verified email address. You can use the app
          before verifying, but we may ask you to verify to unlock those actions.
        </p>

        <h2>4. Guest Use</h2>
        <p>
          You can use Knifomatic as a guest without an account. Guest data is stored only on your
          device: it does not sync, is not backed up by us, and is lost if you remove the app. Guest
          accounts have lower limits than signed-in accounts.
        </p>

        <h2>5. Your Content</h2>
        <p>
          Your collections, knives, notes, values, and photos are yours. We do not claim ownership.
        </p>
        <p>
          To run the service we need permission to store and process the collection data you sync so
          we can show it back to you on your devices. That permission is limited to operating
          Knifomatic and ends when you delete the content or your account. We do not use your
          collection data for anything else, and your photos never leave your device at all.
        </p>
        <p>
          You are responsible for what you put in the app, and for having the right to use any
          material you add.
        </p>

        <h2>6. Photos Are Not Backed Up</h2>
        <p>
          Photos you add are stored only on your device and are not currently part of cloud sync. If
          you uninstall the app, move to a new device, or delete your account, your collection data
          returns when you sign back in but{" "}
          <strong>your photos will be gone and cannot be recovered by us</strong>. Keep your own
          copies of any images that matter to you.
        </p>
        <p>
          Photo backup is planned as part of a future optional subscription, separate from the
          editions described below. Until that exists and you subscribe to it, treat your photos as
          living on one device only.
        </p>

        <h2>7. Community Feed (Fresh Cuts)</h2>
        <p>
          Fresh Cuts is a shared feed for knife-related video links. Submissions are public to other
          users while active, and are governed by the Fresh Cuts Posting Rules &amp; Terms shown in
          the app before your first post. In short: posts stay active for a limited time, each
          account may have a small number of active posts, content must be knife-related, and we may
          review, remove, or limit anything that breaks the rules — without prior notice. Repeated
          or serious violations can cost you access to posting.
        </p>
        <p>
          By submitting a link you confirm you have the right to share it and that it complies with
          those rules.
        </p>

        <h2>8. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>break the law, infringe anyone&apos;s rights, or help others do either;</li>
          <li>harass, threaten, or abuse other users;</li>
          <li>
            attempt to access accounts, data, or systems that are not yours, or probe or interfere
            with the security of the service;
          </li>
          <li>
            scrape, bulk-download, or redistribute our catalog data, or use the service to build a
            competing dataset;
          </li>
          <li>
            reverse engineer, decompile, or tamper with the app except where the law expressly
            permits it;
          </li>
          <li>use automated systems to overload or disrupt the service.</li>
        </ul>

        <h2>9. Catalog Information</h2>
        <p>
          Our built-in catalog is provided as a convenience and is compiled from public sources. We
          make no promise that specifications, dimensions, materials, or photos are accurate,
          complete, or current. Verify anything that matters with the manufacturer before relying on
          it — particularly for purchase, insurance, legal, or safety decisions.
        </p>

        <h2>10. Recorded Values Are Not Appraisals</h2>
        <p>
          Any value you record, and any total the app calculates from those values, is your own
          bookkeeping. It is not an appraisal, valuation, or insurance document, and we make no
          representation about what any item is worth. Do not present it as a professional
          valuation.
        </p>

        <h2>11. Editions and Purchases</h2>
        <p>
          Knifomatic is free to use. Optional paid editions raise how many knives you can keep in
          one account and how many photos you can attach to each knife. The current limits for each
          edition are shown in the app and may change over time; where they change, we intend it to
          be in your favour.
        </p>
        <p>
          Editions are one-time purchases, not subscriptions. There is nothing to cancel and nothing
          recurring. Upgrading to a higher edition replaces the lower one rather than stacking.
        </p>
        <p>
          We may separately offer optional subscriptions for ongoing services, such as photo backup.
          Those are distinct from editions: an edition you own stays yours whether or not you
          subscribe to anything, and cancelling a subscription never reduces your edition.
        </p>
        <p>
          Purchases are made through the App Store or Google Play. They set the price, currency,
          taxes, and payment method, and their terms apply to the transaction. We never receive your
          card details.
        </p>

        <h2>12. Refunds</h2>
        <p>
          Refunds are handled by whichever store you purchased through, under that store&apos;s
          policy — not by us. If a purchase is refunded or charged back, the corresponding edition is
          removed and your account returns to the level your remaining purchases support.
        </p>
        <p>
          A refund never deletes your data. If you end up holding more knives or photos than the
          lower edition allows, what you already have stays; you simply cannot add more until you
          are back under the limit or purchase again.
        </p>

        <h2>13. Deleting Your Account</h2>
        <p>
          You can delete your account at any time in Settings → Delete Account. Deletion is scheduled
          with a 14-day grace period, during which signing back in restores everything. After that,
          your account and its data are permanently erased and we cannot recover them. Records of
          past purchases are retained as described in the{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>

        <h2>14. Suspension and Termination by Us</h2>
        <p>
          We may suspend or terminate an account that breaks these terms, abuses the service, or
          creates risk for other users or for us. Where it is reasonable to do so, we will tell you
          why and give you a chance to put it right. You may stop using Knifomatic at any time.
        </p>

        <h2>15. Availability and Changes</h2>
        <p>
          We do not promise the service will always be available or error-free. We may add, change,
          or remove features, and we may need to interrupt the service for maintenance. If we
          discontinue Knifomatic entirely, we will give reasonable notice so you can export your
          data.
        </p>

        <h2>16. Disclaimers</h2>
        <p>
          Knifomatic is provided &quot;as is&quot; and &quot;as available&quot;. To the extent the
          law allows, we disclaim implied warranties of merchantability, fitness for a particular
          purpose, and non-infringement. Nothing here excludes rights you have as a consumer that
          cannot legally be excluded.
        </p>

        <h2>17. Limitation of Liability</h2>
        <p>
          To the extent the law allows, we are not liable for indirect, incidental, special, or
          consequential damages, or for lost data, lost profits, or the value of items in your
          collection. Our total liability for any claim relating to Knifomatic is limited to the
          greater of the amount you paid us in the twelve months before the claim, or US $50.
        </p>
        <p>
          Some jurisdictions do not allow these limits; where that is the case, they apply only to
          the extent permitted.
        </p>

        <h2>18. Changes to These Terms</h2>
        <p>
          We may update these terms; the &quot;Last updated&quot; date will change. Material changes
          will be noted in the app or by email. Continuing to use Knifomatic after a change means
          you accept the updated terms.
        </p>

        <h2>19. Governing Law</h2>
        <p>
          These terms are governed by the laws of the State of New York, USA, without regard to its
          conflict-of-laws rules, and the courts located in New York shall have jurisdiction. If you
          are a consumer in the EEA or UK, this does not deprive you of the protection of the
          mandatory laws of your country of residence.
        </p>

        <h2>20. Contact</h2>
        <p>
          <a href="mailto:support@knifomatic.com">support@knifomatic.com</a>
          <br />
          Gooserocket Corp, New York, USA
        </p>
      </article>
    </main>
  );
}
