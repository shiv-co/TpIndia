import { motion } from "framer-motion";

export default function DomainHostingCard() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="rounded-[28px] border border-[var(--border-color)] bg-[color-mix(in_srgb,var(--bg-color)_94%,white_6%)] p-8 text-center shadow-xl"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent-color)]">
          Domain & Hosting
        </p>
        <h3 className="mt-4 text-3xl font-semibold text-[var(--text-primary)] md:text-4xl">
          Domain & Hosting
        </h3>
        <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)] md:text-base">
          Required yearly to keep your website live and accessible.
        </p>

        <div className="mx-auto mt-8 max-w-md rounded-[24px] border border-[var(--border-color)] bg-[color-mix(in_srgb,var(--bg-color)_90%,black_10%)] px-6 py-8 shadow-lg">
          <p className="text-4xl font-extrabold text-[var(--accent-color)] md:text-5xl">
            INR 2,500
          </p>
          <p className="mt-2 text-base font-medium text-[var(--text-primary)]">
            / year
          </p>
          <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
            Includes domain registration, hosting, and SSL security.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
