const TextUnderTitle = () => {
  return (
    <div className="w-full flex flex-col md:w-[1000px]">
      <span className="text-center font-oldStandard px-2 ">
        Objednávky nejraději přijímáme{" "}
        <span className="font-semibold underline">telefonicky</span>, ale pokud
        nás nezastihnete, neváhejte nám napsat{" "}
        <span className="font-semibold underline">email</span> nebo využít
        kontaktní formulář níže. Rádi se vám ozveme zpět co nejdříve.
      </span>
      <span className="my-3 font-semibold font-oldStandard text-2xl">
        Dort či sladký bar si můžete objednat na míru.{" "}
      </span>
    </div>
  );
};
export default TextUnderTitle;
