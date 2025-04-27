import Image from "next/image";

const SectionLine = () => {
  return (
    <div className="flex w-full max-w-[1283px] select-none items-center justify-center">
      <Image
        src={"/heartsLine.svg"}
        alt="oddělovač sekce"
        width={1283}
        height={20}
        className="w-full self-center my-14 "
      />
    </div>
  );
};
export default SectionLine;
