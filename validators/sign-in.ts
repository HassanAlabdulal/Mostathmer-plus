import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email({ message: "البريد الالكتروني المدخل غير صحيح" }),
  password: z
    .string()
    .min(6, { message: "يجب أن تحتوي كلمة المرور على ٦ خانات على الأقل" })
    .max(100),
});
