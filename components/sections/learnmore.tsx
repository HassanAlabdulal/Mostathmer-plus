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
      <section className="pt-32 md:pt-36 ">
        <div className="">
          <h2
            className="text-3xl md:text-6xl flex items-center justify-center gap-2 font-extrabold
             md:text-center md:leading-tight tracking-loose"
            data-aos="fade-up"
          >
            نجمع لك فرص الإستثمار في{" "}
            <span className="bg-gradient-to-b from-[#bfa260]/60 to-[#CFAA54] text-transparent bg-clip-text">
              مكان واحد
            </span>
          </h2>
        </div>
        <div>{/* <Services /> */}</div>
      </section>
    </main>
  );
}
