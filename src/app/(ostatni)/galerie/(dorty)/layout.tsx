import React from "react";
import Reference from "@/components/index/reference";
import PageTitle from "@/components/pageTitle";
import CakeSections from "./cakeSections";

const gallerySections = [
  {
    url: "/galerie/dorty-svatebni",
    label: "Svatební",
    position: "left-[5%] sm:left-[15%] ",
  },
  {
    url: "/galerie/dorty-narozeninove",
    label: "Narozeninový",
    position: "left-1/2 -translate-x-1/2",
  },
  {
    url: "/galerie/dorty-jine-prilezitosti",
    label: "Jiné příležitosti",
    position: "right-[5%] sm:right-[15%] ",
  },
];

const OthersLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <section className="flex  px-1 max-w-[1000px]  justify-center items-center text-center mb-10 flex-col w-full">
      <PageTitle title="Galerie dortů" />
      <div className="mt-20 mb-14 relative flex w-full  justify-center items-center mx-4 max-w-[1000px]">
        <img
          className="absolute px-5 top-1/2  -translate-y-1/2 w-full"
          src="/others/line.svg"
          alt="oddělovací linka"
        />
        <CakeSections cakeSections={gallerySections} />
      </div>
      {children}
      <Reference />
    </section>
  );
};

export default OthersLayout;
