"use client";

import Image from "next/image";
import { DessertProductSchema } from "@/schema/desserts";
import Modal from "./modal";
import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

interface dessertProps {
  desserts: DessertProductSchema[];
}

const Desserts = ({ desserts }: dessertProps) => {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [dessertInModal, setDessertInModal] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean[]>(
    new Array(desserts.length).fill(false),
  );

  const handleModal = (i: number) => {
    setDessertInModal(i);
    setIsShowing(true);
  };

  const handleLoad = (i: number) => {
    setLoaded((prev) => {
      const tempLoaded = [...prev];
      tempLoaded[i] = true;
      return tempLoaded;
    });
  };

  return (
    <div className="flex flex-wrap gap-4 md:gap-6 justify-center max-w-[1000px] w-full">
      {desserts.map((dessert, i) => {
        return (
          <div
            key={i}
            onClick={() => handleModal(i)}
            className="border-[1px] mb-3 md:mb-6mb-3 md:mb-6 border-[#061E4C] cursor-pointer rounded-xl hover:bg-[#061E4C] hover:ease-in-out hover:duration-300  hover:text-white flex flex-col w-[30%] sm:w-[21%] md:w-[16%] p-2 text-center"
          >
            <div className=" group relative font-oldStandard w-full h-full object-cover">
              {!loaded[i] && (
                <div className="absolute inset-0 animate-pulse  bg-gray-200 max-h-[142px] rounded-md flex items-center h-full w-full justify-center"></div>
              )}
              <Image
                className="object-cover rounded-xl h-full max-h-[142px] w-full group-hover:brightness-50 self-center flex"
                src={dessert.src}
                alt={dessert.alt}
                title={dessert.title}
                width={500}
                onLoad={() => handleLoad(i)}
                height={500}
              />
              <span className="absolute top-1/2 -translate-y-1/2 text-sm sm:text-base  px-5 py-2 md:text-xl lg:text-2xl text-nowrap left-1/2 z-20 hidden duration-300 group-hover:block ease-in-out text-white -translate-x-1/2">
                <MdArrowForwardIos className="h-14 w-14 rotate-90 text-white" />
              </span>
            </div>
            <div className="font-dancing lg:text-2xl tracking-wide pt-2 self-center items-center flex">
              {dessert.title}
            </div>
            <div className="font-dancing tracking-wide pt-2 self-center items-center flex">
              {`${dessert.price} Kč`}
            </div>
          </div>
        );
      })}
      <Modal
        data={desserts[dessertInModal]}
        setIsShowing={setIsShowing}
        isShowing={isShowing}
      />
    </div>
  );
};
export default Desserts;
