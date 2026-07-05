"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    targetId: string
  ) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const headerOffset = 70
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="hero"
      className="reveal mx-auto grid max-w-container-max items-center gap-12 px-margin-mobile py-section-padding-md md:grid-cols-2 md:px-gutter md:py-section-padding-lg"
    >
      <div className="space-y-8 text-left">
        <h1 className="text-display-lg-mobile leading-tight font-extrabold tracking-tighter text-on-background md:text-display-lg">
          Hi, I&apos;m a{" "}
          <span className="gradient-text">Software Engineer</span> focused on
          building robust applications
        </h1>

        <p className="max-w-lg text-body-lg leading-relaxed text-on-surface-variant">
          Transforming complex problems into elegant, maintainable code.
          Specializing in high-performance web ecosystems and scalable backend
          architectures.
        </p>

        <div className="flex items-center gap-4">
          <Button
            size="lg"
            className="rounded-full font-bold shadow-md hover:-translate-y-0.5 active:translate-y-0"
            asChild
          >
            <Link href="#projects">Explore Projects</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full font-bold hover:-translate-y-0.5 active:translate-y-0"
            asChild
          >
            <Link href="#contact">Get in touch</Link>
          </Button>
        </div>
      </div>

      {/* Hero SVG Animation Container */}
      <div className="group relative flex justify-center md:justify-end">
        <div className="absolute inset-0 -z-10 rounded-full bg-primary-container/20 blur-3xl transition-all duration-500 group-hover:bg-secondary-container/20"></div>
        <div className="code-container flex aspect-square w-full max-w-[450px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 p-6 shadow-lg md:p-8">
          <svg
            className="h-full w-full max-w-[380px]"
            fill="none"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Terminal Header */}
            <circle cx="10" cy="20" fill="#FF5F56" r="8"></circle>
            <circle cx="40" cy="20" fill="#FFBD2E" r="8"></circle>
            <circle cx="70" cy="20" fill="#27C93F" r="8"></circle>

            {/* Animated Code Mockup Lines */}
            <rect
              className="code-line opacity-80"
              fill="#4fd1c5"
              height="10"
              rx="5"
              style={
                {
                  "--final-width": "100px",
                  animationDelay: "0.1s",
                } as React.CSSProperties
              }
              width="100"
              x="0"
              y="60"
            />
            <rect
              className="code-line opacity-60"
              fill="#5adace"
              height="10"
              rx="5"
              style={
                {
                  "--final-width": "150px",
                  animationDelay: "0.5s",
                } as React.CSSProperties
              }
              width="150"
              x="120"
              y="60"
            />
            <rect
              className="code-line opacity-30"
              fill="#ffffff"
              height="10"
              rx="5"
              style={
                {
                  "--final-width": "210px",
                  animationDelay: "0.8s",
                } as React.CSSProperties
              }
              width="210"
              x="20"
              y="90"
            />
            <rect
              className="code-line opacity-50"
              fill="#5adace"
              height="10"
              rx="5"
              style={
                {
                  "--final-width": "60px",
                  animationDelay: "1.2s",
                } as React.CSSProperties
              }
              width="60"
              x="250"
              y="90"
            />
            <rect
              className="code-line opacity-20"
              fill="#ffffff"
              height="10"
              rx="5"
              style={
                {
                  "--final-width": "290px",
                  animationDelay: "1.5s",
                } as React.CSSProperties
              }
              width="290"
              x="20"
              y="120"
            />
            <rect
              className="code-line opacity-80"
              fill="#4fd1c5"
              height="10"
              rx="5"
              style={
                {
                  "--final-width": "80px",
                  animationDelay: "2s",
                } as React.CSSProperties
              }
              width="80"
              x="0"
              y="160"
            />
            <rect
              className="code-line opacity-60"
              fill="#5adace"
              height="10"
              rx="5"
              style={
                {
                  "--final-width": "240px",
                  animationDelay: "2.3s",
                } as React.CSSProperties
              }
              width="240"
              x="100"
              y="160"
            />
            <rect
              className="code-line opacity-30"
              fill="#ffffff"
              height="10"
              rx="5"
              style={
                {
                  "--final-width": "120px",
                  animationDelay: "2.6s",
                } as React.CSSProperties
              }
              width="120"
              x="20"
              y="190"
            />
            <rect
              className="code-line opacity-50"
              fill="#4fd1c5"
              height="10"
              rx="5"
              style={
                {
                  "--final-width": "170px",
                  animationDelay: "2.9s",
                } as React.CSSProperties
              }
              width="170"
              x="160"
              y="190"
            />
            <rect
              className="code-line opacity-20"
              fill="#ffffff"
              height="10"
              rx="5"
              style={
                {
                  "--final-width": "270px",
                  animationDelay: "3.2s",
                } as React.CSSProperties
              }
              width="270"
              x="20"
              y="220"
            />
            {/* Glowing Accent Lines */}
            <rect
              className="code-line opacity-90"
              fill="#4fd1c5"
              height="10"
              rx="5"
              style={
                {
                  "--final-width": "190px",
                  animationDelay: "4s",
                } as React.CSSProperties
              }
              width="190"
              x="0"
              y="270"
            />
            <rect
              className="code-line opacity-90"
              fill="#5adace"
              height="10"
              rx="5"
              style={
                {
                  "--final-width": "330px",
                  animationDelay: "4.5s",
                } as React.CSSProperties
              }
              width="330"
              x="0"
              y="300"
            />
            <rect
              className="code-line opacity-90"
              fill="#5adace"
              height="10"
              rx="5"
              style={
                {
                  "--final-width": "280px",
                  animationDelay: "4.5s",
                } as React.CSSProperties
              }
              width="280"
              x="0"
              y="330"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
