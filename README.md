# Dr. Yuefeng Du - Academic Website

A professional academic website showcasing research, teaching experience, and publications for Dr. Yuefeng Du, Researcher & Lecturer at the Department of Computer Science, City University of Hong Kong.

## Features

- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI**: Built with React, Tailwind CSS, and shadcn/ui components
- **Professional Layout**: Clean and academic-focused design
- **Interactive Navigation**: Smooth routing between pages
- **Comprehensive Content**: 
  - Personal introduction and research focus
  - Detailed teaching experience with student feedback
  - Complete publications list with proper formatting

## Pages

1. **Home**: Personal introduction, research focus, and philosophy
2. **Teaching**: Current and past courses, teaching assistant experience
3. **Publications**: Research papers organized by year with statistics

## Technology Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Animations**: Framer Motion

## Development

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd academic-website

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

### Build for Production
```bash
# Build the project
pnpm run build

# Preview the build
pnpm run preview
```

## GitHub Pages Deployment

### Option 1: Manual Deployment

1. Build the project:
   ```bash
   pnpm run build
   ```

2. Create a new repository on GitHub (e.g., `username.github.io` or `academic-website`)

3. Copy the contents of the `dist` folder to your repository

4. Enable GitHub Pages in repository settings:
   - Go to Settings > Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Save the settings

### Option 2: GitHub Actions (Recommended)

1. Create `.github/workflows/deploy.yml` in your repository:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

2. Push your code to the main branch
3. GitHub Actions will automatically build and deploy your site

### Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain name
2. Configure DNS settings with your domain provider
3. Enable "Enforce HTTPS" in GitHub Pages settings

## Project Structure

```
academic-website/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── HomePage.jsx   # Home page component
│   │   ├── TeachingPage.jsx # Teaching experience page
│   │   ├── PublicationsPage.jsx # Publications page
│   │   └── ui/           # UI components (shadcn/ui)
│   ├── App.jsx           # Main app component with routing
│   ├── App.css           # Global styles
│   └── main.jsx          # Entry point
├── dist/                 # Built files (generated)
├── package.json          # Dependencies and scripts
└── vite.config.js        # Vite configuration
```

## Customization

### Adding New Content

1. **Publications**: Update the `publications` array in `src/components/PublicationsPage.jsx`
2. **Teaching**: Modify course data in `src/components/TeachingPage.jsx`
3. **Personal Info**: Edit content in `src/components/HomePage.jsx`

### Styling

- Global styles: `src/App.css`
- Component-specific styles: Use Tailwind CSS classes
- Color scheme: Modify CSS variables in `src/App.css`

### Navigation

Add new pages by:
1. Creating a new component in `src/components/`
2. Adding the route to `src/App.jsx`
3. Updating the navigation menu

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Dr. Yuefeng Du  
Department of Computer Science  
City University of Hong Kong  
Email: yuefeng.du@cityu.edu.hk

