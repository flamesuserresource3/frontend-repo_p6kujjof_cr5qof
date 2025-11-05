import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Intro text */}
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-sm font-medium">
              B.Tech CSE (AI) • Aspiring Engineer
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Hi, I'm <span className="text-blue-600">Vivek Raj</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              I build clean, modern web experiences and love exploring interactive 3D,
              problem solving, and elegant UI. I’m currently studying Computer Science & Engineering (AI).
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-5 py-3 font-medium shadow hover:bg-blue-700 transition">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 font-medium text-gray-700 hover:bg-gray-50 transition">
                Contact Me
              </a>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/vk12354"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-gray-500 hover:text-gray-900 transition"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/vivek-raj-491796225/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-gray-900 transition"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:vivekraj12354@gmail.com"
                aria-label="Email"
                className="text-gray-500 hover:text-gray-900 transition"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          {/* Right: Spline 3D scene */}
          <div className="relative h-[360px] sm:h-[420px] md:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 border border-gray-100 shadow-inner">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
