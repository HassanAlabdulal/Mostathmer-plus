"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


type DateRange = {
  from: Date;
  to: Date;
};

// Define the form fields and their types
type FormValues = {
  opportunityTitle: string;
  detailedDescription: string;
  investmentType: string;
  dateRange: DateRange;
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
    watch
  } = useForm<FormValues>();

    // Watch for changes to dateRange in the form
    const dateRangeValue = watch('dateRange');
  
    // Function to handle date range changes
    const handleDateRangeChange = (range: DateRange) => {
      setValue('dateRange', range);
    };

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
          <h2 className="text-lg font-semibold text-center">إضافة فرصة استثمارية جديدة</h2>

          {/* Basic Information Section */}
          <div>
            <label htmlFor="opportunityTitle">عنوان الفرصة</label>
            <Input id="opportunityTitle" placeholder="بناء عمارة سكنية" {...register('opportunityTitle', { required: 'هذا الحقل مطلوب' })} />
            {errors.opportunityTitle && <p>{errors.opportunityTitle.message}</p>}
          </div>

          <div>
            <label htmlFor="detailedDescription">وصف تفصيلي</label>
            <Textarea className="resize-none" id="detailedDescription" placeholder=" عمارة سكنية مكونة من 6 طوابق و10 شقق" {...register('detailedDescription', { required: 'هذا الحقل مطلوب' })} />
            {errors.detailedDescription && <p>{errors.detailedDescription.message}</p>}
          </div>

            {/* Investment Details Section */}
          <div>
            <label htmlFor="investmentType">نوع الاستثمار :</label>
            <select
              id="investmentType"
              {...register('investmentType', { required: 'هذا الحقل مطلوب' })}
              onChange={e => setValue('investmentType', e.target.value)}
              className="mr-1 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="realEstate">عقاري</option>
              <option value="technology">تكنولوجي</option>
              <option value="industrial">صناعي</option>
            
            </select>
            {errors.investmentType && <p>{errors.investmentType.message}</p>}
          </div>

          <div className="flex items-end">

          {/* Date Range Picker Section */}
          <div>
          <label htmlFor="dateRange">المدة الزمنية</label>
          <DatePickerWithRange
            className="my-2"
            dateRange={dateRangeValue}
            onDateRangeChange={handleDateRangeChange}
          />
          {errors.dateRange && <p>{errors.dateRange.message}</p>}
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
              {errors.projectValue && <p>{errors.projectValue.message}</p>}
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
            {errors.investmentLocation && <p>{errors.investmentLocation.message}</p>}
          </div>

          {/* Contact Information Section */}
          <div>
            <label htmlFor="contactDetails">معلومات الاتصال</label>
            <Input id="contactDetails" placeholder="شارع الرياض - حي غرناطة - رقم الهاتف: 0559974554" {...register('contactDetails', { required: 'هذا الحقل مطلوب' })} />
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