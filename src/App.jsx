import React from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">Vivek Raj</a>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#about" className="hover:text-cyan-300 transition">About</a>
            <a href="#projects" className="hover:text-cyan-300 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-300 transition">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="scroll-mt-24">
          <About />
        </section>
        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>

      <footer className="border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 text-sm text-white/60">
          © {new Date().getFullYear()} Vivek Raj. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
