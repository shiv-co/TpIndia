import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import career1 from "../assets/images/career1.webp";
import career2 from "../assets/images/service_2.webp";
import career3 from "../assets/images/career3.webp";
import career4 from "../assets/images/career4.jpg";
import kudart from "../assets/crew_img/kudrat.webp";
import WhatsAppButton from "../components/WhatsAppButton";

// NOTE: Replace asset paths below with your actual images in /src/assets/...
const heroBg = "/assets/careers-hero.jpg";
const perksImg = "/assets/perks.jpg";
const officeImg = "/assets/career-office.jpg";

const JOBS = [
  {
    id: "cine-01",
    title: "Cinematographer",
    team: "Production",
    location: "Lucknow, India",
    type: "Part-time",
    salary: "Competitive",
    desc: "Lead camera operations, creative framing and on-set lighting for corporate & film projects.",
    img: career1,
  },
  {
    id: "editor-01",
    title: "Video Editor",
    team: "Post Production",
    location: "On-site / Hybrid",
    type: "Full-time",
    salary: "Depends on experience",
    desc: "Editing short-form and long-form content, color grading and sound sync.",
    img: career2,
  },
  {
    id: "photo-01",
    title: "Photographer",
    team: "Production",
    location: "On-site",
    type: "Part-time",
    salary: "Per project",
    desc: "Product & event photography with an eye for composition and storytelling.",
    img: career3,
  },
  {
    id: "dev-01",
    title: "Social Media Marketer",
    team: "Marketing",
    location: "Remote / Onsite",
    type: "Full-time",
    salary: "Based on experience",
    desc: "Use social media skills to build campaigns and generate leads.",
    img: career4,
  },
  {
    id: "rd-01",
    title: "Front-end Developer",
    team: "Tech",
    location: "Remote",
    type: "Full-time",
    salary: "Based on experience",
    desc: "Build interactive frontends, landing pages and internal tools.",
    img: career2,
  },
];

function JobCard({ job, onApply, i }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: i * 0.06 }}
      viewport={{ once: true }}
      className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-color)] bg-black/60"
    >
      <div className="relative h-56 md:h-48 lg:h-56 overflow-hidden">
        <LazyLoadImage
          src={job.img}
          alt={job.title}
          effect="blur"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* color accent bar */}
        <div className="absolute left-0 top-0 h-full w-2 bg-[var(--accent-color)]/40" />

        {/* Title overlay */}
        <div className="absolute left-4 bottom-4 text-white">
          <h3 className="text-lg font-bold">{job.title}</h3>
          <div className="text-xs text-white/80">
            {job.team} • {job.location}
          </div>
        </div>
      </div>

      <div className="p-5">
        <p className="text-[var(--text-secondary)] text-sm mb-4">{job.desc}</p>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)] text-xs">
              {job.type}
            </span>
            <span className="text-[var(--text-secondary)] text-xs">
              {job.salary}
            </span>
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

