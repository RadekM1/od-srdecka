import Gallery from "../../../components/gallery";
import AboutUsComponentTextAsideImg from "./aboutUsPageText";
import AboutUs from "../../../components/aboutUs";

const Page = () => {
  return (
    <>
      <section className="flex max-w-6xl font-oldStandard px-3 mb-10 flex-col w-full">
        <AboutUs
          title="Tři cérky z Valašska"
          textImg="/pozadi-text/nas-pribeh.svg"
          indexPage={false}
        >
          <AboutUsComponentTextAsideImg />
        </AboutUs>
        <span className="text-start">
          <span className="text-1xl">&gt;&gt;</span> Naše dorty a zákusky můžete
          ochutnat i v <span className="font-semibold">kavárnách,</span> se
          kterými spolupracujeme.
        </span>
        <span className="text-start">
          <span className="text-1xl">&gt;&gt;</span> Všechny{" "}
          <span className="font-semibold">novinky a aktuality</span> můžete
          sledovat na našem <span className="font-semibold">instagramu.</span>{" "}
        </span>
      </section>
      <Gallery />
    </>
  );
};
export default Page;
