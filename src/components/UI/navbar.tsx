"use client";
import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import SwapBtn from "./swapBtn";
import MenuPopover from "./menuPopover";
import { menuItems } from "../../../public/content/menu";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  const [popoverOpen, setPopoverOpen] = useState<boolean>(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(false);
  const [targetedPopover, setTargetedPopover] = useState<number>(-1);

  return (
    <header className="w-full h-14 z-40 pb-2 fixed bg-[#061E4C] flex flex-row justify-center font-oldStandard">
      <nav className="flex sticky top-0 flex-row md:text-sm lg:text-base xl:text-xl mx-2 mt-2 w-full text-white">
        <div className="flex items-center h-full">
          {path !== "/" && (
            <Link className="mx-2" href={"/"}>
              <img
                className="h-14  mr-3 sm:mr-0 lg:p-1 w-14"
                src={"/logoMain.svg"}
              ></img>
            </Link>
          )}
          <a href="https://www.instagram.com/odsrdecka/" target="_blank">
            <IoLogoInstagram className="h-8 w-8 mx-2 hover:text-white/40 hover:-translate-y-1 ease-in-out duration-500 text-white/60" />
          </a>
        </div>
        <menu className="flex self-center w-full h-10 justify-end flex-row">
          {menuItems.map((item, i) => {
            const Component = item.menu ? "div" : Link;
            return (
              <Component
                key={i}
                className="hover:text-white/60 ease-in-out duration-500"
                href={item.link || "#"}
              >
                <button
                  onMouseOver={() => {
                    setTargetedPopover(i);
                    setPopoverOpen(true);
                  }}
                  className="mx-2 lg:mx-3 hidden relative md:block self-center h-full"
                >
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
          <Link legacyBehavior href="/kontakt/objednavkovy-formular">
            <button className="text-base relative lg:text-xl hover:-translate-y-1 ease-in-out duration-500 bg-white/40 rounded-full hover:bg-white/20 px-3 ml-2 lg:px-5">
              Objednat
            </button>
          </Link>
          <SwapBtn
            isSideNavOpen={isSideNavOpen}
            setIsSideNavOpen={setIsSideNavOpen}
          />
        </menu>
        <MobileMenu
          isSideNavOpen={isSideNavOpen}
          setIsSideNavOpen={setIsSideNavOpen}
        />
      </nav>
    </header>
  );
};
export default Navbar;
