import {
  Github,
  Linkedin,
  Code,
  Layers,
  Library,
  Languages,
} from "lucide-react"
import type { ReactNode } from "react"
import { motion, type Variants } from "framer-motion"

import ReactLogo from "@/assets/icons/ReactLogo"
import TailwindLogo from "@/assets/icons/TailwindLogo"
import TypeScriptLogo from "@/assets/icons/TypeScriptLogo"

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.4,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
}

type BadgeType = {
  icon: ReactNode
  label: string
}

const TechBadge = ({ icon, label }: BadgeType) => (
  <div className="flex-center bg-muted text-muted-foreground hover:bg-muted/80 gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors">
    {icon}
    <span>{label}</span>
  </div>
)

const ProjectHeader = () => (
  <motion.header
    className="flex flex-col items-center gap-3 text-center"
    variants={itemVariants}
  >
    <div className="ring-primary/5 bg-primary/10 rounded-full p-3 ring-4">
      <Code className="text-primary h-8 w-8" />
    </div>
    <h1 className="text-3xl font-bold tracking-tight">
      پروژه فرم ورود و ثبت‌نام
    </h1>
    <p className="text-muted-foreground max-w-md">
      یک نمونه عملی برای نمایش مهارت‌ها در ساخت کامپوننت‌های ماژولار و قابل
      استفاده مجدد با ابزارهای مدرن فرانت‌اند.
    </p>
  </motion.header>
)

const ProjectDescription = () => (
  <motion.section
    className="text-center text-base leading-relaxed md:text-right"
    variants={itemVariants}
  >
    <p>
      این پروژه با هدف ساخت یک فرم لاگین کاملاً کاربردی و مدرن توسعه داده شده
      است. تمرکز اصلی بر روی ایجاد کامپوننت‌های{" "}
      <strong className="font-semibold">قابل استفاده مجدد (Reusable)</strong> با
      استفاده از کتابخانه‌ی{" "}
      <b className="text-primary font-semibold">shadcn/ui</b> و قدرت{" "}
      <b className="text-primary font-semibold">Tailwind CSS</b> بوده است.
      <br />
      <br />
      همچنین، برای مدیریت وضعیت فرم‌ها و اعتبارسنجی داده‌ها از{" "}
      <b className="text-primary font-semibold">React Hook Form</b> و برای
      پیاده‌سازی قابلیت چندزبانه شدن از{" "}
      <b className="text-primary font-semibold">i18next</b> استفاده شده است.
    </p>
  </motion.section>
)

const ProjectTools = () => (
  <motion.section variants={itemVariants}>
    <h2 className="mb-4 text-center text-xl font-semibold">
      ابزارهای استفاده شده
    </h2>
    <motion.div
      className="flex flex-wrap items-center justify-center gap-3"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <TechBadge icon={<ReactLogo />} label="React" />
      </motion.div>
      <motion.div variants={itemVariants}>
        <TechBadge icon={<TypeScriptLogo />} label="TypeScript" />
      </motion.div>
      <motion.div variants={itemVariants}>
        <TechBadge icon={<TailwindLogo />} label="Tailwind CSS" />
      </motion.div>
      <motion.div variants={itemVariants}>
        <TechBadge
          icon={<Layers className="h-5 w-5 text-zinc-600" />}
          label="shadcn/ui"
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <TechBadge
          icon={<Library className="h-5 w-5 text-pink-500" />}
          label="React Hook Form"
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <TechBadge
          icon={<Languages className="h-5 w-5 text-blue-400" />}
          label="i18next"
        />
      </motion.div>
    </motion.div>
  </motion.section>
)

const ProjectFooter = () => (
  <motion.footer
    className="mt-4 flex flex-col items-center gap-4 border-t pt-6"
    variants={itemVariants}
  >
    <p className="text-muted-foreground text-sm">
      کد پروژه را مشاهده کنید یا با من در ارتباط باشید:
    </p>
    <div className="flex gap-4">
      <a
        href="https://github.com/ehsanshirani/ts-react-forms"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex h-10 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors"
      >
        <Github className="h-5 w-5" />
        <span>گیت‌هاب</span>
      </a>
      <a
        href="https://www.linkedin.com/in/ehsanshirani"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex h-10 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors"
      >
        <Linkedin className="h-5 w-5" />
        <span>لینکدین</span>
      </a>
    </div>
  </motion.footer>
)

function AboutProject() {
  return (
    <>
      <motion.div
        className="text-card-foreground bg-card hidden w-full max-w-2xl flex-col gap-6 rounded-xl border p-6 shadow-sm md:flex"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ProjectHeader />
        <ProjectDescription />
        <ProjectTools />
        <ProjectFooter />
      </motion.div>
      <motion.div
        className="text-card-foreground bg-card flex w-full max-w-2xl flex-col gap-8 rounded-xl border p-6 shadow-sm md:hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ProjectHeader />
        <ProjectDescription />
        <ProjectTools />
        <ProjectFooter />
      </motion.div>
    </>
  )
}

export default AboutProject
