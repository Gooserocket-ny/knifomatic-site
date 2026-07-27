import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support · Knifomatic",
  description: "Support and frequently asked questions for Knifomatic.",
};

export default function Support() {
  return (
    <main className="main-doc">
      <article className="support">
        <h1>Support</h1>
        <p className="intro">Need help with Knifomatic? We&apos;re here for you.</p>

        <div className="faq-scroll">
          <h2>Frequently Asked Questions</h2>
          <div className="faq">
            <section>
              <h3>How do I reset my password?</h3>
              <p>On the sign-in screen, tap &quot;Forgot password?&quot; and enter your email address. You will receive a reset link within a few minutes.</p>
            </section>
            <section>
              <h3>My collections disappeared after reinstalling the app</h3>
              <p>Make sure you are signed in with the same account you used before. Your collections, knives, and specifications sync from the cloud automatically when you log in, and may take a few seconds to appear.</p>
              <p>Photos are the exception: they are stored only on the device that added them and are not currently uploaded, so we cannot bring them back after a reinstall or on a new phone. A device-level backup made by iOS or Android may restore them, but that is your operating system&apos;s doing and not something we control or can promise. Keep your own copies of images you care about. Photo backup is planned as part of a future subscription.</p>
            </section>
            <section>
              <h3>Can I use the app without an account?</h3>
              <p>Yes. You can use Knifomatic as a guest. Your data will be stored locally on your device only and will not sync across devices.</p>
            </section>
            <section>
              <h3>How do I add a knife to my collection?</h3>
              <p>You can create a knife from scratch directly inside your collection, or browse the catalog, find the knife you own, and tap &quot;Add to Collection.&quot;</p>
            </section>
            <section>
              <h3>What do I get by buying an edition?</h3>
              <p>More room, and nothing else. An edition raises how many knives one account may hold and how many photos you may attach to each knife. Every feature of the app, including tier lists, rotation collections, the catalog, PDF export, and Fresh Cuts, works on the free Starter edition and for guests as well. Editions are one-time purchases, so nothing renews and there is nothing to cancel.</p>
            </section>
            <section>
              <h3>How does posting to Fresh Cuts work?</h3>
              <p>Posting a video costs one stamp. Every account holds one free stamp, which comes back 30 days after you use it, and extra stamps can be bought in the app. The free one is always used first, and bought stamps do not expire.</p>
              <p>Stamps change how many videos you can post in total, not how often: every account may have one active post at a time, which works out at one video a day. A post stays in the feed for 24 hours, and videos published on YouTube more than 30 days ago cannot be added. If we remove a post because it breaks the Fresh Cuts posting rules, which you can read in the app and which are summarised in our <a href="/terms">Terms of Service</a>, the stamp is not returned; if we remove one by mistake, we put the stamp back.</p>
            </section>
            <section>
              <h3>How do I delete my account?</h3>
              <p>You can delete your account in the app (Settings → Delete Account). Deletion is scheduled with a 14-day grace period, during which you can sign back in to restore it. After that your account and collection data are deleted from our active systems, apart from the limited records and temporary encrypted backups described in our <a href="/privacy">Privacy Policy</a>. You may also request deletion at <a href="mailto:support@knifomatic.com">support@knifomatic.com</a>.</p>
            </section>
          </div>
        </div>

        <section className="help">
          <h2>Still Need Help?</h2>
          <p>We typically reply within 1–2 business days.</p>
          <a className="btn btn-primary" href="mailto:support@knifomatic.com">Email Support</a>
        </section>
      </article>
    </main>
  );
}
