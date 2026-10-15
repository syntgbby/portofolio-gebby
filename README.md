# Cyber portfolio (Next.js App Router)

Next.js 15, React 19, TypeScript, Tailwind CSS 4, lucide-react. No database, no backend.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## Personalize
Edit `src/data/portfolio.ts` (name, email, socials, skills, projects, experience). All values are placeholders.
Put project screenshots in `public/images/` and point each project's `image` to them. Add verified stats to the About section only if you have real ones.

## Contact form
Validated client-side, then opens the visitor's email app via `mailto:` (nothing is sent by the site itself, and the UI says so).
For real delivery, add a Route Handler (`src/app/api/contact/route.ts`) calling an email service such as Resend, keep its key in `.env.local`, and never expose it to the client.

## Environment variables
`NEXT_PUBLIC_SITE_URL` (optional): production URL for canonical and Open Graph. See `.env.example`.

## GitHub and Vercel
```bash
git init && git add . && git commit -m "Initial portfolio"
git remote add origin https://github.com/<you>/<repo>.git && git push -u origin main
```
Then in Vercel: Add New → Project → import the repo → keep default Next.js settings → add `NEXT_PUBLIC_SITE_URL` → Deploy.
