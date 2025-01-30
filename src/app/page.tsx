import Link from 'next/link';

const Home = () => {
  return (
    <div className="text-center font-satisfy">
      index main component
      <br />o nás: <Link href={'/o-nas'}>ODKAZ</Link>
    </div>
  );
};
export default Home;
