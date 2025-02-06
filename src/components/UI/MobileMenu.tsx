"use client";

import React from "react";
import { menuItems } from "../../../public/content/menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/UI/accordion";
import Link from "next/link";

interface MobileMenuProps {
  isSideNavOpen: boolean;
  // eslint-disable-next-line
  setIsSideNavOpen: (isSideNavOpen: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isSideNavOpen,
  setIsSideNavOpen,
}) => {
  return (
    <>
      <aside
        id="nav-menu-4"
        aria-label="Side navigation"
        className={`top-[56px] fixed h-full bg-[#061E4C] backdrop-blur-sm left-0 z-40 flex lg:hidden w-72 flex-col border-r border-r-white/30 transition-transform lg:translate-x-0 ${
          isSideNavOpen ? "translate-x-0" : " -translate-x-full"
        }`}
      >
        <nav
          aria-label="side navigation"
          className="flex-1 divide-y text-white font-oldStandard text-base divide-slate-100 overflow-auto"
        >
          <Accordion type="single" collapsible>
            {menuItems.map((item, i) => {
              if (!item.menu) {
                return (
                  <Link
                    key={i}
                    className="flex flex-1 mx-4 border-b-0  items-center justify-between py-4 font-medium transition-all hover:text-gray-200 [&[data-state=open]>img]:rotate-180"
                    href={item.link}
                  >
                    {item.label}
                  </Link>
                );
              }
              if (item.menu) {
                const tempMenu = item.menu;
                return (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger>{item.label}</AccordionTrigger>
                    <AccordionContent>
                      {tempMenu.map((innerItem, j) => {
                        return (
                          <div key={j} className="flex flex-col gap-2 my-4">
                            <Link
                              className="self-start text-base hover:font-semibold mx-4 "
                              href={innerItem.link}
                            >
                              {innerItem.label}
                            </Link>
                          </div>
                        );
                      })}
                    </AccordionContent>
                  </AccordionItem>
                );
              }
            })}
          </Accordion>
        </nav>
      </aside>
      <div
        className={`fixed top-0 bottom-0 backdrop-blur-sm bg-gray-700/80 mt-[56px] left-0 right-0 z-30 transition-colors lg:hidden ${
          isSideNavOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsSideNavOpen(false)}
      ></div>
    </>
  );
};
export default MobileMenu;
