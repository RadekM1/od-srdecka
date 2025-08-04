import PageTitle from "@/components/pageTitle";
import TextUnderTitle from "./textUnderTitle";
import Cakes from "../../../../components/products/cakes";
import CakePriceTable from "../../../../components/products/cakePriceTable";
import Gallery from "../../../../components/gallery";
import NotesUnderTable from "./notesUnderTable";
import { getCakePrices } from "@/lib/fetch/get-cake-prices";
import { getCakes } from "@/lib/fetch/get-cakes";

const { cakePrices, cakePriceNotes } = await getCakePrices();

const cakes = await getCakes();
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nabídka dortů a sladkých barů | Od Srdéčka",
  description:
    "Prohlédněte si naši kompletní nabídku poctivých dortů, sladkých barů, koláčů a dalších dobrot. Vše pečeme s láskou z kvalitních surovin v Kašavě.",
  alternates: {
    canonical: "https://www.odsrdecka.cz/nabidka/dorty",
  },
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "nabídka",
    "sortiment",
    "ceník",
    "dorty",
    "sladký bar",
    "cheesecake",
    "makronky",
    "koláče",
    "svatební dorty",
    "Od Srdéčka",
  ],
  authors: [{ name: "Radek Morong", url: "https://www.radekmorong.cz" }],

  openGraph: {
    title: "Naše nabídka dobrot | Od Srdéčka",
    description:
      "Objevte naši širokou nabídku dortů, sladkých barů a dalších poctivých sladkostí.",
    url: "https://www.odsrdecka.cz/nabidka/dorty",
    siteName: "Od Srdéčka",
    images: [
      {
        url: "https://odsrdecka.cz/index/team.png",
        width: 1200,
        height: 630,
        alt: "Nabídka dortů a sladkých barů Od Srdéčka",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naše nabídka dobrot | Od Srdéčka",
    description:
      "Objevte naši širokou nabídku dortů, sladkých barů a dalších poctivých sladkostí.",
    images: ["https://odsrdecka.cz/index/team.png"],
  },
};

const Page = () => {
  return (
    <>
      <PageTitle title="Dorty" />
      <TextUnderTitle />
      <PageTitle title="Nabídka" />
      <Cakes cakes={cakes} />
      <div id="cenik-kotva" className="h-full mt-10 pt-16 pb-16 w-full">
        <span className="text-3xl md:text-4xl font-semibold  lg:text-5xl font-oldStandard w-full text-center">
          Ceník
        </span>
      </div>
      <CakePriceTable priceList={cakePrices} />
      <NotesUnderTable fetchedNotes={cakePriceNotes} />
      <div className="w-full lg:my-24 xl:my-32 relative text-center self-center justify-center">
        <img
          src="/dorty.svg"
          className={`absolute hidden lg:h-[350px] xl:h-[500px] lg:block -top-[100px] -z-10`}
          alt="pozadí text pečeme od srdéčka"
        />
      </div>
      <Gallery />
    </>
  );
};
export default Page;
