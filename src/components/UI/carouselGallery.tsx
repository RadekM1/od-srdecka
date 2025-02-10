"use client";

import React, { useState, useMemo } from "react";
import { ImgGallery } from "../../schema/uiObjects";
import LightBox from "./lightbox";
import { RxVideo } from "react-icons/rx";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/UI/carousel";

interface CarouselProps {
  props: ImgGallery[];
}

const CarouselGallery = ({ props }: CarouselProps) => {
  const [activeId, setActiveId] = useState<number>(0);
  const [toggler, setToggler] = useState(false);

  const preparedGallery = useMemo(() => {
    const gallery = [];

    for (let i = 0; i < Math.floor(props?.length / 3); i++) {
      const j = i * 3;
      gallery[i] = {
        srcOne:
          props[j].media_type === "image"
            ? props[j].src
            : (props[j].thumbnail ?? "error"),
        typeOne: props[j].media_type,
        altOne: props[j].alt,
        srcTwo:
          props[j + 1].media_type === "image"
            ? props[j + 1].src
            : (props[j + 1].thumbnail ?? "error"),
        altTwo: props[j + 1].alt,
        typeTwo: props[j + 1].media_type,
        srcThree:
          props[j + 2].media_type === "image"
            ? props[j + 2].src
            : (props[j + 2].thumbnail ?? "error"),
        altThree: props[j + 2].alt,
        typeThree: props[j + 2].media_type,
      };
    }
    return gallery;
  }, [props]);

  const handleImgClick = (id: number) => {
    setActiveId(id);
    setToggler(true);
  };

  return (
    <>
      <Carousel className="w-full select-none items-center ">
        <CarouselContent className="w-full">
          {preparedGallery.map((img, i) => {
            return (
              <CarouselItem key={i} className="sm:basis-1/2 px-1 lg:basis-1/3">
                <div className="flex h-full flex-col">
                  <div
                    onClick={() => handleImgClick(i)}
                    className="flex group w-full hover:brightness-50 relative ease-in-out duration-300 cursor-pointer"
                  >
                    {img.typeOne === "video" && (
                      <div className="absolute w-10 h-10 right-0">
                        <RxVideo className="group-hover:text-gray-500 text-gray-300 h-8 w-8 duration-300 ease-in-out" />
                      </div>
                    )}
                    <Image
                      width={300}
                      height={320}
                      src={img.srcOne}
                      alt={img.altOne}
                      className="rounded-xl border-white object-cover carousel-img"
                      data-index={i * 3}
                      style={{ width: "500px", height: "320px" }}
                    />
                  </div>
                </div>
                <div style={{ width: "16px" }}>&nbsp;</div>
                <div className="flex h-[320px] flex-col">
                  <div
                    onClick={() => handleImgClick(i * 2)}
                    className="flex hover:brightness-50 w-full relative ease-in-out duration-300 cursor-pointer"
                  >
                    {img.typeTwo === "video" && (
                      <div className="absolute w-10 h-10 right-0">
                        <RxVideo className="group-hover:text-gray-500 text-gray-300 h-8 w-8 duration-300 ease-in-out" />
                      </div>
                    )}
                    <Image
                      width={250}
                      height={160}
                      src={img.srcTwo}
                      alt={img.altTwo}
                      className="rounded-xl object-cover carousel-img"
                      data-index={i * 3 + 1}
                      style={{ width: "500px", height: "156px" }}
                    />
                  </div>
                  <div className="h-[8px] text-white">&nbsp;</div>
                  <div
                    onClick={() => handleImgClick(i * 3)}
                    className="flex w-full relative hover:brightness-50 ease-in-out duration-300 flex-grow cursor-pointer"
                  >
                    {img.typeThree === "video" && (
                      <div className="absolute w-10 h-10 right-0">
                        <RxVideo className="group-hover:text-gray-500 text-gray-300 h-8 w-8 duration-300 ease-in-out" />
                      </div>
                    )}
                    <Image
                      width={250}
                      height={160}
                      src={img.srcThree}
                      alt={img.altThree}
                      className="rounded-xl h-full object-cover carousel-img"
                      data-index={i * 3 + 2}
                      style={{ width: "500px", height: "156px" }}
                    />
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      <LightBox
        input={props}
        active={activeId}
        toggler={toggler}
        setToggler={setToggler}
      />
    </>
  );
};

export default CarouselGallery;
