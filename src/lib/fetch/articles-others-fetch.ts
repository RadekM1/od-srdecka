"use server";

import { wpAcfArticlesFetch, WpAcfFetchOnlyArticle } from "@/schema/article";
import { wpArticleSchema } from "@/schema/article";
import { ArticlesListSchema } from "@/schema/article";
import slugify from "slugify";

export const wpFetchBlogArticlesOther = async () => {
  try {
    const response = await fetch(
      `https://www.odsrdecka.cz/cms/wp-json/acf/v3/clanky-ostatni`,
      { next: { revalidate: 10 } },
    );

    if (!response.ok) {
      throw new Error("chyba při fetch");
    }
    const data = await response.json();
    const parseTest = await wpAcfArticlesFetch.safeParseAsync(data);
    if (!parseTest.success) {
      console.log(
        `Chyba při parsování obsahu z API: ${JSON.stringify(parseTest.error, null, 2)}`,
      );
      throw new Error("chyba při parsování obsahu z api");
    }
    const articleList: ArticlesListSchema[] = parseTest.data.map((article) => {
      const slug = slugify(article.acf.titulek, {
        lower: true,
        strict: true,
        locale: "cs",
      });
      return {
        id: article.id,
        title: article.acf.titulek ?? "žádný titulek",
        thumbnailSrc:
          article.acf.uvodni_obrazek && article.acf.uvodni_obrazek.url
            ? article.acf.uvodni_obrazek.url
            : "",
        thumbnailAlt:
          article.acf.uvodni_obrazek && article.acf.uvodni_obrazek.alt
            ? article.acf.uvodni_obrazek.alt
            : "neuvedeno",
        slug: `${slug}--${article.id}`,
      };
    });
    return articleList;
  } catch (error) {
    console.log("chyba zpracování požadavku", error);
    return [];
  }
};

export const wpFetchBlogArticleOther = async (id: string) => {
  try {
    const response = await fetch(
      `https://www.odsrdecka.cz/cms/wp-json/acf/v3/clanky-ostatni/${id}`,
      { next: { revalidate: 10 } },
    );
    if (!response.ok) {
      console.log("chyba při fetch", response);
      return null;
    }
    const data: WpAcfFetchOnlyArticle = await response.json();
    const parseTest = await wpArticleSchema.safeParseAsync(data.acf);
    if (!parseTest.success) {
      console.log(
        `Chyba při parsování obsahu z API: ${JSON.stringify(parseTest.error, null, 2)}`,
      );
      return null;
    }
    return data.acf;
  } catch (error) {
    console.log("chyba zpracování požadavku", error);
    return null;
  }
};
