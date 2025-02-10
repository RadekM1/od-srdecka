import PageTitle from "@/components/pageTitle";
import IndexSectionLine from "@/components/indexSectionLine";
import Gallery from "@/components/gallery";
import Desserts from "@/components/products/desserts";
import { desserts } from "../../../../../public/content/desserts";

const Page = () => {
  return (
    <>
      <PageTitle title="Dezerty" />
      <span className="text-center font-oldStandard px-2 font-semibold ">
        Pečeme sladké bary pro různé příležitosti - na svatby, narozeniny,
        Vánoce nebo jen tak ke kávě.
      </span>
      <span className="text-center font-oldStandard pb-20 px-2 ">
        Rády vám osladíme den!
      </span>
      <PageTitle title="Menu" />
      <Desserts desserts={desserts} />
      <IndexSectionLine sectionAnchor={false} />
      <Gallery />
    </>
  );
};
export default Page;
