import MarketCard from "@/components/home/MarketCard";
import { useEffect, useState } from "react";
import { MarketCardProps, PairsCardFullProps } from "@/interfaces";
import axios from "axios";
import { Coins, coinIcons, Pairs, Balance } from "@/constants";
import PairsCard from "@/components/home/PairsCard";
import { PauseCircle } from "lucide-react";
import AssetCard from "@/components/home/AssetsCard";

const Home: React.FC = () => {
  // const [coins, setCoins] = useState<PairsCardProps[]>([]);
  // const [loading, setLaoding] = useState(true);

  // const fetchCoins = async () => {
  //   try {
  //     const res = await axios.get<PairsCardProps[]>(
  //       "/api/coins?symbols=BTC,ETH,SOL"
  //     );
  //     setCoins(res.data);
  //   } catch (error) {
  //     console.error("Error fetching quotes:", error);
  //   } finally {
  //     setLaoding(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchCoins();
  //   const interval = setInterval(fetchCoins, 60000);
  //   return () => clearInterval(interval);
  // }, []);

  // const [market, setMarket] = useState<MarketCardProps[]>([]);

  // const fetchMarket = async () => {
  //   try {
  //     const res = await axios.get<MarketCardProps[]>("/api/market");
  //     setMarket(res.data);
  //   } catch (error) {
  //     console.error("Error fetching market:", error);
  //   }
  // };
  // useEffect(() => {
  //   fetchMarket();
  //   const intervals = setInterval(fetchMarket, 60000);
  //   return () => clearInterval(intervals);
  // }, []);

  // if (loading) return <p> Crypto Prices </p>;
  return (
    <>
      <div className="h-[100%] flex flex-col gap-4 p-4">
        <div className="flex gap-6 h-[50%] ">
          {/* {Assets Card} */}
          <div className="w-[40%]">
            {Balance.map((item) => (
              <AssetCard key={item.id} data={item} />
            ))}
          </div>

          {/* {Coins Cards} */}
          <div className="grid grid-cols-2 w-[60%] gap-4 ">
            {" "}
            {Coins.map((coin) => (
              <PairsCard
                key={coin.id}
                {...coin}
                image={coinIcons[coin.title]}
              />
            ))}{" "}
          </div>
        </div>

        <div className="flex gap-6 w-full h-[50%] ">
          {/* {Candle stick chart} */}
          <div className="w-[70%] bg-white rounded-md"></div>

          {/* {Market Pairs} */}
          <div className="bg-white w-[29%] rounded-md p-2 ">
            <div className="h-[100%] w-full flex flex-col gap-4 ">
              <div className="flex justify-between text-black h-[10%] w-full">
                <div>
                  <p className="font-semibold">Markets</p>
                </div>

                <div className="flex gap-6 text-sm">
                  <div className="px-2 py-1 rounded-md bg-gray-200 flex items-center ">
                    <p>All</p>
                  </div>
                  <div className="px-2 py-1 rounded-md bg-gray-200 flex items-center ">
                    {" "}
                    <p>Meta</p>
                  </div>

                  <div className="px-2 py-1 rounded-md bg-gray-200 flex items-center ">
                    <p>Gaming</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between h-[90%] w-[100%] ">
                {Pairs.map((pair) => (
                  <MarketCard key={pair.id} market={pair} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
