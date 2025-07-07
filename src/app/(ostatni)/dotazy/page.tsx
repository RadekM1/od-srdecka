import PageTitle from "@/components/pageTitle";
import Faq from "./faq";
import Gallery from "@/components/gallery";

const Page = () => {
  return (
    <>
      <section className="flex max-w-6xl  px-10 mb-10 flex-col w-full">
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
