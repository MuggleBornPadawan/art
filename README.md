# The Grammar of Art

A comprehensive, interactive educational web application designed to teach the fundamental vocabulary of visual art and the hidden geometry of composition.

Built with **Clojure**, this project serves as both a philosophical exhibition and a technical demonstration of **Generative CSS Art**. It features a "Modern Gallery" aesthetic, designed for an immersive, non-scrolling desktop experience.

## 🎨 The 6 Pillars of the Curriculum

The application covers 24 distinct concepts across six core categories, narrated through a refined, curatorial perspective:

1.  **The Elements:** The primal atoms of vision (Line, Shape, Form, Color, Texture, Space, Value).
2.  **The Principles:** The management of visual tension (Balance, Contrast, Rhythm, Unity, etc.).
3.  **Perception (Gestalt):** The psychological construction of reality (Closure, Figure-Ground, Proximity).
4.  **Structure:** The hidden geometry of design (Golden Ratio, Rule of Thirds, Hierarchy).
5.  **Spatial Depth:** The conquest of the 2D plane (Perspective, Atmospheric Depth, Foreshortening).
6.  **Color Dynamics:** The alchemy of feeling (Temperature, Saturation, Simultaneous Contrast).

## 🚀 Key Features

*   **Interactive "Workshop" Mode:** Every artwork reacts to user input. Move your mouse (or touch) to manipulate the vanishing points, shift color temperatures, or break the laws of proximity in real-time.
*   **Generative CSS Art:** Sophisticated, code-driven visualizations that utilize "Simulated Randomness" and prime-number timing loops to create organic, non-repetitive motion.
*   **The Cinematic Finale:** A multi-layered "Composition" masterclass that synthesizes all concepts into a singular, orchestrated visual narrative.
*   **Refined Curatorial Voice:** Content written with the depth and poetic analysis of a veteran art curator, moving beyond simple definitions into visual theory.
*   **Modern Gallery Aesthetic:** A high-end UI featuring `Merriweather` and `Inter` typography, a Soft White palette, and Deep Blue/Gold accents.
*   **Dual-Mode Architecture:** A dynamic Clojure/Ring development server and a high-performance Static Site Generator for GitHub Pages.

## 🛠 Tech Stack

*   **Language:** Clojure
*   **Interactivity:** Vanilla JavaScript + CSS Custom Properties (Variables)
*   **Web Server:** Ring / Jetty
*   **Routing:** Compojure
*   **HTML Generation:** Hiccup
*   **Visuals:** Pure CSS (Generative & Interactive)
*   **Hosting:** GitHub Pages (via the `docs/` folder)

## 💻 Local Development

### Prerequisites
*   [Leiningen](https://leiningen.org/) installed.

### Run the Dev Server
1. Navigate to the app directory:
   ```bash
   cd art-web
   ```
2. Start the server:
   ```bash
   lein ring server
   ```
   The site will be available at `http://localhost:3000`.

### Generate Static Production Build
To update the `docs/` folder for GitHub Pages:
```bash
cd art-web
lein run -m art-web.static
```

## 🌐 Live Site
Visit the interactive gallery here: [https://mugglebornpadawan.github.io/art/](https://mugglebornpadawan.github.io/art/)

## 📜 License
This project is open source and available under the [GNU General Public License v3.0](LICENSE).
