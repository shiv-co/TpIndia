// src/pages/navbar.jsx
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

/**
 * Navbar with a theme-aware transparent top info banner.
 * Make sure your global CSS defines the CSS variables used below.
 */

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((s) => !s);

  // THEME TOGGLE LOGIC
  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");

    if (html.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  // Load theme on refresh
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  // topbar height — use CSS var if present, fallback
  const topbarHeight = "var(--topbar-height, 2rem)"; // fallback 3.5rem (~56px)

  return (
    <>
      {/* -------------------- TOP TRANSPARENT INFO BAR -------------------- */}
      <div                                              
        className="w-full fixed top-0 left-0 z-[60] backdrop-blur-xl transition-colors"
        style={{
          backgroundColor: "color-mix(in srgb, var(--bg-color) 80%, transparent)",
          color: "var(--topbar-text, var(--text-primary))",
          height: "var(--topbar-height, 2rem)",
        }}
      >
        <div className="max-w-7xl mx-auto h-full px-4 md:px-6 flex items-center justify-between">
          {/* left */}
          <div className="flex items-center gap-6 text-xs md:text-xs lg:text-sm">
            {/* 📍 Location */}
            <span className="hidden lg:flex  items-center gap-2 opacity-95">
              <i
                className="ri-map-pin-line"
                style={{ color: "var(--accent-color)" }}
              />
              <a
                href="https://maps.app.goo.gl/6HEwmpzLaug1M1mh8"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:underline whitespace-nowrap underline-offset-4 decoration-[var(--accent-color)] transition font-extrabold dark:font-medium"
              >
                Lalbagh, Hazratganj Lucknow, 226001
              </a>
            </span>

            {/* 📞 Phone */}
            <span className=" items-center gap-2">
              <i
                className="ri-phone-line"
                style={{ color: "var(--accent-color)" }}
              />
              <a
                href="tel:+919932012125"
                className="hover:underline whitespace-nowrap underline-offset-4 decoration-[var(--accent-color)] transition font-extrabold dark:font-medium"
              >
                +91 9932012125
              </a>
            </span>

            {/* ✉️ Email */}
            <span className="hidden lg:flex items-center gap-2">
              <i
                className="ri-mail-line"
                style={{ color: "var(--accent-color)" }}
              />
              <a
                href="mailto:tpindianetwork@gmail.com"
                className="hover:underline whitespace-nowrap underline-offset-4 decoration-[var(--accent-color)] transition font-extrabold dark:font-medium "
              >
                tpindianetwork@gmail.com
              </a>
            </span>
          </div>

          {/* right icons */}
          <div className="flex items-center gap-4 text-base">
            <a
              href="https://www.instagram.com/tpindianetwork"
              target="_blank"
              className="hover:text-[var(--accent-color)]"
              style={{ color: "inherit" }}
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/tpindianetwork/"
              target="_blank"
              className="hover:text-[var(--accent-color)]"
              style={{ color: "inherit" }}
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.youtube.com/@tpindianetwork/featured"
              target="_blank"
              className="hover:text-[var(--accent-color)]"
              style={{ color: "inherit" }}
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com/company/tpindianetwork/"
              target="_blank"
              className="hover:text-[var(--accent-color)]"
              style={{ color: "inherit" }}
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* -------------------- MAIN NAVBAR (positioned below topbar) -------------------- */}
      <nav
        className="fixed left-0 w-full z-[50] backdrop-blur-md border-b transition-all duration-300"
        style={{
          top: topbarHeight,
          backgroundColor:
            "color-mix(in srgb, var(--bg-color) 80%, transparent)",
          borderColor: "var(--border-color)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-1 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.webp"
              alt="TP India Logo"
              className="h-14 w-14 md:h-16 md:w-16"
            />
            <div className="leading-tight">
              <span className="font-bold text-lg md:text-xl tracking-tight text-[var(--text-primary)]">
                TP India Network
              </span>
              <div className="hidden md:block text-[10px] text-[var(--text-secondary)] tracking-wider">
                PVT. LIMITED
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-[var(--text-primary)] font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-[var(--accent-color)] transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-[var(--accent-color)] transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="hover:text-[var(--accent-color)] transition-colors"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-[var(--accent-color)] transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-[var(--accent-color)] transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className="hover:text-[var(--accent-color)] transition-colors"
              >
                Careers
              </Link>
            </li>
          </ul>

          {/* Right: CTA + Theme Toggle (desktop only) */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="px-4 py-2 rounded-full bg-[var(--accent-color)] text-white font-semibold shadow-md hover:shadow-lg transition-transform"
              >
                Contact Us
              </Link>
            </div>

            {/* Animated Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              whileTap={{ rotate: 180, scale: 0.9 }}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 220, damping: 14 }}
              className="text-xl p-2 rounded-full hover:bg-[var(--border-color)] transition relative"
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              {/* Light → Dark */}
              <motion.i
                key="moon"
                className="ri-moon-line dark:hidden"
                initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                style={{ color: "var(--text-primary)" }}
              />

              {/* Dark → Light */}
              <motion.i
                key="sun"
                className="ri-sun-line hidden dark:block"
                initial={{ opacity: 0, rotate: 90, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                style={{ color: "var(--text-primary)" }}
              />
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[var(--text-primary)] p-2 rounded"
              onClick={toggleMenu}
              aria-label="Open menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="md:hidden bg-[var(--bg-color)] dark:bg-[var(--bg-color)] border-t border-[var(--border-color)] animate-fadeIn"
            style={{ marginTop: 0 }}
          >
            <ul className="flex flex-col items-center py-4 gap-4 text-[var(--text-primary)] font-medium">
              <li>
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[var(--accent-color)]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[var(--accent-color)]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[var(--accent-color)]"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[var(--accent-color)]"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[var(--accent-color)]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[var(--accent-color)]"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-2 rounded-full bg-[var(--accent-color)] text-white font-semibold shadow-md hover:shadow-lg"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
