const TextInRowComponentOrder = () => {
  return (
    <>
      <div className="flex z-10 mb-5  md:mb-0 font-abhaya text-start md:text-center  w-full flex-row ">
        <div className="w-full flex justify-start gap-1 text-start md:text-center items-start text-xl lg:text-2xl flex-col flex-grow  h-full">
          <span className="font-oldStandard text-2xl font-semibold">
            Kontakt
          </span>
          <span className="text-base font-oldStandard lg:text-lg text-nowrap">
            Magdalena Hanáková
          </span>
          <span className="text-base font-oldStandard lg:text-lg text-nowrap">
            odsrdecka@gmail.com
          </span>
          <span className="text-base mt-10 font-oldStandard lg:text-lg text-nowrap">
            +420 601 123 456
          </span>
          <span className="text-base font-oldStandard lg:text-lg text-nowrap">
            Adresa provozovny a výdejny
          </span>
          <span className="text-base font-oldStandard lg:text-lg text-nowrap">
            Kašava 33, 763 19 Kašava
          </span>
        </div>
      </div>
    </>
  );
};
export default TextInRowComponentOrder;
