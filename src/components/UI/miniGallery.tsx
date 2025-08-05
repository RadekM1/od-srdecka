import Link from "next/link";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";

interface MiniGalleryProps {
  item: {
    src: string;
    alt: string;
    title: string;
    link: string;
    sectionTitle: string;
    miniGallery: {
      src: string;
      alt: string;
      media_type: string;
    }[];
  };
  index: number;
}

const MiniGallery = ({ item, index }: MiniGalleryProps) => {
  return (
    <div className="max-w-[350px]  w-full  lg:mx-6 flex  justify-between flex-col">
      <div className="my-12 mt-8  mb-6">
        <span className="text-3xl md:text-4xl  lg:text-5xl font-dancing  w-full text-center">
          {/*// eslint-disable-next-line*/}
          {item.sectionTitle}
        </span>
      </div>

      <div className="inline-flex mb-24 md:px-5 h-full flex-col justify-center  w-full  items-center">
        <div className="flex relative justify-center items-center">
          <div className=" flex-col">
            <div className="h-full mb-2 relative group w-full">
              <Link href={item.link}>
                <Image
                  className=" object-scale-down rounded-xl max-w-[150px] sm:max-w-[240px] md:max-w-[320px] h-max duration-300 ease-in-out group-hover:brightness-50 self-center flex"
                  src={item.src}
                  alt={item.alt}
                  title={item.title}
                  width={500}
                  height={500}
                />
                <span className="absolute top-1/2 -translate-y-1/2 text-sm sm:text-base  px-5 py-2 md:text-xl lg:text-2xl text-nowrap left-1/2 z-20 hidden duration-300 group-hover:block ease-in-out text-white -translate-x-1/2">
                  <MdArrowForwardIos className="h-14 w-14 text-white" />
                </span>
              </Link>
            </div>
            <img
              src="/bocni-srdecka.svg"
              className={`w-10 hidden md:block absolute h-[70px] ${index === 0 ? "bottom-0 -left-[30px]" : "top-0 rotate-180 -right-[30px]"}`}
              alt="boční ikony srdíček"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MiniGallery;
