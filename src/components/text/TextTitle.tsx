import type { Children } from "@/types/types"

export function TextTitle({ children }: Children) {
  return (
    <h1 className="scroll-mt-10 text-center text-4xl font-extrabold tracking-tight text-balance">
      {children}
    </h1>
  )
}
