'use client';
import Image from 'next/image';
import { useState } from 'react';

interface LineAddBtnProps {
  index: number;

  setIndex: (showAll: number) => void;
  label: string;
  // eslint-disable-next-line
  array: {}[];
  // eslint-disable-next-line
  filteredArray: {}[];
  addNumber: number;
}

const LineAddBtn = ({
  setIndex,
  label,
  array,
  filteredArray,
  addNumber
}: LineAddBtnProps) => {
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleClick = () => {
    if (array.length > filteredArray.length + addNumber) {
      setIndex(filteredArray.length + addNumber);
      return;
    }
    setDisabled(true);
    setIndex(array.length);
  };

  return (
    <div className="relative mb-14 mt-20 flex w-full max-w-[1000px] flex-col items-center">
      <img
        className="absolute top-1/2 w-full -translate-y-1/2"
        src="/others/line.svg"
        alt="oddělovací linka"
      />
      <button
        disabled={disabled}
        onClick={handleClick}
        className="absolute -top-1/2 z-10 -translate-y-1/2 rounded-full border-[1px] border-[#061E4C] bg-[#061E4C] px-3 py-1 font-dancing text-base text-white shadow-md shadow-gray-600 duration-300 ease-in-out hover:bg-white hover:text-[#061E4C] disabled:cursor-not-allowed disabled:bg-white disabled:text-gray-300 disabled:hover:bg-none disabled:hover:text-gray-300 md:text-xl"
      >
        {label}
      </button>
      <Image
        width={82}
        height={20}
        src="/others/srdicka-horizontalne.svg"
        alt="srdíčka"
        className="absolute top-8"
      />
    </div>
  );
};
export default LineAddBtn;
