export interface PairsCardProps {
  id: number;
  name: string;
  title: string;
  price: number;
  percent_change_24h: number;
  price_change_24h: number;
}

export interface PairsCardFullProps extends PairsCardProps {
  image: string;
}

export interface MarketCardProps {
  id: number;
  title: string;
  name: string;
  price: number;
  percentChange24h: number;
}

export interface AssetsCardProps {
  id: number;
  balance: number;
  percent_change_24h: number;
  amount_change_24h: number;
}
