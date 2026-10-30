# figma-make-app

Next.js App Router + React + JavaScript/JSX + Tailwind CSS project.

## Development Server

The Next.js development server runs with `npm run dev`.

## Project Structure

This is the canonical project structure. Start with task-relevant files below. Only follow imports or inspect other files when required, when a documented path is missing, or when the repository contradicts this guide.

- `app/layout.jsx` - Next.js root layout, metadata, fonts, and global CSS
- `app/page.jsx` - Next.js home route
- `app/mission/[id]/page.jsx` - Validated mission deep links
- `src/BookApp.jsx` - Shared interactive application; the usual starting point for UI work
- `src/index.css` - Global CSS entrypoint and Tailwind CSS v4 import
- `package.json` - Project dependencies and Next.js development, build, start, and formatting scripts
- `postcss.config.mjs` - Tailwind CSS v4 PostCSS integration
- `.mise.toml` - Toolchain version for Node.js (npm is bundled)
- `package-lock.json` - npm lockfile

## Dependencies

- Runtime: React 19 and React DOM 19
- Styling: Tailwind CSS v4 with the `@tailwindcss/postcss` plugin
- Application: Next.js 16 App Router with JavaScript/JSX
- Formatting: oxfmt

## Styling

This project uses **Tailwind CSS v4** through `postcss.config.mjs`. `src/index.css` imports Tailwind with `@import 'tailwindcss';`. Use Tailwind utility classes directly in JSX and put global CSS or Tailwind v4 theme customization in `src/index.css`.

`app/layout.jsx` imports `src/index.css`. Global CSS font wiring belongs in `src/index.css`; existing Next.js font variables are set by the root layout. Keep CSS `@import` statements first, then add any `@font-face` rules and font-family defaults there.

## Verification

- Package manager: npm (`npm ci`; use `npm install <pkg>` to change dependencies)
- Next.js production build: `npm run build`
- Format selected files: `npm run format -- <paths>`
- Do not start another development server in Make.

## Code quality

- Use double quotes for strings containing apostrophes (`"We're here to help"`), or escape them in single-quoted strings. An unescaped apostrophe in a single-quoted string breaks the build.
- Ensure JSX tags are closed and braces are balanced.
- Export components as default exports.
