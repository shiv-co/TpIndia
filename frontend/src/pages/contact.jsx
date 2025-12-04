import { motion } from "framer-motion";
import WhatsAppButton from "../components/WhatsAppButton";
import { href } from "react-router-dom";
import ContactForm from "../pages/contactForm.jsx";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-primary)] pt-32 pb-24 px-6">
      {/* HERO TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Let’s Create Something <br />
          <span className="text-[var(--accent-color)]">
            Extraordinary Together
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-4 max-w-2xl mx-auto text-[var(--text-secondary)]"
        >
          Whether it’s filming, events, branding, or digital storytelling — we
          are ready to collaborate.
        </motion.p>
      </motion.div>

      {/* CONTACT INFO + FORM GRID */}
      <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
        {/* LEFT CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          {[
            {
              label: "📞 Phone",
              value: "+91 9932012125",
              href: "tel:+919932012125",
            },
            {
              label: "📧 Email",
              value: "tpindianetwork@gmail.com",
              href: "mailto:tpindianetwork@gmail.com",
            },
            {
              label: "📧 Alternate Email ",
              value: "info@tpindia.in",
              href: "mailto:info@tpindia.in",
            },

            {
              label: "📍 Address",
              value:
                "502 5th Floor, Royal Apartment, Lalbagh, Hazratganj, Lucknow, India 226001",
              href: "https://maps.app.goo.gl/6HEwmpzLaug1M1mh8", // Replace XYZ with actual Google Maps link
            },
            {
              label: "⏰ Open Hours",
              value: "Mon – Sat : 10.00 AM – 8.00 PM",
              href: "#",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-color)]/40 backdrop-blur-md hover:border-[var(--accent-color)] transition"
            >
              <p className="text-lg font-semibold">{item.label}</p>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] mt-1  hover:underline underline-offset-4 decoration-[var(--accent-color)] transition"
              >
                {item.value}
              </a>
            </motion.div>
          ))}

          {/* SOCIAL ICONS */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-semibold mb-3">Follow Us</p>
            <div className="flex gap-5 text-3xl">
              {[
                {
                  icon: "ri-facebook-fill",
                  link: "https://www.facebook.com/tpindianetwork/",
                },
                {
                  icon: "ri-instagram-line",
                  link: "https://www.instagram.com/tpindianetwork",
                },
                {
                  icon: "ri-youtube-fill",
                  link: "https://www.youtube.com/@tpindianetwork/featured",
                },
                {
                  icon: "ri-linkedin-box-fill",
                  link: "https://www.linkedin.com/company/tpindianetwork/",
                },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.link}
                  whileHover={{ scale: 1.2 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent-color)] transition"
                >
                  <i className={s.icon}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTACT FORM */}
        {/* <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {[
            { label: "Name", type: "text", required: false },
            { label: "Email", type: "email", required: true },
          ].map((field, i) => (
            <div key={i}>
              <label className="block mb-2 font-medium">{field.label}</label>
              <input
                type={field.type}
                placeholder={field.label}
                required={field.required}
                className="w-full px-4 py-3 rounded border border-[var(--border-color)] bg-transparent focus:outline-none focus:border-[var(--accent-color)] transition"
              />
            </div>
          ))}

          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              placeholder="Tell us about your project..."
              rows="5"
              className="w-full px-4 py-3 rounded border border-[var(--border-color)] bg-transparent focus:outline-none focus:border-[var(--accent-color)] transition"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 border border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-white font-semibold rounded-lg transition"
          >
            SEND MESSAGE
          </motion.button>
        </motion.form> */}

        <ContactForm />

      </div>

      {/* GOOGLE MAP */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mt-20 rounded-xl overflow-hidden shadow-xl border border-[var(--border-color)]"
      >
        <iframe
          title="TP India Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26031.344157845404!2d80.89879274368286!3d26.84497928307403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be36fdd64860b%3A0xf2516a6d1c8300ba!2sTP%20India%20Network%20Private%20Limited!5e1!3m2!1sen!2sin!4v1763970386801!5m2!1sen!2sin"
          className="w-full h-72 md:h-96"
          loading="lazy"
        ></iframe>
      </motion.div>

      {/* WHATSAPP BUTTON */}
      <WhatsAppButton />
    </div>
  );
}
