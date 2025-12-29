"use client"

import { useEffect, useState } from "react"

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "Vercel", "VS Code", "Figma"],
  },
  {
    category: "Design",
    skills: ["UI Design", "UX Principles", "Animation", "Accessibility", "Responsive Design"],
  },
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    const element = document.getElementById("skills-section")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div id="skills-section" className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A diverse skill set built through years of continuous learning and hands-on experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl border border-border bg-background hover:border-primary transition-all duration-300 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{category.category}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, sidx) => (
                  <li
                    key={sidx}
                    className="flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
