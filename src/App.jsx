
import React from "react";

export default function App() {
  const projects = [
    {
      title: "Blood Donation App",
      desc: "A community-driven app to register donors, search nearby donation drives, and schedule appointments.",
      tech: ["React", "Firebase", "Google Maps"],
      link: "#",
    },
    {
      title: "Employee Leave Management System",
      desc: "An enterprise-style ASP.NET/C# system with MS SQL for managing employee leave requests, approvals and reports.",
      tech: ["C#", "ASP.NET", "MS SQL"],
      link: "#",
    },
  ];

  const skills = ["React", "C#", "SQL", "HTML", "CSS", "Git"];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      {/* Header */}
      <header className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-600 to-pink-500 flex items-center justify-center text-white font-bold">PD</div>
          <div>
            <div className="text-lg font-semibold">Poban Das</div>
            <div className="text-xs text-gray-500">Developer</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#projects" className="hover:text-gray-900">Projects</a>
          <a href="#skills" className="hover:text-gray-900">Skills</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>

        <div className="md:hidden">
          <button className="p-2 rounded-md bg-white shadow">Menu</button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-12">
        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Hi — I'm <span className="text-indigo-600">Poban Das</span>
            </h1>
            <p className="mt-4 text-gray-700 max-w-xl">
              SD is a passionate and detail-oriented professional with a strong interest in technology,
              creativity, and continuous learning. Dedicated to delivering quality work and exploring
              innovative solutions.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow">View Projects</a>
              <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg">Contact</a>
            </div>

            <div className="mt-6 text-sm text-gray-600 space-y-2">
              <div><strong>Email:</strong> <a className="text-indigo-600" href="mailto:pobandas33@gmail.com">pobandas33@gmail.com</a></div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="w-full h-64 rounded-lg bg-gradient-to-br from-gray-100 to-white flex items-center justify-center text-gray-400">
              Your Photo
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="p-3 bg-gray-50 rounded-lg text-sm">
                <div className="text-xs text-gray-500">Location</div>
                <div className="font-medium">India</div>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg text-sm">
                <div className="text-xs text-gray-500">Role</div>
                <div className="font-medium">Developer</div>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg text-sm">
                <div className="text-xs text-gray-500">Experience</div>
                <div className="font-medium">Internship & Projects</div>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg text-sm">
                <div className="text-xs text-gray-500">Education</div>
                <div className="font-medium">B.Tech (Your Branch)</div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-8">
          <h2 className="text-2xl font-bold">About</h2>
          <p className="mt-3 text-gray-700 max-w-3xl">
            I enjoy turning problems into elegant, user-friendly solutions. I focus on building reliable, maintainable software and learning new technologies every day.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="py-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Selected Projects</h2>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <article key={p.title} className="bg-white p-5 rounded-2xl shadow">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-500">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2 py-1 bg-gray-100 rounded-full">{t}</span>
                  ))}
                </div>
                <div className="mt-4">
                  <a href={p.link} className="text-indigo-600 text-sm">View →</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-8">
          <h2 className="text-2xl font-bold">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {skills.map((s) => (
              <div key={s} className="px-3 py-2 bg-white rounded-lg shadow-sm text-sm">{s}</div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-8">
          <h2 className="text-2xl font-bold">Contact</h2>
          <div className="mt-4 bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-700">Feel free to reach out for collaborations or opportunities.</p>
            <div className="mt-4 text-sm text-gray-600">
              <div><strong>Email:</strong> <a href="mailto:pobandas33@gmail.com" className="text-indigo-600">pobandas33@gmail.com</a></div>
            </div>
          </div>
        </section>

        <footer className="py-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Poban Das — Built with React & Tailwind
        </footer>
      </main>
    </div>
  );
}

