import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact · Knifomatic",
  description: "Contact Gooserocket Corp about Knifomatic.",
};

export default function Contact() {
  return (
    <main className="main-doc">
      <article className="contact-card">
        <h1>Contact</h1>
        <p className="intro">Have a question, found a bug, or want to request a feature? We&apos;re available by email.</p>

        <div className="contact-list">
          <p><strong>Support:</strong> <a href="mailto:support@knifomatic.com">support@knifomatic.com</a></p>
          <p><strong>Company:</strong> <span>Gooserocket Corp</span></p>
          <p><strong>Location:</strong> <span>New York, USA</span></p>
          <p><strong>Privacy Policy:</strong> <a href="/privacy">knifomatic.com/privacy</a></p>
        </div>
      </article>
    </main>
  );
}
