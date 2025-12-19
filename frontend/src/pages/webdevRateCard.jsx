import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function RateCard() {

const pricingPlans = [
  {
    title: "Basic Website",
    price: "₹8,000 – ₹12,000",
    bestFor: "Small businesses & personal profiles",
    duration: "7–10 days",
    features: [
      "3–5 pages",
      "Mobile responsive design",
      "Contact form + WhatsApp button",
      "Clean & simple UI",
      "Basic SEO setup",
    ],
  },
  {
    title: "Standard Business Website",
    price: "₹15,000 – ₹25,000",
    bestFor: "Growing businesses & professionals",
    duration: "1–2 weeks",
    features: [
      "6–10 pages",
      "Custom modern design",
      "Blog section (optional)",
      "Social media integration",
      "SEO-friendly structure",
      
    ],
    highlight: true,
  },
  {
    title: "Premium Business Website",
    price: "₹25,000 – ₹40,000",
    bestFor: "Brands & agencies",
    duration: "Within a month",
    features: [
      "10+ pages",
      "Premium animations & UI",
      "Lead generation forms",
      "Basic content writing",
      "Advanced SEO",
      "Google Analytics & Search Console",
    ],
    
  },
  {
    id: "ecom-basic",
    type: "E-Commerce Website Development",
    title: "Basic Online Store",
    price: "₹25,000 – ₹40,000",
    duration: "2–4 weeks",
    bestFor: "Small online businesses & startups",
    features: [
      "Up to 30 products",
      "Cart & checkout system",
      "Online payments (Razorpay / UPI)",
      "Admin panel to manage orders & products",
      "Mobile-friendly responsive design",
    ],
    cta: "Start Selling Online",
  },
  {
    id: "ecom-advanced",
    type: "E-Commerce Website Development",
    title: "Advanced Online Store",
    price: "₹40,000 – ₹75,000",
    duration: "1–2 months",
    bestFor: "Growing brands & high-volume sellers",
    features: [
      "Unlimited products",
      "Coupons & discount offers",
      "Advanced product filters",
      "Payment gateway integration",
      "SEO & speed optimisation",
    ],
    cta: "Build Advanced Store",
  },

  {
    id: "custom-mern",
    type: "Custom Web App / MERN Development",
    title: "Custom Web Application",
    price: "₹50,000 – ₹1,50,000+",
    duration: "Depends on features",
    bestFor: "Businesses needing custom systems",
    features: [
      "Admin dashboards",
      "Booking & reservation systems",
      "CRM systems",
      "Blog & content platforms",
      "Custom workflows & integrations",
    ],
    note: "Final cost depends on features & complexity",
    cta: "Request Custom Quote",
  },
   
];





  return (
    <>
    <div className="mt-12">

    <section className="max-w-7xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-3xl md:text-4xl font-bold mb-4"
      >
        Website Development Pricing
      </motion.h2>

      <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
        Simple, transparent pricing designed for businesses in Lucknow.
        No hidden costs.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {pricingPlans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className={`relative rounded-2xl border border-[var(--border-color)] p-6 shadow-xl md:mb-8
            ${plan.highlight ? "bg-[var(--accent-color)]/10 scale-105" : "bg-black/60"}`}
          >
            {plan.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs bg-[var(--accent-color)] text-white rounded-full">
                Most Popular
              </span>
            )}

            <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
            <p className="text-2xl font-extrabold text-[var(--accent-color)] mb-3">
              {plan.price}
            </p>

            <p className="text-sm text-[var(--text-secondary)] mb-4">
              <strong>Best for:</strong> {plan.bestFor}
            </p>

            <ul className="space-y-2 mb-6 text-sm">
              {plan.features.map((f, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-[var(--accent-color)]">✔</span>
                  {f}
                </li>
              ))}
            </ul>

            <p className="text-xs text-[var(--text-secondary)] mb-6">
              ⏱ Delivery: {plan.duration}
            </p>

            <Link
              to="/get-quote"
              className="block text-center py-2 rounded-full bg-[var(--accent-color)] text-white font-semibold hover:scale-105 transition"
            >
              Get Started
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
<section className="max-w-6xl mx-auto px-6 py-16">
  <h3 className="text-2xl font-bold mb-6 text-center">
    Domain & Hosting (Hostinger)
  </h3>

  <div className="grid md:grid-cols-3 gap-6">
    {[
      {
        title: "Domain Name",
        price: "As per MRP",
        desc: "Your website identity (e.g. .com, .in)",
      },
      {
        title: "Web Hosting",
        price: "₹2,000 – ₹3,000 / year",
        desc: "Fast hosting + Free SSL + Security",
      },
      {
        title: "Setup & Deployment",
        price: "₹1,500 – ₹2,000 (one-time)",
        desc: "Full setup, email & website launch",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="rounded-xl border border-[var(--border-color)] p-6 bg-black/50 text-center"
      >
        <h4 className="font-bold mb-2">{item.title}</h4>
        <p className="text-[var(--accent-color)] font-bold mb-2">
          {item.price}
        </p>
        <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
      </div>
    ))}
  </div>

  <p className="text-center mt-6 text-sm text-[var(--text-secondary)]">
    ✅ Approx yearly hosting + domain cost: <strong>₹3,000 – ₹4,000</strong>
  </p>
</section>

<section className="max-w-4xl mx-auto px-6 py-16">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative rounded-2xl border border-[var(--border-color)] 
               bg-gradient-to-br from-black/70 via-black/50 to-black/80 
               p-8 md:p-10 shadow-2xl overflow-hidden"
  >
    {/* Glow Accent */}
    <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--accent-color)]/30 blur-3xl rounded-full" />

    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
      💳 Payment Terms
    </h3>

    <div className="grid md:grid-cols-3 gap-6 text-center">
      <div className="rounded-xl border border-[var(--border-color)] bg-black/40 p-6">
        <p className="text-3xl font-extrabold text-[var(--accent-color)] mb-2">
          50%
        </p>
        <p className="font-semibold">Advance Payment</p>
        <p className="text-sm text-[var(--text-secondary)] mt-1">
          Required to start the project
        </p>
      </div>

      <div className="rounded-xl border border-[var(--border-color)] bg-black/40 p-6">
        <p className="text-3xl font-extrabold text-[var(--accent-color)] mb-2">
          20–30%
        </p>
        <p className="font-semibold">Mid-Project</p>
        <p className="text-sm text-[var(--text-secondary)] mt-1">
          At major milestone / preview
        </p>
      </div>

      <div className="rounded-xl border border-[var(--border-color)] bg-black/40 p-6">
        <p className="text-3xl font-extrabold text-[var(--accent-color)] mb-2">
          Balance
        </p>
        <p className="font-semibold">Final Delivery</p>
        <p className="text-sm text-[var(--text-secondary)] mt-1">
          After project completion
        </p>
      </div>
    </div>

    <p className="text-center mt-6 text-sm text-[var(--text-secondary)]">
      💡 Transparent billing • No hidden charges • Easy UPI / Bank Transfer
    </p>
  </motion.div>
