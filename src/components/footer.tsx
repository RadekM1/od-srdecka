import { IoLogoInstagram } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-center py-6 px-2 md:px-4 w-full flex-col font-oldStandard flex pb-10 bg-[#061E4C] text-white">
      <div className="w-full h-full flex-row flex items-center self-center justify-center">
        <div className=" flex  w-1/2 md:w-1/3 justify-center items-center">
          <div className="self-center justify-center flex">
            <img
              src="logoMain.svg"
              alt="malé logo ve footeru"
              className="w-1/2 self-center md:w-full md:p-8 lg:p-16 object-contain"
            />
          </div>
        </div>
        <div className="w-1/2 md:w-1/3  justify-center hidden md:block flex-col flex-grow">
          <div className="flex  gap-6 self-center justify-center flex-row">
            <a href="#" target="_blank">
              <IoLogoInstagram className="h-8 w-8 md:h-12 md:w-12 hover:text-white/40 hover:-translate-y-1 ease-in-out duration-500 text-white/60" />
            </a>
          </div>
          <div className="w-full justify-center items-center  h-full flex">
            <img
              src="peceme-od-srdecka-z-kasavy.svg"
              alt="nápis pečeme od srdéčka z Kašavy"
              className="w-full self-center flex lg:p-10 object-contain"
            />
          </div>
        </div>

        <div className="flex w-1/2 md:w-1/3 flex-col gap-4 md:gap-8 items-center justify-between h-full ">
          <button className="md:text-xl px-8 py-2 lg:text-2xl hover:-translate-y-1 ease-in-out duration-500 bg-white/40 rounded-full hover:bg-white/20">
            Objednat
          </button>
          <img src="tel.svg" alt="telefonní číslo" className="w-max-[100px]" />
          <img src="email.svg" alt="email" className="w-max-[100px]" />
        </div>
      </div>

      <div className="w-2/3 flex   my-10 p-3 md:p-6 gap-5 items-center self-center justify-center  md:hidden flex-col flex-grow">
        <img
          src="peceme-od-srdecka-z-kasavy.svg"
          alt="nápis pečeme od srdéčka z Kašavy"
          className="w-max-[300px] object-contain"
        />
        <div className="flex w-full mt-6 justify-center gap-6 flex-row">
          <a href="#" target="_blank">
            <IoLogoInstagram className="h-8 w-8 md:h-12 md:w-12 hover:text-white/40 hover:-translate-y-1 ease-in-out duration-500 text-white/60" />
          </a>
        </div>
      </div>

      <div className="flex-row text-xs md:text-sm font-abhaya hover:text-gray-200 ease-in-out duration-500 md:pr-8 flex w-full justify-center md:justify-end">
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
