"use client";
import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import SwapBtn from "./swapBtn";
import { menuItems } from "../../../public/content/menu";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(false);

  return (
    <nav
      role="navigaton"
      className="w-full h-14 z-40 items-center fixed bg-[#061E4C] flex flex-row justify-center font-oldStandard"
    >
      <div className="flex sticky items-center justify-center top-0 flex-row md:text-sm lg:text-base xl:text-xl mx-2 w-full text-white">
        <ul className="flex self-center align-middle items-center h-full">
          {path !== "/" && (
            <li className="self-center h-full justify-center items-center flex text-center">
              <Link
                onClick={() => setIsSideNavOpen(false)}
                className="mx-2"
                href={"/"}
              >
                <img
                  className="h-14  mr-3 sm:mr-0 lg:p-1 w-14"
                  src={"/logoMain.svg"}
                ></img>
              </Link>
            </li>
          )}
          <a href="https://www.instagram.com/odsrdecka/" target="_blank">
            <IoLogoInstagram className="h-8 w-8 mx-2 hover:text-white/40 hover:-translate-y-1 ease-in-out duration-500 text-white/60" />
          </a>
        </ul>
        <menu className="flex self-center text-nowrap items-center w-full h-full justify-end flex-row">
          <ul className="h-full flex flex-row">
            {menuItems.map((item, i) => {
              return (
                <ul key={i} className="w-full h-full flex flex-row">
                  <Link
                    className="hover:text-gray-400 self-center h-full items-center ease-in-out duration-500"
                    href={item.link}
                  >
                    <li className="mx-2 lg:mx-3 hidden relative md:block self-center h-full">
                      {item.label}
                    </li>
                  </Link>
                </ul>
              );
            })}
          </ul>
          <Link
            className="text-base relative py-1 lg:text-xl hover:-translate-y-1 ease-in-out duration-500 bg-white/40 rounded-full hover:bg-white/20 px-3 ml-2 lg:px-5"
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
      </div>
    </nav>
  );
};
export default Navbar;
