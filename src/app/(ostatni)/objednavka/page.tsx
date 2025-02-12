import PageTitle from "@/components/pageTitle";
import TextUnderTitle from "./textUnderTitle";
import ContactRowTwoColumns from "@/components/contactRowTwoColumns";
import TextInRowComponentOrder from "./textInRowComponentOrder";
import ContactForm from "@/components/UI/contactForm";
import SectionTitle from "@/components/sectionTitle";
import SectionLine from "@/components/sectionLine";
import Gallery from "@/components/gallery";

const Page = () => {
  return (
    <>
      <PageTitle title="Jak můžu objednat?" />
      <TextUnderTitle />
      <ContactRowTwoColumns>
        <TextInRowComponentOrder />
      </ContactRowTwoColumns>
      <div className="flex flex-col mt-5 mb-10 px-8 font-oldStandard sm:text-base lg:text-xl max-w-6xl w-full text-center justify-center self-center items-start">
        <ul className="font-oldStandard text-start pl-3 list-disc text-base lg:text-lg">
          <li className="mb-1">
            Naše dorty a zákusky můžete ochutnat i v{" "}
            <span className="font-semibold">kavárnách</span>, se kterými
            spolupracujeme.
          </li>
          <li>
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
          </li>
        </ul>
        <div className="text-center pt-14 w-full my-10">
          <SectionTitle indexPage={false} title="Kontaktní formulář" />
        </div>
        <ContactForm />
      </div>
      <SectionLine />
      <Gallery />
    </>
  );
};
export default Page;
