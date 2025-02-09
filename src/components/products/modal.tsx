import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { CakeProductSchema } from "@/schema/cakes";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  data: CakeProductSchema;
  isShowing: boolean;
  // eslint-disable-next-line
  setIsShowing:(isShowing:boolean)=>void
}

const Modal = ({ data, isShowing, setIsShowing }: ModalProps) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsShowing(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    let html = document.querySelector("html");

    if (html) {
      if (isShowing && html) {
        html.style.overflowY = "hidden";
        document.addEventListener("keydown", function (e) {
          if (e.keyCode === 27) {
            setIsShowing(false);
          }
        });
      } else {
        html.style.overflowY = "visible";
      }
    }
  }, [isShowing]);

  return (
    <>
      {isShowing && typeof document !== "undefined"
        ? ReactDOM.createPortal(
            <div
              className="fixed top-0 left-0 z-20 flex items-center justify-center  w-screen h-screen bg-[#272727]/65 "
              aria-labelledby="header-2a content-2a"
              aria-modal="true"
              tabIndex="-1"
              role="dialog"
            >
              {/*    <!-- Modal --> */}
              <div
                className="flex max-h-[90vh] relative rounded-xl w-11/12 max-w-lg flex-col border-[#061E4C] border-[1px] gap-6 overflow-hidden  bg-white  shadow-xl "
                ref={wrapperRef}
                id="modal"
                role="document"
              >
                {/*        <!-- Modal header --> */}
                <header id="header-2a" className="flex p-3 items-center gap-4">
                  <div className="flex flex-col h-full pt-5 w-full">
                    <h3 className="flex-1 absolute right-1/2  z-30 text-2xl translate-x-1/2 lg:text-3xl font-satisfy">
                      {data.title}
                    </h3>
                    <h3 className="flex-1 absolute text-gray-100 select-none top-5 translate-x-[45%] z-20 text-2xl right-1/2  lg:text-3xl font-satisfy">
                      {data.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setIsShowing(false)}
                    className="inline-flex absolute top-0 right-0 items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded-full justify-self-center whitespace-nowrap "
                    aria-label="close dialog"
                  >
                    <span className="only:-mx-5">
                      <IoClose className="h-5 w-5 text-gray-400 hover:text-gray-900 duration-300 ease-in-out" />
                    </span>
                  </button>
                </header>

                <div
                  id="content-2a"
                  className="flex flex-col text-start font-oldStandard"
                >
                  <ul className="list-disc px-8 py-4">
                    {data?.variants?.map((variants, i) => {
                      return (
                        <li className="text-sm  md:text-base" key={i}>
                          {variants}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="bg-[#061E4C] flex flex-col h-full ">
                    <span className="text-base w-full text-center text-white font-thin py-4 tracking-widest font-satisfy">
                      alergeny {data.allergens}
                    </span>
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
};
export default Modal;
