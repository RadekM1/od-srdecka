"use client";

import React, { useState, useEffect } from "react";
import { IoChevronDownSharp } from "react-icons/io5";

export const ChevronDown = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (scrolled) return null;

  return (
    <div className="w-full mt-10 mb-3 flex justify-center items-center bg-[#061E4C]">
      <IoChevronDownSharp className="h-10 w-10 animate-bounce-custom text-white" />
    </div>
  );
};
