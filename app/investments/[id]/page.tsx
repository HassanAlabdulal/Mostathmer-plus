"use client";

import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { investmentsMap } from "@/data/investments_dome";
import { InvestmentsProps } from "@/interfaces/investments";

// Mock data for the opportunity
export default function InvestmentDetails({
  params,
}: {
  params: { id: string };
}) {
  // Initialize state with an empty object or with initial values

  const investment = investmentsMap.get(params.id);

  // Format project value as currency

  const formattedProjectValue = new Intl.NumberFormat("ar-SA", {
    style: "currency",
    currency: "SAR",
  }).format(investment?.Coast ?? 0);

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Image and Title */}
        <div className="mt-16 ">
          <h2 className="text-center text-2xl font-semibold my-4">
            {investment?.title}
          </h2>
        </div>

        {/* Cards Section */}
        <div className=" grid-cols-1 md:grid-cols-2">
          {/* Card for Project Image */}
          <Card className="flex items-center justify-center  min-h-[300px] max-h-[500px] ">
            <CardContent className="flex items-center justify-center p-10">
              <img
                src={investment?.investmentImage}
                alt="Project"
                className="  object-cover min-w-[100px] min-h-[100px] max-w-[500px] max-h-[500px] max-sm:max-w-[250px] max-sm:max-h-[250px]"
              />
            </CardContent>
          </Card>

          {/* Card for Detailed Description */}
          <Card className="flex items-center justify-center hover:bg-[#f1f1f1] dark:hover:bg-[#27272a] h-32 transition-all duration-200">
            <CardContent>
              <p className="text-center">
                <strong>الوصف التفصيلي:</strong> <br />{" "}
                {investment?.Description}
              </p>
            </CardContent>
          </Card>

          {/* Card for Investment Type */}
          <Card className="flex items-center justify-center hover:bg-[#f1f1f1] dark:hover:bg-[#27272a] h-32 transition-all duration-200">
            <CardContent>
              <p className="text-center mt-5">
                <strong>نوع الاستثمار:</strong> <br />{" "}
                {investment?.investmentType}
              </p>
            </CardContent>
          </Card>

          {/* Card for Project Value */}
          <Card className="flex items-center justify-center hover:bg-[#f1f1f1] dark:hover:bg-[#27272a] h-32 transition-all duration-200">
            <CardContent>
              <p className="text-center mt-5">
                <strong>تكلفة المشروع:</strong> <br /> {investment?.Coast}
              </p>
            </CardContent>
          </Card>

          {/* Card for Investment Location */}
          <Card className="flex items-center justify-center hover:bg-[#f1f1f1] dark:hover:bg-[#27272a] h-32 transition-all duration-200">
            <CardContent>
              <p className="text-center mt-5">
                <strong>موقع الاستثمار:</strong> <br />{" "}
                {investment?.investmentLocation}
              </p>
            </CardContent>
          </Card>

          {/* Card for Project Value */}
          <Card className="flex items-center justify-center hover:bg-[#f1f1f1] dark:hover:bg-[#27272a] h-32 transition-all duration-200">
            <CardContent>
              <p className="text-center mt-5">
                <strong>المدة الزمنية:</strong> <br /> {investment?.Date}
              </p>
            </CardContent>
          </Card>

          {/* Card for Contact Details */}
          <Card className="flex items-center justify-center hover:bg-[#f1f1f1] dark:hover:bg-[#27272a] h-32 transition-all duration-200">
            <CardContent>
              <p className="text-center mt-5">
                <strong>معلومات الاتصال:</strong> <br /> {investment?.Contact}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
