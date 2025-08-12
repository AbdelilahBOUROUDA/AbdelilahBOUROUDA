# Digital Infrastructure Portfolio Website

A responsive, bilingual portfolio website for a Digital Infrastructure specialist, built with React, Tailwind CSS, and i18next for internationalization.

## 🌟 Features

- **Fully Bilingual**: English and French language support with easy switching
- **Dark Theme**: Professional dark blue color palette (#000000, #000585, #1b1a1b, #262fff, #5271ff)
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Sleek design with rounded corners, smooth transitions, and hover effects
- **Interactive Components**: Contact form, project showcases, skills visualization
- **Professional Content**: Complete portfolio sections including About, Skills, Projects, Certifications, Timeline, and Contact

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone or download the project
2. Navigate to the project directory:
   ```bash
   cd digital-infrastructure-portfolio
   ```

3. Install dependencies:
   ```bash
   pnpm install
   ```

### Development

Start the development server:
```bash
pnpm run dev
```

The website will be available at `http://localhost:5173`

For external access (useful for testing on mobile devices):
```bash
pnpm run dev --host
```

### Building for Production

Create a production build:
```bash
pnpm run build
```

Preview the production build:
```bash
pnpm run preview
```

## 📁 Project Structure

```
digital-infrastructure-portfolio/
├── public/
│   ├── assets/
│   │   ├── cv-placeholder.pdf
│   │   └── cv-placeholder.md
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components (shadcn/ui)
│   │   ├── pages/           # Page components
│   │   ├── Header.jsx       # Navigation header
│   │   └── Footer.jsx       # Site footer
│   ├── locales/
│   │   ├── en.json          # English translations
│   │   └── fr.json          # French translations
│   ├── App.css              # Global styles and theme
│   ├── App.jsx              # Main application component
│   ├── i18n.js              # Internationalization configuration
│   └── main.jsx             # Application entry point
├── package.json
└── README.md
```

## 🎨 Customization

### Colors

The website uses a custom dark theme defined in `src/App.css`. The main colors are:

- **Background**: #000000 (Pure black)
- **Cards**: #1b1a1b (Dark gray)
- **Primary**: #262fff (Bright blue)
- **Secondary**: #000585 (Deep blue)
- **Accent**: #5271ff (Light blue for hovers)

### Content

#### Language Files

Update the content in the language files:
- `src/locales/en.json` - English content
- `src/locales/fr.json` - French content

#### Personal Information

Replace placeholder content with actual information:

1. **Contact Information**: Update email, social links in Footer.jsx and Contact.jsx
2. **CV/Resume**: Replace `public/assets/cv-placeholder.pdf` with your actual CV
3. **Projects**: Update project descriptions, links, and technologies in the language files
4. **Skills**: Modify skill categories and proficiency levels in the language files
5. **Timeline**: Update career history and achievements in the language files

### Assets

#### Profile Photo

Replace the user icon placeholder in the About page with an actual profile photo:
1. Add your photo to `public/assets/`
2. Update the About.jsx component to use the image instead of the icon

#### Project Screenshots

Add project screenshots to `public/assets/projects/` and update the Projects.jsx component to display them.

## 🌐 Deployment

### Netlify (Recommended)

1. Build the project:
   ```bash
   pnpm run build
   ```

2. Deploy the `dist` folder to Netlify:
   - Drag and drop the `dist` folder to Netlify's deploy interface
   - Or connect your Git repository for automatic deployments

### Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel --prod
   ```

### GitHub Pages

1. Install gh-pages:
   ```bash
   pnpm add -D gh-pages
   ```

2. Add to package.json scripts:
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Build and deploy:
   ```bash
   pnpm run build
   pnpm run deploy
   ```

## 🧪 Testing

### Manual Testing Checklist

#### Functionality
- [ ] All navigation links work correctly
- [ ] Language toggle switches between English and French
- [ ] Contact form accepts input (note: form submission is simulated)
- [ ] CV download button works
- [ ] All external links open in new tabs
- [ ] Smooth scrolling and animations work

#### Responsiveness
- [ ] Desktop (1920x1080+): Full layout with all elements visible
- [ ] Tablet (768px-1024px): Responsive grid layouts
- [ ] Mobile (320px-767px): Stacked layouts, hamburger menu

#### Cross-browser Compatibility
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge

#### Performance
- [ ] Fast loading times
- [ ] Smooth animations
- [ ] No console errors

### Automated Testing

The project includes ESLint for code quality. Run linting:
```bash
pnpm run lint
```

## 🔧 Technical Details

### Technologies Used

- **React 19**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality React components
- **Framer Motion**: Smooth animations and transitions
- **Lucide React**: Beautiful, customizable icons
- **React Router**: Client-side routing
- **i18next**: Internationalization framework
- **React Hook Form**: Form handling and validation

### Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Performance Optimizations

- Code splitting with React.lazy (can be added)
- Optimized images and assets
- Minimal bundle size with tree shaking
- Fast development with Vite HMR

## 📝 License

This project is provided as-is for portfolio purposes. Feel free to use it as a template for your own portfolio website.

## 🤝 Support

For questions or issues:
1. Check the troubleshooting section below
2. Review the code comments
3. Consult the official documentation for the technologies used

## 🔍 Troubleshooting

### Common Issues

#### Development server won't start
- Ensure Node.js 18+ is installed
- Delete `node_modules` and `pnpm-lock.yaml`, then run `pnpm install`
- Check for port conflicts (default is 5173)

#### Build fails
- Run `pnpm run lint` to check for code issues
- Ensure all imports are correct
- Check for missing dependencies

#### Styling issues
- Verify Tailwind CSS is properly configured
- Check that custom CSS variables are defined in App.css
- Ensure dark mode classes are applied

#### Language switching not working
- Verify language files exist in `src/locales/`
- Check i18n configuration in `src/i18n.js`
- Ensure translation keys match between language files

### Performance Issues

If the website feels slow:
1. Check browser developer tools for console errors
2. Verify images are optimized
3. Consider implementing lazy loading for images
4. Monitor bundle size with `pnpm run build`

---

**Built with ❤️ using React, Tailwind CSS, and modern web technologies**

