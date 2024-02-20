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
  // Initialize useForm hook to manage form state and validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>();

  // Predefined lists for dropdowns
  // Types of investment
  const investmentType = ["سكني", "تجاري", "صناعي", "زراعي"];

  // List of cities for investment location
  const cities = [
    "الرياض", "جدة", "مكة المكرمة", "المدينة المنورة", "الدمام", "الخبر",
    "الطائف", "تبوك", "القطيف", "خميس مشيط", "الأحساء", "حائل"
  ];

  const onSubmit = async (data: FormValues) => {
    // Prepare FormData object if there are files to be uploaded
    const formData = new FormData();
    formData.append("opportunityTitle", data.opportunityTitle);
    formData.append("detailedDescription", data.detailedDescription);
    formData.append("investmentType", data.investmentType);
    formData.append("projectValue", data.projectValue.toString());
    formData.append("investmentLocation", data.investmentLocation);
    formData.append("contactDetails", data.contactDetails);
    if (data.attachments && data.attachments.length > 0) {
      // Append each file to the form data. Adjust according to your API requirements.
      Array.from(data.attachments).forEach(file => {
        formData.append("attachments", file);
      });
    }

    try {
      const response = await fetch('https://your-backend-endpoint.com/api/opportunities', {
        method: 'POST',
        body: formData, // No headers included as FormData will set the `Content-Type` to `multipart/form-data` and include the boundary
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle response data here, such as showing a success message or redirecting
      console.log(await response.json());
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error here, such as showing an error message to the user
    }
  };

  return (
    <div className="flex flex-col justify-center min-h-screen py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-8 rounded shadow">
          {/* Page title */}
          <h2 className="text-lg font-semibold text-center">إضافة فرصة استثمارية جديدة</h2>

          {/* Basic Information Section */}
          <div>
            <label htmlFor="opportunityTitle">عنوان الفرصة</label>
            <Input className="mr-0" id="opportunityTitle" placeholder="بناء عمارة سكنية" {...register('opportunityTitle', { required: 'هذا الحقل مطلوب' })} />
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


          <div className="flex flex-col items-start justify-start">
            {/* Label for the Date Range Picker */}
            <label htmlFor="date" className="mb-2">
              المدة الزمنية:
            </label>
            {/* Date Range Picker Section */}
            <div>
              <DatePickerWithRange
              />
            </div>
          </div>


            {/* Project Value Input Section */}
            <div className="flex-1">
              <label htmlFor="projectValue" className="block">تكلفة المشروع</label>
              <div className="items-center h-10">
                <input 
                  id="projectValue" 
                  type="text" 
                  {...register('projectValue', { required: 'هذا الحقل مطلوب' })} 
                  className="flex-1 border border-gray-300 rounded-md shadow-sm pr-2 h-8"
                />
                <label className="ml-2 mr-1 border border-gray-300 rounded-md shadow-sm px-4 py-1">ريال </label>
              </div>
              {errors.projectValue && <p className="text-red-500">{errors.projectValue.message}</p>}
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
            <Input 
              id="attachments" 
              type="file" 
              accept="image/*" // This ensures only images can be uploaded
              {...register('attachments', { 
                required: 'هذا الحقل مطلوب',
              })} 
            />
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