import Link from 'next/link';

const TextUnderTitle = () => {
  return (
    <>
      <p className="max-w-[1000px] px-2 text-center font-oldStandard text-xl font-semibold lg:text-2xl">
        Nepečeme pouze svatební a narozeninové dorty. Naše dorty si můžete
        objednat k různým příležitostem (křtiny, promoce, jen tak pro radost k
        nedělnímu kafíčku...).
      </p>
      <p className="max-w-[1000px] px-2 pb-14 pt-10 text-center font-oldStandard text-xl lg:text-2xl">
        Neváhejte nás kontaktovat a my vám rády pomůžeme osladit jakoukoliv vaši
        speciální událost!
      </p>
      <div className="mb-10 flex flex-row gap-12 pb-14 font-oldStandard">
        <a
          className="w-32 rounded-xl border-[1px] border-[#061E4C] bg-[#061E4C] py-2 text-base text-white duration-300 ease-in-out hover:bg-white hover:text-[#061E4C] lg:text-xl"
          href="#cenik-kotva"
        >
          Ceník
        </a>
        <Link
          className="w-32 rounded-xl border-[1px] border-[#061E4C] bg-[#061E4C] py-2 text-base text-white duration-300 ease-in-out hover:bg-white hover:text-[#061E4C] lg:text-xl"
          href="/galerie/dorty-svatebni"
        >
          Fotogalerie
        </Link>
      </div>
    </>
  );
};
export default TextUnderTitle;
