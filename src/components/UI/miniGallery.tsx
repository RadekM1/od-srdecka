"use client";

import Link from "next/link";
import Image from "next/image";
import LightBox from "./lightbox";
import { useState } from "react";

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
  const [activeId, setActiveId] = useState<number>(0);
  const [toggler, setToggler] = useState<boolean>(false);

  const handleImgClick = (i: number) => {
    setActiveId(i);
    setToggler(true);
  };

  return (
    <div className="max-w-[350px]  w-full  mx-6 flex  justify-between flex-col">
      <div className="my-12 mt-8  mb-6">
        <span className="text-3xl md:text-4xl  lg:text-5xl font-satisfy  w-full text-center">
          {item.sectionTitle}
        </span>
      </div>

      <div className="inline-flex   h-full flex-col justify-center  w-full  items-center">
        <div className="flex relative justify-center items-center">
          <div className=" flex-col">
            <div className="h-full mb-2 relative group w-full">
              <Link href={item.link}>
                <Image
                  className=" object-scale-down rounded-xl md:max-w-[350px] h-max duration-300 ease-in-out group-hover:brightness-50 self-center flex"
                  src={item.src}
                  alt={item.alt}
                  title={item.title}
                  width={500}
                  height={500}
                />

                <span className="absolute top-1/2 -translate-y-1/2 text-sm sm:text-base bg-white/30 rounded-full px-3 py-2 md:text-xl lg:text-2xl text-nowrap left-1/2 z-20 hidden  group-hover:block ease-in-out text-white -translate-x-1/2">
                  Otevřít celou galerii{" "}
                </span>
              </Link>
            </div>
            <div className="h-full gap-2 flex-row flex w-full">
              <div className="object-cover">
                <Image
                  className=" h-full hover:cursor-pointer duration-300 ease-in-out rounded-xl  hover:brightness-50 self-center"
                  src={item.miniGallery[0].src}
                  alt={item.alt}
                  title={item.title}
                  width={500}
                  height={500}
                  onClick={() => handleImgClick(0)}
                />
              </div>
              <div className="flex gap-2 object-cover h-full flex-col">
                <Image
                  className="  rounded-xl h-max hover:cursor-pointer duration-300 ease-in-out   hover:brightness-50 self-center flex"
                  src={item.miniGallery[1].src}
                  alt={item.alt}
                  title={item.title}
                  width={500}
                  height={500}
                  onClick={() => handleImgClick(1)}
                />
                <Image
                  className="  rounded-xl hover:cursor-pointer  h-max duration-300 ease-in-out  hover:brightness-50 self-center flex"
                  src={item.miniGallery[2].src}
                  alt={item.alt}
                  title={item.title}
                  width={500}
                  height={500}
                  onClick={() => handleImgClick(2)}
                />
              </div>
            </div>
            <img
              src="/bocni-srdecka.svg"
              className={`w-10 hidden md:block absolute h-[70px] ${index === 0 ? "bottom-0 -left-[30px]" : "top-0 rotate-180 -right-[30px]"}`}
              alt="boční ikony srdíček"
            />
          </div>
        </div>
      </div>
      <LightBox
        input={item.miniGallery}
        active={activeId}
        toggler={toggler}
        setToggler={setToggler}
      />
    </div>
  );
};
export default MiniGallery;
