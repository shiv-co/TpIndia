import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import cta_hero from "../assets/images/cta_camera.webp";

import portfolio1 from "../assets/images/portfolio1.webp";
import portfolio2 from "../assets/images/portfolio2.webp";
import portfolio3 from "../assets/images/portfolio3.webp";
import portfolio4 from "../assets/images/portfolio4.webp";
import portfolio5 from "../assets/images/portfolio5.webp";
import portfolio6 from "../assets/images/portfolio6.webp";

import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.webp";
import gallery3 from "../assets/images/gallery3.webp";
import gallery4 from "../assets/images/gallery4.webp";
import gallery5 from "../assets/images/gallery5.webp";
import gallery6 from "../assets/images/gallery6.webp";
import gallery7 from "../assets/images/gallery7.webp";
import gallery8 from "../assets/images/gallery8.webp";
import gallery9 from "../assets/images/gallery9.webp";
import gallery13 from "../assets/images/gallery13.webp";
import gallery11 from "../assets/images/gallery11.webp";
import gallery12 from "../assets/images/gallery12.webp";

// Lazy loading for images
const LazyImg = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

export default function PortfolioPage() {
  const heroRef = useRef(null);

  const collage = [
    portfolio1,
    portfolio2,
    portfolio3,
    portfolio4,
    portfolio5,
    portfolio6,
  ];

  const galleryData = [
    { src: gallery1, category: "Events" },
    { src: gallery2, category: "Films" },
    { src: gallery3, category: "Music Video" },
    { src: gallery4, category: "Ads" },
    { src: gallery5, category: "Events" },
    { src: gallery6, category: "Films" },
    { src: gallery7, category: "Behind The Scenes" },
    { src: gallery8, category: "Music Video" },
    { src: gallery9, category: "Ads" },
    { src: gallery11, category: "Web Development" ,link: "dhasutalks.com"},
    { src: gallery12, category: "Web Development", link: "tehzeebcreations.in" },
    { src: gallery13, category: "Web Development", link: "ummeedwelfare.org.in" },
  ];

  const videos = [
    { src: "/assets/video1.mp4", label: "Brand Film" },
    { src: "/assets/video2.mp4", label: "Music Video" },
    { src: "/assets/video3.mp4", label: "Event Highlight" },
  ];

  const categories = [
    "All",
    "Events",
    "Films",
    "Music Video",
    "Ads",
    "Behind The Scenes",
    "Web Development",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  // Scroll-linked parallax for hero
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const filteredGallery =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((g) => g.category === activeCategory);

  return (
    <div className="bg-[var(--bg-color)] text-[var(--text-primary)]">
      {/* ================= HERO ================= */}
      <section
        ref={heroRef}
        className="relative h-[60vh] md:h-[75vh] overflow-hidden flex items-center justify-center"
      >
        {/* Parallax background */}
        <motion.img
          loading="lazy"
          src={cta_hero}
          alt="Cinematic camera setup"
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black" />

        {/* Neon beams */}
        <motion.div
          className="absolute -left-20 top-10 w-72 h-72 bg-[var(--accent-color)]/25 blur-[120px] rounded-full"
          animate={{ x: [0, 30, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-10 bottom-0 w-72 h-72 bg-[var(--accent-color)]/30 blur-[150px] rounded-full"
          animate={{ x: [0, -30, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Hero Content */}
        <motion.div
          style={{ y: heroTextY }}
          className="relative z-10 text-center px-6 md:mt-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 0.7 }}
            className="uppercase tracking-[0.3em] text-xs text-white/70 mb-3"
          >
            Portfolio • TP India Network
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-3"
          >
            Cinematic{" "}
            <span className="text-[var(--accent-color)]">Stories</span>{" "}
            We&apos;ve Created
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-white/70 text-sm md:text-base max-w-2xl mx-auto"
          >
            From live events to brand films, music videos and web visuals — this
            is the work that defines TP India Network.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= STATS STRIP ================= */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { label: "Projects Delivered", value: "3500+" },
          { label: "Brands & Artists", value: "465+" },
          { label: "Cities Covered", value: "40+" },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-[var(--border-color)] bg-black/60 text-white px-6 py-5 overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-[var(--accent-color)]/15 blur-3xl" />
            <p className="text-2xl font-bold text-[var(--accent-color)]">
              {item.value}
            </p>
            <p className="text-sm text-white/80 mt-1">{item.label}</p>
          </motion.div>
        ))}
      </section>

      {/* ================= HORIZONTAL REEL / MARQUEE ================= */}
      <section className="max-w-8xl mx-auto px-6 py-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-2xl md:text-3xl font-bold mb-6"
        >
          On-Set & Behind The Scenes
        </motion.h2>

        <div className="relative w-full overflow-hidden rounded-2xl border border-[var(--border-color)] bg-black/80">
          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex gap-6 whitespace-nowrap py-6"
          >
            {[...collage, ...collage].map((src, i) => (
              <div
                key={i}
                className="inline-flex min-w-[260px] h-64 rounded-xl overflow-hidden"
              >
                <LazyImg
                  src={src}
                  alt="On set"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CREATIVE COLLAGE ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl font-bold mb-3"
        >
          Creative Collage
        </motion.h2>
        <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 text-sm md:text-base">
          A glimpse of our visual universe — live shows, studio sessions, brand
          storytelling and cultural narratives.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {collage.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, rotate: -1.5 }}
              className="overflow-hidden rounded-2xl shadow-lg bg-black/60 border border-white/5"
            >
              <LazyImg
                src={src}
                alt="portfolio collage"
                className="w-full h-64 object-cover object-top hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FEATURED PROJECTS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-secondary)] mb-3">
            Featured Project
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Live Concert Coverage &{" "}
            <span className="text-[var(--accent-color)]">Aftermovie</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-sm md:text-base mb-4">
            Multi-camera coverage, stage storytelling, crowd energy and a final
            aftermovie that lives longer than the event itself.
          </p>
          <p className="text-[var(--text-secondary)] text-sm md:text-base">
            Our team handled concept, shooting, drone shots, edit, color grade,
            and social-first cutdowns.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden border border-[var(--border-color)] bg-black/80 shadow-2xl"
        >
          <LazyImg
            src={portfolio3}
            alt="Featured event"
            className="w-full h-72 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-white/70">
              Case Study
            </p>
            <p className="text-lg font-semibold">Concert Aftermovie</p>
          </div>
        </motion.div>
      </section>

      {/* ================= FILTERABLE IMAGE GALLERY ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl font-bold mb-3"
        >
          Image Gallery
        </motion.h2>

        <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-8 text-sm md:text-base">
          Filter through our work across events, films, music and advertising.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium border transition-all ${
                activeCategory === cat
                  ? "bg-[var(--accent-color)] text-white border-[var(--accent-color)]"
                  : "bg-transparent text-[var(--text-secondary)] border-[var(--border-color)] hover:border-[var(--accent-color)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {filteredGallery.map((item, i) => (
            <motion.div
              key={item.src + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="break-inside-avoid overflow-hidden rounded-2xl bg-black/70 border border-white/5 shadow-lg"
            >
              {/* Wrapper is now the group */}
              <div className="relative group w-full overflow-hidden">
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.category}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500  bg-black/60 group-hover:bg-[var(--accent-color)]/80 pointer-events-none"
                >
                  <div className="text-center pointer-events-auto">
                    <h3 className="text-white text-lg md:text-2xl font-bold drop-shadow-lg">
                      {item.category}
                    </h3>
                    <a className="text-white/80 text-xs mt-1 tracking-wide"
                    href={item.link ? `https://${item.link}` : "#"}
                    target="_blank"
                    rel="noopener noreferrer">
                      View Full Project
                    </a>
                    
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= YOUTUBE  ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl font-bold mb-6"
        >
          YouTube Showreel
        </motion.h2>
        <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-8 text-sm md:text-base">
          Watch a curated playlist of our films, campaigns and performance cuts.
        </p>
        <div className="aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-color)] bg-black">
          <iframe
            loading="lazy"
            className="w-full h-full"
            src="https://www.youtube.com/embed/kOveEiMFESU"
            title="YouTube "
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* ================= VIDEO GALLERY ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl font-bold mb-6"
        >
          Video Gallery
        </motion.h2>
        <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 text-sm md:text-base">
          A few handpicked videos that showcase our range of production styles.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((v, i) => (
            <motion.div
              key={v.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl bg-black border border-[var(--border-color)]"
            >
              <video
                loading="lazy"
                src={v.src}
                controls
                className="w-full h-56 object-cover"
              />
              <div className="px-4 py-3 text-sm text-white/80 border-t border-white/10">
                {v.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
