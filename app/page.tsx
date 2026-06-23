import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#FAFAF9] flex flex-col items-center justify-center overflow-hidden">
      <Stripes />

      <div className="relative z-10 text-center px-6">
        <h1 className="font-serif text-[clamp(36px,8vw,64px)] font-normal tracking-[0.18em] uppercase text-[#1A1A18]">
          Knifomatic
        </h1>
        <p className="mt-4 text-[11px] tracking-[0.3em] uppercase text-[#888880]">
          Knife inventory &amp; collection manager
        </p>
        <div className="w-px h-12 bg-[#D4CFC6] mx-auto my-10" />
        <p className="text-[11px] tracking-[0.25em] uppercase text-[#BBBBBB]">
          Coming soon &nbsp;&middot;&nbsp; iOS &amp; Android
        </p>
      </div>

      <footer className="absolute bottom-6 w-full text-center text-[11px] tracking-[0.15em] uppercase text-[#CCCCCC] z-10">
        &copy; {new Date().getFullYear()} Gooserocket Corp &nbsp;&middot;&nbsp;
        <Link href="/privacy" className="hover:text-[#999] transition-colors">Privacy</Link>
        &nbsp;&middot;&nbsp;
        <Link href="/support" className="hover:text-[#999] transition-colors">Support</Link>
      </footer>
    </main>
  );
}

function Stripes() {
  const left = [
    { l: '5%',   w: 3,   c: '#E8E4DC' },
    { l: '5.7%', w: 1.5, c: '#D4CFC6' },
    { l: '6.3%', w: 5,   c: '#ECEAE4' },
    { l: '9%',   w: 2,   c: '#D4CFC6' },
    { l: '9.7%', w: 1,   c: '#C8C3BA' },
  ];
  const right = [
    { r: '5%',   w: 3,   c: '#E8E4DC' },
    { r: '5.7%', w: 1.5, c: '#D4CFC6' },
    { r: '6.3%', w: 5,   c: '#ECEAE4' },
    { r: '9%',   w: 2,   c: '#D4CFC6' },
    { r: '9.7%', w: 1,   c: '#C8C3BA' },
    { r: '11%',  w: 2.5, c: '#E0DDD6' },
    { r: '13%',  w: 1,   c: '#C8C3BA' },
    { r: '14%',  w: 3,   c: '#E8E4DC' },
  ];
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {left.map((s, i) => (
        <div key={`l${i}`} className="absolute top-0 h-full" style={{ left: s.l, width: s.w, background: s.c }} />
      ))}
      {right.map((s, i) => (
        <div key={`r${i}`} className="absolute top-0 h-full" style={{ right: s.r, width: s.w, background: s.c }} />
      ))}
    </div>
  );
}
