import Link from "next/link";

const TextInRowComponentOrder = () => {
  return (
    <>
      <div className="flex z-10 mb-5 md:mb-0 font-abhaya  w-full flex-row ">
        <div className="w-full flex justify-start gap-5 items-start text-xl lg:text-2xl flex-col flex-grow  h-full">
          <span className="font-oldStandard text-2xl font-semibold">
            Typy objednávek
          </span>
          <ul className="font-oldStandard text-start pl-7 list-disc text-base">
            <li className="text-base px-3 mb-1 lg:text-lg text-nowrap">
              Dorty - svatební, narozeninové, na zakázku
            </li>
            <li className="text-base px-3 mb-1 lg:text-lg text-nowrap">
              Sladké bary
            </li>
            <li className="text-base px-3 mb-1 lg:text-lg text-nowrap">
              Krabička dezertů
            </li>
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
          </div>
        </div>
      </div>
    </>
  );
};
export default TextInRowComponentOrder;
