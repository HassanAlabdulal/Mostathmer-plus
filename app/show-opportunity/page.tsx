"use client";

import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

// Mock data for the opportunity
const opportunityData = {
  opportunityTitle: 'بناء عمارة سكنية فاخرة',
  detailedDescription: 'عمارة سكنية مكونة من 6 طوابق و30 شقة',
  investmentType: 'عقاري',
  projectValue: 7500000,
  projectDate: '14 ديسمبر 2023 - 14 ديسمبر 2025',
  investmentLocation: 'الرياض',
  contactDetails: 'الاسم: محمد السالم | الهاتف: 0559094843 | البريد الإلكتروني: mohammed@gmail.com',
  projectImageUrl: '/assets/photo.jpg',
};

export default function ShowOpportunity() {
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
  const formattedProjectValue = new Intl.NumberFormat('ar-SA', { style: 'currency', currency: 'SAR' }).format(projectValue);

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Image and Title */}
        <div className="mt-16 ">
          <h2 className="text-center text-2xl font-semibold my-4">{opportunityTitle}</h2>
        </div>
        
        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Card for Project Image */}
        <Card className="hover:shadow-lg min-h-[300px] col-span-1 md:col-span-2">
        <CardContent>
        <img
        src={projectImageUrl}
        alt="Project"
        className="w-full h-auto"
        />

        </CardContent>
        </Card>

          {/* Card for Detailed Description */}
          <Card className="hover:shadow-lg h-32 col-span-1 md:col-span-2">
            <CardContent>
              <p className="text-center mt-5"><strong>الوصف التفصيلي:</strong> <br />  {detailedDescription}</p>
            </CardContent>
          </Card>
          
          {/* Card for Investment Type */}
          <Card className="hover:shadow-lg h-32">
            <CardContent>
              <p className="text-center mt-5"><strong>نوع الاستثمار:</strong> <br />  {investmentType}</p>
            </CardContent>
          </Card>

          {/* Card for Project Value */}
          <Card className="hover:shadow-lg h-32">
            <CardContent>
              <p className="text-center mt-5"><strong>تكلفة المشروع:</strong> <br /> {formattedProjectValue}</p>
            </CardContent>
          </Card>
          

          {/* Card for Investment Location */}
          <Card className="hover:shadow-lg h-32">
            <CardContent>
              <p className="text-center mt-5"><strong>موقع الاستثمار:</strong> <br />  {investmentLocation}</p>
            </CardContent>
          </Card>

        {/* Card for Project Value */}
        <Card className="hover:shadow-lg h-32">
            <CardContent>
              <p className="text-center mt-5"><strong>المدة الزمنية:</strong> <br />  {projectDate}</p>
            </CardContent>
          </Card>

          {/* Card for Contact Details */}
          <Card className="hover:shadow-lg h-32 col-span-1 md:col-span-2">
            <CardContent>
              <p className="text-center mt-5"><strong>معلومات الاتصال:</strong> <br />  {contactDetails}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
