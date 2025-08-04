import Reference from "@/components/index/reference";
import PageTitle from "@/components/pageTitle";
import ProductGallery from "@/components/UI/productGallery";
import { getGalleries } from "@/lib/fetch/get-galleries";

const dessertsGallery = await getGalleries("galerie-dezerty");

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie | Od Srdéčka - Dorty a sladké bary",
  description:
    "Prohlédněte si naše s láskou upečené dorty, sladké bary a další dobroty. Inspirujte se pro vaši oslavu, svatbu či narozeniny.",
  alternates: {
    canonical: "https://www.odsrdecka.cz/galerie/sladky-bar",
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
    url: "https://www.odsrdecka.cz/galerie/sladky-bar",
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
      <section className="flex max-w-[1000px] px-1 items-center  justify-center text-center mb-10 flex-col w-full">
        <PageTitle title="Galerie sladkého baru" />
        <ProductGallery productType="dessert" gallery={dessertsGallery} />
        <Reference />
      </section>
    </>
  );
};
export default Page;
