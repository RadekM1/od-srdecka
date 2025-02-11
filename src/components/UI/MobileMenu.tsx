"use client";
import { menuItems } from "../../../public/content/menu";
import Link from "next/link";

interface MobileMenuProps {
  isSideNavOpen: boolean;
  setIsSideNavOpen: (isSideNavOpen: boolean) => void;
}

const MobileMenu = ({ isSideNavOpen, setIsSideNavOpen }: MobileMenuProps) => {
  return (
    <>
      {isSideNavOpen && (
        <aside
          id="nav-menu-4"
          aria-label="Side navigation"
          className="fixed top-0 mt-14 md:hidden left-0 w-64 h-full bg-[#061E4C] text-white z-[99] shadow-lg transition-transform transform"
        >
          <nav
            aria-label="side navigation"
            className="flex-1  text-white flex flex-col font-oldStandard text-lg  overflow-auto"
          >
            {menuItems.map((item, i) => {
              return (
                <Link
                  key={i}
                  className="flex flex-1 mx-4  items-center justify-between py-2 font-medium transition-all hover:text-gray-400 [&[data-state=open]>img]:rotate-180"
                  href={item.link}
                  onClick={() => setIsSideNavOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>
      )}
      {isSideNavOpen && (
        <div
          className="fixed top-0 bottom-0 backdrop-blur-sm mt-14 bg-gray-700/80 left-0 right-0 lg:hidden"
          onClick={() => setIsSideNavOpen(false)}
          aria-hidden={true}
        ></div>
      )}
    </>
  );
};

export default MobileMenu;
