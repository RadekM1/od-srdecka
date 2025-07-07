import Gallery from "../../../components/gallery";
import AboutUsComponentTextAsideImg from "./aboutUsPageText";
import AboutUs from "../../../components/aboutUs";

const Page = () => {
  return (
    <>
      <section className="flex mt-6 max-w-6xl font-oldStandard px-3 mb-10 flex-col w-full">
        <AboutUs
          title="Tři cérky z Valašska"
          textImg="/pozadi-text/nas-pribeh.svg"
          indexPage={false}
        >
          <AboutUsComponentTextAsideImg />
        </AboutUs>
        <p className="text-start mt-10">
          <span className="text-1xl">&bull;</span> Naše dorty a zákusky můžete
          ochutnat i v <span className="font-semibold">kavárnách,</span> se
          kterými spolupracujeme.
        </p>
        <p className="text-start mt-2 pb-10">
          <span className="text-1xl">&bull;</span> Všechny{" "}
          <span className="font-semibold">novinky a aktuality</span> můžete
          sledovat na našem{" "}
          <a
            href="https://www.instagram.com/odsrdecka_bezlepku/"
            className="font-semibold hover:no-underline underline"
            target="_blank"
          >
            instagramu
          </a>{" "}
        </p>
      </section>
      <Gallery />
    </>
  );
};
export default Page;
