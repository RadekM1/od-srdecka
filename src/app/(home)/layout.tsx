import React from "react";

const HomeLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="text-center overflow-hidden flex w-auto flex-col">
      {children}
    </main>
  );
};

export default HomeLayout;
