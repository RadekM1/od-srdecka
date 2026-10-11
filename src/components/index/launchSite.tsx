import { ChevronDown } from './chevronDown';
const LaunchSite = () => {
  return (
    <section className="h-full min-h-screen flex-col bg-[#061E4C]">
      <div className="flex h-full min-h-[70vh] w-full flex-col items-center justify-center gap-8 self-center bg-[#061E4C] pb-10 text-center font-OoohBaby text-white md:mt-12 md:flex-row lg:gap-24 lg:px-20 xl:px-44">
        <div className="order-2 flex w-full max-w-[500px] items-center justify-center md:order-1">
          <img
            className="flex h-full w-1/2 max-w-[500px] object-contain md:w-5/6"
            src="/logoMain.svg"
            alt="logo"
          />
        </div>
        <div className="order-1 my-16 flex min-h-max w-full max-w-[500px] flex-col items-center justify-center font-oldStandard md:my-0">
          <span className="animate-slideIn mx-1 mt-8 flex justify-center self-center text-nowrap text-3xl font-semibold tracking-wide opacity-0 delay-500 sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
            Dorty a sladké bary
          </span>
          <span className="animate-slideInTwo mt-4 text-xl opacity-0 lg:text-2xl xl:text-3xl">
            z Kašavy
          </span>
        </div>
      </div>
      <ChevronDown />
    </section>
  );
};
export default LaunchSite;
