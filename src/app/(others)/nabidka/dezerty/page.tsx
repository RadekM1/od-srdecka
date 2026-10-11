import PageTitle from '@/components/pageTitle';
import Gallery from '@/components/gallery';
import Desserts from '@/components/products/desserts';
import { getDesserts } from '@/lib/fetch/get-desserts';

const desserts = await getDesserts();

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nabídka dortů a sladkých barů | Od Srdéčka',
  description:
    'Prohlédněte si naši kompletní nabídku poctivých dortů, sladkých barů, koláčů a dalších dobrot. Vše pečeme s láskou z kvalitních surovin v Kašavě.',
  alternates: {
    canonical: 'https://www.odsrdecka.cz/nabidka/dezerty'
  },
  icons: {
    icon: '/favicon.ico'
  },
  keywords: [
    'nabídka',
    'sortiment',
    'ceník',
    'dorty',
    'sladký bar',
    'cheesecake',
    'makronky',
    'koláče',
    'svatební dorty',
    'Od Srdéčka'
  ],
  authors: [{ name: 'Radek Morong', url: 'https://www.radekmorong.cz' }],

  openGraph: {
    title: 'Naše nabídka dobrot | Od Srdéčka',
    description:
      'Objevte naši širokou nabídku dortů, sladkých barů a dalších poctivých sladkostí.',
    url: 'https://www.odsrdecka.cz/nabidka/dezerty',
    siteName: 'Od Srdéčka',
    images: [
      {
        url: 'https://odsrdecka.cz/index/team.png',
        width: 1200,
        height: 630,
        alt: 'Nabídka dortů a sladkých barů Od Srdéčka'
      }
    ],
    locale: 'cs_CZ',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Naše nabídka dobrot | Od Srdéčka',
    description:
      'Objevte naši širokou nabídku dortů, sladkých barů a dalších poctivých sladkostí.',
    images: ['https://odsrdecka.cz/index/team.png']
  }
};

const Page = () => {
  return (
    <>
      <PageTitle title="Dezerty" />
      <p className="px-2 text-center font-oldStandard text-xl font-semibold lg:text-2xl">
        Pečeme dezerty a sladké bary pro různé příležitosti - svatby,
        narozeniny, Vánoce nebo jen tak pro radost ke kávě.
      </p>
      <p className="px-2 pb-20 pt-10 text-center font-oldStandard text-xl lg:text-2xl">
        Rády vám osladíme náladu!
      </p>
      <PageTitle title="Nabídka" />
      <Desserts desserts={desserts} />
      <div className="relative w-full justify-center self-center text-center lg:my-24 xl:my-32">
        <img
          src="/dezerty.svg"
          className={`absolute -top-[100px] -z-10 hidden lg:block lg:h-[350px] xl:h-[500px]`}
          alt="pozadí text pečeme od srdéčka"
        />
      </div>
      <Gallery />
    </>
  );
};
export default Page;
