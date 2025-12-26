import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
// Hero background
import hero_bg from "../assets/images/about_hero.webp";
import { useMeta } from "../hooks/useMeta.js";

// Crew images (keep same imports / paths you already used)
import Garima from "../assets/crew_img/Garima_Mishra.webp";
import Harshit from "../assets/crew_img/Harshit.webp";
import Kshitiz from "../assets/crew_img/khitiz_mahajan.webp";
import Bhanu from "../assets/crew_img/Bhanu.webp";
import Amit from "../assets/crew_img/Amit_gupta.webp";
import Anubhav from "../assets/crew_img/anubhav_patel.webp";
import Anju from "../assets/crew_img/anju.webp";
import Saurab from "../assets/crew_img/Saurab.webp";
import Shivam from "../assets/crew_img/Shivam_Singh.webp";
import Umesh from "../assets/crew_img/Umesh_Tiwari.webp";
import Nidhi from "../assets/crew_img/Nidhi_Mishra.webp";
import Himanshu from "../assets/crew_img/Himanshu.webp";
import Sudeep from "../assets/crew_img/sudeep_Tiwari.webp";
import Rajan from "../assets/crew_img/Rajan.webp";
import Akshat from "../assets/crew_img/akshat_Agarwal.webp";
import Kudrat from "../assets/crew_img/kudrat.webp";
import Teepu from "../assets/crew_img/Teepu_Sultan.webp";
import Kapil from "../assets/crew_img/kapil1.webp";
import Ali from "../assets/crew_img/ali.webp";
import WhatsAppButton from "../components/WhatsAppButton";
import GetQuoteBtn from "../components/getQuoteBtn";

const crew = [
  { name: "Akshat Agrawal", role: "Director / COO", img: Akshat },
  { name: "Syed Kudrat Ali", role: "Director / CEO", img: Kudrat },
  { name: "Nidhi Mishra", role: "Director / Marketing Head", img: Nidhi },
  { name: "Bhanu Pratap", role: "Camera Assistant", img: Bhanu },
  {
    name: "Harshit Roy Choudhury",
    role: "Creative Head / Photographer",
    img: Harshit,
  },
  { name: "Garima Mishra", role: "Anchor / Social Media Manager", img: Garima },
  { name: "Ali Musarrat", role: "Production Head Editor", img: Ali },
  { name: "Anju", role: "Post Production Head / Video Editor", img: Anju },
  { name: "Kshitiz Mahazan", role: "Cinematographer", img: Kshitiz },
  { name: "Saurabh Singh", role: "Social Media Strategist", img: Saurab },
  { name: "Amit Gupta", role: "Photographer", img: Amit },
  { name: "Anubhav Patel", role: "Cinematographer", img: Anubhav },
  { name: "Shivam Singh", role: "Full Stack Developer", img: Shivam },
  { name: "Umesh Tiwari", role: "Camera Operator", img: Umesh },
  { name: "Himanshu Goswami", role: "Cinematographer", img: Himanshu },
  { name: "Rajan Mishra", role: "DOP", img: Rajan },
  { name: "Kapil Bharti", role: "Video Editor", img: Kapil },
  { name: "Sudeep Tiwari", role: "Photographer", img: Sudeep },
  { name: "Teepu Sultan", role: "Video Editor / Camera Operator", img: Teepu },
];

