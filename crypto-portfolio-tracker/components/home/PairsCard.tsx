import { PairsCardProps } from "@/interfaces";

const PairsCard: React.FC<{ pairs: PairsCardProps }> = ({ pairs }) => {
  return (
    <div className="bg-white rounded-md p-2 flex flex-col text-white dark:text-black">
      <div>
        <p className="text-sm font-semibold">{pairs.title}</p>
        <p className="text-sm">{pairs.name}</p>
      </div>

      <div>
        <p className="text-sm font-semibold"> ${pairs.price} </p>
      </div>

      <div className="flex justify-between text-sm">
        <p className="">PNL Daily</p>
        <p>{pairs.price_change_24h}</p>
        <p>{pairs.percent_change_24h}</p>
      </div>
    </div>
  );
};
export default PairsCard;
