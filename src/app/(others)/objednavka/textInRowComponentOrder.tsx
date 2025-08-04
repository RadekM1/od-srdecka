import Link from "next/link";

const itemsList = [
  "Typy objednávek",
  "Dorty - svatební, narozeninové, jiné příležitosti",
  "Sladké bary",
  "Krabička dezertů",
  "Dárkové poukazy",
];

const TextInRowComponentOrder = () => {
  return (
    <>
      <div className="flex z-10 mb-5 md:mb-0 font-abhaya  w-full flex-row ">
        <div className="w-full flex justify-start gap-5 items-start text-xl lg:text-2xl flex-col flex-grow  h-full">
          <span className="font-oldStandard text-2xl font-semibold">
            Typy objednávek
          </span>
          <ul className="font-oldStandard text-start pl-3 sm:pl-7 list-disc text-base">
            {itemsList.map((item, i) => (
              <li
                key={i}
                className="text-base md:px-3 mb-1 lg:text-lg text-nowrap"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="w-full text-start font-oldStandard text-base mb-1 lg:text-lg">
            Typy dortů a zákusků naleznete v naší{" "}
            <span className="font-semibold ">
              <Link
                className="underline text-base mb-1 lg:text-lg hover:no-underline duration-300 ease-in-out "
                href={"/nabidka"}
              >
                nabídce
              </Link>
            </span>
            <p className="font-oldStandard text-2xl font-semibold pt-10 pr-2 sm:pr-10 text-red-400 texxt-start w-full">
              Objednávejte prosím s dostatečným předstihem a zajistěte si svůj
              termín.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default TextInRowComponentOrder;
