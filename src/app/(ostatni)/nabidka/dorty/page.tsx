import PageTitle from "@/components/pageTitle";
import Link from "next/link";
import IndexSectionLine from "@/components/indexSectionLine";
import { cakes, cakesPriceList } from "../../../../../public/content/cakes";
import Cakes from "@/components/products/cakes";
import CakePriceTable from "@/components/products/cakePriceTable";
import Gallery from "@/components/gallery";

const Page = () => {
  return (
    <>
      <PageTitle title="Dorty" />
      <span className="text-center px-2 font-semibold ">
        Pečeme dorty k různým příležitostem - svatby, narozeniny a další.
      </span>
      <span className="text-center pb-14 px-2 ">
        Neváhejte nás kontaktovat a my vám rády pomůžeme osladit váš speciální
        den.
      </span>
      <div className="flex flex-row pb-14 gap-12 font-oldStandard">
        <a
          className="bg-[#061E4C] text-base hover:bg-[#061E4C]/80 duration-300 ease-in-out  text-white w-32 py-2 rounded-xl"
          href="#cenik-kotva"
        >
          Ceník
        </a>
        <Link
          className="bg-[#061E4C] text-base hover:bg-[#061E4C]/80 duration-300 ease-in-out text-white w-32 py-2 rounded-xl"
          href="/galerie/dorty"
        >
          Fotogalerie
        </Link>
      </div>
      <PageTitle title="Menu" />
      <Cakes cakes={cakes} />
      <IndexSectionLine />
      <div className="h-full w-full" id="cenik-kotva">
        <div className="h-6">&nbsp;</div>
        <PageTitle title="Ceník" />
      </div>
      <CakePriceTable priceList={cakesPriceList} />
      <span className="text-sm gap-2 xl:text-base font-oldStandard flex flex-col self-center w-[90%] max-w-[1000px] text-start ">
        <span className="text-start">
          Uvedené ceny jsou bez zdobení, to pak počítáme individuálně.
        </span>
        <span className="text-start">
          Pistáciový dort je za příplatek 200 až 300 Kč v závislosti na
          velikosti dortu, pistáciový krém 150 až 200 Kč.{" "}
        </span>
        <span className="text-start">
          Možnost upéct také{" "}
          <span className="font-semibold">bezlepkové a bezlaktózové verze</span>{" "}
          dortu (za příplatek), avšak mohou tam být stopy těchto alergenů.
        </span>
        <span className="text-start">
          Veškeré alergeny jsou vyznačeny u jednotlivých příchutí dortů.
        </span>
        <span className="text-start font-semibold">
          Upozorňujeme, že dorty je nutné spotřebovat nejpozději do 3 dnů od dne
          vyzvednutí a uchovávat při teplotě do 8 stupnů Celsia.
        </span>
      </span>
      <div className="h-8">&nbsp;</div>
      <Gallery />
    </>
  );
};
export default Page;
