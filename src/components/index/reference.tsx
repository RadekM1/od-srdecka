import SectionTitle from '../sectionTitle';
import CarouselReference from '../UI/carouselReference';

const reference = [
  { src: '/reference/ref1.png', alt: 'referenční print screen' },
  { src: '/reference/ref2.png', alt: 'referenční print screen' },
  { src: '/reference/ref3.png', alt: 'referenční print screen' },
  { src: '/reference/ref4.png', alt: 'referenční print screen' },
  { src: '/reference/ref5.png', alt: 'referenční print screen' },
  { src: '/reference/ref7.png', alt: 'referenční print screen' }
];

const Reference = () => {
  return (
    <div className="my-16 flex w-full flex-col items-center self-center lg:w-[1000px]">
      <SectionTitle indexPage={true} title="Jak chutná našim zákazníkům?" />
      <CarouselReference props={reference} />
    </div>
  );
};
export default Reference;
