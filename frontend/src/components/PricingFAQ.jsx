import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PricingFAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent-color)]">
            FAQ
          </p>
          <h3 className="mt-4 text-3xl font-semibold text-[var(--text-primary)] md:text-4xl">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="mt-10 space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-[24px] border border-[var(--border-color)] bg-[color-mix(in_srgb,var(--bg-color)_94%,white_6%)] shadow-lg"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-lg font-semibold text-[var(--text-primary)]">
                    {item.question}
                  </span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent-color)]/12 text-xl text-[var(--accent-color)]">
                    {isOpen ? "-" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm leading-7 text-[var(--text-secondary)] md:text-base">
                        {item.answer}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
