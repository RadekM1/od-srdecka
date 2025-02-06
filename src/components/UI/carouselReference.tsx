"use client";

import { RefGallery } from "@/schema/uiObjects";
import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

interface CarouselProps {
  props: RefGallery[];
}

const CarouselControlsInside = ({ props }: CarouselProps) => {
  useEffect(() => {
    const slider2 = new Glide(".glide-02", {
      type: "carousel",
      focusAt: "center",
      perView: 4,
      animationDuration: 700,
      gap: 8,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 3,
        },
        640: {
          perView: 2,
        },
      },
    }).mount();

    return () => {
      slider2.destroy();
    };
  }, []);

  return (
    <>
      <div className="glide-02 relative w-full flex self-center">
        <div className="overflow-hidden " data-glide-el="track">
          <div className="whitespace-no-wrap select-none flex-no-wrap flex [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            {props.map((img, i) => {
              return (
                <div key={i}>
                  <img src={img.src} className="m-auto  max-h-[350px]" />
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex items-center translate-x-0 md:-translate-x-16 xl:-translate-x-20 justify-center  text-gray-400 md:text-gray-300 transition duration-300  hover:text-[#061E4C]"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <IoIosArrowDropleftCircle className="h-12 w-12" />
          </button>
          <button
            className="inline-flex translate-x-0 md:translate-x-16 xl:translate-x-20 items-center justify-center  text-gray-400 md:text-gray-300 transition duration-300  hover:text-[#061E4C]"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <IoIosArrowDroprightCircle className="h-12 w-12" />
          </button>
        </div>
      </div>
    </>
  );
};
export default CarouselControlsInside;
