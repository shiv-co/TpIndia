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
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-color)] ${
                isActive
                  ? "border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-color)] shadow-sm"
                  : "border-[var(--border-color)] bg-[var(--bg-color)] text-[var(--text-secondary)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]"
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
