import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMeta } from "../hooks/useMeta";

// Images — replace with your real assets
import heroImg from "../assets/images/web.webp";
import showcase1 from "../assets/images/gallery11.webp";
import showcase2 from "../assets/images/gallery13.webp";
import showcase3 from "../assets/images/tp.webp";
import showcase4 from "../assets/images/gallery12.webp";

import client1 from "../assets/images/gallery5.webp";
import client2 from "../assets/images/gallery6.webp";
import client3 from "../assets/images/gallery7.webp";

// import heroImg from "../assets/website-dev-hero.webp";
// import showcase1 from "../assets/web-1.webp";
// import showcase2 from "../assets/web-2.webp";
// import showcase3 from "../assets/web-3.webp";
// import client1 from "../assets/client-1.webp";
// import client2 from "../assets/client-2.webp";
// import client3 from "../assets/client-3.webp";

export default function WebsiteDevLanding() {
  // SEO meta
  useMeta({
    title:
      "Website Development — TP India Network | Fast, Cinematic, High-converting",
    description:
      "We design and build cinematic, high-converting websites — fast. Full-stack dev, performance optimization, SEO, and design that looks like film.",
    keywords:
      "website development, web design, ux/ui, high converting websites, tp india network, landing page, react development",
    image: "https://tpindia.in/assets/website-dev-hero.webp",
    url: "https://tpindia.in/website-development",
  });

  const features = [
    {
      title: "Cinematic UI & UX",
      desc: "Design that feels like a film: immersive, branded, and memorable.",
      tag: "Design",
    },
    {
      title: "Blazing Performance",
      desc: "Optimized bundles, lazy loading, and Core Web Vitals focused.",
      tag: "Performance",
    },
    {
      title: "SEO & CRO Ready",
      desc: "Built-in SEO metadata, fast structure and conversion-first UX.",
      tag: "Growth",
    },
    {
      title: "CMS & Maintainability",
      desc: "Headless CMS or custom admin — content-first workflows.",
      tag: "Content",
    },
  ];

  const showcaseProjects = [
    {
      id: 1,
      title: "Tehzeeb Creations | Brand Website",
      category: "Luxury Fashion • Website Design & Development",
      image: showcase4,
      link: "https://www.tehzeebcreations.in/",
    },
    {
      id: 2,
      title: "TP India Network | Digital Presence",
      category: "Film Studio • Branding, Website & Visual Identity",
      image: showcase3,
      link: "https://www.tpindia.in/",
    },
    {
      id: 3,
      title: "Dhasu Talks — Podcast | Content Platform",
      category: "Media Platform • UI/UX & Frontend Engineering",
      image: showcase1,
      link: "https://dhasutalks.com/",
    },
    {
      id: 4,
      title: "Ummeed Welfare Organisation",
      category: "NGO • Awareness Website & Social Impact Design",
      image: showcase2,
      link: "https://ummeedwelfare.org.in/",
    },
  ];

  return (
    <main className="bg-[var(--bg-color)] text-[var(--text-primary)]">
      {/* HERO */}
      <section className="relative h-[80vh] md:h-[85vh] overflow-hidden flex items-center">
        <motion.img
          src={heroImg}
          alt="Cinematic website development hero"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          loading="lazy"
        />

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />

        {/* neon orbs */}
        <motion.div
          className="absolute -left-24 top-16 w-72 h-72 rounded-full bg-[var(--accent-color)]/20 blur-3xl"
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          aria-hidden
        />
        <motion.div
          className="absolute -right-24 bottom-12 w-56 h-56 rounded-full bg-[var(--accent-color)]/18 blur-3xl"
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 9, repeat: Infinity }}
          aria-hidden
        />

        {/* content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.8 }}
            className="tracking-widest uppercase text-xs md:text-sm text-[var(--text-secondary)] mb-4"
          >
            TP India Network • Website Development
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
          >
            We build{" "}
            <span className="text-[var(--accent-color)]">
              cinematic websites
            </span>{" "}
            that convert visitors into customers.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 0.95, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="mt-6 max-w-2xl mx-auto text-white/80"
          >
            Full-stack websites performance-first, SEO-friendly and designed
            like films. Launch fast, scale easily.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/get-quote?service=website"
              className="px-6 py-3 rounded-full bg-[var(--accent-color)] text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Get a Free Quote
            </Link>

            {/* <a
              href="#"
              className="px-6 py-3 rounded-full border border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--accent-color)] hover:text-white transition"
            >
              See our work
            </a> */}
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-10 flex items-center justify-center gap-6 flex-wrap text-sm text-[var(--text-secondary)]"
          >
            <div className="flex items-center gap-3">
              <img
                src={client1}
                alt="client"
                className="h-8 w-auto grayscale"
                loading="lazy"
              />
            </div>
            <div className="flex items-center gap-3">
              <img
                src={client2}
                alt="client"
                className="h-8 w-auto grayscale"
                loading="lazy"
              />
            </div>
            <div className="flex items-center gap-3">
              <img
                src={client3}
                alt="client"
                className="h-8 w-auto grayscale"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-2xl md:text-3xl font-bold mb-6"
        >
          What you get
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center text-[var(--text-secondary)] max-w-3xl mx-auto mb-10"
        >
          A full end-to-end website process strategy, design, development,
          optimization and deployment.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="p-6 rounded-xl border border-[var(--border-color)] bg-black/5 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {f.desc}
                  </p>
                </div>
                <div className="text-xs px-2 py-1 rounded-md bg-white/5 text-[var(--accent-color)] font-bold">
                  {f.tag}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SHOWCASE / PORTFOLIO */}

      <section id="showcase" className="max-w-7xl mx-auto px-6 py-20">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-2xl md:text-4xl font-bold mb-12"
        >
          Recent Projects
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {showcaseProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              whileHover={{ scale: 1.03 }}
              className="
              group relative rounded-2xl overflow-hidden cursor-pointer
              border border-[var(--border-color)]
              bg-[var(--card-bg,rgba(0,0,0,0.25))]
              backdrop-blur-xl shadow-2xl
            "
            >
              {/* IMAGE */}
              <div className="relative h-54 w-full overflow-hidden">
                <Link to={project.link} target="_blank">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
               

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Accent glow */}
                <div
                  className="
                absolute inset-0 opacity-0 group-hover:opacity-30
                bg-[var(--accent-color)] blur-3xl transition duration-500
              "
                />
                 </Link>
              </div>

              {/* CONTENT */}
              <div className="p-8 relative z-10">
                <p className="text-xs uppercase tracking-wider text-[var(--accent-color)] mb-2">
                  {project.category}
                </p>

                <h3 className="text-sm md:text-lg font-bold text-[var(--text-primary)] mb-4">
                  {project.title}
                </h3>

                <Link
                  to={project.link}
                  target="_blank"
                  className="
                  inline-flex items-center gap-2 font-semibold
                  text-[var(--accent-color)]
                  group-hover:gap-3 transition-all 
                "
                >
                  View Project →
                </Link>
              </div>

              {/* Bottom cinematic line */}
              <div
                className="
                absolute bottom-0 left-0 right-0 h-[2px]
                bg-gradient-to-r from-transparent via-[var(--accent-color)]/60 to-transparent
              "
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ROI / STATISTICS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-4xl font-extrabold text-[var(--accent-color)]">
              +120%
            </div>
            <div className="mt-2 text-[var(--text-secondary)]">
              Average conversion uplift
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
          >
            <div className="text-4xl font-extrabold text-[var(--accent-color)]">
              0.8s
            </div>
            <div className="mt-2 text-[var(--text-secondary)]">
              Average load time after optimization
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.24 }}
          >
            <div className="text-4xl font-extrabold text-[var(--accent-color)]">
              100+
            </div>
            <div className="mt-2 text-[var(--text-secondary)]">
              Websites delivered
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA / LEAD FORM */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-black/10 border border-[var(--border-color)] rounded-2xl p-8"
        >
          <div className="items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Ready to launch your cinematic website?
              </h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Tell us about your project and we’ll get back with a tailored
                plan and quote.
              </p>

              <div className="flex gap-3">
                <Link
                  to="/get-quote?service=website"
                  className="px-5 py-3 rounded-full bg-[var(--accent-color)] text-white font-semibold shadow hover:scale-105 transition"
                >
                  Get a Quote
                </Link>
                <a
                  href="mailto:tpindianetwork@gmail.com"
                  target="_blank"
                  className="px-5 py-3 rounded-full border border-[var(--border-color)]"
                >
                  Email Us
                </a>
              </div>
            </div>

            {/* compact inline form (demo, replace with EmailJS or your API) */}
            {/* <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); alert("Demo: form submitted — connect your backend."); }}>
              <input type="text" placeholder="Your name" required className="w-full px-4 py-2 rounded border border-[var(--border-color)] bg-transparent outline-none" />
              <input type="email" placeholder="Email" required className="w-full px-4 py-2 rounded border border-[var(--border-color)] bg-transparent outline-none" />
              <input type="text" placeholder="Project (brief)" className="w-full px-4 py-2 rounded border border-[var(--border-color)] bg-transparent outline-none" />
              <div className="flex gap-3">
                <button type="submit" className="px-4 py-2 rounded bg-[var(--accent-color)] text-white w-full">Send Request</button>
              </div>
            </form> */}
          </div>
        </motion.div>
      </section>

      {/* FAQ / Trust */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-center mb-6"
        >
          Frequently asked questions
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-6">
          <details className="p-4 rounded-lg border border-[var(--border-color)]">
            <summary className="font-semibold cursor-pointer">
              How long does a website build take?
            </summary>
            <p className="text-[var(--text-secondary)] mt-2">
              A typical small-to-medium site takes 2–4 weeks. Landing pages can
              be delivered in 3–7 days.
            </p>
          </details>
          <details className="p-4 rounded-lg border border-[var(--border-color)]">
            <summary className="font-semibold cursor-pointer">
              Do you offer maintenance?
            </summary>
            <p className="text-[var(--text-secondary)] mt-2">
              Yes — monthly maintenance, updates, and hosting packages
              available.
            </p>
          </details>
        </div>
      </section>

      {/* Footer CTA small */}
      <section className="py-12 border-t border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold">Want a high-converting website?</h4>
            <p className="text-[var(--text-secondary)]">
              We’ll help you design a site that looks cinematic and sells.
            </p>
          </div>
          <div>
            <Link
              to="/get-quote?service=website"
              className="px-5 py-3 rounded-full bg-[var(--accent-color)] text-white"
            >
              Start your project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
