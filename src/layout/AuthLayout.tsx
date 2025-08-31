import { Outlet, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import Nav from "@/layout/nav/Nav"
import Footer from "@/layout/footer/Footer"
import AboutProject from "@/app/AboutProject"

function AuthLayout() {
  const location = useLocation()

  return (
    <div className="flex h-screen w-full flex-col">
      <Nav />
      <main className="flex flex-grow flex-col md:flex-row">
        <div className="flex w-full flex-col items-center justify-center p-4 text-center md:w-1/2">
          <AboutProject />
        </div>
        <div className="flex w-full items-center justify-center p-4 md:w-1/2">
          <AnimatePresence mode="wait">
            <Outlet key={location.pathname} />
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AuthLayout
