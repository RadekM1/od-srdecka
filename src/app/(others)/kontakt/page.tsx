import PageTitle from "@/components/pageTitle";
import TextUnderTitle from "./textUnderTitle";
import ContactRowTwoColumns from "@/components/contactRowTwoColumns";
import TextInRowComponent from "./textInRowComponentContact";
import WhereToFindUs from "@/components/index/whereToFindUs";
import SectionTitleBlue from "@/components/sectionTitleBlue";
import SectionTitle from "@/components/sectionTitle";
import ContactForm from "@/components/UI/contactForm";
import Gallery from "@/components/gallery";
import Flowers from "@/components/index/flowers";

const Page = () => {
  return (
    <>
      <PageTitle title="Ozvěte se nám" />
      <TextUnderTitle />
      <ContactRowTwoColumns>
        <TextInRowComponent />
      </ContactRowTwoColumns>
      <div className="w-full max-w-6xl p-5 mb-12 md:mb-32 lg:mb-48  px-5 sm:px-5 flex flex-col text-start justify-start">
        <p className="font-oldStandard text-2xl font-semibold">
          Spolupráce s kavárnami
        </p>
        <p className="text-base lg:text-lg text-start font-oldStandard">
          Máte <span className="font-semibold">kavárnu</span> a chtěli byste
          nabízet naše produkty? Rády navážeme spolupráci. Neváhejte nás
          kontaktovat.
        </p>
        <p className="font-oldStandard mt-10 text-2xl font-semibold">
          Aktuality
        </p>
        <p className="text-base mb-10 lg:text-lg text-start font-oldStandard">
          Všechny <span className="font-semibold">novinky a aktuality</span>{" "}
          můžete sledovat na našem{" "}
          <a
            className="font-semibold underline hover:no-underline"
            href="https://www.instagram.com/odsrdecka/"
            target="_blank"
          >
            instagramu
          </a>
          .
        </p>
      </div>
      <div className="w-full flex justify-center items-center text-center py-4 flex-col bg-[#061E4C]">
        <Flowers />
        <SectionTitleBlue isIndex={true} title="Kde nás najdete?" />
        <WhereToFindUs />
      </div>
      <div className="w-full max-w-6xl p-5  px-5 sm:px-5 flex flex-col text-start justify-start">
        <div className="text-center pt-14 w-full my-10">
          <SectionTitle indexPage={false} title="Kontaktní formulář" />
        </div>
        <ContactForm />
      </div>
      <Gallery />
    </>
  );
};
export default Page;
