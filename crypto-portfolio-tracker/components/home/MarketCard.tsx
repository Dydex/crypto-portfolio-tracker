import { MarketCardProps } from "@/interfaces";

const MarketCard: React.FC<{ market: MarketCardProps }> = ({ market }) => {
  return (
    <div>
      <div className="flex justify-between text-sm">
        <div className="w-[20%] ">
          <p className="text-sm text-black font-semibold">{market.title}</p>
        </div>
        <div className="w-[25%]">
          <p className="text-sm text-gray-500 font-medium"> {market.name} </p>
        </div>
        <div className="w-[25%]">
          <p className="text-sm text-black font-medium">
            ${new Intl.NumberFormat().format(market.price)}{" "}
          </p>
        </div>
        <div
          className={`px-2 py-0.1 rounded-xl ${
            market.percentChange24h > 0 ? "bg-green-100" : "bg-red-100"
          }`}
        >
          <p
            className={`w-[25%] text-sm font-semibold ${
              market.percentChange24h > 0 ? "text-green-500 " : "text-red-500 "
            } `}
          >
            {" "}
            {market.percentChange24h}%{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default MarketCard;
