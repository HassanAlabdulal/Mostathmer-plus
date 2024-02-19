import { Button } from "../ui/button";
import Image from "next/image";

export default function Homepage() {
  return (
    <main className="min-h-screen w-full">
      <div className=" flex items-center justify-center pt-24 max-sm:pt-0 mx-auto">
        <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
          <div className="text-center lg:text-start space-y-6">
            <main className="text-5xl md:text-6xl font-bold">
              <h1 className="inline">
                <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
                  Shadcn
                </span>{" "}
                landing page
              </h1>{" "}
              for{" "}
              <h2 className="inline">
                <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                  React
                </span>{" "}
                developers
              </h2>
            </main>

            <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
              Build your React landing page effortlessly with the required
              sections to your project.
            </p>

            <div className="space-y-4 md:space-y-0 md:space-x-4">
              <Button className="w-full text-lg md:w-1/3">اعرف أكثر 🔥</Button>
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
      </div>
    </main>
  );
}
