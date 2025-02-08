interface SectionTitleProps {
  title: string;
}

const PageTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="mt-8 mb-6">
      <span className="text-3xl md:text-4xl font-semibold lg:text-5xl font-oldStandard w-full text-center">
        {title}
      </span>
    </div>
  );
};
export default PageTitle;
