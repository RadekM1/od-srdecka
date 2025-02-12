"use client";

import { ImgGallery } from "@/schema/uiObjects";
import { useState } from "react";
import Image from "next/image";
import LineAddPhotosBtn from "@/app/(ostatni)/galerie/lineAddPhotosBtn";
import Link from "next/link";

interface ProductGallery {
  gallery: ImgGallery[];
}

const BlogGallery = ({ gallery }: ProductGallery) => {
  const [showAll, setShowAll] = useState<boolean>(false);

  const handleImgClick = () => {
    console.log("this should be deleted and replacet by Link over img");
  };

  const filteredGallery = showAll
    ? gallery
    : gallery.slice(0, Math.floor(gallery.length / 2));

  return (
    <>
      <div className="flex  flex-wrap gap-3 justify-between w-full">
        {filteredGallery.map((img, i) => {
          return (
            <div
              key={i}
              className="w-[44%] md:w-[32%]  group font-dancing border-[1px] border-[#061E4C] rounded-2xl hover:bg-[#061E4C] hover:ease-in-out hover:duration-300  hover:text-white flex flex-col  text-center"
            >
              <div
                onClick={() => handleImgClick(i)}
                className="cursor-pointer  relative  p-3 w-full h-full object-cover"
              >
                <Image
                  className=" object-scale-down rounded-2xl h-max duration-300 ease-in-out group-hover:brightness-50 self-center flex"
                  src={img.thumbnail ?? "/"}
                  alt={img.alt}
                  width={500}
                  height={500}
                  loading="eager"
                  priority={true}
                />
                <Link
                  className="px-5 text-xl md:text-2xl hidden group-hover:block absolute rounded-full   -translate-y-1/2 right-1/2 translate-x-1/2 text-white font-oldStandard top-1/2 py-2 bg-white/30"
                  href={"#"}
                >
                  Čti více
                </Link>
              </div>

              <span className="text-[#061E4C] group-hover:text-white font pb-2">
                Indická zmrzlina Kufli
              </span>
            </div>
          );
        })}
        <LineAddPhotosBtn
          label="Chci další recepty"
          showAll={showAll}
          setShowAll={setShowAll}
        />
      </div>
    </>
  );
};
export default BlogGallery;
