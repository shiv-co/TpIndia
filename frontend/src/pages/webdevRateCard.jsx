import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DomainHostingCard from "../components/DomainHostingCard.jsx";
import PricingFAQ from "../components/PricingFAQ.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import GetQuote from "./GetQuote.jsx";
import { pricingFaqs } from "../data/pricingFaq.js";

export default function RateCard() {
  const pricingPlans = [
    {
      title: "Starter",
      price: "INR 5,999",
      billing: "One-time website development cost",
      note: "Domain and hosting charged yearly.",
      bestFor: "Small businesses and personal profiles",
      features: [
        "3-5 page website setup",
        "Mobile-friendly layout",
        "Contact and WhatsApp enquiry flow",
        "Clean business presentation",
        "Basic Google visibility setup",
      ],
      cta: "Start My Website",
    },
    {
      title: "Pro",
      price: "INR 9,999",
      billing: "One-time website development cost",
      note: "Domain and hosting charged yearly.",
      bestFor: "Growing businesses and professionals",
      features: [
        "Everything in Starter",
        "Expanded service pages",
        "Stronger layout for trust and conversions",
        "Social media integration",
        "Better structure for Google search",
      ],
      highlight: true,
      cta: "Get My Website",
    },
    {
      title: "Premium",
      price: "INR 14,999",
      billing: "One-time website development cost",
      note: "Domain and hosting charged yearly.",
      bestFor: "Brands building a stronger online presence",
      features: [
        "Everything in Pro",
        "Premium service presentation",
        "Lead capture sections",
        "Enhanced design polish",
        "Advanced local SEO setup",
      ],
      cta: "Launch My Website",
    },
    {
      title: "Elite",
      price: "INR 19,999",
      billing: "One-time website development cost",
      note: "Domain and hosting charged yearly.",
      bestFor: "Businesses that want a more complete web presence",
      features: [
        "Everything in Premium",
        "Advanced page structure",
        "Custom enquiry journey planning",
        "Priority refinement support",
        "Growth-focused website polish",
      ],
      cta: "Start My Website",
    },
  ];

  return (
    <main className="mt-12 bg-[#0b0b0b] text-white min-h-screen">
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
          Clear one-time website pricing for businesses that want a professional online presence without confusing recurring package costs.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`relative rounded-2xl border border-[var(--border-color)] p-6 shadow-xl ${
                plan.highlight
                  ? "bg-[var(--accent-color)]/10 scale-[1.02]"
                  : "bg-[color-mix(in_srgb,var(--bg-color)_90%,black_10%)]"
              }`}
            >
              {plan.highlight ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs bg-[var(--accent-color)] text-white rounded-full">
                  Most Popular
                </span>
              ) : null}

              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--text-secondary)]">
                {plan.title}
              </p>
              <h3 className="mt-3 text-4xl font-extrabold text-[var(--text-primary)]">
                {plan.price}
              </h3>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-color)]">
                {plan.billing}
              </p>
              <p className="mt-2 text-xs leading-6 text-[var(--text-secondary)]">
                {plan.note}
              </p>

              <p className="mt-4 text-sm text-[var(--text-secondary)] mb-4 min-h-12">
                <strong>Best for:</strong> {plan.bestFor}
              </p>

              <ul className="space-y-2 mb-6 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-[var(--accent-color)]">+</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/get-quote"
                className="block text-center py-3 rounded-full bg-[var(--accent-color)] text-white font-semibold hover:scale-105 transition"
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <DomainHostingCard />
      <PricingFAQ items={pricingFaqs} />
      <GetQuote
        eyebrow="Need a custom website?"
        title="Need a custom website?"
        highlight="custom website?"
        subtitle="Tell us about your business and we will suggest the best plan."
        buttonLabel="Get a Quote"
        to="/get-quote"
      />
      <WhatsAppButton message="Hello, I want to know more about TP India website packages." />
    </main>
  );
}