export default function AboutUs() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);


  useMeta({
  title: "About Us TP India Network",
  description:
    "Meet our creative team of filmmakers, developers & marketers at TP India Network.",
  keywords: "tp india network team, about tp india network, film crew",
  
  url: "https://tpindia.in/about"
});


  return (
    <>




      <div className="bg-[var(--bg-color)] text-[var(--text-primary)]">
        {/* HERO */}
        <section
          ref={heroRef}
          className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden flex items-center justify-center"
        >
          {/* Background Image with cinematic zoom */}
          <motion.img
            src={hero_bg}
            alt="About hero"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />
          <div className="pointer-events-none absolute inset-x-1/4 top-0 h-40 bg-[var(--accent-color)]/25 blur-3xl" />

          {/* Floating Neon Orb Left */}
          <motion.div
            className="absolute -left-20 top-16 w-64 h-64 rounded-full bg-[var(--accent-color)]/25 blur-3xl"
            animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating Neon Orb Right */}
          <motion.div
            className="absolute -right-16 bottom-10 w-56 h-56 rounded-full bg-[var(--accent-color)]/25 blur-3xl"
            animate={{ y: [0, 20, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* HERO CONTENT (Centered) */}
          <div className="relative z-10 max-w-7xl mx-auto text-center px-6 mt-20">
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ duration: 0.8 }}
              className="tracking-[0.25em] uppercase text-xs md:text-sm text-[var(--text-secondary)] mb-4"
            >
              TP India Network • About Us
            </motion.p>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white"
            >
              Meet the People Behind{" "}
              <span className="text-[var(--accent-color)]">
                TP India Network
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 0.95, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="mt-4 max-w-2xl mx-auto text-white/75 text-sm md:text-base"
            >
              A diverse group of filmmakers, storytellers, coders and
              strategists united by craft, curiosity and care.
            </motion.p>
          </div>
        </section>

        {/* DIRECTOR'S WORDS */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <LazyLoadImage
                src={Kudrat}
                effect="blur"
                alt="Director"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute left-6 bottom-6 text-white">
                <p className="text-sm text-[var(--text-secondary)]">
                  From the Desk of
                </p>
                <h3 className="text-2xl md:text-3xl font-bold">
                  Syed Kudrat Ali — Founder, TP India Network
                </h3>
              </div>
            </div>

            <div>
              <h4 className="text-lg md:text-xl font-bold mb-4">
                Director's Note
              </h4>
              <motion.blockquote
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="text-[var(--text-secondary)] italic border-l-4 border-[var(--accent-color)] pl-6 py-4 bg-white/5 rounded"
              >
                "Storytelling is the most human technology we have. We craft
                images that speak, sound that moves and edits that respect the
                moment. At TP India, we listen first — then shoot."
              </motion.blockquote>

              <p className="mt-6 text-[var(--text-secondary)]">
                We believe in collaboration, discipline, and an obsessive
                attention to detail. Our projects start with a conversation and
                end with a product that matters.
              </p>

              <div className="mt-6 flex gap-4">
                <Link
                  to="/contact"
                  className="px-5 py-2 rounded-full bg-[var(--accent-color)] text-white font-semibold shadow hover:scale-105 transition"
                >
                  Work With Us
                </Link>
                <Link
                  to="/portfolio"
                  className="px-5 py-2 rounded-full border border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--accent-color)] hover:text-white transition"
                >
                  See Portfolio
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        {/* TIMELINE / MILESTONES */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-bold text-center mb-8"
          >
            Our Journey
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                year: "2005",
                title: "Founded",
                desc: "A small team with a big camera and bigger ideas.",
              },
              {
                year: "2012",
                title: "Growth",
                desc: "Expanded services, added post-production & creative teams.",
              },
              {
                year: "2022",
                title: "Nationwide",
                desc: "Teams across multiple cities and large-scale productions.",
              },
            ].map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="p-6 rounded-xl bg-black/60 border border-[var(--border-color)]"
              >
                <p className="text-[var(--accent-color)] font-bold text-xl">
                  {m.year}
                </p>
                <h4 className="mt-2 font-semibold text-white">{m.title}</h4>
                <p className="mt-2 text-[var(--text-secondary)]">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section className="bg-gradient-to-b from-black to-black/90 text-white py-12">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
            {[
              { num: "5,000+", label: "Projects" },
              { num: "1,000+", label: "Clients" },
              { num: "50+", label: "Cities" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="p-6"
              >
                <p className="text-4xl font-extrabold text-[var(--accent-color)]">
                  {s.num}
                </p>
                <p className="mt-2 text-[var(--text-secondary)]">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* OUR CREW - Marquee */}
        <section className="max-w-8xl mx-auto px-6 py-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-3xl md:text-5xl font-bold mb-6"
          >
            Our Crew • The People Behind The Magic
          </motion.h2>

          <div className="mx-auto w-32 border-b-2 border-[var(--accent-color)] mb-12"></div>

          {/* Outer container with cinematic style */}
          <div className="relative w-full overflow-hidden rounded-2xl border border-[var(--border-color)] bg-black/60 dark:bg-black/70 backdrop-blur-sm py-6 ">
            {/* Infinite scroll track */}
            <motion.div
              animate={{ x: ["0%", "-400%"] }}
              transition={{
                duration: 60, // smooth & premium speed
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex gap-8 whitespace-nowrap"
            >
              {[...crew, ...crew].map((member, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="inline-flex flex-col items-center text-center min-w-[260px]"
                >
                  {/* Avatar */}
                  <div className="w-56 h-56 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.4)] border border-[var(--border-color)]">
                    <LazyLoadImage
                      src={member.img}
                      effect="blur"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="mt-4 font-bold text-lg  text-[var(--text-primary)]">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p className="text-[var(--text-secondary)] text-sm">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl p-8 bg-gradient-to-r from-black/60 to-black/40 border border-[var(--border-color)] flex flex-col md:flex-row items-center gap-6"
          >
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-extrabold">
                Want to work with the team?
              </h3>
              <p className="text-[var(--text-secondary)] mt-2">
                We’re hiring, collaborating and always open for creative briefs.
                Let’s chat.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-full bg-[var(--accent-color)] text-white font-semibold"
              >
                Get In Touch
              </Link>
              <Link
                to="/careers"
                className="px-6 py-3 rounded-full border border-[var(--border-color)]"
              >
                See Openings
              </Link>
            </div>
          </motion.div>
          <WhatsAppButton />
          <GetQuoteBtn />
        </section>

        <div className="h-24" />
      </div>
    </>
  );
}
