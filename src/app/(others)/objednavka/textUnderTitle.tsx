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
        nebo využít kontaktní formulář níže. Rády se vám ozveme co nejdříve
        zpět.
        <p className="text-xl lg:text-2xl my-10 font-semibold">
          Dort či sladký bar vám pomůžeme vybrat dle vašich představ.
        </p>
      </div>
    </div>
  );
};
export default TextUnderTitle;
