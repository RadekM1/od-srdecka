const AboutUsComponentTextAsideImg = ({ isIndex }: { isIndex: boolean }) => {
  return (
    <>
      <div className="z-10 mb-5 flex h-full w-full flex-row items-end justify-center md:mb-0 md:pr-2">
        <div
          className={`flex-col text-start ${isIndex ? 'self-center' : 'self-end pr-4 lg:pr-6'} h-full flex-grow`}
        >
          Možná za to může flaška vína a pár štamprlí slivovice, ale zrodil se
          nápad tvořit, co nás baví, společně.{' '}
          <span className="font-semibold">
            Jsme tři cérky z malé dědiny na Valašsku.{' '}
          </span>
          Každá jiná, ale vše děláme od srdéčka. Pečeme dorty a sladké bary k
          různým příležitostem.
        </div>
      </div>
    </>
  );
};
export default AboutUsComponentTextAsideImg;
