import Image from "next/image";

const IndexSectionLine = () => {
  return (
    <div className="flex w-full  select-none items-center justify-center">
      <Image
        src={"/heartsLine.svg"}
        alt="oddělovač sekce"
        width={1283}
        height={20}
        className="w-5/6 self-center my-14 "
      />
    </div>
  );
};
export default IndexSectionLine;
