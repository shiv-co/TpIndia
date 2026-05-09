import React from "react";
import PortfolioCarousel from "./PortfolioCarousel";

export default function PortfolioSection({
  id,
  title,
  description,
  projects,
}) {
  return (
    <section
      id={id}
      data-portfolio-section={title}
      className="relative scroll-mt-28 py-18 md:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--accent-color)]">
          Portfolio Category
        </p>
        <h3 className="mt-3 text-3xl font-bold tracking-normal text-[var(--text-primary)] md:text-5xl">
          {title}
        </h3>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
            {description}
          </p>
        )}
      </div>

      <div className="mt-9 md:mt-11">
        <PortfolioCarousel category={title} projects={projects} />
      </div>
    </section>
  );
}
