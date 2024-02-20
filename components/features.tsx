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
    title: "زد فرصك وشارك استثمارك ",
    description:
      "تعال وجرب حظك! مع مُستثمر بلس تقدر تضيف استثمارك الخاص وتخلي العالم كله يطلع عليه. سواء كنت رائد أعمال فنان أو جديد، عرض استثماراتك صار أسهل من الآن.",
    featuresImage: "/assets/home.svg",
    dataAos: "fade-up",
  },
  {
    title: " وفّرنا لك كل التفاصيل اللي تحتاجها",
    description:
      " عجبتك الفرصة؟ عندنا لك كل التفاصيل! مُستثمر بلس يجيب لك كل المعلومات اللي تبغاها عن أي استثمار. ما يحتاج تدور وتحوس، كل شيء تبغاه تحصله عندنا.",
    featuresImage: "/assets/home.svg",
    dataAos: "fade-up",
  },
  {
    title: " فلترها بكيفك واختار زين",
    description:
      " كثرة الفرص ما تحيرك! مع مُستثمر بلس، نوفر لك تصفية الفرص بأسلوبك وبالطريقة اللي تناسبك. اختار القطاع، حدد المبلغ، واضرب لك لفة بين أحلى الفرص. ",
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
