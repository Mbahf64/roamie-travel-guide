"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Reasonfortravelling from "../questionaire-2/reasonForTravelling";

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

      <div className="absolute top-0 w-full h-screen flex items-center justify-center flex-col gap-6 ">
        <button className="bg-[#292d32] px-6 py-4 bg rounded-[18px] text-white text-xs font-normal flex gap-1 md:hidden">
        <Link className="flex" href="/questionaire-1">
        <img className="image" alt="" src="/arrow_back.svg" />
        Go back
        </Link>
        </button>

        <div className="w-[375px] text-center">
          <span className="text-[#292d32] text-[32px] font-['SF Pro']">Why are you traveling to London, </span>
          <span className="text-[#646d80] text-[32px] font-['SF Pro']">United Kingdom</span>
          <span className="text-[#292d32] text-[32px] font-['SF Pro']">?</span>
        </div>

        <Reasonfortravelling />
      </div>
    </main>
  );
}
