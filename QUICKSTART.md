# 🚀 Quick Start Guide

## 1️⃣ Install Dependencies

```bash
cd pharos-checkin-app
npm install
```

## 2️⃣ Set Environment Variables

The `.env.local` file is already configured with the correct values:

```env
NEXT_PUBLIC_PHAROS_RPC_URL=https://testnet.dplabs-internal.com
NEXT_PUBLIC_CHAIN_ID=688688
NEXT_PUBLIC_CONTRACT_ADDRESS=0x94bc90f31bf2422e0cabf0ab95f18a79b1770e11
```

> **✅ Ready!** Contract is already deployed and configured!

## 3️⃣ Smart Contract Deployment

### ✅ Contract Already Deployed!

**Contract Address:** `0x94bc90f31bf2422e0cabf0ab95f18a79b1770e11`

The contract has been successfully deployed to Pharos Testnet. You can skip this step and go directly to step 4!

**View on Explorer:**
https://testnet.pharosscan.xyz/address/0x94bc90f31bf2422e0cabf0ab95f18a79b1770e11

> 💡 **Note:** If you want to deploy your own contract, follow the instructions in `DEPLOY.md`.

## 4️⃣ Start Development Server

```bash
npm run dev
```

Open in browser: http://localhost:3000

## 5️⃣ Test the Application

1. **Open MetaMask** and make sure you're connected to Pharos Testnet
2. Ensure you have testnet tokens (get from faucet)
3. Click **"Connect Wallet"** button
4. Approve the connection in MetaMask
5. Click **"Daily Check-in"** button
6. Confirm the transaction in MetaMask
7. Your counter will increase once the transaction completes! 🎉

## 6️⃣ Production Build

```bash
npm run build
npm start
```

## 7️⃣ Deploy to Vercel

### Via Vercel Dashboard:

1. Login to [Vercel](https://vercel.com)
2. Create "New Project"
3. Select your GitHub repository
4. Add Environment Variables:
   - `NEXT_PUBLIC_PHAROS_RPC_URL`
   - `NEXT_PUBLIC_CHAIN_ID`
   - `NEXT_PUBLIC_CONTRACT_ADDRESS`
5. Click "Deploy"

### Via Vercel CLI:

```bash
npm install -g vercel
vercel login
vercel
```

## ⚠️ Troubleshooting

### "Please install MetaMask" error
- Make sure MetaMask browser extension is installed

### "Contract address not set" error
- Check the `NEXT_PUBLIC_CONTRACT_ADDRESS` value in `.env.local`
- Ensure the contract is successfully deployed

### "Insufficient funds" error
- Get tokens from Pharos Testnet faucet
- Make sure you have enough test tokens in your wallet

### Network connection error
- Verify the Pharos Testnet RPC URL is correct
- Check your internet connection

## 📚 More Information

- **Detailed Documentation:** `README.md`
- **Deployment Instructions:** `DEPLOY.md`
- **Smart Contract:** `contracts/DailyCheckIn.sol`

## 🎯 Make Your First Check-in!

You're ready! Connect your MetaMask and make your first daily check-in! 🚀
