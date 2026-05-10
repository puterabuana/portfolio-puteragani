// Project visual SVGs - rendered as React components for clean code structure

export function CoffeeVisual() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full block transition-transform duration-1000 group-hover:scale-105" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="coffee-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2a1f15" />
          <stop offset="100%" stopColor="#0f0a06" />
        </linearGradient>
        <radialGradient id="coffee-glow" cx="0.7" cy="0.3">
          <stop offset="0%" stopColor="rgba(218,165,107,0.4)" />
          <stop offset="100%" stopColor="rgba(218,165,107,0)" />
        </radialGradient>
      </defs>
      <rect width="800" height="500" fill="url(#coffee-bg)" />
      <rect width="800" height="500" fill="url(#coffee-glow)" />
      <rect x="80" y="60" width="640" height="380" rx="8" fill="#1a1a1a" stroke="#333" strokeWidth="1" />
      <rect x="80" y="60" width="640" height="32" rx="8" fill="#222" />
      <circle cx="100" cy="76" r="4" fill="#444" />
      <circle cx="116" cy="76" r="4" fill="#444" />
      <circle cx="132" cy="76" r="4" fill="#444" />
      <text x="120" y="160" fontFamily="Georgia, serif" fontStyle="italic" fontSize="48" fill="#daa56b">cafe</text>
      <text x="120" y="195" fontFamily="Georgia, serif" fontStyle="italic" fontSize="48" fill="#f5f3ee">noir.</text>
      <line x1="120" y1="225" x2="200" y2="225" stroke="#daa56b" strokeWidth="1" />
      <text x="120" y="250" fontFamily="monospace" fontSize="9" letterSpacing="2" fill="#888">EST. 2024 · SEMARANG</text>
      <text x="120" y="310" fontFamily="Helvetica" fontSize="11" fill="#aaa">Slow-roasted beans.</text>
      <text x="120" y="328" fontFamily="Helvetica" fontSize="11" fill="#aaa">Carefully crafted spaces.</text>
      <rect x="120" y="370" width="120" height="36" rx="18" fill="#f5f3ee" />
      <text x="180" y="392" fontFamily="monospace" fontSize="9" letterSpacing="2" fill="#1a1a1a" textAnchor="middle">RESERVE</text>
      <rect x="450" y="120" width="220" height="280" rx="4" fill="#3a2a1a" />
      <circle cx="560" cy="220" r="50" fill="#daa56b" opacity="0.2" />
      <circle cx="560" cy="220" r="30" fill="#daa56b" opacity="0.4" />
      <text x="560" y="380" fontFamily="Georgia, serif" fontStyle="italic" fontSize="12" fill="#daa56b" textAnchor="middle">house blend nº 4</text>
    </svg>
  );
}

export function AIVisual() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full block transition-transform duration-1000 group-hover:scale-105" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ai-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0a0e1a" />
          <stop offset="100%" stopColor="#000" />
        </linearGradient>
        <radialGradient id="ai-glow" cx="0.5" cy="0.5">
          <stop offset="0%" stopColor="rgba(120,180,255,0.3)" />
          <stop offset="100%" stopColor="rgba(120,180,255,0)" />
        </radialGradient>
      </defs>
      <rect width="800" height="500" fill="url(#ai-bg)" />
      <rect width="800" height="500" fill="url(#ai-glow)" />
      <g stroke="#1a2030" strokeWidth="0.5" opacity="0.5">
        <line x1="0" y1="100" x2="800" y2="100" />
        <line x1="0" y1="200" x2="800" y2="200" />
        <line x1="0" y1="300" x2="800" y2="300" />
        <line x1="0" y1="400" x2="800" y2="400" />
      </g>
      <circle cx="600" cy="250" r="100" fill="#3b82f6" opacity="0.15" />
      <circle cx="600" cy="250" r="60" fill="#3b82f6" opacity="0.25" />
      <circle cx="600" cy="250" r="30" fill="#60a5fa" opacity="0.6" />
      <text x="60" y="200" fontFamily="Helvetica" fontWeight="bold" fontSize="42" fill="#f5f3ee">Cognition</text>
      <text x="60" y="245" fontFamily="Helvetica" fontWeight="300" fontStyle="italic" fontSize="42" fill="#60a5fa">in motion.</text>
      <text x="60" y="290" fontFamily="monospace" fontSize="9" letterSpacing="2" fill="#888">AI INFRASTRUCTURE FOR TEAMS</text>
      <rect x="60" y="320" width="110" height="32" rx="16" fill="#60a5fa" />
      <text x="115" y="340" fontFamily="monospace" fontSize="9" letterSpacing="2" fill="#000" textAnchor="middle">EARLY ACCESS</text>
    </svg>
  );
}

