"use client";
import Image from "next/image";

interface LineAddPhotosBtnProps {
  showAll: boolean;
  // eslint-disable-next-line
  setShowAll: (showAll: boolean) => void
}

const LineAddPhotosBtn = ({ showAll, setShowAll }: LineAddPhotosBtnProps) => {
  const handleClick = () => {
    setShowAll(true);
  };

  return (
    <div className="mt-20 mb-14 relative flex flex-col items-center w-full  max-w-[1000px]">
      <img
        className="absolute top-1/2 -translate-y-1/2 w-full"
        src="/others/line.svg"
        alt="oddělovací linka"
      />
      <button
        disabled={showAll}
        onClick={handleClick}
        className="bg-[#061E4C] hover:text-[#061E4C] disabled:bg-white duration-300 ease-in-out absolute -translate-y-1/2 -top-1/2 shadow-md disabled:hover:bg-none disabled:text-gray-300 disabled:hover:text-gray-300 disabled:cursor-not-allowed hover:bg-white border-[#061E4C] border-[1px] shadow-gray-600 rounded-full text-white text-base md:text-xl px-3 py-1 font-dancing z-10"
      >
        Chci vidět další fotky
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
export default LineAddPhotosBtn;
