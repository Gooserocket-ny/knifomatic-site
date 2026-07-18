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
          These terms form the agreement between you and Gooserocket Corp (&quot;we&quot;,
          &quot;us&quot;) covering your use of the Knifomatic app. How we handle your data is
          explained separately in our <Link href="/privacy">Privacy Policy</Link>, which forms part
          of this agreement.
        </p>

        <h2>1. Agreeing to These Terms</h2>
        <p>
          By downloading Knifomatic, creating an account, or otherwise using the app, you confirm
          that you accept these terms. If you do not accept them, please do not use the app. If you
          are agreeing on behalf of an organisation, you confirm that you are authorised to do so.
        </p>

        <h2>2. Your Right to Use the App</h2>
        <p>
          We grant you a personal, non-exclusive, non-transferable licence to install and use
          Knifomatic on devices you own or control, for your own non-commercial use, for as long as
          you comply with these terms. We or our licensors own the app itself, its design, its
          branding, our compilation of the catalog, and the other material we provide; nothing in
          these terms transfers any of that to you.
        </p>
        <p>
          Where you install the app from the App Store, this licence is also subject to the Usage
          Rules in Apple&apos;s App Store Terms of Service, including the arrangements Apple makes for
          Family Sharing, volume purchasing, and legacy contacts. You are responsible for complying
          with the terms of any third-party service you use through Knifomatic, such as the video
          platforms that host links posted to the community feed.
        </p>

        <h2>3. Who May Use Knifomatic</h2>
        <p>
          You must be at least 13 years old, or older where your country sets a higher minimum age.
          If you are under the age of majority where you live, you may use the app only with the
          agreement of a parent or guardian, who accepts these terms on your behalf.
        </p>
        <p>
          Knifomatic is a record-keeping tool for collectors. We do not sell knives and take no part
          in any transaction between you and a seller. Laws governing the ownership, carrying, and
          transport of knives differ considerably between countries, states, and cities, and
          complying with those that apply to you is your responsibility alone.
        </p>

        <h2>4. Your Account</h2>
        <p>
          Keep your sign-in details confidential and do not let anyone else use your account. You are
          responsible for activity carried out through it. If you suspect that someone has gained
          access without your permission, tell us promptly at{" "}
          <a href="mailto:support@knifomatic.com">support@knifomatic.com</a>. Certain actions,
          including purchases, require a verified email address; you may use the app before verifying,
          but we may ask you to verify before those actions become available.
        </p>

        <h2>5. Using the App Without an Account</h2>
        <p>
          You may use Knifomatic as a guest. Guest data is stored only on your device: it does not
          sync, we do not hold or back up any copy of it, and it is lost permanently if you remove
          the app. Guest accounts are subject to lower limits than registered accounts.
        </p>

        <h2>6. Your Collection and Your Content</h2>
        <p>
          Your collections, knives, notes, recorded values, and photographs remain yours. We claim no
          ownership over them.
        </p>
        <p>
          So that we can operate the service, you give us permission to store, copy, and display the
          collection data you choose to sync, for the sole purpose of making it available back to you
          on your devices. This permission is limited to running Knifomatic and ends when you delete
          the content or close your account. You are responsible for the content you add and for
          holding the rights to any material you upload.
        </p>

        <h2>7. Photographs Are Not Backed Up</h2>
        <p>
          Photographs you add are stored only on your device and form no part of cloud sync. If you
          reinstall the app, move to a new device, or delete your account, your collection data is
          restored but{" "}
          <strong>your photographs will be permanently lost and cannot be recovered by us</strong>.
          Please keep your own copies of any images that matter to you.
        </p>
        <p>
          Photo backup is planned as part of a future optional subscription, which is separate from
          the editions described in clause 12. Until such a subscription exists and you have taken
          it, please treat your photographs as existing on a single device only.
        </p>

        <h2>8. The Community Feed</h2>
        <p>
          Fresh Cuts is a shared feed in which users post links to knife-related videos. Posts are
          visible to other users while they remain active, and are governed by the Fresh Cuts Posting
          Rules &amp; Terms shown in the app before your first post. In summary: submissions must be
          knife-related and lawful, must not be abusive, harassing, or sexually explicit, and must be
          links you have the right to share. Posts remain active for a limited period, and each
          account may hold only a small number at a time.
        </p>
        <p>
          By submitting content to Fresh Cuts you grant us a limited, non-exclusive, royalty-free
          licence to store, format, display, and distribute that submission — the link together with
          its title, channel, and preview details — within Knifomatic while it is active, and to
          retain it for a reasonable period afterwards for moderation, complaint handling, and legal
          compliance. You keep ownership of what you submit, and this licence ends when the record is
          deleted.
        </p>
        <p>
          We may review, refuse, remove, or limit the visibility of any submission that breaches
          those rules, and we may do so without prior notice. Repeated or serious breaches may result
          in temporary or permanent loss of posting access.
        </p>

        <h2>9. Copyright Complaints</h2>
        <p>
          If you believe that material accessible through Knifomatic infringes your copyright, write
          to <a href="mailto:support@knifomatic.com">support@knifomatic.com</a> identifying the
          material, explaining what right you hold, and giving us a way to contact you. We will review
          the complaint and remove the material where it is warranted. We may also remove posting
          access from users who infringe repeatedly.
        </p>

        <h2>10. Acceptable Use</h2>
        <p>When using Knifomatic you agree not to:</p>
        <ul>
          <li>break the law, infringe the rights of others, or assist anyone in doing so;</li>
          <li>harass, threaten, or abuse other users;</li>
          <li>
            attempt to access accounts, data, or systems that are not your own, or probe or interfere
            with the security of the service;
          </li>
          <li>
            scrape, bulk-download, or redistribute our catalog, or use it to build a competing
            dataset;
          </li>
          <li>
            reverse engineer, decompile, or otherwise tamper with the app, except to the extent the
            law expressly permits despite this restriction;
          </li>
          <li>use automated means to disrupt or place unreasonable load on the service.</li>
        </ul>

        <h2>11. Catalog Information and Recorded Values</h2>
        <p>
          Catalog information and images come from manufacturer-supplied material, licensed sources,
          material in the public domain, user submissions, and other sources we are permitted to use.
          The catalog is offered as a convenience, and we do not warrant that specifications,
          dimensions, materials, or photographs are accurate, complete, or current. Please verify
          anything that matters with the manufacturer before relying on it, particularly for
          purchasing, insurance, legal, or safety decisions.
        </p>
        <p>
          Any value you record, and any total the app calculates from those values, is your own
          record-keeping. It is not an appraisal or a valuation, we make no representation as to what
          any item is worth, and it should not be presented to an insurer or anyone else as a
          professional valuation.
        </p>

        <h2>12. Editions, Purchases, and Refunds</h2>
        <p>
          Knifomatic is free to use. Optional paid editions increase the number of knives you may
          keep in one account and the number of photographs you may attach to each knife. The limits
          applying to each edition are shown in the app and may change over time; where they change,
          we intend the change to be in your favour.
        </p>
        <p>
          Editions are one-time purchases rather than subscriptions: nothing recurs and there is
          nothing to cancel. Buying a higher edition replaces a lower one rather than adding to it.
          We may separately offer subscriptions for ongoing services, such as photo backup. Those are
          distinct from editions — an edition you have bought remains yours whether or not you hold
          any subscription, and ending a subscription never reduces your edition.
        </p>
        <p>
          Purchases are made through the App Store or Google Play, which set the price, currency, and
          applicable taxes, and whose terms govern the transaction. We never receive your payment
          card details. Refunds are handled by the store you purchased through, under that store&apos;s
          policy, and not by us.
        </p>
        <p>
          If a purchase is refunded or charged back, the corresponding edition is withdrawn and your
          account returns to the level your remaining purchases support. No data is deleted as a
          result: anything you have already added remains in place, and only the ability to add more
          is suspended until you are within the lower limit again or purchase once more.
        </p>

        <h2>13. Ending the Agreement</h2>
        <p>
          You may stop using Knifomatic at any time, and you may delete your account in the app under
          Settings → Delete Account. Deletion carries a 14-day grace period, during which signing back
          in restores your account in full. After that period your account and collection data are
          deleted from our active systems and we cannot retrieve them for you. Limited records are
          kept where the law requires, and residual copies may remain in encrypted backups until
          those expire — this is set out in section 6 of the{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
        <p>
          We may suspend or close an account that breaches these terms, misuses the service, or
          creates risk for other users or for us. Where it is reasonable to do so, we will explain
          why and give you an opportunity to put matters right. Clauses that by their nature should
          survive the end of this agreement — including clauses 11, 14, 15, 16, and 20 — continue to
          apply.
        </p>

        <h2>14. Availability, Changes, and What We Do Not Promise</h2>
        <p>
          We do not promise that Knifomatic will always be available or free from faults. We may add,
          change, or withdraw features, and we may suspend the service for maintenance. If we
          discontinue the app altogether, we will give reasonable notice so that you can export your
          data.
        </p>
        <p>
          Knifomatic depends on third-party services — hosting, databases, email delivery, and the
          app stores — which we do not control. If one of them changes its terms, raises its prices,
          or ceases to operate, we may have to change or end parts of the service, or the service as
          a whole, and we are not liable for that.
        </p>
        <p>
          <strong>
            Buying an edition does not guarantee that the service will run for any particular length
            of time.
          </strong>{" "}
          An edition is a one-time unlock of limits within the app as it exists, not a promise of
          perpetual operation. If we discontinue Knifomatic, editions stop working along with it and
          no refund is owed beyond whatever the store you purchased through provides under its own
          policy.
        </p>
        <p>
          Knifomatic is provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the
          extent permitted by law, we exclude implied warranties of merchantability, fitness for a
          particular purpose, and non-infringement. Nothing in these terms excludes or limits rights
          you have as a consumer that cannot lawfully be excluded, nor our liability for death or
          personal injury caused by our negligence, or for fraud.
        </p>

        <h2>15. Limitation of Liability</h2>
        <p>
          The data you keep in Knifomatic is a record of information about objects you own. It is not
          the objects themselves, it holds no monetary value in its own right, and we do not accept
          responsibility for what it may be worth to you.
        </p>
        <p>
          To the extent permitted by law, we are therefore not liable for the loss, corruption, or
          unavailability of your collections, knives, specifications, notes, recorded values, or
          photographs, however that occurs, nor for indirect, incidental, special, or consequential
          loss, loss of profit, or loss of opportunity. Keeping your own copies of anything you
          cannot afford to lose is your responsibility.
        </p>
        <p>
          Where we are found liable despite the above, our total liability for all claims arising out
          of or relating to Knifomatic is limited to the amount you have paid us in the twelve months
          before the claim arose. For anyone using the app without having bought anything, that
          amount is nil.
        </p>
        <p>
          Some jurisdictions do not permit these exclusions or limits; where that is so, they apply
          only as far as the law allows.
        </p>

        <h2>16. Your Responsibility for Your Content</h2>
        <p>
          If a third party brings a claim against us because of content you submitted, or because you
          used the app in breach of these terms or of the law, you agree to cover the reasonable
          costs and damages that result. This does not apply where the claim arises from something we
          did wrong.
        </p>

        <h2>17. Purchases Through the App Stores</h2>
        <p>
          This agreement is between you and Gooserocket Corp, not with Apple or Google. Neither store
          is responsible for the app or its content, and neither has any obligation to provide
          support or maintenance for it — that responsibility is ours alone.
        </p>
        <p>
          If the app fails to conform to any warranty that cannot lawfully be excluded, you may
          notify Apple, and Apple may refund the purchase price; beyond that, Apple has no other
          warranty obligation in respect of the app. Any claim relating to the app, including product
          liability, a failure to meet legal requirements, or an intellectual property claim, is our
          responsibility rather than the store&apos;s. Apple and its subsidiaries are third-party
          beneficiaries of these terms and may enforce them against you.
        </p>
        <p>
          You confirm that you are not located in a country subject to a US Government embargo, and
          that you are not on any US Government list of prohibited or restricted parties.
        </p>

        <h2>18. Changes to These Terms</h2>
        <p>
          We may update these terms from time to time. The date at the top of the page will change,
          and where a change is significant we will notify you in the app or by email. If you
          continue to use Knifomatic after a change takes effect, the updated terms apply to you; if
          you do not accept them, you should stop using the app and may delete your account.
        </p>

        <h2>19. General</h2>
        <p>
          If any part of these terms is found to be unenforceable, the rest continues to apply. If we
          do not enforce a right straight away, we do not lose it. You may not transfer your rights
          under these terms to anyone else; we may transfer ours to a company that takes over our
          business, provided your rights are not reduced. These terms, together with the Privacy
          Policy and the Fresh Cuts posting rules, form the whole agreement between us about
          Knifomatic.
        </p>

        <h2>20. Governing Law</h2>
        <p>
          These terms are governed by the law of the State of New York, USA, and the courts of New
          York have jurisdiction over any dispute. If you are a consumer, this does not deprive you
          of the protection of the mandatory laws of the country where you live, nor of the right to
          bring proceedings there.
        </p>

        <h2>21. Contact</h2>
        <p>
          <a href="mailto:support@knifomatic.com">support@knifomatic.com</a>
          <br />
          Gooserocket Corp, New York, USA
        </p>
      </article>
    </main>
  );
}
