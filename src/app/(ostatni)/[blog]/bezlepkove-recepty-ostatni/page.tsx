import BlogSections from "../blogSections";
import OthersLayout from "./others-layout";
import { wpFetchBlogArticlesOther } from "@/lib/fetch/articles-others-fetch";

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

export const revalidate = 10;
export const dynamicParams = true;

export async function generateStaticParams() {
  return [{ blog: "bezlepkove-recepty-ostatni" }];
}

export default async function Page() {
  const articleList = await wpFetchBlogArticlesOther();

  return (
    <OthersLayout articleList={articleList}>
      <section className="flex mx-3 max-w-[1000px] px-2 justify-center items-center text-center mb-10 flex-col w-full">
        <div className="mb-6">
          <span className="text-3xl md:text-4xl font-semibold lg:text-5xl font-oldStandard w-full text-center">
            Bezlepkové recepty - ostatní
          </span>
        </div>
        <div className="mt-20 mb-14 relative flex w-full  justify-center items-center mx-4 max-w-[1000px]">
          <img
            className="absolute top-1/2  -translate-y-1/2 w-full"
            src="/others/line.svg"
            alt="oddělovací linka"
          />
          <BlogSections blogSections={blogSections} />
        </div>
      </section>
    </OthersLayout>
  );
}
