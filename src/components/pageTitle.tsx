interface SectionTitleProps {
  title: string;
}

const PageTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="mb-16 mt-16">
      <h1 className="w-full text-center font-oldStandard text-3xl font-semibold md:text-4xl lg:text-5xl">
        {title}
      </h1>
    </div>
  );
};
export default PageTitle;
