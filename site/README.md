# mccraw.me

Personal site for Brandon McCraw — plain HTML/CSS/JS, no build step, no framework.
Hosted on GitLab, deployed by Cloudflare Pages on every push to `main`.

## Structure

```
index.html          all page content
css/styles.css       design system + layout
js/main.js            scroll-reveal + footer date stamp
```

There's no build tool on purpose — editing a paragraph means editing a paragraph,
not touching a bundler config. If the site grows enough to want componentization,
that's a good moment to migrate to Astro, but it isn't needed yet.

## Before you go live

1. **Contact links** — done. LinkedIn is live, and the email link points at
   `hello@mccraw.me`, a confirmed alternate address.
2. **Copy pass** — the experience section is condensed from your resume. Read it
   over and adjust anything that undersells (or oversells) a role.

## Run it locally

No install required — any static file server works:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Deploy to GitHub Pages with your custom domain

1. Push this repo to GitHub.
2. In the repo's **Settings → Pages**, set the source to **GitHub Actions**
   (the workflow in this repo handles the rest).
3. In **Settings → Pages → Custom domain**, enter `mccraw.me`. GitHub will pick up
   the `CNAME` file already in this repo.
4. At your domain registrar, point `mccraw.me` at GitHub Pages:
   - Four `A` records at the apex (`@`) pointing to GitHub's Pages IPs
     (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`), **or**
   - A `CNAME` record for `www` → `<your-username>.github.io`, if you'd rather
     serve from `www.mccraw.me`.
   - Full current instructions: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
5. Push to `main`. The Action in `.github/workflows/deploy.yml` builds and
   deploys automatically — no manual step after that.

(Cloudflare Pages or Netlify work the same way if you'd rather host there instead
of GitHub Pages — same static files, different dashboard for the custom domain.)

## Making ongoing edits with Claude Code / Cowork

This repo is intentionally simple so an agent can edit it directly:

- **Claude Code**: point it at this repo and ask for changes in plain language —
  "add my new role at X to the experience section," "swap the accent color for
  something warmer." It edits `index.html`/`css/styles.css` directly and can
  open a PR; merging to `main` triggers the deploy.
- **Cowork**: better for larger passes — a full copy rewrite, a new section,
  a visual refresh — where you want it to work across the whole page rather
  than one edit at a time.

## Design notes

Dark graphite background, not pure black. Teal for "live," amber for
credentials. Two type roles: **Space Grotesk** for display/headlines,
**IBM Plex Sans** for body copy, **IBM Plex Mono** for data/labels/dates —
chosen because IBM Plex was designed for engineering documentation, which
fits the subject. The signature element is the experience section rendered
as a service-status board (status dot, uptime-style duration, live pulse on
the current role) — a small nod to reading a career the way you'd read a
fleet of services.

Respects `prefers-reduced-motion`. Responsive down to small phones.
