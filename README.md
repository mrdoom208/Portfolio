# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Showcases professional work, skills, and provides an easy way to get in touch.

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Modern UI Components**: Built with shadcn/ui and Radix UI primitives
- **Fast Performance**: Vite-powered build with optimized bundling
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Contact Integration**: Easy-to-use contact form and social links

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui, Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Query (TanStack)
- **Routing**: React Router DOM
- **Theme Management**: next-themes
- **Font**: Geist Variable Font

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   └── Navbar.jsx
│   ├── portfolio/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   └── ui/                    # shadcn/ui components
├── pages/
│   └── Home.jsx
├── hooks/
│   └── use-mobile.js
├── lib/
│   ├── utils.js
│   └── pageNotFound.jsx
├── utils/
│   └── index.ts
├── assets/
├── App.jsx
├── main.jsx
└── index.css
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

## 🎨 Customization

### Personal Information

Update the following files with your personal details:

- `src/components/portfolio/Hero.jsx` - Hero section content
- `src/components/portfolio/About.jsx` - About section
- `src/components/portfolio/Skills.jsx` - Skills and technologies
- `src/components/portfolio/Projects.jsx` - Project showcase
- `src/components/portfolio/Contact.jsx` - Contact information

### Styling

- Colors and themes are defined in `src/index.css`
- Tailwind config in `tailwind.config.js`
- Component variants in `components.json`

### Adding New Sections

1. Create a new component in `src/components/portfolio/`
2. Import and add it to `src/pages/Home.jsx`
3. Update navigation in `src/components/layout/Navbar.jsx` if needed

## 📱 Sections

- **Hero**: Eye-catching introduction with call-to-action
- **About**: Personal background and professional summary
- **Skills**: Technical skills and competencies
- **Projects**: Showcase of key projects with descriptions
- **Contact**: Contact form and social media links
- **Footer**: Additional links and copyright information

## 🔧 Development

### Code Quality

- ESLint for code linting
- Prettier for code formatting (configure as needed)
- React Compiler enabled for better performance

### Performance Optimizations

- Vite's fast HMR (Hot Module Replacement)
- Optimized bundle splitting
- Lazy loading for components
- Image optimization (add as needed)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repo to Vercel
3. Deploy automatically on every push

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### Other Platforms

The built files in `dist` can be deployed to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Vite](https://vitejs.dev/) for fast development experience

---

Built with ❤️ using React and modern web technologies.
