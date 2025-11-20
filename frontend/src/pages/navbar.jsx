import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[var(--bg-color)]/80 dark:bg-[var(--bg-color)]/90 border-b border-[var(--border-color)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.webp" alt="TP India Logo" className="h-16 w-16" />
          <div>
            <span className="font-bold hidden md:block text-xl tracking-tight text-[var(--text-primary)]">
            TP India Network
          </span>
          <span className=" hidden md:block text-xs tracking-widest text-center text-[var(--text-primary)]">PVT. LIMITED</span>
          </div>
          
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-[var(--text-primary)] font-medium">
          <li>
            <Link to="/" className="hover:text-[var(--accent-color)]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-[var(--accent-color)]">
              Services
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-[var(--accent-color)]">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-[var(--accent-color)]">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[var(--accent-color)]">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/careers" className="hover:text-[var(--accent-color)]">
              Careers
            </Link>
          </li>
        </ul>

        {/* RIGHT SIDE: Theme Button + Contact */}
        {/* Animated Theme Toggle Button */}
        <motion.button
          onClick={toggleTheme}
          whileTap={{ rotate: 180, scale: 0.9 }}
          whileHover={{ scale: 1.15 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="text-xl p-2 rounded-full hover:bg-[var(--border-color)] transition relative"
        >
          {/* Light → Dark */}
          <motion.i
            key="moon"
            className="ri-moon-line dark:hidden"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.4 }}
          />

          {/* Dark → Light */}
          <motion.i
            key="sun"
            className="ri-sun-line hidden dark:block"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.4 }}
          />
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--text-primary)]"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[var(--bg-color)] dark:bg-[var(--bg-color)] border-t border-[var(--border-color)] animate-fadeIn">
          <ul className="flex flex-col items-center py-4 gap-4 text-[var(--text-primary)] font-medium">
            <li>
              <Link to="/" className="hover:text-[var(--accent-color)]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[var(--accent-color)]">
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="hover:text-[var(--accent-color)]"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-[var(--accent-color)]">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[var(--accent-color)]">
                About Us
              </Link>
            </li>
             <li>
              <Link to="/careers" className="hover:text-[var(--accent-color)]">
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="px-5 py-2 rounded-full bg-[var(--accent-color)] text-white font-semibold shadow-md hover:shadow-lg"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
