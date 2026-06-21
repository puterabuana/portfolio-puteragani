'use client';

const items = [
  'Web Development',
  'Digital Marketing',
  'Content Writing',
  'Data Analytics',
  'Landing Pages',
  'SEO',
];

export default function Marquee() {
  return (
    <section className="py-8 border-y border-bone/[0.08] overflow-hidden">
      <div
        className="flex"
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <div className="flex animate-marquee whitespace-nowrap" style={{ animation: 'marquee 40s linear infinite' }}>
          {[...items, ...items].map((item, i) => (
            <span key={i} className="flex items-center gap-12 pr-12">
              <span
                className={`font-display italic text-2xl md:text-4xl ${
                  i % 2 === 0 ? 'text-bone/50' : 'text-silver/40'
                }`}
              >
                {item}
              </span>
              <span className="text-bone/20">✦</span>
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
