// import Services from "./services";
// import Aos from "aos";
// import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Learnmore() {
  //   useEffect(() => {
  //     Aos.init({
  //       duration: 800,
  //     });
  //   }, []);

  return (
    <main
      id="learnmore"
      className="flex items-start justify-center min-h-screen"
    >
      <section className="pt-24 md:pt-36 ">
        <div className="">
          <h1 className=" md:text-7xl font-bold md:leading-relaxed leading-normal tracking-tight text-3xl text-center">
            نجّمع لك فرص الإستثمار في <br />
            <span className="  bg-gradient-to-b from-[#bfa260]/60 to-[#CFAA54] text-transparent bg-clip-text">
              مكان واحد
            </span>
          </h1>
        </div>
        <div>{/* <Services /> */}</div>
      </section>
    </main>
  );
}
