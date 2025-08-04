import BlogSections from "../blogSections";
import SweetLayout from "./sweet-layout";
import { wpFetchBlogArticlesSweets } from "@/lib/fetch/articles-sweets-fetch";

const blogSections = [
  {
    url: "/blog/bezlepkove-recepty-sladke",
    label: "Sladké recepty",
    position: "left-[15%]  md:left-[20%]",
  },
  {
    url: "/blog/bezlepkove-recepty-ostatni",
    label: "Ostatní recepty",
    position: "right-[15%]  md:right-[20%]",
  },
];

export const revalidate = 10;
export const dynamicParams = true;

export async function generateStaticParams() {
  return [{ blog: "bezlepkove-recepty-sladke" }];
}

export default async function Page() {
  const articleList = await wpFetchBlogArticlesSweets();

  return (
    <SweetLayout articleList={articleList}>
      <section className="flex mx-3 max-w-[1000px] px-2 justify-center items-center text-center mb-10 flex-col w-full">
        <div className="mb-6 mt-16">
          <h2 className="text-3xl md:text-4xl font-semibold lg:text-5xl font-oldStandard w-full text-center">
            Bezlepkové recepty
          </h2>
          <div className="w-full p-5 md:mt-10 flex flex-col lg:w-[1000px]">
            <span className="text-start md:text-center text-xl lg:text-2xl font-oldStandard px-2 ">
              Tento bezlepkový blog vznikl původně jako{" "}
              <a
                href="https://www.instagram.com/odsrdecka_bezlepku/"
                className="font-semibold hover:no-underline underline"
                target="_blank"
              >
                instagramový profil
              </a>
              , na kterém sdílíme bezlepkové tipy a recepty, protože jedné z nás
              byla diagnostikovaná celiakie. “Bezlepkářů” máme v okolí spoustu,
              a tak jsme se rozhodly vytvořit si tady srdéčkovou bezlepkovou
              komunitu a sdílet nejenom sladké dobroty pro lepší den.
              Vyzkoušejte a dejte vědět, jak chutná! :)
            </span>
          </div>
        </div>
        <div className="mt-20 mb-14 relative flex w-full justify-center items-center mx-4 max-w-[1000px]">
          <img
            className="absolute top-1/2 -translate-y-1/2 w-full"
            src="/others/line.svg"
            alt="oddělovací linka"
          />
          <BlogSections blogSections={blogSections} />
        </div>
      </section>
    </SweetLayout>
  );
}
