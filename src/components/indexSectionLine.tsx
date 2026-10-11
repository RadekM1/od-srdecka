import Image from 'next/image';

interface IndexSectionLineProps {
  sectionAnchor: boolean;
}

const IndexSectionLine = ({ sectionAnchor }: IndexSectionLineProps) => {
  return (
    <div className="mt-8 flex w-full select-none items-center justify-center">
      <Image
        src={'/heartsLine.svg'}
        alt="oddělovač sekce"
        width={1283}
        height={20}
        className={`w-5/6 self-center ${sectionAnchor ? 'mt-14' : 'my-14'} `}
      />
    </div>
  );
};
export default IndexSectionLine;
