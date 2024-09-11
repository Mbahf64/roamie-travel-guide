import React from "react";
import Link from "next/link";
import Image from "next/image";
import Shimmerbutton from "./shimmerbutton";
import Shineborder from "./shineBorder"

const Homepage = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <Image
          src="/background.svg"
          alt="background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <header className="lg:mx-[10em] mx-[1em] mt-9">
        <img src="/roamie_logo.svg" alt="logo" />
      </header>

      <div className=""> 
        {/* flex flex-col items-center justify-center min-h-[110vh]  lg:min-h-screen   */}


        <div className="absolute top-0 w-full h-screen flex items-center justify-center flex-col">
          
          {/* <div className="h-[30px] px-4 py- bg-white rounded-xl border border-[#943cf4] flex items-center justify-center">
            <div className="text-center text-[#646d80] text-sm font-normal font-sf-pro">
              I wish I was coming with you though but that's fine 😉.
            </div>
          </div> */}

          <Shineborder />
          <div className="flex flex-col items-center gap-5 mt-3">
            <div className="w-[323px] lg:w-full text-center text-[#292d32] text-[32px] font-normal font-sf-pro lg:text-[38px]">
              Meet your personal Travel Guide
            </div>
            <div className="lg:w-[430px] w-[351px] text-center text-[#646d80] text-[14px] font-normal font-sf-pro leading-tight">
              We would like to know about your trip so we can provide you with a
              tailored guide that fits your need.
            </div>
          </div>
          <div className="flex flex-col items-center gap-8 mt-8">
          <Link href="/questionaire-1"><Shimmerbutton /></Link>
      
            <div className="w-[369px] text-center">
              <span className="text-[#646d80] text-sm font-normal font-sf-pro">
                By starting I accept Roamie’s{" "}
              </span>
              <span className="text-[#646d80] text-sm font-normal font-sf-pro underline">
                Terms of service
              </span>
              <span className="text-[#646d80] text-sm font-normal font-sf-pro">
                {" "}
                and acknowledge{" "}
              </span>
              <span className="text-[#646d80] text-sm font-normal font-sf-pro underline">
                Privacy policy
              </span>
            </div>
          </div>
          <div className="w-[303px] lg:w-[642px] text-center text-[#646d80] text-sm font-normal font-sf-pro absolute top-[53rem]">
            Every law related response is backed by the current laws of the
            selected country.
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;



