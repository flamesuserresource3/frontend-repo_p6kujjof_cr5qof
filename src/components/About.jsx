import React from 'react';
import { Award, ExternalLink, GraduationCap, Sparkles } from 'lucide-react';

const certifications = [
  {
    title: 'Oracle Certification',
    href:
      'https://catalog-education.oracle.com/ords/certview/sharebadge?id=41619B5DEAD027A88DDA4B62A4F7F396C1FAED5655BCBE001F5FF8897482BE89',
  },
  {
    title: 'AI Workshop Certification',
    href:
      'https://www.ccbp.in/ai-workshop-certificate?com=AJYUF23NKM?utm_source=whatsapp&utm_campaign=4.0-tribe-academy-ai-workshop-certificate&utm_medium=message',
  },
  {
    title: 'AWS Job Simulation (Forage)',
    href:
      'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_hpmSzTF9ZekduDLeC_1754127387810_completion_certificate.pdf',
  },
];

const skills = [
  'Google Colab',
  'LangChain',
  'Git',
  'GitHub',
  'JavaScript',
  'React',
  'Tailwind CSS',
  'REST APIs',
];

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-cyan-300">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm tracking-wider uppercase">Who I Am</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">About Me</h2>
          <p className="text-white/80 leading-relaxed">
            I’m a B.Tech student in Computer Science & Engineering (AI), passionate about building clean, fast, accessible web apps. I enjoy blending delightful front-end experiences with practical, AI-driven features.
          </p>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-2 text-cyan-300 mb-2">
              <GraduationCap className="h-5 w-5" />
              <h3 className="font-semibold">Education</h3>
            </div>
            <p className="text-white/90 font-medium">B.Tech in Computer Science & Engineering (AI)</p>
            <p className="text-white/60 text-sm">Focused on AI, web development, and modern software practices</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 text-cyan-300 mb-3">
              <Award className="h-5 w-5" />
              <h3 className="font-semibold">Certifications</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {certifications.map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:border-white/25 transition"
                >
                  <span className="text-sm font-medium">{c.title}</span>
                  <ExternalLink className="h-4 w-4 text-white/60 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-cyan-300 mb-3">
              <Sparkles className="h-5 w-5" />
              <h3 className="font-semibold">Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/90"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
