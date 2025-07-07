import Article from "@/components/article";
import Image from "next/image";
import {
  wpFetchBlogArticlesOther,
  wpFetchBlogArticleOther,
} from "@/lib/fetch/articles-others-fetch";
import { Metadata } from "next";
import OthersLayout from "../others-layout";

export const revalidate = 10;
export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await wpFetchBlogArticlesOther();
  return posts.map((post) => {
    return {
      slug: post.slug,
    };
  });
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const id = slug.split("--")[1] ?? null;
  const article = await wpFetchBlogArticleOther(id);
  const url = `https://www.odsrdecka.cz/blog/bezlepkove-recepty-ostatni/${slug}`;
  const imageUrl = article?.uvodni_obrazek;
  return {
    title: article?.seo_nazev || "Od srdéčka - bezlepkové recepty (ostatní)",
    description:
      article?.meta_popis || `${article?.uvodni_text.slice(0, 150)}...`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article?.titulek,
      description: `${article?.uvodni_text.slice(0, 150)}...`,
      url,
      images: imageUrl ? [imageUrl] : [],
      siteName: "Od srdéčka",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article?.titulek,
      description: `${article?.uvodni_text.slice(0, 150)}...`,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const id = (await params).slug.split("--")[1] ?? null;

  const article = await wpFetchBlogArticleOther(id);
  const articleList = await wpFetchBlogArticlesOther();

  return (
    <OthersLayout articleList={articleList}>
      <article className="flex mx-3 max-w-[1000px] px-2 justify-center items-center text-center flex-col w-full">
        <header className="mb-2 md:mb-9">
          <h1 className="text-3xl md:text-4xl font-semibold lg:text-5xl font-oldStandard w-full text-center">
            {article === null ? "Článek nenalezen" : `${article.titulek}`}
          </h1>
        </header>
        <section className="relative flex w-full  justify-center items-center mx-4 max-w-[1000px]">
          {article !== null && <Article article={article} />}
        </section>
      </article>
      <Image
        src={"/line.svg"}
        alt="oddělovač sekce"
        width={1000}
        height={20}
        className="w-full  self-center py-10 "
      />
    </OthersLayout>
  );
};
export default Page;
