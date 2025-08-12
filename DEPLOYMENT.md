# Deployment Guide

This guide provides detailed instructions for deploying the Digital Infrastructure Portfolio website to various hosting platforms.

## 🚀 Deployment Options

### 1. Netlify (Recommended for Static Sites)

Netlify is perfect for React applications and offers excellent performance with global CDN.

#### Method 1: Drag & Drop Deployment

1. **Build the project:**
   ```bash
   cd digital-infrastructure-portfolio
   pnpm run build
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up or log in
   - Drag the `dist` folder to the deployment area
   - Your site will be live with a random URL

3. **Custom Domain (Optional):**
   - Go to Site Settings > Domain Management
   - Add your custom domain
   - Configure DNS settings as instructed

#### Method 2: Git Integration (Recommended)

1. **Push to Git repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to Netlify dashboard
   - Click "New site from Git"
   - Connect your repository
   - Set build settings:
     - Build command: `pnpm run build`
     - Publish directory: `dist`
   - Deploy site

3. **Environment Variables (if needed):**
   - Go to Site Settings > Environment Variables
   - Add any required environment variables

### 2. Vercel (Excellent for React/Next.js)

Vercel provides excellent performance and is optimized for React applications.

#### Quick Deployment

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   cd digital-infrastructure-portfolio
   vercel
   ```

3. **Follow the prompts:**
   - Link to existing project or create new
   - Confirm project settings
   - Deploy

#### Git Integration

1. **Push to Git repository**
2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your Git repository
   - Configure build settings (usually auto-detected)
   - Deploy

### 3. GitHub Pages

Free hosting directly from your GitHub repository.

#### Setup

1. **Install gh-pages:**
   ```bash
   cd digital-infrastructure-portfolio
   pnpm add -D gh-pages
   ```

2. **Update package.json:**
   ```json
   {
     "scripts": {
       "predeploy": "pnpm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://yourusername.github.io/digital-infrastructure-portfolio"
   }
   ```

3. **Deploy:**
   ```bash
   pnpm run deploy
   ```

4. **Enable GitHub Pages:**
   - Go to repository Settings
   - Scroll to Pages section
   - Select source: Deploy from branch
   - Select branch: gh-pages
   - Save

### 4. Firebase Hosting

Google's hosting platform with excellent performance.

#### Setup

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login and initialize:**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Configure firebase.json:**
   ```json
   {
     "hosting": {
       "public": "dist",
       "ignore": [
         "firebase.json",
         "**/.*",
         "**/node_modules/**"
       ],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

4. **Build and deploy:**
   ```bash
   pnpm run build
   firebase deploy
   ```

### 5. AWS S3 + CloudFront

Enterprise-grade hosting with AWS services.

#### Prerequisites
- AWS account
- AWS CLI installed and configured

#### Setup

1. **Create S3 bucket:**
   ```bash
   aws s3 mb s3://your-portfolio-bucket-name
   ```

2. **Configure bucket for static hosting:**
   ```bash
   aws s3 website s3://your-portfolio-bucket-name --index-document index.html --error-document index.html
   ```

3. **Build and upload:**
   ```bash
   pnpm run build
   aws s3 sync dist/ s3://your-portfolio-bucket-name --delete
   ```

4. **Set up CloudFront (recommended):**
   - Create CloudFront distribution
   - Point to S3 bucket
   - Configure custom domain and SSL

## 🔧 Build Configuration

### Environment Variables

If you need environment variables for different deployments:

1. **Create environment files:**
   ```
   .env.local          # Local development
   .env.production     # Production build
   .env.staging        # Staging environment
   ```

2. **Example variables:**
   ```
   VITE_API_URL=https://api.example.com
   VITE_CONTACT_EMAIL=contact@example.com
   VITE_ANALYTICS_ID=GA_TRACKING_ID
   ```

3. **Use in code:**
   ```javascript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

### Build Optimization

#### Bundle Analysis

1. **Install bundle analyzer:**
   ```bash
   pnpm add -D rollup-plugin-visualizer
   ```

