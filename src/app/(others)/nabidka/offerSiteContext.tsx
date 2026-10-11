import Link from 'next/link';
import Image from 'next/image';
import { MdArrowForwardIos } from 'react-icons/md';

const offerProps = [
  {
    src: '/gallery-main-page/gallery-cakes.png',
    title: 'Dorty',
    alt: 'obrázek dortu',
    link: '/nabidka/dorty',
    sectionTitle: 'Dorty'
  },
  {
    src: '/gallery-main-page/gallery-deserts.png',
    title: 'Dezerty',
    alt: 'obrázek sladkého baru',
    link: '/nabidka/dezerty',
    sectionTitle: 'Dezerty'
  }
];

const OfferSiteContext = () => {
  return (
    <div className="mt-5 flex w-full flex-col items-center justify-center self-center px-2 text-center text-xl md:flex-row">
      <div className="flex w-full flex-grow flex-row justify-center">
        {offerProps.map((item, i) => {
          return (
            <div
              key={i}
              className="mx-5 flex w-full max-w-[350px] flex-col justify-between"
            >
              <div className="my-12 mb-6 mt-8">
                <span className="w-full text-center font-dancing text-3xl md:text-4xl lg:text-5xl">
                  {item.sectionTitle}
                </span>
              </div>
              <Link href={item.link}>
                <div className="group inline-flex h-full w-full flex-col items-center justify-center">
                  <div className="flex flex-shrink items-center justify-center">
                    <span className="relative">
                      <Image
                        className="flex max-w-[150px] self-center object-scale-down p-2 duration-300 ease-in-out group-hover:brightness-50 sm:max-w-[240px] md:max-w-[320px]"
                        src={item.src}
                        alt={item.alt}
                        title={item.title}
                        width={500}
                        height={500}
                      />
                      <span className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 text-nowrap px-5 py-2 text-sm text-white duration-300 ease-in-out group-hover:block sm:text-base md:text-xl lg:text-2xl">
                        <MdArrowForwardIos className="h-14 w-14 text-white" />
                      </span>
                      <img
                        src="/bocni-srdecka.svg"
                        className={`absolute z-50 hidden h-[70px] w-10 md:block ${i === 0 ? '-left-[25px] bottom-2' : '-right-[25px] top-2 rotate-180'}`}
                        alt="boční ikony srdíček"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default OfferSiteContext;
