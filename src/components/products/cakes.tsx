"use client";

import Image from "next/image";
import { CakeProductSchema } from "@/schema/cakes";
import Modal from "./modal";
import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

interface cakesProps {
  cakes: CakeProductSchema[];
}

const Cakes = ({ cakes }: cakesProps) => {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [cakeInModal, setCakeInModal] = useState<number>(0);

  const handleModal = (i: number) => {
    setCakeInModal(i);
    setIsShowing(true);
  };

  return (
    <div className="flex flex-wrap gap-4 md:gap-10 justify-center max-w-[1000px] w-full">
      {cakes.map((cake, i) => {
        return (
          <div
            key={i}
            className="border-[1px] border-[#061E4C] rounded-xl md:min-w-[250px] hover:bg-[#061E4C] hover:ease-in-out hover:duration-300  hover:text-white flex flex-col w-[45%] md:w-[30%] p-2 text-center"
          >
            <div
              onClick={() => handleModal(i)}
              className="cursor-pointer group relative font-oldStandard w-full h-full object-cover"
            >
              <Image
                className=" object-scale-down rounded-xl h-max duration-300 ease-in-out group-hover:brightness-50 self-center flex"
                src={cake.src}
                alt={cake.alt}
                title={cake.title}
                width={500}
                height={500}
              />
              <span className="absolute top-1/2 -translate-y-1/2 text-sm sm:text-base  px-5 py-2 md:text-xl lg:text-2xl text-nowrap left-1/2 z-20 hidden duration-300 group-hover:block ease-in-out text-white -translate-x-1/2">
                <MdArrowForwardIos className="h-14 w-14 rotate-90 text-white" />
              </span>
            </div>
            <div className="font-dancing pt-2 self-center items-center flex">
              {cake.title}
            </div>
          </div>
        );
      })}
      <Modal
        data={cakes[cakeInModal]}
        setIsShowing={setIsShowing}
        isShowing={isShowing}
      />
    </div>
  );
};
export default Cakes;
