import React from "react";

const filterLabels = {
  All: "All",
  "Audio/Visuals": "Audio/Visuals",
  "Website Development": "Websites",
  "Social Media Management": "Social Media",
  "Live Streaming & Broadcasting": "Live Streaming",
  "Podcasts & Interviews": "Podcasts",
  "Event Coverage & Photography": "Events",
  "Corporate Documentaries": "Corporate",
  "Government Documentaries": "Government",
  "Music Videos": "Music Videos",
  "Ad/TVC Films": "Ads",
  "Reels/Shorts": "Reels",
  "Short Films": "Short Films",
};

export default function FilterTabs({ categories, activeCategory, onSelect }) {
  return (
    <nav
      className="-mx-6 overflow-x-auto px-6 pb-1 scrollbar-hide"
      aria-label="Portfolio section navigation"
    >
      <div className="flex min-w-max items-center gap-2">
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              aria-current={isActive ? "true" : undefined}
              onClick={() => onSelect(category)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-neutral-100 dark:focus-visible:ring-offset-neutral-950 ${
                isActive
                  ? "border-neutral-900 bg-neutral-900 text-white shadow-sm dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-950"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400 dark:hover:border-neutral-700 dark:hover:text-neutral-100"
              }`}
            >
              {filterLabels[category] || category}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
