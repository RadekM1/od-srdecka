import HearthSnake from "@/components/index/hearthSnake";
import React from "react";

const OthersLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="text-center font-abhaya text-xl lg:text-2xl overflow-hidden  justify-center items-center w-full flex  flex-col">
      <HearthSnake />
      {children}
      <HearthSnake />
    </main>
  );
};

export default OthersLayout;
