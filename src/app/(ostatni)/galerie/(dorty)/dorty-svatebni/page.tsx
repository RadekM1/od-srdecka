import { cakesGallery } from "../../../../../../public/content/temporary-galleries";
import ProductGallery from "@/components/UI/productGallery";


const Page = () => {



  return (
    <>
      <ProductGallery productType="cake" gallery={cakesGallery} />
    </>
  );
};
export default Page;
