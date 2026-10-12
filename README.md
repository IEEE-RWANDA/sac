# IEEE SAC Rwanda

Next.js App Router website with React and Tailwind CSS. Existing custom styles preserve the approved visual design; Tailwind utilities handle shared content grids and layouts.

## Development

Requires Node.js 20.9+ and npm.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:4187. Run `npm run build` for the production build and `npm start` to serve it. `npm run check` checks the browser interaction script.

Pages live in `app/`; reusable header, footer, dialogs, and announcements are in `components/`. Public files live in `public/`. Old `.html` URLs redirect to the matching Next.js route. Navigation uses full page loads so the existing browser-local planner, dialogs, and carousel initialize on each page.

Before publication, confirm the mission, committee, contacts, and events. There is no authentication or shared submission backend. Activity drafts stay in the visitor's browser.

## Rwanda photography

User confirmed ownership and requested no visible credit links. Images retrieved through the signed-in browser from IEEE Rwanda’s ALU Student Branch album:
- rwanda-students.jpg: https://www.flickr.com/photos/ieeerwanda/55453238479/
- rwanda-speaker.jpg: https://www.flickr.com/photos/ieeerwanda/55452104817/
- rwanda-workshop.jpg: https://www.flickr.com/photos/ieeerwanda/55453247049/

These replace the regional reference images throughout the site. Regional programme links remain regional; the photos illustrate the Rwanda student community.

Additional branch photos: CMU-Africa — https://www.flickr.com/photos/ieeerwanda/55235932713/ ; University of Rwanda — https://www.flickr.com/photos/ieeerwanda/55239038954/ . Supplied from IEEE Rwanda’s Flickr albums.

## Announcements

Edit `data/announcements.json` and run `npm run build`. The shared React component sorts by publication date, renders the latest three on the homepage, and renders the full list on `/opportunities`. Content is a curated snapshot of the Region 8 announcements page, checked on 8 October 2026; it is not a live feed.

Official IEEE vector masterbrand sourced from the rendered IEEE.org homepage on 8 October 2026 through the in-app browser. Original saved as `public/assets/brand/ieee-official.svg`; embedded in the SAC logo variants.

## Brand assets

`/brand` is the public download page. Keep the approved SVG variants, original supplied PNG, official IEEE source artwork, social media exports, and favicon sizes in `public/assets/brand/`. The navbar uses `sac-rwanda-header.svg`; the footer uses `sac-rwanda-square-dark.svg`.

## Repository hygiene

Local `.env*` files, `.vercel/` state, dependencies, caches, and logs are ignored. Keep site pages, assets, announcement data and Next.js/Tailwind configuration, and the deployment workflow in Git. Retired logo concepts and the internal preview page have been removed.

Leadership portraits: Kipngeno Koech from https://kipngenokoech.com/ and Gentille Uwera from https://gentilleuwera.com/, retrieved through the in-app browser at the user’s request. Files are stored in `public/assets/leadership/`.

Stephen Mbarushimana’s leadership portrait is sourced from his [LinkedIn profile](https://www.linkedin.com/in/kanakintama-steven-mbarushimana-9169b325a/), listed as Kanakintama Steven Mbarushimana. His Student Branches Coordinator Chair appointment was provided by the Rwanda SAC chair.

Gentille’s current leadership portrait uses the colour speaker photograph from the [IEEE GRSS SYP Summit speakers page](https://grss-syp.com/speakers/), replacing the monochrome personal-site portrait.

Stephen’s current leadership photo is [IEEE Rwanda’s IEEE MTTS_62 on Flickr](https://www.flickr.com/photos/ieeerwanda/55494401797/in/album-72177720335355846), supplied by the user to replace the LinkedIn portrait.
