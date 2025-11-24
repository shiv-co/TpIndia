import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WhatsAppButton from "../components/WhatsAppButton";

const Contact = () => {
  return (
    <div
      className="min-h-screen bg-[var(--bg-color)] text-[var(--text-primary)] px-4 md:px-10 py-20"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold"
      >
        Hey, Let's Talk!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 max-w-xl text-[var(--text-secondary)]"
      >
        If you have any questions simply use the following contact details.
      </motion.p>

      {/* Main Section */}
      <div className="grid md:grid-cols-2 gap-12 mt-12">

        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          {/* Phone */}
          <div>
            <p className="text-lg font-semibold">📞 Phone</p>
            <p className="text-[var(--text-secondary)] mt-1">+91 9932012125</p>
          </div>

          {/* Email */}
          <div>
            <p className="text-lg font-semibold">📧 Email</p>
            <p className="text-[var(--text-secondary)] mt-1">info@tpindia.in</p>
            <p className="text-[var(--text-secondary)]">tpindianetwork@gmail.com</p>
          </div>

          {/* Address */}
          <div>
            <p className="text-lg font-semibold">📍 Address</p>
            <p className="text-[var(--text-secondary)] mt-1">
              502 5th Floor, Royal Apartment,  
              Lalbagh, Hazratganj  
              Lucknow, India 226001
            </p>
          </div>

          {/* Hours */}
          <div>
            <p className="text-lg font-semibold">⏰ Open Hours</p>
            <p className="text-[var(--text-secondary)] mt-1">
              Mon – Sat : 10.00 – 19.00
            </p>
          </div>

          {/* Social */}
          <div>
            <p className="font-semibold mb-2">Follow Our Social Media:</p>
            <div className="flex gap-5 text-2xl cursor-pointer">
              <i className="ri-facebook-fill hover:text-[var(--accent-color)]"></i>
              <i className="ri-instagram-line hover:text-[var(--accent-color)]"></i>
              <i className="ri-youtube-fill hover:text-[var(--accent-color)]"></i>
              <i className="ri-linkedin-box-fill hover:text-[var(--accent-color)]"></i>
            </div>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 rounded border border-[var(--border-color)] bg-transparent focus:outline-none focus:border-[var(--accent-color)]"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded border border-[var(--border-color)] bg-transparent focus:outline-none focus:border-[var(--accent-color)]"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full px-4 py-3 rounded border border-[var(--border-color)] bg-transparent focus:outline-none focus:border-[var(--accent-color)]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 border border-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-white transition-all"
          >
            SEND
          </button>
        </motion.form>
      </div>

      {/* Floating WhatsApp Button */}
     <WhatsAppButton />

    </div>
  );
};

export default Contact;
