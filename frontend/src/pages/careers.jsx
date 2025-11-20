import React, { useState } from "react";
import { motion } from "framer-motion";

// Careers.jsx - Card Grid Style (Option B)
// Uses your theme variables, Tailwind, and Framer Motion
// Images are placeholders in /assets/*. Replace with real assets

const JOBS = [
  {
    id: "cine-01",
    title: "Cinematographer",
    team: "Production",
    location: "Lucknow, India",
    type: "Full-time",
    salary: "Competitive",
    desc: "Lead camera operations, creative framing and on-set lighting for corporate & film projects.",
    img: "/assets/career-cine.jpg",
  },
  {
    id: "editor-01",
    title: "Video Editor",
    team: "Post Production",
    location: "Remote / Hybrid",
    type: "Contract",
    salary: "Depends on experience",
    desc: "Editing short-form and long-form content, color grading and sound sync.",
    img: "/assets/career-editor.jpg",
  },
  {
    id: "photo-01",
    title: "Photographer",
    team: "Production",
    location: "On-site",
    type: "Part-time",
    salary: "Per project",
    desc: "Product & event photography with an eye for composition and storytelling.",
    img: "/assets/career-photo.jpg",
  },
  {
    id: "dev-01",
    title: "Social Media Marketing ",
    team: "Marketing",
    location: "Remote/Onsite",
    type: "Full-time",
    salary: "Based on experience",
    desc: "Use Social Media Markenting skills to generate leads.",
    img: "/assets/career-dev.jpg",
  },
];

function JobCard({ job, onApply, i }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.08 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-black/90 rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-color)] group"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <img
          loading="lazy"
          src={job.img}
          alt={job.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute left-4 bottom-4">
          <h3 className="text-white text-xl font-bold">{job.title}</h3>
          <div className="text-sm text-white/80">{job.team} • {job.location}</div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-[var(--text-secondary)] mb-4">{job.desc}</p>

        <div className="flex items-center justify-between gap-4">
          <div className="flex gap-3 items-center text-sm">
            <span className="px-3 py-1 rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)]">{job.type}</span>
            <span className="text-[var(--text-secondary)]">{job.salary}</span>
          </div>

          <button
            onClick={() => onApply(job)}
            className="px-4 py-2 rounded-lg bg-[var(--accent-color)] text-white font-medium hover:scale-105 transition-transform"
          >
            Apply
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default function Careers() {
  const [filter, setFilter] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const teams = ["All", ...Array.from(new Set(JOBS.map((j) => j.team)))];

  const filtered = JOBS.filter((j) => filter === "All" || j.team === filter);

  function openApply(job) {
    setSelected(job);
    setModalOpen(true);
  }

  function submitApplication(e) {
    e.preventDefault();
    // In real app: send to API
    console.log("Apply", selected?.id, form);
    alert("Application submitted — this is a demo. Implement backend to receive applications.");
    setModalOpen(false);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <main className="bg-[var(--bg-color)] text-[var(--text-primary)] min-h-screen">
      {/* HERO */}
      <section className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <img loading="lazy" src="/assets/careers-hero.jpg" className="absolute inset-0 w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center text-white">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-3xl md:text-5xl font-extrabold">Careers at TP India Network</motion.h1>
          <p className="mt-4 text-sm md:text-base text-white/80 max-w-2xl mx-auto">Join our creative team — filmmakers, editors, developers, and storytellers who love making great work.</p>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-8">
        {[
          { title: "Creative Freedom", desc: "Work on diverse projects with artistic autonomy.", icon: "🎬" },
          { title: "Growth", desc: "Upskill with internal workshops and mentorship.", icon: "📈" },
          { title: "Flexible Hours", desc: "We believe in output, not desk time.", icon: "⏰" },
        ].map((c, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: i * 0.12 }} className="p-6 rounded-xl bg-white dark:bg-black/90 border border-[var(--border-color)] shadow-lg">
            <div className="text-4xl mb-4">{c.icon}</div>
            <h4 className="font-bold text-lg mb-2">{c.title}</h4>
            <p className="text-[var(--text-secondary)]">{c.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* FILTERS */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-3">
            {teams.map((t) => (
              <button key={t} onClick={() => setFilter(t)} className={`px-4 py-2 rounded-full text-sm ${filter === t ? "bg-[var(--accent-color)] text-white" : "bg-white/5 text-[var(--text-primary)]"}`}>
                {t}
              </button>
            ))}
          </div>

          <div className="text-sm text-[var(--text-secondary)]">{filtered.length} positions open</div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((job, i) => (
            <JobCard key={job.id} job={job} onApply={openApply} i={i} />
          ))}
        </div>
      </section>

      {/* APPLY MODAL */}
      {modalOpen && selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => setModalOpen(false)} />

          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25 }} className="relative bg-white dark:bg-black/95 rounded-xl p-6 max-w-lg w-full shadow-2xl border border-[var(--border-color)]">
            <h3 className="text-xl font-bold mb-2">Apply for {selected.title}</h3>
            <p className="text-[var(--text-secondary)] mb-4">Tell us a little about yourself and attach your CV (optional).</p>

            <form onSubmit={submitApplication} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Full name</label>
                <input value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} className="w-full px-3 py-2 rounded border border-[var(--border-color)] bg-transparent outline-none" required />
              </div>

              <div>
                <label className="block text-sm mb-1">Email</label>
                <input type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} className="w-full px-3 py-2 rounded border border-[var(--border-color)] bg-transparent outline-none" required />
              </div>

              <div>
                <label className="block text-sm mb-1">Message</label>
                <textarea rows={4} value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} className="w-full px-3 py-2 rounded border border-[var(--border-color)] bg-transparent outline-none" />
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="text-sm text-[var(--text-secondary)]">Attach CV (optional)</div>
                <div className="flex gap-2">
                  <button type="button" className="px-4 py-2 rounded border border-[var(--border-color)]">Upload</button>
                  <button type="submit" className="px-4 py-2 rounded bg-[var(--accent-color)] text-white">Submit Application</button>
                </div>
              </div>
            </form>

            <button onClick={() => setModalOpen(false)} className="absolute top-3 right-3 text-[var(--text-secondary)]">✕</button>
          </motion.div>
        </div>
      )}

      <div className="h-24" />
    </main>
  );
}
