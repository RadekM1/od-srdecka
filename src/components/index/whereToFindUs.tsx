const WhereToFindUs = () => {
  return (
    <div className="flex w-full justify-center bg-[#061E4C] pb-10 text-center">
      <div className="self-centers flex w-full max-w-6xl flex-col self-center px-2 text-xl md:flex-row">
        <div className="h-full w-full justify-center self-center">
          <div className="z-10 flex w-full flex-row items-center justify-center">
            <div className="h-full flex-grow flex-col self-center font-abhaya text-xl text-white lg:text-2xl">
              <div>Najdete nás v centru Kašavy naproti</div>
              <div>kostela sv. Kateřiny. Zaparkovat</div>
              <div>můžete u obecního úřadu.</div>
              <div className="mt-8">Tož sa ozvěte, rády vám napečeme.</div>
              <div className="mt-6 flex justify-center">
                <img src="/index/heart-icon.svg" alt="ikona srdce" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full justify-center">
          <div className="flex w-full flex-row justify-center">
            <div className="flex h-full w-full flex-col items-center justify-center">
              <div className="flex h-full w-full flex-col items-center justify-center">
                <a
                  className="flex items-center justify-center"
                  href="https://maps.app.goo.gl/84gMRihAcDk9pKpu5"
                  target="_blank"
                >
                  <img
                    className="flex w-2/3 self-center object-scale-down p-2 duration-300 ease-in-out md:w-full"
                    src="/index/map.png"
                    alt="fotka teamu"
                  />
                </a>
                <span className="w-full pl-0 text-center font-abhaya text-xl text-white md:pl-3 md:text-start lg:text-2xl">
                  Kašava 33 , 736 19 Kašava
                </span>
              </div>
            </div>
            <div className="flex h-full items-end self-end">
              <div className="hidden h-full flex-grow flex-col items-end justify-end md:block">
                <div className="mb-11 flex self-end">
                  <img
                    src="/bocni-srdecka-bila.svg"
                    alt="boční grafika srdcí"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhereToFindUs;
