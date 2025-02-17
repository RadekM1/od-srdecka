import BlogArticleList from "@/components/UI/blogArticleList";
import { wpFetchBlogArticlesSweets } from "@/lib/query/articles-sweets-fetch";
import React from "react";
import Gallery from "@/components/gallery";

const OthersLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const articleList = await wpFetchBlogArticlesSweets();

  return (
    <>
      <section className="flex mx-3 max-w-[1000px] px-2 justify-center items-center text-center mb-10 flex-col w-full">
        {children}
        <BlogArticleList
          section="bezlepkove-recepty-sladke"
          blogList={articleList}
        />
      </section>
      <Gallery />
    </>
  );
};

export default OthersLayout;
