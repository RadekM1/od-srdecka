import { ArticleComponentData } from "@/schema/article";
import parse from "html-react-parser";
import ArticleGallery from "./UI/articleGallery";
import { WpImageSchema } from "@/schema/article";

interface articleProps {
  article: ArticleComponentData;
}

const Article = ({ article }: articleProps) => {
  const removePTags = (html: string) => {
    return html.replace(/^<p>|<\/p>$/g, ""); // Odstraní <p> pouze pokud obaluje celý text
  };

  return (
    <article className="w-full pb-10 text-[#061E4C] flex font-dancing  flex-col">
      <div className="w-full mt-5 font-oldStandard gap-7 flex flex-col md:flex-row">
        <ArticleGallery
          firstImg={
            article.prvni_obrazek || (false as unknown as WpImageSchema)
          }
          secondImg={
            article.druhy_obrazek || (false as unknown as WpImageSchema)
          }
          thirdImg={
            article.treti_obrazek || (false as unknown as WpImageSchema)
          }
        />
        <div className="flex flex-grow w-full text-start  flex-col">
          <section className="text-base  text-[#061E4C] ">
            {parse(removePTags(article.uvodni_text))}
          </section>
          <h3 className="text-xl lg:text-2xl font-semibold py-5">
            Ingredience
          </h3>
          <section className="text-base  text-[#061E4C] prose list-disc ">
            {parse(removePTags(article.ingredience))}
          </section>
          <h3 className="text-xl lg:text-2xl font-semibold py-5">Postup</h3>
          <section className="text-base  text-[#061E4C] prose">
            {parse(removePTags(article.postup))}
          </section>
          <section className="text-base py-5 text-[#061E4C] prose">
            {parse(removePTags(article.zaver))}
          </section>
        </div>
      </div>
    </article>
  );
};
export default Article;