export function FashionVisual() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full block transition-transform duration-1000 group-hover:scale-105" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fashion-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a0f14" />
          <stop offset="100%" stopColor="#0a0506" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#fashion-bg)" />
      <g transform="translate(80, 80)">
        <rect x="0" y="0" width="200" height="280" rx="20" fill="#1a1a1a" stroke="#333" strokeWidth="1" />
        <rect x="20" y="20" width="160" height="200" rx="6" fill="#3a2026" />
        <text x="100" y="120" fontFamily="Georgia, serif" fontStyle="italic" fontSize="28" fill="#e8c4ac" textAnchor="middle">noir</text>
        <text x="100" y="148" fontFamily="Georgia, serif" fontStyle="italic" fontSize="14" fill="#e8c4ac" textAnchor="middle">collection</text>
        <text x="20" y="245" fontFamily="Helvetica" fontSize="10" fontWeight="bold" fill="#f5f3ee">@noir.atelier</text>
        <text x="20" y="262" fontFamily="Helvetica" fontSize="9" fill="#888">FW26 — out now</text>
      </g>
      <g transform="translate(310, 100)"><rect width="100" height="100" rx="4" fill="#2a1518" /></g>
      <g transform="translate(420, 100)"><rect width="100" height="100" rx="4" fill="#3a2026" /><text x="50" y="58" fontFamily="Helvetica" fontSize="9" letterSpacing="2" fill="#f5f3ee" textAnchor="middle">DROP</text><text x="50" y="75" fontFamily="Helvetica" fontWeight="bold" fontSize="12" fill="#f5f3ee" textAnchor="middle">III</text></g>
      <g transform="translate(530, 100)"><rect width="100" height="100" rx="4" fill="#1a1014" /><text x="50" y="40" fontFamily="Helvetica" fontSize="8" letterSpacing="2" fill="#e8c4ac" textAnchor="middle">QUIETLY</text><text x="50" y="68" fontFamily="Helvetica" fontSize="8" letterSpacing="2" fill="#e8c4ac" textAnchor="middle">LOUD</text></g>
      <g transform="translate(310, 210)"><rect width="100" height="100" rx="4" fill="#3a2026" /></g>
      <g transform="translate(420, 210)"><rect width="100" height="100" rx="4" fill="#1a1014" /><text x="50" y="55" fontFamily="Georgia, serif" fontStyle="italic" fontSize="20" fill="#e8c4ac" textAnchor="middle">noir</text></g>
      <g transform="translate(530, 210)"><rect width="100" height="100" rx="4" fill="#2a1518" /></g>
    </svg>
  );
}

export function EsportsVisual() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full block transition-transform duration-1000 group-hover:scale-105" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="esp-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0d0011" />
          <stop offset="100%" stopColor="#1a0a1f" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#esp-bg)" />
      <g transform="translate(400, 250)">
        <polygon points="-80,-60 80,-60 100,0 80,60 -80,60 -100,0" fill="none" stroke="#a855f7" strokeWidth="1.5" />
        <polygon points="-50,-30 50,-30 70,0 50,30 -50,30 -70,0" fill="none" stroke="#c084fc" strokeWidth="1" />
        <text x="0" y="8" fontFamily="Helvetica" fontWeight="900" fontSize="36" fill="#f5f3ee" textAnchor="middle" letterSpacing="4">VEX</text>
      </g>
      <text x="60" y="80" fontFamily="monospace" fontSize="9" letterSpacing="3" fill="#888">VEX ESPORTS · BRAND IDENTITY · 2025</text>
    </svg>
  );
}

