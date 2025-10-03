# 🚀 Vercel Deployment Guide

This guide will help you deploy your Pharos Daily Check-in dApp to Vercel.

## Prerequisites

- GitHub account
- Vercel account (free tier is sufficient)
- Git installed on your computer

## 📤 Step 1: Push to GitHub

### 1.1 Initialize Git Repository

```bash
cd /Users/ganisacik/claudedosyalar/pharos-checkin-app

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Pharos Daily Check-in dApp"
```

### 1.2 Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **"+"** icon → **"New repository"**
3. Repository name: `pharos-checkin-app` (or your preferred name)
4. Description: "Daily check-in dApp on Pharos Testnet"
5. Choose **Public** (so everyone can access your app)
6. Click **"Create repository"**

### 1.3 Push to GitHub

GitHub will show you commands. Run these in your terminal:

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/pharos-checkin-app.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## 🌐 Step 2: Deploy to Vercel

### 2.1 Sign Up / Login to Vercel

1. Go to [Vercel](https://vercel.com)
2. Click **"Sign Up"** or **"Login"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

### 2.2 Import Project

1. On Vercel dashboard, click **"Add New..."** → **"Project"**
2. Find your repository: `pharos-checkin-app`
3. Click **"Import"**

### 2.3 Configure Project

**Framework Preset:** Next.js (should be auto-detected)

**Build Settings:** Keep defaults
- Build Command: `next build`
- Output Directory: `.next`
- Install Command: `npm install`

### 2.4 Add Environment Variables

Click **"Environment Variables"** and add these three variables:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_PHAROS_RPC_URL` | `https://testnet.dplabs-internal.com` |
| `NEXT_PUBLIC_CHAIN_ID` | `688688` |
| `NEXT_PUBLIC_CONTRACT_ADDRESS` | `0x94bc90f31bf2422e0cabf0ab95f18a79b1770e11` |

**Important:** Make sure to add these to **all environments** (Production, Preview, Development)

### 2.5 Deploy

1. Click **"Deploy"**
2. Wait 1-2 minutes for deployment to complete
3. You'll see "🎉 Congratulations!" when done

### 2.6 Get Your Live URL

Your app will be live at:
```
https://your-project-name.vercel.app
```

Or with a custom domain if you added one.

## ✅ Step 3: Test Your Deployment

1. Open your Vercel URL
2. Click "Connect Wallet"
3. MetaMask should open
4. Connect and switch to Pharos Testnet
5. Click "Daily Check-in"
6. Confirm transaction
7. Check-in counter should increase!

## 🔄 Step 4: Making Updates

When you want to update your app:

```bash
# Make your changes to the code

# Stage changes
git add .

# Commit changes
git commit -m "Your update message"

# Push to GitHub
git push

# Vercel will automatically deploy the new version!
```

## 🎨 Optional: Custom Domain

### Add Custom Domain

1. Go to your project on Vercel
2. Click **"Settings"** → **"Domains"**
3. Add your domain
4. Follow DNS configuration instructions

## 📊 Vercel Dashboard Features

Your Vercel dashboard shows:
- **Deployments:** History of all deployments
- **Analytics:** Visitor statistics (Pro plan)
- **Logs:** Real-time logs and errors
- **Settings:** Environment variables, domains, etc.

## 🐛 Troubleshooting

### Build Failed

**Check:**
- All environment variables are set correctly
- No syntax errors in your code
- `package.json` has all dependencies

**Solution:**
```bash
# Test locally first
npm run build

# If it builds locally, push again
git add .
git commit -m "Fix build issues"
git push
```

### Environment Variables Not Working

**Check:**
- Variables start with `NEXT_PUBLIC_` for client-side access
- Variables are added to Production environment
- Redeploy after adding variables

**Solution:**
1. Go to Settings → Environment Variables
2. Verify all variables are present
3. Click "Redeploy" button

### MetaMask Not Connecting

**Check:**
- Your URL is using HTTPS (Vercel provides this automatically)
- No browser console errors
- MetaMask is installed and unlocked

## 📝 Environment Variables Reference

```bash
# Required for the app to work
NEXT_PUBLIC_PHAROS_RPC_URL=https://testnet.dplabs-internal.com
NEXT_PUBLIC_CHAIN_ID=688688
NEXT_PUBLIC_CONTRACT_ADDRESS=0x94bc90f31bf2422e0cabf0ab95f18a79b1770e11
```

## 🎉 Success!

Your Pharos Daily Check-in dApp is now live and accessible to everyone!

Share your URL:
```
https://your-project-name.vercel.app
```

## 📱 Share Your dApp

Share on social media:
- Twitter: "Check out my Pharos Daily Check-in dApp! 🚀 [your-url]"
- Discord: Post in Pharos community channels
- Reddit: Share in relevant subreddits

---

**Need Help?**
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- Open an issue on GitHub
