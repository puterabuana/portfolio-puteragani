export interface Project {
  id: string;
  title: string;
  category: string;
  /** Short badge — the sector, so the grid reads like an industry-organised roster. */
  label: string;
  /**
   * Controls badge colour + honest provenance (disclosed plainly in the section intro):
   * - client: real, paying/real-world client (highlighted)
   * - owned: my own live property
   * - neutral: self-initiated build for a real-world brief (real domain, live, audited)
   */
  accent: 'client' | 'owned' | 'neutral';
  description: string;
  /** Headline result — always an independently auditable score, tool named. */
  metric: string;
  metricNote: string;
  span: 'wide' | 'narrow';
  image: string;
  /** Live site — anyone can visit and re-audit. */
  siteUrl: string;
  /** Full case study with evidence + limitations. */
  caseStudyUrl: string;
}

const CASE_STUDY_BASE = 'https://seo.puteragani.com';

export const projects: Project[] = [
  {
    id: 'emberslice',
    title: 'Ember Slice — Coal-Fired Pizza',
    category: 'Restaurant Site · Local SEO',
    label: 'Restaurant',
    accent: 'neutral',
    description:
      'A coal-fired pizza restaurant site I built end-to-end, then optimised — metadata, schema, and audit coverage that lifted it into the high-90s.',
    metric: 'Rank Math 90 → 97',
    metricNote: 'Seobility 88 → 92% · 8 pages',
    span: 'wide',
    image: '/images/projects/emberslice-showcase.webp',
    siteUrl: 'https://emberslice.com/',
    caseStudyUrl: `${CASE_STUDY_BASE}/case-study/emberslice/`,
  },
  {
    id: 'fernwood',
    title: 'Fernwood Dental Care',
    category: 'Dental Clinic · Local SEO',
    label: 'Dental Clinic',
    accent: 'neutral',
    description:
      'A family dental clinic site built and localised for South Austin — keyword localisation, schema markup, sitemap, and an llms.txt for AI search.',
    metric: 'Rank Math 94 → 97',
    metricNote: 'Seobility 83 → 90% · 18 pages',
    span: 'narrow',
    image: '/images/projects/fernwood-showcase.webp',
    siteUrl: 'https://fernwooddentalcare.com/',
    caseStudyUrl: `${CASE_STUDY_BASE}/case-study/fernwood/`,
  },
  {
    id: 'meridianroasters',
    title: 'Meridian Roasters — Coffee E-commerce',
    category: 'E-commerce · Technical SEO',
    label: 'E-commerce',
    accent: 'neutral',
    description:
      'A 14-page specialty-coffee storefront, taken from a thin baseline to a deep, structured, fast build in a single day — content depth, schema, and performance.',
    metric: 'Seobility 57 → 88%',
    metricNote: 'RankNow 86.8 → 94.8 · 14 pages',
    span: 'wide',
    image: '/images/projects/meridianroasters-showcase.webp',
    siteUrl: 'https://meridianroasters.com/',
    caseStudyUrl: `${CASE_STUDY_BASE}/case-study/meridianroasters/`,
  },
  {
    id: 'kerlyfinance',
    title: 'Kerly Finance — Market Intelligence',
    category: 'Finance Publishing · SEO + GEO',
    label: 'Finance',
    accent: 'neutral',
    description:
      'A financial-intelligence publishing site built for depth — richer content, cleaner link context, and stronger mobile performance across the crawl.',
    metric: 'Seobility 80 → 88%',
    metricNote: 'SEO Site Checkup 85 → 90 · AI Search 99%',
    span: 'narrow',
    image: '/images/projects/kerlyfinance-showcase.webp',
    siteUrl: 'https://kerlyfinance.com/',
    caseStudyUrl: `${CASE_STUDY_BASE}/case-study/kerlyfinance/`,
  },
  {
    id: 'puteragani',
    title: 'PuteraGani.com — Editorial Platform',
    category: 'Owned Site · Technical SEO',
    label: 'Owned Project',
    accent: 'owned',
    description:
      'My own editorial platform — a repeatable technical-SEO system across 109 production pages: canonical URLs, structured data, crawl controls, and validation.',
    metric: 'Rank Math 95 / 100',
    metricNote: '109 pages · PageSpeed 98 · Semrush 92%',
    span: 'wide',
    image: '/images/projects/puteragani-showcase.webp',
    siteUrl: 'https://puteragani.com/',
    caseStudyUrl: `${CASE_STUDY_BASE}/case-study/puteragani/`,
  },
  {
    id: 'wena',
    title: 'Wena Self Photo Studio',
    category: 'Local Business · SEO',
    label: 'Client Project',
    accent: 'client',
    description:
      'A real client build for a local self-photo studio — local-intent SEO, search preview, social cards, image alt text, and clean crawlability.',
    metric: 'Rank Math 88 · Seobility 90%',
    metricNote: 'SEOptimer B+ · PageSpeed 99',
    span: 'narrow',
    image: '/images/projects/wena-showcase.webp',
    siteUrl: 'https://wena.my.id/',
    caseStudyUrl: `${CASE_STUDY_BASE}/case-study/wena/`,
  },
];
