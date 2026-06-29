# Deploying to Vercel

This is a TanStack Start (SSR) app built with Nitro. The build uses Nitro's
`vercel` preset, which emits a [Build Output API](https://vercel.com/docs/build-output-api)
directory at `.vercel/output`. Vercel detects this automatically — **do not set a
custom Output Directory.**

## Deploy with Git (recommended)

1. Connect the repository to Vercel.
2. In Vercel project settings:
   - Framework Preset: **Other**
   - Build Command: `npm run build` (or leave default — it is read from `vercel.json`)
   - Output Directory: **leave empty** (Vercel uses `.vercel/output` automatically)
   - Install Command: default (`npm install`)

## Deploy with the Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

## Notes

- The build command is `npm run build` (`vite build`), which runs the Nitro
  `vercel` preset configured in `nitro.config.ts`.
- All images/videos under `src/assets` are imported in components, so Vite
  bundles and fingerprints them into `.vercel/output/static/assets`. There is no
  `dist` or `.output/public` directory with this preset — pointing the Output
  Directory there causes assets (and the app) to fail to serve.
