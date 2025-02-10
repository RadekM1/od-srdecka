import Reference from "@/components/index/reference";
import PageTitle from "@/components/pageTitle";
import { dessertsGallery } from "../../../../../public/content/temporary-galleries";
import ProductGallery from "@/components/UI/productGallery";
import SectionLine from "@/components/sectionLine";

const Page = () => {
  return (
    <>
      <section className="flex max-w-6xl px-1 items-center justify-center text-center mb-10 flex-col w-full">
        <PageTitle title="Galerie dortů" />
        <span className="text-center font-oldStandard ">
          Text k doplnění
        </span>
        <SectionLine />
        <ProductGallery productType="dessert" gallery={dessertsGallery} />
        <Reference />
      </section>
    </>
  );
};
export default Page;
