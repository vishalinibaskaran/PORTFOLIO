# Vishalini B — Portfolio Website

A premium, production-ready personal portfolio built with React + Vite + Tailwind CSS + Framer Motion.

## 🚀 Features

- **Animated particle background** with WebGL canvas
- **Loading screen** with progress animation
- **Dark/Light mode** toggle
- **Typing animation** in hero section
- **Glassmorphism** UI design
- **Scroll-reveal animations** with Framer Motion
- **Responsive** — mobile, tablet, desktop
- **Project modal** with detailed view
- **Contact form** with validation
- **Embedded Google Map**
- **Back-to-top** button
- **Floating skill badges** and animated progress bars

## 📁 Project Structure

```
portfolio/
├── public/
│   └── profile.jpg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── BackToTop.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── Navbar.jsx
│   │   ├── Particles.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── data.js
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ☁️ Deploy to Vercel

### Method 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (from project root)
vercel

# Deploy to production
vercel --prod
```

### Method 2: Vercel Dashboard

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"New Project"**
4. Import your GitHub repository
5. Vercel auto-detects Vite — no config needed
6. Click **"Deploy"**
7. Your site is live at `https://your-project.vercel.app`

### Method 3: Drag & Drop

1. Run `npm run build` to generate the `dist/` folder
2. Go to [vercel.com/new](https://vercel.com/new)
3. Drag and drop the `dist/` folder
4. Done!

## ⚙️ Customization

Edit `src/data.js` to update:
- Personal info (name, email, phone, location)
- Social links (GitHub, LinkedIn)
- Skills and proficiency levels
- Projects
- Experience / Internships
- Certifications
- Education

Replace `public/profile.jpg` with your own photo.

## 📦 Tech Stack

| Tech | Version |
|------|---------|
| React | 18 |
| Vite | 5 |
| Tailwind CSS | 3 |
| Framer Motion | 11 |
| Lucide React | 0.356 |

## 📄 License

MIT — feel free to use and customize.
