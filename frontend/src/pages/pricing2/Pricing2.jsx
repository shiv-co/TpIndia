import { motion } from "framer-motion";
import DomainHostingCard from "../../components/DomainHostingCard.jsx";
import PricingFAQ from "../../components/PricingFAQ.jsx";
import WhatsAppButton from "../../components/WhatsAppButton.jsx";
import GetQuote from "../GetQuote.jsx";
import { pricingFaqs } from "../../data/pricingFaq.js";
import PricingCard from "./PricingCard";
import { makeupPlans } from "./pricingData";
import "./pricing2.css";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Pricing2() {
  return (
    <main className="pricing2-page min-h-screen mt-12 bg-[#0f0f0f] px-4 pb-24 pt-24 md:px-6">
      <section className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="pricing2-hero-panel rounded-[36px] border border-[var(--border-color)]/70 px-6 py-10 md:px-10 md:py-14"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent-color)]">
                Pricing
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-[var(--text-primary)] md:text-6xl">
                Makeup Artist Growth Plans
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                Launch your professional website, showcase your portfolio, and start getting more bookings from Instagram, Google, and WhatsApp.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-[24px] border border-[var(--border-color)]/80 bg-[color-mix(in_srgb,var(--bg-color)_90%,white_10%)] p-5 shadow-[0_16px_40px_rgba(126,77,93,0.08)]">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-color)]">
                  Fast Launch
                </p>
                <p className="mt-3 text-lg font-semibold text-[var(--text-primary)]">
                  Go live with a polished artist website in days, not months.
                </p>
              </div>
              <div className="rounded-[24px] border border-[var(--border-color)]/80 bg-[color-mix(in_srgb,var(--bg-color)_90%,white_10%)] p-5 shadow-[0_16px_40px_rgba(126,77,93,0.08)]">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-color)]">
                  Better Booking Flow
                </p>
                <p className="mt-3 text-lg font-semibold text-[var(--text-primary)]">
                  Help clients move smoothly from browsing your looks to messaging you.
                </p>
              </div>
              <div className="rounded-[24px] border border-[var(--border-color)]/80 bg-[color-mix(in_srgb,var(--bg-color)_90%,white_10%)] p-5 shadow-[0_16px_40px_rgba(126,77,93,0.08)]">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-color)]">
                  Premium Presence
                </p>
                <p className="mt-3 text-lg font-semibold text-[var(--text-primary)]">
                  Present your work like a serious brand and build trust quickly.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="pricing2-plans-shell mx-auto mt-16 max-w-7xl rounded-[40px] px-2 py-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="relative z-10 mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent-color)]">
            Plans
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--text-primary)] md:text-5xl">
            Choose the growth plan that fits your makeup business
          </h2>
          <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
            Simple pricing built around visibility, trust, and more client inquiries for freelance artists, bridal specialists, and growing studios.
          </p>
        </motion.div>

        <div className="relative z-10 mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {makeupPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <PricingCard {...plan} />
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
        sectionClassName="bg-transparent"
      />
      <WhatsAppButton message="Hello, I want to know more about TP India website packages." />
    </main>
  );
}