2. **Update vite.config.js:**
   ```javascript
   import { visualizer } from 'rollup-plugin-visualizer';
   
   export default defineConfig({
     plugins: [
       react(),
       visualizer({
         filename: 'dist/stats.html',
         open: true
       })
     ]
   });
   ```

3. **Analyze bundle:**
   ```bash
   pnpm run build
   ```

#### Performance Optimization

1. **Code Splitting:**
   ```javascript
   // Lazy load pages
   const About = lazy(() => import('./components/pages/About'));
   const Skills = lazy(() => import('./components/pages/Skills'));
   ```

2. **Image Optimization:**
   - Use WebP format when possible
   - Implement lazy loading
   - Optimize image sizes

3. **Preloading:**
   ```html
   <link rel="preload" href="/assets/critical.css" as="style">
   ```

## 🌐 Custom Domain Setup

### DNS Configuration

For most hosting providers, you'll need to configure DNS:

1. **A Record (for root domain):**
   ```
   Type: A
   Name: @
   Value: [Provider's IP address]
   ```

2. **CNAME Record (for www subdomain):**
   ```
   Type: CNAME
   Name: www
   Value: [Provider's domain]
   ```

### SSL Certificate

Most modern hosting providers offer free SSL certificates:

- **Netlify**: Automatic with Let's Encrypt
- **Vercel**: Automatic SSL
- **GitHub Pages**: Automatic for github.io domains
- **Firebase**: Free SSL certificates
- **AWS**: Use AWS Certificate Manager

## 📊 Monitoring and Analytics

### Performance Monitoring

1. **Google PageSpeed Insights:**
   - Test your deployed site
   - Follow recommendations for improvements

2. **Lighthouse:**
   - Built into Chrome DevTools
   - Automated testing for performance, accessibility, SEO

3. **Web Vitals:**
   - Monitor Core Web Vitals
   - Use tools like GTmetrix or Pingdom

### Analytics Setup

1. **Google Analytics 4:**
   ```javascript
   // Add to index.html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

2. **Privacy Compliance:**
   - Add cookie consent banner if required
   - Implement privacy policy
   - Consider GDPR compliance for EU visitors

## 🔒 Security Considerations

### Content Security Policy

Add CSP headers for security:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;">
```

### Security Headers

Configure security headers on your hosting platform:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

## 🚨 Troubleshooting Deployment

### Common Issues

1. **Build Fails:**
   - Check for TypeScript errors
   - Verify all imports are correct
   - Ensure environment variables are set

2. **404 Errors on Refresh:**
   - Configure server to serve index.html for all routes
   - Add rewrite rules for SPA routing

3. **Assets Not Loading:**
   - Check base URL configuration
   - Verify asset paths are correct
   - Ensure assets are included in build

4. **Performance Issues:**
   - Enable gzip compression
   - Configure caching headers
   - Optimize images and assets

### Platform-Specific Issues

#### Netlify
- **Redirects:** Create `_redirects` file in public folder
- **Headers:** Create `_headers` file for custom headers
- **Functions:** Use Netlify Functions for serverless functionality

#### Vercel
- **Redirects:** Configure in `vercel.json`
- **Headers:** Set in `vercel.json` configuration
- **Edge Functions:** Use Vercel Edge Functions

#### GitHub Pages
- **Custom Domain:** Add CNAME file to public folder
- **HTTPS:** Enable in repository settings
- **Build Issues:** Check GitHub Actions logs

## 📈 Post-Deployment Checklist

After successful deployment:

- [ ] Test all pages and functionality
- [ ] Verify responsive design on different devices
- [ ] Check loading speed and performance
- [ ] Test contact form (if applicable)
- [ ] Verify language switching works
- [ ] Test CV download functionality
- [ ] Check all external links
- [ ] Verify SEO meta tags
- [ ] Test on different browsers
- [ ] Set up monitoring and analytics
- [ ] Configure custom domain (if applicable)
- [ ] Set up SSL certificate
- [ ] Test from different geographic locations

---

**Deployment completed successfully! Your Digital Infrastructure Portfolio is now live and accessible to the world.**

