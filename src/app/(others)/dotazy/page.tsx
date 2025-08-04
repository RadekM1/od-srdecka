import PageTitle from "@/components/pageTitle";
import Faq from "./faq";
import Gallery from "@/components/gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Časté dotazy (FAQ) | Od Srdéčka",
  description:
    "Máte otázky ohledně našich dortů, objednávek, alergenů nebo trvanlivosti? Zde najdete odpovědi na vše, co vás zajímá.",
  alternates: {
    canonical: "https://www.odsrdecka.cz/dotazy",
  },
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "časté dotazy",
    "FAQ",
    "otázky a odpovědi",
    "alergeny",
    "složení",
    "objednávka dortu",
    "trvanlivost",
    "Od Srdéčka",
    "Kašava",
  ],
  authors: [{ name: "Radek Morong", url: "https://www.radekmorong.cz" }],

  openGraph: {
    title: "Časté dotazy (FAQ) | Od Srdéčka",
    description:
      "Najděte odpovědi na otázky ohledně našich dortů, objednávek a alergenů.",
    url: "https://www.odsrdecka.cz/dotazy",
    siteName: "Od Srdéčka",
    images: [
      {
        url: "https://odsrdecka.cz/index/team.png",
        width: 1200,
        height: 630,
        alt: "Odpovědi na časté dotazy - Od Srdéčka",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Časté dotazy (FAQ) | Od Srdéčka",
    description:
      "Najděte odpovědi na otázky ohledně našich dortů, objednávek a alergenů.",
    images: ["https://odsrdecka.cz/index/team.png"],
  },
};
const Page = () => {
  return (
    <>
      <section className="flex max-w-6xl px-3 lg:px-10 mb-10 flex-col w-full">
        <PageTitle title="Nejčastější dotazy" />
        <p className="mb-5 text-xl mt-16 lg:text-2xl font-oldStandard">
          Máte otázky? Možná už máme odpověď právě tady.
        </p>
        <Faq />
      </section>
      <Gallery />
    </>
  );
};
export default Page;
