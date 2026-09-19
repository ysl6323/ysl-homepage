# Personal Website — Shanglin Yuan

Personal website of **Shanglin Yuan (袁尚林)**, M.S. student at HUST Vision Lab
(Huazhong University of Science and Technology), researching Embodied AI and
Image/Video Generation.

- **Live site:** https://ysl6323.github.io/Personal-Website-ShanglinYuan/
- **Stack:** [Astro](https://astro.build) 5 + Tailwind CSS 4, deployed to GitHub Pages.

## Structure

```
src/
  config.ts               # personal info, links, education, experience, news
  content/papers/*.md     # publications (frontmatter-driven)
  content/notes/*.md      # notes (three categories: notes / radar / life)
  pages/                  # home, publications, about, notes, guestbook
  components/             # nav, footer, paper card, giscus, icons
public/admin/             # Sveltia CMS (in-browser editing)
public/images/            # avatar, paper teasers
```

## Writing notes (in-browser editor)

The site ships with **Sveltia CMS** so you can write notes without touching Git:

1. Go to `/admin` (i.e. `https://ysl6323.github.io/Personal-Website-ShanglinYuan/admin/`).
2. Click **Sign in with Token**, paste a GitHub
   [personal access token](https://github.com/settings/tokens) with **repo**
   scope, and confirm.
3. Edit the **随笔 Notes** or **论文 Papers** collection. Changes are committed
   to this repo and re-deployed automatically.

You can also edit files directly on GitHub — every push to `main` triggers a rebuild.

## Comments / Guestbook

Comments use [Giscus](https://giscus.app) (GitHub Discussions backend). This is a
**one-time setup step**: install the
[giscus GitHub App](https://github.com/apps/giscus) on this repository, otherwise
the comment box will not render.

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static build -> dist/
```

## Deployment

`main` → GitHub Actions (`.github/workflows/deploy.yml`) builds and publishes to
GitHub Pages. The site `base` is set to `/Personal-Website-ShanglinYuan` in
`astro.config.mjs`; change it to `/` if you add a custom domain or rename the
repo to `ysl6323.github.io`.
