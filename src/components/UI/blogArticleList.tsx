"use client";

import { useState } from "react";
import Image from "next/image";
import LineAddBtn from "./lineAddBtn";
import Link from "next/link";
import { ArticlesListSchema } from "@/schema/article";
import { usePathname } from "next/navigation";

interface ProductGallery {
  blogList: ArticlesListSchema[];
  section: string;
}

const BlogArticleList = ({ blogList, section }: ProductGallery) => {
  const path = usePathname();
  const [index, setIndex] = useState<number>(6);
  const currentId: number = parseInt(path.split("--")[1]) ?? -1;
  const filteredArticles = blogList
    .filter((article) => article.id !== currentId)
    .slice(0, index);

  return (
    <>
      <div className="flex self-center items-center w-full justify-center flex-wrap gap-3">
        {filteredArticles.map((article, i) => {
          return (
            <div
              key={i}
              className="w-[47%] md:w-[32%] h-full group font-dancing border-[1px] border-[#061E4C] rounded-2xl hover:bg-[#061E4C] hover:ease-in-out hover:duration-300  hover:text-white flex flex-col  text-center"
            >
              <Link
                href={`/blog/${section}/${article.slug}`}
                className="cursor-pointer relative min-h-full p-3 w-full h-full object-cover"
              >
                <Image
                  className=" rounded-2xl h-32 lg:h-60 object-cover duration-300 ease-in-out group-hover:brightness-50 self-center flex"
                  src={article.thumbnailSrc ?? "/"}
                  alt={article.thumbnailAlt ?? ""}
                  width={500}
                  height={500}
                  loading="eager"
                  priority={true}
                />
                <div className="px-5 text-xl md:text-2xl hidden group-hover:block absolute rounded-full   -translate-y-1/2 right-1/2 translate-x-1/2 text-white font-oldStandard top-1/2 py-2 bg-white/30">
                  Čti více
                </div>
                <span className="text-[#061E4C] group-hover:text-white font pb-2">
                  {article.title}
                </span>
              </Link>
            </div>
          );
        })}
        <LineAddBtn
          label="Chci další recepty"
          index={index}
          setIndex={setIndex}
          array={blogList}
          filteredArray={filteredArticles}
          addNumber={6}
        />
      </div>
    </>
  );
};
export default BlogArticleList;
