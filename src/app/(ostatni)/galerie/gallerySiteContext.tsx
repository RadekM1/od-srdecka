import MiniGallery from "@/components/UI/miniGallery";

const offerProps = [
  {
    src: "/gallery-site/dort-galerie.png",
    title: "Dorty",
    alt: "obrázek dortu",
    link: "/galerie/dorty-svatebni",
    sectionTitle: "Dorty",
    miniGallery: [
      {
        src: "/gallery-site/dort-1.png",
        alt: "první fotka dortu v minigalerii",
        media_type: "image",
      },
      {
        src: "/gallery-site/dort-2.png",
        alt: "druhá fotka dortu v minigalerii",
        media_type: "image",
      },
      {
        src: "/gallery-site/dort-3.png",
        alt: "třetí fotka dortu v minigalerii",
        media_type: "image",
      },
    ],
  },
  {
    src: "/gallery-site/sladky-bar-galerie.png",
    title: "Sladký bar",
    alt: "obrázek sladkého baru",
    link: "/galerie/sladky-bar",
    sectionTitle: "Sladký bar",
    miniGallery: [
      {
        src: "/gallery-site/sladky-bar-1.png",
        alt: "první fotka sladkého baru v minigalerii",
        media_type: "image",
      },
      {
        src: "/gallery-site/sladky-bar-2.png",
        alt: "druhá fotka sladkého baru v minigalerii",
        media_type: "image",
      },
      {
        src: "/gallery-site/sladky-bar-3.png",
        alt: "třetí fotka sladkého baru v minigalerii",
        media_type: "image",
      },
    ],
  },
];

const GallerySiteContext = () => {
  return (
    <div className="flex flex-col mt-5 px-2  text-xl w-full text-center justify-center self-center items-center md:flex-row">
      <div className="w-full flex-grow gap-2 justify-center flex-row flex">
        {offerProps.map((item, i) => {
          return <MiniGallery key={i} item={item} index={i} />;
        })}
      </div>
    </div>
  );
};
export default GallerySiteContext;