export default function CareersAnimated() {
  const [filter, setFilter] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    file: null,
  });

  const teams = ["All", ...Array.from(new Set(JOBS.map((j) => j.team)))];
  const filtered = JOBS.filter((j) => filter === "All" || j.team === filter);

  // FLOATING HERO PARALLAX
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  function openApply(job) {
    setSelected(job);
    setModalOpen(true);
  }

  function submitApplication(e) {
    e.preventDefault();
    // TODO: hook to API
    console.log("apply", selected, form);
    alert("Application sent. (Demo)");
    setModalOpen(false);
    setForm({ name: "", email: "", message: "", file: null });
  }

  return (
    <main className="bg-[var(--bg-color)] text-[var(--text-primary)] min-h-screen">
      {/* HERO */}
     <section
  ref={heroRef}
  className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden"
>
  {/* Background image with slight zoom for cinematic depth */}
  <motion.img
    src={heroBg}
    alt="careers hero"
    className="absolute inset-0 w-full h-full object-cover opacity-80"
    initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 2, ease: "easeOut" }}
    style={{ transform: "translateZ(0)" }}
  />

  {/* Layered gradient overlays for film-like depth */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />
  <div className="pointer-events-none absolute inset-x-1/4 top-0 h-40 bg-[var(--accent-color)]/25 blur-3xl" />

  {/* Floating neon orb (left) */}
  <motion.div
    className="absolute -left-16 top-16 w-64 h-64 rounded-full bg-[var(--accent-color)]/20 blur-3xl"
    animate={{ y: [0, -20, 0], opacity: [0.4, 1, 0.4] }}
    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* Floating neon orb (right) */}
  <motion.div
    className="absolute -right-12 bottom-10 w-56 h-56 rounded-full bg-[var(--accent-color)]/20 blur-3xl"
    animate={{ y: [0, 20, 0], opacity: [0.4, 1, 0.4] }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* CONTENT WITH PARALLAX */}
  <motion.div
    style={{ y: heroY }}
    className="relative max-w-7xl mx-auto h-full flex flex-col items-center justify-center px-6 mt-20 text-center"
  >
    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0.8, y: 0 }}
      transition={{ duration: 0.8 }}
      className="tracking-[0.25em] uppercase text-xs md:text-sm text-[var(--text-secondary)] mb-4"
    >
      TP India Network • Careers
    </motion.p>

    {/* Title */}
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white"
    >
      Build <span className="text-[var(--accent-color)]">Impactful</span>{" "}
      Stories With Us
    </motion.h1>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0.9, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="mt-4 max-w-2xl text-sm md:text-base text-white/70"
    >
      Join our creative team filmmakers, editors, strategists & technologists
      shaping the next generation of storytelling.
    </motion.p>

    {/* Buttons */}
    <div className="mt-6 flex gap-3">
      <Link
        to="/contact"
        className="px-5 py-2 rounded-full bg-[var(--accent-color)] text-white font-semibold shadow hover:scale-105 transition"
      >
        Contact Us
      </Link>
      <a
        href="#openings"
        className="px-5 py-2 rounded-full border border-[var(--border-color)] text-white hover:bg-[var(--accent-color)] hover:text-white transition"
      >
        View Openings
      </a>
    </div>
  </motion.div>
