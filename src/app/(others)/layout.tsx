import HearthSnake from '../../components/index/hearthSnake';
import React from 'react';

const OthersLayout = ({
  children
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="font-abhay flex w-full flex-col items-center justify-center overflow-hidden text-center text-base lg:text-xl">
      <HearthSnake />
      {children}
      <HearthSnake />
    </main>
  );
};

export default OthersLayout;
