import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

import { Form } from "@/components/ui/form";
import { forgotPasswordSchema } from "@/lib/validation-schemas";
import ButtonCustom from "@/components/ButtonCustom";
import { AuthFormWrapper } from "@/components/AuthFormWrapper";
import { CustomFormField } from "@/components/CustomFormField";
import { PageTransitionWrapper } from "@/components/TransitionWrapper";

const formVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const formSchema = forgotPasswordSchema;

function ForgetPassword() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("لینک بازیابی ارسال شد!", {
      description: "لطفا صندوق ورودی ایمیل خود را بررسی کنید.",
    });
  }

  return (
    <PageTransitionWrapper>
      <AuthFormWrapper
        title="فراموشی رمز عبور"
        description="ایمیل حساب کاربری خود را وارد کنید تا لینک بازیابی برای شما ارسال شود."
        footerText="به صفحه ورود برگرد"
        footerLinkText="ورود"
        footerLinkTo="/"
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
              <ButtonCustom type="submit" className="!mt-6 w-full">
                ارسال لینک بازیابی
              </ButtonCustom>
            </motion.div>
          </motion.form>
        </Form>
      </AuthFormWrapper>
    </PageTransitionWrapper>
  );
}

export default ForgetPassword;

