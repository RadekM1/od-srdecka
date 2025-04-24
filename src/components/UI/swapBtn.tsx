interface SwapBtnInterface {
  isSideNavOpen: boolean;

  setIsSideNavOpen: (open: boolean) => void;
}

const SwapBtn = ({ isSideNavOpen, setIsSideNavOpen }: SwapBtnInterface) => {
  return (
    <button
      className={`relative order-10 rounded-full bg-white/20 hover:bg-white/20  block h-10 w-10 mx-2 self-center md:hidden
        ${
          isSideNavOpen
            ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
            : ""
        }
      `}
      onClick={() => setIsSideNavOpen(!isSideNavOpen)}
      aria-expanded={isSideNavOpen ? "true" : "false"}
      aria-label="Toggle navigation"
    >
      <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
        <span
          aria-hidden="true"
          className="absolute block h-0.5 w-6 -translate-y-1.5 transform rounded-full bg-white/80 transition duration-300"
        ></span>
        <span
          aria-hidden="true"
          className="absolute block h-0.5 w-6 transform rounded-full bg-white/80 transition duration-300"
        ></span>
        <span
          aria-hidden="true"
          className="absolute block h-0.5 w-full origin-top-left translate-y-1.5 transform rounded-full bg-white/80  transition-all duration-300"
        ></span>
      </div>
    </button>
  );
};
export default SwapBtn;
