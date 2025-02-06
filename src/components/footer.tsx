import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { footerItems } from "../../public/content/menu";
import { FaRegHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-center py-6 px-2 md:px-4 w-full flex-col font-oldStandard flex pb-10 bg-[#061E4C] text-white">
      <div className="w-full h-full flex-row flex items-center self-center justify-center">
        <div className="w-1/2 md:w-full flex flex-grow items-center">
          <div className="self-center flex">
            <img
              src="logo-male.png"
              alt="malé logo ve footeru"
              className="w-full md:p-8 lg:p-16 object-contain"
            />
          </div>
          <div className="w-min lg:w-1/3 flex text-start items-start md:text-base xl:text-xl gap-2 flex-col">
            {footerItems.map((item, i) => {
              return (
                <Link href={item.link} key={i}>
                  <button className="hover:text-white/60 hidden lg:block  ease-in-out duration-300">
                    {item.label}
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="w-2/3 p-3  justify-center hidden md:block flex-col flex-grow">
          <div className="flex mb-4 gap-6 self-center justify-center flex-row">
            <a href="#" target="_blank">
              <IoLogoInstagram className="h-8 w-8 md:h-12 md:w-12 hover:text-white/40 hover:-translate-y-1 ease-in-out duration-500 text-white/60" />
            </a>
            <a href="x" target="_blank">
              <FaFacebook className="h-8 w-8 md:h-12 md:w-12 text-white/60 hover:text-white/40 hover:-translate-y-1 ease-in-out duration-500" />
            </a>
          </div>
          <div className="w-full  h-full flex">
            <img
              src="peceme-od-srdecka-z-kasavy.svg"
              alt="nápis pečeme od srdéčka z Kašavy"
              className="w-full lg:p-10 object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center justify-between h-full w-1/2">
          <button className="md:text-xl mb-6 px-8 py-2 lg:text-2xl hover:-translate-y-1 ease-in-out duration-500 bg-white/40 rounded-full hover:bg-white/20">
            Objednat
          </button>
          <img
            src="tel.svg"
            alt="telefonní číslo"
            className="md:h-[16px] object-contain"
          />
          <img
            src="email.svg"
            alt="email"
            className=" md:h-[16px] object-contain"
          />
        </div>
      </div>

      <div className="w-1/2 my-5 p-3 md:p-6 gap-5 items-center self-center justify-center block md:hidden flex-col flex-grow">
        <img
          src="peceme-od-srdecka-z-kasavy.svg"
          alt="nápis pečeme od srdéčka z Kašavy"
          className="w-full object-contain"
        />
        <div className="flex w-full mt-6 justify-center gap-6 flex-row">
          <a href="#" target="_blank">
            <IoLogoInstagram className="h-8 w-8 md:h-12 md:w-12 hover:text-white/40 hover:-translate-y-1 ease-in-out duration-500 text-white/60" />
          </a>
          <a href="x" target="_blank">
            <FaFacebook className="h-8 w-8 md:h-12 md:w-12 text-white/60 hover:text-white/40 hover:-translate-y-1 ease-in-out duration-500" />
          </a>
        </div>
      </div>

      <div className="w-full justify-center items-center flex my-8">
        <img src="hearts-line-white.svg" alt="oddělovací čára sekce bílá" />
      </div>
      <div className="flex-row text-xs md:text-sm font-abhaya  hover:-translate-y-1 hover:text-gray-200 ease-in-out duration-500 md:pr-8 flex w-full justify-center md:justify-end">
        <a href="#" className="flex flex-row gap-2 ">
          <span>Od</span>
          <span>
            <FaRegHeart />
          </span>
          <span>vytvořil</span>
          <span>Radek M.</span>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
