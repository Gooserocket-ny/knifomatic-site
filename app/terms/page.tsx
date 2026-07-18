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
          These are the rules for using Knifomatic, made by Gooserocket Corp. By using the app you
          agree to them. How we handle your data is in our <Link href="/privacy">Privacy Policy</Link>
          .
        </p>

        <h2>1. Who Can Use It</h2>
        <p>
          You need to be at least 13, or older if your country requires it. Knifomatic is a
          record-keeping tool for collectors — we do not sell knives and are not part of any deal
          between you and a seller. Laws about owning and carrying knives vary a lot from place to
          place, and following the ones that apply to you is your responsibility.
        </p>

        <h2>2. Your Account</h2>
        <p>
          Keep your login to yourself and do not share the account. What happens under it is your
          responsibility. If you think someone else got in, email us at{" "}
          <a href="mailto:support@knifomatic.com">support@knifomatic.com</a>. Some things, like
          purchases, need a verified email address.
        </p>
        <p>
          You can also use the app as a guest, without an account. Guest data lives only on your
          device: it does not sync, we do not back it up, and it is gone if you remove the app.
        </p>

        <h2>3. Your Collection Is Yours</h2>
        <p>
          Your collections, knives, notes, values, and photos belong to you. We do not claim any
          ownership of them. We store the collection data you sync purely so we can show it back to
          you on your devices, and that stops when you delete it or close your account. You are
          responsible for what you put in the app.
        </p>

        <h2>4. Photos Are Not Backed Up</h2>
        <p>
          Photos stay on your device and are not part of cloud sync. If you reinstall, change
          phones, or delete your account, your collection returns but{" "}
          <strong>your photos are gone and we cannot recover them</strong>. Keep your own copies.
          Photo backup is planned as part of a future optional subscription — until you have that,
          treat your photos as living on one device only.
        </p>

        <h2>5. The Community Feed</h2>
        <p>
          Fresh Cuts is a shared feed for knife-related video links. Posts are public to other users
          while they are live, and the full posting rules are shown in the app before your first
          post. In short: keep it knife-related, keep it legal, do not post anything abusive or
          explicit, and only share links you have the right to share. We can remove anything that
          breaks the rules without warning, and repeated problems can cost you posting access.
        </p>

        <h2>6. Fair Use of the App</h2>
        <p>Please do not:</p>
        <ul>
          <li>break the law or infringe anyone&apos;s rights;</li>
          <li>harass or threaten other users;</li>
          <li>try to get into accounts or systems that are not yours;</li>
          <li>scrape or bulk-copy our catalog, or use it to build a rival database;</li>
          <li>take the app apart or interfere with how it runs.</li>
        </ul>

        <h2>7. Catalog Specs and Recorded Values</h2>
        <p>
          Our built-in catalog is put together from public sources as a convenience. We cannot
          promise the specifications, dimensions, materials, or photos are accurate or current —
          check with the manufacturer before relying on any of it.
        </p>
        <p>
          Values you record, and any total the app adds up, are your own bookkeeping. They are not
          an appraisal, and we make no claim about what anything is worth. Do not use them as a
          professional valuation, for insurance or otherwise.
        </p>

        <h2>8. Editions, Purchases, and Refunds</h2>
        <p>
          Knifomatic is free. Paid editions raise how many knives you can keep and how many photos
          you can attach to each one; the current limits are shown in the app and may change, and we
          intend any change to be in your favour.
        </p>
        <p>
          Editions are one-time purchases, not subscriptions — there is nothing recurring and
          nothing to cancel. Buying a higher edition replaces the lower one. We may later offer
          separate subscriptions for ongoing services such as photo backup; an edition you own stays
          yours whether or not you subscribe, and cancelling a subscription never takes an edition
          away.
        </p>
        <p>
          You buy through the App Store or Google Play, so their prices, taxes, and terms apply, and
          refunds go through them rather than us. If a purchase is refunded, the edition goes with
          it and your account drops back a level — but nothing is deleted. Anything you already
          added stays; you just cannot add more until you are back under the limit.
        </p>

        <h2>9. Ending Things</h2>
        <p>
          Delete your account any time in Settings → Delete Account. You get 14 days to change your
          mind; after that it is erased permanently. You can stop using Knifomatic whenever you
          like.
        </p>
        <p>
          We can suspend or close an account that breaks these rules or puts other users at risk.
          Where it is reasonable, we will tell you why first and give you a chance to fix it.
        </p>

        <h2>10. What We Do Not Promise</h2>
        <p>
          Knifomatic is provided as it is. We cannot promise it will always be available or free of
          bugs, and we may add, change, or remove features. If we ever shut it down, we will give
          you fair notice to get your data out.
        </p>
        <p>
          We are not liable for indirect or knock-on losses, lost data, or the value of items in
          your collection. If we do owe you something, it is capped at what you paid us in the last
          twelve months, or US $50, whichever is more. None of this removes rights you have as a
          consumer that the law says cannot be removed.
        </p>

        <h2>11. Changes to These Terms</h2>
        <p>
          If we change these terms, the date at the top changes and we will tell you in the app or by
          email when the change matters. Carrying on using the app means you accept the new version.
        </p>

        <h2>12. Contact</h2>
        <p>
          These terms are governed by the law of the State of New York, USA. If you are a consumer
          elsewhere, you keep the protections your own country gives you.
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
