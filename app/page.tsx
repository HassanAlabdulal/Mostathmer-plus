"use client";

import { FAQ } from "@/components/sections/faq";
import Homepage from "@/components/sections/homepage";
import Learnmore from "@/components/sections/learnmore";

export default function Home() {
  return (
    <section>
      <Homepage />
      <Learnmore />
      <FAQ />
    </section>
  );
}
