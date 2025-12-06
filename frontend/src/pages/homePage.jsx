import React, { useState } from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/hero.jpg";
import { Link } from "react-router-dom";
import what_we from "../assets/images/what_we.webp";
import product1 from "../assets/images/product_img.webp";
import product2 from "../assets/images/product_img2.webp";
import product3 from "../assets/images/product_img3.webp";
import product4 from "../assets/images/product_img4.webp";
import WhatsAppButton from "../components/WhatsAppButton";
import GetQuoteBtn from "../components/getQuoteBtn";



function PlayIcon({ className = "w-10 h-10" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="11"
        stroke="white"
        strokeOpacity="0.12"
        strokeWidth="2"
      />
      <path d="M10 8L16 12L10 16V8Z" fill="white" />
    </svg>
  );
}

function Hero() {
  return (
    <header
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-top"
        style={{ backgroundImage: `url(${heroImg})` }}
        initial={{ scale: 1.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <p className="text-sm tracking-widest uppercase mb-4 text-[var(--text-secondary)]">
            Professional Services
          </p>

          <h1 className="font-extrabold text-5xl lg:text-6xl text-white leading-tight">
            We Turn <span className="block">Experiences Into</span>{" "}
            <span className="block">Solutions</span>
          </h1>

          <p className="mt-6 text-[var(--text-secondary)] max-w-xl">
            TP India Network creates cinematic stories & visual content that
            connects deeply.
          </p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          > <div className="mt-6 ">
            <Link
              to="/get-quote"
              className="px-6 py-3 rounded-full bg-[var(--accent-color)] text-white shadow-md hover:scale-[1.05] transition-transform"
            >
              Get a Quote
            </Link>
            </div>

            <a
              href="https://youtu.be/kOveEiMFESU"
              target="_blank"
              className="flex items-center gap-3 text-white/90 hover:text-white"
            >
              <span className="bg-black/30 py-3 rounded-full">
                <PlayIcon className="w-12 h-12 hover:scale-115" />
              </span>
              Watch Showreel
            </a>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}

const fadeIn = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};


function WhatWeDo() {
  const services = [
    {
      title: "Product Photo Advertising Services",
      desc: "High-conversion imagery designed for products, catalogs and online retail.",
    },
    {
      title: "Social Media Content Creation",
      desc: "Short-form videos, reels, branded storytelling and digital-first edits.",
    },
    {
      title: "Company Profile Photo & Videography",
      desc: "Corporate films, brand stories and company profile visuals.",
    },
    {
      title: "Digital Marketing Video Campaign",
      desc: "Performance-driven video campaigns crafted for brand growth.",
    },
  ];

  return (
    <section className="py-20 bg-[var(--bg-color)]" id="what-we-do">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Image Cinematic Zoom */}
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={what_we}
            alt="TP India On-field Shooting"
            className="w-full h-full object-cover rounded-xl shadow-2xl"
          />
        </motion.div>

        {/* Right Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-wider text-[var(--text-secondary)] mb-3 text-center lg:text-left">
            What We Do
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)] leading-tight mb-10 text-center lg:text-left">
            We Make Only Authentic <br /> Visual Experiences
          </h2>

          {/* Service List with Cinematic Hover Effect */}
          <div className="space-y-6 mt-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                className="group cursor-pointer border-b border-[var(--border-color)] pb-4 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                {/* Title + Arrow */}
                <div className="flex justify-between items-center">
                  <h3 className="text-lg sm:text-xl font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors duration-300">
                    {s.title}
                  </h3>

                  <motion.span
                    className="text-[var(--text-secondary)]"
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    ➜
                  </motion.span>
                </div>

                {/* Hover Reveal Description */}
                <p className="text-sm text-[var(--text-secondary)] mt-2 max-w-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function QuickQuote() {
  return (
    <motion.section
      className="py-16"
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
            Get Your Quote and Start Your Stories
          </h2>
          <p className="mt-3 text-[var(--text-secondary)]">
            Let us create something cinematic for your brand.
          </p>
        </div>
        <Link
          to="/get-quote"
          className="px-6 py-3 border border-[var(--accent-color)] rounded-lg hover:bg-[var(--accent-color)] hover:text-white"
        >
          Get Quotes Now
        </Link>
      </div>
    </motion.section>
  );
}

function ServicesGrid() {
  const services = [
    { title: "Product Photo Advertising", image: product1 },
    { title: "Digital Marketing Videos", image: product2 },
    { title: "Corporate Films", image: product3 },
    { title: "Social Media Content Creation", image: product4 },
  ];

  return (
    <section className="py-20 bg-black/5 dark:bg-black/95">
      <div className="max-w-7xl mx-auto px-6">
        <h4 className="text-center text-[var(--text-primary)] text-3xl font-bold mb-10">
          Service We Provide
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="relative rounded-xl overflow-hidden shadow-xl group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <img
                src={service.image}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <h5 className="text-white text-xl font-semibold">
                  {service.title}
                </h5>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [index, setIndex] = useState(0);
  const testimonials = [
    {
      name: "Sachin Gulati",
      title: "GLRA India Foundation",
      text: "TP India Network is a documentary production powerhouse! Their dedication to storytelling is evident in every project they undertake. With a keen eye for capturing real-life moments and a knack for weaving narratives, they deliver documentaries that leave a lasting impact. Professionalism, creativity, and excellence define their work. Highly recommend TP India Network for compelling and thought-provoking documentaries!",
      avatar: "/assets/client1.jpg",
    },
    {
      name: "CA Aleena Rais",
      title: "CA, Influencer",
      text: "TP India Network exceeded my expectations with their exceptional video editing services. Their attention to detail and creativity truly brought our project to life. From start to finish, the team was professional, responsive, and incredibly talented. If you're looking for top-notch editing for your film or documentary, look no further than TP India Network!",
      avatar: "/assets/client2.jpg",
    },
      {
      name: "Syed Abbas Raza Rizvi",
      title: "Inglorious Films",
      text: "TP India Network stands as a beacon of creativity and excellence in film and documentary production. With a portfolio showcasing thought-provoking narratives and cinematic brilliance, they redefine storytelling. Their commitment to professionalism and client satisfaction ensures seamless experiences. For unparalleled quality and innovation in content creation, TP India Network is the ultimate choice. Highly recommended.",
      avatar: "/assets/client2.jpg",
    },
      {
      name: "Harshit Srivastava",
      title: "Brand Manager",
      text: "TP India Network Pvt Ltd provides exceptional video production services with a skilled team and state-of-the-art technology. Their attention to detail, creativity, and timely delivery make them a top choice for high-quality, professional video projects. Highly recommended.",
      avatar: "/assets/client2.jpg",
    },
     {
      name: "Aisha Khatoon",
      title: "Brand Manager",
      text: "TP India Network Pvt Ltd excels in video production. Sanatkada and Aisha Khatoon praise their creativity, professionalism, and timely delivery. The team's attention to detail and use of advanced technology ensure high-quality results. Highly recommended for outstanding video projects.",
      avatar: "/assets/client2.jpg",
    },
  ];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16" style={{ backgroundColor: "var(--bg-color)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            {/* <p className="text-sm text-[var(--text-secondary)]">Testimonials</p> */}
            <h3 className="text-4xl font-extrabold text-[var(--text-primary)] p-2">
              What Our Clients Say
            </h3>
            <p className="text-sm  font-medium text-[var(--text-secondary)] mt-2">
              The Voice of Satisfaction. Hear Their Stories, Feel Their
              Satisfaction. Experience satisfaction through the tales of those
              who found contentment. Their voices resonate with fulfilment,
              inviting you to immerse yourself and share in their journey of
              satisfaction.
            </p>
          </div>

          <div className="md:col-span-2 bg-black/95 dark:bg-black/90 p-8 rounded-lg text-white">
            <p className="text-lg">"{testimonials[index].text}"</p>

            <div className="mt-6 flex items-center gap-4">
              <img
                src={testimonials[index].avatar}
                alt="avatar"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold">{testimonials[index].name}</div>
                <div className="text-sm text-[var(--text-secondary)]">
                  {testimonials[index].title}
                </div>
              </div>

              <div className="ml-auto flex gap-2">
                <button onClick={prev} className="p-2 rounded-full bg-white/10">
                  ◀
                </button>
                <button onClick={next} className="p-2 rounded-full bg-white/10">
                  ▶
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceIndex() {
  const categories = [
    {
      title: "Video Production",
      items: ["Corporate Films", "Ad Films", "Documentary", "Music Video"],
    },
    {
      title: "Event Services",
      items: ["Video & Photography", "LED Wall", "Plasma", "Sound & Light"],
    },
    {
      title: "Web Design",
      items: ["Web Portal", "Artist Portfolio", "eCommerce Website"],
    },
    {
      title: "Lead Generation",
      items: ["Email marketing", "SEO", "Social Media"],
    },
  ];

  return (
    <section className="py-16 bg-black/5 dark:bg-black/95">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h3
          className="text-center text-4xl font-extrabold text-[var(--text-primary)] mb-14"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Service Index
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              className="group p-6 rounded-2xl shadow-xl bg-white dark:bg-black/80 border border-[var(--border-color)] relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              <div className="absolute inset-0 bg-[var(--accent-color)] opacity-0 group-hover:opacity-10 transition" />

              <h4 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                {cat.title}
              </h4>

              <ul className="space-y-2 text-[var(--text-secondary)] mb-4">
                {cat.items.map((it, j) => (
                  <li
                    key={j}
                    className="group-hover:text-[var(--text-primary)] transition"
                  >
                    • {it}
                  </li>
                ))}
              </ul>

              <button className="mt-3 px-4 py-2 rounded-lg border border-[var(--accent-color)] text-[var(--accent-color)] font-medium group-hover:bg-[var(--accent-color)] group-hover:text-white transition">
                Explore
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="text-[var(--text-primary)] bg-[var(--bg-color)]">
      <Hero />
      <WhatWeDo />
      <ServicesGrid />
      <QuickQuote />
      <Testimonials />
      <ServiceIndex />
      <WhatsAppButton />
      <GetQuoteBtn />

      {/* Final CTA */}
      <section
        className="py-16 flex items-center justify-center"
        style={{ backgroundColor: "var(--bg-color)" }}
      >
        <div className="max-w-3xl text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to start your story?
          </h3>
          <p className="text-[var(--text-secondary)] mb-6">
            Contact TP India Network — we’ll plan, shoot and deliver with care.
          </p>
          <Link
            to="/contact"
            className="px-6 py-3 bg-[var(--accent-color)] text-white rounded-full"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
