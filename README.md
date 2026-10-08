# IEEE SAC Rwanda

Static local prototype adapted from the IEEE Region 8 SAC site structure. Run `npm run dev` and open http://127.0.0.1:4187. JavaScript syntax: `npm run check`.

Includes manual hero carousel, mission, regional announcements, student branch directory, awards, official branch resources, funding programme links, committee/contact placeholders, and a browser-local activity planner.

Before publication: confirm Rwanda mission, committee, branch directory, contacts and events; review IEEE branding. No authentication or shared submissions are implemented.

Reference: https://r8.ieee.org/sac/ and its Resources, Recognition and Support pages, read through the signed-in Codex browser. Regional links are labelled as regional. Campus photographs are from IEEE Rwanda; announcement artwork accompanies the referenced Region 8 programmes. Montserrat is locally hosted from the reference site's observed font asset.

## Rwanda photography

User confirmed ownership and requested no visible credit links. Images retrieved through the signed-in browser from IEEE Rwanda’s ALU Student Branch album:
- rwanda-students.jpg: https://www.flickr.com/photos/ieeerwanda/55453238479/
- rwanda-speaker.jpg: https://www.flickr.com/photos/ieeerwanda/55452104817/
- rwanda-workshop.jpg: https://www.flickr.com/photos/ieeerwanda/55453247049/

These replace the regional reference images throughout the site. Regional programme links remain regional; the photos illustrate the Rwanda student community.

Additional branch photos: CMU-Africa — https://www.flickr.com/photos/ieeerwanda/55235932713/ ; University of Rwanda — https://www.flickr.com/photos/ieeerwanda/55239038954/ . Supplied from IEEE Rwanda’s Flickr albums.

## Announcements

Edit `data/announcements.json` and run `npm run build`. The generator sorts by publication date, renders the latest three on the homepage, and renders the full list on `opportunities.html`. Content is a curated snapshot of the Region 8 announcements page, checked on 8 October 2026; it is not a live feed.

Official IEEE vector masterbrand sourced from the rendered IEEE.org homepage on 8 October 2026 through the in-app browser. Original saved as `assets/brand/ieee-official.svg`; embedded in the SAC logo variants.

## Brand assets

`brand.html` is the public download page. Keep the approved SVG variants, original supplied PNG, official IEEE source artwork, social media exports, and favicon sizes in `assets/brand/`. The navbar uses `sac-rwanda-header.svg`; the footer uses `sac-rwanda-square-dark.svg`.

## Repository hygiene

Local `.env*` files, `.vercel/` state, dependencies, caches, and logs are ignored. Keep site pages, assets, announcement data and its build script, and the deployment workflow in Git. Retired logo concepts and the internal preview page have been removed.
