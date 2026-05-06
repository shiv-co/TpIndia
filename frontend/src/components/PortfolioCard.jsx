import React, { useState } from "react";
import { ArrowRight, Play } from "lucide-react";

export default function PortfolioCard({ project, category }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { title, client, description, image, video, slug } = project;

  return (
    <a
      href={slug}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View project: ${title}`}
      className="group block h-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-4 focus-visible:ring-offset-white dark:focus-visible:ring-neutral-100 dark:focus-visible:ring-offset-neutral-950"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-black/20 dark:group-hover:shadow-black/40">
        <div className="relative aspect-video overflow-hidden rounded-t-xl bg-neutral-100 dark:bg-neutral-900">
          {!imageLoaded && (
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900" />
          )}

          <img
            src={image}
            alt={`${title} project thumbnail`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={`h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />

          {video && (
            <video
              src={video}
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/45 text-white shadow-lg backdrop-blur transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:bg-white group-hover:text-neutral-950">
              <Play
                className="ml-0.5 h-5 w-5 fill-current transition-transform duration-300 ease-in-out group-hover:scale-110"
                aria-hidden="true"
              />
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
            {category}
          </p>

          {client && (
            <p className="mt-3 text-sm font-medium text-neutral-500 dark:text-neutral-400">
              {client}
            </p>
          )}

          <h3 className="mt-2 text-xl font-bold leading-tight text-neutral-900 dark:text-neutral-100">
            {title}
          </h3>

          <p className="mt-3 truncate text-sm leading-6 text-neutral-600 dark:text-neutral-400">
            {description}
          </p>

          <span className="mt-5 inline-flex translate-y-1 items-center gap-1 text-sm font-semibold text-neutral-900 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 dark:text-neutral-100">
            View Project
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-focus-visible:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </article>
    </a>
  );
}
