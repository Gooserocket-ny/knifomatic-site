import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support — Knifomatic',
};

const faqs = [
  {
    q: 'How do I reset my password?',
    a: 'On the sign-in screen, tap "Forgot password?" and enter your email address. You will receive a reset link within a few minutes.',
  },
  {
    q: 'My collections disappeared after reinstalling the app',
    a: 'Make sure you are signed in with the same account you used before. Your data is synced to the cloud automatically when you log in — it may take a few seconds to appear.',
  },
  {
    q: 'Can I use the app without an account?',
    a: 'Yes. You can use Knifomatic as a guest. Your data will be stored locally on your device only and will not sync across devices.',
  },
  {
    q: 'How do I delete my account?',
    a: 'Send us an email at support@knifomatic.com and we will delete your account and all associated data within 30 days.',
  },
];

export default function Support() {
  return (
    <main className="min-h-screen bg-[#FAFAF9] px-6 py-16 pb-20">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="font-serif text-lg tracking-[0.18em] uppercase text-[#1A1A18] block mb-12">
          Knifomatic
        </Link>

        <h1 className="text-2xl font-medium tracking-wide mb-3">Support</h1>
        <p className="text-[15px] leading-relaxed text-[#333] mb-12">Need help with Knifomatic? We're here for you.</p>

        <h2 className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#555] mb-6">Frequently asked questions</h2>

        <div className="flex flex-col gap-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-t border-[#E0DDD6] pt-5">
              <p className="text-[15px] font-medium text-[#1A1A18] mb-2">{faq.q}</p>
              <p className="text-[15px] leading-relaxed text-[#555]">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="w-8 h-px bg-[#D4CFC6] my-10" />

        <h2 className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#555] mb-4">Contact us</h2>
        <div className="border border-[#E0DDD6] rounded-lg p-6 bg-white">
          <p className="text-[15px] text-[#333]">
            Email us at{' '}
            <a href="mailto:support@knifomatic.com" className="font-medium text-[#1A1A18] underline">
              support@knifomatic.com
            </a>{' '}
            — we typically reply within 1–2 business days.
          </p>
        </div>
      </div>
    </main>
  );
}
