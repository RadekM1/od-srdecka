import { CakePriceList } from "@/schema/cakes";

interface CakePriceListProps {
  priceList: CakePriceList[];
}

const CakePriceTable = ({ priceList }: CakePriceListProps) => {
  return (
    <div className="max-w-[1000px] text-sm lg:text-base p-4 mb-10 text-white bg-[#061E4C] font-satisfy flex flex-col md:flex-row w-[90%] rounded-xl ">
      {priceList.map((cake, i) => {
        return (
          <div
            key={i}
            className="flex pl-4 text-2xl md:text-2xl lg:text-4xl text-start p-2 w-full flex-col"
          >
            <span className="my-4 text-center">{cake.title}</span>
            <ul className="font-oldStandard text-start pl-3 list-disc text-base">
              {cake.textRows.map((row, j) => {
                return (
                  <li key={j} className="text-sm mb-1 lg:text-base text-nowrap">
                    {row}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
export default CakePriceTable;
