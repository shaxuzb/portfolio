"use client"

import { useEffect, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    const element = document.getElementById("about-section")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center" id="about-section">
          <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
              I'm a developer passionate about crafting accessible, pixel-perfect digital experiences. My journey
              combines thoughtful design with robust engineering.
            </p>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              I specialize in building responsive web applications with smooth animations and intuitive user interfaces.
              Every project is an opportunity to push creative boundaries while maintaining performance.
            </p>
            <div className="flex gap-4">
              <div>
                <h3 className="text-2xl font-bold text-primary">5+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">50+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">30+</h3>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>

          <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="bg-linear-to-br from-primary to-accent rounded-2xl p-1">
              <div className="bg-background rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="h-40 bg-linear-to-r from-primary/20 to-accent/20 rounded-lg animate-pulse" />
                  <div className="h-4 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted rounded w-1/2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
