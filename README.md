# Aura Studios | Fine Art Photography Platform

A premium, minimalist web application meticulously crafted for **Aura Studios**. This platform showcases the high-fidelity photography and cinematography work of **Vishesh Pisal** and his creative team.

---

## 🚀 Tech Stack

The application is built using modern web standards to ensure high performance, fluid animations, and a premium aesthetic without the overhead of heavy frameworks.

*   **Core Structure**: 
    *   **HTML5**: Semantic tags for accessibility and SEO.
    *   **Bootstrap 5.3**: Utilized for its robust mobile-first grid system and standardized layout utilities.
*   **Aesthetics & Styling**: 
    *   **CSS3 (Vanilla)**: High-performance styling featuring Glassmorphism, CSS Variables (:root), and Flexbox/Grid.
    *   **Modern Web Typography**: `Outfit` (Sans-serif) for functional UI and `Playfair Display` (Serif) for elegance.
*   **Logic & Interactivity**: 
    *   **Vanilla JavaScript (ES6+)**: Custom-built engine for gallery rendering, search algorithms, and state management.
    *   **Intersection Observer API**: Powering staggered, high-fidelity entry animations as users scroll.
*   **Iconography**: `Bootstrap Icons` (SVG-based) for crisp rendering on all retina displays.

---

## ✨ Key Features

*   **Flat Architecture**: Optimized for rapid deployment and individual file uploads (GitHub, Vercel, Netlify).
*   **Dynamic Portfolio Gallery**: A JavaScript-driven gallery that renders over 30+ projects dynamically from a centralized data object.
*   **Universal Search Experience**: An integrated, full-screen search overlay that filters through projects and services in real-time.
*   **Aura Signature Glow**: A bespoke interactive mouse-follow blur effect (automatically disabled on mobile for performance).
*   **Premium Glassmorphism**: Navigation bar that adapts from transparent to a blur-background state upon scrolling.
*   **Mobile-First Design**: Precision-tuned media queries ensure a flawless experience on everything from ultra-wide monitors to handheld devices.

---

## 🛠️ How It Was Built

The development of Aura Studios focused on **Minimalism** and **Performance**:

1.  **Architecture**: We transitioned from a nested folder structure to a "Flat Architecture" to simplify asset pathing and ensure 100% compatibility with GitHub individual file uploads.
2.  **Performance Optimization**: By avoiding heavy JS frameworks (React/Vue), the site achieves near-instant load times while maintaining complex animations.
3.  **Visual Consistency**: Established a robust CSS Variable system to manage the "Aura Gold" (`#C5A161`) and "Deep Onyx" (`#0F0F0F`) palette across 38+ pages.
4.  **Responsive Engineering**: Every component was stressed-tested for mobile usability, including stacking buttons and resizing hero typography to prevent overflow on small screens.

---

## 📂 Project Structure

Following the user's requirement for flat deployment, all core assets are located in the root directory:

```text
├── index.html        # Homepage & Hero Section
├── about.html        # Team & History
├── contact.html      # Inquiry Portal
├── weddings.html     # Service Detail (Flat)
├── gallery.html      # All Individual Projects
├── style.css         # Unified Design System (Mobile Responsive)
├── script.js         # Core Logic & Search Engine
└── logo.jpg          # Master Branding Asset & Favicon
```

---

## 🌍 Hosting & Deployment

The platform is managed through a professional **GitHub-to-Vercel** pipeline:
1.  **Version Control**: All code, assets, and documentation were first established and managed via [GitHub](https://github.com/).
2.  **Edge Deployment**: The final application is deployed on [Vercel](https://vercel.com/), ensuring high-speed global delivery and continuous integration (CI/CD) for every update.

---

## 📖 Using the Platform

### Navigation
*   **Portfolio**: Filter by category (Wedding, Events, Portraits) to see specific work.
*   **Search Engine**: Click the magnifying glass in the navbar and type keywords like "Portrait" or "Team".
*   **Mobile Optimizations**: The site includes a custom-designed hamburger menu for one-handed use and automatically disables heavy desktop effects for battery efficiency.

---

**Developed & Directed by**: Vishesh Pisal  
**Affiliation**: VPM’s K.G. Joshi College of Arts and N.G.Bedekar College of Commerce (Autonomous), Thane  
**University**: Affiliated to University of Mumbai  
**&copy; 2026 Aura Studios**
