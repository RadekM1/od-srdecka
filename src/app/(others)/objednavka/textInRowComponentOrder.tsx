import Link from 'next/link';

const itemsList = [
  'Dorty - svatební, narozeninové, jiné příležitosti',
  'Sladké bary',
  'Krabička dezertů',
  'Dárkové poukazy'
];

const TextInRowComponentOrder = () => {
  return (
    <>
      <div className="z-10 mb-5 flex w-full flex-row font-abhaya md:mb-0">
        <div className="flex h-full w-full flex-grow flex-col items-start justify-start gap-5 text-xl lg:text-2xl">
          <span className="font-oldStandard text-2xl font-semibold">
            Typy objednávek
          </span>
          <ul className="list-disc pl-3 text-start font-oldStandard text-base sm:pl-7">
            {itemsList.map((item, i) => (
              <li
                key={i}
                className="mb-1 text-nowrap text-base md:px-3 lg:text-lg"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mb-1 w-full text-start font-oldStandard text-base lg:text-lg">
            Typy dortů a zákusků naleznete v naší{' '}
            <span className="font-semibold">
              <Link
                className="mb-1 text-base underline duration-300 ease-in-out hover:no-underline lg:text-lg"
                href={'/nabidka'}
              >
                nabídce
              </Link>
              .
            </span>
            <p className="texxt-start w-full pr-2 pt-10 font-oldStandard text-2xl font-semibold text-red-400 sm:pr-10">
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
