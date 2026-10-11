import MiniGallery from '@/components/UI/miniGallery';

const offerProps = [
  {
    src: '/gallery-main-page/gallery-cakes.png',
    title: 'Dorty',
    alt: 'obrázek dortu',
    link: '/galerie/dorty-svatebni',
    sectionTitle: 'Dorty',
    miniGallery: [
      {
        src: '/gallery-site/dort-1.png',
        alt: 'první fotka dortu v minigalerii',
        media_type: 'image'
      },
      {
        src: '/gallery-site/dort-2.png',
        alt: 'druhá fotka dortu v minigalerii',
        media_type: 'image'
      },
      {
        src: '/gallery-site/dort-3.png',
        alt: 'třetí fotka dortu v minigalerii',
        media_type: 'image'
      }
    ]
  },
  {
    src: '/gallery-main-page/gallery-deserts.png',
    title: 'Sladký bar',
    alt: 'obrázek sladkého baru',
    link: '/galerie/sladky-bar',
    sectionTitle: 'Sladký bar',
    miniGallery: [
      {
        src: '/gallery-site/sladky-bar-1.png',
        alt: 'první fotka sladkého baru v minigalerii',
        media_type: 'image'
      },
      {
        src: '/gallery-site/sladky-bar-2.png',
        alt: 'druhá fotka sladkého baru v minigalerii',
        media_type: 'image'
      },
      {
        src: '/gallery-site/sladky-bar-3.png',
        alt: 'třetí fotka sladkého baru v minigalerii',
        media_type: 'image'
      }
    ]
  }
];

const GallerySiteContext = () => {
  return (
    <div className="mt-5 flex w-full flex-col items-center justify-center self-center px-2 text-center text-xl md:flex-row">
      <div className="flex w-full flex-grow flex-row justify-center gap-2">
        {offerProps.map((item, i) => {
          return <MiniGallery key={i} item={item} index={i} />;
        })}
      </div>
    </div>
  );
};
export default GallerySiteContext;
