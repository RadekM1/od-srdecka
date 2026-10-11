import SectionTitle from './sectionTitle';
import CarouselGallery from './UI/carouselGallery';
import { getGalleries } from '@/lib/fetch/get-galleries';

const gallery = await getGalleries('galerie');

await getGalleries('galerie');

const Gallery = () => {
  return (
    <div className="mb-6 mt-12 flex w-full flex-col items-center self-center lg:mt-24">
      <SectionTitle indexPage={false} title="Prozkoumejte naši galerii" />
      <CarouselGallery props={gallery} />
    </div>
  );
};
export default Gallery;
