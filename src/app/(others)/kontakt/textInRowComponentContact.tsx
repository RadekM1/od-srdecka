import Link from "next/link";

const TextInRowComponentOrder = () => {
  return (
    <>
      <div className="flex z-10 mb-5  md:mb-0 font-abhaya text-start md:text-center  w-full flex-row ">
        <div className="w-full flex justify-start gap-1 text-start md:text-center items-start text-xl lg:text-2xl flex-col flex-grow  h-full">
          <h2 className="font-oldStandard text-2xl font-semibold">Kontakt</h2>
          <p className="text-base font-oldStandard lg:text-lg text-nowrap">
            Magdaléna Hanáková
          </p>
          <p className="text-base font-oldStandard lg:text-lg text-nowrap">
            IČO: 179 101 29
          </p>
          <p className="text-base font-oldStandard lg:text-lg text-nowrap">
            Sídlo: Kašava 165, 763 19
          </p>

          <ul className="font-oldStandard mt-5 text-start pl-3 sm:pl-7 list-disc text-base">
            <li className="text-base md:px-3 mb-1 lg:text-lg text-nowrap">
              Email:{" "}
              <Link
                href="mailto:odsrdecka@gmail.com"
                className="mt-10 font-oldStandard hover:underline text-nowrap"
              >
                odsrdecka@gmail.com
              </Link>
            </li>
            <li className="md:px-3 mb-1 lg:text-lg text-nowrap">
              Tel:{" "}
              <Link
                href="tel:+420733506548"
                className="mt-10 font-oldStandard hover:underline text-nowrap"
              >
                <span className="text-xs">+</span>420 733 506 548
              </Link>
            </li>
          </ul>
          <h2 className="mt-10 font-oldStandard text-2xl font-semibold text-nowrap">
            Adresa provozovny a výdejny
          </h2>
          <span className="text-base font-oldStandard lg:text-lg text-nowrap">
            Kašava 33, 763 19 Kašava
          </span>
        </div>
      </div>
    </>
  );
};
export default TextInRowComponentOrder;
