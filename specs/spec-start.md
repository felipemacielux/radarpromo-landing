Landing Page — Ofertas WhatsApp Group
Goal

Convert visitors arriving from TikTok/Instagram into WhatsApp group members. This page has exactly one job: show a few compelling offers, then push people to click "Entrar no Grupo do WhatsApp."

It is a static, content-driven page — no backend, no database. A separate Python bot (site_updater.py) writes a JSON file with the day's offers and pushes it via git push, which triggers an auto-deploy on Cloudflare Pages / GitHub Pages.

Tech Stack
React (via Vite) — component structure, fast dev/build
Plain JS (no TypeScript unless you want it later)
Tailwind CSS (recommended, not required) — speeds up styling for a small page like this
Static hosting — Cloudflare Pages or GitHub Pages (both free, HTTPS included, auto-deploy on push)
Analytics — GA4 or Cloudflare Web Analytics (free tier)

No server, no API calls beyond fetching a static JSON file.

Data Shape

The bot writes an ofertas.json file that the page reads. Expected shape:

json
{
  "atualizado_em": "2026-08-25T09:00:00-03:00",
  "ofertas": [
    {
      "titulo": "Fone Bluetooth XYZ",
      "preco": "89,90",
      "preco_original": "149,90",
      "desconto": 40,
      "imagem": "https://...",
      "cupom": "PROMO20",
      "link": "https://...",
      "loja": "Amazon"
    }
  ]
}

Decide before Phase 3: does this JSON live inside the React repo (bot commits directly to public/ofertas.json or similar — simplest, one repo/one push updates everything) or does the page fetch it from an external location? Default recommendation: inside the repo, under public/.

Components
Hero — headline, short pitch, primary CTA button
OfferCard — image, título, preço, preço original (strikethrough), % desconto badge, cupom, "Ver oferta" link
OfferGrid — renders 2-3 OfferCards from ofertas.json
CTAButton — reusable, big, links to the WhatsApp group invite link
Footer — small print, maybe social links (TikTok/Instagram)
EmptyState — fallback UI if ofertas.json is missing, empty, or stale
Phases
Phase 1 — Project Setup
Scaffold with Vite (npm create vite@latest landing-page -- --template react)
Get a blank page deployed to Cloudflare Pages or GitHub Pages
Confirm the deploy pipeline works end-to-end before any real design work
Phase 2 — Static Structure & Components
Build Hero, OfferCard, OfferGrid, CTAButton, Footer with mock/placeholder data matching the JSON shape above
No live data yet — just get the layout and component structure right
Phase 3 — Data Wiring
Fetch/import the real ofertas.json on page load
Handle the "no data yet" / stale data case with EmptyState
Decide and implement where the JSON lives (see Data Shape section)
Phase 4 — Styling & Polish
Visual identity (colors, type, spacing)
Mobile-first responsive layout — most traffic comes from in-app browsers (TikTok/Instagram)
Discount badges, loading state, empty state styling
Phase 5 — Analytics + Deploy Pipeline
Wire up GA4 or Cloudflare Web Analytics
Connect custom domain (.com.br or .com)
Confirm site_updater.py's git push actually triggers a redeploy
Phase 6 — SEO Basics
Meta tags, Open Graph tags (important — links get shared in WhatsApp/TikTok bios, want a nice preview card)
Sitemap, if indexing the "melhores da semana" weekly content matters
Prerequisites (already installed / to install)
Tool	Purpose
Node.js (LTS)	Runtime for build tooling; installing it also gives you npm
Git	Version control; what site_updater.py uses to push updates
VS Code (or any editor)	—
Vite	Not a separate install — scaffolded via npm create vite@latest