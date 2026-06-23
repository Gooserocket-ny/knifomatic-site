import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Knifomatic',
};

export default function Privacy() {
  return (
    <main className="min-h-screen bg-[#FAFAF9] px-6 py-16 pb-20">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="font-serif text-lg tracking-[0.18em] uppercase text-[#1A1A18] block mb-12">
          Knifomatic
        </Link>

        <h1 className="text-2xl font-medium tracking-wide mb-2">Privacy Policy</h1>
        <p className="text-xs tracking-[0.1em] uppercase text-[#999] mb-10">Last updated: June 22, 2026</p>

        <p className="text-[15px] leading-relaxed text-[#333] mb-4">
          Knifomatic is operated by Gooserocket Corp. This policy explains what information we collect, how we use it, and your rights.
        </p>

        <Section title="Information we collect">
          <p>When you create an account, we collect your email address and a password (stored securely via Supabase Auth). We do not collect your name, phone number, or payment information.</p>
          <p className="mt-3">We store the collections and knives you create in order to sync them across your devices.</p>
          <p className="mt-3">We do not collect any analytics, advertising identifiers, or location data.</p>
        </Section>

        <Section title="How we use your information">
          <p>Your email is used solely to authenticate your account and to send password reset emails when requested. We do not send marketing emails.</p>
          <p className="mt-3">Your collection data is stored on secure servers to enable cross-device sync. We do not sell, share, or use your data for any purpose other than providing the app.</p>
        </Section>

        <Section title="Data storage">
          <p>Your data is stored on servers provided by Supabase, Inc. Data may be stored in the United States or the European Union. Supabase is SOC 2 compliant.</p>
        </Section>

        <Section title="Guest users">
          <p>You may use Knifomatic without creating an account. In this case, all data is stored locally on your device only and is not transmitted to our servers.</p>
        </Section>

        <Section title="Data deletion">
          <p>You may delete your account and all associated data at any time by contacting us at <a href="mailto:support@knifomatic.com" className="underline">support@knifomatic.com</a>. We will process your request within 30 days.</p>
        </Section>

        <Section title="Children">
          <p>Knifomatic is not directed at children under the age of 13. We do not knowingly collect personal information from children.</p>
        </Section>

        <Section title="Changes to this policy">
          <p>We may update this policy from time to time. Changes will be posted on this page with an updated date.</p>
        </Section>

        <div className="w-8 h-px bg-[#D4CFC6] my-10" />
        <p className="text-[15px] text-[#333]">
          Questions? Contact us at <a href="mailto:support@knifomatic.com" className="underline">support@knifomatic.com</a>
        </p>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-9">
      <h2 className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#555] mb-3">{title}</h2>
      <div className="text-[15px] leading-relaxed text-[#333]">{children}</div>
    </div>
  );
}
