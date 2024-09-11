"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Input from "../questionaire-1/input";
import CountryImageGrid from "../questionaire-1/countryImageGrid";

export default function Home() {
  return (
    <main className="sf-pro">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/background.svg"
          alt="background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <header className="lg:mx-[2em] mx-[2em] mt-9">
        <img src="/roamie_logo.svg" alt="logo" />
      </header>

      <div className="absolute top-0 w-full h-screen flex items-center justify-center flex-col gap-8">
        <button className="bg-[#292d32] px-6 py-4 bg rounded-[18px] text-white text-xs font-normal flex gap-1 md:hidden">
        <Link className="flex" href="/">
        <img className="image" alt="" src="/arrow_back.svg" />
        Go back
        </Link>
        
        </button>

        <div className="h-[74px] flex-col justify-center items-center gap-4 lg:gap-2 inline-flex mb-8">
          <div className="text-[#646d80] text-base font-normal font-['SF Pro'] leading-tight md:text-[40px]">
            Hey, Micheal!
          </div>
          <div className="w-[374px] text-center text-[#292d32] text-[32px] md:text-base">
            What city are you visiting?
          </div>
        </div>

        <Input />

        <CountryImageGrid />

        <div className="h-5 justify-start items-center gap-[5px] inline-flex -mb-[10rem] md:hidden">
          <div className="text-[#646d80] text-sm font-normal font-['SF Pro'] leading-tight">
            Can’t find you City?
          </div>
          <div className="text-[#292d32] text-sm font-normal font-['SF Pro'] underline leading-tight">
            Tell us where it is
          </div>
        </div>
      </div>
    </main>
  );
}
