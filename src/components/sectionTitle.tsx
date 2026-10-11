interface SectionTitleProps {
  title: string;
  indexPage: boolean;
}

const SectionTitle = ({ title, indexPage }: SectionTitleProps) => {
  return (
    <div
      className={`my-16 pb-8 ${indexPage ? 'mb-16 mt-16 lg:mt-20' : 'mb-6 mt-12'}`}
    >
      <span className="w-full text-center font-oldStandard text-3xl font-semibold md:text-4xl lg:text-5xl">
        {title}
      </span>
    </div>
  );
};
export default SectionTitle;
