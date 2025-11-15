# Deploying to Vercel

This guide will help you deploy your portfolio to Vercel.

## Prerequisites

- A GitHub account (or GitLab/Bitbucket)
- Your portfolio code pushed to a Git repository
- A Vercel account (free tier works perfectly)

## Method 1: Deploy via Vercel Website (Recommended)

### Step 1: Push to GitHub

```bash
# If you haven't initialized git yet
git init
git add .
git commit -m "Initial portfolio commit"

# Create a repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
2. Click **"Add New Project"** or **"Import Project"**
3. Select your repository (`my-portfolio`)
4. Vercel will automatically detect it's a Vite project
5. Configure:
   - **Framework Preset**: Vite (auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `dist` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)
6. Click **"Deploy"**
7. Wait 1-2 minutes for deployment to complete
8. Your site will be live at `your-project.vercel.app`

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

```bash
# From your project directory
vercel

# For production deployment
vercel --prod
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? Choose your account
- Link to existing project? **No** (first time)
- Project name? **my-portfolio** (or your preferred name)
- Directory? **./** (current directory)
- Override settings? **No**

## Configuration

The `vercel.json` file is already configured with:
- ✅ Build settings for Vite
- ✅ SPA routing support (all routes redirect to index.html)
- ✅ Framework detection

## Environment Variables

If you need environment variables:

1. Go to your project on Vercel dashboard
2. Settings → Environment Variables
3. Add your variables
4. Redeploy

## Custom Domain

To add a custom domain:

1. Go to your project on Vercel dashboard
2. Settings → Domains
3. Add your domain
4. Follow DNS configuration instructions

## Automatic Deployments

Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every push to other branches (creates preview URLs)

## Troubleshooting

### Build fails
- Check that all dependencies are in `package.json`
- Ensure Node.js version is compatible (Vercel uses Node 18+ by default)

### Images not loading
- Make sure images are in `public/images/` folder
- Check image paths are correct (should start with `/images/...`)

### Routing issues
- The `vercel.json` already handles SPA routing
- If issues persist, check the rewrites configuration

## Updating Your Site

Simply push changes to GitHub:
```bash
git add .
git commit -m "Update portfolio"
git push
```

Vercel will automatically rebuild and deploy!

