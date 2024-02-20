import image from "next/image";
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
    title: "دوّن استثمارك وحقق أرباح خيالية ",
    description:
      "حاسبتنا تساعدك تتابع استثماراتك بالأسهم بكل سهولة. حط اسم الشركة وتكاليفك، وخلينا نوريك الأرباح المتوقعة بعد العمولات والضرائب!",
    featuresImage: "/assets/home.svg",
    dataAos: "fade-up",
  },
  {
    title: " اعرف أرباحك وخسائرك بدقة",
    description:
      "تقدر تراقب أداء شركاتك المُستثمر فيها بدقة، مع متابعة لمعدل الأرباح والخسائر بشكل مباشر.",
    featuresImage: "/assets/home.svg",
    dataAos: "fade-up",
  },
  {
    title: " خطط لسداد قروضك بسهولة",
    description:
      "لا تخلي القروض تلخبط حساباتك! دخّل تفاصيل قرضك واحنا نحسب لك كل شيء، من الفائدة للقسط الشهري.",
    featuresImage: "/assets/home.svg",
    dataAos: "fade-up",
  },
  //   {
  //     title: " راقب الصرف لحظة بلحظة",
  //     description: " اعرف قيمة ريالك حول العالم! بسرعة وسهولة. ",
  //     featuresImage: "/assets/home.svg",
  //     dataAos: "fade-up",
  //   },
];

export default function Features() {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  }, []);
  return (
    <section id="features" className="container py-16 space-y-8">
      <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-8">
        {features.map(
          ({ title, description, featuresImage, dataAos }: FeaturesProps) => (
            <Card
              data-aos={dataAos}
              key={title}
              className="bg-[#fafafa] hover:bg-[#f7f7f7] dark:bg-[#121212] border-0 dark:hover:bg-[#27272a] transition-all max-w-[470px] duration-400 shadow-md  rounded-[3rem]"
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
  );
}
