import PageTitle from "@/components/pageTitle";
import TextUnderTitle from "./textUnderTitle";
import ContactRowTwoColumns from "@/components/contactRowTwoColumns";
import TextInRowComponentOrder from "./textInRowComponentOrder";
import ContactForm from "@/components/UI/contactForm";
import SectionTitle from "@/components/sectionTitle";
import Gallery from "@/components/gallery";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Od Srdéčka - Dorty a sladké bary z Kašavy",
  description:
    "Máte dotaz, přání, nebo si chcete objednat naše poctivé dorty a sladkosti? Neváhejte nás kontaktovat. Zde najdete telefon, e-mail i adresu v Kašavě.",
  alternates: {
    canonical: "https://www.odsrdecka.cz/objednavka",
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
    url: "https://www.odsrdecka.cz/objednavka",
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
      <PageTitle title="Jak můžu objednat?" />
      <TextUnderTitle />
      <ContactRowTwoColumns>
        <TextInRowComponentOrder />
      </ContactRowTwoColumns>
      <div className="flex flex-col mt-5 mb-10 px-8 font-oldStandard sm:text-base lg:text-xl max-w-6xl w-full text-center justify-center self-center items-start">
        <ul className="font-oldStandard text-start pl-3 list-disc text-base lg:text-lg">
          <li className="mb-1">
            Naše dorty a zákusky můžete ochutnat i v{" "}
            <span className="font-semibold">kavárnách</span>, se kterými
            spolupracujeme.
          </li>
          <li className="mb-1">
            Všechny <span className="font-semibold">novinky a aktuality</span>{" "}
            můžete sledovat na našem{" "}
            <a
              className="font-semibold underline hover:no-underline"
              href="https://www.instagram.com/odsrdecka/"
              target="_blank"
            >
              instagramu
            </a>
            .
          </li>
          <li className="mb-1">
            Je možné objednat i{" "}
            <span className="font-semibold">bez lepku nebo bez laktózy.</span>
          </li>
        </ul>
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
