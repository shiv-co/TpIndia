import React, { useEffect, useMemo, useState } from "react";
import FilterTabs from "./FilterTabs";
import PortfolioSection from "./PortfolioSection";

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export default function PortfolioGrid({
  categoryOrder,
  portfolioData,
  sectionDescriptions,
}) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => [
      "All",
      ...categoryOrder.filter((category) => portfolioData[category]?.length),
    ],
    [categoryOrder, portfolioData]
  );

  const scrollToCategory = (category) => {
    const sectionId = category === "All" ? "portfolio-work" : slugify(category);
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveCategory(category);
  };

  useEffect(() => {
    const sections = categoryOrder
      .map((category) => document.getElementById(slugify(category)))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        const category = visibleEntry?.target?.dataset?.portfolioSection;
        if (category) setActiveCategory(category);
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.15, 0.3, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [categoryOrder]);

  return (
    <section
      id="portfolio-work"
      className="scroll-mt-28 bg-[var(--bg-color)] px-5 py-12 text-[var(--text-primary)] sm:px-6"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--accent-color)]">
            Selected Portfolio
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-normal text-[var(--text-primary)] md:text-6xl">
            Our Work
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--text-secondary)] md:text-lg">
            Stories, campaigns, and visuals crafted to create real impact
          </p>
        </div>

        <div className="sticky top-16 z-20 -mx-5 border-y border-[var(--border-color)] bg-[var(--bg-color)]/90 px-5 py-4 backdrop-blur-xl sm:-mx-6 sm:px-6">
          <FilterTabs
            categories={categories}
            activeCategory={activeCategory}
            onSelect={scrollToCategory}
          />
        </div>

        <div className="divide-y divide-[var(--border-color)]">
          {categoryOrder.map((category) => {
            const projects = portfolioData[category];

            if (!projects || projects.length === 0) return null;

            return (
              <PortfolioSection
                key={category}
                id={slugify(category)}
                title={category}
                description={sectionDescriptions[category]}
                projects={projects}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
