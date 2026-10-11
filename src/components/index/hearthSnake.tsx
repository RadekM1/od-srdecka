const HearthSnake = () => {
  return (
    <section className="my-4 flex w-full select-none flex-col items-start bg-white text-center font-OoohBaby text-white md:flex-row">
      <img
        src="/hearthHorizontal-big.svg"
        className="hidden w-full lg:block"
        alt="obrázek spojených srdíček horizontálně"
      />
      <img
        src="/hearthHorizontal.svg"
        className="block w-full lg:hidden"
        alt="obrázek spojených srdíček horizontálně"
      />
    </section>
  );
};
export default HearthSnake;
