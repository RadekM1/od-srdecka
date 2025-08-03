const AboutUsComponentTextAsideImg = ({isIndex}:{isIndex:boolean}) => {
  return (
    <>
      <div className="flex z-10 mb-5 md:mb-0 md:pr-2 justify-center h-full items-end w-full flex-row ">
        <div className={`text-start flex-col ${isIndex ? 'self-center' : 'self-end'} flex-grow  h-full`}>
          Možná za to může flaška vína a pár štamprlí
          slivovice, ale zrodil se nápad tvořit, co nás baví,
          společně. <span className="font-semibold">Jsme tři cérky z malé dědiny na Valašsku. </span>
          Každá jiná, ale vše děláme od srdéčka.
          Pečeme dorty a sladké bary k různým
          příležitostem.
        </div>
      </div>
    </>
  );
};
export default AboutUsComponentTextAsideImg;
