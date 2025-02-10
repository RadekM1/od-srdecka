import React from "react";
import Reference from "@/components/index/reference";
import PageTitle from "@/components/pageTitle";
import CakeSections from "./cakeSections";

const gallerySections = [
  {url: '/galerie/dorty-svatebni', label: 'Svatební', position: 'left-[5%] sm:left-[15%] '},
  {url: '/galerie/dorty-narozeninove', label: 'Narozeninový', position: 'left-1/2 -translate-x-1/2'},
  {url: '/galerie/dorty-jine-prilezitosti', label: 'Jiné příležitosti', position: 'right-[5%] sm:right-[15%] '},
]

const OthersLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <section className="flex max-w-6xl px-1 justify-center items-center text-center mb-10 flex-col w-full">
      <PageTitle title="Galerie dortů" />
      <div className="mt-20 mb-14 relative self-center w-max-[1000px] mx-4 w-full">
        <img className="absolute top-1" src="/others/line.svg"  alt="oddělovací linka" />
        <CakeSections cakeSections={gallerySections} />
      </div>
      {children}
      <Reference />
    </section>
  );
};

export default OthersLayout;
