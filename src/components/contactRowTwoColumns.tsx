import { ReactNode } from "react";
import Link from "next/link";

interface aboutUsProps {
  children: ReactNode;
}

const ContactRowTwoColumns = ({ children }: aboutUsProps) => {
  return (
    <>
      <div className="flex flex-col mt-10 mb-10 px-5 sm:px-3 text-xl max-w-6xl w-full text-center justify-center self-center items-start md:flex-row">
        <div className="w-full mx-3 relative mb-3 h-full ">{children}</div>
        <div className="sm:w-2/3 lg:w-2/3 flex gap-4 flex-col self-center justify-center">
          <div className="w-full p-5 font-oldStandard bg-[#061E4C] text-white h-64 rounded-2xl  ">
            <div className="flex justify-center flex-col w-full">
              <span className="text-2xl mb-4 text-start">Oznámení 11/24</span>
              <span className="text-base lg:text-lg text-start">
                Rezervace na přípravu vánočního cukroví již máme plně obsazeny.
                Z kapacitních důvodů nové objednávky na vánoční cukroví
                nepřijímáme.
              </span>
            </div>
          </div>
          <Link href={"/dotazy"}>
            <div className="flex justify-center  hover:-translate-y-1 duration-300 ease-in-out  text-[#061E4C] rounded-2xl shadow-sm h-12 shadow-gray-500 flex-row w-full">
              <span className="text-base lg:text-lg text-start self-center text-nowrap font-semibold font-oldStandard">
                {">>"} Podívejte se na nejčastější dotazy
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default ContactRowTwoColumns;
