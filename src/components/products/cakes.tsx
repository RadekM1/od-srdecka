'use client';

import Image from 'next/image';
import { CakeProductSchema } from '@/schema/cakes';
import Modal from './modal';
import { useState } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

interface cakesProps {
  cakes: CakeProductSchema[];
}

const Cakes = ({ cakes }: cakesProps) => {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [cakeInModal, setCakeInModal] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean[]>(
    new Array(cakes.length).fill(false)
  );

  const handleLoad = (i: number) => {
    setLoaded(prev => {
      const tempLoaded = [...prev];
      tempLoaded[i] = true;
      return tempLoaded;
    });
  };

  const handleModal = (i: number) => {
    setCakeInModal(i);
    setIsShowing(true);
  };

  return (
    <div className="flex w-full max-w-[1000px] flex-wrap justify-center gap-4 px-1 md:gap-10">
      {cakes.map((cake, i) => {
        return (
          <div
            key={i}
            className="mb-3 flex w-[45%] flex-col rounded-xl border-[1px] border-[#061E4C] p-2 text-center hover:bg-[#061E4C] hover:text-white hover:duration-300 hover:ease-in-out md:mb-6 md:w-[30%] md:min-w-[250px]"
          >
            <div
              onClick={() => handleModal(i)}
              className="group relative h-full w-full cursor-pointer object-cover font-oldStandard"
            >
              {!loaded[i] && (
                <div className="absolute inset-0 flex h-full w-full animate-pulse items-center justify-center rounded-md bg-gray-200"></div>
              )}
              <Image
                className="flex h-[250px] w-full self-center rounded-xl object-cover duration-300 ease-in-out group-hover:brightness-50"
                src={cake.src}
                alt={cake.alt}
                title={cake.title}
                onLoad={() => handleLoad(i)}
                width={500}
                height={500}
              />
              <span className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 text-nowrap px-5 py-2 text-sm text-white duration-300 ease-in-out group-hover:block sm:text-base md:text-xl lg:text-2xl">
                <MdArrowForwardIos className="h-14 w-14 rotate-90 text-white" />
              </span>
            </div>
            <div className="flex items-center self-center pt-2 font-dancing text-xl lg:text-2xl">
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
