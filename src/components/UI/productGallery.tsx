"use client";

import { ImgGallery } from "@/schema/uiObjects";
import LightBox from "./lightbox";
import { useState } from "react";
import Image from "next/image";
import LineAddBtn from "./lineAddBtn";

interface ProductGallery {
  gallery: ImgGallery[];
  productType: string;
}

const ProductGallery = ({ gallery, productType }: ProductGallery) => {
  const i = productType === "dessert" ? 20 : 12;

  const [activeId, setActiveId] = useState<number>(0);
  const [toggler, setToggler] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(i);
  const [loaded, setLoaded] = useState<boolean[]>(
    new Array(gallery.length).fill(false),
  );

  const handleImgClick = (id: number) => {
    setActiveId(id);
    setToggler(true);
  };

  const handleLoad = (i: number) => {
    setLoaded((prev) => {
      const tempLoaded = [...prev];
      tempLoaded[i] = true;
      return tempLoaded;
    });
  };

  const filteredGallery = gallery.slice(0, index);

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
                {!loaded[i] && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-md flex items-center h-full w-full justify-center"></div>
                )}
                <Image
                  src={img.thumbnail}
                  alt={img.alt}
                  width={500}
                  height={500}
                  sizes="(max-width: 640px) 47vw, (max-width: 1024px) 33vw, 200px"
                  loading="lazy"
                  onLoad={() => handleLoad(i)}
                  className={`object-cover rounded-md h-full w-full transition-all duration-300 ease-in-out group-hover:brightness-50 
                  ${loaded[i] ? "opacity-100" : "opacity-0"}`}
                />
              </div>
            </div>
          );
        })}
        <LineAddBtn
          label="Chci vidět další fotky"
          index={index}
          setIndex={setIndex}
          array={gallery}
          filteredArray={filteredGallery}
          addNumber={999}
        />
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
