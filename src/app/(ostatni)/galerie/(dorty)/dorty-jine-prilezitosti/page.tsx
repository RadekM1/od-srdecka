import ProductGallery from "@/components/UI/productGallery";
import { getGalleries } from "@/lib/fetch/get-galleries";

const cakesGallery = await getGalleries("galerie-dorty-ostatni");

const Page = () => {
  return (
    <>
      <ProductGallery productType="cake" gallery={cakesGallery} />
    </>
  );
};
export default Page;
