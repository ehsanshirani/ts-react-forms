import type { Children } from "@/types/types"

export function TextTitleForm({ children }: Children) {

  return (
    <h1 className="scroll-mt-10 text-right text-3xl font-bold tracking-tight text-balance">
      {children}
    </h1>
  )
  
}
