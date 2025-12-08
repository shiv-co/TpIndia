import React from "react";
import { motion } from "framer-motion";
import GetQuote from "../pages/GetQuote.jsx";

import service_hero from "../assets/images/service_hero.webp";
import service1 from "../assets/images/service_1.webp";
import service2 from "../assets/images/service_2.webp";
import service3 from "../assets/images/service_3.webp";
import service4 from "../assets/images/service_4.webp";
import service5 from "../assets/images/service_5.webp";
import service6 from "../assets/images/service_6.jpg";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import GetQuoteBtn from "../components/getQuoteBtn.jsx";
import { Helmet } from "react-helmet-async";

// Neon blue accent is already in your theme: #4169E1 (var(--accent-color))

const services = [
  {
    title: "Video Production",
    img: service1,
    badge: "Cinematic",
    desc: "High-end production for brands, corporates, and documentaries.",
  },
  {
    title: "Video Editing",
    img: service2,
    badge: "Story First",
    desc: "From raw footage to polished story with pacing, color & sound.",
  },
  {
    title: "Event Coverage",
    img: service3,
    badge: "Live",
    desc: "Capture conferences, concerts & cultural events with multi-cam setups.",
  },
  {
    title: "Music Video",
    img: service4,
    badge: "Artist Focused",
    desc: "Visual storytelling tailored for music artists and labels.",
  },
  {
    title: "Podcast & Talk Shows",
    img: service5,
    badge: "Content Hub",
    desc: "Multi-cam podcast, interviews and talk-show style content.",
  },
  {
    title: "Web Development & Digital Experience",
    img: service6,
    badge: "Digital",
    desc: "Web experiences and landing pages that match your visual identity.",
  },
];

const cfgItems = [
  {
    title: "Creative Ideas",
    description:
      "We shape bold ideas into cinematic visuals. From scripting to shot design, we think in frames, emotions, and impact.",
  },
  {
    title: "Fast Support",
    description:
      "Tight deadlines, last-minute changes? Our team responds quickly and keeps your project moving without friction.",
  },
  {
    title: "Great Solutions",
    description:
      "We combine production, digital marketing and tech to design solutions that are practical, scalable, and beautiful.",
  },
];

