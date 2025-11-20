import React from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import Garima from "../assets/crew_img/Garima_Mishra.webp";
import Harshit from "../assets/crew_img/Harshit.webp";
import Kshitiz from "../assets/crew_img/Khitiz_mahajan.webp";
import Bhanu from "../assets/crew_img/Bhanu.webp";
import Amit from "../assets/crew_img/Amit_gupta.webp";
import Anubhav from "../assets/crew_img/Anubhav_Patel.webp";
import Anju from "../assets/crew_img/anju.webp";
import Saurab from "../assets/crew_img/Saurab.webp";
import Shivam from "../assets/crew_img/Shivam_singh.webp";
import Umesh from "../assets/crew_img/Umesh_Tiwari.webp";
import Nidhi from "../assets/crew_img/Nidhi_Mishra.webp";
import Himanshu from "../assets/crew_img/Himanshu.webp";
import Sudeep from "../assets/crew_img/sudeep_Tiwari.webp";
import Rajan from "../assets/crew_img/Rajan.webp";
import Akshat from "../assets/crew_img/akshat_Agarwal.webp";
import Kudrat from "../assets/crew_img/Kudrat.webp";
import Teepu from "../assets/crew_img/Teepu_Sultan.webp";
import Kapil from "../assets/crew_img/Kapil.webp";

const crew = [
  {
    name: "Akshat Agrawal",
    role: "Director/Fiance Head/COO",
    img: Akshat,
  },
  {
    name: "Syed Kudrat Ali  ",
    role: "Director/Creative Producer/CEO",
    img: Kudrat,
  },
  {
    name: "Nidhi Mishra",
    role: "Director / Marketing Head",
    img: Nidhi,
  },
  {
    name: "Bhanu Pratap",
    role: "Camera Assistant",
    img: Bhanu,
  },
  {
    name: "Harshit Roy Choudhury",
    role: "Creative Head / Photographer",
    img: Harshit,
  },
  {
    name: "Garima Mishra",
    role: "Anchor / Social Media Manager",
    img: Garima,
  },
  {
    name: "Kshitiz Mahazan",
    role: "Cinematographer",
    img: Kshitiz,
  },
  {
    name: "Amit Gupta",
    role: "Photographer ",
    img: Amit,
  },
  {
    name: "Anubhav Patel",
    role: "Cinematographer",
    img: Anubhav,
  },
  {
    name: "Anju",
    role: "Production Head /Video Editor",
    img: Anju,
  },
  {
    name: "Saurabh Singh",
    role: "Social Media Strategist",
    img: Saurab,
  },
  {
    name: "Shivam Singh",
    role: "Full Stack Developer",
    img: Shivam,
  },
  {
    name: "Umesh Tiwari ",
    role: "Camera Operator",
    img: Umesh,
  },

  {
    name: "Himanshu Goswami",
    role: "Cinematographer",
    img: Himanshu,
  },
  {
    name: "Rajan Mishra",
    role: "DOP",
    img: Rajan,
  },
  {
    name: "Sudeep Tiwari",
    role: "Pohotographer",
    img: Sudeep,
  },

  {
    name: "Teepu Sultan",
    role: "Video Editor/ Camera Operator",
    img: Teepu,
  },
  {
    name: "Kapil Bharti",
    role: "Video Editor",
    img: Kapil,
  },
];

export default function AboutUs() {
  return (
    <div className="bg-[var(--bg-color)] text-[var(--text-primary)]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <LazyLoadImage
          src="/assets/about/hero.jpg"
          effect="blur"
          className="w-full h-full object-cover opacity-70"
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl font-bold text-white"
        >
          About Us
        </motion.h1>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold mb-8"
        >
          We Make Only Authentic Visual Experiences
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-lg leading-relaxed text-[var(--text-secondary)] max-w-4xl"
        >
          TP India Network Pvt. Ltd. stands as India’s premier film, digital
          marketing, and video production powerhouse. Our ethos revolves around
          harnessing creative insights to craft compelling content that
          resonates deeply with audiences. We strive to deliver tangible brand
          value and meaningful business growth.
        </motion.p>
      </section>

      {/* ================= IMAGE + TEXT SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 py-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <LazyLoadImage
            src="/assets/about/experience.jpg"
            effect="blur"
            className="rounded-lg shadow-xl w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            10+ Years Working Experience
          </h2>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            Through innovation and dedication, we build lasting connections with
            our clients. Our approach isn’t merely transactional; it’s about
            understanding needs, exceeding expectations, and fostering growth.
          </p>

          <Link
            to="/contact"
            className="mt-4 border text-xl font-bold text-center border-[var(--accent-color)] px-4 py-3 rounded-lg text-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-white transition-all"
          >
            CONTACT US
          </Link>
        </motion.div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {[
            { num: "3,500", label: "Successful Projects" },
            { num: "465", label: "Happy Clients" },
            { num: "25", label: "Awards Winning" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              <p className="text-4xl font-bold text-[var(--accent-color)]">
                {item.num}
              </p>
              <p className="mt-2 text-lg">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= OUR CREW SECTION ================= */}
      <section className="py-12 max-w-8xl mx-auto px-6 ">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-4">
          Our People
        </h2>
        <div className="mx-auto w-32 border-b-2 border-[var(--accent-color)] mb-16"></div>

        {/* HORIZONTAL SLIDE ANIMATION */}

        <div className="relative w-full overflow-hidden py-6">
          <motion.div
            animate={{ x: ["0%", "-320%"] }}
            transition={{
              duration: 28,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex gap-14 whitespace-nowrap"
          >
            {/* ORIGINAL CREW */}
            {crew.map((member, index) => (
              <div
                key={index}
                className="inline-flex min-w-[280px] flex-col items-center"
              >
                <LazyLoadImage
                  src={member.img}
                  effect="blur"
                  className="w-72 h-72 object-cover rounded-full border-4 border-[var(--accent-color)] shadow-lg"
                />
                <h3 className="mt-4 font-bold text-xl">{member.name}</h3>
                <p className="text-[var(--text-secondary)]">{member.role}</p>
              </div>
            ))}

            {/* DUPLICATE LIST */}
            {crew.map((member, index) => (
              <div
                key={"dup-" + index}
                className="inline-flex min-w-[280px] flex-col items-center"
              >
                <LazyLoadImage
                  src={member.img}
                  effect="blur"
                  className="w-72 h-72 object-cover rounded-full border-4 border-[var(--accent-color)] shadow-lg"
                />
                <h3 className="mt-4 font-bold text-xl">{member.name}</h3>
                <p className="text-[var(--text-secondary)]">{member.role}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
