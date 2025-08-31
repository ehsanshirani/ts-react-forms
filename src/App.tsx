import { BrowserRouter, Link, Route, Routes } from "react-router"

import { ThemeProviderShadcn } from "@/theme/theme-provider"

import AuthLayout from "@/layout/AuthLayout"
import Login from "./app/Login"
import { Toaster } from "sonner"
import SignUp from "./app/SignUp"
import ForgetPassword from "./app/ForgetPassword"

function App() {
  return (
    <BrowserRouter>
      <ThemeProviderShadcn defaultTheme="light" storageKey="vite-ui-theme">
        <Toaster position="bottom-right" richColors />
        <Routes>
          {/* روت اصلی برای احراز هویت که از لایوت مشترک استفاده می‌کند */}
          <Route element={<AuthLayout />}>
            {/* روت‌های فرزند که در داخل Outlet مربوط به AuthLayout نمایش داده می‌شوند */}
            <Route path="/" index element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            {/* EH-COMMENT: ر
            وت فراموشی رمز عبور را می‌توانی اینجا اضافه کنی */}
            {/* <Route path="forgot-password" element={<ForgotPassword />} /> */}
            {/* اگر کاربر به /auth رفت، او را به صفحه‌ی لاگین هدایت کن */}
            {/* <Route index element={<Navigate to="/auth/login" replace />} /> */}
          </Route>
          {/* EH-COMMENT: روت‌های دیگر اپلیکیشن شما اینجا قرار می‌گیرند */}
          {/* روت برای صفحاتی که پیدا نمی‌شوند */}
          <Route
            path="*"
            element={
              <div className="flex-center h-full flex-col p-10 text-3xl">
                <p>404 - صفحه مورد نظر پیدا نشد</p>
                <br />
                <br />
                <Link to={"/"} className="underline">
                  بازگشت به صفحه اصلی
                </Link>
              </div>
            }
          />
        </Routes>
      </ThemeProviderShadcn>
    </BrowserRouter>
  )
}

export default App
