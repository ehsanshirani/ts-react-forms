import { z } from "zod"

export const loginFormSchema = z.object({
  email: z.string().email({ message: "لطفا یک آدرس ایمیل معتبر وارد کنید." }),
  password: z
    .string()
    .min(6, { message: "رمز عبور باید حداقل ۶ کاراکتر باشد." }),
})

export const signupFormSchema = z
  .object({
    fullName: z
      .string()
      .min(2, { message: "نام و نام خانوادگی باید حداقل ۲ کاراکتر باشد." }),
    email: z.string().email({ message: "لطفا یک آدرس ایمیل معتبر وارد کنید." }),
    password: z
      .string()
      .min(6, { message: "رمز عبور باید حداقل ۶ کاراکتر باشد." }),
    confirmPassword: z
      .string()
      .min(6, { message: "تکرار رمز عبور باید حداقل ۶ کاراکتر باشد." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "رمزهای عبور با یکدیگر مطابقت ندارند.",
    path: ["confirmPassword"],
  })

export const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "لطفا یک آدرس ایمیل معتبر وارد کنید." }),
})

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(6, { message: "رمز عبور جدید باید حداقل ۶ کاراکتر باشد." }),
    confirmPassword: z
      .string()
      .min(6, { message: "تکرار رمز عبور باید حداقل ۶ کاراکتر باشد." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "رمزهای عبور با یکدیگر مطابقت ندارند.",
    path: ["confirmPassword"],
  })
