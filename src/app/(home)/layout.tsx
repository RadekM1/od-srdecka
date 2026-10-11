import React from 'react';

const HomeLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="flex w-auto flex-col overflow-hidden text-center">
      {children}
    </main>
  );
};

export default HomeLayout;
