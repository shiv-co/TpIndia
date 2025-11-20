import React from "react";
import { Link } from "react-router-dom";

// ===================== FOOTER (Cinematic Film-Agency Style) =====================
export default function Footer() {
  return (
    <footer className="relative text-white bg-black/95 mt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/assets/footer-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div>
          <img src="/assets/logo.png" alt="TP India Network" className="h-14 mb-4" />
          <p className="text-sm text-gray-300 leading-6 max-w-xs">
            TP India Network Pvt. Ltd. A premier film, digital marketing & video production powerhouse. Crafting compelling content.
          </p>

          <div className="flex gap-4 mt-5 text-xl">
            <a href="#" className="hover:text-[var(--accent-color)]"></a>
            <a href="#" className="hover:text-[var(--accent-color)]"></a>
            <a href="#" className="hover:text-[var(--accent-color)]"></a>
            <a href="#" className="hover:text-[var(--accent-color)]"></a>
            <a href="#" className="hover:text-[var(--accent-color)]"></a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Info</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex gap-3"><span>📍</span>502 5th Floor Royal Apartment, Lalbagh, Hazratganj Lucknow, India 226001</li>
            <li className="flex gap-3"><span>📞</span>+91 9932012125</li>
            <li className="flex gap-3"><span>✉️</span>info@tpindia.in</li>
            <li className="flex gap-3"><span>📧</span>tpindianetwork@gmail.com</li>
          </ul>
        </div>

        {/* Explore Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Explore Us</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li><a href="#home" className="hover:text-[var(--accent-color)]">Home</a></li>
            <li><a href="#about" className="hover:text-[var(--accent-color)]">About Us</a></li>
            <li><a href="#services" className="hover:text-[var(--accent-color)]">Our Mission</a></li>
            <li><a href="#blog" className="hover:text-[var(--accent-color)]">Blog</a></li>
            <li><a href="#contact" className="hover:text-[var(--accent-color)]">Contact</a></li>
          </ul>
        </div>

        {/* Blog / Newsletter */}
        <div>
          <h3 className="font-bold text-lg mb-4">Blog</h3>
          <p className="text-sm text-gray-300 max-w-xs">
            Get the latest updates via email. Don’t miss it. Unsubscribe anytime.
          </p>

          <div className="mt-4 flex bg-white/10 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter email"
              className="flex-1 px-3 py-2 bg-transparent text-white text-sm outline-none"
            />
            <button className="px-4 bg-[var(--accent-color)] text-white text-sm">Send</button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 py-4 text-center text-gray-400 text-sm">
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
