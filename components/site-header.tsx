import { mailto, site } from "@/lib/site"

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
]

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <a
          href="#top"
          className="font-heading text-xl tracking-wide whitespace-nowrap"
        >
          {site.name}
        </a>
        <nav aria-label="Main" className="flex items-center gap-5 sm:gap-8">
          <ul className="hidden items-center gap-8 font-mono text-[0.7rem] tracking-[0.18em] uppercase sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={mailto}
            className="font-mono text-[0.7rem] tracking-[0.12em] underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
          >
            {site.email}
          </a>
        </nav>
      </div>
    </header>
  )
}

export { SiteHeader }
