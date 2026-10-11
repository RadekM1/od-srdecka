import Link from 'next/link';

const TextInRowComponentOrder = () => {
  return (
    <>
      <div className="z-10 mb-5 flex w-full flex-row text-start font-abhaya md:mb-0 md:text-center">
        <div className="flex h-full w-full flex-grow flex-col items-start justify-start gap-1 text-start text-xl md:text-center lg:text-2xl">
          <h2 className="font-oldStandard text-2xl font-semibold">Kontakt</h2>
          <p className="text-nowrap font-oldStandard text-base lg:text-lg">
            Magdaléna Hanáková
          </p>
          <p className="text-nowrap font-oldStandard text-base lg:text-lg">
            IČO: 179 101 29
          </p>
          <p className="text-nowrap font-oldStandard text-base lg:text-lg">
            Sídlo: Kašava 165, 763 19
          </p>

          <ul className="mt-5 list-disc pl-3 text-start font-oldStandard text-base sm:pl-7">
            <li className="mb-1 text-nowrap text-base md:px-3 lg:text-lg">
              Email:{' '}
              <Link
                href="mailto:odsrdecka@gmail.com"
                className="mt-10 text-nowrap font-oldStandard hover:underline"
              >
                odsrdecka@gmail.com
              </Link>
            </li>
            <li className="mb-1 text-nowrap md:px-3 lg:text-lg">
              Tel:{' '}
              <Link
                href="tel:+420733506548"
                className="mt-10 text-nowrap font-oldStandard hover:underline"
              >
                <span className="text-xs">+</span>420 733 506 548
              </Link>
            </li>
          </ul>
          <h2 className="mt-10 text-nowrap font-oldStandard text-2xl font-semibold">
            Adresa provozovny a výdejny
          </h2>
          <span className="text-nowrap font-oldStandard text-base lg:text-lg">
            Kašava 33, 763 19 Kašava
          </span>
        </div>
      </div>
    </>
  );
};
export default TextInRowComponentOrder;
