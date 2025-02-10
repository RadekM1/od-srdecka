"use client";

import { GalleryCakeSectionsSchema } from "@/schema/cakes";
import Link from "next/link";
import { Fragment } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface CakeSectionProps {
  cakeSections: GalleryCakeSectionsSchema[];
}

const CakeSections = ({ cakeSections }: CakeSectionProps) => {
  const path = usePathname();
  console.log(path);

  return (
    <div className="flex items-center self-center text-center flex-row w-full">
      {cakeSections.map((section, i) => {
        return (
          <Fragment key={i}>
            <div
              className={` w-[80px]  md:w-[120px] h-[20px] items-center text-base md:text-xl lg:text-2xl absolute -top-8  md:-top-10  font-satisfy ${section.position} text-nowrap self-center text-center  flex flex-col`}
            >
              <Link
                className={` z-10 ${path === section.url ? "text-[#061E4C] " : "text-gray-400 hover:text-gray-500 duration-300 ease-in-out"}`}
                href={section.url}
              >
                {section.label}
              </Link>
              {path === section.url && (
                <span className="mt-[1px] absolute z-0 blur-[2px] opacity-65 text-gray-400 top-[2px]">
                  {section.label}
                </span>
              )}
              <Image
                width={82}
                height={20}
                src="/others/srdicka-horizontalne.svg"
                alt="srdíčka"
              />
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};
export default CakeSections;
