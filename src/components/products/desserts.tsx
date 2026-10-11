'use client';

import Image from 'next/image';
import { DessertProductSchema } from '@/schema/desserts';
import Modal from './modal';
import { useState } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

interface dessertProps {
  desserts: DessertProductSchema[];
}

const Desserts = ({ desserts }: dessertProps) => {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [dessertInModal, setDessertInModal] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean[]>(
    new Array(desserts.length).fill(false)
  );

  const handleModal = (i: number) => {
    setDessertInModal(i);
    setIsShowing(true);
  };

  const handleLoad = (i: number) => {
    setLoaded(prev => {
      const tempLoaded = [...prev];
      tempLoaded[i] = true;
      return tempLoaded;
    });
  };

  return (
    <div className="flex w-full max-w-[1000px] flex-wrap justify-center gap-4 md:gap-6">
      {desserts.map((dessert, i) => {
        return (
          <div
            key={i}
            onClick={() => handleModal(i)}
            className="md:mb-6mb-3 mb-3 flex w-[30%] cursor-pointer flex-col rounded-xl border-[1px] border-[#061E4C] p-2 text-center hover:bg-[#061E4C] hover:text-white hover:duration-300 hover:ease-in-out sm:w-[21%] md:mb-6 md:w-[16%]"
          >
            <div className="group relative h-full w-full object-cover font-oldStandard">
              {!loaded[i] && (
                <div className="absolute inset-0 flex h-full max-h-[142px] w-full animate-pulse items-center justify-center rounded-md bg-gray-200"></div>
              )}
              <Image
                className="flex h-full max-h-[142px] w-full self-center rounded-xl object-cover group-hover:brightness-50"
                src={dessert.src}
                alt={dessert.alt}
                title={dessert.title}
                width={500}
                onLoad={() => handleLoad(i)}
                height={500}
              />
              <span className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 text-nowrap px-5 py-2 text-sm text-white duration-300 ease-in-out group-hover:block sm:text-base md:text-xl lg:text-2xl">
                <MdArrowForwardIos className="h-14 w-14 rotate-90 text-white" />
              </span>
            </div>
            <div className="flex items-center self-center pt-2 font-dancing tracking-wide lg:text-2xl">
              {dessert.title}
            </div>
            <div className="flex items-center self-center pt-2 font-dancing tracking-wide">
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
