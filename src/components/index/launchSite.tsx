const LaunchSite = () => {
  return (
    <section className="text-center flex pb-10 flex-col md:flex-row h-full min-h-screen bg-[#061E4C] text-white font-OoohBaby">
      <div className="flex justify-center order-2 w-full md:order-1 items-center">
        <img
          className=" h-full w-1/2 md:w-5/6 lg:w-1/2 object-contain flex"
          src="logoMain.svg"
          alt="logo"
        />
      </div>
      <div className="flex my-16 min-h-max md:my-0 w-full order-1 items-center flex-col justify-center font-oldStandard ">
        <span className="text-3xl sm:text-4xl text-nowrap mx-1 justify-center self-center flex opacity-0 font-semibold tracking-wide animate-slideIn delay-500 md:text-4xl lg:text-5xl xl:text-6xl">
          Dorty a sladké bary
        </span>
        <span className="text-xl mt-4 animate-slideInTwo opacity-0 lg:text-2xl xl:text-3xl">
          z Kašavy
        </span>
      </div>
    </section>
  );
};
export default LaunchSite;
