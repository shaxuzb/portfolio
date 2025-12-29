"use client"

import { ArrowDown } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-sm font-semibold text-primary mb-4 tracking-widest uppercase">Welcome to my portfolio</h2>

          <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight">
            Crafting Digital
            <span className="block bg-linear-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Experiences
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm a passionate developer creating beautiful, modern web experiences. Specializing in responsive design and
            smooth animations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="mt-16 animate-float">
          <ArrowDown className="mx-auto text-primary opacity-50" size={32} />
        </div>
      </div>
    </section>
  )
}
