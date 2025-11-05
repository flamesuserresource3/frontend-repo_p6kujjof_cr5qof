import React from 'react';
import { ExternalLink, Cube } from 'lucide-react';

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Projects</h2>
        <p className="text-white/70 mt-2">A highlight of my recent work.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Interactive 3D Hero - sole project as requested */}
        <a
          href="https://prj-kndf5v35-frontend.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[.06] p-5 hover:border-white/25 transition"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-cyan-300">
                <Cube className="h-4 w-4" />
                <span className="text-xs tracking-wider uppercase">Featured</span>
              </div>
              <h3 className="mt-2 text-xl font-semibold">Interactive 3D Hero</h3>
              <p className="mt-2 text-sm text-white/70 max-w-sm">
                A futuristic, interactive 3D hero section built with Spline and React. It features a central cubic structure with iridescent, orbiting spheres.
              </p>
            </div>
            <ExternalLink className="h-5 w-5 text-white/60 group-hover:text-white flex-shrink-0" />
          </div>
          <div className="mt-4 text-xs text-white/60">
            Live Demo · Spline · React · Tailwind CSS
          </div>
        </a>
      </div>
    </div>
  );
}
