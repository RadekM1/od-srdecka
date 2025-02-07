"use client";

import { RefGallery } from "@/schema/uiObjects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

interface CarouselProps {
  props: RefGallery[];
}

const CarouselControlsInside = ({ props }: CarouselProps) => {
  return (
    <div className="w-full h-full select-none flex justify-center">
      <Carousel className="w-full">
        <CarouselContent className="w-full">
          {props.map((img, i) => (
            <CarouselItem key={i} className="basis-1/2 md:basis-1/2 lg:basis-1/3">
              <div className="h-full min-w-max min-h-[330px] flex justify-center items-center">
                <img
                  alt={`referenční obrázek č.${i}`}
                  src={img.src}
                  className="m-auto min-h-full max-h-[350px]"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 hover:bg-[#061E4C]/80 hover:text-white bg-white/70 p-2 rounded-full shadow-md ">
          <IoIosArrowDropleftCircle size={40} className="text-gray-700" />
        </CarouselPrevious>

        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md hover:bg-[#061E4C]/80 hover:text-white ">
          <IoIosArrowDroprightCircle
            size={40}
            className="text-gray-700 w-6 h-6"
          />
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default CarouselControlsInside;
