import { Link } from "react-router-dom"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { Mail, Lock } from "lucide-react"

import { Form } from "@/components/ui/form"
import { loginFormSchema } from "@/lib/validation-schemas"
import ButtonCustom from "@/components/ButtonCustom"
import { CustomFormField } from "@/components/CustomFormField"
import { AuthFormWrapper } from "@/components/AuthFormWrapper"

const formSchema = loginFormSchema

function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: "" },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast.success("ورود موفقیت‌آمیز بود.")
  }

  const handleGoogleLogin = () => {
    toast.info("ورود با گوگل به زودی اضافه خواهد شد.")
  }

  return (
    <AuthFormWrapper
      title="ورود به حساب کاربری"
      description="برای دسترسی به پنل خود وارد شوید."
      socialLoginLabel="ادامه با گوگل"
      onSocialLoginClick={handleGoogleLogin}
      footerText="حساب کاربری ندارید؟"
      footerLinkText="ثبت نام کنید"
      footerLinkTo="/signup"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
            placeholder="رمز عبور خود را وارد کنید"
            type="password"
            labelComponent={
              <Link
                to="/forget-password"
                className="text-primary text-sm font-medium underline-offset-4 hover:underline"
              >
                فراموش کردید؟
              </Link>
            }
          />
          <ButtonCustom type="submit" className="!mt-6 w-full">
            ورود
          </ButtonCustom>
        </form>
      </Form>
    </AuthFormWrapper>
  )
}

export default Login
