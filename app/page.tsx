'use client';

import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

// Contract ABI - only the functions we need
const CONTRACT_ABI = [
  "function checkIn() external",
  "function getCheckInCount(address user) external view returns (uint256)"
];

export default function Home() {
  const [account, setAccount] = useState<string>('');
  const [checkInCount, setCheckInCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [txHash, setTxHash] = useState<string>('');

  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '';
  const chainId = process.env.NEXT_PUBLIC_CHAIN_ID || '688688';
  const rpcUrl = process.env.NEXT_PUBLIC_PHAROS_RPC_URL || '';

  // Connect wallet
  const connectWallet = async () => {
    try {
      setError('');
      if (typeof window.ethereum === 'undefined') {
        setError('Please install MetaMask!');
        return;
      }

      // Request wallet connection
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      // Switch to Pharos Testnet
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: `0x${parseInt(chainId).toString(16)}` }],
        });
      } catch (switchError: any) {
        // Add network if it doesn't exist
        if (switchError.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: `0x${parseInt(chainId).toString(16)}`,
                  chainName: 'Pharos Testnet',
                  nativeCurrency: {
                    name: 'Pharos',
                    symbol: 'PHAR',
                    decimals: 18,
                  },
                  rpcUrls: [rpcUrl],
                  blockExplorerUrls: ['https://testnet.pharosscan.xyz'],
                },
              ],
            });
          } catch (addError) {
            setError('Error adding network');
            return;
          }
        }
      }

      setAccount(accounts[0]);
      await fetchCheckInCount(accounts[0]);
    } catch (err: any) {
      setError(err.message || 'Error connecting wallet');
    }
  };

  // Fetch check-in count
  const fetchCheckInCount = async (userAddress: string) => {
    try {
      if (!contractAddress || contractAddress === '0x0000000000000000000000000000000000000000') {
        setError('Contract address not set. Please check .env.local file.');
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const contract = new ethers.Contract(contractAddress, CONTRACT_ABI, provider);
      const count = await contract.getCheckInCount(userAddress);
      setCheckInCount(Number(count));
    } catch (err: any) {
      console.error('Error fetching check-in count:', err);
    }
  };

  // Perform check-in
  const handleCheckIn = async () => {
    try {
      setLoading(true);
      setError('');
      setTxHash('');

      if (!contractAddress || contractAddress === '0x0000000000000000000000000000000000000000') {
        setError('Contract address not set. Please check .env.local file.');
        setLoading(false);
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, CONTRACT_ABI, signer);

      const tx = await contract.checkIn();
      setTxHash(tx.hash);
      
      await tx.wait();
      
      // Success, update counter
      await fetchCheckInCount(account);
      setError('');
    } catch (err: any) {
      setError(err.message || 'Error performing check-in');
    } finally {
      setLoading(false);
    }
  };

  // Listen for account changes
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          fetchCheckInCount(accounts[0]);
        } else {
          setAccount('');
          setCheckInCount(0);
        }
      });
    }
  }, []);

  // Short address format
  const formatAddress = (addr: string) => {
    if (!addr) return '';
    return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Pharos Daily Check-in
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Check in daily and increase your counter!
          </p>
        </div>

        {!account ? (
          <button
            onClick={connectWallet}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            🔗 Connect Wallet
          </button>
        ) : (
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Connected Wallet
              </p>
              <p className="text-lg font-mono font-semibold text-gray-800 dark:text-white">
                {formatAddress(account)}
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 text-center border-2 border-purple-200 dark:border-purple-700">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Total Check-ins
              </p>
              <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                {checkInCount}
              </p>
            </div>

            <button
              onClick={handleCheckIn}
              disabled={loading}
              className={`w-full font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform shadow-lg ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:scale-105 text-white'
              }`}
            >
              {loading ? '⏳ Processing...' : '✅ Daily Check-in'}
            </button>

            {txHash && (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
                <p className="text-sm text-green-800 dark:text-green-400 mb-2">
                  ✅ Transaction successful!
                </p>
                <a 
                  href={`https://testnet.pharosscan.xyz/tx/${txHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-green-600 dark:text-green-500 hover:text-green-700 dark:hover:text-green-400 break-all underline"
                >
                  {txHash}
                </a>
                <p className="text-xs text-green-700 dark:text-green-500 mt-2">
                  👆 Click to view on explorer
                </p>
              </div>
            )}

            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
                <p className="text-sm text-red-800 dark:text-red-400">
                  ❌ {error}
                </p>
              </div>
            )}
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-center text-gray-500 dark:text-gray-400">
            Running on Pharos Testnet
          </p>
        </div>
      </div>
    </main>
  );
}
