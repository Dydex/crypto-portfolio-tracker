import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { PairsCardProps } from "@/interfaces";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { symbols = "BTC,ETH,SOL" } = req.query;

    const response = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.NEXT_PUBLIC_CMC_API_KEY,
        },
        params: {
          symbol: symbols,
          convert: "USD",
        },
      }
    );

    const data: PairsCardProps[] = Object.values(response.data.data).map(
      (coin: any) => ({
        id: coin.id,
        name: coin.name,
        title: coin.symbol,
        price: coin.quote.USD.price,
        percent_change_24h: coin.quote.USD.percent_change_24h,

        price_change_24h:
          (coin.quote.USD.price * coin.quote.USD.percent_change_24h) / 100,
      })
    );

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching quotes:", error);
    res.status(500).json({ error: "Failed to fetch coin quotes" });
  }
}
