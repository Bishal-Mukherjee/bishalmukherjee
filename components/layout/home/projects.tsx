import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Bot, Brain, ChartNoAxesCombined, Leaf, Shield } from "lucide-react"
import { SVGComponent as MedConnectIcon } from "@/components/svg-components/medconnect"
import { SVGComponent as P2PIcon } from "@/components/svg-components/p2p"
import { SVGComponent as MedicalExtensionIcon } from "@/components/svg-components/medical-extension"

const PROJECTS = [
  {
    title: "MedConnect",
    role: "Full-Stack Engineer",
    contribution:
      "Owned end-to-end planning, built the React Native mobile client, and developed the backend services.",
    description:
      "A React Native healthcare app enabling patients to predict ailments via symptom entry, book slots, consult doctors via video calls, and order medicines from local pharmacies.",
    tags: ["React", "Node.js", "MongoDB", "Firebase"],
    liveUrl: "#",
    gitHubUrl: "#",
    icon: <MedConnectIcon />,
  },
  {
    title: "DailyLogs",
    role: "Solo Developer",
    contribution:
      "Integrated OpenAI API pipelines to automate categorizations and Slack integrations.",
    description:
      "Intelligent automation for Slack and Clockify using LLM-based categorization.",
    tags: ["Node.js", "Slack API", "LLM"],
    liveUrl: "#",
    gitHubUrl: "#",
    icon: <Bot />,
  },
  {
    title: "Skillwatch",
    role: "Frontend Engineer",
    contribution:
      "Spearheaded UI design and implementation of feedback routing pages using React.",
    description:
      "A React-based performance tracking platform allowing employees to provide feedback to monitor KRAs & KPIs.",
    tags: ["React", "RTK Query", "Tailwind"],
    liveUrl: "#",
    gitHubUrl: "#",
    icon: <ChartNoAxesCombined />,
  },
  {
    title: "Carbon Credit Marketplace",
    role: "React Native Engineer",
    contribution:
      "Designed dynamic buy/sell views and optimized state caches with Expo and Firebase.",
    description:
      "A mobile marketplace platform designed to allow users to buy, sell, or retire carbon credits to support environmental sustainability.",
    tags: ["Expo", "Zustand", "Firebase"],
    liveUrl: "#",
    gitHubUrl: "#",
    icon: <Leaf />,
  },
  {
    title: "AI/ML Compute Dashboard",
    role: "Frontend Engineer",
    contribution:
      "Created highly responsive dashboard modules for tracking server deployments and GPU workloads.",
    description:
      "High-performance cloud compute management system designed for training and deploying AI/ML models.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "#",
    gitHubUrl: "#",
    icon: <Brain />,
  },
  {
    title: "P2P Supply Chain Platform",
    role: "Frontend Engineer",
    contribution:
      "Designed transactional invoice lists and automated status trackers for inventory flows.",
    description:
      "An automated Procurement-to-Pay platform engineered to streamline corporate supply chain transactions and vendor invoicing.",
    tags: ["React", "Zustand", "Tailwind CSS"],
    liveUrl: "#",
    gitHubUrl: "#",
    icon: <P2PIcon />,
  },
  {
    title: "FRAML Risk Detection",
    role: "Frontend Engineer",
    contribution:
      "Developed interactive dashboards, real-time alert flags, and charts to visualize risk profiles.",
    description:
      "An AI copilot platform configured to analyze, detect, and flag FRAML (Fraud and Anti-Money Laundering) related activities.",
    tags: ["React", "Zustand", "Shadcn UI", "Tailwind CSS"],
    liveUrl: "#",
    gitHubUrl: "#",
    icon: <Shield />,
  },
  {
    title: "Autonomous EHR Agent",
    role: "Full-Stack Engineer",
    contribution:
      "Developed the companion Chrome extension overlay and engineered database automation microservices.",
    description:
      "An autonomous agent for healthcare designed to record encounters between patients and providers, automating manual EHR data entries.",
    tags: ["Chrome Extension", "React", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    gitHubUrl: "#",
    icon: <MedicalExtensionIcon />,
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="reveal mx-auto max-w-container-max px-margin-mobile py-section-padding-lg md:px-gutter"
    >
      <div className="mb-16 flex flex-col items-end justify-between gap-4 text-left md:flex-row">
        <div>
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="mt-2 text-on-surface-variant">
            A curated collection of systems, applications, and tools I have
            architected and built.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <Card
            key={project.title}
            className="group flex flex-col gap-0 overflow-hidden rounded-[24px] border border-outline-variant/10 bg-surface-container-lowest py-0 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)]"
          >
            {/* Monochromatic header panel */}
            <div className="relative flex h-32 items-end overflow-hidden border-b border-outline-variant/10 bg-surface-container p-5">
              {/* Faint watermark index */}
              <span className="absolute right-4 top-2 select-none font-mono text-6xl font-black leading-none text-on-surface opacity-[0.04]">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon badge — clean outlined style */}
              <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-outline-variant/20 bg-surface text-on-surface-variant shadow-sm">
                {project.icon}
              </div>
            </div>

            <CardHeader className="gap-0 p-6 pb-0">
              <div className="mb-2 flex items-start justify-between gap-2">
                <CardTitle className="font-headline-md text-headline-md text-on-surface">
                  {project.title}
                </CardTitle>
                <span className="shrink-0 rounded-md bg-surface-container px-2.5 py-0.5 text-[11px] font-semibold text-on-surface-variant">
                  {project.role}
                </span>
              </div>
              <CardDescription className="mb-4 line-clamp-2 text-body-md leading-relaxed text-on-surface-variant">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0 pb-2">
              <div className="mt-1 mb-4 border-l-2 border-outline-variant/30 pl-3 text-xs leading-relaxed text-on-surface-variant">
                <span className="font-semibold text-on-surface">
                  Key Contribution:{" "}
                </span>
                <span className="italic">{project.contribution}</span>
              </div>
              <div className="flex flex-wrap gap-2 pb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-outline-variant/20 bg-surface-container px-3 py-1 text-[12px] font-medium text-on-surface-variant"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
