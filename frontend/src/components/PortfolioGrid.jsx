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
      className="scroll-mt-28 bg-white px-6 py-12 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <h2 className="text-4xl font-extrabold tracking-normal text-neutral-900 md:text-6xl dark:text-neutral-100">
            Our Work
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-600 md:text-lg dark:text-neutral-400">
            Stories, campaigns, and visuals crafted to create real impact
          </p>
        </div>

        <div className="sticky top-16 z-20 -mx-6 border-y border-neutral-200 bg-white/90 px-6 py-4 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/90">
          <FilterTabs
            categories={categories}
            activeCategory={activeCategory}
            onSelect={scrollToCategory}
          />
        </div>

        <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
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
