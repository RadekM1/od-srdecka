import Link from "next/link";

const TextUnderTitle = () => {
  return (
    <div className="w-full p-5 md:mt-10 flex flex-col mb-10 lg:w-[1000px]">
      <span className="text-start md:text-center text-xl lg:text-2xl font-oldStandard px-2 ">
        Objednávky nejraději přijímáme{" "}
        <Link
          href="tel:+420733506548"
          className="font-semibold hover:no-underline underline"
        >
          telefonicky
        </Link>
        , ale pokud nás nezastihnete, neváhejte nám napsat{" "}
        <Link
          href="mailto:odsrdecka@gmail.com"
          className="font-semibold hover:no-underline underline"
        >
          email
        </Link>{" "}
        nebo využít{" "}
        <span className="font-semibold">kontaktní formulář níže</span>. Rády se
        vám ozveme co <span className="text-nowrap">nejdříve zpět.</span>
      </span>
    </div>
  );
};
export default TextUnderTitle;
