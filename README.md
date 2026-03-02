# Aura Studios | Fine Art Photography Platform

A premium, minimalist web application designed for **Aura Studios**, showcasing the high-fidelity photography and cinematography work of **Vishesh Pisal** and his team.

---

## 🚀 Tech Stack

The application is built using modern web standards to ensure high performance, fluid animations, and a premium aesthetic without the overhead of heavy frameworks.

*   **Structure**: HTML5 (Semantic & SEO Optimized)
*   **Styling**: 
    *   Custom CSS3 (Glassmorphism, CSS Variables, Flexbox/Grid)
    *   Bootstrap 5.3 (Responsive Grid System & Layout Utilities)
*   **Logic & Interactivity**: Vanilla JavaScript (ES6+)
*   **Typography**: 
    *   `Outfit` (Modern, clean sans-serif for UI)
    *   `Playfair Display` (Elegant serif for artistic emphasis)
*   **Icons**: Bootstrap Icons (SVG Based)
*   **Branding**: Custom Photography Icon System

---

## ✨ Key Features

*   **Dynamic Portfolio Gallery**: A JavaScript-driven gallery that renders projects dynamically from a centralized data object.
*   **Seamless Filtering**: Staggered, animated project filtering allowing users to switch between Wedding, Portrait, and Event categories.
*   **Aura Signature Effect**: A custom mouse-follow blur effect that creates a dynamic "glow" behind the content as the user interacts.
*   **Premium Navigation**: A sticky navbar that transitions from a minimal transparent state to a sophisticated glassmorphism (backdrop-blur) finish upon scrolling.
*   **Real-time Search**: An integrated search overlay that provides instant results for projects, services, and team details.
*   **Consistent Branding**: Fully branded for **Vishesh Pisal** and affiliated with **VPM's K.G. Joshi & N.G. Bedekar College (S.S.P.M.), Thane**.

---

## 🛠️ How It Was Built

1.  **Design System First**: Established a robust CSS Variable architecture (`:root`) to handle colors, transitions, and timing functions site-wide.
2.  **Animation Staggering**: Implemented a custom `--delay` system using CSS custom properties combined with `intersection observer` style animations for a premium "entrance" feel.
3.  **Modular Logic**: JavaScript was kept modular, handling the gallery rendering, search algorithms, and UI state transitions (like the navbar scroll effect) independently.
4.  **Responsive Engineering**: Leveraged Bootstrap’s grid system while overwriting its components with custom-engineered CSS to maintain a bespoke "high-end" look across mobile, tablet, and desktop.

---

## 📖 How to Use

### Viewing Locally
1.  **Clone/Download** the repository to your local machine.
2.  Open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge).
3.  **No Server Required**: Since the app uses Vanilla JS and standard CSS, it runs perfectly as a static site without any build steps or npm commands.

### Navigation
*   **Explore**: Scroll down the homepage to see the featured portfolio and service cards.
*   **Filter**: Click on the category buttons in the "Our Work" section to instantly see specific types of projects.
*   **Search**: Click the search icon in the top-right navbar to open the search portal. Type keywords like "Wedding", "Vishesh", or "Events".
*   **Book**: Use the **Contact** page to fill out the inquiry form, which is pre-configured for Aura Studios.

---

## 🌐 Deployment Steps

Since **Aura Studios** is a static web application, it can be deployed for free on several modern hosting platforms in under 2 minutes.

### Option 1: Vercel (Recommended)
1.  Sign up for a free [Vercel](https://vercel.com/) account.
2.  Install the Vercel CLI: `npm i -g vercel`.
3.  Run `vercel` in the project root directory and follow the prompts.
4.  **Alternatively**: Connect your GitHub repository to Vercel for automatic deployments on every "push".

### Option 2: Netlify
1.  Go to [Netlify](https://www.netlify.com/) and log in.
2.  Drag and drop the entire `AuraStudios` folder into the Netlify "Sites" dashboard.
3.  Your site will be live instantly with a custom URL.

### Option 3: GitHub Pages
1.  Push your code to a GitHub repository.
2.  Go to **Settings > Pages** in your repository.
3.  Select the `main` branch and `/root` directory.
4.  Click **Save**. Your site will be available at `username.github.io/repo-name`.

---

**Developed by**: Vishesh Pisal  
**Affiliation**: VPM’s K.G. Joshi & N.G. Bedekar College (Autonomous), Thane  
**&copy; 2026 Aura Studios**
