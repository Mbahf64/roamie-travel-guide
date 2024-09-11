"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Timespan from "../questionaire-3/timeSpan";

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

      
    </main>
  );
}
