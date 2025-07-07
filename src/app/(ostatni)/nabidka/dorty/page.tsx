import PageTitle from "@/components/pageTitle";
import TextUnderTitle from "./textUnderTitle";
import { cakes, cakesPriceList } from "../../../../../public/content/cakes";
import Cakes from "../../../../components/products/cakes";
import CakePriceTable from "../../../../components/products/cakePriceTable";
import Gallery from "../../../../components/gallery";
import NotesUnderTable from "./notesUnderTable";

const Page = () => {
  return (
    <>
      <PageTitle title="Dorty" />
      <TextUnderTitle />
      <PageTitle title="Menu" />
      <Cakes cakes={cakes} />
      <div id="cenik-kotva" className="h-full mt-10 pt-16 pb-16 w-full">
        <span className="text-3xl md:text-4xl font-semibold  lg:text-5xl font-oldStandard w-full text-center">
          Ceník
        </span>
      </div>
      <CakePriceTable priceList={cakesPriceList} />
      <NotesUnderTable />
      <div className="w-full lg:my-24 xl:my-32 relative text-center self-center justify-center">
        <img
          src="/dorty.svg"
          className={`absolute hidden lg:h-[350px] xl:h-[500px] lg:block -top-[100px] -z-10`}
          alt="pozadí text pečeme od srdéčka"
        />
      </div>
      <Gallery />
    </>
  );
};
export default Page;
