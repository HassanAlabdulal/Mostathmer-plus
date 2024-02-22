"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface InvestmentsProps {
  title: string;
  investmentLocation: string;
  investmentImage: string;
  investmentType: string;
  key: string;
}

const investments: InvestmentsProps[] = [
  {
    title: "بناء عمارة سكنية فاخرة ",
    investmentLocation: "الرياض",
    investmentImage: "/assets/building.jpg",
    investmentType: "عقاري",
    key: "1",
  },
  {
    title: "بناء مستشفى في الهفوف ",
    investmentLocation: "الأحساء",
    investmentImage: "/assets/hospital.jpg",
    investmentType: "صحي",
    key: "2",
  },
  {
    title: "مطعم في أجدان ",
    investmentLocation: "الخبر",
    investmentImage: "/assets/restaurant.jpg",
    investmentType: "تجاري",
    key: "3",
  },
];

export default function Investments() {
  // States for managing the search query, location, and investment type
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  // Debugging statement to check the current filter states
  console.log({ searchQuery, locationFilter, typeFilter });

  // Function to filter investments based on search query, location, and type
  const filteredInvestments = investments.filter(
    (investment) =>
      investment.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (locationFilter === "all" ||
        locationFilter === "" ||
        investment.investmentLocation.trim() === locationFilter.trim()) &&
      (typeFilter === "all" ||
        typeFilter === "" ||
        investment.investmentType === typeFilter)
  );

  return (
    <>
      <main className="min-h-screen w-full flex justify-center items-start mt-36">
        <section className="flex flex-col justify-center items-center gap-8 md:gap-12">
          <h2 className="md:text-7xl font-bold md:leading-relaxed leading-normal tracking-tight text-3xl text-center">
            فرص{" "}
            <span className="bg-gradient-to-b from-[#bfa260]/60 to-[#CFAA54] text-transparent bg-clip-text">
              الإستثمار
            </span>
          </h2>

          <div className="flex min-w-1/2 justify-center items-center flex-col gap-5 md:flex-row">
            {/* Location Filter */}
            <Select
              onValueChange={(value) => setLocationFilter(value)}
              defaultValue=""
            >
              <SelectTrigger className="w-[280px] border-2 px-4 py-5 rounded-full dark:bg-[#121212]">
                <SelectValue placeholder="موقع الإستثمار" />
              </SelectTrigger>
              <SelectContent>
                {/* Dynamically generate SelectItem based on your data */}
                <SelectItem value="all">الكل</SelectItem>
                <SelectItem value="الرياض">الرياض</SelectItem>
                <SelectItem value="جدة">جدة</SelectItem>
                <SelectItem value="مكة المكرمة">مكة المكرمة</SelectItem>
                <SelectItem value="المدينة المنورة">المدينة المنورة</SelectItem>
                <SelectItem value="الخبر">الخبر</SelectItem>
                <SelectItem value="الطائف">الطائف</SelectItem>
                <SelectItem value="تبوك">تبوك</SelectItem>
                <SelectItem value="القطيف">القطيف</SelectItem>
                <SelectItem value="خميس مشيط">خميس مشيط</SelectItem>
                <SelectItem value="الأحساء">الأحساء</SelectItem>
                <SelectItem value="حائل">حائل</SelectItem>
                <SelectItem value="الدمام">الدمام</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center justify-center  md:w-1/3 w-[280px] overflow-hidden rounded-full border-2 dark:bg-[#121212] px-4 py-1">
              <Image
                src="/assets/search.svg"
                alt="search"
                width={24}
                height={24}
              />
              <Input
                type="text"
                placeholder="بحث..."
                onChange={(e) => setSearchQuery(e.target.value)}
                className="p-regular-16 border-0  dark:bg-[#121212] outline-offset-0 placeholder:text-grey-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            {/* Investment Type Filter using shadcn Select */}
            <Select
              onValueChange={(value) => setTypeFilter(value)}
              defaultValue=""
            >
              <SelectTrigger className="w-[280px] border-2 px-4 py-5 rounded-full dark:bg-[#121212]">
                <SelectValue placeholder="نوع الاستثمار" />
              </SelectTrigger>
              <SelectContent>
                {/* Dynamically generate SelectItem based on your data */}
                <SelectItem value="all">الكل</SelectItem>

                <SelectItem value="عقاري">عقاري</SelectItem>
                <SelectItem value="صناعي">صناعي</SelectItem>
                <SelectItem value="سياحي">سياحي</SelectItem>
                <SelectItem value="تعليمي">تعليمي</SelectItem>
                <SelectItem value="صحي">صحي</SelectItem>
                <SelectItem value="زراعي">زراعي</SelectItem>
                <SelectItem value="تجاري">تجاري</SelectItem>
                <SelectItem value="خدماتي">خدماتي</SelectItem>
                <SelectItem value="طاقة">طاقة</SelectItem>
                <SelectItem value="نقل ولوجستيات">نقل ولوجستيات</SelectItem>
                <SelectItem value="ترفيهي">ترفيهي</SelectItem>
                <SelectItem value="رياضي">رياضي</SelectItem>
                <SelectItem value="بنية تحتية">بنية تحتية</SelectItem>
                <SelectItem value="تقنية المعلومات">تقنية المعلومات</SelectItem>
                <SelectItem value="تجارة إلكترونية">تجارة إلكترونية</SelectItem>
                <SelectItem value="استشارات">استشارات</SelectItem>
                <SelectItem value="تسويق">تسويق</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <section id="investments" className=" py-16 space-y-8">
            <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-8">
              {filteredInvestments.map(
                ({
                  title,
                  investmentLocation,
                  investmentImage,
                  investmentType,
                  key,
                }) => (
                  <Card
                    className="max-w-sm bg-[#fafafa] border border-gray-200 rounded-xl shadow dark:bg-[#121212]
                     dark:border-gray-700 transition-all duration-300 hover:scale-105"
                    key={key}
                  >
                    <Link href="/show-opportunity">
                      <img
                        className="rounded-t-xl h-[200px] w-full object-fit"
                        src={investmentImage}
                        alt="Investment image"
                      />
                    </Link>
                    <CardHeader className="p-5 flex flex-col justify-center items-center">
                      <CardDescription className="mb-4 text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                        {title}
                      </CardDescription>
                      <CardContent className="mb-8 font-normal text-muted-foreground">
                        <div className="flex flex-wrap items-center justify-center gap-4 w-full">
                          <Badge
                            variant="secondary"
                            className="md:text-base text-sm flex items-center justify-center bg-[#bfa260] hover:bg-[#bfa260]/90 w-24 h-8"
                          >
                            {investmentLocation}
                          </Badge>

                          <Badge
                            variant="secondary"
                            className="md:text-base text-sm flex items-center justify-center bg-[#bfa260] hover:bg-[#bfa260]/90 w-24 h-8"
                          >
                            {investmentType}
                          </Badge>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="px-10 rounded-3xl">
                          <Link href="/show-opportunity">
                            اعرف أكثر
                            <FontAwesomeIcon
                              icon={faArrowLeft}
                              className="mr-2"
                            />
                          </Link>
                        </Button>
                      </CardFooter>
                    </CardHeader>
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
