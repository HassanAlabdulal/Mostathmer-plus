import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface FeaturesProps {
  title: string;
  description: string;
  featuresImage: string;
  dataAos: string;
}

const features: FeaturesProps[] = [
  {
    title: "زد فرصك وشارك استثمارك ",
    description:
      "تعال وجرب حظك! مع مُستثمر بلس تقدر تضيف استثمارك الخاص وتخلي العالم كله يطلع عليه. سواء كنت رائد أعمال فنان أو جديد، عرض استثماراتك صار أسهل من الآن.",
    featuresImage: "/assets/share.svg",
    dataAos: "fade-up",
  },
  {
    title: " وفّرنا لك كل التفاصيل اللي تحتاجها",
    description:
      " عجبتك الفرصة؟ عندنا لك كل التفاصيل! مُستثمر بلس يجيب لك كل المعلومات اللي تبغاها عن أي استثمار. ما يحتاج تدور وتحوس، كل شيء تبغاه تحصله عندنا.",
    featuresImage: "/assets/details.svg",
    dataAos: "fade-up",
  },
  {
    title: " فلترها بكيفك واختار زين",
    description:
      " كثرة الفرص ما تحيرك! مع مُستثمر بلس، نوفر لك تصفية الفرص بأسلوبك وبالطريقة اللي تناسبك. اختار القطاع، حدد المبلغ، واضرب لك لفة بين أحلى الفرص. ",
    featuresImage: "/assets/filter.svg",
    dataAos: "fade-up",
  },
  //   {
  //     title: " راقب الصرف لحظة بلحظة",
  //     description: " اعرف قيمة ريالك حول العالم! بسرعة وسهولة. ",
  //     featuresImage: "/assets/home.svg",
  //     dataAos: "fade-up",
  //   },
];
export default function investments() {
  return (
    <>
      <main className="min-h-screen w-full flex justify-center items-start mt-36 ">
        <section className="flex flex-col justify-center items-center gap-8 md:gap-12">
          <h2 className="md:text-7xl font-bold md:leading-relaxed leading-normal tracking-tight text-3xl text-center">
            فرص{" "}
            <span className="bg-gradient-to-b from-[#bfa260]/60 to-[#CFAA54] text-transparent bg-clip-text">
              الإستثمار
            </span>
          </h2>

          <div className="flex w-full flex-col gap-5 md:flex-row">
            <div className="flex-center min-h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
              <Image
                src="/assets/search.svg"
                alt="search"
                width={24}
                height={24}
              />
              <Input
                type="text"
                placeholder="d"
                // onChange={(e) => setQuery(e.target.value)}
                className="p-regular-16 border-0 bg-grey-50 outline-offset-0 placeholder:text-grey-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            {/* <CategoryFilter /> */}
          </div>

          <section id="features" className="container py-16 space-y-8">
            <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-8">
              {features.map(
                ({
                  title,
                  description,
                  featuresImage,
                  dataAos,
                }: FeaturesProps) => (
                  <Card
                    data-aos={dataAos}
                    key={title}
                    className="bg-[#fafafa] hover:bg-[#f1f1f1] dark:bg-[#121212] border-0 dark:hover:bg-[#27272a] transition-all max-w-[470px] duration-400 shadow-md  rounded-[3rem]"
                  >
                    <CardHeader className="mt-4">
                      <CardTitle className=" text-center ">{title}</CardTitle>
                    </CardHeader>

                    <CardDescription className=" text-lg text-center mx-4">
                      {description}
                    </CardDescription>

                    <CardFooter>
                      <img
                        src={featuresImage}
                        alt="About features"
                        className="w-[200px] lg:w-[270px] mx-auto"
                      />
                    </CardFooter>
                  </Card>
                )
              )}
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
