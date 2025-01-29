"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import MobileNav  from "@/components/MobileNav"
import Link from "next/link"
import { usePathname } from "next/navigation"

/**
 * The main header component for the app.
 *
 * This component is a sticky header that is present at the top of every page.
 * It contains a navigation menu with links to the dashboard, products, and analytics pages.
 * It also contains a theme toggle button and a mobile navigation menu.
 *
 * @returns The Header component.
 */
 export function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span className="hidden font-bold sm:inline-block">Inventory Pro</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/"
              className={`transition-colors hover:text-foreground/80 ${pathname === "/" ? "text-foreground" : "text-foreground/60"}`}
            >
              Dashboard
            </Link>
            <Link
              href="/products"
              className={`transition-colors hover:text-foreground/80 ${pathname === "/products" ? "text-foreground" : "text-foreground/60"}`}
            >
              Products
            </Link>
            <Link
              href="/analytics"
              className={`transition-colors hover:text-foreground/80 ${pathname === "/analytics" ? "text-foreground" : "text-foreground/60"}`}
            >
              Analytics
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            className="mr-6"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

