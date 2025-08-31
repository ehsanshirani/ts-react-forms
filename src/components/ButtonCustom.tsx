import type { ComponentPropsWithoutRef } from "react"
import type { Children } from "@/types/types"

import { Button } from "./ui/button"

type ButtonType = Children & ComponentPropsWithoutRef<typeof Button>

function ButtonCustom({ children, ...props }: ButtonType) {
  return (
    <Button className="w-full cursor-pointer" {...props}>
      {children}
    </Button>
  )
}

export default ButtonCustom
