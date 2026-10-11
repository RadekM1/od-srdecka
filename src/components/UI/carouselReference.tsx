'use client';

import { RefGallery } from '../../schema/uiObjects';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../../components/UI/carousel';

interface CarouselProps {
  props: RefGallery[];
}

const CarouselReference = ({ props }: CarouselProps) => {
  return (
    <div className="flex h-full w-full select-none justify-center">
      <Carousel className="w-full items-center">
        <CarouselContent className="w-full">
          {props.map((img, i) => (
            <CarouselItem key={i} className="px-2 sm:basis-1/2 lg:basis-1/3">
              <div className="flex h-full min-h-[330px] w-full min-w-max items-center justify-center self-center">
                <img
                  alt={`referenční obrázek č.${i}`}
                  src={img.src}
                  className="max-h-[350px] min-h-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 justify-center rounded-full bg-gray-400 p-1 shadow-md hover:bg-[#061E4C]/80 hover:text-white disabled:bg-gray-200" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 justify-center rounded-full bg-gray-400 p-1 shadow-md hover:bg-[#061E4C]/80 hover:text-white disabled:bg-gray-200" />
      </Carousel>
    </div>
  );
};

export default CarouselReference;
