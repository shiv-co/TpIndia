import React, { memo, useMemo, useState } from "react";
import { ArrowRight, Play } from "lucide-react";

const getYouTubeId = (url = "") => {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([^?&/]+)/
  );
  return match?.[1] || "";
};

function PortfolioCard({ project, category }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const [isPreviewActive, setIsPreviewActive] = useState(false);
  const { title, client, description, image, video, slug } = project;
  const hasPlayableContent = Boolean(video || slug);
  const youtubeId = useMemo(() => getYouTubeId(slug), [slug]);

  const activatePreview = () => {
    setIsPreviewActive(true);
  };

  const deactivatePreview = () => {
    setIsPreviewActive(false);
  };

  return (
    <a
      href={slug || "#"}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View project: ${title}`}
      onClick={(event) => {
        if (!slug) event.preventDefault();
      }}
      onMouseEnter={activatePreview}
      onMouseLeave={deactivatePreview}
      onFocus={activatePreview}
      onBlur={deactivatePreview}
      className="group block h-full w-full rounded-[1.4rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-primary)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--bg-color)]"
    >
      <article className="flex h-[455px] w-full transform-gpu flex-col overflow-hidden rounded-[1.4rem] border border-[var(--border-color)] bg-[var(--bg-color)] shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition-[transform,box-shadow,border-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:-translate-y-2 group-hover:shadow-[0_30px_90px_rgba(15,23,42,0.16)] sm:h-[470px] md:h-[500px] lg:h-[520px] dark:shadow-black/35 dark:group-hover:shadow-[0_34px_110px_rgba(0,0,0,0.62)]">
        <div className="relative aspect-[16/9] shrink-0 overflow-hidden rounded-t-[1.25rem] bg-neutral-100/80 dark:bg-neutral-900/90">
          {!imageLoaded && (
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900" />
          )}

          {image && !imageFailed ? (
            <img
              src={image}
              alt={`${title} project thumbnail`}
              decoding="async"
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={() => {
                setImageFailed(true);
                setImageLoaded(true);
              }}
              className="h-full w-full transform-gpu object-cover object-center opacity-100 transition-[transform,filter] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:scale-[1.055]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-black px-8 text-center text-xs font-bold uppercase tracking-[0.24em] text-white/70">
              {category}
            </div>
          )}

          {video && isPreviewActive && (
            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              className="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            />
          )}

          {!video && youtubeId && isPreviewActive && (
            <iframe
              title={`${title} preview`}
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeId}&playsinline=1&modestbranding=1&rel=0`}
              allow="autoplay; encrypted-media; picture-in-picture"
              className="pointer-events-none absolute inset-0 h-full w-full border-0"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/12 to-transparent opacity-80 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-95" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/25 to-transparent" />

          {hasPlayableContent && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-12 w-12 transform-gpu items-center justify-center rounded-full border border-white/45 bg-black/45 text-white shadow-xl shadow-black/25 backdrop-blur-md transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:bg-white group-hover:text-neutral-950 group-hover:shadow-2xl group-hover:shadow-black/30">
                <Play
                  className="ml-0.5 h-5 w-5 fill-current transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                  aria-hidden="true"
                />
              </span>
            </div>
          )}
        </div>

        <div className="flex min-h-[245px] flex-1 flex-col p-5 md:min-h-[270px] md:p-6 lg:min-h-[285px]">
          <p className="max-w-full truncate rounded-full border border-[var(--border-color)] bg-white/45 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text-secondary)] backdrop-blur-sm dark:bg-black/20">
            {category}
          </p>

          {client && (
            <p className="mt-4 line-clamp-1 text-sm font-semibold text-[var(--text-secondary)]">
              {client}
            </p>
          )}

          <h3 className="mt-2 line-clamp-2 text-xl font-semibold leading-tight tracking-normal text-[var(--text-primary)] md:text-2xl">
            {title}
          </h3>

          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[var(--text-secondary)] md:text-[15px]">
            {description}
          </p>

          <span className="mt-auto inline-flex translate-y-0 items-center gap-1 pt-6 text-sm font-bold text-[var(--text-primary)] opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:translate-y-1 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-focus-visible:translate-y-0 sm:group-focus-visible:opacity-100">
            View Project
            <ArrowRight
              className="h-4 w-4 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </article>
    </a>
  );
}

export default memo(PortfolioCard);
