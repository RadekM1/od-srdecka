import {useEffect, useRef } from "react"
import Link from "next/link";

interface menuItem{
  label: "string";
  link: "string";
}

interface MenuPopoverProps{
  popoverOpen: boolean;
  setPopoverOpen: (popoverOpen: boolean) => void;
  id: number;
  targetedPopover: number
  menuItems:menuItem[] | null
}

const index = true
const menuStyle = index ? "bg-white text-[#061E4C] " : "bg-[#061E4C]  text-white";
const itemStyle = index ? "hover:text-[#374b6f]" : "hover:text-white/60";

const MenuPopover = ({popoverOpen, setPopoverOpen, id,targetedPopover, menuItems}:MenuPopoverProps) =>{

  const popOverRef = useRef<HTMLDivElement>(null)

  useEffect(() =>{
    const handleClickOutside = (event: MouseEvent) => {

      if (popOverRef.current && !popOverRef.current.contains(event.target as Node)) {
        setPopoverOpen(false);
      }
    }
    popoverOpen ? document.addEventListener("mousedown",handleClickOutside) 
    : 
    document.removeEventListener("mousedown",handleClickOutside);
    return () => document.removeEventListener("mousedown",handleClickOutside)
  },[popoverOpen, setPopoverOpen])


    return (  
      <>
      {popoverOpen && id === targetedPopover && menuItems &&
        <div 
        ref={popOverRef}
        className={`py-3 px-5 top-12 absolute flex flex-col shadow-xl  text-base right-1/2 min-w-[280px] translate-x-1/2 ${menuStyle} z-50  rounded-2xl`}
        >
          {menuItems?.map((item,i)=>{
            return (
              <li 
              key={i}
              className="my-1">
              <Link href={item.link}>
              <div
                className={`relative my-1 ${itemStyle} hover:font-semibold  cursor-pointer text-nowrap `}>
                <span>{item.label}</span>
              </div>
              </Link>
            </li>
            )
          })}
        </div>
      }
      </>
    )
}
export default MenuPopover