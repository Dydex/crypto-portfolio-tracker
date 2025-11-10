import { MarketCardProps } from "@/interfaces";

const MarketCard: React.FC<{ market: MarketCardProps }> = ({ market }) => {
  return (
    <div>
      <div className="flex justify-between text-sm">
        <div className="w-[25%] ">
          <p className="text-sm text-black font-semibold">{market.title}</p>
        </div>
        <div className="w-[25%]">
          <p className="text-sm text-black font-medium"> {market.name} </p>
        </div>
        <div className="w-[25%]">
          <p className="text-sm text-black font-medium"> {market.price} </p>
        </div>
        <div>
          <p className="w-[25%] text-sm text-black font-medium">
            {" "}
            {market.percent_change_24h}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default MarketCard;
