# 📋 Pre-Deployment Checklist

Before deploying to Vercel, make sure everything is ready:

## ✅ Code Checklist

- [x] All text is in English
- [x] Environment variables are set correctly
- [x] Contract address is correct
- [x] RPC URL is correct
- [x] Chain ID is correct (688688)
- [x] Block explorer URL is correct
- [x] .gitignore includes .env.local
- [x] No sensitive data in code
- [x] TypeScript has no errors
- [x] Build succeeds locally

## 🧪 Test Locally

Run these commands to test:

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Open http://localhost:3000

# Test production build
npm run build
npm start
```

## 🔍 Test Checklist

Test these features before deploying:

- [ ] Page loads correctly
- [ ] "Connect Wallet" button works
- [ ] MetaMask opens and connects
- [ ] Pharos Testnet is added/switched correctly
- [ ] Wallet address displays correctly
- [ ] Check-in count loads from contract
- [ ] "Daily Check-in" button works
- [ ] Transaction is sent successfully
- [ ] Counter increases after check-in
- [ ] Transaction hash is displayed
- [ ] Explorer link works
- [ ] Error messages display correctly
- [ ] Dark mode works
- [ ] Responsive on mobile

## 🚀 Deploy Steps

### 1. Local Build Test

```bash
npm run build
```

Should complete without errors.

### 2. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Pharos Daily Check-in"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/pharos-checkin-app.git
git push -u origin main
```

### 3. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Add environment variables:
   - `NEXT_PUBLIC_PHAROS_RPC_URL=https://testnet.dplabs-internal.com`
   - `NEXT_PUBLIC_CHAIN_ID=688688`
   - `NEXT_PUBLIC_CONTRACT_ADDRESS=0x94bc90f31bf2422e0cabf0ab95f18a79b1770e11`
4. Click Deploy

### 4. Test Deployed App

After deployment:

- [ ] Open your Vercel URL
- [ ] Test wallet connection
- [ ] Test check-in functionality
- [ ] Verify transaction on explorer
- [ ] Test on mobile device
- [ ] Share with friends to test!

## 🎉 Post-Deployment

After successful deployment:

1. Update README.md with your actual Vercel URL
2. Share on social media
3. Post in Pharos community
4. Monitor for any issues

## 📝 Environment Variables Reference

```env
NEXT_PUBLIC_PHAROS_RPC_URL=https://testnet.dplabs-internal.com
NEXT_PUBLIC_CHAIN_ID=688688
NEXT_PUBLIC_CONTRACT_ADDRESS=0x94bc90f31bf2422e0cabf0ab95f18a79b1770e11
```

## 🐛 Common Issues

### Build fails on Vercel

**Solution:** Check environment variables are set correctly

### MetaMask doesn't connect

**Solution:** Make sure HTTPS is enabled (Vercel does this automatically)

### Contract not found

**Solution:** Verify contract address is correct in environment variables

### Wrong network

**Solution:** Verify Chain ID is 688688

---

✅ **All checks passed? Ready to deploy!**

Follow the instructions in [DEPLOYMENT.md](./DEPLOYMENT.md)
