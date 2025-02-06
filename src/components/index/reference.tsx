import SectionTitle from "../sectionTitle";
import CarouselReference from "../UI/carouselReference";

const reference = [
  { src: "reference/reference1.png", alt: "referenční print screen" },
  { src: "reference/reference2.png", alt: "referenční print screen" },
  { src: "reference/reference3.png", alt: "referenční print screen" },
  { src: "reference/reference4.png", alt: "referenční print screen" },
  { src: "reference/reference5.png", alt: "referenční print screen" },
];

const Reference = () => {
  return (
    <div className="max-w-full md:max-w-[660px] lg:max-w-[920px] xl:max-w-[1000px] flex flex-col self-center items-center">
      <SectionTitle title="Jak chutná našim zákazníkům?" />
      <CarouselReference props={reference} />
    </div>
  );
};
export default Reference;
