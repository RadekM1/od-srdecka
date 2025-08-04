import PageTitle from "@/components/pageTitle";
import TextUnderTitle from "./textUnderTitle";
import ContactRowTwoColumns from "@/components/contactRowTwoColumns";
import TextInRowComponent from "./textInRowComponentContact";
import WhereToFindUs from "@/components/index/whereToFindUs";
import SectionTitleBlue from "@/components/sectionTitleBlue";
import SectionTitle from "@/components/sectionTitle";
import ContactForm from "@/components/UI/contactForm";
import Gallery from "@/components/gallery";
import Flowers from "@/components/index/flowers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Od Srdéčka - Dorty a sladké bary z Kašavy",
  description:
    "Máte dotaz, přání, nebo si chcete objednat naše poctivé dorty a sladkosti? Neváhejte nás kontaktovat. Zde najdete telefon, e-mail i adresu v Kašavě.",
  alternates: {
    canonical: "https://www.odsrdecka.cz/kontakt",
  },
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "kontakt",
    "dorty na objednávku",
    "objednávka dortu",
    "poptávka",
    "adresa",
    "telefon",
    "Kašava",
    "Zlínský kraj",
    "Od Srdéčka",
  ],
  authors: [{ name: "Radek Morong", url: "https://www.radekmorong.cz" }],

  openGraph: {
    title: "Kontaktujte nás | Od Srdéčka",
    description:
      "Máte dotaz nebo si chcete objednat? Ozvěte se nám! Těšíme se na vaše přání.",
    url: "https://www.odsrdecka.cz/kontakt",
    siteName: "Od Srdéčka",
    images: [
      {
        url: "https://odsrdecka.cz/index/team.png",
        width: 1200,
        height: 630,
        alt: "Kontaktujte tým Od Srdéčka v Kašavě",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontaktujte nás | Od Srdéčka",
    description:
      "Máte dotaz nebo si chcete objednat? Ozvěte se nám! Těšíme se na vaše přání.",
    images: ["https://odsrdecka.cz/index/team.png"],
  },
};

const Page = () => {
  return (
    <>
      <PageTitle title="Ozvěte se nám" />
      <TextUnderTitle />
      <ContactRowTwoColumns>
        <TextInRowComponent />
      </ContactRowTwoColumns>
      <div className="w-full max-w-6xl p-5 mb-12 md:mb-32 lg:mb-48  px-5 sm:px-5 flex flex-col text-start justify-start">
        <p className="font-oldStandard text-2xl font-semibold">
          Spolupráce s kavárnami
        </p>
        <p className="text-base lg:text-lg text-start font-oldStandard">
          Máte <span className="font-semibold">kavárnu</span> a chtěli byste
          nabízet naše produkty? Rády navážeme spolupráci. Neváhejte nás
          kontaktovat.
        </p>
        <p className="font-oldStandard mt-10 text-2xl font-semibold">
          Aktuality
        </p>
        <ul className="font-oldStandard mt-2 text-start pl-3 sm:pl-7 list-disc text-base">
          <li className="text-base md:px-3 mb-1 lg:text-lg text-nowrap">
            Všechny <span className="font-semibold">novinky a aktuality</span>{" "}
            můžete sledovat i na našem{" "}
            <a
              className="font-semibold underline hover:no-underline"
              href="https://www.instagram.com/odsrdecka/"
              target="_blank"
            >
              instagramu
            </a>
            .
          </li>
          <li className="text-base md:px-3 mb-1 lg:text-lg text-nowrap">
            Máme dokonce instagramový účet o bezlepkovém pečení.
          </li>
        </ul>
      </div>
      <div className="w-full flex justify-center items-center text-center py-4 flex-col bg-[#061E4C]">
        <Flowers />
        <SectionTitleBlue isIndex={true} title="Kde nás najdete?" />
        <WhereToFindUs />
      </div>
      <div className="w-full max-w-6xl p-5  px-5 sm:px-5 flex flex-col text-start justify-start">
        <div className="text-center pt-14 w-full my-10">
          <SectionTitle indexPage={false} title="Kontaktní formulář" />
        </div>
        <ContactForm />
      </div>
      <Gallery />
    </>
  );
};
export default Page;
