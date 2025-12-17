// src/pages/DocumentaryLanding.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useMeta } from "../hooks/useMeta";

// Replace these imports with your real images (put them in src/assets or public/assets)
import docuHero from "../assets/images/documen.webp";
import docSample1 from "../assets/images/doc1.webp";
import docSample2 from "../assets/images/doc2.webp";
import docSample3 from "../assets/images/doc3.webp";
import clientA from "../assets/images/gallery2.webp";
import clientB from "../assets/images/gallery2.webp";
import clientC from "../assets/images/gallery2.webp";
import directorPhoto from "../assets/crew_img/kudrat.webp";

// import docuHero from "../assets/documentary-hero.webp";
// import docSample1 from "../assets/doc-sample-1.webp";
// import docSample2 from "../assets/doc-sample-2.webp";
// import docSample3 from "../assets/doc-sample-3.webp";
// import clientA from "../assets/client-a.webp";
// import clientB from "../assets/client-b.webp";
// import clientC from "../assets/client-c.webp";
// import directorPhoto from "../assets/director.webp";
export default function DocumentaryLanding() {
  useMeta({
    title: "Documentary Filmmaking TP India Network | Cinematic Non-Fiction",
    description:
      "TP India Network crafts cinematic documentaries that move audiences. Research-led, beautifully shot and widely distributed.",
    keywords:
      "documentary filmmaking, documentary production, non-fiction films, tp india network, cinematic documentaries, film production india",
    image: "https://tpindia.in/assets/documentary.webp",
    url: "https://tpindia.in/documentary",
  });

  const serviceCards = [
    {
      id: 1,
      title: "UPITS 2025 Documentary",
      detail:
        "Research-driven documentaries that illuminate culture, people and purpose crafted with journalistic care and cinematic vision.",
      link: "https://www.youtube.com/watch?v=Sy0r-COBDvY&list=PLH3Vw0GwKudHF1tUark0lNG0tkhjwRpMW&index=6&pp=gAQBiAQB",
      img: docSample1,
    },
    {
      id: 2,
      title: "MADHYAMIK SHIKSHA Documentary",
      detail:
        "MADHYAMIK SHIKSHA Documentary is a Research-driven documentaries that illuminate culture, people and purpose crafted with journalistic care and cinematic vision.",
      link: "https://www.youtube.com/watch?v=c7H6DaPdwuU&list=PLH3Vw0GwKudHF1tUark0lNG0tkhjwRpMW&index=4&pp=gAQBiAQB",
      img: docSample2,
    },
    {
      id: 3,
      title: "Khumb Mela Documentary",
      detail:
        "Khumb Mela Documentary is a Research-driven documentaries that illuminate culture, people and purpose crafted with journalistic care and cinematic vision.",
      link: "https://www.youtube.com/watch?v=4BG5xEiHM_4&list=PLH3Vw0GwKudHF1tUark0lNG0tkhjwRpMW&index=13&pp=gAQBiAQB",
      img: docSample3,
    },
  ];

  const specialties = [
    {
      title: "Brand Documentaries",
      desc: "Human-first films to communicate brand legacy.",
    },
    {
      title: "Impact & NGO Films",
      desc: "Stories that raise awareness and drive donations.",
    },
    {
      title: "Founder & Leadership Films",
      desc: "Intimate portraits for leadership and culture.",
    },
    {
      title: "Cultural & Travel Films",
      desc: "Authentic visuals that preserve places and people.",
    },
  ];

  const faqs = [
    {
      q: "How long does a documentary shoot take?",
      a: "Typical small projects take 3–6 weeks of production + 2–6 weeks post depending on scope. Larger features vary.",
    },
    {
      q: "Can you handle research & scripting?",
      a: "Yes — we offer end-to-end research, scripting, interview prep, and release management.",
    },
    {
      q: "Do you score and mix audio?",
      a: "We provide sound design, composer-driven scoring and final deliverables optimized for festival, TV and social.",
    },
  ];

  return (
    <main className="bg-[var(--bg-color)] text-[var(--text-primary)]">
      {/* HERO */}
      <section className="relative h-[80vh] md:h-[88vh] overflow-hidden flex items-center">
        <motion.img
          src={docuHero}
          alt="Documentary hero"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/90" />

        {/* subtle floating shapes */}
        <motion.div
          aria-hidden
          className="absolute -left-28 top-12 w-72 h-72 rounded-full bg-[var(--accent-color)]/20 blur-3xl"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -right-20 bottom-12 w-56 h-56 rounded-full bg-[var(--accent-color)]/16 blur-3xl"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 0.95, y: 0 }}
            transition={{ duration: 0.8 }}
            className="tracking-widest uppercase text-xs md:text-sm text-[var(--text-secondary)] mb-4"
          >
            TP India Network • Documentary Filmmaking
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
          >
            We turn real stories into cinematic films{" "}
            <span className="text-[var(--accent-color)]">
              true, timeless, unforgettable
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 0.95, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="mt-6 max-w-2xl mx-auto text-white/80"
          >
            From deep research and interviews to cinematic grading and sound
            design — we build documentaries that create impact and linger in
            memory.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/get-quote?service=documentary"
              className="px-6 py-3 rounded-full bg-[var(--accent-color)] text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Start Your Documentary
            </Link>

            <Link
              to="/portfolio"
              className="px-6 py-3 rounded-full border border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--accent-color)] hover:text-white transition"
            >
              View Our Films
            </Link>
          </motion.div>

          {/* logos */}
          <motion.div
            className="mt-10 flex items-center gap-6 justify-center flex-wrap text-sm text-[var(--text-secondary)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <img
              src={clientA}
              alt="client"
              className="h-8 max-w-[120px] object-contain grayscale"
              loading="lazy"
            />
            <img
              src={clientB}
              alt="client"
              className="h-8 max-w-[120px] object-contain grayscale"
              loading="lazy"
            />
            <img
              src={clientC}
              alt="client"
              className="h-8 max-w-[120px] object-contain grayscale"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl font-bold text-center mb-4"
        >
          Why Documentary Films?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center text-[var(--text-secondary)] max-w-3xl mx-auto mb-8"
        >
          Documentaries reveal truth — they build trust, move audiences and
          become cornerstone assets for campaigns, fundraising and identity.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 12, opacity: 0 }}
            className="p-6 rounded-xl border border-[var(--border-color)] text-center bg-black/5"
          >
            <div className="text-3xl mb-3">🎬</div>
            <h4 className="font-semibold mb-2">Authenticity</h4>
            <p className="text-sm text-[var(--text-secondary)]">
              Real voices, real impact — authenticity is our core.
            </p>
          </motion.div>
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 12, opacity: 0 }}
            className="p-6 rounded-xl border border-[var(--border-color)] text-center bg-black/5"
          >
            <div className="text-3xl mb-3">📈</div>
            <h4 className="font-semibold mb-2">Performance</h4>
            <p className="text-sm text-[var(--text-secondary)]">
              Films engineered to perform across platforms & festivals.
            </p>
          </motion.div>
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 12, opacity: 0 }}
            className="p-6 rounded-xl border border-[var(--border-color)] text-center bg-black/5"
          >
            <div className="text-3xl mb-3">🧭</div>
            <h4 className="font-semibold mb-2">Research</h4>
            <p className="text-sm text-[var(--text-secondary)]">
              We undertake deep research to shape the narrative arc.
            </p>
          </motion.div>
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 12, opacity: 0 }}
            className="p-6 rounded-xl border border-[var(--border-color)] text-center bg-black/5"
          >
            <div className="text-3xl mb-3">🎧</div>
            <h4 className="font-semibold mb-2">Sound & Score</h4>
            <p className="text-sm text-[var(--text-secondary)]">
              Original score & mixing for emotional resonance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SPECIALIZATIONS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl font-bold text-center mb-8"
        >
          Our Specializations
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specialties.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="p-6 rounded-xl border border-[var(--border-color)] flex gap-6 items-start bg-black/5"
            >
              <div className="text-3xl mt-1">🎥</div>
              <div>
                <h4 className="font-semibold">{s.title}</h4>
                <p className="text-[var(--text-secondary)] text-sm">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED FILMS / GALLERY */}
      <section id="work" className="max-w-7xl mx-auto px-6 py-16">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl font-bold text-center mb-8"
        >
          Our Documentaries
        </motion.h3>

        <div className="grid gap-10 md:grid-cols-3">
          {serviceCards.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="
              group relative rounded-2xl overflow-hidden cursor-pointer
              bg-[var(--card-bg,rgba(0,0,0,0.25))] border border-[var(--border-color)]
              shadow-xl backdrop-blur-xl transition-all
            "
            >
              {/* IMAGE BLOCK */}
              <div className="relative h-44 w-full overflow-hidden">
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />

                {/* Glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60 opacity-80" />

                {/* Accent light glow on hover */}
                <div
                  className="
                absolute inset-0 opacity-0 group-hover:opacity-20
                bg-[var(--accent-color)] blur-2xl transition duration-500
              "
                ></div>
              </div>

              {/* CONTENT */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  {item.title}
                </h3>

                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                  {item.detail}
                </p>

                <Link
                  to={item.link}
                  target="_blank"
                  className="
                  inline-flex items-center gap-2 font-semibold 
                  text-[var(--accent-color)] group-hover:gap-3 transition
                "
                >
                  Learn More →
                </Link>
              </div>

              {/* bottom accent strip */}
              <div
                className="
                absolute bottom-0 left-0 right-0 h-[2px]
                bg-gradient-to-r from-transparent via-[var(--accent-color)]/60 to-transparent
              "
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* DIRECTOR NOTE */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="rounded-2xl overflow-hidden border border-[var(--border-color)]">
            <LazyLoadImage
              src={directorPhoto}
              alt="director"
              effect="blur"
              className="w-96 h-96 object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">
              A Note From Our Director
            </h3>
            <p className="text-[var(--text-secondary)] italic mb-4">
              "We believe documentary filmmaking is an act of listening. We
              research deeply, we listen to our subjects, and we craft films
              that honor truth with cinematic craft."
            </p>
            <p className="text-[var(--text-secondary)]">
              — Syed Kudrat Ali, Director
            </p>

            <div className="mt-6">
              <Link
                to="/get-quote?service=documentary"
                className="px-5 py-3 rounded-full bg-[var(--accent-color)] text-white"
              >
                Start Your Film
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-center mb-6"
        >
          What Clients Say
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.blockquote
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-xl border border-[var(--border-color)] bg-black/5"
          >
            <p className="italic text-[var(--text-secondary)]">
              "TP India captured our mission with sensitivity and cinematic
              beauty. The film shaped our fundraising campaign."
            </p>
            <div className="mt-4 font-semibold">
              — Ummeed Welfare NGO Partner
            </div>
          </motion.blockquote>

          <motion.blockquote
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.06 }}
            className="p-6 rounded-xl border border-[var(--border-color)] bg-black/5"
          >
            <p className="italic text-[var(--text-secondary)]">
              "A deeply professional team — research, shooting and delivery were
              flawless."
            </p>
            <div className="mt-4 font-semibold">
              — Koshala literature Festival Organizer
            </div>
          </motion.blockquote>

          <motion.blockquote
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="p-6 rounded-xl border border-[var(--border-color)] bg-black/5"
          >
            <p className="italic text-[var(--text-secondary)]">
              "The film moved our audience to action and brought us new
              partners."
            </p>
            <div className="mt-4 font-semibold">— Inglourious Films</div>
          </motion.blockquote>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-center mb-6"
        >
          FAQ
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="p-4 rounded-lg border border-[var(--border-color)] bg-black/5"
            >
              <summary className="font-semibold cursor-pointer">{f.q}</summary>
              <p className="mt-2 text-[var(--text-secondary)]">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* LEAD CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-black/10 border border-[var(--border-color)] rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-1 gap-4 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Ready to make a film that matters?
              </h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Tell us your story and we'll propose a creative roadmap and
                quote.
              </p>
              <div className="flex gap-3">
                <Link
                  to="/get-quote?service=documentary"
                  className="px-5 py-3 rounded-full bg-[var(--accent-color)] text-white font-semibold"
                >
                  Get a Proposal
                </Link>
                <a
                  href="mailto:tpindianetwork.in@gmail.com"
                  target="_blank"
                  className="px-5 py-3 rounded-full border border-[var(--border-color)]"
                >
                  Email Us
                </a>
              </div>
            </div>

            {/* <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Demo: form submitted — connect your backend.");
              }}
            >
              <input
                type="text"
                placeholder="Your name"
                required
                className="w-full px-4 py-2 rounded border border-[var(--border-color)] bg-transparent outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-4 py-2 rounded border border-[var(--border-color)] bg-transparent outline-none"
              />
              <input
                type="text"
                placeholder="Organization / Role (optional)"
                className="w-full px-4 py-2 rounded border border-[var(--border-color)] bg-transparent outline-none"
              />
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-[var(--accent-color)] text-white w-full"
                >
                  Request Proposal
                </button>
              </div>
            </form> */}
          </div>
        </motion.div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-12 border-t border-[var(--border-color)]">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold">Let’s bring your story to the world.</h4>
            <p className="text-[var(--text-secondary)]">
              We’re ready tell us where to start.
            </p>
          </div>
          <div>
            <Link
              to="/get-quote?service=documentary"
              className="px-5 py-3 rounded-full bg-[var(--accent-color)] text-white"
            >
              Start your film
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
