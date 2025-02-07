"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Glide from "@glidejs/glide";
import { ImgGallery } from "@/schema/uiObjects";
import LightBox from "./lightbox";
import { RxVideo } from "react-icons/rx";
import Image from "next/image";

interface CarouselProps {
  props: ImgGallery[];
}

const CarouselGallery = ({ props }: CarouselProps) => {
  const [activeId, setActiveId] = useState<number>(0);
  const [toggler, setToggler] = useState(false);

  const preparedGallery = useMemo(() => {
    let gallery = [];
    for (let i = 0; i < Math.floor(props?.length / 3); i++) {
      let j = i * 3;
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

  const handleImgClick = useCallback((input: number) => {
    setToggler((prev) => !prev);
    setActiveId(input);
  }, []);

  useEffect(() => {
    const slider2 = new Glide(".glide-01", {
      type: "carousel",
      focusAt: 0,
      perView: 3,
      animationDuration: 700,
      gap: 8,
      breakpoints: {
        1200: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    });

    const onClick = (event: Event) => {
      const target = event.target as HTMLElement;
      const img = target.closest(".carousel-img") as HTMLImageElement;
      if (img) {
        const index = parseInt(img.dataset.index || "0", 10);
        handleImgClick(index);
      }
    };

    document.querySelector(".glide-01")?.addEventListener("click", onClick);
    slider2.mount();

    return () => {
      slider2.destroy();
      document
        .querySelector(".glide-01")
        ?.removeEventListener("click", onClick);
    };
  }, [handleImgClick]);

  return (
    <div className="glide-01 relative w-full">
      <div className="overflow-hidden" data-glide-el="track">
        <div className="relative select-none flex w-full overflow-hidden">
          {preparedGallery.map((img, i) => (
            <div
              className="flex flex-row h-[320px] w-[500px] flex-none"
              key={i}
            >
              <div className="flex h-full flex-col">
                <div className="flex group w-full hover:brightness-50 relative ease-in-out duration-300 cursor-pointer">
                  {img.typeOne === "video" && (
                    <div className="absolute w-10 h-10 right-0">
                      <RxVideo className="group-hover:text-gray-500 text-gray-300 h-8 w-8 duration-300 ease-in-out" />
                    </div>
                  )}
                  <Image
                    width={300}
                    height={320}
                    src={`/${img.srcOne}`}
                    alt={img.altOne}
                    className="rounded-xl border-white object-cover carousel-img"
                    data-index={i * 3}
                    style={{ width: "500px", height: "320px" }}
                  />
                </div>
              </div>
              <div style={{ width: "16px" }}>&nbsp;</div>
              <div className="flex h-[320px] flex-col">
                <div className="flex hover:brightness-50 w-full relative ease-in-out duration-300 cursor-pointer">
                  {img.typeTwo === "video" && (
                    <div className="absolute w-10 h-10 right-0">
                      <RxVideo className="group-hover:text-gray-500 text-gray-300 h-8 w-8 duration-300 ease-in-out" />
                    </div>
                  )}
                  <Image
                    width={250}
                    height={160}
                    src={`/${img.srcTwo}`}
                    alt={img.altTwo}
                    className="rounded-xl object-cover carousel-img"
                    data-index={i * 3 + 1}
                    style={{ width: "500px", height: "156px" }}
                  />
                </div>
                <div className="h-[8px] text-white">&nbsp;</div>
                <div className="flex w-full relative hover:brightness-50 ease-in-out duration-300 flex-grow cursor-pointer">
                  {img.typeThree === "video" && (
                    <div className="absolute w-10 h-10 right-0">
                      <RxVideo className="group-hover:text-gray-500 text-gray-300 h-8 w-8 duration-300 ease-in-out" />
                    </div>
                  )}
                  <Image
                    width={250}
                    height={160}
                    src={`/${img.srcThree}`}
                    alt={img.altThree}
                    className="rounded-xl h-full object-cover carousel-img"
                    data-index={i * 3 + 2}
                    style={{ width: "500px", height: "156px" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <LightBox
        input={props}
        active={activeId}
        toggler={toggler}
        setToggler={setToggler}
      />
    </div>
  );
};

export default CarouselGallery;
