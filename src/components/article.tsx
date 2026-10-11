import { ArticleComponentData } from '@/schema/article';
import parse from 'html-react-parser';
import ArticleGallery from './UI/articleGallery';
import { WpImageSchema } from '@/schema/article';

interface articleProps {
  article: ArticleComponentData;
}

const Article = ({ article }: articleProps) => {
  const removePTags = (html: string) => {
    return html.replace(/^<p>|<\/p>$/g, '');
  };

  return (
    <article className="flex w-full flex-col pb-10 font-dancing text-[#061E4C]">
      <div className="mt-5 flex w-full flex-col gap-7 font-oldStandard md:flex-row">
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
        <div className="flex w-full flex-grow flex-col text-start">
          <section className="text-base text-[#061E4C]">
            {parse(removePTags(article.uvodni_text))}
          </section>
          <h3 className="py-5 text-xl font-semibold lg:text-2xl">
            Ingredience
          </h3>
          <section className="prose list-disc text-base text-[#061E4C]">
            {parse(removePTags(article.ingredience))}
          </section>
          <h3 className="py-5 text-xl font-semibold lg:text-2xl">Postup</h3>
          <section className="prose text-base text-[#061E4C]">
            {parse(removePTags(article.postup))}
          </section>
          <section className="prose py-5 text-base text-[#061E4C]">
            {parse(removePTags(article.zaver))}
          </section>
        </div>
      </div>
    </article>
  );
};
export default Article;
