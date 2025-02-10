"use client";

import Image from "next/image";
import { DessertProductSchema } from "@/schema/desserts";
import Modal from "./modal";
import { useState } from "react";

interface dessertProps {
  desserts: DessertProductSchema[];
}

const Desserts = ({ desserts }: dessertProps) => {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [dessertInModal, setDessertInModal] = useState<number>(0);

  const handleModal = (i: number) => {
    setDessertInModal(i);
    setIsShowing(true);
  };

  return (
    <div className="flex flex-wrap gap-4 md:gap-6 justify-center max-w-[1000px] w-full">
      {desserts.map((dessert, i) => {
        return (
          <div
            key={i}
            className="border-[1px] border-[#061E4C] rounded-xl hover:bg-[#061E4C] hover:ease-in-out hover:duration-300  hover:text-white flex flex-col w-[30%] sm:w-[21%] md:w-[16%] p-2 text-center"
          >
            <div
              onClick={() => handleModal(i)}
              className="cursor-pointer group relative font-oldStandard w-full h-full object-cover"
            >
              <Image
                className=" object-scale-down rounded-xl h-max duration-300 ease-in-out group-hover:brightness-50 self-center flex"
                src={dessert.src}
                alt={dessert.alt}
                title={dessert.title}
                width={500}
                height={500}
              />
              <span className="absolute top-1/2 -translate-y-1/2 text-sm sm:text-base bg-white/30 rounded-full px-5 py-2 md:text-xl lg:text-2xl text-nowrap left-1/2 z-20 hidden  group-hover:block duration-300 ease-in-out text-white -translate-x-1/2">
                Čti více
              </span>
            </div>
            <div className="font-dancing pt-2 self-center items-center flex">
              {dessert.title}
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
