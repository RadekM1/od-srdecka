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
              className="max-w-[500px] w-full  flex  justify-between flex-col"
            >
              <div className="my-12 mt-8 mb-6">
                <span className="text-3xl md:text-4xl lg:text-5xl font-satisfy  w-full text-center">
                  {item.sectionTitle}
                </span>
              </div>
              <Link href={item.link}>
                <div className="flex h-full  group flex-col justify-center  w-full  items-center">
                  <div className="flex   h-full justify-center  w-full  items-center">
                    <Image
                      className=" object-scale-down max-h-[275px] p-2 duration-300 ease-in-out group-hover:brightness-50 self-center flex"
                      src={item.src}
                      alt={item.alt}
                      title={item.title}
                      width={500}
                      height={500}
                    />
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
