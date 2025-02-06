interface SectionTitleProps {
  title: string;
}

const SectionTitleBlue = ({ title }: SectionTitleProps) => {
  return (
    <div className="py-12 w-full bg-[#061E4C] lg:py-20">
      <span className="text-3xl text-white   md:text-4xl font-semibold lg:text-5xl font-oldStandard w-full text-center">
        {title}
      </span>
    </div>
  );
};
export default SectionTitleBlue;
