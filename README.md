# 🚀 Taufeeq Ahmad — Personal Portfolio

A modern, responsive personal portfolio website showcasing my skills, projects, and experience as a **Flutter & App Developer**. Built with clean HTML, CSS, and vanilla JavaScript — featuring smooth animations, dark/light theme toggle, particle backgrounds, and a working contact form.

<p align="center">
  <img src="assets/profile.png" alt="Taufeeq Ahmad" width="150" style="border-radius: 50%;" />
</p>

<p align="center">
  <a href="https://github.com/TaufeeqAhmad123"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
  <a href="https://www.linkedin.com/in/taufeeq-ahmad-67b751264/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:taufeeqahmad.cs@gmail.com"><img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
</p>

---

## 📑 Table of Contents

- [✨ Features](#-features)
- [📸 Sections](#-sections)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Project Structure](#-project-structure)
- [⚙️ Getting Started](#️-getting-started)
- [🎨 Customization](#-customization)
- [🚀 Deployment](#-deployment)
- [📄 License](#-license)
- [🤝 Contact](#-contact)

---

## ✨ Features

| Feature                     | Description                                                                                                                      |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 🌗 **Dark / Light Theme**   | Toggle between dark and light modes with smooth transitions; preference is saved in `localStorage`.                              |
| ✍️ **Typing Animation**     | Dynamic typing effect in the hero section cycling through roles like _Flutter Developer_, _App Developer_, etc.                  |
| 🎆 **Particle Background**  | Interactive canvas-based particle animation with connecting lines in the hero section.                                           |
| 📜 **Scroll Reveal**        | Elements gracefully animate into view on scroll using an `IntersectionObserver`-based reveal system.                             |
| 🔢 **Count-Up Stats**       | Animated number counters for experience, projects, and happy clients in the About section.                                       |
| 📱 **Fully Responsive**     | Optimized layout for mobile, tablet, and desktop viewports with a hamburger menu for small screens.                              |
| 📬 **Working Contact Form** | Functional contact form powered by [FormSubmit.co](https://formsubmit.co/) with client-side validation and auto-response emails. |
| 🔝 **Back to Top**          | Floating button to smoothly scroll back to the top of the page.                                                                  |
| 🧭 **Active Nav Highlight** | Navigation links automatically highlight based on the current scroll position.                                                   |
| 🎨 **Glassmorphism UI**     | Modern frosted-glass card design with subtle glows and gradient accents.                                                         |

---

## 📸 Sections

The portfolio is organized into **five main sections**:

### 1. 🏠 Hero Section

- Personalized greeting with name and animated typing roles
- Social media links (GitHub, LinkedIn, Instagram, Email)
- Call-to-action buttons: **View Projects** & **Download CV**
- Animated SVG blob with profile picture
- Floating decoration icons (smartphone, code, palette)
- Canvas-based particle background
- Scroll-down indicator

### 2. 👤 About Me

- Profile photo with glowing border effect
- Experience badge (2+ years)
- Bio and description of expertise
- Stat cards: **10+ Projects**, **2+ Years Experience**, **5+ Happy Clients**
- CTA button to the Contact section

### 3. 🧠 Skills

Organized into four skill categories displayed as glass cards:

| Category       | Technologies                                          |
| -------------- | ----------------------------------------------------- |
| **Languages**  | Dart, JavaScript, Python, Java, HTML/CSS              |
| **Frameworks** | Flutter, GetX, Provider, Bloc                         |
| **Tools**      | VS Code, Android Studio, Git & GitHub, Figma, Postman |
| **Backend**    | Firebase, REST APIs, SQLite, Hive                     |

### 4. 💼 Featured Projects

| Project              | Description                                                                 | Tech Stack                      |
| -------------------- | --------------------------------------------------------------------------- | ------------------------------- |
| **Spendora**         | Premium expense tracker application to manage and monitor personal finances | Flutter, Hive, GetX, Provider   |
| **E-Commerce App**   | Full-featured app with cart, wishlist, payment integration, and auth        | Flutter, Firebase, GetX, Stripe |
| **Chat Application** | Real-time messaging with group chats, media sharing, and notifications      | Flutter, Firebase, Provider     |
| **Weather App**      | Animated forecasts, location-based data, hourly/weekly views                | Flutter, REST API, Bloc         |
| **Task Manager**     | Productivity app with categorization, reminders, dark mode, offline support | Flutter, Hive, GetX             |

### 5. 📬 Contact

- Contact information cards (Email, Location, Freelance status)
- Social media links
- Contact form with **floating labels**, client-side validation, and **FormSubmit.co** integration
- Spam protection via honeypot field

### 🦶 Footer

- Logo, social links, and copyright notice

---

## 🛠️ Tech Stack

| Technology             | Purpose                                                                                                                          |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **HTML5**              | Semantic page structure                                                                                                          |
| **CSS3**               | Styling, animations, glassmorphism, responsive design, dark/light theming                                                        |
| **Vanilla JavaScript** | Interactivity, animations, DOM manipulation, form validation                                                                     |
| **Google Fonts**       | Typography — [Inter](https://fonts.google.com/specimen/Inter) & [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) |
| **Lucide Icons**       | Lightweight SVG icon library via CDN                                                                                             |
| **FormSubmit.co**      | Serverless form submission backend                                                                                               |
| **Canvas API**         | Particle background animation                                                                                                    |

---

## 📂 Project Structure

```
PORTFOLIO/
├── assets/
│   ├── profile.png          # Profile image used in the hero blob
│   └── Taufeeq.jpg          # Profile photo used in the About section
├── index.html                # Main HTML file with all sections
├── style.css                 # All styles — theming, layout, animations, responsive
├── script.js                 # All JavaScript — navbar, theme, typing, particles, form, etc.
├── .gitattributes            # Git config
└── README.md                 # You are here!
```

---

## ⚙️ Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- A code editor (e.g., [VS Code](https://code.visualstudio.com/))
- _(Optional)_ [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VS Code extension for hot-reloading

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/TaufeeqAhmad123/PORTFOLIO.git
   ```

2. **Navigate to the project folder**:

   ```bash
   cd PORTFOLIO
   ```

3. **Open in browser**:
   - Simply double-click `index.html`, **or**
   - Use the **Live Server** extension in VS Code:
     - Right-click `index.html` → **Open with Live Server**

> 💡 **No build tools required!** This is a pure HTML/CSS/JS project — no npm, no bundlers, no frameworks.

---

## 🎨 Customization

### Change Personal Information

Edit `index.html` to update:

- **Name & bio** — Hero section (`#home`) and About section (`#about`)
- **Social links** — Update `href` values in the hero, contact, and footer sections
- **Stats** — Modify `data-count` attributes on `.stat-number` elements
- **Projects** — Add/edit project cards in the `#projects` section

### Change Profile Photos

Replace the images in the `assets/` folder:

- `profile.png` — Used in the hero blob
- `Taufeeq.jpg` — Used in the About section

### Change Typing Roles

In `script.js`, find the `initTypingAnimation` function and update the roles array:

```javascript
const roles = ["Flutter Developer", "App Developer", "Your New Role Here"];
```

### Change Theme Colors

In `style.css`, modify the CSS custom properties (variables) defined in the `:root` / `[data-theme]` selectors to match your preferred color scheme.

### Change Contact Form Email

In `index.html`, update the form's `action` attribute:

```html
<form
  action="https://formsubmit.co/YOUR_EMAIL@example.com"
  method="POST"
></form>
```

---

## 🚀 Deployment

This static site can be deployed for **free** on any of these platforms:

### GitHub Pages (Recommended)

1. Push the code to a GitHub repository.
2. Go to **Settings → Pages**.
3. Set source to **Deploy from a branch** → select `main` → `/ (root)`.
4. Your site will be live at `https://yourusername.github.io/PORTFOLIO/`.

### Netlify

1. Go to [netlify.com](https://www.netlify.com/) and sign in.
2. Drag and drop your project folder, or connect your GitHub repo.
3. Your site will be deployed instantly.

### Vercel

1. Go to [vercel.com](https://vercel.com/) and import your GitHub repo.
2. Vercel will auto-detect it as a static site and deploy.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

Feel free to use it as a template for your own portfolio — just make sure to replace the personal content with your own!

---

## 🤝 Contact

**Taufeeq Ahmad** — Flutter & App Developer 🇵🇰

- 📧 **Email**: [taufeeqahmad.cs@gmail.com](mailto:taufeeqahmad.cs@gmail.com)
- 🔗 **LinkedIn**: [Taufeeq Ahmad](https://www.linkedin.com/in/taufeeq-ahmad-67b751264/)
- 🐙 **GitHub**: [TaufeeqAhmad123](https://github.com/TaufeeqAhmad123)

---

<p align="center">
  ⭐ If you found this helpful, please give it a star on GitHub!
</p>
