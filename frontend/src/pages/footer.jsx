import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import bg_footer from "../assets/images/bg_footer.webp";

export default function Footer() {
  return (
    <footer
      className="relative mt-20 border-t border-[var(--border-color)]"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-primary)"
      }}
    >
      {/* Background Image (keeps cinematic feel but theme compatible) */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(" + bg_footer + ")",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div>
          <img src="/public/logo.webp" alt="TP India Network" className="h-14 mb-4" />
          <p className="text-sm text-[var(--text-secondary)] leading-6 max-w-xs">
            TP India Network Pvt. Ltd. A premier film, digital marketing & video production powerhouse.
          </p>

          <div className="flex gap-4 mt-5 text-xl">
            <a href="https://www.instagram.com/tpindianetwork" target="_blank" className="hover:text-[var(--accent-color)]"><FaInstagram /></a>
            <a href="https://www.facebook.com/tpindianetwork/" target="_blank" className="hover:text-[var(--accent-color)]"><FaFacebook /></a>
            <a href="https://www.youtube.com/@tpindianetwork/featured" target="_blank" className="hover:text-[var(--accent-color)]"><FaYoutube/></a>
            <a href="https://www.linkedin.com/company/tpindianetwork/" target="_blank" className="hover:text-[var(--accent-color)]"><FaLinkedin /></a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Info</h3>
          <ul className="space-y-3 text-[var(--text-secondary)] text-sm">
            <li className="flex gap-3"><span>📍</span>502 5th Floor Royal Apartment, Lalbagh, Hazratganj Lucknow, India 226001</li>
            <li className="flex gap-3"><span>📞</span>+91 9932012125</li>
            <li className="flex gap-3"><span>✉️</span>info@tpindia.in</li>
            <li className="flex gap-3"><span>📧</span>tpindianetwork@gmail.com</li>
          </ul>
        </div>

        {/* Explore Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Explore Us</h3>
          <ul className="space-y-3 text-[var(--text-secondary)] text-sm">
            <li><Link to="/" className="hover:text-[var(--accent-color)]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[var(--accent-color)]">About Us</Link></li>
            <li><Link to="/services" className="hover:text-[var(--accent-color)]">Our Mission</Link></li>
            <li><Link to="/blog" className="hover:text-[var(--accent-color)]">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--accent-color)]">Contact</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-lg mb-4">Blog</h3>
          <p className="text-sm text-[var(--text-secondary)] max-w-xs">
            Get the latest updates via email. Unsubscribe anytime.
          </p>

          <div className="mt-4 flex rounded-lg overflow-hidden border border-[var(--border-color)] bg-[var(--bg-color)]">
            <input
              type="email"
              placeholder="Enter email"
              className="flex-1 px-3 py-2 bg-transparent text-[var(--text-primary)] text-sm outline-none"
            />
            <button className="px-4 bg-[var(--accent-color)] text-white text-sm">Send</button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-[var(--border-color)] py-4 text-center text-[var(--text-secondary)] text-sm">
        TP India Network Private Limited © 2025 — All Rights Reserved.

        <div className="mt-2 space-x-4">
          <Link to="/" className="hover:text-[var(--accent-color)]">Home</Link>
          <Link to="/services" className="hover:text-[var(--accent-color)]">Services</Link>
          <Link to="/portfolio" className="hover:text-[var(--accent-color)]">Portfolio</Link>
          <Link to="/blog" className="hover:text-[var(--accent-color)]">Blog</Link>
          <Link to="/about" className="hover:text-[var(--accent-color)]">About Us</Link>
        </div>
      </div>
    </footer>
  );
}
