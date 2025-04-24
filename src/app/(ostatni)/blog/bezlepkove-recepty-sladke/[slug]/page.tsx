import Article from "@/components/article";
import Image from "next/image";
import {
  wpFetchBlogArticlesSweets,
  wpFetchBlogArticleSweet,
} from "@/lib/fetch/articles-sweets-fetch";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await wpFetchBlogArticlesSweets();
  return posts.map((post) => {
    return {
      slug: post.slug,
    };
  });
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const id = (await params).slug.split("--")[1] ?? null;

  const article = await wpFetchBlogArticleSweet(id);

  return (
    <>
      <article className="flex mx-3 max-w-[1000px] px-2 justify-center items-center text-center flex-col w-full">
        <header className="mb-2 md:mb-9">
          <h1 className="text-3xl md:text-4xl font-semibold lg:text-5xl font-oldStandard w-full text-center">
            {article === null ? "Článek nenalezen" : `${article.titulek}`}
          </h1>
        </header>
        <div className="flex w-full max-w-[1000px] select-none items-center justify-center">
          <Image
            src={"/heartsLine.svg"}
            alt="oddělovač sekce"
            width={1000}
            height={20}
            className="w-full self-center mt-14 "
          />
        </div>
        <section className="relative flex w-full  justify-center items-center mx-4 max-w-[1000px]">
          {article !== null && <Article article={article} />}
        </section>
      </article>
      <Image
        src={"/heartsLine.svg"}
        alt="oddělovač sekce"
        width={1000}
        height={20}
        className="w-full  self-center py-10 "
      />
    </>
  );
};
export default Page;
