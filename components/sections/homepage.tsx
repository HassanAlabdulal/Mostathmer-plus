import { Button } from "../ui/button";
import Image from "next/image";

export default function Homepage() {
  const scrollToLearnMore = () => {
    const element = document.getElementById("learnmore");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main className="min-h-screen w-full">
      <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
        <div className="text-center space-y-6 flex justify-center items-center flex-col">
          <main className="text-2xl md:text-5xl font-bold md:leading-tight leading-normal tracking-tight  ">
            <h1 className="inline">
              <span className="inline bg-gradient-to-r from-[#3cb468]  to-[#30a059] text-transparent bg-clip-text">
                مُسثمر بلس:{" "}
              </span>{" "}
              بوابتك لاستكشاف فرص الإستثمار في المملكة{" "}
            </h1>
          </main>

          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            نقدم لك الطريق المباشر للوصول إلى أفضل فرص الاستثمار بالمملكة
            العربية السعودية
          </p>

          <div className="space-y-6 md:space-y-0 md:space-x-4">
            <Button
              onClick={scrollToLearnMore}
              className="w-full text-lg px-10"
            >
              اعرف أكثر 🔥
            </Button>
          </div>
        </div>

        <div className="z-10">
          <Image
            src="/assets/homepage.svg"
            width={600}
            height={600}
            className="max-md:w-[300px] max-md:h-[300px] "
            alt="Email"
          />
        </div>

        {/* Shadow effect */}
        <div className="shadow"></div>
      </section>
    </main>
  );
}
