import SectionTitle from "../sectionTitle";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import { getIndexImages } from "@/lib/fetch/get-index-images";
import Image from "next/image";

const fetchedImages = await getIndexImages()

const OfferImg = [
  {
    src: fetchedImages.filter((image)=>image.imgType === 'dorty')[0].img.sizes.medium_large,
    title: "Dorty",
    alt: "obrázek dortu",
    link: "/nabidka/dorty",
  },
  {
    src: fetchedImages.filter((image)=>image.imgType === 'dezerty')[0].img.sizes.medium_large,
    title: "Dezerty",
    alt: "obrázek sladkého baru",
    link: "/nabidka/dezerty",
  },
];

const BlogImg = [
  {
    src: fetchedImages.filter((image)=>image.imgType === 'recepty')[0].img.sizes.medium_large,
    title: "Recepty",
    alt: "obrázek receptu",
    link: "/blog/bezlepkove-recepty-sladke",
  },
  {
    src: fetchedImages.filter((image)=>image.imgType === 'dotazy')[0].img.sizes.medium_large,
    title: "Nejčastější dotazy",
    alt: "obrázek nejčastější dotaz",
    link: "/dotazy",
  },
];

const Offer = () => {
  return (
    <div className="flex flex-col mb-24 text-xl max-w-6xl w-full text-center justify-center gap-6 lg:gap-10 px-6 self-center items-start md:flex-row">
      <div className="relative flex-col  justify-center flex w-full h-full">
        <SectionTitle indexPage={true} title="Naše nabídka" />
        <img
          src="/pozadi-text/peceme-od-srdecka.svg"
          className="absolute hidden lg:block top-[120px] -z-10"
          alt="pozadí text pečeme od srdéčka"
        />
        <div className="flex z-10 justify-center items-end w-full flex-row ">
          <div className="gap-6 lg:gap-10 h-full w-full flex justify-center flex-row">
            {OfferImg.map((img, i) => {
            return (
              <Link href={img.link} key={i}>
                <div className="flex h-full group flex-col justify-center w-full  items-center">
                  <div className="relative h-full w-full">
                    <Image
                      className="duration-300 rounded-xl ease-in-out h-full group-hover:brightness-50 self-center flex"
                      src={img.src}
                      alt={img.alt}
                      title={img.title}
                      width={500}
                      height={500}
                    />
                    {i === 0 && (<div className=" hidden md:block absolute -left-5 xl:-left-8 bottom-0 flex-col justify-end items-end h-[70px] w-[19px]">
                      <img className="h-full w-full" src="/bocni-srdecka.svg" alt="boční grafika srdcí" />
                    </div>)}
                    <span className="absolute top-1/2  -translate-y-1/2 text-sm sm:text-base  px-5 py-2 md:text-xl lg:text-2xl text-nowrap left-1/2 z-20 hidden duration-300 group-hover:block ease-in-out text-white -translate-x-1/2">
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
      </div>
      <div className="relative flex-col  justify-center flex w-full h-full">
        <SectionTitle indexPage={true} title="Sladký blog" />
        <div className="flex z-10 relative justify-center items-end w-full flex-row ">
          <div className=" hidden md:block absolute -right-5 xl:-right-8 top-0 flex-col justify-end items-end h-[70px] w-[19px]">
              <img className="h-full rotate-180 w-full" src="/bocni-srdecka.svg" alt="boční grafika srdcí" />
          </div>
          <div className="gap-6 lg:gap-10 h-full w-full flex justify-center flex-row">
            {BlogImg.map((img, i) => {
            return (
              <Link href={img.link} key={i}>
                <div className="flex h-full group flex-col justify-center w-full  items-center">
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      className="duration-300 rounded-xl ease-in-out h-full group-hover:brightness-50 self-center flex"
                      src={img.src}
                      alt={img.alt}
                      title={img.title}
                      width={500}
                      height={500}
                    />
                    <span className="absolute top-1/2  -translate-y-1/2 text-sm sm:text-base  px-5 py-2 md:text-xl lg:text-2xl text-nowrap left-1/2 z-20 hidden duration-300 group-hover:block ease-in-out text-white -translate-x-1/2">
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
      </div>
    </div>
  );
};
export default Offer;
