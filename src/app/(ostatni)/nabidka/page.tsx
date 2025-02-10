import PageTitle from "../../../components/pageTitle";
import OfferSiteContext from "./offerSiteContext";

const Page = () => {
  return (
    <>
      <section className="flex max-w-6xl px-1 justify-center text-center mb-10 flex-col w-full">
        <PageTitle title="Naše nabídka" />
        <span className="text-center font-oldStandard">
          Pečeme dorty a sladké bary k různým příležitostem.
        </span>
        <span className="text-center font-oldStandard">
          Můžete si vybrat..... Více informací najdete...
        </span>
        <OfferSiteContext />
      </section>
    </>
  );
};
export default Page;
