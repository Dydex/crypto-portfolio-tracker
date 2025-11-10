import { AssetsCardProps } from "@/interfaces";

const AssetCard: React.FC<{ data: AssetsCardProps }> = ({ data }) => {
  return (
    <>
      <div className="bg-white text-black h-[100%] rounded-md pt-4 pl-4 pb-4 flex flex-col gap-4 ">
        <div>
          <p className="font-semibold text-xl">Assets</p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-sm">Your total balance</p>
          <div className="flex gap-24">
            <p className="font-semibold text-xl">${data.balance}</p>
            <p>{data.percent_change_24h}</p>
          </div>
          <p className="text-sm">{data.amount_change_24h}</p>
        </div>
      </div>
    </>
  );
};
export default AssetCard;
