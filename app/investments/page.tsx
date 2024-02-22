"use client";

import React, { useState } from "react";
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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface InvestmentsProps {
  title: string;
  investmentLocation: string;
  investmentImage: string;
  investmentType: string;
  key: string;
}

const investments: InvestmentsProps[] = [
  {
    title: "زد فرصك وشارك استثمارك ",
    investmentLocation: "الدمام",
    investmentImage: "/assets/share.svg",
    investmentType: "تكنولوجي",
    key: "1",
  },
  {
    title: " وفّرنا لك كل التفاصيل اللي تحتاجها",
    investmentLocation: "الأحساء",
    investmentImage: "/assets/details.svg",
    investmentType: "عقاري",
    key: "2",
  },
  {
    title: " وفّرنا لك كل التفاصيل اللي تحتاجها",
    investmentLocation: "الخبر",
    investmentImage: "/assets/details.svg",
    investmentType: "عقاري",
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
              <SelectTrigger className="w-[280px] border-2 px-4 py-2 rounded-full dark:bg-[#121212]">
                <SelectValue placeholder="نوع الاستثمار" />
              </SelectTrigger>
              <SelectContent>
                {/* Dynamically generate SelectItem based on your data */}
                <SelectItem value="all">الكل</SelectItem>

                <SelectItem value="عقاري">عقاري</SelectItem>
                <SelectItem value="تكنولوجي">تكنولوجي</SelectItem>
                <SelectItem value="مالي">مالي</SelectItem>
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
                    key={key}
                    className="bg-[#fafafa] hover:bg-[#f1f1f1] dark:bg-[#121212] border-0 dark:hover:bg-[#27272a] transition-all max-w-[470px] duration-400 shadow-md  rounded-[3rem] p-0"
                  >
                    <CardHeader className="">
                      <img
                        src={investmentImage}
                        alt="About features"
                        className="w-[200px] lg:w-full"
                      />
                    </CardHeader>

                    <CardDescription className=" text-lg text-center my-2 mx-4">
                      {investmentLocation}
                    </CardDescription>
                    <CardDescription className=" text-lg text-center mx-4">
                      {investmentType}
                    </CardDescription>

                    <CardFooter>
                      <CardTitle className=" text-center ">{title}</CardTitle>
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
