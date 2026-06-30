import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isMobilePricingOpen, setIsMobilePricingOpen] = useState(false);
  const pricingCloseTimer = useRef(null);
  const pricingMenuRef = useRef(null);

  const toggleMenu = () => setIsOpen((s) => !s);

  const clearPricingCloseTimer = () => {
    if (pricingCloseTimer.current) {
      clearTimeout(pricingCloseTimer.current);
      pricingCloseTimer.current = null;
    }
  };

  const openPricingMenu = () => {
    clearPricingCloseTimer();
    setIsPricingOpen(true);
  };

  const closePricingMenuWithDelay = () => {
    clearPricingCloseTimer();
    pricingCloseTimer.current = setTimeout(() => {
      setIsPricingOpen(false);
    }, 160);
  };

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");

    if (html.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (
        pricingMenuRef.current &&
        !pricingMenuRef.current.contains(event.target)
      ) {
        setIsPricingOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      clearPricingCloseTimer();
    };
  }, []);

  const topbarHeight = "var(--topbar-height, 2rem)";

  return (
    <>
      <div
        className="w-full fixed top-0 left-0 z-[60] backdrop-blur-xl transition-colors border-b-1 border-[var(--accent-color)]"
        style={{
          backgroundColor: "color-mix(in srgb, var(--bg-color) 80%, transparent)",
          color: "var(--topbar-text, var(--text-primary))",
          height: "var(--topbar-height, 2rem)",
        }}
      >
        <div className="max-w-7xl mx-auto h-full px-4  md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-6 text-xs md:text-xs lg:text-sm">
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

          <div className="flex items-center gap-4 text-base">
            <a
              href="https://www.instagram.com/tpindianetwork"
              target="_blank"
              className="hover:text-[var(--accent-color)]"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/tpindianetwork/"
              target="_blank"
              className="hover:text-[var(--accent-color)]"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.youtube.com/@tpindianetwork/featured"
              target="_blank"
              className="hover:text-[var(--accent-color)]"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com/company/tpindianetwork/"
              target="_blank"
              className="hover:text-[var(--accent-color)]"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

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
          <div className="flex items-center gap-3">
            <Link to="/">
              <img
                src="/logo.webp"
                alt="TP India Logo"
                className="h-14 w-14 md:h-16 md:w-16"
              />
            </Link>
            <div className="leading-tight">
              <Link to="/" className="font-bold text-lg md:text-xl tracking-tight text-[var(--text-primary)]">
                TP India Network
              </Link>
              <div className="hidden md:block text-[10px] text-[var(--text-secondary)] tracking-wider">
                PVT. LIMITED
              </div>
            </div>
          </div>

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
              <div
                ref={pricingMenuRef}
                className="relative group"
                onMouseEnter={openPricingMenu}
                onMouseLeave={closePricingMenuWithDelay}
              >
                <button
                  type="button"
                  onClick={() => {
                    clearPricingCloseTimer();
                    setIsPricingOpen((open) => !open);
                  }}
                  aria-expanded={isPricingOpen}
                  aria-haspopup="menu"
                  className="flex items-center gap-1 hover:text-[var(--accent-color)] transition-colors"
                >
                  Pricing
                  <ChevronDown
                    size={16}
                    className={`mt-[1px] transition-transform duration-200 ${
                      isPricingOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`absolute left-1/2 top-full z-30 w-60 -translate-x-1/2 pt-2 transition-all duration-200 ${
                    isPricingOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-1 opacity-0"
                  }`}
                >
                  <div className="rounded-2xl border border-[var(--border-color)] bg-[color-mix(in_srgb,var(--bg-color)_96%,transparent)] p-2 shadow-xl backdrop-blur-xl">
                    <Link
                      to="/pricing"
                      onClick={() => setIsPricingOpen(false)}
                      className="block rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] hover:bg-[var(--border-color)]/30"
                    >
                      Website Pricing
                    </Link>
                    <Link
                      to="/pricing-makeup"
                      onClick={() => setIsPricingOpen(false)}
                      className="mt-1 block rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] hover:bg-[var(--border-color)]/30"
                    >
                      Makeup Artist Pricing
                    </Link>
                  </div>
                </div>
              </div>
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
                to="/gallery"
                className="hover:text-[var(--accent-color)] transition-colors"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/rentals"
                className="hover:text-[var(--accent-color)] transition-colors"
              >
                Rentals
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="px-4 py-2 rounded-full bg-[var(--accent-color)] text-white font-semibold shadow-md hover:shadow-lg transition-transform"
              >
                Contact Us
              </Link>
            </div>

            <motion.button
              onClick={toggleTheme}
              whileTap={{ rotate: 180, scale: 0.9 }}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 220, damping: 14 }}
              className="text-xl p-2 rounded-full hover:bg-[var(--border-color)] transition relative"
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              <motion.i
                key="moon"
                className="ri-moon-line dark:hidden"
                initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                style={{ color: "var(--text-primary)" }}
              />

              <motion.i
                key="sun"
                className="ri-sun-line hidden dark:block"
                initial={{ opacity: 0, rotate: 90, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                style={{ color: "var(--text-primary)" }}
              />
            </motion.button>

            <button
              className="md:hidden text-[var(--text-primary)] p-2 rounded"
              onClick={toggleMenu}
              aria-label="Open menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            className="md:hidden bg-[var(--bg-color)] dark:bg-[var(--bg-color)] border-t border-[var(--border-color)] animate-fadeIn"
            style={{ marginTop: 0 }}
          >
            <ul className="flex flex-col items-center py-4 gap-4 text-[var(--text-primary)] font-medium">
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    setIsOpen(false);
                    setIsMobilePricingOpen(false);
                  }}
                  className="hover:text-[var(--accent-color)]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => {
                    setIsOpen(false);
                    setIsMobilePricingOpen(false);
                  }}
                  className="hover:text-[var(--accent-color)]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  onClick={() => {
                    setIsOpen(false);
                    setIsMobilePricingOpen(false);
                  }}
                  className="hover:text-[var(--accent-color)]"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setIsMobilePricingOpen((open) => !open)}
                  className="flex items-center gap-2 hover:text-[var(--accent-color)]"
                  aria-expanded={isMobilePricingOpen}
                >
                  Pricing
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${isMobilePricingOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </li>
              {isMobilePricingOpen ? (
                <li className="w-full px-6">
                  <div className="rounded-2xl border border-[var(--border-color)] bg-[color-mix(in_srgb,var(--bg-color)_97%,transparent)] p-2">
                    <Link
                      to="/pricing"
                      onClick={() => {
                        setIsOpen(false);
                        setIsMobilePricingOpen(false);
                      }}
                      className="block rounded-xl px-4 py-3 text-center hover:text-[var(--accent-color)]"
                    >
                      Website Pricing
                    </Link>
                    <Link
                      to="/pricing-makeup"
                      onClick={() => {
                        setIsOpen(false);
                        setIsMobilePricingOpen(false);
                      }}
                      className="block rounded-xl px-4 py-3 text-center hover:text-[var(--accent-color)]"
                    >
                      Makeup Artist Pricing
                    </Link>
                  </div>
                </li>
              ) : null}
              <li>
                <Link
                  to="/blog"
                  onClick={() => {
                    setIsOpen(false);
                    setIsMobilePricingOpen(false);
                  }}
                  className="hover:text-[var(--accent-color)]"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => {
                    setIsOpen(false);
                    setIsMobilePricingOpen(false);
                  }}
                  className="hover:text-[var(--accent-color)]"
                >
                  About Us
                </Link>
              </li>
                   <li>
                <Link
                  to="/rentals"
                  onClick={() => {
                    setIsOpen(false);
                    setIsMobilePricingOpen(false);
                  }}
                  className="hover:text-[var(--accent-color)]"
                >
                  Rentals
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  onClick={() => {
                    setIsOpen(false);
                    setIsMobilePricingOpen(false);
                  }}
                  className="hover:text-[var(--accent-color)]"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => {
                    setIsOpen(false);
                    setIsMobilePricingOpen(false);
                  }}
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
