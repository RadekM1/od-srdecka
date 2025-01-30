'use client';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  let path = usePathname();

  console.log('aktuální cesta:', path);
  return (
    <>
      Navbááár je na stránce:
      {path === '/' ? 'je index' : 'není index, haha !'}
    </>
  );
};
export default Navbar;
