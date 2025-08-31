import { Link } from "react-router-dom"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { toast } from "sonner"
import { Mail, Lock } from "lucide-react"
import { motion } from "framer-motion"

import { Form } from "@/components/ui/form"
import { loginFormSchema } from "@/lib/validation-schemas"
import ButtonCustom from "@/components/ButtonCustom"
import { CustomFormField } from "@/components/CustomFormField"
import { AuthFormWrapper } from "@/components/AuthFormWrapper"
import { useForm } from "react-hook-form"
import { PageTransitionWrapper } from "@/components/TransitionWrapper"
const formVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

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
    <PageTransitionWrapper>
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
          <motion.form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <CustomFormField
                control={form.control}
                name="email"
                label="ایمیل"
                Icon={Mail}
                placeholder="johndoe@mail.com"
                type="email"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
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
            </motion.div>

            <motion.div variants={itemVariants}>
              <ButtonCustom type="submit" className="!mt-6 w-full">
                ورود
              </ButtonCustom>
            </motion.div>
          </motion.form>
        </Form>
      </AuthFormWrapper>
    </PageTransitionWrapper>
  )
}

export default Login
