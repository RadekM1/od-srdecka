import { ReactNode } from "react";
import Link from "next/link";
import { Notification } from "./UI/notification";

interface aboutUsProps {
  children: ReactNode;
}

const ContactRowTwoColumns = ({ children }: aboutUsProps) => {
  return (
    <>
      <div className="flex flex-col md:mt-10 md:mb-10 px-5 sm:px-3 text-xl max-w-6xl w-full text-center justify-center self-center items-start md:flex-row">
        <div className="w-full mx-3 relative mb-3 h-full ">{children}</div>
        <div className="sm:w-2/3 lg:w-2/3 flex gap-4 flex-col self-center justify-center">
          <Notification />
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
