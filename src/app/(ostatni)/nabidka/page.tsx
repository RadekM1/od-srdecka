import PageTitle from "../../../components/pageTitle";
import OfferSiteContext from "./offerSiteContext";

const Page = () => {
  return (
    <>
      <section className="flex max-w-6xl px-1 text-xl lg:text-2xl justify-center text-center mb-32 flex-col w-full">
        <PageTitle title="Naše nabídka" />
        <span className="text-center pt-10 font-oldStandard">
          Pečeme dorty a sladké bary k různým příležitostem.
        </span>
        <span className="text-center pb-10 font-oldStandard">
          Můžete si vybrat..... Více informací najdete...
        </span>
        <OfferSiteContext />
      </section>
    </>
  );
};
export default Page;
