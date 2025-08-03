import Link from "next/link";

const TextUnderTitle = () => {
  return (
    <>
      <p className="text-center px-2 text-xl lg:text-2xl font-oldStandard font-semibold ">
        Nepečeme pouze svatební a narozeninové dorty. Naše dorty si můžete objednat  k různým příležitostem (křtiny, promoce, jen tak pro radost k nedělnímu kafíčku...).
      </p>
      <p className="text-center text-xl font-oldStandard lg:text-2xl pt-10 pb-14 px-2 ">
        Neváhejte nás kontaktovat a my vám rády pomůžeme osladit jakoukoliv vaši speciální událost!
      </p>
      <div className="flex mb-10 flex-row pb-14 gap-12 font-oldStandard">
        <a
          className="bg-[#061E4C] text-base hover:bg-white hover:text-[#061E4C] border-[1px] border-[#061E4C]  duration-300 ease-in-out  text-white w-32 py-2 rounded-xl"
          href="#cenik-kotva"
        >
          Ceník
        </a>
        <Link
          className="bg-[#061E4C] text-base hover:bg-white hover:text-[#061E4C] border-[1px] border-[#061E4C] duration-300 ease-in-out text-white w-32 py-2 rounded-xl"
          href="/galerie/dorty-svatebni"
        >
          Fotogalerie
        </Link>
      </div>
    </>
  );
};
export default TextUnderTitle;
