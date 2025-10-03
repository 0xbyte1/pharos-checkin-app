import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pharos Daily Check-in",
  description: "Daily check-in dApp on Pharos Testnet - Check in every day and track your progress",
  keywords: ["Pharos", "blockchain", "Web3", "dApp", "check-in", "crypto"],
  authors: [{ name: "Pharos Community" }],
  openGraph: {
    title: "Pharos Daily Check-in",
    description: "Check in daily on Pharos Testnet and track your progress",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
