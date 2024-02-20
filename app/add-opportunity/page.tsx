"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";

// Define the form fields and their types
type FormValues = {
  opportunityTitle: string;
  detailedDescription: string;
  investmentType: string;
  investmentTimeUnit: string; 
  investmentTimeValue: number;
  projectValueUnit: string;
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

  React.useEffect(() => {
    register('investmentType', { required: 'هذا الحقل مطلوب' });
  }, [register]);

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
          <h2 className="text-lg font-semibold">إضافة فرصة استثمارية جديدة</h2>

          {/* Basic Information Section */}
          <div>
            <label htmlFor="opportunityTitle">عنوان الفرصة</label>
            <Input id="opportunityTitle" {...register('opportunityTitle', { required: 'هذا الحقل مطلوب' })} />
            {errors.opportunityTitle && <p>{errors.opportunityTitle.message}</p>}
          </div>

          <div>
            <label htmlFor="detailedDescription">وصف تفصيلي</label>
            <Textarea className="resize-none" id="detailedDescription" {...register('detailedDescription', { required: 'هذا الحقل مطلوب' })} />
            {errors.detailedDescription && <p>{errors.detailedDescription.message}</p>}
          </div>

            {/* Investment Details Section */}
          <div>
            <label htmlFor="investmentType">نوع الاستثمار</label>
            <select
              id="investmentType"
              {...register('investmentType', { required: 'هذا الحقل مطلوب' })}
              onChange={e => setValue('investmentType', e.target.value)}
              className="mr-5"
            >
              <option value="realEstate">عقاري</option>
              <option value="technology">تكنولوجي</option>
              <option value="industrial">صناعي</option>
            
            </select>
            {errors.investmentType && <p>{errors.investmentType.message}</p>}
          </div>

          <div className="flex items-end">
            {/* Investment Time Value Section */}
            <div className="flex-1">
              <label htmlFor="investmentTimeValue">المدة الزمنية</label>
              <select
                id="investmentTimeValue"
                {...register('investmentTimeValue', { required: 'هذا الحقل مطلوب' })}
                className="form-select form-select-lg mb-3 appearance-none
                           block w-full px-4 py-2 text-xl font-normal 
                           bg-clip-padding bg-no-repeat border border-solid border-gray-300
                           rounded transition ease-in-out m-0
                           focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              >
                {Array.from({ length: 12 }, (_, index) => (
                  <option key={index} value={index + 1}>{index + 1}</option>
                ))}
              </select>
              {errors.investmentTimeValue && <p>{errors.investmentTimeValue.message}</p>}
            </div>

            {/* Investment Time Unit Section */}
            <div className="flex-1 ml-3">
              <select
                id="investmentTimeUnit"
                {...register('investmentTimeUnit', { required: 'هذا الحقل مطلوب' })}
                className="form-select form-select-lg mb-3 mr-1
                           block px-4 py-2 text-xl font-normal 
                            bg-clip-padding bg-no-repeat border border-solid border-gray-300
                           rounded transition ease-in-out m-0
                           focus:bg-white focus:border-blue-600 focus:outline-none"
              >
                <option value="months">شهور</option>
                <option value="years">سنوات</option>
              </select>
              {errors.investmentTimeUnit && <p>{errors.investmentTimeUnit.message}</p>}
            </div>
          </div>

            {/* Project Value and Unit in the same row with the same height */}
            <div className="flex items-center">

            {/* Project Value Input Section */}
            <div className="flex-1">
              <label htmlFor="projectValue">قيمة المشروع</label>
              <input 
                id="projectValue" 
                type="text" 
                {...register('projectValue', { required: 'هذا الحقل مطلوب' })} 
                className="w-full h-10 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.projectValue && <p>{errors.projectValue.message}</p>}
            </div>
         
            {/* Project Value Unit Section */}
            <div className="flex-1">
              <select 
                id="projectValueUnit" 
                {...register('projectValueUnit', { required: 'هذا الحقل مطلوب' })} 
                className="mr-1 mt-6 h-10 border border-gray-300 rounded-md shadow-sm"
              >
                <option value="thousand">ألف</option>
                <option value="million">مليون</option>
              </select>
              {errors.projectValueUnit && <p>{errors.projectValueUnit.message}</p>}
            </div>

            </div>

          {/* Investment Location Section */}
          <div>
            <label htmlFor="investmentLocation">موقع الاستثمار</label>
            <select id="investmentLocation" {...register('investmentLocation', { required: 'هذا الحقل مطلوب' })}>
              <option value="">اختر مدينة...</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>{city}</option>
              ))}
            </select>
            {errors.investmentLocation && <p>{errors.investmentLocation.message}</p>}
          </div>

          {/* Contact Information Section */}
          <div>
            <label htmlFor="contactDetails">معلومات الاتصال</label>
            <Input id="contactDetails" {...register('contactDetails', { required: 'هذا الحقل مطلوب' })} />
            {errors.contactDetails && <p>{errors.contactDetails.message}</p>}
          </div>

          {/* Attachments Section */}
          <div>
            <label htmlFor="attachments">المرفقات</label>
            <Input id="attachments" type="file" {...register('attachments')} multiple />
            {errors.attachments && <p>{errors.attachments.message}</p>}
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