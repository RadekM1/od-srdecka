import { mobileMenuItems } from "../../../public/content/mobile-menu";
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

const MobileMenu = ({ isSideNavOpen, setIsSideNavOpen }: MobileMenuProps) => {
  return (
    <>
      {isSideNavOpen && (
        <aside
          id="nav-menu-4"
          aria-label="Side navigation"
          className="fixed top-0 mt-14 left-0 w-64 h-full bg-[#061E4C] text-white md:hidden block z-[99] shadow-lg transition-transform transform"
        >
          <nav
            aria-label="side navigation"
            className="flex-1 divide-y text-white flex flex-col font-oldStandard text-xl divide-slate-100 overflow-auto"
          >
            <Accordion type="single" collapsible>
              {mobileMenuItems.map((item, i) => {
                if (!item.menu) {
                  return (
                    <Link
                      key={i}
                      className="flex flex-1 mx-4 border-b-0 my-2 items-center justify-between py-1 font-medium transition-all hover:text-gray-400 [&[data-state=open]>img]:rotate-180"
                      href={item.link}
                      onClick={() => setIsSideNavOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                }
                return (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger>{item.label}</AccordionTrigger>
                    <AccordionContent>
                      {item.menu.map((innerItem, j) => (
                        <Link
                          key={j}
                          className="self-start text-start text-base hover:font-semibold mx-4"
                          href={innerItem.link}
                          onClick={() => setIsSideNavOpen(false)}
                        >
                          <div className="flex flex-col px-4 text-start">
                            {innerItem.label}
                          </div>
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
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
