import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service · Knifomatic",
  description: "Knifomatic Terms of Service · Gooserocket Corp.",
};

export default function Terms() {
  return (
    <main className="main-doc">
      <article className="policy">
        <h1>Terms of Service</h1>
        <div className="meta">
          <p className="product">Knifomatic</p>
          <p>Last updated: July 26, 2026</p>
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
          that you accept these terms. If you do not accept them, please do not use the app.
        </p>

        <h2>2. The Service Is Provided As It Is</h2>
        <p>
          Knifomatic is provided on an &quot;as is&quot; and &quot;as available&quot; basis. You are
          taking the app as you find it: you accept that it may contain faults, that it may be
          unavailable at times, and that it is for you to judge whether it suits your purposes before
          relying on it.
        </p>
        <p>
          To the extent permitted by law, we exclude all warranties, conditions, and representations
          that are not written into these terms, including implied warranties of merchantability,
          fitness for a particular purpose, and non-infringement. We do not warrant that the app will
          meet your requirements, that it will run without interruption or error, or that any defect
          will be corrected.
        </p>
        <p>
          Nothing in this clause excludes or limits rights you have as a consumer that cannot lawfully
          be excluded, nor our liability for death or personal injury caused by our negligence, or for
          fraud.
        </p>

        <h2>3. Your Right to Use the App</h2>
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
          with the terms of any third-party service you reach through Knifomatic: YouTube, which
          hosts the videos linked in the community feed, Reddit, whose public feeds supply the
          headlines on the home screen, and the retailers behind listed deals.
        </p>
        <p>
          Content on those services is not ours. We do not write, host, or moderate the videos, the
          Reddit posts, or anything on a retailer&apos;s site, we do not endorse them by showing
          them, and we are not responsible for what you find there. The list of subreddits we read
          from is fixed and chosen by us, but what people post inside them is not something we
          control.
        </p>

        <h2>4. Who May Use Knifomatic</h2>
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

        <h2>5. Your Account</h2>
        <p>
          Keep your sign-in details confidential and do not let anyone else use your account. You are
          responsible for activity carried out through it. If you suspect that someone has gained
          access without your permission, tell us promptly at{" "}
          <a href="mailto:support@knifomatic.com">support@knifomatic.com</a>. Certain actions,
          including purchases, require a verified email address; you may use the app before verifying,
          but we may ask you to verify before those actions become available.
        </p>

        <h2>6. Using the App Without an Account</h2>
        <p>
          You may use Knifomatic as a guest. Guest collection data is stored only on your device: it
          does not sync, and we hold no copy of it, so we can neither back it up nor restore it.
          Removing the app normally deletes the local copy, although a device-level backup made by
          iOS or Android may restore some local files; that process is not ours to control or
          promise. Ordinary technical and diagnostic data is still generated, as the{" "}
          <Link href="/privacy">Privacy Policy</Link> explains. Guest accounts are subject to lower
          limits than registered accounts.
        </p>

        <h2>7. Your Collection and Your Content</h2>
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

        <h2>8. Photographs Are Not Backed Up</h2>
        <p>
          Photographs you add are stored only on your device and form no part of cloud sync. We
          never upload them, and <strong>we cannot recover them for you in any circumstances</strong>
          . Please keep your own copies of any images that matter to you.
        </p>
        <p>
          Your device may keep its own copy. iOS and Android can include an app&apos;s local files in
          their system backups (iCloud Backup, Google One) depending on settings we neither control
          nor can see. If such a backup exists, restoring a device from it may bring your photographs
          back. That is between you and your operating system; we can make no promises about it
          either way.
        </p>
        <p>
          What that means in the two cases people ask about. If you reinstall the app or move to a
          new device while your account is still active, signing in restores your synced collection
          data, but not your photographs. If you have deleted your account, the collection can be
          restored only by signing back in during the 14-day grace period; once that period has
          passed, we cannot restore the collection or the photographs.
        </p>
        <p>
          Photo backup is planned as part of a future optional subscription, which is separate from
          the editions described in clause 14. Until such a subscription exists and you have taken
          it, please treat your photographs as existing on a single device only.
        </p>

        <h2>9. The Community Feed</h2>
        <p>
          Fresh Cuts lets signed-in users submit links to publicly accessible knife-related videos
          hosted on YouTube. <strong>We do not upload, host, or control the videos themselves.</strong>{" "}
          They stay on YouTube, and YouTube&apos;s terms, availability, copyright procedures, and
          moderation apply to them. What we moderate is whether a submitted link and its card appear
          in Fresh Cuts.
        </p>
        <p>
          Fresh Cuts is built with YouTube API Services, so by using it{" "}
          <strong>
            you also agree to the{" "}
            <a href="https://www.youtube.com/t/terms" rel="noreferrer">
              YouTube Terms of Service
            </a>
          </strong>
          . How Google handles data is set out in the{" "}
          <a href="https://policies.google.com/privacy" rel="noreferrer">
            Google Privacy Policy
          </a>
          .
        </p>
        <p>
          Submissions are governed by the Fresh Cuts Posting Rules &amp; Terms, which you accept
          before your first post and which remain available in the app afterwards. In summary:
          submissions must be knife-related and lawful, must not be abusive, harassing, or sexually
          explicit, and must be links you are entitled to share. A post stays visible for 24 hours,
          each account may have one active post at a time, which in practice means one video a day,
          and a video published on YouTube more than 30 days earlier cannot be submitted.
        </p>
        <p>
          <strong>Posting costs a stamp.</strong> Every account holds one free stamp, which becomes
          available again 30 days after it is spent, and further stamps can be bought in the app as
          described in clause 14. The free one is always spent first. A stamp is spent when the video
          is published: if we later remove the post for breaching the rules the stamp is not
          returned, and if we remove it in error it is restored. Stamps raise how many videos you may
          post in total, not how often. The limit of one video a day applies to every account,
          whatever its stamp balance.
        </p>
        <p>
          Fresh Cuts is new and still being tested, so these limits, meaning how long a post stays
          up, how often you may post, and what a post costs, may change as we see how the feed is
          used. The version in the app at the time you post is the one that applies to that post, and
          a change never removes a post made under the earlier rules. We do not withdraw stamps you
          have already bought when the rules change.
        </p>
        <p>
          By submitting a link you authorise us to store and display that URL and the publicly
          available details that go with it (video title, thumbnail, channel name, and publication
          date) within Knifomatic while the post is active. You retain any rights you may have in
          the information you submit. This authorisation covers the link and its details only: it
          gives us no rights in the underlying video.
        </p>
        <p>
          The details supplied by YouTube are kept only for the period set out in the{" "}
          <Link href="/privacy">Privacy Policy</Link>, which is shorter than the life of the record
          itself. Afterwards we keep our own part of it (which video was linked, by which account,
          when, along with any reports and moderation decisions) for the purposes described there.
        </p>
        <p>
          You can report a link through the reporting function in the app. We may review, refuse,
          remove, or limit the visibility of any submission that breaches the rules, without prior
          notice, and removing a link from Fresh Cuts has no effect on the video itself. Repeated or
          serious breaches may result in temporary or permanent loss of posting access.
        </p>

        <h2>10. Copyright Complaints</h2>
        <p>
          If you believe that material reachable through Knifomatic infringes your copyright, write
          to <a href="mailto:support@knifomatic.com">support@knifomatic.com</a> identifying the
          material, explaining what right you hold, and giving us a way to contact you. Where the
          complaint is warranted we will remove or disable the link within Knifomatic, and we may
          withdraw posting access from accounts that infringe repeatedly.
        </p>
        <p>
          Note the limit of what we can do: we do not host the videos, so we cannot take one down
          from YouTube. If your complaint concerns the video itself rather than its appearance in
          Fresh Cuts, please also raise it with YouTube through its copyright reporting process.
        </p>

        <h2>11. Acceptable Use</h2>
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

        <h2>12. Catalog Information and Recorded Values</h2>
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

        <h2>13. Paid Placements</h2>
        <p>
          Some content in Knifomatic is paid for. Retailers may pay or make a contribution to have a
          deal listed, and we may take payment for other placements in the same way. Anything paid
          for in that way is marked in the app so you can tell it apart from content we chose
          editorially.
        </p>
        <p>
          Community posts are not paid placements. A stamp is simply what every account spends to
          post to Fresh Cuts, so posts are ordinary user submissions, they are not marked as paid,
          and buying stamps does not buy prominence: the feed is ordered by the date a video was
          published on YouTube, not by what anyone paid.
        </p>
        <p>
          A paid placement is not an endorsement. We do not check the retailers behind listings, we
          are not party to any purchase you make from them, and any dispute over price, delivery, or
          the goods themselves is between you and that retailer. Payment does not exempt a placement
          from our content rules, and we can remove one that breaks them without refund.
        </p>

        <h2>14. Editions, Stamps, Purchases, and Refunds</h2>
        <p>
          Knifomatic is free to use. Optional paid editions increase the number of knives you may
          keep in one account and the number of photographs you may attach to each knife. The limits
          applying to each edition are shown in the app at the time you buy.
        </p>
        <p>
          <strong>
            We will not reduce the limits of an edition you have already bought.
          </strong>{" "}
          If your edition allowed a given number of knives and photographs when you paid for it, it
          keeps allowing at least that. We may raise those limits, and we may add capabilities to an
          edition, but what you have paid for will not be taken away or made smaller.
        </p>
        <p>
          Editions are one-time purchases rather than subscriptions: nothing recurs and there is
          nothing to cancel. Buying a higher edition replaces a lower one rather than adding to it.
          We may separately offer subscriptions for ongoing services, such as photo backup. Those are
          distinct from editions: an edition you have bought remains yours whether or not you hold
          any subscription, and ending a subscription never reduces your edition.
        </p>
        <p>
          <strong>Stamps are a separate, consumable purchase.</strong> A stamp is what an account
          spends to post a video to Fresh Cuts, as set out in clause 9. Stamps are sold in packs,
          nothing recurs, and they carry no expiry date. They are held on your account rather than on
          a device, so they follow you when you sign in elsewhere, but they cannot be transferred to
          another account or exchanged for money. Stamps are not an edition and do not raise any
          edition limit, and buying an edition does not include stamps.
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
        <p>
          A refunded stamp pack is handled the same way: the stamps it granted are taken back from
          your balance, never taking that balance below zero, and any video already published with a
          stamp stays where it is. Stamps that have been spent are gone, and a refund does not
          restore them.
        </p>

        <h2>15. Ending the Agreement</h2>
        <p>
          You may stop using Knifomatic at any time, and you may delete your account in the app under
          Settings → Delete Account. Deletion carries a 14-day grace period, during which signing back
          in restores your account in full. After that period your account and collection data are
          deleted from our active systems and we cannot retrieve them for you. Some limited records
          outlive that: purchase history, moderation records from the community feed, and anything
          needed to prevent fraud, settle a dispute, or meet a legal obligation, and residual copies
          may remain in encrypted backups until those expire on their normal rotation. Section 6 of
          the <Link href="/privacy">Privacy Policy</Link> sets out each of them and for how long.
        </p>
        <p>
          We may suspend or close an account that breaches these terms, misuses the service, or
          creates risk for other users or for us. Where it is reasonable to do so, we will explain
          why and give you an opportunity to put matters right. Clauses that by their nature should
          survive the end of this agreement (including clauses 2, 12, 16, 17, 18, and 22) continue to
          apply.
        </p>

        <h2>16. Availability and Changes to the Service</h2>
        <p>
          We do not promise that Knifomatic will always be available or free from faults. We may add,
          change, or withdraw features, and we may suspend the service for maintenance. If we
          discontinue the app altogether, we will give reasonable notice so that you can export your
          data.
        </p>
        <p>
          Knifomatic depends on third-party services (hosting, databases, email delivery, and the
          app stores) which we do not control. If one of them changes its terms, raises its prices,
          or ceases to operate, we may have to change or end parts of the service, or the service as
          a whole, and we are not liable for that.
        </p>
        <p>
          <strong>
            Buying an edition does not guarantee that the service will run for any particular length
            of time.
          </strong>{" "}
          An edition is a one-time unlock of limits within the app as it exists, not a promise of
          perpetual operation. If we discontinue Knifomatic, editions stop working along with it.
          Except where applicable law requires otherwise, no refund is owed beyond any refund
          available under the policy of the store through which you purchased.
        </p>

        <h2>17. Limitation of Liability</h2>
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

        <h2>18. Your Responsibility for Your Content</h2>
        <p>
          If a third party brings a claim against us because of content you submitted, or because you
          used the app in breach of these terms or of the law, you agree to cover the reasonable
          costs and damages that result. This does not apply where the claim arises from something we
          did wrong.
        </p>

        <h2>19. Purchases Through the App Stores</h2>
        <p>
          This agreement is between you and Gooserocket Corp, not with Apple or Google. Neither store
          is responsible for the app or its content, and neither has any obligation to provide
          support or maintenance for it; that responsibility is ours alone.
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
          You confirm that you are not located in a country subject to a US Government embargo or
          designated by the US Government as a country supporting terrorism, and that you are not on
          any US Government list of prohibited or restricted parties.
        </p>

        <h2>20. Changes to These Terms</h2>
        <p>
          We may update these terms from time to time. The date at the top of the page will change,
          and where a change is significant we will notify you in the app or by email. If you
          continue to use Knifomatic after a change takes effect, the updated terms apply to you; if
          you do not accept them, you should stop using the app and may delete your account.
        </p>

        <h2>21. General</h2>
        <p>
          If any part of these terms is found to be unenforceable, the rest continues to apply. If we
          do not enforce a right straight away, we do not lose it. You may not transfer your rights
          under these terms to anyone else; we may transfer ours to a company that takes over our
          business, provided your rights are not reduced. These terms, together with the Privacy
          Policy and the Fresh Cuts posting rules, form the whole agreement between us about
          Knifomatic.
        </p>

        <h2>22. Governing Law</h2>
        <p>
          These terms are governed by the law of the State of New York, USA, and the courts of New
          York have jurisdiction over any dispute. If you are a consumer, this does not deprive you
          of the protection of the mandatory laws of the country where you live, nor of the right to
          bring proceedings there.
        </p>

        <h2>23. Contact</h2>
        <p>
          Questions, complaints, and support requests about Knifomatic go to Gooserocket Corp at the
          details below. We are the party responsible for the app, including its support and
          maintenance.
        </p>
        <div className="contact-block">
          <p>
            <strong>Gooserocket Corp</strong>
            <br />
            983 Willis Ave Ste 201
            <br />
            Albertson, NY 11507-1932
            <br />
            United States
          </p>
          <p>
            <a href="mailto:support@knifomatic.com">support@knifomatic.com</a>
          </p>
        </div>
      </article>
    </main>
  );
}
