import Gallery from '../../../components/gallery';
import AboutUsComponentTextAsideImg from './aboutUsPageText';
import AboutUs from '../../../components/aboutUs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O nás | Od Srdéčka - Tři cérky z Valašska',
  description:
    'Jsme tři cérky z Valašska, které s láskou pečou dorty a sladké bary. Přečtěte si náš příběh a poznejte, jak propojujeme tradiční recepty s moderními trendy.',
  alternates: {
    canonical: 'https://www.odsrdecka.cz/o-nas'
  },
  icons: {
    icon: '/favicon.ico'
  },
  keywords: [
    'o nás',
    'náš příběh',
    'tři cérky',
    'pečení z lásky',
    'dorty z Valašska',
    'tradiční recepty',
    'Od Srdéčka',
    'Kašava'
  ],
  authors: [{ name: 'Radek Morong', url: 'https://www.radekmorong.cz' }],

  openGraph: {
    title: 'O nás - Tři cérky z Valašska | Od Srdéčka',
    description:
      'Přečtěte si příběh o tom, jak tři cérky z malé dědiny na Valašsku pečou od srdéčka.',
    url: 'https://www.odsrdecka.cz/o-nas',
    siteName: 'Od Srdéčka',
    images: [
      {
        url: 'https://odsrdecka.cz/index/team.png',
        width: 1200,
        height: 630,
        alt: 'O nás - Tři cérky z Valašska, které pečou od srdéčka'
      }
    ],
    locale: 'cs_CZ',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'O nás - Tři cérky z Valašska | Od Srdéčka',
    description:
      'Přečtěte si příběh o tom, jak tři cérky z malé dědiny na Valašsku pečou od srdéčka.',
    images: ['https://odsrdecka.cz/index/team.png']
  }
};

const Page = () => {
  return (
    <>
      <section className="mb-10 mt-6 flex w-full max-w-6xl flex-col px-3 font-oldStandard text-xl lg:text-2xl">
        <AboutUs
          title="Tři cérky z Valašska"
          textImg="/pozadi-text/our-story-new.svg"
          indexPage={false}
        >
          <AboutUsComponentTextAsideImg isIndex={false} />
        </AboutUs>
        <p className="mt-10 text-start">
          <span>&bull;</span> Naše dorty a zákusky můžete ochutnat i v{' '}
          <span className="font-semibold">kavárnách,</span> se kterými
          spolupracujeme.
        </p>
        <p className="mt-2 pb-10 text-start">
          <span>&bull;</span> Všechny{' '}
          <span className="font-semibold">novinky a aktuality</span> můžete
          sledovat na našem{' '}
          <a
            href="https://www.instagram.com/odsrdecka/"
            className="font-semibold underline hover:no-underline"
            target="_blank"
          >
            instagramu
          </a>
          .
        </p>
      </section>
      <Gallery />
    </>
  );
};
export default Page;
