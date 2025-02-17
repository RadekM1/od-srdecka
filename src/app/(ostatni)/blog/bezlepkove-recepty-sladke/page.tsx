import BlogSections from "../blogSections";

const blogSections = [
  {
    url: "/blog/bezlepkove-recepty-sladke",
    label: "Sladké recepty",
    position: "left-[15%]  md:left-[20%] ",
  },
  {
    url: "/blog/bezlepkove-recepty-ostatni",
    label: "Ostatní recepty",
    position: "right-[15%]  md:right-[20%] ",
  },
];

const Page = () => {
  return (
    <>
      <section className="flex mx-3 max-w-[1000px] px-2 justify-center items-center text-center mb-10 flex-col w-full">
        <div className="mb-6">
          <span className="text-3xl md:text-4xl font-semibold lg:text-5xl font-oldStandard w-full text-center">
            Bezlepkové recepty - sladké
          </span>
        </div>
        <div className="mt-20 mb-14 relative flex w-full justify-center items-center mx-4 max-w-[1000px]">
          <img
            className="absolute top-1/2 -translate-y-1/2 w-full"
            src="/others/line.svg"
            alt="oddělovací linka"
          />
          <BlogSections blogSections={blogSections} />
        </div>
      </section>
    </>
  );
};
export default Page;
