const NotesUnderTable = ({ fetchedNotes }: { fetchedNotes: string[] }) => {
  return (
    <p className="flex w-[90%] max-w-[1000px] flex-col gap-2 self-center text-start font-oldStandard text-sm xl:text-base">
      <span className="text-start">{fetchedNotes[0]}</span>
      <span className="text-start">{fetchedNotes[1]}</span>
      <span className="text-start">
        Možnost upéct také{' '}
        <span className="font-semibold">bezlepkové a bezlaktózové verze</span>{' '}
        dortu (za příplatek), avšak mohou obsahovat stopy těchto alergenů.
      </span>
      <span className="text-start">
        Veškeré alergeny jsou vyznačeny u jednotlivých příchutí dortů.
      </span>
      <span className="mt-6 text-start font-semibold">
        Upozorňujeme, že dorty je nutné spotřebovat nejpozději do 3 dnů od dne
        vyzvednutí a uchovávat při teplotě do 8 stupnů Celsia.
      </span>
    </p>
  );
};
export default NotesUnderTable;
