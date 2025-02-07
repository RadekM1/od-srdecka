import SectionTitle from "./sectionTitle";
import CarouselGallery from "./UI/carouselGallery";

const gallery = [
  {
    src: "galerie/video.mp4",
    alt: "video z galerie numero uno",
    media_type: "video",
    type: "video",
    thumbnail: "galerie/video-1-thumbnail.png",
  },
  {
    src: "galerie/galerie1.png",
    alt: "obrázek z galerie č.1",
    media_type: "image",
  },
  {
    src: "galerie/galerie2.png",
    alt: "obrázek z galerie č.2",
    media_type: "image",
  },
  {
    src: "galerie/galerie3.png",
    alt: "obrázek z galerie č.3",
    media_type: "image",
  },
  {
    src: "galerie/galerie4.png",
    alt: "obrázek z galerie č.4",
    media_type: "image",
  },
  {
    src: "galerie/galerie5.png",
    alt: "obrázek z galerie č.5",
    media_type: "image",
  },
  {
    src: "galerie/galerie6.png",
    alt: "obrázek z galerie č.6",
    media_type: "image",
  },
  {
    src: "galerie/galerie7.png",
    alt: "obrázek z galerie č.7",
    media_type: "image",
  },
  {
    src: "galerie/galerie8.png",
    alt: "obrázek z galerie č.8",
    media_type: "image",
  },
  {
    src: "galerie/galerie9.png",
    alt: "obrázek z galerie č.9",
    media_type: "image",
  },
  {
    src: "galerie/galerie10.png",
    alt: "obrázek z galerie č.10",
    media_type: "image",
  },
  {
    src: "galerie/galerie11.png",
    alt: "obrázek z galerie č.11",
    media_type: "image",
  },
  {
    src: "galerie/galerie12.png",
    alt: "obrázek z galerie č.12",
    media_type: "image",
  },
];

const Gallery = () => {
  return (
    <div className="w-full  mb-6 flex flex-col self-center items-center">
      <SectionTitle title="Prozkoumejte naši galerii" />
      <CarouselGallery props={gallery} />
    </div>
  );
};
export default Gallery;
