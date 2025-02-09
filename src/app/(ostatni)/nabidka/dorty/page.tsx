import PageTitle from "@/components/pageTitle";
import TextUnderTitle from "./textUnderTitle";
import IndexSectionLine from "@/components/indexSectionLine";
import { cakes, cakesPriceList } from "../../../../../public/content/cakes";
import Cakes from "@/components/products/cakes";
import CakePriceTable from "@/components/products/cakePriceTable";
import Gallery from "@/components/gallery";
import NotesUnderTable from "./notesUnderTable";

const Page = () => {
  return (
    <>
      <PageTitle title="Dorty" />
      <TextUnderTitle />
      <PageTitle title="Menu" />
      <Cakes cakes={cakes} />
      <IndexSectionLine sectionAnchor={true} />
      <div id="cenik-kotva" className="h-full pt-16 pb-6 w-full">
        <span className="text-3xl md:text-4xl font-semibold  lg:text-5xl font-oldStandard w-full text-center">
          Ceník
        </span>
      </div>
      <CakePriceTable priceList={cakesPriceList} />
      <NotesUnderTable />
      <div className="h-16">&nbsp;</div>
      <Gallery />
    </>
  );
};
export default Page;
