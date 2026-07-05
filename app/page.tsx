import { HeroSection } from "@/components/layout/home/hero-section"
import { CoreCompetencies } from "@/components/layout/home/core-competencies"
import { Projects } from "@/components/layout/home/projects"
import { ExperienceSection } from "@/components/layout/home/experience-section"
import { ContactSection } from "@/components/layout/home/contact-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 selection:bg-primary-container selection:text-on-primary-container">
      <main className="pt-20">
        <HeroSection />
        <CoreCompetencies />
        <Projects />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  )
}
