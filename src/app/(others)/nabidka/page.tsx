import PageTitle from "../../../components/pageTitle";
import OfferSiteContext from "./offerSiteContext";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <section className="flex max-w-6xl px-1 text-xl lg:text-2xl justify-center text-center mb-32 flex-col w-full">
        <PageTitle title="Naše nabídka" />
        <p className="text-center pt-10 font-oldStandard">
          Pečeme dorty a dezerty k různým příležitostem. Jen si vybrat...
        </p>
        <p className="text-center font-oldStandard">
          Tady najdete naši nabídku dortů a dezertů.
        </p>
        <p className="text-center pb-10 font-oldStandard">
          Mrkněte také na fotky v naší{" "}
          <Link
            className="font-semibold hover:no-underline underline"
            href="/galerie"
          >
            galerii!
          </Link>
        </p>
        <OfferSiteContext />
      </section>
    </>
  );
};
export default Page;
