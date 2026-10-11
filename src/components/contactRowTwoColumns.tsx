import { ReactNode } from 'react';
import Link from 'next/link';
import { Notification } from './UI/notification';

interface aboutUsProps {
  children: ReactNode;
}

const ContactRowTwoColumns = ({ children }: aboutUsProps) => {
  return (
    <>
      <div className="flex w-full max-w-6xl flex-col items-start justify-center self-center px-5 text-center text-xl sm:px-3 md:mb-10 md:mt-10 md:flex-row">
        <div className="relative mx-3 mb-3 h-full w-full">{children}</div>
        <div className="flex flex-col justify-center gap-4 self-center sm:w-2/3 lg:w-2/3">
          <Notification />
          <Link href={'/dotazy'}>
            <div className="flex h-12 w-full flex-row justify-center rounded-2xl text-[#061E4C] shadow-sm shadow-gray-500 duration-300 ease-in-out hover:-translate-y-1">
              <span className="self-center text-nowrap text-start font-oldStandard text-base font-semibold lg:text-lg">
                {'>>'} Podívejte se na nejčastější dotazy
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default ContactRowTwoColumns;
