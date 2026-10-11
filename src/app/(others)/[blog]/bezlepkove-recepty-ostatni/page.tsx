import BlogSections from '../blogSections';
import OthersLayout from './others-layout';
import { wpFetchBlogArticlesOther } from '@/lib/fetch/articles-others-fetch';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dorty a sladké bary z Kašavy - bezlepkové recepty ostatní',
  description:
    'Objevte osvědčené bezlepkové recepty. Pečeme s láskou v Kašavě ve Zlínském kraji. Inspirujte se a pečte s námi.',
  icons: {
    icon: '/favicon.ico'
  },
  keywords: ['dorty', 'sladké bary', 'dorty zlínský kraj'],
  authors: [{ name: 'Radek Morong', url: 'https://www.radekmorong.cz' }],
  alternates: {
    canonical: 'https://www.odsrdecka.cz/bezlepkove-recepty-ostatni'
  }
};

const blogSections = [
  {
    url: '/blog/bezlepkove-recepty-sladke',
    label: 'Sladké recepty',
    position: 'left-[15%]  md:left-[20%] '
  },
  {
    url: '/blog/bezlepkove-recepty-ostatni',
    label: 'Ostatní recepty',
    position: 'right-[15%]  md:right-[20%] '
  }
];

export const revalidate = 10;
export const dynamicParams = true;

export async function generateStaticParams() {
  return [{ blog: 'bezlepkove-recepty-ostatni' }];
}

export default async function Page() {
  const articleList = await wpFetchBlogArticlesOther();

  return (
    <OthersLayout articleList={articleList}>
      <section className="mx-3 mb-10 flex w-full max-w-[1000px] flex-col items-center justify-center px-2 text-center">
        <div className="mb-6 mt-16">
          <h2 className="w-full text-center font-oldStandard text-3xl font-semibold md:text-4xl lg:text-5xl">
            Bezlepkové recepty
          </h2>
          <div className="flex w-full flex-col p-5 md:m-10 md:w-[1000px]">
            <span className="px-2 text-start font-oldStandard text-xl md:text-center lg:text-2xl">
              Tento bezlepkový blog vznikl původně jako{' '}
              <a
                href="https://www.instagram.com/odsrdecka_bezlepku/"
                className="font-semibold underline hover:no-underline"
                target="_blank"
              >
                instagramový profil
              </a>
              , na kterém sdílíme bezlepkové tipy a recepty, protože jedné z nás
              byla diagnostikovaná celiakie. “Bezlepkářů” máme v okolí spoustu,
              a tak jsme se rozhodly vytvořit si tady srdéčkovou bezlepkovou
              komunitu a sdílet nejen sladké dobroty pro lepší den. Vyzkoušejte
              a dejte vědět, jak chutná! :)
            </span>
          </div>
        </div>
        <div className="relative mx-4 mb-14 mt-20 flex w-full max-w-[1000px] items-center justify-center">
          <img
            className="absolute top-1/2 w-full -translate-y-1/2"
            src="/others/line.svg"
            alt="oddělovací linka"
          />
          <BlogSections blogSections={blogSections} />
        </div>
      </section>
    </OthersLayout>
  );
}
