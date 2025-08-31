import { Link } from "react-router"

import { Button } from "@/components/ui/button"

const sections = [{ id: "login", label: "پروژه ی فرم ورود" }] as const

function Nav() {
  return (
    <nav className="bg-secondary flex h-[60px] w-full items-center justify-start px-8">
      <div className="flex gap-4">
        {sections.map((section) => (
          <Button key={section.id} variant="link" asChild>
            <Link
              to={`/${section.id}`}
              className="text-foreground-sec hover:text-primary relative cursor-pointer text-base hover:no-underline"
            >
              {section.label}
            </Link>
          </Button>
        ))}
      </div>
    </nav>
  )
}

export default Nav
