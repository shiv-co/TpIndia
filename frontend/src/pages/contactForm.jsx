import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: User must enter EITHER Email or Mobile
    if (!form.email && !form.mobile) {
      alert("Please enter either Email or Mobile Number.");
      return;
    }

    // ---- Option 1: Send message directly to your email via mailto ----
    window.location.href =`mailto:tpindianetwork@gmail.com?subject=New Inquiry from ${form.name}&body=
Name: ${form.name}%0D%0A
Email: ${form.email || "Not provided"}%0D%0A
Mobile: ${form.mobile || "Not provided"}%0D%0A
Message: ${form.message}
`;

    // ---- Option 2: OR send to backend API (uncomment when API ready) ----
    /*
    fetch("/api/send-message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then(() => alert("Your message has been sent successfully!"))
      .catch(() => alert("Something went wrong!"));
    */
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      {/* Name */}
      <div>
        <label className="block mb-2 font-medium">Name</label>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded border border-[var(--border-color)] bg-transparent focus:outline-none focus:border-[var(--accent-color)] transition"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block mb-2 font-medium">Email </label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded border border-[var(--border-color)] bg-transparent focus:outline-none focus:border-[var(--accent-color)] transition"
        />
      </div>

      {/* Mobile Number */}
      <div>
        <label className="block mb-2 font-medium">Mobile Number (optional)</label>
        <input
          name="mobile"
          type="text"
          placeholder="Mobile number"
          value={form.mobile}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded border border-[var(--border-color)] bg-transparent focus:outline-none focus:border-[var(--accent-color)] transition"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block mb-2 font-medium">Message</label>
        <textarea
          name="message"
          placeholder="Tell us about your project..."
          rows="5"
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded border border-[var(--border-color)] bg-transparent focus:outline-none focus:border-[var(--accent-color)] transition"
        ></textarea>
      </div>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        type="submit"
        className="w-full py-3 border border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-white font-semibold rounded-lg transition"
      >
        SEND MESSAGE
      </motion.button>
    </motion.form>
  );
}
