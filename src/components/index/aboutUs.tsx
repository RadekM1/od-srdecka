import SectionTitle from "../sectionTitle";

const AboutUs = () => {
  return (
    <>
      <SectionTitle title="O nás" />
      <div className="flex flex-col mb-10 px-2 text-xl max-w-6xl w-full text-center justify-center self-center items-start md:flex-row">
        <div className="w-full relative h-full self-center justify-center">
          <img
            src="/pozadi-text/sladke-z-valaska.svg"
            className="absolute hidden lg:block -top-[180px] -z-10"
            alt="pozadí text pečeme od srdéčka"
          />
          <div className="flex z-10  justify-center items-center w-full flex-row ">
            <div className=" font-abhaya text-2xl flex-col self-center flex-grow  h-full">
              <div>Jsme tři cérky z malé dědiny na</div>
              <div>Valašsku. Každá jiná, ale vše děláme od</div>
              <div>
                Srdéčka.{" "}
                <span className="font-semibold">
                  Pečeme dorty a sladké bary
                </span>
              </div>
              <div className="font-semibold mb-4">k různým příležitostem</div>
            </div>
          </div>
        </div>
        <div className="w-full justify-center">
          <div className="flex justify-center flex-row w-full">
            <div className="flex h-full flex-col justify-center  w-full  items-center">
              <div className="flex   h-full justify-center  w-full  items-center">
                <img
                  className=" object-scale-down p-2 duration-300 ease-in-out self-center flex"
                  src="/index/team.png"
                  alt="fotka teamu"
                />
              </div>
            </div>
            <div className="flex items-end self-end h-full ">
              <div className=" hidden md:block flex-col mb-5 flex-grow justify-end items-end h-full">
                <div className="flex self-end">
                  <img
                    src="/bocni-srdecka.svg"
                    alt="boční grafika srdcí"
                    className="rotate-180"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
