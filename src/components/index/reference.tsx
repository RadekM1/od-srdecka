import SectionTitle from "../sectionTitle";
import CarouselReference from "../UI/carouselReference";

const reference = [
  { src: "/reference/reference1.png", alt: "referenční print screen" },
  { src: "/reference/reference2.png", alt: "referenční print screen" },
  { src: "/reference/reference3.png", alt: "referenční print screen" },
  { src: "/reference/reference4.png", alt: "referenční print screen" },
  { src: "/reference/reference5.png", alt: "referenční print screen" },
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
