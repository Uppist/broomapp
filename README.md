# Broom Website

## Overview

The Broom Website is a single-page React application built with Vite, showcasing The Broom App. It includes sections like Navbar, Home, Features, Benefits, AppStore, FAQ, About, and Footer, with a responsive design for desktop and mobile. The website title is set to "Broomapp," and the favicon uses broom.ico.

## Features

* Navbar: Fixed at the top with navigation links and a "Join Waitlist" button.

* Home: Hero section with text and an image.

* Features: Grid layout with feature items and icons.

* Benefits: Two-column layout with text and an image.

* AppStore: Section with text, buttons, and an image.

* FAQ: Accordion with toggle functionality and placeholder content.

* About: Two-column layout with an image and a quote (placeholder).

* Footer: Contact info, navigation links, social media links (placeholders), and copyright.

* Favicon & Title: Title set to "Broomapp," favicon set to broom.ico.


## Tech Stack

* Framework: React

* Bundler: Vite

* Styling: Custom CSS (styles.css), Tailwind CSS (minimally used)

* Fonts: Google Fonts (used for specific elements)

* Dependencies: react, react-dom, vite, tailwindcss, postcss, autoprefixer

* Dev Dependencies: @vitejs/plugin-react


## Setup

### Prerequisites

* Node.js (v18.x+)

* npm (v9.x+)

## Installation

* Clone the repo:

* git clone <repository-url>
cd broom-website



## Install dependencies:

* npm install

* Add assets to src/assets/: ` logo.png, hero-image.jpg, feature-icon-*.png, benefits-image.jpg, google-play.png, app-store.png, appstore-image.jpg, ceo.jpg, logo2.jpg `

* Placeholder SVGs: `location-icon.svg, contact-icon.svg, hours-icon.svg, facebookicon.svg, xicon.svg, linkedinicon.svg, instagramicon.svg, uppist-icon.png`

* Add favicon to public/:

* broom.ico

* Run the dev server:

* npm run dev

## Build for production:

` npm run build`

`npm run preview `

## Structure

`broom-website/
├── public/
│   ├── index.html
│   └── broom.ico
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Home.jsx
│   │   ├── Features.jsx
│   │   ├── Benefits.jsx
│   │   ├── AppStore.jsx
│   │   ├── FAQ.jsx
│   │   ├── About.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── package.json
├── vite.config.js
├── postcss.config.js
├── tailwind.config.js
└── README.md`

License

© The BroomApp 2025 All Rights Reserved.