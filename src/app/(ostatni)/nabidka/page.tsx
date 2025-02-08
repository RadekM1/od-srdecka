import PageTitle from "@/components/pageTitle";
import OfferSiteContext from "./offerSiteContext";

const Page = () => {
  return (
    <>
      <section className="flex max-w-6xl px-1 justify-center text-center mb-10 flex-col w-full">
        <PageTitle title="Naše nabídka" />
        <span className="text-center text-xl md:text-2xl">
          Pečeme dorty a sladké bary k různým příležitostem. Můžete si
          <br />
          vybrat... Více informací najdete...
        </span>
        <OfferSiteContext />
      </section>
    </>
  );
};
export default Page;