</section>


<section className="max-w-6xl mx-auto px-6 py-16">
  <motion.h3
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-2xl md:text-3xl font-bold text-center mb-10"
  >
    ⭐ Why Clients Choose TP India Network
  </motion.h3>

  <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6">
    {[
      {
        title: "Clear Pricing",
        desc: "No confusion. No hidden costs.",
        icon: "💰",
      },
      {
        title: "Modern Design",
        desc: "Clean, fast & premium UI",
        icon: "🎨",
      },
      {
        title: "Fast Delivery",
        desc: "Timelines we actually follow",
        icon: "⚡",
      },
      {
        title: "Local Support",
        desc: "Lucknow-based, easy communication",
        icon: "📍",
      },
      {
        title: "Long-Term Help",
        desc: "Maintenance & future upgrades",
        icon: "🔧",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: i * 0.1 }}
        className="relative rounded-xl border border-[var(--border-color)] 
                   bg-black/50 p-6 text-center hover:scale-105 transition-all"
      >
        <div className="text-3xl mb-3">{item.icon}</div>
        <h4 className="font-bold mb-1">{item.title}</h4>
        <p className="text-sm text-[var(--text-secondary)]">
          {item.desc}
        </p>
      </motion.div>
    ))}
  </div>
</section>


</div>





    </>
    
  );
}
