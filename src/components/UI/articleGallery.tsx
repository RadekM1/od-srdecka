"use client";

import Image from "next/image";
import LightBox from "./lightbox";
import { useState } from "react";
import { WpImageSchema } from "@/schema/article";

interface ArticleGalleryProps {
  firstImg: WpImageSchema;
  secondImg: WpImageSchema;
  thirdImg: WpImageSchema;
}

const ArticleGallery = ({
  firstImg,
  secondImg,
  thirdImg,
}: ArticleGalleryProps) => {
  const [activeId, setActiveId] = useState<number>(0);
  const [toggler, setToggler] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean[]>(
    new Array([firstImg, secondImg, thirdImg].filter(Boolean).length).fill(
      false,
    ),
  );

  const handleImgClick = (i: number) => {
    setActiveId(i);
    setToggler(true);
  };

  const handleLoad = (i: number) => {
    setLoaded((prev) => {
      const tempLoaded = [...prev];
      tempLoaded[i] = true;
      return tempLoaded;
    });
  };

  const filteredGallery: WpImageSchema[] = [
    firstImg,
    secondImg,
    thirdImg,
  ].filter(Boolean);

  const preparedGallery = filteredGallery?.map((image) => ({
    alt: image.alt,
    src: image.sizes.large,
    media_type: image.type,
    thumbnail: image.sizes.medium_large,
  }));

  return (
    <>
      <div className="w-full gap-1 md:gap-3  flex-row md:flex-col flex flex-shrink md:max-w-[250px]">
        {preparedGallery.map((image, i) => {
          return (
            <div
              key={i}
              onClick={() => handleImgClick(i)}
              className="flex-col cursor-pointer relative w-full items-start justify-start hover:brightness-50 duration-300 ease-in-out object-cover"
            >
              {!loaded[i] && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-md flex items-center h-full w-full justify-center"></div>
              )}
              <Image
                height={368}
                onLoad={() => handleLoad(i)}
                width={350}
                className={`object-cover self-start h-[150px] md:h-[250px] lg:h-[350px] rounded-xl w-full`}
                src={image.thumbnail}
                alt={image.alt}
              />
            </div>
          );
        })}
      </div>
      <LightBox
        input={preparedGallery}
        active={activeId}
        toggler={toggler}
        setToggler={setToggler}
      />
    </>
  );
};
export default ArticleGallery;
