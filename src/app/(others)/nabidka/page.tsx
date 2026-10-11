import PageTitle from '../../../components/pageTitle';
import OfferSiteContext from './offerSiteContext';
import Link from 'next/link';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nabídka dortů a sladkých barů | Od Srdéčka',
  description:
    'Prohlédněte si naši kompletní nabídku poctivých dortů, sladkých barů, koláčů a dalších dobrot. Vše pečeme s láskou z kvalitních surovin v Kašavě.',
  alternates: {
    canonical: 'https://www.odsrdecka.cz/nabidka'
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
    url: 'https://www.odsrdecka.cz/nabidka',
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
      <section className="mb-32 flex w-full max-w-6xl flex-col justify-center px-1 text-center text-xl lg:text-2xl">
        <PageTitle title="Naše nabídka" />
        <p className="pt-10 text-center font-oldStandard">
          Pečeme dorty a dezerty k různým příležitostem. Jen si vybrat...
        </p>
        <p className="text-center font-oldStandard">
          Tady najdete naši nabídku dortů a dezertů.
        </p>
        <p className="mt-10 pb-10 text-center font-oldStandard">
          Mrkněte také na fotky v naší{' '}
          <Link
            className="font-semibold underline hover:no-underline"
            href="/galerie"
          >
            galerii!
          </Link>
        </p>
        <OfferSiteContext />
      </section>
    </>
  );
};
export default Page;
