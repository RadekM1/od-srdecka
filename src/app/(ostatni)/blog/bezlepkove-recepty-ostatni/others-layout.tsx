import BlogArticleList from "@/components/UI/blogArticleList";
import React from "react";
import Gallery from "@/components/gallery";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  articleList: {
    id: number;
    slug: string;
    title: string;
    thumbnailSrc: string;
    thumbnailAlt: string;
  }[];
}

const OthersLayout = ({ children, articleList }: Props) => {
  return (
    <>
      <section className="flex mx-3 max-w-[1000px] px-1 justify-center items-center text-center mb-10 flex-col w-full">
        {children}
        <BlogArticleList
          section="bezlepkove-recepty-ostatni"
          blogList={articleList}
        />
      </section>
      <Gallery />
    </>
  );
};

export default OthersLayout;
