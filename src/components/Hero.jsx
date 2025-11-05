import React from 'react';
import Spline from '@splinetool/react-spline';
import { Mail, Github, Linkedin, BadgeCheck } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[90vh] sm:h-[88vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Non-blocking gradient accents */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
      <div className="pointer-events-none absolute -inset-x-10 -top-40 h-72 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/20 via-purple-500/10 to-transparent blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs sm:text-sm">
            <BadgeCheck className="h-4 w-4 text-cyan-300" />
            <span className="font-medium tracking-tight">B.Tech CSE (AI)</span>
          </div>

          <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
            Building interactive experiences at the intersection of AI and the web
          </h1>

          <p className="mt-4 sm:mt-6 text-white/80 max-w-xl">
            I’m Vivek Raj, a Computer Science student specializing in Artificial Intelligence. I love crafting responsive UIs, working with 3D on the web, and integrating smart features with modern frameworks.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
            <a
              href="mailto:vivekraj12354@gmail.com"
              className="inline-flex items-center gap-2 rounded-md bg-cyan-500/90 hover:bg-cyan-400 text-black font-medium px-4 py-2 transition"
            >
              <Mail className="h-4 w-4" /> Email Me
            </a>
            <a
              href="https://github.com/vk12354"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 hover:border-white/30 px-4 py-2 transition"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vivek-raj-491796225/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 hover:border-white/30 px-4 py-2 transition"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
