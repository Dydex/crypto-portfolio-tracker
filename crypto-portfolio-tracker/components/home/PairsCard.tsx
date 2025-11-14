import { PairsCardFullProps } from "@/interfaces";
import Image from "next/image";

const PairsCard: React.FC<PairsCardFullProps> = ({ image, ...pairs }) => {
  return (
    <div className="flex-1 bg-white h-[100%] rounded-md p-2 flex flex-col text-white dark:text-black justify-between">
      <div className="flex items-center gap-2">
        <div>
          <Image src={image} alt={pairs.title} width={32} height={32} />
        </div>
        <div>
          <p className="text-sm font-semibold">{pairs.title}</p>
          <p className="text-sm text-gray-500">{pairs.name}</p>
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold">
          ${new Intl.NumberFormat().format(pairs.price)}{" "}
        </p>
      </div>

      <div className="flex justify-between text-sm">
        <p className="text-gray-500">PNL Daily</p>
        <p
          className={`font-semibold ${
            pairs.price_change_24h > 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          ${pairs.price_change_24h.toFixed(2)}
        </p>
        <div
          className={`px-2 py-0.1 rounded-xl ${
            pairs.percent_change_24h > 0 ? "bg-green-100" : "bg-red-100"
          }`}
        >
          {" "}
          <p
            className={`font-semibold ${
              pairs.price_change_24h > 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {pairs.percent_change_24h}%
          </p>
        </div>
      </div>
    </div>
  );
};
export default PairsCard;
