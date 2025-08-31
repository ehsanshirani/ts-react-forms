import { Github, Linkedin } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-background border-accent flex h-[60px] w-full items-center justify-between border-t px-8 py-5 md:px-16">
      <a
        href="https://github.com/tir-webdeveloper"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View project source code on GitHub"
      >
        <Github className="text-muted-foreground hover:text-primary h-5 w-5 transition-colors" />
      </a>

      <p className="text-muted-foreground text-sm">
        made with
        <span className="animate-heartbeat mx-1.5 inline-block text-red-500">
          ❤️
        </span>
        by ehsan shirani
      </p>

      <a
        href="https://www.linkedin.com/in/ehsanshirani"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Ehsan Shirani's LinkedIn profile"
      >
        <Linkedin className="text-muted-foreground hover:text-primary h-5 w-5 transition-colors" />
      </a>
    </footer>
  )
}

export default Footer
