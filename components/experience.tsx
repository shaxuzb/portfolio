"use client"

import { useEffect, useState } from "react"
import { Calendar, MapPin, ChevronDown } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    location: "Remote",
    description: "Leading frontend architecture and mentoring junior developers on React and Next.js projects.",
    achievements: ["Led 5+ major projects", "30% performance improvement", "Team mentorship"],
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Creative Digital Solutions",
    period: "2020 - 2022",
    location: "New York, USA",
    description: "Developed full-stack applications with React, Node.js, and PostgreSQL for diverse clients.",
    achievements: ["Built 12+ web applications", "Improved API response time by 40%", "Launched payment integration"],
    skills: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "StartUp Hub",
    period: "2019 - 2020",
    location: "San Francisco, USA",
    description: "Created responsive web interfaces and optimized user experience for SaaS products.",
    achievements: ["Increased user engagement by 25%", "Redesigned UI components", "Mobile optimization"],
    skills: ["React", "JavaScript", "CSS", "Figma"],
  },
  {
    id: 4,
    title: "Junior Web Developer",
    company: "Web Agency Pro",
    period: "2018 - 2019",
    location: "Los Angeles, USA",
    description: "Built static websites and maintained client web applications using HTML, CSS, and JavaScript.",
    achievements: ["Launched 20+ websites", "Client satisfaction rating 4.9/5", "Cross-browser compatibility"],
    skills: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
]

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [animatedItems, setAnimatedItems] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    const element = document.getElementById("experience-section")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      experiences.forEach((exp, index) => {
        setTimeout(() => {
          setAnimatedItems((prev) => [...prev, exp.id])
        }, index * 150)
      })
    }
  }, [isVisible])

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div id="experience-section" className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-in-up">Work Experience</h2>
          <p
            className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            My professional journey and achievements across various companies
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-primary via-accent to-primary transform md:-translate-x-1/2 animate-pulse-subtle" />

          {/* Experience items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative ${index % 2 === 0 ? "md:pr-1/2" : "md:ml-1/2"} ${
                  animatedItems.includes(exp.id) ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `0s` }}
              >
                <div className="absolute left-0 md:left-1/2 top-6 w-6 h-6 bg-linear-to-br from-primary to-accent rounded-full border-4 border-background transform md:-translate-x-3 z-10 shadow-lg shadow-primary/50 group-hover:animate-glow transition-all hover:scale-150 duration-300" />

                <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}>
                  <button
                    onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                    className="w-full text-left p-6 rounded-xl border border-border hover:border-primary/50 bg-background/50 hover:bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 group cursor-pointer overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                    <div className="relative flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-semibold text-sm mt-1 group-hover:text-accent transition-colors">
                          {exp.company}
                        </p>
                      </div>
                      <ChevronDown
                        className={`text-primary transition-all duration-300 ${expandedId === exp.id ? "rotate-180" : ""}`}
                        size={20}
                      />
                    </div>

                    <div className="relative flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground text-sm mb-4">
                      <div className="flex items-center gap-2 group-hover:text-accent transition-colors">
                        <Calendar size={16} className="text-accent" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 group-hover:text-accent transition-colors">
                        <MapPin size={16} className="text-accent" />
                        {exp.location}
                      </div>
                    </div>

                    {expandedId === exp.id && (
                      <div className="relative mt-4 pt-4 border-t border-border/50 space-y-3 animate-scale-in">
                        <p className="text-muted-foreground">{exp.description}</p>

                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, aidx) => (
                              <li
                                key={aidx}
                                className="text-sm text-muted-foreground flex items-center gap-2 hover:text-accent transition-colors"
                              >
                                <span className="w-2 h-2 bg-linear-to-r from-primary to-accent rounded-full" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {exp.skills.map((skill, sidx) => (
                            <span
                              key={sidx}
                              className="px-3 py-1.5 text-xs rounded-full bg-linear-to-r from-primary/20 to-accent/20 text-primary hover:from-primary/40 hover:to-accent/40 transition-all duration-300 border border-primary/20 hover:border-primary/50"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
