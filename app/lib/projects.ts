export interface Project {
  id: string;
  title: string;
  category: string;
  label: 'Concept Project' | 'Personal Exploration' | 'Case Study';
  description: string;
  result: string;
  resultNote: string;
  span: 'wide' | 'narrow';
  visualKey: 'coffee' | 'ai' | 'fashion' | 'esports' | 'dashboard' | 'local';
}

export const projects: Project[] = [
  {
    id: 'cafe-noir',
    title: 'Café Noir — Website Redesign',
    category: 'Web · Brand',
    label: 'Concept Project',
    description:
      'A warm, cinematic redesign for an independent specialty coffee shop, focused on storytelling and reservations.',
    result: '+147% session time',
    resultNote: 'Concept metric',
    span: 'wide',
    visualKey: 'coffee',
  },
  {
    id: 'cognition-ai',
    title: 'Cognition — AI SaaS Landing',
    category: 'Landing · UX',
    label: 'Case Study',
    description:
      'Conversion-focused landing page for an early-stage AI infrastructure startup.',
    result: '+38% sign-ups',
    resultNote: 'vs. baseline',
    span: 'narrow',
    visualKey: 'ai',
  },
  {
    id: 'noir-atelier',
    title: 'Noir Atelier — Social Campaign',
    category: 'Social · Brand',
    label: 'Personal Exploration',
    description: 'Visual system + IG content for a fictional fashion brand drop.',
    result: '+212% engagement',
    resultNote: 'Concept metric',
    span: 'narrow',
    visualKey: 'fashion',
  },
  {
    id: 'vex-esports',
    title: 'VEX Esports — Brand Identity',
    category: 'Identity · Logo',
    label: 'Concept Project',
    description:
      'Logo system, monogram, and visual rules for a fictional competitive esports team.',
    result: 'Full brand system',
    resultNote: '12 deliverables',
    span: 'wide',
    visualKey: 'esports',
  },
  {
    id: 'pulse-dashboard',
    title: 'Pulse — Analytics Dashboard UI',
    category: 'UI · Data Viz',
    label: 'Concept Project',
    description: 'A clean, data-dense dashboard concept built around clarity and hierarchy.',
    result: '14 screens',
    resultNote: 'Full design system',
    span: 'wide',
    visualKey: 'dashboard',
  },
  {
    id: 'verde-market',
    title: 'Verde Market — Local Launch',
    category: 'Marketing',
    label: 'Case Study',
    description: 'Two-week digital marketing sprint for a local organic grocery brand.',
    result: '+43% CTR',
    resultNote: '14-day campaign',
    span: 'narrow',
    visualKey: 'local',
  },
];
