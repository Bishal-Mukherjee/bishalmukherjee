"use client"

import * as React from "react"
import Link from "next/link"
import { Sun, Moon, Menu } from "lucide-react"
import { SVGComponent as Initials } from "@/components/svg-components/initials"
import { useTheme } from "@/contexts/theme-context"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { cn } from "@/lib/utils"

export function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = React.useState(false)

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-outline-variant/10 bg-background/80 py-3 shadow-md backdrop-blur-md"
          : "bg-surface/0 py-5"
      )}
    >
      <nav className="mx-auto flex w-full max-w-container-max items-center justify-between px-margin-mobile md:px-gutter">
        <Link href="/#">
          <Initials className="size-14" fill={isDark ? "#5adace" : "#1b1c18"} />
        </Link>

        <div className="hidden items-center space-x-8 text-label-md font-semibold md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className="cursor-pointer transition-colors hover:text-primary"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="rounded-full border border-outline-variant/20 p-2.5 text-on-surface-variant/80 shadow-sm transition-all duration-300 hover:border-primary/50 hover:bg-surface-container-low hover:text-primary active:scale-90"
            title="Toggle theme"
          >
            {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>

          {/* Mobile menu — top drawer */}
          <Drawer direction="top">
            <DrawerTrigger asChild>
              <button className="rounded-full border border-outline-variant/20 p-2 text-on-surface-variant transition-colors hover:border-primary/50 md:hidden">
                <Menu className="size-5" />
              </button>
            </DrawerTrigger>
            <DrawerContent className="border-b border-outline-variant/10 bg-background/95 px-6 pt-4 pb-6 backdrop-blur-md before:hidden">
              <nav className="mt-2 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <DrawerClose key={link.href} asChild>
                    <Link
                      href={link.href}
                      className="rounded-lg px-3 py-3 text-label-md font-semibold text-on-surface transition-colors hover:bg-surface-container-low hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </DrawerClose>
                ))}
              </nav>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </header>
  )
}
