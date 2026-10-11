'use client';

import { useState } from 'react';
import Image from 'next/image';
import LineAddBtn from './lineAddBtn';
import Link from 'next/link';
import { ArticlesListSchema } from '@/schema/article';
import { usePathname } from 'next/navigation';
import { MdArrowForwardIos } from 'react-icons/md';

interface ProductGallery {
  blogList: ArticlesListSchema[];
  section: string;
}

const BlogArticleList = ({ blogList, section }: ProductGallery) => {
  const path = usePathname();
  const [index, setIndex] = useState<number>(6);
  const currentId: number = parseInt(path.split('--')[1]) ?? -1;
  const filteredArticles = blogList
    .filter(article => article.id !== currentId)
    .slice(0, index);

  const [loaded, setLoaded] = useState<boolean[]>(
    new Array(blogList.length).fill(false)
  );

  const handleLoad = (i: number) => {
    setLoaded(prev => {
      const tempLoaded = [...prev];
      tempLoaded[i] = true;
      return tempLoaded;
    });
  };

  return (
    <>
      <div className="flex w-full flex-wrap items-center justify-center gap-3 self-center md:gap-5 lg:gap-7">
        {filteredArticles.map((article, i) => {
          return (
            <div
              key={i}
              className="group mb-5 flex h-full min-h-full w-[47%] flex-col self-start rounded-2xl border-[1px] border-[#061E4C] text-center font-dancing hover:bg-[#061E4C] hover:text-white hover:duration-500 hover:ease-in-out md:w-[30%] lg:mb-8"
            >
              <Link
                href={`/blog/${section}/${article.slug}`}
                className="h-full min-h-full w-full cursor-pointer object-cover p-3"
              >
                <div className="relative h-full w-full">
                  {!loaded[i] && (
                    <div className="absolute inset-0 flex h-full w-full animate-pulse items-center justify-center rounded-md bg-gray-200"></div>
                  )}
                  <Image
                    className={`relative mb-1 flex h-32 self-center rounded-2xl object-cover duration-300 ease-in-out group-hover:brightness-50 lg:h-60 ${loaded[i] ? 'opacity-100' : 'opacity-0'}`}
                    src={article.thumbnailSrc ?? '/'}
                    alt={article.thumbnailAlt ?? ''}
                    width={500}
                    height={500}
                    loading="eager"
                    onLoad={() => handleLoad(i)}
                    priority={true}
                  />
                  <span className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 text-nowrap px-5 py-2 text-sm text-white duration-300 ease-in-out group-hover:block sm:text-base md:text-xl lg:text-2xl">
                    <MdArrowForwardIos className="h-14 w-14 text-white" />
                  </span>
                </div>

                <div className="min-h-[70px] text-[#061E4C] group-hover:text-white lg:text-2xl">
                  {article.title}
                </div>
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
