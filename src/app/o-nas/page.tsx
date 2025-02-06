import Link from "next/link";

const page = () => {
  return (
    <>
      stránka o nás
      <br />
      domů: <Link href={"#"}>ODKAZ</Link>
    </>
  );
};
export default page;
