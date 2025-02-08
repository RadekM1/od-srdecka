interface SectionTitleProps {
  title: string;
  indexPage: boolean;
}

const SectionTitle = ({ title, indexPage }: SectionTitleProps) => {
  return (
    <div className={`my-12 ${indexPage ? "lg:my-20" : "mt-8 mb-6"}`}>
      <span className="text-3xl md:text-4xl font-semibold lg:text-5xl font-oldStandard w-full text-center">
        {title}
      </span>
    </div>
  );
};
export default SectionTitle;
