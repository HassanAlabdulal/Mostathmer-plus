"use client";

import Homepage from "@/components/sections/homepage";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-screen max-w-full background">
      <main className=" sticky poppins  md:px-[9rem]">
        {/* <Navbar /> */}
        <div className="px-4 flex flex-col gap-[7.69rem]">
          <Homepage />

          <div className="absolute top-0 right-0 -z-10">
            {/* <Image
            src={shape}
            width={430}
            height={430}
            className="max-md:w-[300px] max-md:h-[300px] "
            alt="Email"
          /> */}
          </div>
          {/* <div className="absolute bottom-0 right-0 -z-10">
          <img
            src="/assets/bottom-right-gradient.png"
            alt="blob background shape"
          />
        </div>
        <div className="absolute top-0 left-0 -z-10">
          <img
            src="/assets/top-left-gradient.png"
            alt="blob background shape"
          />
        </div> */}
        </div>
      </main>
    </section>
  );
}
