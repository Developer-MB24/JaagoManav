# Jaago Manav — Flag Theme Starter

React + Vite + Tailwind with Home sections as components and Indian flag color palette (Saffron `#FF671F`, White `#FFFFFF`, Green `#046A38`).

## Quick Start
```bash
npm install
npm run dev
npm run build && npm run preview
```

## Structure
```
src/
├─ components/
│  └─ home/
│     ├─ Hero.jsx
│     ├─ About.jsx
│     ├─ Programs.jsx
│     ├─ Impact.jsx
│     └─ CTA.jsx
├─ layout/
│  ├─ Header.jsx
│  ├─ Footer.jsx
│  └─ MainLayout.jsx
├─ pages/
│  └─ Home.jsx
├─ App.jsx
├─ main.jsx
└─ index.css
public/
└─ images/
```

- Edit colors in `tailwind.config.js` (`primary` = saffron, `secondary` = green).
- Global font is Georgia, serif.
- Duplicate `components/home/*` into `components/<feature>/*` for other pages.
