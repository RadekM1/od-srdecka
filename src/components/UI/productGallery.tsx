"use client";

import { ImgGallery } from "@/schema/uiObjects";
import LightBox from "./lightbox";
import { useState } from "react";
import Image from "next/image";
import LineAddPhotosBtn from "@/app/(ostatni)/galerie/lineAddPhotosBtn";

interface ProductGallery {
  gallery: ImgGallery[];
  productType: string;
}

const ProductGallery = ({ gallery, productType }: ProductGallery) => {
  const [activeId, setActiveId] = useState<number>(0);
  const [toggler, setToggler] = useState<boolean>(false);
  const [showAll, setShowAll] = useState<boolean>(false);

  const handleImgClick = (id: number) => {
    setActiveId(id);
    setToggler(true);
  };

  const filteredGallery = showAll
    ? gallery
    : gallery.slice(0, Math.floor(gallery.length / 2));

  return (
    <>
      <div className="flex flex-wrap gap-3 justify-center w-full">
        {filteredGallery.map((img, i) => {
          return (
            <div
              key={i}
              className={` ${productType === "cake" ? "w-[44%] md:w-[24%]" : "w-[30%] sm:w-[21%] md:w-[19%]"} 
            rounded-md hover:bg-gray-700/80 hover:ease-in-out hover:duration-300  hover:text-white flex flex-col  
            text-center`}
            >
              <div
                onClick={() => handleImgClick(i)}
                className="cursor-pointer group relative font-oldStandard w-full h-full object-cover"
              >
                <Image
                  className=" object-scale-down rounded-md h-max duration-300 ease-in-out group-hover:brightness-50 self-center flex"
                  src={img.thumbnail ?? "/"}
                  alt={img.alt}
                  width={500}
                  height={500}
                />
              </div>
            </div>
          );
        })}
        <LineAddPhotosBtn showAll={showAll} setShowAll={setShowAll} />
      </div>
      <LightBox
        input={gallery}
        active={activeId}
        toggler={toggler}
        setToggler={setToggler}
      />
    </>
  );
};
export default ProductGallery;
