'use client';

import React, { useState, useEffect } from 'react';
import { IoChevronDownSharp } from 'react-icons/io5';

export const ChevronDown = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  if (scrolled) return null;

  return (
    <div className="mb-3 mt-10 flex w-full items-center justify-center bg-[#061E4C]">
      <IoChevronDownSharp className="animate-bounce-custom h-10 w-10 text-white" />
    </div>
  );
};
