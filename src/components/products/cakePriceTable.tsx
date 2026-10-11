import { CakePriceList } from '@/schema/cakes';

interface CakePriceListProps {
  priceList: CakePriceList[];
}

const CakePriceTable = ({ priceList }: CakePriceListProps) => {
  return (
    <div className="mb-10 flex w-[90%] max-w-[1000px] flex-col rounded-xl bg-[#061E4C] p-4 font-dancing text-sm text-white md:flex-row lg:text-base">
      {priceList.map((cake, i) => {
        return (
          <div
            key={i}
            className="flex w-full flex-col p-2 pl-4 text-start text-2xl md:text-2xl lg:text-4xl"
          >
            <span className="my-4 text-center">{cake.title}</span>
            <ul className="list-disc pl-3 text-start font-oldStandard text-base">
              {cake.textRows.map((row, j) => {
                return (
                  <li key={j} className="mb-1 text-nowrap text-sm lg:text-base">
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
