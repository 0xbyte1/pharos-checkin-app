# Deploy with Hardhat (Optional)

## Installation

```bash
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
npx hardhat init
```

## Create hardhat.config.ts:

```typescript
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    pharos: {
      url: process.env.NEXT_PUBLIC_PHAROS_RPC_URL || "",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: parseInt(process.env.NEXT_PUBLIC_CHAIN_ID || "688688"),
    },
  },
};

export default config;
```

## Create deploy script (scripts/deploy.ts):

```typescript
import { ethers } from "hardhat";

async function main() {
  console.log("Deploying DailyCheckIn contract...");

  const DailyCheckIn = await ethers.getContractFactory("DailyCheckIn");
  const dailyCheckIn = await DailyCheckIn.deploy();

  await dailyCheckIn.waitForDeployment();

  const address = await dailyCheckIn.getAddress();
  console.log("DailyCheckIn deployed to:", address);
  console.log("Update your .env.local with:");
  console.log(`NEXT_PUBLIC_CONTRACT_ADDRESS=${address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
```

## Add private key to .env.local:

```
PRIVATE_KEY=your_private_key_here
```

⚠️ **WARNING:** Never commit your private key to Git!

## Deploy:

```bash
npx hardhat run scripts/deploy.ts --network pharos
```

## Verify contract (if block explorer supports it):

```bash
npx hardhat verify --network pharos DEPLOYED_CONTRACT_ADDRESS
```
