import type { Metadata } from "next";
import {
  Abhaya_Libre,
  Old_Standard_TT,
  Oooh_Baby,
  Satisfy,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/UI/navbar";
import React from "react";
import Footer from "@/components/footer";

const OoohBaby = Oooh_Baby({
  weight: "400",
  variable: "--font-OoohBaby",
  subsets: ["latin", "latin-ext"],
});

const satisfy = Satisfy({
  weight: "400",
  variable: "--font-satisfy",
  subsets: ["latin"],
});

const abhaya = Abhaya_Libre({
  weight: "400",
  variable: "--font-abhaya",
  subsets: ["latin", "latin-ext"],
});

const oldStandard = Old_Standard_TT({
  weight: "400",
  variable: "--font-oldStandard",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Pečeme od srdéčka z Kašavy",
  description:
    "Jsme tři cérky z malé dědiny na Valašsku. Každá jiná, ale vše děláme od srdéčka. Pečeme dorty a sladké bary k různým příležitostem.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`flex w-full text-[#061E4C] flex-col justify-center text-center ${satisfy.variable} ${OoohBaby.variable} ${abhaya.variable} ${oldStandard.variable} antialiased`}
      >
        <header>
          <Navbar />
        </header>
        <div className="h-[56px] bg-[#061E4C]"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
