import Link from 'next/link';

const TextUnderTitle = () => {
  return (
    <div className="mb-10 w-full lg:w-[1000px]">
      <div className="p-5 text-start font-oldStandard text-xl md:mt-10 md:text-center lg:text-2xl">
        Objednávky nejraději přijímáme{' '}
        <Link href="tel:+420733506548" className="font-semibold underline">
          telefonicky
        </Link>
        , ale pokud nás nezastihnete, neváhejte nám napsat{' '}
        <Link
          href="mailto:odsrdecka@gmail.com"
          className="text-nowrap font-semibold underline"
        >
          e-mail
        </Link>{' '}
        nebo využít kontaktní formulář níže. Rády se vám ozveme co nejdříve
        zpět.
        <p className="my-10 text-xl font-semibold lg:text-2xl">
          Dort či sladký bar vám pomůžeme vybrat dle vašich představ.
        </p>
      </div>
    </div>
  );
};
export default TextUnderTitle;
