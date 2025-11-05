import { Code, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Hero',
    description:
      'A playful landing hero that blends Spline 3D with a clean, responsive layout.',
    tech: ['React', 'Spline', 'Tailwind'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Task Tracker',
    description:
      'A simple, fast task manager with filters, clean UI, and keyboard shortcuts.',
    tech: ['React', 'Context API', 'LocalStorage'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Dev Portfolio',
    description:
      'A portfolio template focused on performance, accessibility, and clarity.',
    tech: ['Vite', 'Tailwind', 'Framer Motion'],
    demo: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Projects</h2>
            <p className="mt-2 text-gray-600">Some things I’ve built and explored recently.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-gray-500">
            <Code className="h-5 w-5" />
            <span className="text-sm">Clean. Minimal. Functional.</span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg transition">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              </div>
              <p className="mt-2 text-gray-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href={p.demo}
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Live Demo <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href={p.repo}
                  className="inline-flex items-center gap-1 text-gray-700 hover:text-gray-900 text-sm font-medium"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
