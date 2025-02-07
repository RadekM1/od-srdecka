"use client";

import { RefGallery } from "@/schema/uiObjects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/UI/carousel";

interface CarouselProps {
  props: RefGallery[];
}

const CarouselReference = ({ props }: CarouselProps) => {
  return (
    <div className="w-full h-full select-none flex justify-center">
      <Carousel className="w-full items-center ">
        <CarouselContent className="w-full">
          {props.map((img, i) => (
            <CarouselItem key={i} className="sm:basis-1/2 lg:basis-1/3">
              <div className="h-full w-full self-center  min-w-max min-h-[330px] flex justify-center items-center">
                <img
                  alt={`referenční obrázek č.${i}`}
                  src={img.src}
                  className="min-h-full max-h-[350px]"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute disabled:bg-gray-200 left-0 top-1/2 -translate-y-1/2 justify-center p-1 bg-gray-400 hover:bg-[#061E4C]/80 hover:text-white  rounded-full shadow-md " />
        <CarouselNext className="absolute disabled:bg-gray-200 right-0 top-1/2 -translate-y-1/2 bg-gray-400 p-1 justify-center rounded-full shadow-md hover:bg-[#061E4C]/80 hover:text-white " />
      </Carousel>
    </div>
  );
};

export default CarouselReference;
