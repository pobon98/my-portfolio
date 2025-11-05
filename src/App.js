// src/App.js
import React, { useEffect, useState, useRef } from "react";
import "./index.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon } from "react-icons/fa";

import ParticleBackground from "./components/ParticleBackground";
import Typewriter from "./components/Typewriter";

export default function App() {
  const projects = [
    {
      id: 1,
      title: "Blood Donation App",
      descShort: "Community-driven app to register donors & schedule drives.",
      desc:
        "Built with React, Firebase, and Google Maps API. Includes donor profiles, location-based searches, and appointment scheduling.",
      tech: ["React", "Firebase", "Google Maps"],
      link: "#",
    },
    {
      id: 2,
      title: "Employee Leave Management System",
      descShort: "Enterprise ASP.NET/C# system for leave workflows.",
      desc:
        "Developed with ASP.NET, C#, and MS SQL to handle employee leave tracking, approvals, and reports.",
      tech: ["C#", "ASP.NET", "MS SQL"],
      link: "#",
    },
  ];

  const skills = [
    { name: "React", value: 90 },
    { name: "C#", value: 80 },
    { name: "SQL", value: 75 },
    { name: "HTML/CSS", value: 85 },
  ];

  // States
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem("prefers-dark");
      if (saved !== null) return saved === "true";
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return false;
    }
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  // model-viewer state
  const [modelLoaded, setModelLoaded] = useState(false);
  const modelRef = useRef(null);

  // Persist dark mode to <html> class and localStorage
  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    try {
      localStorage.setItem("prefers-dark", dark ? "true" : "false");
    } catch {}
  }, [dark]);

  // attach load listener to model-viewer (custom element)
  useEffect(() => {
    const el = modelRef.current;
    if (!el) return;
    const onLoad = () => setModelLoaded(true);
    // model-viewer fires a "load" or "poster-visibility" events — 'load' works for many builds
    el.addEventListener("load", onLoad);
    // as a fallback, also listen to 'progress' and 'poster-visibility'
    el.addEventListener("poster-visibility", onLoad);
    return () => {
      el.removeEventListener("load", onLoad);
      el.removeEventListener("poster-visibility", onLoad);
    };
  }, [modelRef]);

  // Motion variants
  const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

  // Contact form handler (mailto fallback)
  const handleContactSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value || "No name";
    const email = e.target.email.value || "No email";
    const message = e.target.message.value || "No message";

    const subject = encodeURIComponent("Contact from portfolio");
    const body = encodeURIComponent(`Name: ${name}\n\n${message}\n\nReply to: ${email}`);

    window.location.href = `mailto:pobandas33@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 antialiased relative overflow-hidden">
      {/* Put particles as a background layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <ParticleBackground />
      </div>

      {/* Header */}
      <header className="relative z-10 max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-600 to-pink-500 flex items-center justify-center text-white font-bold">
            PD
          </div>
          <div>
            <div className="text-lg font-semibold">Poban Das</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Developer</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700 dark:text-gray-300">
            <a href="#about" className="hover:text-indigo-500">About</a>
            <a href="#projects" className="hover:text-indigo-500">Projects</a>
            <a href="#skills" className="hover:text-indigo-500">Skills</a>
            <a href="#contact" className="hover:text-indigo-500">Contact</a>
          </nav>

          <div className="flex items-center gap-3 text-lg">
            <a href="https://github.com/pobon98" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/YOUR_LINKEDIN_PROFILE" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
              <FaLinkedin />
            </a>

            <button
              onClick={() => setDark((d) => !d)}
              className="p-2 rounded-md bg-gray-200 dark:bg-gray-800"
              title="Toggle dark mode"
            >
              {dark ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        {/* HERO */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6 relative z-10">
            {/* Hero with particles + typewriter */}
            <div className="relative w-full">
              <motion.h1 initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl md:text-5xl font-extrabold leading-tight relative z-10">
                Hi — I'm <span className="text-indigo-600 dark:text-indigo-400">Poban Das</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 text-gray-700 dark:text-gray-300 max-w-xl relative z-10">
                SD is a passionate and detail-oriented developer who loves clean code, delightful UX and continuous learning.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-4 relative z-10 flex items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">I build</span>
                <Typewriter words={["web apps.", "user-friendly tools.", "scalable backends.", "creative UIs."]} speed={80} pause={1200} />
                <span className="blink ml-1">|</span>
              </motion.div>
            </div>

            {/* buttons */}
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:opacity-90 transition">View Projects</a>
              <a href="/resume.pdf" download className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-100 transition">Resume</a>
            </motion.div>

            {/* social */} 
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="flex items-center gap-5 text-gray-600 dark:text-gray-400 mt-3 text-xl">
              <a href="mailto:pobandas33@gmail.com" className="hover:text-indigo-500"><FaEnvelope /></a>
              <a href="https://github.com/pobon98" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/YOUR_LINKEDIN_PROFILE" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500"><FaLinkedin /></a>
            </motion.div>
          </motion.div>

          {/* ---------- AR / model-viewer block (replaces photo) ---------- */}
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45 }} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow relative z-10">
            <div className="w-full h-64 rounded-lg bg-gray-100 dark:bg-gray-800 overflow-hidden flex items-center justify-center relative">
              {/* model-viewer: place public/ar-model.glb or change src to an external .glb URL */}
              <model-viewer
                ref={modelRef}
                src="/ar-model.glb"
                ios-src=""
                alt="3D AR model"
                ar
                ar-modes="webxr scene-viewer quick-look"
                camera-controls
                auto-rotate
                style={{ width: "100%", height: "100%", display: modelLoaded ? "block" : "none" }}
              />
              {/* fallback SVG (shows until model loads or if model not present) */}
              {!modelLoaded && (
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" className="w-40 h-40">
                    <defs>
                      <linearGradient id="g1" x1="0" x2="1">
                        <stop offset="0" stopColor="#6366F1" />
                        <stop offset="1" stopColor="#EC4899" />
                      </linearGradient>
                    </defs>
                    <rect width="120" height="120" rx="18" fill="url(#g1)" opacity="0.12" />
                    <g transform="translate(20,20)" fill="none" stroke="#6B7280" strokeWidth="2">
                      <rect x="0" y="0" width="80" height="60" rx="6" opacity="0.14" />
                      <path d="M4 44 L20 28 L40 48 L60 20 L76 36" stroke="#4F46E5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </g>
                    <text x="60" y="105" fontSize="10" textAnchor="middle" fill="#374151">AR Preview</text>
                  </svg>
                </div>
              )}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg text-sm">
                <div className="text-xs text-gray-500 dark:text-gray-400">Location</div>
                <div className="font-medium">India</div>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg text-sm">
                <div className="text-xs text-gray-500 dark:text-gray-400">Role</div>
                <div className="font-medium">Developer</div>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg text-sm">
                <div className="text-xs text-gray-500 dark:text-gray-400">Experience</div>
                <div className="font-medium">Internships & Projects</div>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg text-sm">
                <div className="text-xs text-gray-500 dark:text-gray-400">Education</div>
                <div className="font-medium">B.Tech</div>
              </div>
            </div>
          </motion.div>

        </section>

        {/* ABOUT */}
        <section id="about" className="py-8">
          <h2 className="text-2xl font-bold">About</h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300 max-w-3xl">
            I enjoy turning problems into elegant, user-friendly solutions. I focus on building reliable, maintainable software and learning new technologies every day.
          </p>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-8">
          <h2 className="text-2xl font-bold mb-4">Selected Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <motion.article
                key={p.id}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow cursor-pointer"
                onClick={() => { setActiveProject(p); setModalOpen(true); }}
              >
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{p.descShort}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-500 dark:text-gray-400">
                  {p.tech.map((t) => <span key={t} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">{t}</span>)}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-8">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between mb-1">
                  <div className="text-sm font-medium">{s.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{s.value}%</div>
                </div>
                <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded" style={{ width: `${s.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-8">
          <h2 className="text-2xl font-bold">Contact</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
              <p className="text-gray-700 dark:text-gray-300">Feel free to reach out for collaborations or opportunities.</p>
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                <div><strong>Email:</strong> <a href="mailto:pobandas33@gmail.com" className="text-indigo-500">pobandas33@gmail.com</a></div>
                <div className="mt-2"><strong>Location:</strong> India</div>
              </div>
            </div>

            <form onSubmit={handleContactSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow space-y-3">
              <input name="name" className="w-full p-3 border rounded-lg bg-transparent border-gray-200 dark:border-gray-700" placeholder="Your name" />
              <input name="email" className="w-full p-3 border rounded-lg bg-transparent border-gray-200 dark:border-gray-700" placeholder="Your email" />
              <textarea name="message" className="w-full p-3 border rounded-lg bg-transparent border-gray-200 dark:border-gray-700" rows={4} placeholder="How can I help?" />
              <div className="flex gap-2">
                <button type="submit" className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg">Send message</button>
                <a href="/resume.pdf" download className="inline-flex items-center px-4 py-2 border rounded-lg">Resume</a>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Project modal */}
      <AnimatePresence>
        {modalOpen && activeProject && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 modal-backdrop" onClick={() => setModalOpen(false)} />
            <motion.div initial={{ scale: 0.95, y: 8 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 8 }} className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-3xl w-full mx-4 p-6 z-20">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{activeProject.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{activeProject.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {activeProject.tech.map((t) => <span key={t} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">{t}</span>)}
                  </div>
                </div>
                <div>
                  <button onClick={() => setModalOpen(false)} className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">Close</button>
                </div>
              </div>
              <div className="mt-4">
                <a href={activeProject.link} className="text-indigo-500">Open project</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
