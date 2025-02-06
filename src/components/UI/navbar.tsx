"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import SwapBtn from "./swapBtn";
import MenuPopover from "./menuPopover";
import { menuItems } from "../../../public/content/menu";


//{path === '/' ? 'je index' : 'není index, haha !'}

const Navbar = () => {
  const [popoverOpen, setPopoverOpen] = useState<boolean>(false)
  const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(false);
  const [targetedPopover, setTargetedPopover] = useState<number>(-1)
  let path = usePathname();
  return (
    <header className="w-full z-50 pb-2 fixed bg-[#061E4C] flex flex-row justify-center font-oldStandard">
      <nav className="flex sticky top-0 flex-row md:text-sm lg:text-base xl:text-xl mx-2 mt-2 w-full text-white">
        <div className="flex items-center h-full">
          <a href="#" target="_blank">
            <IoLogoInstagram className="h-8 w-8 mx-2 hover:text-white/40 hover:-translate-y-1 ease-in-out duration-500 text-white/60" />
          </a>
          <a href="#" target="_blank">
            <FaFacebook className="h-8 w-8 text-white/60 hover:text-white/40 hover:-translate-y-1 ease-in-out duration-500" />
          </a>
        </div>
        <menu className="flex w-full h-10 justify-end flex-row">
          {menuItems.map((item, i) => {
            const Component = item.menu ? "div" : Link
            return (
               <Component
                key={i}
                className="hover:text-white/60 ease-in-out duration-500"
                href={item.link || "#"} 
              >
                <button 
                onMouseOver={()=>{setTargetedPopover(i);setPopoverOpen(true)}}
                className="mx-2 lg:mx-3 hidden relative md:block self-center h-full">
                  {item.label}
                  <MenuPopover 
                  id={i} 
                  popoverOpen={popoverOpen} 
                  setPopoverOpen={setPopoverOpen} 
                  targetedPopover={targetedPopover}
                  menuItems={item.menu}
                  />
                </button>
              </Component>
            );
          })}
          <button className="text-base relative lg:text-xl hover:-translate-y-1 ease-in-out duration-500 bg-white/40 rounded-full hover:bg-white/20 px-3 ml-2 lg:px-5">
            Objednat
          </button>
          <SwapBtn
            isSideNavOpen={isSideNavOpen}
            setIsSideNavOpen={setIsSideNavOpen}
          />
        </menu>
      </nav>
      <MobileMenu
        isSideNavOpen={isSideNavOpen}
        setIsSideNavOpen={setIsSideNavOpen}
      />
    </header>
  );
};
export default Navbar;
