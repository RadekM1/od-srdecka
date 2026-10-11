'use client';
import Link from 'next/link';
import { IoLogoInstagram } from 'react-icons/io5';
import MobileMenu from './MobileMenu';
import { useState } from 'react';
import SwapBtn from './swapBtn';
import MenuPopover from './menuPopover';
import { menuItems } from '../../../public/content/menu';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const path = usePathname();
  const [popoverOpen, setPopoverOpen] = useState<boolean>(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(false);
  const [targetedPopover, setTargetedPopover] = useState<number>(-1);

  const mainPath: string =
    path.split('/')[1].length > 2 ? path.split('/')[1] : 'index';

  return (
    <header className="fixed z-40 flex h-14 w-full flex-row items-center justify-center bg-[#061E4C] font-oldStandard">
      <nav
        role="navigaton"
        className="sticky top-0 mx-2 flex w-full flex-row items-center justify-center text-xl text-white"
      >
        <ul className="flex h-full items-center self-center align-middle">
          {path !== '/' && (
            <li className="flex h-full items-center justify-center self-center text-center">
              <Link
                className="mx-2"
                href={'/'}
                aria-label="Přejít na domovskou stránku"
              >
                <img
                  className="mr-3 h-14 w-14 sm:mr-0 lg:p-1"
                  src={'/logoMain.svg'}
                  alt="logo"
                ></img>
              </Link>
            </li>
          )}
          <a href="https://www.instagram.com/odsrdecka/" target="_blank">
            <IoLogoInstagram
              aria-label="Přejít na instagram webu"
              className="mx-2 h-8 w-8 text-white/60 duration-500 ease-in-out hover:-translate-y-1 hover:text-white/40"
            />
          </a>
        </ul>
        <menu className="flex h-full w-full flex-row items-center justify-end self-center text-nowrap">
          <ul className="flex h-full flex-row">
            {menuItems.map((item, i) => {
              return (
                <li key={i} className="flex h-full w-full flex-row">
                  <div
                    className={`h-full cursor-pointer items-center self-center duration-500 ease-in-out hover:text-gray-400`}
                    onClick={() => setPopoverOpen(false)}
                  >
                    <ul
                      onMouseOver={() => {
                        setTargetedPopover(i);
                        setPopoverOpen(true);
                      }}
                      className="relative mx-2 hidden h-full self-center md:block lg:mx-3"
                    >
                      <Link
                        className={`${
                          (path.startsWith(item.link) &&
                            item.link.length > 2) ||
                          (item.link === '/' && path === '/') ||
                          (path === '/blog/bezlepkove-recepty-ostatni' &&
                            item.link === '/blog/bezlepkove-recepty-sladke')
                            ? 'text-gray-400'
                            : ''
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
                        index={mainPath === 'index'}
                      />
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
          <Link
            className="relative ml-2 rounded-full bg-white/20 px-3 py-1 text-base duration-500 ease-in-out hover:-translate-y-1 hover:bg-white/20 md:text-xl lg:px-5"
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
