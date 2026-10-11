'use client';

import Image from 'next/image';
import LightBox from './lightbox';
import { useState } from 'react';
import { WpImageSchema } from '@/schema/article';

interface ArticleGalleryProps {
  firstImg: WpImageSchema;
  secondImg: WpImageSchema;
  thirdImg: WpImageSchema;
}

const ArticleGallery = ({
  firstImg,
  secondImg,
  thirdImg
}: ArticleGalleryProps) => {
  const [activeId, setActiveId] = useState<number>(0);
  const [toggler, setToggler] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean[]>(
    new Array([firstImg, secondImg, thirdImg].filter(Boolean).length).fill(
      false
    )
  );

  const handleImgClick = (i: number) => {
    setActiveId(i);
    setToggler(true);
  };

  const handleLoad = (i: number) => {
    setLoaded(prev => {
      const tempLoaded = [...prev];
      tempLoaded[i] = true;
      return tempLoaded;
    });
  };

  const filteredGallery: WpImageSchema[] = [
    firstImg,
    secondImg,
    thirdImg
  ].filter(Boolean);

  const preparedGallery = filteredGallery?.map(image => ({
    alt: image.alt,
    src: image.sizes.large,
    media_type: image.type,
    thumbnail: image.sizes.medium_large
  }));

  return (
    <>
      <div className="flex w-full flex-shrink flex-row gap-1 md:max-w-[250px] md:flex-col md:gap-3">
        {preparedGallery.map((image, i) => {
          return (
            <div
              key={i}
              onClick={() => handleImgClick(i)}
              className="relative w-full cursor-pointer flex-col items-start justify-start object-cover duration-300 ease-in-out hover:brightness-50"
            >
              {!loaded[i] && (
                <div className="absolute inset-0 flex h-full w-full animate-pulse items-center justify-center rounded-md bg-gray-200"></div>
              )}
              <Image
                height={368}
                onLoad={() => handleLoad(i)}
                width={350}
                className={`h-[150px] w-full self-start rounded-xl object-cover md:h-[250px] lg:h-[350px]`}
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
