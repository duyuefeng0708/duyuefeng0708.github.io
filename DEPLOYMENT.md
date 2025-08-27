# GitHub Pages Deployment Guide

This guide will help you deploy your academic website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- The academic website files (this project)

## Step-by-Step Deployment

### Option 1: Automatic Deployment with GitHub Actions (Recommended)

1. **Create a GitHub Repository**
   - Go to [GitHub](https://github.com) and sign in
   - Click "New repository" or go to https://github.com/new
   - Choose a repository name:
     - For personal site: `yourusername.github.io` (replace with your GitHub username)
     - For project site: `academic-website` or any name you prefer
   - Make sure it's set to "Public"
   - Don't initialize with README (we already have one)
   - Click "Create repository"

2. **Upload Your Website Files**
   
   **Method A: Using Git (Recommended)**
   ```bash
   # Navigate to your website folder
   cd academic-website
   
   # Initialize git repository
   git init
   
   # Add all files
   git add .
   
   # Make first commit
   git commit -m "Initial commit: Academic website"
   
   # Add your GitHub repository as remote
   git remote add origin https://github.com/yourusername/your-repo-name.git
   
   # Push to GitHub
   git push -u origin main
   ```
   
   **Method B: Using GitHub Web Interface**
   - In your new repository, click "uploading an existing file"
   - Drag and drop all files from the academic-website folder
   - Write a commit message like "Add academic website files"
   - Click "Commit changes"

3. **Enable GitHub Pages**
   - In your repository, go to "Settings" tab
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically run and deploy your site

4. **Access Your Website**
   - After the deployment completes (usually 2-5 minutes), your site will be available at:
     - Personal site: `https://yourusername.github.io`
     - Project site: `https://yourusername.github.io/repository-name`

### Option 2: Manual Deployment

1. **Build the Website**
   ```bash
   cd academic-website
   npm install
   npm run build
   ```

2. **Create Repository and Upload Built Files**
   - Create a new repository on GitHub
   - Upload only the contents of the `dist` folder to your repository
   - Enable GitHub Pages in Settings > Pages
   - Select "Deploy from a branch" and choose "main" branch

## Configuration for Different Repository Types

### Personal Site (username.github.io)
- Repository name must be exactly `yourusername.github.io`
- Website will be available at `https://yourusername.github.io`
- No additional configuration needed

### Project Site (any repository name)
- Repository can have any name (e.g., `academic-website`)
- Website will be available at `https://yourusername.github.io/repository-name`
- Update `vite.config.js` if needed:
  ```javascript
  base: '/repository-name/'
  ```

## Custom Domain (Optional)

To use your own domain (e.g., `www.yourname.com`):

1. **Add CNAME file**
   - Create a file named `CNAME` in the `public` folder
   - Add your domain name (without https://):
     ```
     www.yourname.com
     ```

2. **Configure DNS**
   - In your domain provider's DNS settings, add:
     - CNAME record: `www` pointing to `yourusername.github.io`
     - A records pointing to GitHub's IP addresses:
       - 185.199.108.153
       - 185.199.109.153
       - 185.199.110.153
       - 185.199.111.153

3. **Enable Custom Domain in GitHub**
   - Go to repository Settings > Pages
   - Enter your custom domain
   - Enable "Enforce HTTPS"

## Updating Your Website

### With GitHub Actions (Automatic)
1. Make changes to your files
2. Commit and push to the main branch:
   ```bash
   git add .
   git commit -m "Update website content"
   git push
   ```
3. GitHub Actions will automatically rebuild and deploy

### Manual Updates
1. Make changes and rebuild:
   ```bash
   npm run build
   ```
2. Upload new `dist` folder contents to your repository

## Troubleshooting

### Common Issues

1. **404 Error on Page Refresh**
   - Add a `404.html` file in the `public` folder that redirects to `index.html`

2. **Assets Not Loading**
   - Check the `base` configuration in `vite.config.js`
   - Ensure it matches your repository structure

3. **Build Fails**
   - Check that all dependencies are listed in `package.json`
   - Verify Node.js version compatibility

4. **GitHub Actions Not Running**
   - Ensure the workflow file is in `.github/workflows/deploy.yml`
   - Check repository permissions for GitHub Actions

### Getting Help

- Check the "Actions" tab in your GitHub repository for build logs
- Review GitHub Pages documentation: https://docs.github.com/en/pages
- Ensure your repository is public (GitHub Pages requires public repos for free accounts)

## Security Notes

- Never commit sensitive information (API keys, passwords)
- The website will be publicly accessible
- All source code will be visible in the GitHub repository

## Performance Tips

- Images are automatically optimized during build
- The site uses modern web technologies for fast loading
- Consider using a CDN for additional performance if needed

Your academic website should now be live and accessible to the world!

