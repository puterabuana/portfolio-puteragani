'use client';

export default function Footer() {
  return (
    <footer className="relative px-6 md:px-12 py-16 border-t border-bone/[0.08]">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 gap-4 md:gap-8 items-end">
          <div className="col-span-12 md:col-span-6">
            <a
              href="#hero"
              className="font-display text-3xl md:text-4xl tracking-tight italic text-bone hover:text-silver transition-colors"
            >
              pbg<span className="text-silver">.studio</span>
            </a>
            <p className="mt-3 text-muted text-sm font-mono">
              Putera Buana Gani · Independent Studio
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 md:text-right">
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted mb-3">
              Connect
            </div>
            <div className="flex md:justify-end gap-5 flex-wrap text-sm">
              <a
                href="mailto:ganiputerabuana@gmail.com"
                className="link-underline text-silver hover:text-bone transition-colors"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/puterabuana/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-silver hover:text-bone transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/puterabuana"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-silver hover:text-bone transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://puteragani.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-silver hover:text-bone transition-colors"
              >
                Blog
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-bone/[0.08] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted">
            © 2026 Putera Buana Gani. Crafted with intent.
          </div>
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for new projects
          </div>
        </div>
      </div>
    </footer>
  );
}
