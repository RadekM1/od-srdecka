import Link from "next/link";

const TextUnderTitle = () => {
  return (
    <div className="w-full mb-10 lg:w-[1000px]">
      <div className="p-5 md:mt-10 font-oldStandard text-xl lg:text-2xl text-start md:text-center">
        Objednávky nejraději přijímáme{" "}
        <Link href="tel:+420733506548" className="font-semibold underline">
          telefonicky
        </Link>
        , ale pokud nás nezastihnete, neváhejte nám napsat{" "}
        <Link
          href="mailto:odsrdecka@gmail.com"
          className="font-semibold text-nowrap underline"
        >
          e-mail
        </Link>{" "}
        nebo využít kontaktní formulář níže. Rádi se vám ozveme zpět co
        nejdříve.
      </div>
    </div>
  );
};
export default TextUnderTitle;
