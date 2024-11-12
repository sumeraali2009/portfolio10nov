"use client";

import Projects from "@/components/Projects";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import About from "@/components/About";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh(); // Refresh AOS to apply animations
  }, []);

  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <About />
    </main>
  );
}