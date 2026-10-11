'use client';

import { BlogSectionsSchema } from '@/schema/cakes';
import Link from 'next/link';
import { Fragment } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface BlogSectionProps {
  blogSections: BlogSectionsSchema[];
}

const BlogSections = ({ blogSections }: BlogSectionProps) => {
  const path = usePathname();

  return (
    <div className="flex w-full flex-row items-center self-center text-center">
      {blogSections.map((section, i) => {
        return (
          <Fragment key={i}>
            <div
              className={`absolute -top-8 h-[20px] w-[80px] items-center font-dancing text-base md:-top-10 md:w-[120px] md:text-xl lg:text-2xl ${section.position} flex flex-col self-center text-nowrap text-center`}
            >
              <Link
                className={`z-10 ${path === section.url ? 'text-[#061E4C]' : 'text-gray-400 duration-300 ease-in-out hover:text-gray-500'}`}
                href={section.url}
              >
                {section.label}
              </Link>
              {path === section.url && (
                <span className="absolute top-[2px] z-0 mt-[1px] text-gray-400 opacity-65 blur-[2px]">
                  {section.label}
                </span>
              )}
              {path === section.url && (
                <Image
                  width={82}
                  height={20}
                  src="/others/srdicka-horizontalne.svg"
                  alt="srdíčka"
                />
              )}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};
export default BlogSections;
