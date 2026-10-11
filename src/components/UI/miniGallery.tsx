import Link from 'next/link';
import Image from 'next/image';
import { MdArrowForwardIos } from 'react-icons/md';

interface MiniGalleryProps {
  item: {
    src: string;
    alt: string;
    title: string;
    link: string;
    sectionTitle: string;
    miniGallery: {
      src: string;
      alt: string;
      media_type: string;
    }[];
  };
  index: number;
}

const MiniGallery = ({ item, index }: MiniGalleryProps) => {
  return (
    <div className="flex w-full max-w-[350px] flex-col justify-between lg:mx-6">
      <div className="my-12 mb-6 mt-8">
        <span className="w-full text-center font-dancing text-3xl md:text-4xl lg:text-5xl">
          {/*// eslint-disable-next-line*/}
          {item.sectionTitle}
        </span>
      </div>

      <div className="mb-24 inline-flex h-full w-full flex-col items-center justify-center md:px-5">
        <div className="relative flex items-center justify-center">
          <div className="flex-col">
            <div className="group relative mb-2 h-full w-full">
              <Link href={item.link}>
                <Image
                  className="flex h-max max-w-[150px] self-center rounded-xl object-scale-down duration-300 ease-in-out group-hover:brightness-50 sm:max-w-[240px] md:max-w-[320px]"
                  src={item.src}
                  alt={item.alt}
                  title={item.title}
                  width={500}
                  height={500}
                />
                <span className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 text-nowrap px-5 py-2 text-sm text-white duration-300 ease-in-out group-hover:block sm:text-base md:text-xl lg:text-2xl">
                  <MdArrowForwardIos className="h-14 w-14 text-white" />
                </span>
              </Link>
            </div>
            <img
              src="/bocni-srdecka.svg"
              className={`absolute hidden h-[70px] w-10 md:block ${index === 0 ? '-left-[30px] bottom-0' : '-right-[30px] top-0 rotate-180'}`}
              alt="boční ikony srdíček"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MiniGallery;
