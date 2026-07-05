"use client"

import { SVGComponent as GitHub } from "@/components/svg-components/github"
import { SVGComponent as LinkedIn } from "@/components/svg-components/linked-in"
import { useTheme } from "@/contexts/theme-context"
import { PROFILE } from "@/constants/profile"

export function Footer() {
  const { isDark } = useTheme()
  return (
    <footer className="border-t border-outline-variant/10 bg-surface transition-colors duration-300">
      <div className="mx-auto flex w-full max-w-container-max flex-col items-center justify-between gap-8 px-margin-mobile py-6 md:flex-row md:px-gutter">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display cursor-pointer text-headline-md font-extrabold text-on-surface transition-colors hover:text-primary"
          >
            {PROFILE.name}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 md:items-end">
          <div className="flex gap-6 text-body-md font-semibold">
            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-on-surface-variant transition-all hover:scale-105 hover:text-primary active:scale-95"
            >
              <GitHub
                className="mb-0.5 size-4"
                fill={isDark ? "#5adace" : "#1b1c18"}
              />
              <span>GitHub</span>
            </a>
            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-on-surface-variant transition-all hover:scale-105 hover:text-primary active:scale-95"
            >
              <LinkedIn
                className="mb-0.5 size-4"
                fill={isDark ? "#5adace" : "#1b1c18"}
              />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
