import PageTitle from "@/components/pageTitle";
import Gallery from "@/components/gallery";
import Desserts from "@/components/products/desserts";
import { getDesserts } from "@/lib/fetch/get-desserts";

const desserts = await getDesserts();

const Page = () => {
  return (
    <>
      <PageTitle title="Dezerty" />
      <p className="text-center px-2 text-xl lg:text-2xl font-oldStandard font-semibold">
        Pečeme dezerty a sladké bary pro různé příležitosti - svatby,
        narozeniny, Vánoce nebo jen tak pro radost ke kávě.
      </p>
      <p className="text-center text-xl lg:text-2xl pt-10 font-oldStandard pb-20 px-2 ">
        Rády vám osladíme náladu!
      </p>
      <PageTitle title="Nabídka" />
      <Desserts desserts={desserts} />
      <div className="w-full lg:my-24 xl:my-32 relative text-center self-center justify-center">
        <img
          src="/dezerty.svg"
          className={`absolute hidden lg:h-[350px] xl:h-[500px] lg:block -top-[100px] -z-10`}
          alt="pozadí text pečeme od srdéčka"
        />
      </div>
      <Gallery />
    </>
  );
};
export default Page;
