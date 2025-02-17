import BlogArticleList from "@/components/UI/blogArticleList";
import { blogGallery } from "../../../../../public/content/temporary-galleries";
import React from "react";
import Gallery from "@/components/gallery";

const OthersLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <section className="flex mx-3 max-w-[1000px] px-2 justify-center items-center text-center mb-10 flex-col w-full">
        {children}
      </section>
      <Gallery />
    </>
  );
};

export default OthersLayout;
