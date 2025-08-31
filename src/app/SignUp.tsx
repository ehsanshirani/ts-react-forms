import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { Mail, Lock, User } from "lucide-react"

import { Form } from "@/components/ui/form"
import { signupFormSchema } from "@/lib/validation-schemas"
import ButtonCustom from "@/components/ButtonCustom"
import { CustomFormField } from "@/components/CustomFormField"
import { AuthFormWrapper } from "@/components/AuthFormWrapper"

const formSchema = signupFormSchema

function SignUp() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { confirmPassword, ...submissionData } = values
      console.log(submissionData)
      toast.success("حساب کاربری با موفقیت ایجاد شد!")
    } catch (error) {
      console.error("Signup failed:", error)
      toast.error("خطا در ثبت‌نام")
    }
  }

  const handleGoogleLogin = () => {
    toast.info("ثبت‌نام با گوگل به زودی اضافه خواهد شد.")
  }

  return (
    <AuthFormWrapper
      title="ایجاد حساب کاربری جدید"
      description="اطلاعات خود را برای ساخت حساب جدید وارد کنید."
      socialLoginLabel="ادامه با گوگل"
      onSocialLoginClick={handleGoogleLogin}
      footerText="حساب کاربری دارید؟"
      footerLinkText="وارد شوید"
      footerLinkTo="/"
    >
      {/* The actual form fields are passed as children to the wrapper */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <CustomFormField
            control={form.control}
            name="fullName"
            label="نام و نام خانوادگی"
            Icon={User}
            placeholder="مثال: احسان شیرانی"
          />
          <CustomFormField
            control={form.control}
            name="email"
            label="ایمیل"
            Icon={Mail}
            placeholder="johndoe@mail.com"
            type="email"
          />
          <CustomFormField
            control={form.control}
            name="password"
            label="رمز عبور"
            Icon={Lock}
            placeholder="حداقل ۶ کاراکتر"
            type="password"
          />
          <CustomFormField
            control={form.control}
            name="confirmPassword"
            label="تکرار رمز عبور"
            Icon={Lock}
            placeholder="رمز عبور را تکرار کنید"
            type="password"
          />
          <ButtonCustom type="submit" className="!mt-6 w-full">
            ثبت نام و ساخت حساب
          </ButtonCustom>
        </form>
      </Form>
    </AuthFormWrapper>
  )
}

export default SignUp
