import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollRevealObserver } from "@/components/scroll-reveal-observer"
import { ThemeProvider } from "@/contexts/theme-context"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"
import { cn } from "@/lib/utils"
import { PROFILE } from "@/constants/profile"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: "https://bishalmukherjee.dev",
  title: {
    default: `${PROFILE.name} | ${PROFILE.role}`,
    template: `%s | ${PROFILE.name}`,
  },
  description: `Welcome to the portfolio of ${PROFILE.name}, a ${PROFILE.role} focused on building robust applications, high-performance web ecosystems, and scalable backend architectures.`,
  keywords: [
    PROFILE.name,
    PROFILE.role,
    "Software Engineer Portfolio",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "PostgreSQL",
    "Web Development",
    "Scalable Architectures",
  ],
  authors: [{ name: PROFILE.name, url: PROFILE.githubUrl }],
  creator: PROFILE.name,
  publisher: PROFILE.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bishalmukherjee.dev",
    title: `${PROFILE.name} | ${PROFILE.role}`,
    description: `Welcome to the portfolio of ${PROFILE.name}, a ${PROFILE.role} focused on building robust applications, high-performance web ecosystems, and scalable backend architectures.`,
    siteName: `${PROFILE.name} Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 1200,
        alt: `${PROFILE.name} - ${PROFILE.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.name} | ${PROFILE.role}`,
    description: `Welcome to the portfolio of ${PROFILE.name}, a ${PROFILE.role} focused on building robust applications, high-performance web ecosystems, and scalable backend architectures.`,
    images: ["/og-image.png"],
    creator: "@bishal-mukherjee",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.name,
    jobTitle: PROFILE.role,
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://bishalmukherjee.dev",
    sameAs: [PROFILE.githubUrl, PROFILE.linkedinUrl],
    email: PROFILE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Durgapur",
      addressRegion: "West Bengal",
      addressCountry: "India",
    },
    description: `Software Engineer focused on building robust applications, high-performance web ecosystems, and scalable backend architectures.`,
  }

  return (
    <html
      lang="en"
      className={cn("antialiased", fontMono.variable, plusJakartaSans.variable)}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <ScrollRevealObserver />
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}