</section>


      {/* LOGO MARQUEE */}

      {/* WHY WORK WITH US */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Creative Freedom",
            desc: "Work on diverse projects with artistic autonomy.",
            icon: "🎬",
          },
          {
            title: "Growth & Learning",
            desc: "Regular workshops & mentorship to help you upskill.",
            icon: "📈",
          },
          {
            title: "Health & Wellness",
            desc: "Flexible hours, mental health support & team retreats.",
            icon: "🧘",
          },
        ].map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className="p-6 rounded-xl bg-black/60 border border-[var(--border-color)] shadow-lg"
          >
            <div className="text-4xl mb-4">{c.icon}</div>
            <h4 className="font-bold text-lg mb-2">{c.title}</h4>
            <p className="text-[var(--text-secondary)]">{c.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* FILTERS + OPENINGS */}
      <section id="openings" className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-extrabold">Open Positions</h2>
          <div className="text-sm text-[var(--text-secondary)]">
            {filtered.length} positions available
          </div>
        </div>

        <div className="flex items-center gap-3 mb-8">
          {teams.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-4 py-2 rounded-full text-sm ${
                filter === t
                  ? "bg-[var(--accent-color)] text-white"
                  : "bg-white/5 text-[var(--text-primary)]"
              }`}
            >
              {t}
            </button>
          ))}

          <div className="ml-auto flex items-center gap-3">
            <input
              type="search"
              placeholder="Search roles..."
              className="px-4 py-2 rounded-full bg-transparent border border-[var(--border-color)] outline-none"
            />
            <button className="px-3 py-2 rounded bg-[var(--accent-color)] text-white">
              Apply Now
            </button>
          </div>
        </div>

        {/* Animated Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((job, i) => (
            <div key={job.id} className="group">
              <JobCard job={job} onApply={openApply} i={i} />

              {/* Animated details bar */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-3 flex items-center justify-between text-sm text-[var(--text-secondary)]"
              >
                <div className="flex items-center gap-4">
                  <div className="px-2 py-1 rounded bg-white/5 text-xs">
                    {job.location}
                  </div>
                  <div className="px-2 py-1 rounded bg-white/5 text-xs">
                    {job.type}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => openApply(job)}
                    className="text-xs px-3 py-1 rounded bg-[var(--accent-color)] text-white"
                  >
                    Apply
                  </button>
                  <Link
                    to={`/careers/${job.id}`}
                    className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-color)]"
                  >
                    Details →
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* PERKS / CULTURE */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <h3 className="text-3xl font-extrabold mb-4">Life at TP India</h3>
            <p className="text-[var(--text-secondary)] mb-6">
              We foster curiosity, celebrate craft and invest in people. From
              paid training to team retreats and flexible hours — we build
              careers, not just jobs.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="p-4 bg-black/60 border border-[var(--border-color)] rounded-md">
                Paid Training & Workshops
              </li>
              <li className="p-4 bg-black/60 border border-[var(--border-color)] rounded-md">
                Health & Wellness Support
              </li>
              <li className="p-4 bg-black/60 border border-[var(--border-color)] rounded-md">
                Flexible Schedules
              </li>
              <li className="p-4 bg-black/60 border border-[var(--border-color)] rounded-md">
                Project-based Bonuses
              </li>
            </ul>

            <div className="mt-6 flex gap-4">
              <Link
                to="/apply"
                className="px-5 py-2 bg-[var(--accent-color)] rounded-full text-white"
              >
                Join Our Team
              </Link>
              <Link
                to="/about"
                className="px-5 py-2 border border-[var(--border-color)] rounded-full"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-lg">
            <LazyLoadImage
              src={perksImg}
              effect="blur"
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* DIRECTOR QUOTE + VIDEO */}
      

      <section className="max-w-7xl mx-auto px-6 py-20">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="grid md:grid-cols-2 gap-12 items-center"
  >
    {/* LEFT — DIRECTOR CARD */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-sm mx-auto"
    >
      <div className="rounded-3xl overflow-hidden shadow-2xl border border-[var(--border-color)] bg-black/20 backdrop-blur-sm">
        <LazyLoadImage 
          src={kudart}
          effect="blur"
          className="w-full h-[420px] object-cover"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

        {/* Name Tag */}
        <div className="absolute bottom-4 left-4 bg-black/50 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
          <p className="text-white font-semibold tracking-wide">
            Syed Kudrat Ali
          </p>
          <p className="text-white/70 text-xs -mt-1">
            Director • CEO • Creative Producer
          </p>
        </div>
      </div>
    </motion.div>

    {/* RIGHT — TEXT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="space-y-6"
    >
      <h3 className="text-3xl md:text-4xl font-bold leading-snug">
        A Word From Our Director
      </h3>

      <p className="text-[var(--text-secondary)] text-lg italic leading-relaxed border-l-4 border-[var(--accent-color)] pl-4">
        “We hire for curiosity, character and craft.  
        If you love storytelling, innovation, and working with a collaborative team —  
        you'll find a home with us.”
      </p>

      <p className="text-[var(--text-secondary)] font-medium">
        — <span className="text-[var(--accent-color)] font-semibold">Syed Kudrat Ali</span>, Founder & Director
      </p>

      <Link
        to="/contact"
        className="inline-block px-6 py-3 rounded-full bg-[var(--accent-color)] text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition"
      >
        Talk to Us
      </Link>
    </motion.div>
  </motion.div>
</section>


      {/* APPLY MODAL */}
      {modalOpen && selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setModalOpen(false)}
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white dark:bg-black/95 rounded-xl p-6 max-w-xl w-full shadow-2xl border border-[var(--border-color)]"
          >
            <h3 className="text-xl font-bold mb-2">
              Apply for {selected.title}
            </h3>
            <p className="text-[var(--text-secondary)] mb-4">
              Tell us about yourself and attach your CV.
            </p>

            <form onSubmit={submitApplication} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Full name</label>
                <input
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  className="w-full px-3 py-2 rounded border border-[var(--border-color)] bg-transparent outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  className="w-full px-3 py-2 rounded border border-[var(--border-color)] bg-transparent outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  className="w-full px-3 py-2 rounded border border-[var(--border-color)] bg-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Attach CV</label>
                <input
                  type="file"
                  onChange={(e) =>
                    setForm((f) => ({ ...f, file: e.target.files[0] }))
                  }
                  className="w-full"
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-[var(--accent-color)] text-white"
                >
                  Submit Application
                </button>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded border"
                >
                  Cancel
                </button>
              </div>
            </form>

            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-3 text-[var(--text-secondary)]"
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}

      <div className="h-28" />
      <WhatsAppButton />
    </main>
  );
}
