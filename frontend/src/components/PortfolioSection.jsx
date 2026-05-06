import React from "react";
import PortfolioCard from "./PortfolioCard";

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
      className="scroll-mt-28 py-20 md:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h3 className="text-3xl font-extrabold tracking-normal text-neutral-900 md:text-5xl dark:text-neutral-100">
          {title}
        </h3>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
        )}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <PortfolioCard key={project.slug} category={title} project={project} />
        ))}
      </div>
    </section>
  );
}
