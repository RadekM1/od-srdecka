import PageTitle from "@/components/pageTitle";
import GallerySiteContext from "./gallerySiteContext";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie | Od Srdéčka - Dorty a sladké bary",
  description:
    "Prohlédněte si naše s láskou upečené dorty, sladké bary a další dobroty. Inspirujte se pro vaši oslavu, svatbu či narozeniny.",
  alternates: {
    canonical: "https://www.odsrdecka.cz/galerie",
  },
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "galerie",
    "fotogalerie",
    "inspirace",
    "dorty fotky",
    "svatební dorty",
    "sladký bar",
    "narozeninové dorty",
    "Od Srdéčka",
  ],
  authors: [{ name: "Radek Morong", url: "https://www.radekmorong.cz" }],

  openGraph: {
    title: "Galerie našich dobrot | Od Srdéčka",
    description:
      "Inspirujte se v naší fotogalerii dortů a sladkých barů pro vaši oslavu.",
    url: "https://www.odsrdecka.cz/galerie",
    siteName: "Od Srdéčka",
    images: [
      {
        url: "https://odsrdecka.cz/index/team.png",
        width: 1200,
        height: 630,
        alt: "Fotogalerie dortů a sladkých barů Od Srdéčka",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Galerie našich dobrot | Od Srdéčka",
    description:
      "Inspirujte se v naší fotogalerii dortů a sladkých barů pro vaši oslavu.",
    images: ["https://odsrdecka.cz/index/team.png"],
  },
};

const Page = () => {
  return (
    <>
      <section className="flex max-w-6xl text-xl lg:text-2xl px-1 justify-center text-center mb-10 flex-col w-full">
        <PageTitle title="Galerie" />
        <span className="text-center mt-12 mb-6 font-oldStandard ">
          Prozkoumejte naši sladkou galerii a objevte, co všechno pečeme. Tak
          co, na co máte chuť?
        </span>
        <GallerySiteContext />
      </section>
    </>
  );
};
export default Page;
