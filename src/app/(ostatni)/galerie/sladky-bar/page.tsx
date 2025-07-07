import Reference from "@/components/index/reference";
import PageTitle from "@/components/pageTitle";
import ProductGallery from "@/components/UI/productGallery";
import { getGalleries } from "@/lib/fetch/get-galleries";

const dessertsGallery = await getGalleries("galerie-dezerty");

const Page = () => {
  return (
    <>
      <section className="flex max-w-[1000px] px-1 items-center  justify-center text-center mb-10 flex-col w-full">
        <PageTitle title="Galerie sladkého bartu" />
        <ProductGallery productType="dessert" gallery={dessertsGallery} />
        <Reference />
      </section>
    </>
  );
};
export default Page;
