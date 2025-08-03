import Link from "next/link";

const TextUnderTitle = () => {
  return (
    <div className="w-full p-5 md:mt-10 flex flex-col mb-10 lg:w-[1000px]">
      <span className="text-start md:text-center text-xl lg:text-2xl font-oldStandard px-2 ">
        Objednávky nejraději přijímáme{" "}
        <Link href="tel:+420733506548" className="font-semibold underline">
          telefonicky
        </Link>
        , ale pokud nás nezastihnete, neváhejte nám napsat{" "}
        <Link
          href="mailto:odsrdecka@gmail.com"
          className="font-semibold underline"
        >
          email
        </Link>{" "}
        nebo využít kontaktní formulář níže. Rádi se vám ozveme zpět co
        nejdříve.
      </span>
    </div>
  );
};
export default TextUnderTitle;
