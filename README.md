# Abandoned but Not Forgotten

A gentle, bilingual space-exploration book for ages 8–12, built with **Next.js
App Router and JavaScript/JSX**, React, Three.js, Framer Motion, and react-pageflip.

## Requirements

Node.js 22 with its bundled npm. Install dependencies with `npm ci`
(or `npm install` when changing dependencies).

## Development

```sh
npm run dev
```

For production:

```sh
npm run build
npm start
```

On Vercel, select the Next.js preset and set the build command to
`npm run build`. Use the default Next.js output, not `dist`.

## Structure

- `app/layout.jsx`: document shell, fonts, global styles, and metadata.
- `app/page.jsx`: home route (Server Component).
- `app/mission/[id]/page.jsx`: validated mission route; `/mission/rover`
  opens the Apollo scrapbook spread. Locked/unknown mission IDs return 404.
- `src/BookApp.jsx`: interactive client-side book and its 12 pages.
- `src/components/`: activities, illustrations, maps, and memory book.
- `src/data/`: local JSON missions and map data.
- `src/locales/`: live English/Bangla copy.
- `src/hooks/useProgress.js`: browser-local progress (no server/database).
All application code is JavaScript/JSX and runs through Next.js.

## Notes

Progress is saved in localStorage for the current browser and origin; it does
not sync between devices.
Google Fonts and the optional confetti effect require internet access.
Images and local fonts remain bundled from `src/assets`.

Before publishing, review NASA/image/font attribution and licenses, add your
team details, and check the challenge's submission requirements. Never commit
credentials or `.env` files.
