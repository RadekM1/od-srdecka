import PageTitle from '@/components/pageTitle';
import TextUnderTitle from './textUnderTitle';
import ContactRowTwoColumns from '@/components/contactRowTwoColumns';
import TextInRowComponent from './textInRowComponentContact';
import WhereToFindUs from '@/components/index/whereToFindUs';
import SectionTitleBlue from '@/components/sectionTitleBlue';
import SectionTitle from '@/components/sectionTitle';
import ContactForm from '@/components/UI/contactForm';
import Gallery from '@/components/gallery';
import Flowers from '@/components/index/flowers';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt | Od Srdéčka - Dorty a sladké bary z Kašavy',
  description:
    'Máte dotaz, přání, nebo si chcete objednat naše poctivé dorty a sladkosti? Neváhejte nás kontaktovat. Zde najdete telefon, e-mail i adresu v Kašavě.',
  alternates: {
    canonical: 'https://www.odsrdecka.cz/kontakt'
  },
  icons: {
    icon: '/favicon.ico'
  },
  keywords: [
    'kontakt',
    'dorty na objednávku',
    'objednávka dortu',
    'poptávka',
    'adresa',
    'telefon',
    'Kašava',
    'Zlínský kraj',
    'Od Srdéčka'
  ],
  authors: [{ name: 'Radek Morong', url: 'https://www.radekmorong.cz' }],

  openGraph: {
    title: 'Kontaktujte nás | Od Srdéčka',
    description:
      'Máte dotaz nebo si chcete objednat? Ozvěte se nám! Těšíme se na vaše přání.',
    url: 'https://www.odsrdecka.cz/kontakt',
    siteName: 'Od Srdéčka',
    images: [
      {
        url: 'https://odsrdecka.cz/index/team.png',
        width: 1200,
        height: 630,
        alt: 'Kontaktujte tým Od Srdéčka v Kašavě'
      }
    ],
    locale: 'cs_CZ',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontaktujte nás | Od Srdéčka',
    description:
      'Máte dotaz nebo si chcete objednat? Ozvěte se nám! Těšíme se na vaše přání.',
    images: ['https://odsrdecka.cz/index/team.png']
  }
};

const Page = () => {
  return (
    <>
      <PageTitle title="Ozvěte se nám" />
      <TextUnderTitle />
      <ContactRowTwoColumns>
        <TextInRowComponent />
      </ContactRowTwoColumns>
      <div className="mb-12 flex w-full max-w-6xl flex-col justify-start p-5 px-5 text-start sm:px-5 md:mb-32 lg:mb-48">
        <p className="font-oldStandard text-2xl font-semibold">
          Spolupráce s kavárnami
        </p>
        <p className="text-start font-oldStandard text-base lg:text-lg">
          Máte <span className="font-semibold">kavárnu</span> a chtěli byste
          nabízet naše produkty? Rády navážeme spolupráci. Neváhejte nás
          kontaktovat.
        </p>
        <p className="mt-10 font-oldStandard text-2xl font-semibold">
          Aktuality
        </p>
        <ul className="mt-2 list-disc pl-3 text-start font-oldStandard text-base sm:pl-7">
          <li className="mb-1 text-base md:px-3 lg:text-lg">
            Všechny <span className="font-semibold">novinky a aktuality</span>{' '}
            můžete sledovat i na našem{' '}
            <a
              className="font-semibold underline hover:no-underline"
              href="https://www.instagram.com/odsrdecka/"
              target="_blank"
            >
              instagramu
            </a>
            .
          </li>
          <li className="mb-1 text-base md:px-3 lg:text-lg">
            Máme instagramový profil o{' '}
            <a
              href="https://www.instagram.com/odsrdecka_bezlepku/?igsh=MWU5Y3hyc3hydWhiMg%3D%3D#"
              className="font-semibold underline hover:no-underline"
              target="_blank"
            >
              bezlepkovém pečení
            </a>
            .
          </li>
        </ul>
      </div>
      <div className="flex w-full flex-col items-center justify-center bg-[#061E4C] py-4 text-center">
        <Flowers />
        <SectionTitleBlue isIndex={true} title="Kde nás najdete?" />
        <WhereToFindUs />
      </div>
      <div className="flex w-full max-w-6xl flex-col justify-start p-5 px-5 text-start sm:px-5">
        <div className="my-10 w-full pt-14 text-center">
          <SectionTitle indexPage={false} title="Kontaktní formulář" />
        </div>
        <ContactForm />
      </div>
      <Gallery />
    </>
  );
};
export default Page;
