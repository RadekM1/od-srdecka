import SectionTitle from '../sectionTitle';
import Link from 'next/link';
import { MdArrowForwardIos } from 'react-icons/md';
import { getIndexImages } from '@/lib/fetch/get-index-images';
import Image from 'next/image';

const fetchedImages = await getIndexImages();

const OfferImg = [
  {
    src: fetchedImages.filter(image => image.imgType === 'dorty')[0].img.sizes
      .medium_large,
    title: 'Dorty',
    alt: 'obrázek dortu',
    link: '/nabidka/dorty'
  },
  {
    src: fetchedImages.filter(image => image.imgType === 'dezerty')[0].img.sizes
      .medium_large,
    title: 'Dezerty',
    alt: 'obrázek sladkého baru',
    link: '/nabidka/dezerty'
  }
];

const BlogImg = [
  {
    src: fetchedImages.filter(image => image.imgType === 'recepty')[0].img.sizes
      .medium_large,
    title: 'Recepty',
    alt: 'obrázek receptu',
    link: '/blog/bezlepkove-recepty-sladke'
  },
  {
    src: fetchedImages.filter(image => image.imgType === 'dotazy')[0].img.sizes
      .medium_large,
    title: 'Nejčastější dotazy',
    alt: 'obrázek nejčastější dotaz',
    link: '/dotazy'
  }
];

const Offer = () => {
  return (
    <div className="mb-24 flex w-full max-w-6xl flex-col items-start justify-center gap-6 self-center px-6 text-center text-xl md:flex-row lg:gap-10">
      <div className="relative flex h-full w-full flex-col justify-center">
        <SectionTitle indexPage={true} title="Naše nabídka" />
        <img
          src="/pozadi-text/peceme-od-srdecka.svg"
          className="absolute top-[120px] -z-10 hidden lg:block"
          alt="pozadí text pečeme od srdéčka"
        />
        <div className="z-10 flex w-full flex-row items-end justify-center">
          <div className="flex h-full w-full flex-row justify-center gap-6 lg:gap-10">
            {OfferImg.map((img, i) => {
              return (
                <Link href={img.link} key={i}>
                  <div className="group flex h-full w-full flex-col items-center justify-center">
                    <div className="relative h-full w-full">
                      <Image
                        className="flex h-full self-center rounded-xl duration-300 ease-in-out group-hover:brightness-50"
                        src={img.src}
                        alt={img.alt}
                        title={img.title}
                        width={500}
                        height={500}
                      />
                      {i === 0 && (
                        <div className="absolute -left-5 bottom-0 hidden h-[70px] w-[19px] flex-col items-end justify-end md:block xl:-left-8">
                          <img
                            className="h-full w-full"
                            src="/bocni-srdecka.svg"
                            alt="boční grafika srdcí"
                          />
                        </div>
                      )}
                      <span className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 text-nowrap px-5 py-2 text-sm text-white duration-300 ease-in-out group-hover:block sm:text-base md:text-xl lg:text-2xl">
                        <MdArrowForwardIos className="h-14 w-14 text-white" />
                      </span>
                    </div>
                    <div className="mt-3 text-center font-OoohBaby tracking-wide group-hover:font-semibold lg:text-2xl">
                      {img.title}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="relative flex h-full w-full flex-col justify-center">
        <SectionTitle indexPage={true} title="Sladký blog" />
        <div className="relative z-10 flex w-full flex-row items-end justify-center">
          <div className="absolute -right-5 top-0 hidden h-[70px] w-[19px] flex-col items-end justify-end md:block xl:-right-8">
            <img
              className="h-full w-full rotate-180"
              src="/bocni-srdecka.svg"
              alt="boční grafika srdcí"
            />
          </div>
          <div className="flex h-full w-full flex-row justify-center gap-6 lg:gap-10">
            {BlogImg.map((img, i) => {
              return (
                <Link href={img.link} key={i}>
                  <div className="group flex h-full w-full flex-col items-center justify-center">
                    <div className="relative h-full w-full overflow-hidden">
                      <Image
                        className="flex h-full self-center rounded-xl duration-300 ease-in-out group-hover:brightness-50"
                        src={img.src}
                        alt={img.alt}
                        title={img.title}
                        width={500}
                        height={500}
                      />
                      <span className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 text-nowrap px-5 py-2 text-sm text-white duration-300 ease-in-out group-hover:block sm:text-base md:text-xl lg:text-2xl">
                        <MdArrowForwardIos className="h-14 w-14 text-white" />
                      </span>
                    </div>
                    <div className="mt-3 text-center font-OoohBaby tracking-wide group-hover:font-semibold lg:text-2xl">
                      {img.title}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Offer;
