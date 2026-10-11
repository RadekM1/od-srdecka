import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Importujeme framer-motion
import { CakeProductSchema } from '@/schema/cakes';
import { DessertProductSchema } from '@/schema/desserts';
import { IoClose } from 'react-icons/io5';

interface ModalProps {
  data: CakeProductSchema | DessertProductSchema;
  isShowing: boolean;

  setIsShowing: (isShowing: boolean) => void;
}

const Modal = ({ data, isShowing, setIsShowing }: ModalProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsShowing(false);
      }
    };
    if (isShowing) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isShowing]);

  useEffect(() => {
    const html = document.querySelector('html');
    if (html) {
      html.style.overflowY = isShowing ? 'hidden' : 'visible';
    }
  }, [isShowing]);

  return (
    <AnimatePresence>
      {isShowing && (
        <motion.div
          className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-[#272727]/65"
          aria-labelledby="header-2a content-2a"
          aria-modal="true"
          tabIndex={-1}
          role="dialog"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="z-100 relative flex max-h-[90vh] w-11/12 max-w-2xl flex-col gap-6 overflow-hidden rounded-xl border-[1px] border-[#061E4C] bg-white shadow-xl"
            ref={wrapperRef}
            id="modal"
            role="document"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <header id="header-2a" className="flex items-center gap-4 p-3">
              <div className="flex h-full w-full flex-col pt-5">
                <h3 className="absolute right-1/2 z-30 flex-1 translate-x-1/2 text-nowrap font-dancing text-2xl lg:text-3xl">
                  {data.title}
                </h3>
                <h3 className="absolute right-1/2 top-5 z-20 flex-1 translate-x-[45%] select-none text-nowrap font-dancing text-2xl text-gray-100 lg:text-3xl">
                  {data.title}
                </h3>
              </div>
              <button
                onClick={() => setIsShowing(false)}
                className="absolute right-0 top-0 inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide transition duration-300"
                aria-label="close dialog"
              >
                <span className="only:-mx-5">
                  <IoClose className="h-5 w-5 text-gray-400 duration-300 ease-in-out hover:text-gray-900" />
                </span>
              </button>
            </header>

            <div
              id="content-2a"
              className="flex flex-col text-start font-oldStandard"
            >
              <ul className="list-disc px-8 py-4">
                {data?.variants?.map((variants, i) => (
                  <li className="text-sm md:text-base" key={i}>
                    {variants}
                  </li>
                ))}
              </ul>
              {'notes' in data && data.notes && (
                <p className="mb-1 ml-2 text-base">{data.notes}</p>
              )}
              <div className="flex h-full flex-col bg-[#061E4C]">
                <span className="w-full py-4 text-center font-dancing text-base font-thin tracking-widest text-white">
                  alergeny {data.allergens}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
