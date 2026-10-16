# Ulises Fernández — Personal portfolio

A responsive portfolio built with React and Vite. It features a photo-led introduction, three screenshot-led projects, project filters, accessible project-detail dialogs, two personal photos, skills, and links to GitHub and LinkedIn.

The palette combines brown (`#35130A`), green (`#11C56E`), and blue (`#28498C`) with soft gradients and interaction transitions. The header includes an English/Spanish toggle. English is the default; a visitor’s selection is remembered locally.

## Run locally

Use Node.js 24 LTS, matching the deployment workflow.

```bash
npm ci
npm run dev
```

Open **http://localhost:5173/personal_portfolio/**.

## Production build

```bash
npm run build
npm run preview
```

Open **http://localhost:4173/personal_portfolio/** to check the production build.

## Deploy to GitHub Pages

The site is configured for **https://ulisesf04.github.io/personal_portfolio/**.

1. In the repository’s [Settings → Pages](https://github.com/UlisesF04/personal_portfolio/settings/pages), set **Build and deployment → Source** to **GitHub Actions**.
2. Push the prepared commit to `main`:

   ```bash
   git push origin main
   ```

3. In the repository’s **Actions** tab, watch **Deploy portfolio to GitHub Pages**. The site becomes available at the URL above after the deployment succeeds.

The workflow in `.github/workflows/deploy.yml` runs on pushes to `main` and can also be started manually from the Actions tab. It installs the locked dependencies with `npm ci`, builds with Node.js 24, and publishes only `dist/` using the official GitHub Pages actions.

Vite’s `base` is `/personal_portfolio/`, so scripts, styles, fonts, images, and the favicon load under the repository’s Pages path. Navigation uses section anchors, so no server-side route rewrites are needed. Build output and dependencies are excluded from Git.

## Update the content

- `src/data.js`: profile links, bilingual project descriptions, repository links, live demos, technologies, and skills.
- `src/locales.js`: English and Spanish interface text, accessible labels, and page metadata.
- `src/i18n.jsx`: language state, saved preferences, and document language updates.
- `src/App.jsx`: page sections, project filtering, language toggle, and native dialog interactions.
- `src/styles.css`: color and type tokens, layouts, and responsive styles.
- `media/`: the original portraits (`Foto.png` in the introduction and `Foto2.jpg` in About) and project screenshots.
- `media/optimized/`: lightweight WebP copies used by the site. Vite bundles these images.
- `public/favicon.svg`: the portfolio monogram.

Manrope and DM Sans are self-hosted through Fontsource. The page respects reduced-motion preferences and supports keyboard navigation.

After replacing the source images, run `npm run images` to regenerate the optimized copies before building.

## Project sources

Descriptions and technical details are based on these project READMEs:

- [ProyectoEscuela](https://github.com/UlisesF04/ProyectoEscuela)
- [Personal Habit Tracker / HabitFlow](https://github.com/UlisesF04/Personal-Habit-Tracker)
- [Safiro’s](https://github.com/UlisesF04/SafirosPage)

The live demo links are included for HabitFlow and Safiro’s. The school platform links to its source repository and setup instructions. The contact section uses the GitHub profile and LinkedIn link provided in the project repositories.
