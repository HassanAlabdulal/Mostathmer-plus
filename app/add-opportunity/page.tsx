"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";

// Define the types for the form fields
type FormValues = {
  title: string;
  detailedDescription: string;
  investmentAmount: number;
  investmentType: string;
  expectedReturn: string;
  investmentDuration: string;
  sharePercentage: number;
  investmentLocation: string;
  geographicalDetails: string;
  marketAnalysis: FileList;
  competitorsReport: FileList;
  legalStatus: string;
  legalDocuments: FileList;
  financialReports: FileList;
  contactDetails: string;
  faq: string;
  termsConditions: string;
  teamInformation: string;
  additionalDocuments: FileList;
};

export default function AddOpportunity() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <div className="flex flex-col justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded shadow">
      {/* Basic Information Section */}
      <h2 className="text-lg font-semibold">معلومات أساسية</h2>
      <div>
        <label htmlFor="title">عنوان الفرصة الاستثمارية</label>
        <Input id="title" {...register('title', { required: 'هذا الحقل مطلوب' })} />
        {errors.title && <p>{errors.title.message}</p>}
      </div>
      <div>
        <label htmlFor="detailedDescription">وصف تفصيلي</label>
        <Textarea id="detailedDescription" {...register('detailedDescription', { required: 'هذا الحقل مطلوب' })} />
        {errors.detailedDescription && <p>{errors.detailedDescription.message}</p>}
      </div>
      {/* Investment Location Section */}
      <h2 className="text-lg font-semibold mb-4">موقع الاستثمار</h2>
      <div>
        <label htmlFor="investmentLocation">المدينة أو المنطقة</label>
        <Input id="investmentLocation" {...register('investmentLocation', { required: 'هذا الحقل مطلوب' })} />
        {errors.investmentLocation && <p>{errors.investmentLocation.message}</p>}
      </div>
      <div>
        <label htmlFor="geographicalDetails">تفاصيل الموقع الجغرافي</label>
        <Textarea id="geographicalDetails" {...register('geographicalDetails')} />
        {errors.geographicalDetails && <p>{errors.geographicalDetails.message}</p>}
      </div>

      {/* Analysis and Projections Section */}
      <h2 className="text-lg font-semibold mb-4">التحليلات والتوقعات</h2>
      <div>
        <label htmlFor="marketAnalysis">دراسة الجدوى أو أي تحليلات سوقية</label>
        <Input id="marketAnalysis" {...register('marketAnalysis')} />
        {errors.marketAnalysis && <p>{errors.marketAnalysis.message}</p>}
      </div>
      <div>
        <label htmlFor="competitorsReport">تقارير حول السوق المستهدف والمنافسين</label>
        <Input id="competitorsReport" {...register('competitorsReport')} />
        {errors.competitorsReport && <p>{errors.competitorsReport.message}</p>}
      </div>

      {/* Legal and Financial Information Section */}
      <h2 className="text-lg font-semibold">معلومات قانونية ومالية</h2>
      <div>
        <label htmlFor="legalStatus">وضع الاستثمار القانوني</label>
        <Input id="legalStatus" {...register('legalStatus')} />
        {errors.legalStatus && <p>{errors.legalStatus.message}</p>}
      </div>
      <div>
        <label htmlFor="financialReports">البيانات المالية أو التقارير المحاسبية</label>
        <Input id="financialReports" type="file" {...register('financialReports')} multiple />
        {errors.financialReports && <p>{errors.financialReports.message}</p>}
      </div>

        {/* Contact Information Section */}
        <h2 className="text-lg font-semibold">معلومات الاتصال</h2>
        <div>
          <label htmlFor="contactDetails">بيانات الاتصال لصاحب الفرصة</label>
          <Input id="contactDetails" {...register('contactDetails', { required: 'هذا الحقل مطلوب' })} />
          {errors.contactDetails && <p>{errors.contactDetails.message}</p>}
        </div>

        {/* Additional Details Section */}
        <h2 className="text-lg font-semibold">تفاصيل إضافية</h2>
        <div>
          <label htmlFor="faq">أسئلة شائعة حول الفرصة</label>
          <Textarea id="faq" {...register('faq')} />
          {errors.faq && <p>{errors.faq.message}</p>}
        </div>
        <div>
          <label htmlFor="termsConditions">شروط وأحكام الاستثمار</label>
          <Textarea id="termsConditions" {...register('termsConditions')} />
          {errors.termsConditions && <p>{errors.termsConditions.message}</p>}
        </div>
        <div>
          <label htmlFor="teamInformation">معلومات عن الفريق الإداري أو الشركاء</label>
          <Textarea id="teamInformation" {...register('teamInformation')} />
          {errors.teamInformation && <p>{errors.teamInformation.message}</p>}
        </div>

        {/* Attachments Section */}
        <h2 className="text-lg font-semibold">المرفقات</h2>
        <div>
          <label htmlFor="additionalDocuments">إمكانية رفع مستندات أو صور إضافية</label>
          <Input id="additionalDocuments" type="file" {...register('additionalDocuments')} multiple />
          {errors.additionalDocuments && <p>{errors.additionalDocuments.message}</p>}
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
