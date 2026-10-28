import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Marquee from "@/components/marquee"
import Projects from "@/components/projects"
import Services from "@/components/services"
import About from "@/components/about"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Marquee />
      <Projects />
      <Services />
      <About />
      <Contact />
    </main>
  )
}
