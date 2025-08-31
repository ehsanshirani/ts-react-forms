import ReactLogo from "@/assets/icons/ReactLogo"
import TailwindLogo from "@/assets/icons/TailwindLogo"
import TypeScriptLogo from "@/assets/icons/TypeScriptLogo"
import {
  Github,
  Linkedin,
  Code,
  Layers,
  Library,
  Languages,
} from "lucide-react"
import type { ReactNode } from "react"
type BadgeType = {
  icon: ReactNode
  label: string
}
const TechBadge = ({ icon, label }: BadgeType) => (
  <div className="bg-muted text-muted-foreground hover:bg-muted/80 flex-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors">
    {icon}
    <span className="flex-center">{label}</span>
  </div>
)

function AboutProject() {
  return (
    <div className="bg-card text-card-foreground animate-fade-in flex w-full max-w-2xl flex-col gap-6 rounded-xl border p-6 shadow-sm">
      <header className="flex flex-col items-center gap-3 text-center">
        <div className="bg-primary/10 ring-primary/5 rounded-full p-3 ring-4">
          <Code className="text-primary h-8 w-8" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">
          پروژه فرم ورود و ثبت‌نام
        </h1>
        <p className="text-muted-foreground max-w-md">
          یک نمونه عملی برای نمایش مهارت‌ها در ساخت کامپوننت‌های ماژولار و قابل
          استفاده مجدد با ابزارهای مدرن فرانت‌اند.
        </p>
      </header>

      <section className="text-right text-base leading-relaxed">
        <p>
          این پروژه با هدف ساخت یک فرم لاگین کاملاً کاربردی و مدرن توسعه داده
          شده است. تمرکز اصلی بر روی ایجاد کامپوننت‌های{" "}
          <strong>قابل استفاده مجدد (Reusable)</strong> با استفاده از کتابخانه‌ی{" "}
          <b className="text-primary font-semibold">shadcn/ui</b> و قدرت{" "}
          <b className="text-primary font-semibold">Tailwind CSS</b> بوده است.
          <br />
          <br />
          همچنین، برای مدیریت وضعیت فرم‌ها و اعتبارسنجی داده‌ها از{" "}
          <b className="text-primary font-semibold">React Hook Form</b> و برای
          پیاده‌سازی قابلیت چندزبانه شدن از{" "}
          <b className="text-primary font-semibold">i18next</b> استفاده شده است.
          کل پروژه با <b className="text-primary font-semibold">TypeScript</b>{" "}
          نوشته شده تا از بروز خطاها در زمان اجرا جلوگیری کرده و خوانایی کد را
          افزایش دهد.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-center text-xl font-semibold">
          ابزارهای استفاده شده
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <TechBadge icon={<ReactLogo />} label="React" />
          <TechBadge icon={<TypeScriptLogo />} label="TypeScript" />
          <TechBadge icon={<TailwindLogo />} label="Tailwind CSS" />
          <TechBadge
            icon={<Layers className="h-5 w-5 text-zinc-600" />}
            label="shadcn/ui"
          />
          <TechBadge
            icon={<Library className="h-5 w-5 text-pink-500" />}
            label="React Hook Form"
          />
          <TechBadge
            icon={<Languages className="h-5 w-5 text-blue-400" />}
            label="i18next"
          />
        </div>
      </section>

      <footer className="mt-4 flex flex-col items-center gap-4 border-t pt-6">
        <p className="text-muted-foreground text-sm">
          کد پروژه را مشاهده کنید یا با من در ارتباط باشید:
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/tir-webdeveloper/online-shop"
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
      </footer>
    </div>
  )
}

export default AboutProject
