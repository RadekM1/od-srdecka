import BlogArticleList from "@/components/UI/blogArticleList";
import { wpFetchBlogArticlesOther } from "@/lib/fetch/articles-others-fetch";
import React from "react";
import Gallery from "@/components/gallery";

export const revalidate = 10;
export const dynamicParams = true;

export async function generateStaticParams() {
  return [];
}

const OthersLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const articleList = await wpFetchBlogArticlesOther();

  return (
    <>
      <section className="flex mx-3 max-w-[1000px] px-1 justify-center items-center text-center mb-10 flex-col w-full">
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
