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
  const imageUrl =
    (article?.prvni_obrazek && article.prvni_obrazek.url) || null;
  return {
    title: article?.seo_nazev || "Od srdéčka - bezlepkové recepty (ostatní)",
    description: `${article?.uvodni_text.slice(0, 150).replace(/<[^>]*>/g, "")}...`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article?.titulek,
      description: `${article?.uvodni_text.slice(0, 150)}...`,
      url,
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt:
                article?.seo_nazev ??
                "Tým Od Srdéčka - Pečeme pro vás dorty a sladké bary",
            },
          ]
        : [],
      siteName: "Od srdéčka",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article?.titulek,
      description: `${article?.uvodni_text.slice(0, 150).replace(/<[^>]*>/g, "")}...`,
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
          <h1 className="text-3xl md:text-4xl mt-16 font-semibold lg:text-5xl font-oldStandard w-full text-center">
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
