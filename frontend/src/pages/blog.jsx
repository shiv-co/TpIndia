import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

// Assets (adjust paths if needed)
import bg_blog from "../assets/images/blog_img.jpg";
import blog1 from "../assets/images/blog1.webp";
import blog2 from "../assets/images/blog2.webp";
import blog3 from "../assets/images/blog3.webp";
import blog4 from "../assets/images/service_3.webp";
import blog5 from "../assets/images/service_2.webp";
import blog6 from "../assets/images/gallery9.webp";
import avatar from "../../public/logo.webp"; 
import WhatsAppButton from "../components/WhatsAppButton";
import GetQuoteBtn from "../components/getQuoteBtn";

// Lazy image helper
const LazyImg = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

export default function BlogPage() {
  // sample posts (replace with real data / CMS)
  const samplePosts = [
    {
      id: "p1",
      title: "How Reading 15 Minutes a Day Can Change Your Life",
      excerpt:
        "A small daily reading habit can transform your knowledge, focus, and creativity.",
      image: blog1,
      category: "Learning",
      author: "TP India Network",
      authorAvatar: avatar,
      date: "Nov 8, 2025",
      href: "#",
      lengthMins: 6,
    },
    {
      id: "p2",
      title: "5 Online Courses That Can Boost Your Career",
      excerpt:
        "Explore affordable courses that help you upgrade your skills fast.",
      image: blog2,
      category: "Learning",
      author: "TP India Network",
      authorAvatar: avatar,
      date: "Oct 20, 2025",
      href: "#",
      lengthMins: 4,
    },
    {
      id: "p3",
      title: "Behind the Scenes: Live Event Filming Tips",
      excerpt: "How we capture live performances without missing the moment.",
      image: blog4,
      category: "Events",
      author: "TP India Network",
      authorAvatar: avatar,
      date: "Sep 10, 2025",
      href: "#",
      lengthMins: 8,
    },
    {
      id: "p4",
      title: "From Script to Screen: Our Production Workflow",
      excerpt:
        "An inside look at our streamlined production process for documentaries.",
      image: blog3,
      category: "Production",
      author: "TP India Network",
      authorAvatar: avatar,
      date: "Aug 5, 2025",
      href: "#",
      lengthMins: 10,
    },
    {
      id: "p5",
      title: "Optimising Videos for Social First Strategy",
      excerpt:
        "Best practices for editing vertical shorts and reels that convert.",
      image: blog5,
      category: "Social",
      author: "TP India Network",
      authorAvatar: avatar,
      date: "Jul 11, 2025",
      href: "#",
      lengthMins: 5,
    },
    {
      id: "p6",
      title: "How to Plan a Cultural Event Coverage",
      excerpt:
        "Checklist and workflow for covering cultural festivals with impact.",
      image: blog6,
      category: "Events",
      author: "TP India Network",
      authorAvatar: avatar,
      date: "Jun 2, 2025",
      href: "#",
      lengthMins: 7,
    },
  ];

  const categories = ["All", "Events", "Production", "Social", "Learning"];

  // UI state
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 4;

  // progress bar - page scroll
  const topRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [progressWidth, setProgressWidth] = useState("0%");

  useEffect(() => {
    // subscribe to scroll progress updates
    const unsub = scrollYProgress.onChange((v) => {
      setProgressWidth(`${Math.round(v * 100)}%`);
    });
    return unsub;
  }, [scrollYProgress]);

  // hero parallax
  const heroRef = useRef(null);
  const heroScroll = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const heroY = useTransform(
    heroScroll.scrollYProgress ?? scrollYProgress,
    [0, 1],
    [0, -80]
  );

  // filtering + search
  const filtered = samplePosts.filter(
    (p) =>
      (activeCategory === "All" || p.category === activeCategory) &&
      (p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase()))
  );

  const paginated = filtered.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));

  // animations helpers
  const cardStaggerDelay = (i) => 0.06 * i;

  // micro cursor / tilt (simple)
  const handleCardMouseMove = (e) => {
    // we keep it simple; complex tilt libs can be added if needed
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `rotateX(${(-y / rect.height) * 4}deg) rotateY(${
      (x / rect.width) * 6
    }deg) scale(1.01)`;
  };
  const handleCardMouseLeave = (e) => {
    e.currentTarget.style.transform = "";
  };

  return (
    <main className="relative bg-[var(--bg-color)] text-[var(--text-primary)] min-h-screen overflow-x-hidden">
      {/* reading progress bar */}
      {/* HERO */}
      /* BlogHero.jsx - replace your existing section with this */
      <section
        ref={heroRef}
        className="relative h-[60vh] md:h-[70vh] lg:h-[78vh] overflow-hidden flex items-center justify-center"
      >
        {/* Background (with parallax) */}
        <motion.img
          src={bg_blog}
          alt="blog hero"
          loading="lazy"
          style={{ y: heroY }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90" />

        {/* TOP Glow */}
        <div className="pointer-events-none absolute inset-x-1/4 top-0 h-40 bg-[var(--accent-color)]/25 blur-3xl" />

        {/* Neon Orbs (same as services/portfolio) */}
        <motion.div
          className="absolute -left-24 top-16 w-72 h-72 bg-[var(--accent-color)]/25 blur-3xl rounded-full"
          animate={{ y: [0, -20, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute -right-20 bottom-10 w-72 h-72 bg-[var(--accent-color)]/25 blur-[120px] rounded-full"
          animate={{ y: [0, 20, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* HERO CONTENT */}
        <div className="relative z-10 text-center max-w-7xl px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.85, y: 0 }}
            transition={{ duration: 0.8 }}
            className="tracking-[0.25em] uppercase text-xs md:text-sm text-[var(--text-secondary)] mb-4"
          >
            TP India Network • Blog
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
          >
            The Studio Journal {" "}
            <span className="text-[var(--accent-color)]">Stories</span> from the
            field
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 0.95, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mt-4 max-w-2xl mx-auto text-white/75 text-sm md:text-base"
          >
            Interviews, production notes, workflows and ideas from TP India
            Network — cinematic thinking for brands.
          </motion.p>
        </div>
      </section>
      {/* MAIN LAYOUT */}
      <section className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* MAIN COLUMN */}
        <div className="lg:col-span-2 space-y-8">
          {/* Filters + search */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-3 flex-wrap">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    setActiveCategory(c);
                    setPage(1);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === c
                      ? "bg-[var(--accent-color)] text-white shadow-lg"
                      : "bg-white/5 text-[var(--text-primary)] border border-[var(--border-color)]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <input
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setPage(1);
                  }}
                  placeholder="Search posts..."
                  className="px-4 py-2 rounded-full bg-transparent border border-[var(--border-color)] w-64 focus:outline-none"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] text-sm">
                  ↵
                </div>
              </div>
              <div className="text-sm text-[var(--text-secondary)]">
                Showing {filtered.length} results
              </div>
            </div>
          </div>

          {/* Featured article (big) */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-color)] bg-black/80"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <LazyImg
                  src={samplePosts[0].image}
                  alt={samplePosts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              </div>

              <div className="p-8 flex flex-col justify-center">
                <p className="text-xs uppercase tracking-wide text-[var(--text-secondary)]">
                  Featured
                </p>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-3">
                  {samplePosts[0].title}
                </h3>
                <p className="text-[var(--text-secondary)] mt-4">
                  {samplePosts[0].excerpt}
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={samplePosts[0].authorAvatar}
                      alt="author"
                      className="w-11 h-11 rounded-full object-cover"
                    />
                    <div className="text-sm">
                      <div className="font-medium text-white">
                        {samplePosts[0].author}
                      </div>
                      <div className="text-[var(--text-secondary)] text-xs">
                        {samplePosts[0].date} • {samplePosts[0].lengthMins} min
                        read
                      </div>
                    </div>
                  </div>

                  <Link
                    to={samplePosts[0].href}
                    className="ml-auto px-4 py-2 bg-[var(--accent-color)] rounded-full text-white font-medium shadow hover:brightness-105 transition"
                  >
                    Read Article
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Grid of posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paginated.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: cardStaggerDelay(i) }}
                viewport={{ once: true }}
                className="relative rounded-xl overflow-hidden group"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative h-56 overflow-hidden rounded-xl shadow-xl border border-[var(--border-color)] bg-black/60">
                  <LazyImg
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                  {/* Hover overlay with clickable link */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 bg-black/50 group-hover:bg-[var(--accent-color)]/25">
                    <div className="text-center">
                      <div className="text-sm text-white/90 font-semibold">
                        {post.category}
                      </div>
                      <Link
                        to={post.href}
                        className="mt-2 inline-block text-xs text-white underline"
                      >
                        View Full Project →
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="px-4 py-3 bg-transparent">
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm mt-2">
                    {post.excerpt}
                  </p>

                  <div className="mt-3 flex items-center gap-3">
                    <img
                      src={post.authorAvatar}
                      alt="author"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="text-xs text-[var(--text-secondary)]">
                      {post.author} • {post.date}
                    </div>
                    <div className="ml-auto text-[var(--text-secondary)] text-xs">
                      {post.lengthMins} min
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="px-4 py-2 rounded bg-white/5"
              disabled={page === 1}
            >
              Prev
            </button>
            <div className="text-sm text-[var(--text-secondary)]">
              Page {page} of {totalPages}
            </div>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="px-4 py-2 rounded bg-white/5"
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-8">
          {/* Popular posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-black/60 p-6 rounded-2xl border border-[var(--border-color)] shadow-lg"
          >
            <h4 className="font-bold text-lg text-white mb-4">Popular</h4>
            <ul className="space-y-4">
              {samplePosts.slice(0, 4).map((p, idx) => (
                <li key={p.id} className="flex items-start gap-3">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-16 h-12 object-cover rounded"
                  />
                  <div className="flex-1">
                    <Link
                      to={p.href}
                      className="font-medium hover:text-[var(--accent-color)] text-white"
                    >
                      {p.title}
                    </Link>
                    <div className="text-xs text-[var(--text-secondary)]">
                      {p.date}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Search / subscribe */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="bg-black/60 p-6 rounded-2xl border border-[var(--border-color)] shadow-lg"
          >
            <div className="mb-4">
              <input
                placeholder="Search posts..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(1);
                }}
                className="w-full px-4 py-2 rounded-full bg-transparent border border-[var(--border-color)] outline-none"
              />
            </div>

            <div>
              <h5 className="font-semibold text-white mb-3">Subscribe</h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 rounded bg-transparent border border-[var(--border-color)] outline-none"
                />
                <button className="px-4 py-2 bg-[var(--accent-color)] rounded text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.09 }}
            className="bg-black/60 p-6 rounded-2xl border border-[var(--border-color)] shadow-lg"
          >
            <h5 className="font-semibold text-white mb-3">Categories</h5>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    setActiveCategory(c);
                    setPage(1);
                  }}
                  className="text-xs px-3 py-1 rounded bg-transparent border border-[var(--border-color)] text-[var(--text-secondary)]"
                >
                  {c}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="bg-black/60 p-6 rounded-2xl border border-[var(--border-color)] shadow-lg"
          >
            <h5 className="font-semibold text-white mb-3">Tags</h5>
            <div className="flex flex-wrap gap-2">
              {[
                "video",
                "event",
                "editing",
                "production",
                "social",
                "learning",
              ].map((t) => (
                <Link
                  key={t}
                  to="#"
                  className="px-3 py-1 text-xs rounded border border-[var(--border-color)] text-[var(--text-secondary)]"
                >
                  {t}
                </Link>
              ))}
            </div>
          </motion.div>
        </aside>
        <WhatsAppButton />
        <GetQuoteBtn />
      </section>
    </main>
  );
}
