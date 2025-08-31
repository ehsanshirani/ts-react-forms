import { motion, type Transition } from "framer-motion"
import type { ReactNode } from "react"

export function PageTransitionWrapper({ children }: { children: ReactNode }) {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: -20,
    },
  }

  const pageTransition: Transition = {
    type: "tween",
    ease: "easeInOut",
    duration: 1,
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}
