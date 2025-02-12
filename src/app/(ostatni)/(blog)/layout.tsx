import React from "react";
import Reference from "@/components/index/reference";
import PageTitle from "@/components/pageTitle";
import BlogSections from "./blogSections";

const blogSections = [
  {
    url: "/blog-bezlepove-recepty-sladke",
    label: "Sladké recepty",
    position: "left-[15%]  md:left-[20%] ",
  },
  {
    url: "/blog-bezlepove-recepty-ostatni",
    label: "Ostatní recepty",
    position: "right-[15%]  md:right-[20%] ",
  },
];

const OthersLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <section className="flex mx-3 max-w-[1000px] px-2 justify-center items-center text-center mb-10 flex-col w-full">
      <PageTitle title="Bezlepkové recepty" />
      <div className="mt-20 mb-14 relative flex w-full  justify-center items-center mx-4 max-w-[1000px]">
        <img
          className="absolute top-1/2  -translate-y-1/2 w-full"
          src="/others/line.svg"
          alt="oddělovací linka"
        />
        <BlogSections blogSections={blogSections} />
      </div>
      {children}
      <Reference />
    </section>
  );
};

export default OthersLayout;
