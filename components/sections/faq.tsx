import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: 'هل لازم اسجل في "مُستثمر بلس" عشان اشوف الفرص؟',
    answer:
      "لا، ما يحتاج! تقدر تلقى نظرة على كل الفرص بدون تسجيل. بس ترى هاا، إذا بغيت تحفظ فرص معينة أو تضيف استثماراتك، يبغالك تسجل معنا.",
    value: "faq-1",
  },
  {
    question: "كيف أقدر أضيف استثماري على الموقع؟",
    answer:
      "موضوعك سهل! بس تسجل وتعبي تفاصيل استثمارك وخلاص انبسط، استثمارك صار متاح لكل الناس يشوفونه.",
    value: "faq-2",
  },
  {
    question: "أبغى أعرف كل التفاصيل عن فرصة معينة، كيف؟",
    answer: "اضغط على الفرصة اللي شدتك، وبتلاقي كل صغيرة وكبيرة عنها.",
    value: "faq-3",
  },
  {
    question: "كيف أقدر أفرز الفرص حسب اللي يناسبني؟",
    answer:
      "فيه عندنا أدوات تفلتر لك الفرص كيف ما تحب. اختر القطاع، حجم الاستثمار، العائد المتوقع، وكل شيء يهمك، والموقع بيسوي الباقي.",
    value: "faq-4",
  },
  {
    question: 'هل "مُستثمر بلس" بيعطيني نصائح عن وين أستثمر؟',
    answer:
      "لا، إحنا نوفر لك المعلومات، بس القرار يبقى لك. نصيحة منا، دايم اسأل مستشارك المالي قبل ما تتخذ خطوة.",
    value: "faq-5",
  },
  {
    question: "لو حبيت أتواصل مع صاحب فرصة، كيف الطريقة؟",
    answer: "سهلة! داخل صفحة كل فرصة فيه خيار تتواصل مع صاحب العرض مباشرة.",
    value: "faq-6",
  },
  {
    question: "وش يصير لو حبيت أشيل استثماري من الموقع؟",
    answer:
      "أي وقت تقدر تحذف أو تعدل على استثمارك. أنت المسؤول عن معلوماتك وفرصك، وحنا نحترم خصوصيتك.",
    value: "faq-7",
  },
  {
    question: "فيه رسوم على إضافة أو مشاهدة الاستثمارات؟",
    answer:
      " لا يا طويل العمر، المشاهدة مجانية وإضافة الاستثمارات كمان. نبغى الفرص تكون متاحة للجميع.",
    value: "faq-8",
  },
];

export const FAQ = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  }, []);
  return (
    <main className="flex justify-center items-center">
      <section id="faq" className="container py-12 sm:py-32">
        <div className="">
          <h2
            className="text-3xl md:text-5xl flex items-center max-sm:justify-center gap-3 font-extrabold
                md:leading-normal leading-loose tracking-tight mb-4"
            data-aos="fade-up"
          >
            الأسئلة
            <span className="bg-gradient-to-b from-[#bfa260]/60 to-[#CFAA54] text-transparent bg-clip-text">
              الشائعة
            </span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full AccordionRoot">
          {FAQList.map(({ question, answer, value }: FAQProps) => (
            <AccordionItem
              className="hover:bg-[#f1f1f1] dark:hover:bg-[#262525]"
              key={value}
              value={value}
              data-aos="fade-up"
            >
              <AccordionTrigger className="text-right max-sm:text-sm text-xl">
                {question}
              </AccordionTrigger>

              <AccordionContent className="md:text-lg text-sm text-muted-foreground">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <h3 className="font-medium text-lg mt-4 flex gap-2 " data-aos="fade-up">
          عندك أسئلة زيادة؟
          <a
            href="#"
            className="text-[#bfa260] transition-all cursor-pointer border-[#bfa260] hover:border-b-2"
          >
            تواصل معنا
          </a>
        </h3>
      </section>
    </main>
  );
};
