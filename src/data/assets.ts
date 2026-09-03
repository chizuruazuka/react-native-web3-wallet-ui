export type Asset = {
  symbol: string;
  name: string;
  amount: string;
  value: string;
  change: string;
  positive: boolean;
};

export const assets: Asset[] = [
  { symbol: "ETH", name: "Ethereum", amount: "1.4821", value: "$5,487.12", change: "+4.8%", positive: true },
  { symbol: "USDC", name: "USD Coin", amount: "2,860.00", value: "$2,860.00", change: "+0.1%", positive: true },
  { symbol: "SOL", name: "Solana", amount: "5.82", value: "$982.54", change: "-1.7%", positive: false },
  { symbol: "ARB", name: "Arbitrum", amount: "614.23", value: "$517.82", change: "+2.2%", positive: true }
];
