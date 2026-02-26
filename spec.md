# Nadar Gijendar Portfolio

## Current State
Fresh Caffeine project with React + TypeScript frontend and empty Motoko backend. No components exist yet beyond the default scaffolding.

## Requested Changes (Diff)

### Add
- Ultra-premium single-page portfolio for CS student Nadar Gijendar Alagendran
- Dark glassmorphism theme: #0a0a0f base, #0d1117 secondary, neon gradients (#00d4ff → #7c3aed → #00f5ff)
- Sticky glassmorphism navbar with hamburger mobile menu and scroll progress bar
- Hero section: animated gradient name, typing effect subtitles, CTA buttons, social icons, floating blobs + particles
- About section: two-column layout with glass card bio text and animated stat counters (92.80%, 1 app, 6+ langs, 4 certs)
- Skills section: three glass card grids (Languages, Tools & Platforms, Concepts) with glowing badge pills
- Projects section: premium Lexpert card with 3D tilt, tech tags, bullet points, Live Demo + GitHub buttons
- Certifications section: 2x2 grid of glass certificate cards with shine hover animation
- Achievements section: animated vertical timeline with glowing dots
- Education section: vertical timeline cards with three entries
- Contact section: two-column layout, contact info glass cards + working contact form (POST to backend /contact)
- Footer: copyright line
- Preloader animation with fade-out
- Custom cursor glow on desktop
- Dark/light mode toggle saved to localStorage
- AOS scroll reveal on all sections
- Smooth scroll, active nav link highlighting

### Modify
- Replace default App.tsx with full portfolio single-page app
- Update index.css with glassmorphism variables, custom scrollbar, animations

### Remove
- Default placeholder content

## Implementation Plan
1. Load design-system-oklch and shadcn-components skills for token mapping
2. Build App.tsx as full portfolio with all 8 sections as React components
3. Add Motoko backend /contact endpoint that logs messages
4. Wire contact form to backend via actor call
5. Implement all animations: typing effect, counters, AOS, blobs, particles, cursor glow
6. Full mobile responsiveness with Tailwind breakpoints
7. Dark/light mode toggle with localStorage persistence

## UX Notes
- Preloader fades out after mount
- Typing effect cycles: "Computer Science Undergraduate" → "Web Developer" → "AI Enthusiast" → "Full-Stack Builder"
- Counters animate when About section enters viewport
- Project card has 3D tilt on mousemove
- Navbar background becomes glassmorphism after 80px scroll
- Contact form shows success/error toast on submission
- All section entries use AOS fade-up with stagger
