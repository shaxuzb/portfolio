"use client"

import { useEffect, useState } from "react"
import { Code, Palette, Zap, Smartphone } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building modern, responsive websites with cutting-edge technologies and best practices.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful, intuitive interfaces that users love to interact with.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing applications for speed, ensuring smooth user experiences across all devices.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Designing and developing with mobile experience as the top priority.",
  },
]

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    const element = document.getElementById("services-section")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div id="services-section" className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">My Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to bring your vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`group p-6 rounded-xl border border-border hover:border-primary bg-card/50 hover:bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer transform hover:-translate-y-1 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 w-12 h-12 bg-linear-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:animate-glow transition-all">
                  <Icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
