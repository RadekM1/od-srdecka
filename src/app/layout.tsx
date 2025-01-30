import type { Metadata } from 'next';
import { Satisfy, Abhaya_Libre, Old_Standard_TT } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';



const satisfy = Satisfy({
  weight: '400',
  variable: '--font-satisfy',
  subsets: ['latin']
});

const abhaya = Abhaya_Libre({
  weight: '400',
  variable: '--font-abhaya',
  subsets: ['latin']
});

const oldStandard = Old_Standard_TT({
  weight: '400',
  variable: '--font-oldStandard',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Pečeme od srdéčka z Kašavy',
  description:
    'Jsme tři cérky z malé dědiny na Valašsku. Každá jiná, ale vše děláme od srdéčka. Pečeme dorty a sladké bary k různým příležitostem.'
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`flex w-full flex-col justify-center text-center ${satisfy.variable} ${abhaya.variable} ${oldStandard.variable} antialiased`}
      >
        <header className="">
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>footer context</footer>
      </body>
    </html>
  );
}
