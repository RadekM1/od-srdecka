import Link from "next/link";
import Image from "next/image";

const offerProps = [
  {
    src: "/offer-site/dort.png",
    title: "Dorty",
    alt: "obrázek dortu",
    link: "/nabidka/dorty",
    sectionTitle: "Dorty",
  },
  {
    src: "/offer-site/sladky-bar.png",
    title: "Sladký bar",
    alt: "obrázek sladkého baru",
    link: "/nabidka/sladky-bar",
    sectionTitle: "Sladký bar",
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
                <span className="text-3xl md:text-4xl lg:text-5xl font-satisfy  w-full text-center">
                  {item.sectionTitle}
                </span>
              </div>
              <Link href={item.link}>
                <div className="inline-flex h-full  group flex-col justify-center  w-full  items-center">
                  <div className="flex justify-center flex-shrink items-center">
                    <span className="relative">
                      <Image
                        className=" object-scale-down md:max-w-[350px] p-2 duration-300 ease-in-out group-hover:brightness-50 self-center flex"
                        src={item.src}
                        alt={item.alt}
                        title={item.title}
                        width={500}
                        height={500}
                      />
                      <img
                        src="/bocni-srdecka.svg"
                        className={`w-10 hidden md:block absolute h-[70px] z-50 ${i === 0 ? "bottom-2 -left-[30px]" : "top-2 rotate-180 -right-[30px]"}`}
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
