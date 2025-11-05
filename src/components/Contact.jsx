import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Get in touch</h2>
        <p className="text-white/70 mt-2">
          I’m open to collaborations, internships, and interesting projects.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
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
  );
}
