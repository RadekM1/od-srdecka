import PageTitle from "@/components/pageTitle";
import Faq from "./faq";
import Gallery from "@/components/gallery";
import SectionLine from "@/components/sectionLine";

const Page = () => {
  return (
    <>
      <section className="flex max-w-6xl px-10 mb-10 flex-col w-full">
        <PageTitle title="Nejčastější dotazy" />
        <span className="text-xl lg:text-2xl mb-5">
          Máte otázky? Možná už máme odpověď právě tady.
        </span>
        <Faq />
        <SectionLine />
        <Gallery />
      </section>
    </>
  );
};
export default Page;
