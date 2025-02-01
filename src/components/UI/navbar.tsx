"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import SwapBtn from "./swapBtn";
import MenuPopover from "./menuPopover";

const menuItems = [
  { label: "Úvod", link: "/", menu: null},
  { label: "O nás", link: "/", menu: null},
  { label: "Nabídka", link: "/", menu: ["Dorty", "Sladký bar"]},
  { label: "Galerie", link: "/", menu: null},
  { label: "Blog", link: "/", menu: null},
  { label: "Aktuality", link: "/", menu: null},
  { label: "Jak převážet?", link: "/", menu: null},
  { label: "Kontakt", link: "/", menu: null},
];

//{path === '/' ? 'je index' : 'není index, haha !'}

const Navbar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(false);
  let path = usePathname();
  return (
    <div className="w-full bg-[#061E4C] flex flex-row justify-center font-oldStandard">
      <div className="flex flex-row md:text-sm lg:text-base xl:text-xl mx-2 mt-4 w-full text-white">
        <div className="flex">
          <a href="/" target="_blank">
            <IoLogoInstagram className="h-8 w-8 mx-2 hover:text-white/40 hover:-translate-y-1 ease-in-out duration-500 text-white/60" />
          </a>
          <a href="/" target="_blank">
            <FaFacebook className="h-8 w-8 text-white/60 hover:text-white/40 hover:-translate-y-1 ease-in-out duration-500" />
          </a>
        </div>
        <menu className="flex w-full h-10 justify-end flex-row">
          {menuItems.map((item, i) => {
            return (
              <Link
                key={i}
                className="hover:text-white/60 ease-in-out duration-500"
                href={item.link}
              >
                <button 
                onClick={()=>{console.log(item.label)}}
                className="mx-2 lg:mx-3 hidden md:block self-center h-full">
                  {item.label}
                  {i === 3 && <MenuPopover />}
                </button>
              </Link>
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
      </div>
      <MobileMenu
        isSideNavOpen={isSideNavOpen}
        setIsSideNavOpen={setIsSideNavOpen}
      />
    </div>
  );
};
export default Navbar;
