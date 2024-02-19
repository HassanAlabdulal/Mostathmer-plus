"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUpSchema } from "@/validators/sign-up";
import { signup } from "./actions";

// Define the shape of the errors object
interface FormErrors {
  fullName?: string;
  emailSignUp?: string;
  passwordSignUp?: string;
  passwordConfirm?: string;
}

export default function SignUp() {
  const [formData, setFormData] = useState({
    emailSignUp: "",
    fullName: "",
    passwordSignUp: "",
    passwordConfirm: "",
  });

  // Error state
  const [errors, setErrors] = useState<FormErrors>({});

  // Handle input changes
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if passwords match before running schema validation
    if (formData.passwordSignUp !== formData.passwordConfirm) {
      setErrors({
        ...errors,
        passwordConfirm: "كلمة المرور وتأكيد كلمة المرور لا تتطابقان",
      });
      return; // Stop the form submission if passwords don't match
    }

    const result = signUpSchema.safeParse(formData);

    if (!result.success) {
      console.log("Form data is not valid:", formData);

      // Loop over the issues and assign them to errors
      const newErrors: FormErrors = {};
      for (const issue of result.error.issues) {
        if (typeof issue.path[0] === "string") {
          newErrors[issue.path[0] as keyof FormErrors] = issue.message;
        }
      }
      setErrors(newErrors);
    } else {
      // If there are no errors, log the valid data and presumably send it to the server
      setErrors({});

      signup({
        name: formData.fullName,
        email: formData.emailSignUp,
        password: formData.passwordConfirm,
      });
      // Send data to the server here
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>التسجيل</CardTitle>
          <CardDescription>قم بتسجيل حساب جديد من هنا</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="fullName">الاسم الكامل</Label>
              <Input
                name="fullName"
                id="fullName"
                placeholder="محمد عبدالله"
                onChange={handleChange}
              />
              {errors.fullName && (
                <p className="text-red-500">{errors.fullName}</p>
              )}
            </div>
            <div>
              <Label htmlFor="emailSignUp">البريد الالكتروني</Label>
              <Input
                name="emailSignUp"
                id="emailSignUp"
                type="email"
                placeholder="mostathmerplus@gmail.com"
                onChange={handleChange}
              />
              {errors.emailSignUp && (
                <p className="text-red-500">{errors.emailSignUp}</p>
              )}
            </div>
            <div>
              <Label htmlFor="passwordSignUp">كلمة المرور</Label>
              <Input
                name="passwordSignUp"
                id="passwordSignUp"
                type="password"
                placeholder="********"
                onChange={handleChange}
              />
              {errors.passwordSignUp && (
                <p className="text-red-500">{errors.passwordSignUp}</p>
              )}
            </div>
            <div>
              <Label htmlFor="passwordConfirm">تأكيد كلمة المرور</Label>
              <Input
                name="passwordConfirm"
                id="passwordConfirm"
                type="password"
                placeholder="********"
                onChange={handleChange}
              />
              {errors.passwordConfirm && (
                <p className="text-red-500">{errors.passwordConfirm}</p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              إنشاء حساب
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
