import Link from "next/link";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";

const offerProps = [
  {
    src: "/gallery-main-page/gallery-cakes.png",
    title: "Dorty",
    alt: "obrázek dortu",
    link: "/nabidka/dorty",
    sectionTitle: "Dorty",
  },
  {
    src: "/gallery-main-page/gallery-deserts.png",
    title: "Dezerty",
    alt: "obrázek sladkého baru",
    link: "/nabidka/dezerty",
    sectionTitle: "Dezerty",
  },
];

const OfferSiteContext = () => {
  return (
    <div className="flex flex-col mt-5 px-2 text-xl w-full text-center justify-center self-center items-center md:flex-row">
      <div className="w-full flex-grow justify-center flex-row flex">
        {offerProps.map((item, i) => {
          return (
            <div
              key={i}
              className="max-w-[350px] mx-5 w-full  flex  justify-between flex-col"
            >
              <div className="my-12 mt-8 mb-6">
                <span className="text-3xl md:text-4xl lg:text-5xl font-dancing  w-full text-center">
                  {item.sectionTitle}
                </span>
              </div>
              <Link href={item.link}>
                <div className="inline-flex h-full  group flex-col justify-center  w-full  items-center">
                  <div className="flex justify-center flex-shrink items-center">
                    <span className="relative">
                      <Image
                        className=" object-scale-down max-w-[150px] sm:max-w-[240px] md:max-w-[320px] p-2 duration-300 ease-in-out group-hover:brightness-50 self-center flex"
                        src={item.src}
                        alt={item.alt}
                        title={item.title}
                        width={500}
                        height={500}
                      />
                      <span className="absolute top-1/2 -translate-y-1/2 text-sm sm:text-base  px-5 py-2 md:text-xl lg:text-2xl text-nowrap left-1/2 z-20 hidden duration-300 group-hover:block ease-in-out text-white -translate-x-1/2">
                        <MdArrowForwardIos className="h-14 w-14 text-white" />
                      </span>
                      <img
                        src="/bocni-srdecka.svg"
                        className={`w-10 hidden md:block absolute h-[70px] z-50 ${i === 0 ? "bottom-2 -left-[25px]" : "top-2 rotate-180 -right-[25px]"}`}
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
