# ericl0512.github.io

My personal portfolio website. Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools.

## Live Site

**[ericl0512.github.io](https://ericl0512.github.io)**

## Features

- Two-column sticky layout (sidebar + scrolling content)
- Dark/light theme toggle
- Scroll-spy navigation highlighting
- Mouse-following spotlight effect (dark mode)
- Responsive down to 320px
- Blueprint grid background
- WCAG AA accessible (25/25 checks passing)
- Open Graph meta tags for social link previews
- Skill icons from [devicon](https://devicon.dev/)

## Tech Stack

- **HTML/CSS/JS** — no React, no Tailwind, no build step
- **Inter** + **JetBrains Mono** from Google Fonts
- **Devicon CDN** for technology logos
- **Simple Icons CDN** for certification badges

## Run Locally

```bash
git clone https://github.com/EricL0512/EricL0512.github.io.git
cd EricL0512.github.io
npx serve .
```

Open `http://localhost:3000` in your browser.

## Project Structure

```
├── index.html          # All content and markup
├── style.css           # Design system and layout
├── app.js              # Scroll spy, theme toggle, spotlight
├── base.css            # CSS reset
├── assets/
│   ├── headshot.jpg    # Profile photo
│   └── og-image.png    # Open Graph preview image
└── README.md
```

## Customization

**Theme colors** are defined as CSS custom properties in `:root` (style.css lines 44–56). Change `--color-primary` to swap the accent color across the entire site.

**Content** is all in index.html — no CMS, no markdown files. Edit the HTML directly.

**Resume link** points to a Google Drive PDF. Update the `href` in the sidebar socials section.

## Deploy

Works on any static hosting:

- **GitHub Pages** — push to `main`, enable Pages in repo settings
- **Cloudflare Pages** — connect repo, zero config
- **Netlify** — drag and drop the folder

## Contact

- **Email:** thisisericlin@gmail.com
- **LinkedIn:** [linkedin.com/in/ericl0512](https://www.linkedin.com/in/ericl0512/)
- **GitHub:** [github.com/EricL0512](https://github.com/EricL0512)
