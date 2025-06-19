# 🚀 Deploy Brandon's Auto Sound to GitHub Pages

This guide will help you deploy your website to GitHub Pages without installing any additional dependencies locally.

## 📋 Prerequisites

- A GitHub account
- This project code on your local machine

## 🛠️ Setup Steps

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `brando` (or any name you prefer)
3. Set it to **Public** (required for free GitHub Pages)
4. Don't initialize with README (we already have one)

### 2. Update Repository Name (if different)

If you named your repository something other than `brando`, update the `basePath` in `next.config.js`:

```javascript
basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
```

### 3. Push Your Code to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Brandon's Auto Sound website"

# Add your GitHub repository as origin
git remote add origin https://github.com/YOUR_USERNAME/brando.git

# Push to GitHub
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 5. Automatic Deployment

The GitHub Action will automatically:
- ✅ Install dependencies
- ✅ Build the Next.js site as static files
- ✅ Deploy to GitHub Pages

Your website will be available at: `https://YOUR_USERNAME.github.io/brando/`

## 🔄 Future Updates

Every time you push changes to the `main` branch:
1. The GitHub Action will automatically rebuild the site
2. Deploy the updated version to GitHub Pages
3. Your changes will be live within a few minutes

## 🛠️ Local Development

To continue working on the site locally:

```bash
# Start development server
npm run dev

# Build for production (to test before deploying)
npm run build
```

## 📁 File Structure

```
brando/
├── .github/workflows/deploy.yml    # GitHub Actions workflow
├── app/                           # Next.js app directory
├── public/.nojekyll              # GitHub Pages configuration
├── next.config.js                # Next.js configuration with static export
├── package.json                  # Dependencies and scripts
└── README.md                     # Project documentation
```

## 🔧 Troubleshooting

### Images Not Loading
- Make sure all images are in the `public` folder
- Use relative paths: `/images/photo.jpg`
- Avoid external images in production

### 404 Errors
- Ensure `trailingSlash: true` is in `next.config.js`
- Check that the `basePath` matches your repository name

### Build Failures
- Check the Actions tab in your GitHub repository
- Review the build logs for specific errors
- Ensure all dependencies are listed in `package.json`

## 🎯 Custom Domain (Optional)

To use a custom domain like `brandonsautosound.com`:

1. Add a `CNAME` file to the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

## 📞 Support

If you encounter issues:
1. Check the GitHub Actions logs in your repository
2. Ensure all files are committed and pushed
3. Verify GitHub Pages is enabled in repository settings

Your Brandon's Auto Sound website will be live and professional! 🎵 