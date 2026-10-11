import React from 'react';
import Reference from '@/components/index/reference';
import PageTitle from '@/components/pageTitle';
import CakeSections from './cakeSections';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galerie | Od Srdéčka - Dorty a sladké bary',
  description:
    'Prohlédněte si naše s láskou upečené dorty, sladké bary a další dobroty. Inspirujte se pro vaši oslavu, svatbu či narozeniny.',
  alternates: {
    canonical: 'https://www.odsrdecka.cz/galerie/dorty'
  },
  icons: {
    icon: '/favicon.ico'
  },
  keywords: [
    'galerie',
    'fotogalerie',
    'inspirace',
    'dorty fotky',
    'svatební dorty',
    'sladký bar',
    'narozeninové dorty',
    'Od Srdéčka'
  ],
  authors: [{ name: 'Radek Morong', url: 'https://www.radekmorong.cz' }],

  openGraph: {
    title: 'Galerie našich dobrot | Od Srdéčka',
    description:
      'Inspirujte se v naší fotogalerii dortů a sladkých barů pro vaši oslavu.',
    url: 'https://www.odsrdecka.cz/galerie/dorty',
    siteName: 'Od Srdéčka',
    images: [
      {
        url: 'https://odsrdecka.cz/index/team.png',
        width: 1200,
        height: 630,
        alt: 'Fotogalerie dortů a sladkých barů Od Srdéčka'
      }
    ],
    locale: 'cs_CZ',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galerie našich dobrot | Od Srdéčka',
    description:
      'Inspirujte se v naší fotogalerii dortů a sladkých barů pro vaši oslavu.',
    images: ['https://odsrdecka.cz/index/team.png']
  }
};

const gallerySections = [
  {
    url: '/galerie/dorty-svatebni',
    label: 'Svatební',
    position: 'left-[5%] sm:left-[15%] '
  },
  {
    url: '/galerie/dorty-narozeninove',
    label: 'Narozeninový',
    position: 'left-1/2 -translate-x-1/2'
  },
  {
    url: '/galerie/dorty-jine-prilezitosti',
    label: 'Jiné příležitosti',
    position: 'right-[5%] sm:right-[15%] '
  }
];

const OthersLayout = ({
  children
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <section className="mx-3 mb-10 flex w-full max-w-[1000px] flex-col items-center justify-center px-2 text-center">
      <PageTitle title="Galerie dortů" />
      <div className="relative mx-4 mb-14 mt-20 flex w-full max-w-[1000px] items-center justify-center">
        <img
          className="absolute top-1/2 w-full -translate-y-1/2"
          src="/others/line.svg"
          alt="oddělovací linka"
        />
        <CakeSections cakeSections={gallerySections} />
      </div>
      {children}
      <Reference />
    </section>
  );
};

export default OthersLayout;
