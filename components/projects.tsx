"use client"

import { useEffect, useState } from "react"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with real-time inventory management and payment integration.",
    tags: ["React", "Next.js", "PostgreSQL", "Stripe"],
    image: "/ecommerce-platform.jpg",
    link: "#",
    github: "#",
  },
  {
    title: "Design System",
    description: "Comprehensive design system with reusable components and documentation for consistent UI/UX.",
    tags: ["React", "Storybook", "TypeScript", "Tailwind"],
    image: "/design-system-abstract.png",
    link: "#",
    github: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "Interactive dashboard for real-time data visualization and business intelligence insights.",
    tags: ["Next.js", "Chart.js", "API", "Analytics"],
    image: "/analytics-dashboard.png",
    link: "#",
    github: "#",
  },
  {
    title: "Mobile App",
    description: "Cross-platform mobile application built with modern frameworks and best practices.",
    tags: ["React Native", "Firebase", "Redux", "TypeScript"],
    image: "/mobile-app.jpg",
    link: "#",
    github: "#",
  },
  {
    title: "Collaboration Tool",
    description: "Real-time collaboration platform with live editing and instant notifications.",
    tags: ["WebSocket", "React", "Node.js", "MongoDB"],
    image: "/collaboration-tool.jpg",
    link: "#",
    github: "#",
  },
  {
    title: "AI Content Generator",
    description: "AI-powered content generation tool with advanced customization and export options.",
    tags: ["Next.js", "AI API", "OpenAI", "TypeScript"],
    image: "/ai-content-generator.jpg",
    link: "#",
    github: "#",
  },
]

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    const element = document.getElementById("projects-section")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div id="projects-section" className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing a selection of my most impactful and innovative work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-xl border border-border overflow-hidden bg-card hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-1 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48 bg-muted z-10 ">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                  >
                    <ExternalLink size={16} />
                    View
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
