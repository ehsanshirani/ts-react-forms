import { Outlet } from "react-router-dom"

import Nav from "@/layout/nav/Nav"
import Footer from "@/layout/footer/Footer"

import AboutProject from "@/app/AboutProject"

function AuthLayout() {
  return (
    <div className="flex h-screen w-full flex-col">
      <Nav />
      <main className="flex flex-grow flex-col md:flex-row">
        <div className="flex w-full flex-col items-center justify-center p-4 text-center md:w-1/2">
          <AboutProject />
        </div>

        <div className="flex w-full items-center justify-center p-4 md:w-1/2">
          <Outlet />
        </div>
      </main>
      <span>
        <Footer />
      </span>
    </div>
  )
}

export default AuthLayout
