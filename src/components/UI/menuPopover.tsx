import { useEffect, useRef } from "react";
import Link from "next/link";

interface MenuPopoverProps {
  popoverOpen: boolean;
  index: boolean;
  setPopoverOpen: (popoverOpen: boolean) => void;
  id: number;
  targetedPopover: number;
  menuItems: { label: string; link: string }[] | null;
}

const MenuPopover = ({
  popoverOpen,
  setPopoverOpen,
  id,
  targetedPopover,
  menuItems,
  index,
}: MenuPopoverProps) => {
  const popOverRef = useRef<HTMLDivElement>(null);

  const menuStyle = index
    ? "bg-white text-[#061E4C] "
    : "bg-[#061E4C]  text-white";
  const itemStyle = index ? " hover:text-[#374b6f]" : "";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popOverRef.current &&
        !popOverRef.current.contains(event.target as Node)
      ) {
        setPopoverOpen(false);
      }
    };

    if (popoverOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popoverOpen]);

  return (
    <>
      {popoverOpen && id === targetedPopover && menuItems && (
        <div
          ref={popOverRef}
          className={`py-3 px-5 ${index ? "top-12 rounded-2xl" : "top-9 rounded-b-2xl"} absolute flex flex-col shadow-md text-xl right-1/2 w-[200px] translate-x-1/2 ${menuStyle} z-50  `}
        >
          {Array.isArray(menuItems) &&
            menuItems.map((item, i) => {
              return (
                <li key={i} className="my-1">
                  <Link href={item.link}>
                    <div
                      className={`relative my-1 ${itemStyle} hover:font-semibold  cursor-pointer text-nowrap `}
                    >
                      <span>{item.label}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
        </div>
      )}
    </>
  );
};
export default MenuPopover;
