interface SectionTitleProps {
  title: string;
  isIndex: boolean;
}

const SectionTitleBlue = ({ title, isIndex }: SectionTitleProps) => {
  return (
    <div
      className={` ${isIndex ? "lg:py-20 py-12" : "py-10"}  w-full bg-[#061E4C]`}
    >
      <span className="text-3xl text-white   md:text-4xl font-semibold lg:text-5xl font-oldStandard w-full text-center">
        {title}
      </span>
    </div>
  );
};
export default SectionTitleBlue;
