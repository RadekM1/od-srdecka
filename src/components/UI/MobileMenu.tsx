import { mobileMenuItems } from '../../../public/content/mobile-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/UI/accordion';
import Link from 'next/link';

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
          className="fixed left-0 top-0 z-[99] mt-14 block h-full w-64 transform bg-[#061E4C] text-white shadow-lg transition-transform md:hidden"
        >
          <nav
            aria-label="side navigation"
            className="flex flex-1 flex-col divide-y divide-slate-100 overflow-auto font-oldStandard text-xl text-white"
          >
            <Accordion type="single" collapsible>
              {mobileMenuItems.map((item, i) => {
                if (!item.menu) {
                  return (
                    <Link
                      key={i}
                      className="mx-4 my-2 flex flex-1 items-center justify-between border-b-0 py-1 font-medium transition-all hover:text-gray-400 [&[data-state=open]>img]:rotate-180"
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
                          className="mx-4 self-start text-start text-base hover:font-semibold"
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
          className="fixed bottom-0 left-0 right-0 top-0 mt-14 bg-gray-700/80 backdrop-blur-sm lg:hidden"
          onClick={() => setIsSideNavOpen(false)}
          aria-hidden={true}
        ></div>
      )}
    </>
  );
};

export default MobileMenu;
