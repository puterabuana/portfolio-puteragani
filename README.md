# PBG.STUDIO — Personal Portfolio

A premium, cinematic portfolio website for **Putera Buana Gani** — Digital Marketing Specialist · Graphic Designer · Data Entry Professional.

Built for international freelance positioning (Upwork, Freelancer, Fiverr, LinkedIn).

---

## ✨ Features

- **Cinematic dark theme** — pure black with soft white/silver accents
- **Smooth scroll storytelling** — Lenis-powered easing throughout
- **Hero parallax + word-mask reveal animations**
- **Custom magnetic cursor** with hover states (desktop only)
- **Animated stat counters** triggered on scroll
- **Glass-morphism cards** with subtle hover lift
- **Custom SVG project visuals** for all 6 case studies
- **Real certificate verification links** (Google, Microsoft, Unilever)
- **Fully responsive** — mobile, tablet, desktop
- **Performance-tuned** — `next/font`, lazy reveals, no heavy assets

---

## 🛠 Tech Stack

| Layer       | Tool                  |
|-------------|------------------------|
| Framework   | Next.js 14 (App Router) |
| Language    | TypeScript             |
| Styling     | Tailwind CSS           |
| Animation   | Framer Motion          |
| Smooth scroll | Lenis                |
| Fonts       | Fraunces, Geist, Geist Mono (via `next/font`) |

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open in browser
http://localhost:3000
```

For production:

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── CustomCursor.tsx
│   │   ├── Loader.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectVisuals.tsx   # 6 custom SVG project visuals
│   │   ├── Reveal.tsx           # Scroll-triggered fade/slide wrapper
│   │   └── SmoothScroll.tsx
│   ├── lib/
│   │   └── projects.ts          # Project data array
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Marquee.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Work.tsx
│   │   ├── Stats.tsx
│   │   ├── Certifications.tsx
│   │   ├── WhyMe.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── images/
│       └── profile.png          # Profile photo
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🎨 Customization Guide

**Replace project case studies:**
Edit `app/lib/projects.ts` to swap titles, descriptions, categories, and result metrics.

**Add a new project visual:**
1. Create a new SVG component in `app/components/ProjectVisuals.tsx`
2. Add it to the `visualMap` export
3. Reference its key in `projects.ts`

**Update certifications:**
Edit the `certs` array in `app/sections/Certifications.tsx`.

**Change the color palette:**
Update CSS variables in `app/globals.css` and `tailwind.config.ts`.

**Replace the profile photo:**
Drop a new image at `public/images/profile.png`.

---

## 🌐 Deployment

Recommended: deploy to **Vercel** in one click.

```bash
npx vercel
```

Other options: Netlify, Cloudflare Pages, or any Node host.

---

## 📬 Contact

- **Email**: ganiputerabuana@gmail.com
- **LinkedIn**: [/in/puterabuana](https://www.linkedin.com/in/puterabuana/)
- **Instagram**: [@puterabuana](https://www.instagram.com/puterabuana)
- **Blog**: puteragani.com

---

© 2026 Putera Buana Gani. Crafted with intent.
