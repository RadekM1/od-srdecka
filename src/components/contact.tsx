import { ReactNode } from 'react';
import SectionTitle from './sectionTitle';

interface aboutUsProps {
  title: string;
  textImg: string;
  children: ReactNode;
  indexPage: boolean;
}

const AboutUs = ({ title, textImg, children, indexPage }: aboutUsProps) => {
  return (
    <>
      <SectionTitle title={title} indexPage={indexPage} />
      <div className="mb-10 flex w-full max-w-6xl flex-col items-start justify-center self-center px-1 text-center text-xl md:flex-row">
        <div className="relative h-full w-full justify-center self-center">
          <img
            src={textImg}
            className={`absolute hidden lg:block ${indexPage ? '-top-[180px]' : '-top-[150px]'} -z-10`}
            alt="pozadí text pečeme od srdéčka"
          />
          {children}
        </div>
        <div className="flex w-full justify-center self-center md:w-5/6 lg:w-full">
          <div className="flex w-full flex-row justify-center">
            <div className="flex h-full w-full flex-col items-center justify-center">
              <div className="flex h-full w-full items-center justify-center">
                <img
                  className="flex self-center object-scale-down duration-300 ease-in-out"
                  src="/index/team.png"
                  alt="fotka teamu"
                />
              </div>
            </div>
            <div className="flex h-full items-end self-end">
              <div className="mb-2 hidden h-full flex-grow flex-col items-end justify-end md:block">
                <div className="flex h-full flex-grow self-end">
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
    </>
  );
};
export default AboutUs;
