import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// OPTIONAL IMAGE:

export default function GetQuote() {
  return (
    <section className="relative py-24 overflow-hidden bg-[var(--bg-color)] text-[var(--text-primary)] w-full">
      
      {/* --- BACKGROUND GLOW ORBS --- */}
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 bg-[var(--accent-color)]/20 blur-[120px] rounded-full"
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-32 -right-28 w-72 h-72 bg-[var(--accent-color)]/30 blur-[160px] rounded-full"
        animate={{ opacity: [0.6, 1, 0.6], scale: [1.1, 1.3, 1.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* --- OPTIONAL DECORATIVE IMAGE --- */}
      {/* Uncomment if you want an image */}


      {/* --- CTA TEXT CONTENT --- */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        
        {/* Small intro text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.7 }}
          className="uppercase tracking-[0.3em] text-[var(--text-secondary)] text-xs mb-4"
        >
          Let’s Collaborate
        </motion.p>

        {/* Main Title */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Ready to Start Your{" "}
          <span className="text-[var(--accent-color)]">Story?</span>
        </motion.h3>

        {/* Cinematic underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "140px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-[3px] bg-[var(--accent-color)] mx-auto mb-6 rounded-full"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-[var(--text-secondary)] max-w-xl mx-auto mb-8 text-sm md:text-base"
        >
          Contact TP India Network — we’ll plan, shoot and deliver with 
          precision, creativity, and care. Let’s create something unforgettable.
        </motion.p>

        {/* Contact Button */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            to="/contact"
            className="px-8 py-3 bg-[var(--accent-color)] text-white rounded-full font-semibold shadow-lg
                       hover:shadow-[0_0_20px_rgba(65,105,225,0.6)] hover:scale-105 transition-all"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
