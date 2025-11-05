import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="rounded-3xl border border-gray-100 bg-gradient-to-br from-blue-50 via-white to-purple-50 p-8 sm:p-12 shadow-sm">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Let’s connect</h2>
            <p className="mt-3 text-gray-600">
              Have an idea, collaboration, or opportunity? I’d love to hear from you.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white font-medium shadow hover:bg-blue-700 transition"
              >
                <Mail className="h-5 w-5" /> Email Me
              </a>
              <a
                href="https://github.com/vk12354"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-50 transition"
              >
                <Github className="h-5 w-5" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/vivek-raj-491796225/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-50 transition"
              >
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Vivek Raj. All rights reserved.
        </p>
      </div>
    </section>
  );
}
