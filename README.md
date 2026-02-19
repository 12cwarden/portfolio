# Portfolio

Personal developer portfolio for Cory Warden. Built with Parcel, Bootstrap 5, and vanilla JavaScript.

## Setup

```bash
npm install
npm start
```

**Windows users:** If you see `ENOENT: no such file or directory, unlink` errors (a known Parcel bug on Windows), run `npm run clean` then `npm start` again. Or use `npm run clean:start` to clear the cache and start in one step.

## Build for GitHub Pages

```bash
npm run build
```

The build uses `--public-url ./` so assets work correctly when deployed to a subpath (e.g. `username.github.io/portfolio/`).

## Preview the built site locally

After building, you can preview the production build with:

```bash
npm run preview
```

Then open http://localhost:3000. **Do not** open `dist/index.html` directly in the browser (file://) — CSS and JS won't load correctly. Use `npm start` for development or `npm run preview` after building.

## Deploy to GitHub Pages

1. In your repo: **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` will build and deploy automatically

## Project Structure

- `index.html` — Main page
- `index.js` — Entry point (scroll reveal, tilt effects)
- `styles.scss` / `sass/` — Styles
- `assets/` — Images, resume, favicon. Add `hero-bg.jpg` for an optional hero section background.
- `scripts/` — Animation scripts
- `data/` — ScrollReveal config
