# Deploying to Vercel

1. Connect your repository to Vercel (via the Vercel dashboard) and set the Root to the project folder.
2. In Vercel project settings set:
   - Framework Preset: "Other"
   - Build Command: `npm run vercel-build`
   - Output Directory: `dist`
3. Alternatively, using Vercel CLI:

```bash
npm i -g vercel
vercel login
vercel --prod
```

Notes:
- `vercel-build` script is added to `package.json` and runs `vite build`.
- `vercel.json` includes a SPA fallback to `index.html` for client-side routing.
