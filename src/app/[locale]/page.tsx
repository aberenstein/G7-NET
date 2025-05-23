"use client"

import { useEffect, useState } from "react"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Services } from "@/components/Services"
import { Technology } from "@/components/Technology"
import { Industries } from "@/components/Industries"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { NewsSection } from "@/components/Novedades"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Services />
      <Technology />
      <Industries />
      <NewsSection />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
