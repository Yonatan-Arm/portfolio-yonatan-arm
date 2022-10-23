import React from 'react'
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function HomePage() {
  
  window.scrollTo(0,0)
  return (
    <section>
      <Hero />
      <About />
      <Skills /> 
      <Education />
      <Projects />
      <Contact/>
    </section>
  )
}
