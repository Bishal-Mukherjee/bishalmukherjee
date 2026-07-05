"use client"

import { Mail, MapPin } from "lucide-react"
import { ContactForm } from "@/components/layout/contact/contact-form"
import { PROFILE } from "@/constants/profile"

export function ContactSection() {
  return (
    <section
      id="contact"
      className="reveal mx-auto max-w-container-max px-margin-mobile py-section-padding-md md:px-gutter"
    >
      <div className="mb-16 flex flex-col items-center text-center">
        <span className="mb-1 text-label-md tracking-widest text-primary uppercase">
          Get In Touch
        </span>
        <h2 className="mb-4 text-headline-lg font-bold text-on-surface">
          Let&apos;s work together
        </h2>
        <div className="h-1.5 w-20 rounded-full bg-primary" />
      </div>

      <div className="grid items-center gap-16 md:grid-cols-2">
        {/* Left Column info */}
        <div className="text-left">
          <p className="mb-8 text-body-lg leading-relaxed text-on-surface-variant">
            I&apos;m currently open to new opportunities and collaborations.
            Whether you have a project in mind or just want to chat about
            engineering, I&apos;d love to hear from you.
          </p>

          <div className="space-y-4">
            <div className="group flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <Mail className="size-5" />
              </div>
              <span className="text-body-md font-semibold text-on-surface">
                {PROFILE.email}
              </span>
            </div>

            <div className="group flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <MapPin className="size-5" />
              </div>
              <span className="text-body-md font-semibold text-on-surface">
                Durgapur, West Bengal, India
              </span>
            </div>
          </div>
        </div>

        {/* Right Column — Form */}
        <ContactForm />
      </div>
    </section>
  )
}
