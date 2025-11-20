import React, { useState } from "react";
import { motion } from "framer-motion";

// BlogPage.jsx - Cinematic Animated Blog (Option B)
// Uses Tailwind + your CSS variables for colors
// Images are placeholders in /assets/*. Replace with real images.

function PostCard({ post, i }) {
  return (
    <motion.article
      className="bg-white dark:bg-black/90 rounded-lg overflow-hidden shadow-lg group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: i * 0.08 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative overflow-hidden h-56">
        <img
          loading="lazy"
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <span className="absolute left-4 bottom-4 bg-black/60 text-white text-xs px-3 py-1 rounded">{post.category}</span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{post.title}</h3>
        <p className="text-[var(--text-secondary)] text-sm mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={post.authorAvatar} alt="author" className="w-10 h-10 rounded-full object-cover" />
            <div className="text-sm">
              <div className="font-medium">{post.author}</div>
              <div className="text-[var(--text-secondary)] text-xs">{post.date}</div>
            </div>
          </div>

          <a
            href={post.href}
            className="text-sm px-4 py-2 rounded bg-[var(--accent-color)] text-white font-medium shadow hover:brightness-105 transition"
          >
            Read More
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function BlogPage() {
  // sample posts - replace with real data
  const samplePosts = [
    {
      title: "How Reading 15 Minutes a Day Can Change Your Life",
      excerpt: "A small daily reading habit can transform your knowledge, focus, and creativity.",
      image: "/assets/blog1.jpg",
      category: "Learning",
      author: "TP India",
      authorAvatar: "/assets/author1.jpg",
      date: "Nov 8, 2025",
      href: "#",
    },
    {
      title: "5 Online Courses That Can Boost Your Career",
      excerpt: "Explore affordable courses that help you upgrade your skills fast.",
      image: "/assets/blog2.jpg",
      category: "Learning",
      author: "TP India",
      authorAvatar: "/assets/author2.jpg",
      date: "Oct 20, 2025",
      href: "#",
    },
    {
      title: "Behind the Scenes: Live Event Filming Tips",
      excerpt: "How we capture live performances without missing the moment.",
      image: "/assets/blog3.jpg",
      category: "Events",
      author: "TP India",
      authorAvatar: "/assets/author1.jpg",
      date: "Sep 10, 2025",
      href: "#",
    },
    {
      title: "From Script to Screen: Our Production Workflow",
      excerpt: "An inside look at our streamlined production process for documentaries.",
      image: "/assets/blog4.jpg",
      category: "Production",
      author: "TP India",
      authorAvatar: "/assets/author2.jpg",
      date: "Aug 5, 2025",
      href: "#",
    },
    {
      title: "Optimising Videos for Social First Strategy",
      excerpt: "Best practices for editing vertical shorts and reels that convert.",
      image: "/assets/blog5.jpg",
      category: "Social",
      author: "TP India",
      authorAvatar: "/assets/author1.jpg",
      date: "Jul 11, 2025",
      href: "#",
    },
    {
      title: "How to Plan a Cultural Event Coverage",
      excerpt: "Checklist and workflow for covering cultural festivals with impact.",
      image: "/assets/blog6.jpg",
      category: "Events",
      author: "TP India",
      authorAvatar: "/assets/author2.jpg",
      date: "Jun 2, 2025",
      href: "#",
    },
  ];

  const popular = samplePosts.slice(0, 4);
  const categories = ["All", "Events", "Production", "Social", "Learning"];

  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);
  const perPage = 4;

  const filtered = samplePosts.filter((p) => activeCategory === "All" || p.category === activeCategory);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(filtered.length / perPage) || 1;

  return (
    <main className="bg-[var(--bg-color)] text-[var(--text-primary)] min-h-screen">
      {/* Hero */}
      <section className="relative h-56 md:h-80 lg:h-96 overflow-hidden">
        <img loading="lazy" src="/assets/blog-hero.jpg" className="absolute inset-0 w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="relative max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">Our Blog</h1>
          <p className="text-sm text-white/80 mt-3 max-w-2xl">Stories, tips and updates from TP India Network — production, events, and digital strategy.</p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Category pills */}
          <div className="flex flex-wrap gap-3">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => { setActiveCategory(c); setPage(1); }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeCategory === c ? "bg-[var(--accent-color)] text-white" : "bg-white/5 text-[var(--text-primary)]"}`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paginated.map((post, i) => (
              <PostCard key={post.title} post={post} i={i} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="px-4 py-2 rounded bg-white/5"
              disabled={page === 1}
            >
              Prev
            </button>
            <div className="text-sm">Page {page} of {totalPages}</div>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="px-4 py-2 rounded bg-white/5"
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Popular posts */}
          <div className="bg-white/5 p-6 rounded-lg">
            <h4 className="font-bold text-lg mb-4">Popular Post</h4>
            <ul className="space-y-4">
              {popular.map((p, idx) => (
                <li key={p.title} className="flex items-start gap-4">
                  <div className="text-[var(--text-secondary)] font-bold text-2xl">{String(idx + 1).padStart(2, "0")}</div>
                  <div>
                    <a href={p.href} className="font-medium hover:text-[var(--accent-color)]">{p.title}</a>
                    <div className="text-[var(--text-secondary)] text-xs">{p.date}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Search + Newsletter */}
          <div className="bg-white/5 p-6 rounded-lg space-y-4">
            <div>
              <input
                type="search"
                placeholder="Search posts..."
                className="w-full px-4 py-2 rounded bg-transparent border border-[var(--border-color)] outline-none"
              />
            </div>

            <div>
              <h5 className="font-semibold mb-2">Get The Notification</h5>
              <div className="flex gap-2">
                <input type="email" placeholder="Enter your email" className="flex-1 px-3 py-2 rounded bg-transparent border border-[var(--border-color)] outline-none" />
                <button className="px-4 py-2 bg-[var(--accent-color)] rounded text-white">Subscribe</button>
              </div>
            </div>

            {/* Categories */}
            <div>
              <h5 className="font-semibold mb-2">Categories</h5>
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button key={c} className="text-sm px-3 py-1 rounded bg-transparent border border-[var(--border-color)] text-[var(--text-secondary)]">{c}</button>
                ))}
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="bg-white/5 p-6 rounded-lg">
            <h5 className="font-semibold mb-3">Tags</h5>
            <div className="flex flex-wrap gap-2">
              {['video','event','editing','production','social','learning'].map(t => (
                <a key={t} className="px-3 py-1 text-sm bg-transparent border border-[var(--border-color)] rounded text-[var(--text-secondary)]">{t}</a>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
