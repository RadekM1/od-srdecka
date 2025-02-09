import PageTitle from "@/components/pageTitle";
import GallerySiteContext from "./gallerySiteContext";

const Page = () => {
  return (
    <>
      <section className="flex max-w-6xl px-1 justify-center text-center mb-10 flex-col w-full">
        <PageTitle title="Galerie" />
        <span className="text-center">
          Pokochejte se nad naší sladkou galerií a objevte, co všechno pro vás
          pečeme.
        </span>
        <GallerySiteContext />
      </section>
    </>
  );
};
export default Page;