export default function ServicePage() {
  return (
    <>
      <Helmet>
        <title>Services — TP India Network</title>
        <meta
          name="description"
          content="Video production, cinematography, editing, social media marketing, photography & branding services."
        />
            <meta property="og:image" content="https://tpindia.in/assets/service-cover.webp" />
      </Helmet>

      <div className="bg-[var(--bg-color)] text-[var(--text-primary)]">
        {/* ================= HERO SECTION ================= */}
        <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
          {/* Background image with slight zoom animation */}
          <motion.img
            src={service_hero}
            alt="Service hero"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />

          {/* Neon gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />
          <div className="pointer-events-none absolute inset-x-1/4 top-0 h-40 bg-[var(--accent-color)]/25 blur-3xl" />

          {/* Floating neon orb */}
          <motion.div
            className="absolute -right-10 bottom-10 w-52 h-52 rounded-full bg-[var(--accent-color)]/20 blur-3xl"
            animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Hero Content */}
          <div className="relative max-w-7xl mx-auto h-full flex flex-col items-center justify-center px-6 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ duration: 0.8 }}
              className="tracking-[0.25em] uppercase text-xs md:text-sm text-[var(--text-secondary)] mb-4"
            >
              TP India Network • Services
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white"
            >
              We Design{" "}
              <span className="text-[var(--accent-color)]">Visual</span>{" "}
              Experiences
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-4 max-w-2xl text-sm md:text-base text-white/70"
            >
              From concept to delivery, we blend film, design, and technology to
              turn your brand into a living, breathing story.
            </motion.p>
          </div>
        </section>

        {/* ================= WHY CHOOSE SECTION ================= */}
        <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase text-[var(--text-secondary)] mb-4 tracking-widest">
              Why Choose Our Services
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              We Transform Every Dream Into a
              <span className="text-[var(--accent-color)]">
                {" "}
                Visual Reality
              </span>
            </h2>

            <div className="mt-6 grid grid-cols-3 gap-4 text-sm text-[var(--text-secondary)]">
              <div>
                <p className="text-2xl font-bold text-[var(--accent-color)]">
                  3500+
                </p>
                <p>Projects Completed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--accent-color)]">
                  465
                </p>
                <p>Happy Clients</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--accent-color)]">
                  25
                </p>
                <p>Awards Won</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="leading-relaxed text-[var(--text-secondary)] text-sm md:text-base space-y-4"
          >
            <p>
              TP India Network Pvt. Ltd. stands as India&apos;s premier film,
              digital marketing and video production powerhouse. We don&apos;t
              just shoot videos — we build experiences that feel cinematic and
              strategic at the same time.
            </p>
            <p>
              Our teams blend creative direction, on-ground execution, and
              digital performance to deliver stories that your audience
              remembers long after the screen fades to black.
            </p>
            <p>
              Whether you&apos;re a brand, startup, NGO, or artist — we adapt
              our visual language to your world, and then push it forward.
            </p>
          </motion.div>
        </section>

        {/* ================= SERVICES GRID ================= */}
        <section className="relative max-w-7xl mx-auto px-6 pb-20">
          {/* Subtle background glow */}
          <div className="pointer-events-none absolute inset-x-10 top-0 h-40 bg-[var(--accent-color)]/10 blur-3xl" />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center text-3xl md:text-4xl font-extrabold mb-4"
          >
            Services We Provide For You
          </motion.h2>

          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 text-sm md:text-base">
            A complete stack of visual and digital services — from on-ground
            production to editing, design, and web experiences that carry your
            story everywhere.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                className="cursor-pointer group relative rounded-2xl overflow-hidden shadow-xl bg-black/60 border border-white/5"
              >
                {/* Image */}
                <div className="relative w-full h-64 overflow-hidden">
                  <motion.img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* Neon overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--accent-color)]/80 text-white shadow">
                    {service.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-[var(--accent-color)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[var(--text-secondary)]">
                    {service.desc}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-xs text-[var(--text-secondary)]">
                    <span className="flex items-center gap-1">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]" />
                      End-to-end service
                    </span>
                    <button className="text-[var(--accent-color)] group-hover:underline">
                      Explore →
                    </button>
                  </div>
                </div>

                {/* Neon border glow on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl border border-[var(--accent-color)] opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_25px_rgba(65,105,225,0.7)] transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= CREATIVE / SUPPORT / SOLUTIONS ================= */}
        <CFGSection />
        <GetQuote />
        <WhatsAppButton />
        <GetQuoteBtn />
      </div>
    </>
  );
}

/* ===============================================
   CFG SECTION (Creative Ideas / Fast Support / Great Solutions)
   =============================================== */

function CFGSection() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 pb-24">
      {/* Background gradient strip */}
      <div className="absolute inset-x-0 top-10 h-40 bg-[var(--accent-color)]/10 blur-3xl -z-10" />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center text-3xl md:text-4xl font-extrabold mb-12"
      >
        How We Work With You
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {cfgItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: i * 0.15 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative p-8 border border-[var(--border-color)] rounded-2xl bg-black/60 backdrop-blur-sm hover:bg-black/80 transition-all shadow-lg overflow-hidden"
          >
            {/* subtle corner glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--accent-color)]/20 blur-3xl" />

            <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
            <div className="w-12 h-[3px] bg-[var(--accent-color)] mb-5" />
            <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
              {item.description}
            </p>

            <span className="absolute -bottom-4 left-4 text-[100px] font-extrabold text-white/5 select-none pointer-events-none">
              {item.title.charAt(0)}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
