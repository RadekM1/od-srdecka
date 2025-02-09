const NotesUnderTable = () => {
  return (
    <span className="text-sm gap-2 xl:text-base font-oldStandard flex flex-col self-center w-[90%] max-w-[1000px] text-start ">
      <span className="text-start">
        Uvedené ceny jsou bez zdobení, to pak počítáme individuálně.
      </span>
      <span className="text-start">
        Pistáciový dort je za příplatek 200 až 300 Kč v závislosti na velikosti
        dortu, pistáciový krém 150 až 200 Kč.{" "}
      </span>
      <span className="text-start">
        Možnost upéct také{" "}
        <span className="font-semibold">bezlepkové a bezlaktózové verze</span>{" "}
        dortu (za příplatek), avšak mohou tam být stopy těchto alergenů.
      </span>
      <span className="text-start">
        Veškeré alergeny jsou vyznačeny u jednotlivých příchutí dortů.
      </span>
      <span className="text-start font-semibold">
        Upozorňujeme, že dorty je nutné spotřebovat nejpozději do 3 dnů od dne
        vyzvednutí a uchovávat při teplotě do 8 stupnů Celsia.
      </span>
    </span>
  );
};
export default NotesUnderTable;
