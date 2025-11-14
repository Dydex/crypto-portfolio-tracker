import { AssetsCardProps, MarketCardProps, PairsCardProps } from "@/interfaces";

export const Coins: PairsCardProps[] = [
  {
    id: 1,
    name: "bitcoin",
    title: "BTC",
    price: 234654,
    percent_change_24h: 4.5,
    price_change_24h: 234,
  },
  {
    id: 2,
    name: "etherum",
    title: "ETH",
    price: 46666,
    percent_change_24h: 4.5,
    price_change_24h: 234,
  },
  {
    id: 3,
    name: "solana",
    title: "SOL",
    price: 66566,
    percent_change_24h: 4.5,
    price_change_24h: 234,
  },
  {
    id: 4,
    name: "aptos",
    title: "APT",
    price: 666636,
    percent_change_24h: 4.5,
    price_change_24h: 234,
  },
];

export const Pairs: MarketCardProps[] = [
  {
    id: 1,
    name: "bitcoin",
    title: "BTN",
    price: 234654,
    percentChange24h: 4.3,
  },
  {
    id: 2,
    name: "etherum",
    title: "ETH",
    price: 68666,
    percentChange24h: 4.4,
  },
  {
    id: 3,
    name: "solana",
    title: "SOL",
    price: 668666,
    percentChange24h: 4.6,
  },
  {
    id: 4,
    name: "aptos",
    title: "APTOS",
    price: 660666,
    percentChange24h: 4.8,
  },
  {
    id: 5,
    name: "Pi",
    title: "Pi",
    price: 630666,
    percentChange24h: 4.8,
  },
  {
    id: 6,
    name: "bitcoin",
    title: "BTN",
    price: 234654,
    percentChange24h: 4.3,
  },
  {
    id: 7,
    name: "etherum",
    title: "ETH",
    price: 68666,
    percentChange24h: 4.4,
  },
];

export const Balance: AssetsCardProps[] = [
  {
    id: 1,
    balance: 25900,
    percent_change_24h: 810,
    amount_change_24h: 1500,
  },
];

export const coinIcons: Record<string, string> = {
  BTC: "/images/BTC.png",
  ETH: "/images/ETH.png",
  SOL: "/images/SOL.png",
  APT: "/images/APT.png",
};
