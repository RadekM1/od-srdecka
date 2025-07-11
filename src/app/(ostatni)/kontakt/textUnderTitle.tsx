const TextUnderTitle = () => {
  return (
    <div className="w-full p-5 md:mt-10 flex flex-col mb-10 lg:w-[1000px]">
      <span className="text-start md:text-center text-xl lg:text-2xl font-oldStandard px-2 ">
        Objednávky nejraději přijímáme{" "}
        <span className="font-semibold underline">telefonicky</span>, ale pokud
        nás nezastihnete, neváhejte nám napsat{" "}
        <span className="font-semibold underline">email</span> nebo využít
        kontaktní formulář níže. Rádi se vám ozveme zpět co nejdříve.
      </span>
    </div>
  );
};
export default TextUnderTitle;
