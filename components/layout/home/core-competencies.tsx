import { Code, Database, Lightbulb } from "lucide-react"
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

const COMPETENCIES = [
  {
    title: "Crafting Seamless Web Experiences",
    description:
      "Developing responsive webapp with modern frontend frameworks to deliver high-performance and accessible user experiences.",
    Icon: Code,
    iconBg: "bg-tertiary-fixed/30",
    iconColor: "text-tertiary",
    tagBg: "bg-tertiary-container/20",
    tagColor: "text-on-tertiary-container",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Robust Backend & Database Management",
    description:
      "Architecting scalable backend systems, designing efficient database structures, and building secure, high-throughput API integrations.",
    Icon: Database,
    iconBg: "bg-primary-container/30",
    iconColor: "text-primary",
    tagBg: "bg-primary-container/20",
    tagColor: "text-on-primary-container",
    tags: ["PostgreSQL", "Node.js", "Redis", "AWS"],
  },
  {
    title: "Driven to Deliver High-Impact Solutions",
    description:
      "Collaborating in agile teams to build robust software solutions, streamline CI/CD pipelines, and maintain high standards of testing.",
    Icon: Lightbulb,
    iconBg: "bg-secondary-container/30",
    iconColor: "text-secondary",
    tagBg: "bg-secondary-container/20",
    tagColor: "text-on-secondary-container",
    tags: ["Agile", "CI/CD", "Unit Testing"],
  },
]

export function CoreCompetencies() {
  return (
    <section className="reveal bg-surface-container-low py-section-padding-md md:py-section-padding-lg">
      <div className="">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="mb-4 text-headline-lg font-bold text-on-surface">
            Core Competencies
          </h2>
          <div className="h-1.5 w-20 rounded-full bg-primary"></div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3">
          {COMPETENCIES.map((comp) => {
            const IconComponent = comp.Icon
            return (
              <Card
                key={comp.title}
                className="group flex flex-col gap-0 overflow-hidden rounded-[24px] border-outline-variant/10 bg-surface py-0 text-left shadow-sm"
              >
                <CardHeader className="gap-0 p-8 pb-0">
                  <div
                    className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ${comp.iconBg} ${comp.iconColor}`}
                  >
                    <IconComponent className="size-4" />
                  </div>
                  <CardTitle className="font-headline-md mb-4 text-headline-md text-on-surface">
                    {comp.title}
                  </CardTitle>
                  <CardDescription className="mb-6 grow text-body-md leading-relaxed text-on-surface-variant">
                    {comp.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto p-8 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {comp.tags.map((tech) => (
                      <span
                        key={tech}
                        className={`rounded-full ${comp.tagBg} px-3 py-1 text-xs font-bold ${comp.tagColor}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
