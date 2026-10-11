import Link from 'next/link';

const TextUnderTitle = () => {
  return (
    <div className="mb-10 flex w-full flex-col p-5 md:mt-10 lg:w-[1000px]">
      <span className="px-2 text-start font-oldStandard text-xl md:text-center lg:text-2xl">
        Objednávky nejraději přijímáme{' '}
        <Link
          href="tel:+420733506548"
          className="font-semibold underline hover:no-underline"
        >
          telefonicky
        </Link>
        , ale pokud nás nezastihnete, neváhejte nám napsat{' '}
        <Link
          href="mailto:odsrdecka@gmail.com"
          className="font-semibold underline hover:no-underline"
        >
          email
        </Link>{' '}
        nebo využít{' '}
        <span className="font-semibold">kontaktní formulář níže</span>. Rády se
        vám ozveme co <span className="text-nowrap">nejdříve zpět.</span>
      </span>
    </div>
  );
};
export default TextUnderTitle;
