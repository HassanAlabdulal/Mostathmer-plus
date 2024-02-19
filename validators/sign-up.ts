import { z } from "zod";

export const signUpSchema = z.object({
  emailSignUp: z.string().email({ message: "البريد الالكتروني المدخل غير صحيح" }),
  fullName: z.string()
    .min(2, { message: "اكتب الاسم بشكل صحيح" })
    .max(255),
  passwordSignUp: z.string()
    .min(6, { message: "يجب أن تحتوي كلمة المرور على ٦ خانات على الأقل" })
    .max(100),
  passwordConfirm: z.string()
    .min(6, { message: "يجب أن تحتوي كلمة المرور على ٦ خانات على الأقل" })
    .max(100),
}).refine((data) => data.passwordSignUp === data.passwordConfirm, {
  message: "كلمة المرور وتأكيد كلمة المرور لا تتطابقان",
  path: ["passwordConfirm"],
});
