"use client"

import * as React from "react"

// ─── Types ───────────────────────────────────────────────────────────────────

type Theme = "dark" | "light"

interface ThemeContextValue {
  isDark: boolean
  theme: Theme
  toggleTheme: () => void
}

// ─── Context ─────────────────────────────────────────────────────────────────

const ThemeContext = React.createContext<ThemeContextValue | undefined>(
  undefined
)
ThemeContext.displayName = "ThemeContext"

// ─── Provider ────────────────────────────────────────────────────────────────

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<Theme>(() => {
    if (typeof window === "undefined") return "dark"
    const stored = localStorage.getItem("theme") as Theme | null
    return stored === "dark" || stored === "light" ? stored : "dark"
  })

  // Keep the <html> class and localStorage in sync whenever theme changes.
  React.useEffect(() => {
    const root = document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
      root.classList.remove("light")
    } else {
      root.classList.remove("dark")
      root.classList.add("light")
    }
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = React.useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }, [])

  const value = React.useMemo<ThemeContextValue>(
    () => ({ isDark: theme === "dark", theme, toggleTheme }),
    [theme, toggleTheme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

// ─── Hook ────────────────────────────────────────────────────────────────────

export function useTheme(): ThemeContextValue {
  const ctx = React.useContext(ThemeContext)
  if (ctx === undefined) {
    throw new Error("useTheme must be used inside a <ThemeProvider>")
  }
  return ctx
}
