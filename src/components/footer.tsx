import { IoLogoInstagram } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex w-full flex-col bg-[#061E4C] px-2 py-12 pb-10 text-center font-oldStandard text-white md:px-4">
      <div className="flex h-full w-full flex-row items-center justify-center self-center">
        <div className="flex w-1/2 items-center justify-center md:w-1/3">
          <div className="flex max-w-32 justify-center self-center sm:max-w-44 md:max-w-60">
            <img
              src="/logoMain.svg"
              alt="malé logo ve footeru"
              className="self-center object-contain md:p-8"
            />
          </div>
        </div>
        <div className="hidden w-1/2 flex-grow flex-col justify-center p-4 md:block md:w-1/3">
          <div className="flex flex-row justify-center gap-6 self-center">
            <a href="https://www.instagram.com/odsrdecka/" target="_blank">
              <IoLogoInstagram className="h-8 w-8 text-white/60 duration-500 ease-in-out hover:-translate-y-1 hover:text-white/40 md:h-12 md:w-12" />
            </a>
          </div>
          <div className="flex h-full w-full items-center justify-center">
            <img
              src="/peceme-od-srdecka-z-kasavy.svg"
              alt="nápis pečeme od srdéčka z Kašavy"
              className="flex w-full self-center object-contain lg:p-10"
            />
          </div>
        </div>

        <div className="flex h-full w-1/2 flex-col items-center md:w-1/3">
          <div className="flex max-w-32 flex-col items-center justify-between gap-4 self-center sm:max-w-44 md:max-w-60 md:gap-8">
            <Link href={'/objednavka'}>
              <button className="rounded-full bg-white/40 px-8 py-2 duration-500 ease-in-out hover:-translate-y-1 hover:bg-white/20 md:text-xl lg:text-2xl">
                Objednat
              </button>
            </Link>
            <Link href="tel:+420733506548">
              <img
                src="/phone.svg"
                alt="telefonní číslo"
                className="w-max-[100px]"
              />
            </Link>
            <Link href="mailto:odsrdecka@gmail.com">
              <img src="/email-adr.svg" alt="email" className="w-max-[100px]" />
            </Link>
          </div>
        </div>
      </div>

      <div className="my-10 flex w-2/3 flex-grow flex-col items-center justify-center gap-5 self-center p-3 md:hidden md:p-6">
        <img
          src="/peceme-od-srdecka-z-kasavy.svg"
          alt="nápis pečeme od srdéčka z Kašavy"
          className="w-max-[300px] object-contain"
        />
        <div className="mt-6 flex w-full flex-row justify-center gap-6">
          <a href="https://www.instagram.com/odsrdecka/" target="_blank">
            <IoLogoInstagram className="h-8 w-8 text-white/60 duration-500 ease-in-out hover:-translate-y-1 hover:text-white/40 md:h-12 md:w-12" />
          </a>
        </div>
      </div>

      <div className="mt-10 flex w-full flex-row justify-center font-abhaya text-sm duration-500 ease-in-out hover:text-gray-200 md:justify-end md:pr-8 md:text-sm">
        <a
          href="https://www.radekmorong.cz"
          target="_blank"
          className="flex flex-row gap-2"
        >
          <span>Od</span>
          <span>
            <FaRegHeart />
          </span>
          <span>vytvořili Radek Morong a Kateřina Pavelková</span>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
