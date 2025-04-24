const HearthSnake = () => {
  return (
    <section className="text-center select-none flex my-4 flex-col md:flex-row items-start w-full bg-white text-white font-OoohBaby">
      <img
        src="/hearthHorizontal-big.svg"
        className="w-full hidden lg:block "
        alt="obrázek spojených srdíček horizontálně"
      />
      <img
        src="/hearthHorizontal.svg"
        className="w-full block lg:hidden "
        alt="obrázek spojených srdíček horizontálně"
      />
    </section>
  );
};
export default HearthSnake;
