'use client';

import { ImgGallery } from '@/schema/uiObjects';
import LightBox from './lightbox';
import { useState } from 'react';
import Image from 'next/image';
import LineAddBtn from './lineAddBtn';

interface ProductGallery {
  gallery: ImgGallery[];
  productType: string;
}

const ProductGallery = ({ gallery, productType }: ProductGallery) => {
  const i = productType === 'dessert' ? 20 : 12;

  const [activeId, setActiveId] = useState<number>(0);
  const [toggler, setToggler] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(i);
  const [loaded, setLoaded] = useState<boolean[]>(
    new Array(gallery.length).fill(false)
  );

  const handleImgClick = (id: number) => {
    setActiveId(id);
    setToggler(true);
  };

  const handleLoad = (i: number) => {
    setLoaded(prev => {
      const tempLoaded = [...prev];
      tempLoaded[i] = true;
      return tempLoaded;
    });
  };

  const filteredGallery = gallery.slice(0, index);

  return (
    <>
      <div className="flex w-full flex-wrap justify-center gap-3">
        {filteredGallery.map((img, i) => {
          return (
            <div
              key={i}
              className={` ${productType === 'cake' ? 'w-[44%] md:w-[24%]' : 'w-[30%] sm:w-[21%]'} flex flex-col rounded-md text-center hover:bg-gray-700/80 hover:text-white hover:duration-300 hover:ease-in-out`}
            >
              <div
                onClick={() => handleImgClick(i)}
                className="group relative h-full w-full cursor-pointer object-cover font-oldStandard"
              >
                {!loaded[i] && (
                  <div className="absolute inset-0 flex h-full w-full animate-pulse items-center justify-center rounded-md bg-gray-200"></div>
                )}
                <Image
                  src={img.thumbnail}
                  alt={img.alt}
                  width={800}
                  height={800}
                  sizes="(max-width: 640px) 47vw, (max-width: 1024px) 33vw, 200px"
                  loading="lazy"
                  onLoad={() => handleLoad(i)}
                  className={`h-full w-full rounded-md object-cover transition-all duration-300 ease-in-out group-hover:brightness-50 ${loaded[i] ? 'opacity-100' : 'opacity-0'}`}
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
