export interface Project {
  id: string;
  title: string;
  category: string;
  label: 'Concept Project' | 'Personal Exploration' | 'Case Study';
  description: string;
  result: string;
  resultNote: string;
  span: 'wide' | 'narrow';
  image: string;
}

export const projects: Project[] = [
  {
    id: 'cafe-noir',
    title: 'Café Noir — Website Redesign',
    category: 'Web Development · UX',
    label: 'Concept Project',
    description:
      'A warm, cinematic redesign for an independent specialty coffee shop, built with an AI-accelerated workflow — storytelling, ambience, and a seamless reservation experience.',
    result: 'Full Website Redesign',
    resultNote: 'Responsive · Reservation UX',
    span: 'wide',
    image: '/images/projects/cafe-noir.png',
  },
  {
    id: 'cognition',
    title: 'Cognition — AI SaaS Landing',
    category: 'Landing Page · Web Dev',
    label: 'Case Study',
    description:
      'A conversion-focused landing page for an AI infrastructure SaaS, built to drive sign-ups and communicate enterprise-grade value with clarity.',
    result: 'Conversion Landing Page',
    resultNote: 'Hero · Pricing · CTA System',
    span: 'narrow',
    image: '/images/projects/cognition.png',
  },
  {
    id: 'aurent',
    title: 'Aurént — Modern Minimalism',
    category: 'Social Campaign · Branding',
    label: 'Personal Exploration',
    description:
      'A minimalist social campaign for AURÉNT — elevating brand presence with a cohesive, timeless visual identity across Instagram.',
    result: 'Social Visual Identity',
    resultNote: 'Feed System · Templates · Tone',
    span: 'narrow',
    image: '/images/projects/aurent.png',
  },
  {
    id: 'nexis',
    title: 'Nexis — Brand Identity System',
    category: 'Logo · Brand Guidelines',
    label: 'Concept Project',
    description:
      'Full brand identity for Nexis — a modern, geometric mark built around the essence of "Connect. Build. Grow.", with complete usage guidelines.',
    result: 'Full Brand System',
    resultNote: 'Logo · Palette · Type · Applications',
    span: 'wide',
    image: '/images/projects/nexis.png',
  },
  {
    id: 'pulse',
    title: 'Pulse — From Raw Data to Insights',
    category: 'Dashboard · Data Visualization',
    label: 'Concept Project',
    description:
      'An analytics dashboard concept turning messy raw data into clean, actionable insights — built around clarity, hierarchy, and forecasting.',
    result: '4-Step Data Pipeline',
    resultNote: 'Raw → Processed → Structured → Insights',
    span: 'wide',
    image: '/images/projects/pulse.png',
  },
  {
    id: 'verde-market',
    title: 'Verde Market — Local Launch',
    category: 'Digital Marketing · Campaign',
    label: 'Concept Project',
    description:
      'A two-week multi-channel digital marketing sprint for a local organic grocery brand. Built around measurable performance and community growth.',
    result: 'Multi-Channel Campaign Plan',
    resultNote: 'Strategy · Creatives · Targeting',
    span: 'narrow',
    image: '/images/projects/verde-market.png',
  },
];
