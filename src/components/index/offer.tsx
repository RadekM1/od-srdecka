import SectionTitle from "../sectionTitle";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

const OfferImg = [
  {
    src: "/index/dort.png",
    title: "Dorty",
    alt: "obrázek dortu",
    link: "/nabidka/dorty",
  },
  {
    src: "/index/sladky-bar.png",
    title: "Dezerty",
    alt: "obrázek sladkého baru",
    link: "/nabidka/dezerty",
  },
];

const BlogImg = [
  {
    src: "/index/recepty.png",
    title: "Recepty",
    alt: "obrázek receptu",
    link: "/blog/recepty",
  },
  {
    src: "index/nejcastejsi-dotazy.png",
    title: "Nejčastější dotazy",
    alt: "obrázek nejčastější dotaz",
    link: "/dotazy",
  },
];

const Offer = () => {
  return (
    <div className="flex flex-col mb-24 px-2 text-xl max-w-6xl w-full text-center justify-center self-center items-center md:flex-row">
      <div className="w-full relative  justify-center">
        <SectionTitle indexPage={true} title="Naše nabídka" />
        <img
          src="/pozadi-text/peceme-od-srdecka.svg"
          className="absolute hidden lg:block top-[120px] -z-10"
          alt="pozadí text pečeme od srdéčka"
        />
        <div className="flex z-10  justify-center items-end w-full flex-row ">
          <div className=" hidden md:block flex-col flex-grow justify-end items-end h-full">
            <div className="flex mb-5 self-end">
              <img src="/bocni-srdecka.svg" alt="boční grafika srdcí" />
            </div>
            <div className="invisible">.</div>
          </div>
          {OfferImg.map((img, i) => {
            return (
              <Link href={img.link} key={i}>
                <div className="flex h-full group flex-col justify-center  w-full  items-center">
                  <div className="flex h-full justify-center relative  w-full  items-center">
                    <img
                      className=" object-scale-down p-2 duration-300 ease-in-out group-hover:brightness-50 self-center flex"
                      src={img.src}
                      alt={img.alt}
                      title={img.title}
                    />
                    <span className="absolute top-1/2 -translate-y-1/2 text-sm sm:text-base  px-5 py-2 md:text-xl lg:text-2xl text-nowrap left-1/2 z-20 hidden duration-300 group-hover:block ease-in-out text-white -translate-x-1/2">
                      <MdArrowForwardIos className="h-14 w-14 text-white" />
                    </span>
                  </div>
                  <div className="text-center lg:text-2xl font-OoohBaby tracking-wide group-hover:font-semibold mt-3">
                    {img.title}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-full justify-center">
        <SectionTitle indexPage={true} title="Sladký blog" />
        <div className="flex justify-center flex-row w-full">
          {BlogImg.map((img, i) => {
            return (
              <Link href={img.link} key={i}>
                <div className="flex h-full  group flex-col justify-center  w-full  items-center">
                  <div className="flex relative   h-full justify-center  w-full  items-center">
                    <img
                      className=" object-scale-down p-2 duration-300 ease-in-out group-hover:brightness-50 self-center flex"
                      src={img.src}
                      alt={img.alt}
                      title={img.title}
                    />
                    <span className="absolute top-1/2 -translate-y-1/2 text-sm sm:text-base  px-5 py-2 md:text-xl lg:text-2xl text-nowrap left-1/2 z-20 hidden duration-300 group-hover:block ease-in-out text-white -translate-x-1/2">
                      <MdArrowForwardIos className="h-14 w-14 text-white" />
                    </span>
                  </div>
                  <div className="text-center lg:text-2xl font-OoohBaby tracking-wide group-hover:font-semibold mt-3">
                    {img.title}
                  </div>
                </div>
              </Link>
            );
          })}
          <div className=" hidden md:block flex-col flex-grow justify-end items-end h-full">
            <div className="flex mt-3 self-end">
              <img
                className="rotate-180"
                src="/bocni-srdecka.svg"
                alt="boční grafika srdcí"
              />
            </div>
            <div className="invisible">.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Offer;
