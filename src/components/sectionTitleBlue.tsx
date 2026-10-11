interface SectionTitleProps {
  title: string;
  isIndex: boolean;
}

const SectionTitleBlue = ({ title, isIndex }: SectionTitleProps) => {
  return (
    <div
      className={` ${isIndex ? 'py-12 lg:py-20' : 'py-10'} w-full bg-[#061E4C]`}
    >
      <span className="w-full text-center font-oldStandard text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
        {title}
      </span>
    </div>
  );
};
export default SectionTitleBlue;
