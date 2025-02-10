import Reference from "@/components/index/reference";
import PageTitle from "@/components/pageTitle";

const Page = () => {
  return (
    <>
      <section className="flex max-w-6xl px-1 justify-center text-center mb-10 flex-col w-full">
        <PageTitle title="Galerie dortů" />

        <Reference />
      </section>
    </>
  );
};
export default Page;
