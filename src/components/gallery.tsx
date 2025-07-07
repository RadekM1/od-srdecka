import SectionTitle from "./sectionTitle";
import CarouselGallery from "./UI/carouselGallery";
import { getGalleries } from "@/lib/fetch/get-galleries";

const gallery = await getGalleries("galerie");

await getGalleries("galerie");

const Gallery = () => {
  return (
    <div className="w-full mt-12 lg:mt-24 mb-6 flex flex-col self-center items-center">
      <SectionTitle indexPage={false} title="Prozkoumejte naši galerii" />
      <CarouselGallery props={gallery} />
    </div>
  );
};
export default Gallery;
