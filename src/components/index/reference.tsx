import SectionTitle from "../sectionTitle";
import CarouselReference from "../UI/carouselReference";

const reference = [
  { src: "/reference/ref1.png", alt: "referenční print screen" },
  { src: "/reference/ref2.png", alt: "referenční print screen" },
  { src: "/reference/ref3.png", alt: "referenční print screen" },
  { src: "/reference/ref4.png", alt: "referenční print screen" },
  { src: "/reference/ref5.png", alt: "referenční print screen" },
  { src: "/reference/ref7.png", alt: "referenční print screen" },
];

const Reference = () => {
  return (
    <div className="w-full lg:w-[1000px] my-16  flex flex-col self-center items-center">
      <SectionTitle indexPage={true} title="Jak chutná našim zákazníkům?" />
      <CarouselReference props={reference} />
    </div>
  );
};
export default Reference;
