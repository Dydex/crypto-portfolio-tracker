import { AssetsCardProps } from "@/interfaces";
import { ArrowUp, ArrowDown } from "lucide-react";

const AssetCard: React.FC<{ data: AssetsCardProps }> = ({ data }) => {
  return (
    <>
      <div className="bg-white text-black h-[100%] rounded-md pt-2 pl-4 pb-4 flex flex-col gap-4 ">
        <div className="h-[50%] flex flex-col justify-between">
          <div>
            <p className="font-semibold text-xl">Assets</p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-sm">Your total balance</p>
            <div className="flex gap-24">
              <p className="font-semibold text-xl">${data.balance}</p>
              <div
                className={`px-2 py-0.1 rounded-xl flex items-center ${
                  data.percent_change_24h > 0 ? "bg-green-100" : "bg-red-100"
                }  `}
              >
                {data.percent_change_24h > 0 ? (
                  <ArrowUp size={14} color="green" />
                ) : (
                  <ArrowDown size={14} color="red" />
                )}
                <p
                  className={`text-sm font-semibold ${
                    data.percent_change_24h > 0
                      ? "text-green-500 "
                      : "text-red-500 "
                  } `}
                >
                  {data.percent_change_24h}%
                </p>
              </div>
            </div>
            <p className="text-sm font-semibold">${data.amount_change_24h}</p>
          </div>
        </div>
        <div className="h-[30%] "></div>
      </div>
    </>
  );
};
export default AssetCard;
