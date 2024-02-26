import { InvestmentsProps } from "@/interfaces/investments";

export const investments: InvestmentsProps[] = [
  {
    title: "بناء عمارة سكنية فاخرة ",
    investmentLocation: "الرياض",
    investmentImage: "/assets/building.jpg",
    investmentType: "عقاري",
    Coast: 7500000,
    Contact:
      "الاسم: محمد السالم | الهاتف: 0559094843 | البريد الإلكتروني: mohammed@gmail.com",
    Date: "14 ديسمبر 2023 - 14 ديسمبر 2025",
    Description: "عمارة سكنية مكونة من 6 طوابق و30 شقة",
    key: "1",
  },
  {
    title: "بناء مستشفى في الهفوف ",
    investmentLocation: "الأحساء",
    investmentImage: "/assets/hospital.jpg",
    investmentType: "صحي",
    Coast: 100000000,
    Contact:
      "الاسم: علي الفرج | الهاتف: 0552467843 | البريد الإلكتروني: ali@gmail.com",
    Date: "14 نوفمبر 2023 - 14 يناير 2025",
    Description: "مستشفى مكونة من 50 عيادات و10 طوابق",

    key: "2",
  },
  {
    title: "مطعم في أجدان ",
    investmentLocation: "الخبر",
    investmentImage: "/assets/restaurant.jpg",
    investmentType: "تجاري",

    Coast: 100000000,
    Contact:
      "الاسم: سالم الحربي | الهاتف: 0552525843 | البريد الإلكتروني: salem@gmail.com",
    Date: "14 أبريل 2024 - 14 مارس 2025",
    Description: "مطعم إيطالي فاخر في أجدان مكون من 3 طوابق",

    key: "3",
  },
];

export const investmentsMap = new Map<string, InvestmentsProps>(
  investments.map((investment) => [investment.key, investment])
);
