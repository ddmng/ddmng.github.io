# Daniele Di Minica | Personal Website

Personal website of Daniele Di Minica, Product Manager for AI Diagnostics in Telco Service Assurance.

🌐 **Live site:** https://www.danielediminica.it

## Overview

A single-page site that presents my professional profile:

- **About me**: background and key numbers
- **Professional journey**: roles and achievements, as a timeline
- **Articles**: latest publications
- **Skills & expertise**
- **Certifications**: deep learning, machine learning and Scala
- **Sources I follow**
- **Contact**: LinkedIn and Medium

## Tech

- Plain HTML and CSS, with a few lines of vanilla JavaScript for the navigation menu
- No frameworks, no build step, no dependencies
- Responsive layout, with automatic light and dark theme
- Profile photo embedded in the page, so the site is fully self-contained

## Project structure

```
.
├── index.html   # the whole site (markup, styles, scripts)
└── README.md
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

The site is static, so it can be hosted anywhere. For example, with GitHub Pages:

1. Go to **Settings → Pages**
2. Select the `main` branch and the `/ (root)` folder
3. Save: the site will be published at `https://<username>.github.io/<repository>/`

To use the custom domain, add it under **Custom domain** in the same page and set the DNS records as described in the GitHub Pages documentation.

## Contact

- LinkedIn: https://it.linkedin.com/in/danielediminica
- Medium: https://medium.com/@daniele.diminica_55640

## License

© 2026 Daniele Di Minica. All rights reserved.
