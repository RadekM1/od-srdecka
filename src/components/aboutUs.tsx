import { ReactNode } from "react";
import SectionTitle from "./sectionTitle";

interface aboutUsProps {
  title: string;
  textImg: string;
  children: ReactNode;
  indexPage: boolean;
}

const AboutUs = ({ title, textImg, children, indexPage }: aboutUsProps) => {
  return (
    <div className={`flex w-full flex-col ${indexPage ? "mb-16" : ""}`}>
      <SectionTitle title={title} indexPage={indexPage} />
      <div className="flex flex-col lg:mt-16 mb-10 px-1 max-w-6xl w-full text-center justify-center self-center items-start md:flex-row">
        <div
          className={`w-full relative h-full ${indexPage ? "self-center" : "self-end"} justify-center`}
        >
          <img
            src={textImg}
            className={`absolute hidden lg:block ${indexPage ? "-top-[180px]" : "-top-[200px]"} -z-10`}
            alt="pozadí text pečeme od srdéčka"
          />
          {children}
        </div>
        <div className="w-full md:w-5/6 lg:w-full flex self-center justify-center">
          <div className="flex justify-center flex-row w-full">
            <div className="flex h-full flex-col justify-center  w-full  items-center">
              <div className="flex   h-full justify-center  w-full  items-center">
                <img
                  className=" object-scale-down  duration-300 ease-in-out self-center flex"
                  src="/index/team.png"
                  alt="fotka teamu"
                />
              </div>
            </div>
            <div className="flex items-end self-end h-full ">
              <div className=" hidden md:block flex-col mb-2 flex-grow justify-end items-end h-full">
                <div className="flex flex-grow h-full self-end">
                  <img
                    src="/bocni-srdecka.svg"
                    alt="boční grafika srdcí"
                    className="rotate-180 self-end"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!indexPage && (
        <p className="text-start mt-5 w-full">
          <span className="font-semibold">Láska k pečení</span> se u nás předává
          z generace na generaci. Už od dětství jsme pomáhaly maminkám a
          babičkám v kuchyni. Začaly jsme navzájem sdílet zkušenosti, recepty i
          nápady a vzájemně se inspirovat. Postupně vznikla myšlenka nabídnout
          své výtvory i širšímu okolí. Velmi nás baví propojovat tradiční
          recepty s dezerty inspirovanými moderními zahraničními trendy.
        </p>
      )}
    </div>
  );
};
export default AboutUs;