export function DashboardVisual() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full block transition-transform duration-1000 group-hover:scale-105" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dash-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#0a0a0a" /><stop offset="100%" stopColor="#111" /></linearGradient>
        <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#10b981" /><stop offset="100%" stopColor="#34d399" /></linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#dash-bg)" />
      <rect x="0" y="0" width="160" height="500" fill="#0a0a0a" stroke="#1a1a1a" strokeWidth="1" />
      <text x="20" y="40" fontFamily="Helvetica" fontWeight="bold" fontSize="14" fill="#f5f3ee">⬡ Pulse</text>
      <text x="20" y="80" fontFamily="Helvetica" fontSize="10" fill="#10b981">● Overview</text>
      <g transform="translate(180, 40)"><rect width="180" height="100" rx="8" fill="#161616" stroke="#222" /><text x="20" y="30" fontFamily="monospace" fontSize="9" letterSpacing="2" fill="#666">REVENUE</text><text x="20" y="64" fontFamily="Helvetica" fontWeight="bold" fontSize="22" fill="#f5f3ee">$24.8K</text><text x="20" y="84" fontFamily="monospace" fontSize="9" fill="#10b981">▲ 12.4%</text></g>
      <g transform="translate(380, 40)"><rect width="180" height="100" rx="8" fill="#161616" stroke="#222" /><text x="20" y="30" fontFamily="monospace" fontSize="9" letterSpacing="2" fill="#666">USERS</text><text x="20" y="64" fontFamily="Helvetica" fontWeight="bold" fontSize="22" fill="#f5f3ee">8,412</text></g>
      <g transform="translate(580, 40)"><rect width="180" height="100" rx="8" fill="#161616" stroke="#222" /><text x="20" y="30" fontFamily="monospace" fontSize="9" letterSpacing="2" fill="#666">CTR</text><text x="20" y="64" fontFamily="Helvetica" fontWeight="bold" fontSize="22" fill="#f5f3ee">4.32%</text></g>
      <g transform="translate(180, 160)"><rect width="580" height="280" rx="8" fill="#161616" stroke="#222" /><path d="M 30 200 Q 100 180, 130 160 T 230 130 T 330 145 T 430 100 T 530 75" fill="none" stroke="url(#line-grad)" strokeWidth="2" /><circle cx="530" cy="75" r="4" fill="#10b981" /></g>
    </svg>
  );
}

export function LocalVisual() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full block transition-transform duration-1000 group-hover:scale-105" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="local-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#101814" /><stop offset="100%" stopColor="#050805" /></linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#local-bg)" />
      <g transform="translate(80, 60)">
        <rect width="180" height="380" rx="32" fill="#0a0a0a" stroke="#222" strokeWidth="2" />
        <rect x="14" y="14" width="152" height="352" rx="22" fill="#161616" />
        <rect x="22" y="40" width="136" height="136" rx="6" fill="#1f3329" />
        <text x="90" y="105" fontFamily="Georgia, serif" fontStyle="italic" fontSize="16" fill="#86efac" textAnchor="middle">fresh.</text>
        <text x="90" y="125" fontFamily="Georgia, serif" fontStyle="italic" fontSize="16" fill="#86efac" textAnchor="middle">daily.</text>
        <text x="22" y="195" fontFamily="Helvetica" fontWeight="bold" fontSize="9" fill="#f5f3ee">@verde.market</text>
      </g>
      <g transform="translate(310, 80)">
        <text x="0" y="0" fontFamily="monospace" fontSize="9" letterSpacing="2" fill="#666">CAMPAIGN PERFORMANCE</text>
        <text x="0" y="22" fontFamily="Georgia, serif" fontStyle="italic" fontSize="22" fill="#f5f3ee">Verde Market.</text>
        <g transform="translate(0, 80)"><text x="0" y="0" fontFamily="Helvetica" fontWeight="bold" fontSize="32" fill="#86efac">+43%</text><text x="0" y="18" fontFamily="monospace" fontSize="9" fill="#666">CTR</text></g>
        <g transform="translate(150, 80)"><text x="0" y="0" fontFamily="Helvetica" fontWeight="bold" fontSize="32" fill="#86efac">2.1k</text><text x="0" y="18" fontFamily="monospace" fontSize="9" fill="#666">FOLLOWERS</text></g>
        <g transform="translate(0, 160)"><text x="0" y="0" fontFamily="Helvetica" fontWeight="bold" fontSize="32" fill="#86efac">+58%</text><text x="0" y="18" fontFamily="monospace" fontSize="9" fill="#666">ENGAGEMENT</text></g>
        <g transform="translate(150, 160)"><text x="0" y="0" fontFamily="Helvetica" fontWeight="bold" fontSize="32" fill="#86efac">$0.18</text><text x="0" y="18" fontFamily="monospace" fontSize="9" fill="#666">CPC</text></g>
      </g>
    </svg>
  );
}

export const visualMap = {
  coffee: CoffeeVisual,
  ai: AIVisual,
  fashion: FashionVisual,
  esports: EsportsVisual,
  dashboard: DashboardVisual,
  local: LocalVisual,
};
