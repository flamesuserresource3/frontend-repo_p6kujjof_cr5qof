import { GraduationCap, User, Award, ExternalLink } from 'lucide-react';

export default function About() {
  const skills = [
    'Google Colab',
    'LangChain',
    'Git',
    'GitHub',
    'JavaScript',
    'React',
    'Tailwind',
    'REST APIs',
  ];

  const certifications = [
    {
      name: 'Oracle Certification',
      url:
        'https://catalog-education.oracle.com/ords/certview/sharebadge?id=41619B5DEAD027A88DDA4B62A4F7F396C1FAED5655BCBE001F5FF8897482BE89',
    },
    {
      name: 'AI Workshop Certification',
      url:
        'https://www.ccbp.in/ai-workshop-certificate?com=AJYUF23NKM?utm_source=whatsapp&utm_campaign=4.0-tribe-academy-ai-workshop-certificate&utm_medium=message',
    },
    {
      name: 'AWS Job Simulation Certification',
      url:
        'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_hpmSzTF9ZekduDLeC_1754127387810_completion_certificate.pdf',
    },
  ];

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
              B.Tech in Computer Science & Engineering (AI). Focused on fundamentals,
              algorithms, and modern development practices across frontend, backend,
              and cloud.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h4 className="text-lg font-semibold text-gray-900">Certifications</h4>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((c) => (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-green-100 text-green-700">
                    <Award className="h-5 w-5" />
                  </span>
                  <span className="font-medium text-gray-900 group-hover:text-blue-700">
                    {c.name}
                  </span>
                </div>
                <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-700" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h4 className="text-lg font-semibold text-gray-900">Skills</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
