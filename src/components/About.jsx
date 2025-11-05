import { GraduationCap, User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">About Me</h2>
          <p className="mt-4 text-gray-600 text-lg">
            I'm Vivek Raj, a B.Tech student passionate about building intuitive products
            and crafting delightful digital experiences. I enjoy learning new technologies,
            exploring 3D on the web, and contributing to projects that make an impact.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition bg-gradient-to-br from-gray-50 to-white">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-100 p-2 text-blue-700">
                <User className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900">Who I Am</h3>
            </div>
            <p className="mt-3 text-gray-600">
              A curious learner who believes in clean code, thoughtful design, and
              consistent improvement. When I'm not coding, I enjoy reading about
              tech trends and sketching interface ideas.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition bg-gradient-to-br from-gray-50 to-white">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-purple-100 p-2 text-purple-700">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900">Education</h3>
            </div>
            <p className="mt-3 text-gray-600">
              Bachelor of Technology (B.Tech). Focused on fundamentals, algorithms,
              and modern web technologies including React, Node, and cloud services.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h4 className="text-lg font-semibold text-gray-900">Skills</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {['JavaScript', 'React', 'Node.js', 'Tailwind', 'MongoDB', 'REST APIs', 'Git'].map((skill) => (
              <span key={skill} className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
