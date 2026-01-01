# The Grammar of Art Web App

## Project Overview

This is a Clojure-based interactive web application designed to teach the fundamental elements of art, principles of composition, and visual phenomenology. It is a dual-mode application:
1.  **Development:** A dynamic web server using Ring and Compojure.
2.  **Production:** A static site generator that outputs HTML, CSS, and JS to the `docs/` directory for hosting on GitHub Pages.

**Tech Stack:**
*   **Language:** Clojure
*   **Build Tool:** Leiningen
*   **Web Framework:** Ring / Compojure
*   **Interactivity:** Vanilla JS + CSS Variables
*   **Styling:** Custom CSS (Generative & Responsive)

## Design Philosophy

The project uses a **"Modern Gallery"** aesthetic:
*   **Branding:** A unified SVG brand mark combining the Glider (hacker emblem) and the site title.
*   **Typography:** `Merriweather` (Serif) for headers, `Inter` (Sans-Serif) for body.
*   **Palette:** Background: `#fdfdfd`, Text: `#061735`, Accents: `#B3892C`.
*   **Layout:** "Compact Viewport" design (100vh) to eliminate vertical scrolling on desktop.
*   **Curatorial Voice:** Content is written from a high-end curatorial perspective, focusing on the philosophical "essence" of art rather than simple textbook definitions.

## Architecture

*   **Interactive Layer (`js/interaction.js`):** Tracks mouse/touch coordinates and injects normalized values (`--int-x`, `--int-y`) into CSS. 
*   **Generative Visuals:** Pure CSS animations using prime-number loops and keyframe transformations.
*   **Static Generation (`static.clj`):** Compiles 30+ pages (Home, 24 Details, 6 Sections, 1 Synthesis) and copies CSS/JS/Images to the `docs/` folder.

## Curriculum Structure

The site is organized into 6 distinct pillars:
1.  **The Elements:** Fundamental building blocks.
2.  **The Principles:** Rules of organization and tension.
3.  **Perception:** Gestalt laws of visual psychology.
4.  **Structure:** Mathematical and compositional grids.
5.  **Spatial Depth:** Techniques for 3D simulation.
6.  **Color Dynamics:** Advanced color theory and alchemy.

## Directory Structure

*   `art-web/`: The core Clojure project.
    *   `src/art_web/`:
        *   `handler.clj`: Compojure routes (now including 6 section paths).
        *   `views.clj`: Hiccup templates and the complete curatorial content database.
        *   `static.clj`: Static site generator with JS/CSS copy logic.
    *   `resources/public/`:
        *   `css/style.css`: Main stylesheet containing 24+ generative art definitions and `.js-active` interactive overrides.
        *   `js/interaction.js`: The coordinate tracking script.
        *   `img/`: SVG logos and assets.
*   `docs/`: The generated static website, served by GitHub Pages.

## Building and Running

### 1. Development Server
```bash
cd art-web
lein ring server
```

### 2. Generate Static Site
```bash
cd art-web
lein run -m art-web.static
```

### 3. Deploy
Regenerate, commit the `docs/` folder, and push to the `main` branch.