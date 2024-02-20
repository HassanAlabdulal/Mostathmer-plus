"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DatePickerWithRange } from './date-picker';


// Define the form fields and their types
type FormValues = {
  opportunityTitle: string;
  detailedDescription: string;
  investmentType: string;
  projectValue: number;
  investmentLocation: string;
  contactDetails: string;
  attachments: FileList;
};

export default function AddOpportunity() {
  
  // Initialize useForm hook for form handling
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>();

  const investmentType = [
    "سكني", "تجاري", "صناعي", "زراعي"
  ];

  const cities = [
    "الرياض", "جدة", "مكة المكرمة", "المدينة المنورة", "الدمام", "الخبر",
    "الطائف", "تبوك", "القطيف", "خميس مشيط", "الأحساء", "حائل"
  ];

  // Function to handle form submission
  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <div className="flex flex-col justify-center min-h-screen py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-8 rounded shadow">
          {/* Page title */}
          <h2 className="text-lg font-semibold text-center">إضافة فرصة استثمارية جديدة</h2>

          {/* Basic Information Section */}
          <div>
            <label htmlFor="opportunityTitle">عنوان الفرصة</label>
            <Input id="opportunityTitle" placeholder="بناء عمارة سكنية" {...register('opportunityTitle', { required: 'هذا الحقل مطلوب' })} />
            {errors.opportunityTitle && <p className="text-red-500">{errors.opportunityTitle.message}</p>}
          </div>

          <div>
            <label htmlFor="detailedDescription">وصف تفصيلي</label>
            <Textarea className="resize-none" id="detailedDescription" placeholder=" عمارة سكنية مكونة من 6 طوابق و10 شقق" {...register('detailedDescription', { required: 'هذا الحقل مطلوب' })} />
            {errors.detailedDescription && <p className="text-red-500">{errors.detailedDescription.message}</p>}
          </div>

          {/* Investment Type Section */}
          <div>
            <label htmlFor="investmentType">نوع الاستثمار :</label>
            <select
              id="investmentType"
              {...register('investmentType', { required: 'هذا الحقل مطلوب' })}
              className="border border-gray-300 rounded-md shadow-sm mr-1"
            >
              <option value="">{/* The default option */}اختر</option>
              <option value="realEstate">عقاري</option>
              <option value="technology">تكنولوجي</option>
              <option value="industrial">صناعي</option>
              {/* Add more options as needed */}
            </select>
            {errors.investmentType && <p className="text-red-500">{errors.investmentType.message}</p>}
          </div>


          <div className="flex items-end justify-start">
            {/* Label for the Date Range Picker */}
            <label htmlFor="date" className="mb-2">
              المدة الزمنية:
            </label>
            <div className="flex items-end mr-2">
              {/* Date Range Picker Section */}
              <DatePickerWithRange
                // pass any additional props if needed
              />
            </div>
          </div>


            {/* Project Value and Unit in the same row with the same height */}
            <div className="flex items-center">

            {/* Project Value Input Section */}
            <div className="flex-1">
              <label htmlFor="projectValue" className="block">تكلفة المشروع</label>
              <div className="flex items-center h-10">
                <input 
                  id="projectValue" 
                  type="text" 
                  {...register('projectValue', { required: 'هذا الحقل مطلوب' })} 
                  className="flex-1 border border-gray-300 rounded-md shadow-sm pr-2"
                />
                <label className="ml-2 mr-1 border border-gray-300 rounded-md shadow-sm px-4">ريال سعودي</label>
              </div>
              {errors.projectValue && <p className="text-red-500">{errors.projectValue.message}</p>}
            </div>

            </div>


          {/* Investment Location Section */}
          <div>
            <label htmlFor="investmentLocation">موقع الاستثمار: </label>
            <select id="investmentLocation" className="border border-gray-300 rounded-md shadow-sm" {...register('investmentLocation', { required: 'هذا الحقل مطلوب' })}>
              <option value="">اختر مدينة...</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>{city}</option>
              ))}
            </select>
            {errors.investmentLocation && <p className="text-red-500">{errors.investmentLocation.message}</p>}
          </div>

          {/* Contact Information Section */}
          <div>
            <label htmlFor="contactDetails">معلومات الاتصال</label>
            <Input id="contactDetails" placeholder="شارع الرياض - حي غرناطة - رقم الهاتف: 0559974554" {...register('contactDetails', { required: 'هذا الحقل مطلوب' })} />
            {errors.contactDetails && <p className="text-red-500">{errors.contactDetails.message}</p>}
          </div>

          {/* Attachments Section */}
          <div>
            <label htmlFor="attachments">المرفقات</label>
            <Input id="attachments" type="file" {...register('attachments')} multiple />
            {errors.attachments && <p className="text-red-500">{errors.attachments.message}</p>}
          </div>

          {/* Submit Button */}
          <div>
            <Button type="submit" className="w-full mb-2">
              ارسال
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}