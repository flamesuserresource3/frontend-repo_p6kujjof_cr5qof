import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple sticky header */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold text-gray-900">Vivek Raj</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
            <a className="hover:text-gray-900" href="#about">About</a>
            <a className="hover:text-gray-900" href="#projects">Projects</a>
            <a className="hover:text-gray-900" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
