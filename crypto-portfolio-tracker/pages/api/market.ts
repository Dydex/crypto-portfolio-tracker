import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.NEXT_PUBLIC_CMC_API_KEY,
        },
        params: {
          start: 1,
          limit: 8,
          convert: "USD",
        },
      }
    );
    const data = response.data.data.map((coin: any) => ({
      id: coin.id,
      name: coin.name,
      title: coin.symbol,
      price: coin.quote.USD.price.toFixed(2),
      percentChange24h: coin.quote.USD.percent_change_24h.toFixed(2),
    }));

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch crypto data" });
  }
}
