import LogoTextAnim from "@/components/logoTextAnim";

const LaunchSite = () =>{
    return (
        <section className="text-center flex flex-col md:flex-row h-screen bg-[#061E4C] text-white font-satisfy">
      <div className="flex relative h-72 md:h-full justify-center  order-2 w-full md:w-4/5 md:order-1 items-center">
      
        <div className="absolute justify-center opacity-0 animate-textInCircle  z-20 text-center self-center flex items-center">
        <LogoTextAnim />
        </div>
        <div className="absolute justify-center self-center flex items-center">
        <img
          className="object-scale-down opacity-0 animate-rotation-logo  h-full w-full"
          src="logo_launch_obvod.svg"
          alt="logo"
        />
        </div>
        <div className="absolute  translate-y-16 justify-center self-center flex items-center">
        <img
          className="object-scale-down opacity-0 animate-pulse-scale h-full w-full"
          src="hearth.svg"
          alt="srdce v logu obrázek"
        />
        </div>
      </div>
      <div className="flex h-72 md:h-full w-full order-1 flex-col justify-center font-oldStandard items-center">
        <span className="text-4xl opacity-0 animate-slideIn delay-500 md:text-5xl lg:text-6xl xl:text-[5rem]">
          Dorty a sladké bary
        </span>
        <span className="text-xl animate-slideInTwo opacity-0 lg:text-3xl">z Kašavy</span>
      </div>

    </section>
    )
}
export default LaunchSite