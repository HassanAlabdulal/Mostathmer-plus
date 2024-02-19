"use client";

import Homepage from "@/components/sections/homepage";
import Navbar from "@/components/navbar";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();
  const shape =
    theme === "dark" ? "/assets/shape-dark.png" : "/assets/shape-light.png";

  return (
    // <section className="min-h-screen w-full background">
    <main className="relative poppins  md:px-[9rem]">
      <Navbar />
      <div className="px-4 flex flex-col gap-[7.69rem]">
        <Homepage />

        <div className="absolute top-0 right-0 -z-10">
          <img src={shape} alt="Top right background shape" />
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
        <div className="relative">
          {/* <CategorySection /> */}
          {/* <div className="absolute top-0 right-0">
          <img src="/images/plus-group.png" alt="blob background shape" />
        </div> */}
        </div>
        {/* 
      <TopSellingSection />
      <BookNextTripSection />
      <TestimonialSection />
      <LogoGroupSection />
      <NewsLetterSection />
      <FooterSection /> */}
      </div>
    </main>
    // </section>
  );
}
