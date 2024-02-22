"use client";

import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

// Mock data for the opportunity
export default function ShowOpportunity() {
  // Initialize state with an empty object or with initial values
  const [opportunityData, setOpportunityData] = useState({
    opportunityTitle: "",
    detailedDescription: "",
    investmentType: "",
    projectValue: 0,
    projectDate: "",
    investmentLocation: "",
    contactDetails: "",
    projectImageUrl: "",
  });

  useEffect(() => {
    // This is where you would fetch data from your database
    // For now, I'm using a mock object to simulate fetched data
    const mockDataFromDatabase = {
      opportunityTitle: "بناء عمارة سكنية فاخرة",
      detailedDescription: "عمارة سكنية مكونة من 6 طوابق و30 شقة",
      investmentType: "عقاري",
      projectValue: 7500000,
      projectDate: "14 ديسمبر 2023 - 14 ديسمبر 2025",
      investmentLocation: "الرياض",
      contactDetails:
        "الاسم: محمد السالم | الهاتف: 0559094843 | البريد الإلكتروني: mohammed@gmail.com",
      projectImageUrl: "/assets/photo.png",
    };

    // Simulate setting state with data fetched from a database
    setOpportunityData(mockDataFromDatabase);
  }, []);

  // Destructure the opportunityData object for easier access to its properties
  const {
    opportunityTitle,
    detailedDescription,
    investmentType,
    projectValue,
    projectDate,
    investmentLocation,
    contactDetails,
    projectImageUrl,
  } = opportunityData;

  // Format project value as currency
  const formattedProjectValue = new Intl.NumberFormat("ar-SA", {
    style: "currency",
    currency: "SAR",
  }).format(projectValue);

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Image and Title */}
        <div className="mt-16 ">
          <h2 className="text-center text-2xl font-semibold my-4">
            {opportunityTitle}
          </h2>
        </div>

        {/* Cards Section */}
        <div className="">
          {/* Card for Project Image */}
          <Card className="flex items-center justify-center hover:bg-[#f1f1f1] dark:hover:bg-[#27272a] min-h-[300px] max-h-[500px]">
            <CardContent className="flex items-center justify-center p-10">
              <img
                src={projectImageUrl}
                alt="Project"
                className="  object-cover min-w-[200px] min-h-[200px] max-w-[500px] max-h-[500px]" // Adjust the percentages as needed
              />
            </CardContent>
          </Card>

          {/* Card for Detailed Description */}
          <Card className="flex items-center justify-center hover:bg-[#f1f1f1] dark:hover:bg-[#27272a] h-32 col-span-1 md:col-span-2">
            <CardContent>
              <p className="text-center">
                <strong>الوصف التفصيلي:</strong> <br /> {detailedDescription}
              </p>
            </CardContent>
          </Card>

          {/* Card for Investment Type */}
          <Card className="flex items-center justify-center hover:bg-[#f1f1f1] dark:hover:bg-[#27272a] h-32">
            <CardContent>
              <p className="text-center mt-5">
                <strong>نوع الاستثمار:</strong> <br /> {investmentType}
              </p>
            </CardContent>
          </Card>

          {/* Card for Project Value */}
          <Card className="flex items-center justify-center hover:bg-[#f1f1f1] dark:hover:bg-[#27272a] h-32">
            <CardContent>
              <p className="text-center mt-5">
                <strong>تكلفة المشروع:</strong> <br /> {formattedProjectValue}
              </p>
            </CardContent>
          </Card>

          {/* Card for Investment Location */}
          <Card className="flex items-center justify-center hover:bg-[#f1f1f1] dark:hover:bg-[#27272a] h-32">
            <CardContent>
              <p className="text-center mt-5">
                <strong>موقع الاستثمار:</strong> <br /> {investmentLocation}
              </p>
            </CardContent>
          </Card>

          {/* Card for Project Value */}
          <Card className="flex items-center justify-center hover:bg-[#f1f1f1] dark:hover:bg-[#27272a] h-32">
            <CardContent>
              <p className="text-center mt-5">
                <strong>المدة الزمنية:</strong> <br /> {projectDate}
              </p>
            </CardContent>
          </Card>

          {/* Card for Contact Details */}
          <Card className="flex items-center justify-center hover:bg-[#f1f1f1] dark:hover:bg-[#27272a] h-32 col-span-1 md:col-span-2">
            <CardContent>
              <p className="text-center mt-5">
                <strong>معلومات الاتصال:</strong> <br /> {contactDetails}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
