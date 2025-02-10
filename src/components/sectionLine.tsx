import Image from "next/image";

const SectionLine = () => {
  return (
    <div className="flex w-full max-w-[1000px] select-none items-center justify-center">
      <Image
        src={"/heartsLine.svg"}
        alt="oddělovač sekce"
        width={1000}
        height={20}
        className="w-full self-center my-14 "
      />
    </div>
  );
};
export default SectionLine;
