import {
  Briefcase,
  Calendar,
  GraduationCap,
  Layers,
  Database,
} from "lucide-react"
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

const JOBS = [
  {
    role: "Software Engineer - II",
    company: "ScaleReal Technologies Pvt. Ltd.",
    period: "May 2025 - Present",
    desc: "As a Software Engineer II, took on broader engineering ownership — driving architecture decisions, leading feature delivery, and improving cross-team development practices. Built and shipped production-grade features for enterprise client applications across React.js and React Native.",
    tech: ["React.js", "React Native", "TypeScript", "Next.js", "Node.js"],
    align: "left",
    isEducation: false,
  },
  {
    role: "Software Engineer",
    company: "ScaleReal Technologies Pvt. Ltd.",
    period: "Aug 2023 - May 2025",
    desc: "Engineered scalable React and React Native applications for clients across healthcare, fintech, and enterprise domains. Delivered end-to-end features, drove code quality improvements, and collaborated closely with cross-functional product and design teams.",
    tech: ["TypeScript", "React.js", "React Native", "Tailwind CSS", "Firebase"],
    align: "right",
    isEducation: false,
  },
  {
    role: "Full Stack Developer",
    company: "ZeroT Energy",
    period: "Nov 2022 - Jul 2023",
    desc: "Worked as a full-stack developer on an energy-tech platform, building and maintaining Node.js backend services and React.js frontend dashboards. Contributed to data visualization features for real-time energy monitoring.",
    tech: ["Node.js", "React.js", "MongoDB", "REST APIs", "Docker"],
    align: "left",
    isEducation: false,
  },
  {
    role: "Full Stack Developer",
    company: "Webknot Technologies Private Limited",
    period: "Apr 2022 - Jul 2022",
    desc: "Internship role focused on building and enhancing web application features using React.js and AngularJS. Gained hands-on experience with full-stack workflows, API integrations, and collaborative agile development.",
    tech: ["React.js", "AngularJS", "Node.js", "REST APIs"],
    align: "right",
    isEducation: false,
  },
]

export function ExperienceSection() {
  return (
    <div id="experience">
      {/* Core Technical Proficiencies */}
      <section className="reveal mx-auto max-w-container-max px-margin-mobile py-section-padding-md pt-0 md:px-gutter">
        <div className="mb-16 text-center">
          <h2 className="font-headline-lg mb-4 text-headline-lg text-on-surface">
            Core Technical Proficiencies
          </h2>
          <div className="mx-auto h-1.5 w-12 rounded-full bg-primary-container" />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Card className="flex flex-col gap-0 rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-6 shadow-[0_10px_30px_rgba(45,55,72,0.04)] md:p-8 xl:p-8">
            <CardHeader className="gap-0 p-0">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary-container/20 text-primary">
                <Layers className="size-4" />
              </div>
              <CardTitle className="font-headline-md mb-4 text-xl font-semibold text-on-surface md:text-headline-md lg:text-xl">
                Modern Full-Stack Development
              </CardTitle>
              <CardDescription className="mb-8 text-body-lg leading-relaxed text-on-surface-variant">
                Specialized in building responsive, end-to-end web and mobile
                applications with high usability and scalable structure.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto p-0">
              <div className="flex flex-wrap gap-3">
                {[
                  "React JS",
                  "Next JS",
                  "React Native",
                  "TypeScript",
                  "Node.js",
                  "Express",
                  "MongoDB",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="font-label-md rounded-full bg-primary-container/10 px-4 py-2 text-sm font-semibold text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col gap-0 rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-6 shadow-[0_10px_30px_rgba(45,55,72,0.04)] md:p-8 xl:p-8">
            <CardHeader className="gap-0 p-0">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary-container/20 text-primary">
                <Database className="size-4" />
              </div>
              <CardTitle className="font-headline-md mb-4 text-xl font-semibold text-on-surface md:text-headline-md lg:text-xl">
                Backend Architecture &amp; Data Management
              </CardTitle>
              <CardDescription className="mb-8 text-body-lg leading-relaxed text-on-surface-variant">
                Experienced in designing relational/non-relational schemas, API
                endpoints, and configuring robust data pipelines.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto p-0">
              <div className="flex flex-wrap gap-3">
                {[
                  "PostgreSQL",
                  "Redis",
                  "REST APIs",
                  "Git",
                  "Supabase",
                  "Docker",
                  "AWS",
                  "Firebase",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="font-label-md rounded-full bg-primary-container/10 px-4 py-2 text-sm font-semibold text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Career Journey Timeline */}
      <section
        id="experience-timeline"
        className="reveal mx-auto max-w-container-max px-margin-mobile py-section-padding-md md:px-gutter"
      >
        <div className="mb-24 flex flex-col items-center text-center">
          <span className="mb-1 text-label-md tracking-widest text-primary uppercase">
            Career Journey
          </span>
          <h2 className="mb-4 text-headline-lg font-bold text-on-surface">
            Professional Experience
          </h2>
          <div className="h-1.5 w-20 rounded-full bg-primary" />
        </div>

        <div className="relative mx-auto max-w-6xl pl-6 md:pl-0">
          <div className="absolute -top-12 -bottom-12 left-1 w-0.5 transform bg-outline-variant/30 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {JOBS.map((job, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row ${job.align === "right" ? "md:flex-row-reverse" : ""} items-stretch`}
              >
                {/* Timeline Dot */}
                <div className="absolute top-6 left-[-21px] z-10 h-5 w-5 -translate-x-2 transform rounded-full border-[3.5px] border-background bg-primary shadow-sm md:left-1/2 md:-translate-x-1/2" />

                {/* Card */}
                <div className="w-full text-left md:w-1/2 md:px-8">
                  <Card className="flex flex-col gap-0 rounded-2xl border border-outline-variant/15 bg-surface-container-low p-6 py-0 shadow-sm transition-all hover:border-primary/20">
                    <CardHeader className="gap-0 p-0 pt-6">
                      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-2 text-sm font-bold text-primary">
                          {job.isEducation ? (
                            <GraduationCap className="size-4" />
                          ) : (
                            <Briefcase className="size-4" />
                          )}
                          {job.role}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded border border-outline-variant/10 bg-surface-container-lowest px-2.5 py-0.5 text-[11px] font-bold text-on-surface-variant">
                          <Calendar className="size-3" />
                          {job.period}
                        </span>
                      </div>
                      <CardTitle className="mb-2 text-lg font-semibold text-foreground">
                        {job.company}
                      </CardTitle>
                      <CardDescription className="mb-4 text-sm leading-relaxed text-on-surface-variant">
                        {job.desc}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto p-0 pb-6">
                      <div className="flex flex-wrap gap-1.5">
                        {job.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded border border-outline-variant/20 bg-background px-2 py-0.5 text-[10px] font-bold"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                {/* Spacer */}
                <div className="hidden w-1/2 md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
