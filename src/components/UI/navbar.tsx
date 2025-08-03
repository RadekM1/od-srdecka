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

  const mainPath: string =
    path.split("/")[1].length > 2 ? path.split("/")[1] : "index";

  return (
    <header className="w-full h-14 z-40 items-center fixed bg-[#061E4C] flex flex-row justify-center font-oldStandard">
      <nav
        role="navigaton"
        className="flex sticky items-center justify-center top-0 flex-row text-xl mx-2 w-full text-white"
      >
        <ul className="flex self-center align-middle items-center h-full">
          {path !== "/" && (
            <li className="self-center h-full justify-center items-center flex text-center">
              <Link
                className="mx-2"
                href={"/"}
                aria-label="Přejít na domovskou stránku"
              >
                <img
                  className="h-14  mr-3 sm:mr-0 lg:p-1 w-14"
                  src={"/logoMain.svg"}
                  alt="logo"
                ></img>
              </Link>
            </li>
          )}
          <a href="https://www.instagram.com/odsrdecka/" target="_blank">
            <IoLogoInstagram
              aria-label="Přejít na instagram webu"
              className="h-8 w-8 mx-2 hover:text-white/40 hover:-translate-y-1 ease-in-out duration-500 text-white/60"
            />
          </a>
        </ul>
        <menu className="flex self-center text-nowrap items-center w-full h-full justify-end flex-row">
          <ul className="h-full flex flex-row">
            {menuItems.map((item, i) => {
              return (
                <li key={i} className="w-full h-full flex flex-row">
                  <div
                    className={`hover:text-gray-400 self-center h-full cursor-pointer items-center ease-in-out duration-500`}
                    onClick={() => setPopoverOpen(false)}
                  >
                    <ul
                      onMouseOver={() => {
                        setTargetedPopover(i);
                        setPopoverOpen(true);
                      }}
                      className="mx-2 lg:mx-3 hidden relative md:block self-center h-full"
                    >
                      <Link
                        className={`${
                          (path.startsWith(item.link) &&
                            item.link.length > 2) ||
                          (item.link === "/" && path === "/") ||
                          (path === "/blog/bezlepkove-recepty-ostatni" &&
                            item.link === "/blog/bezlepkove-recepty-sladke")
                            ? "text-gray-400"
                            : ""
                        }`}
                        href={item.link}
                      >
                        {item.label}
                      </Link>
                      <MenuPopover
                        id={i}
                        popoverOpen={popoverOpen}
                        setPopoverOpen={setPopoverOpen}
                        targetedPopover={targetedPopover}
                        menuItems={item.menu}
                        index={mainPath === "index"}
                      />
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
          <Link
            className="text-base relative py-1 md:text-xl hover:-translate-y-1 ease-in-out duration-500 bg-white/20 rounded-full hover:bg-white/20 px-3 ml-2 lg:px-5"
            href="/objednavka"
          >
            Objednat
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
