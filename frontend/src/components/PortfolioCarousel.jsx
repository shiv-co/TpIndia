import React, { memo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useAutoplayCarousel from "../hooks/useAutoplayCarousel";
import PortfolioCard from "./PortfolioCard";

function PortfolioCarousel({ category, projects }) {
  const {
    activeIndex,
    canSlide,
    clonedIndexes,
    goTo,
    handleTouchEnd,
    handleTouchStart,
    handleTransitionEnd,
    isTransitioning,
    moveBy,
    pause,
    resume,
    slideWidth,
    translateIndex,
  } = useAutoplayCarousel(projects.length);

  return (
    <div
      className="relative"
      onMouseEnter={pause}
      onMouseLeave={() => resume(800)}
      onFocusCapture={pause}
      onBlurCapture={() => resume()}
    >
      <div
        className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_3%,black_97%,transparent)] sm:[mask-image:none]"
        onTouchStart={(event) => handleTouchStart(event.touches[0].clientX)}
        onTouchCancel={() => resume(800)}
        onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0].clientX)}
      >
        <div
          className={`flex transform-gpu items-stretch will-change-transform ${
            canSlide ? "" : "justify-center"
          } ${
            isTransitioning
              ? "transition-transform duration-[820ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              : "transition-none"
          }`}
          style={{
            transform: `translate3d(-${translateIndex * slideWidth}%,0,0)`,
          }}
          onTransitionEnd={(event) => {
            if (event.currentTarget === event.target) {
              handleTransitionEnd();
            }
          }}
        >
          {clonedIndexes.map((projectIndex, renderIndex) => {
            const project = projects[projectIndex];
            if (!project) return null;

            return (
              <div
                key={`${category}-${projectIndex}-${renderIndex}`}
                className="flex min-w-0 shrink-0 px-2.5 sm:px-3 md:px-4"
                style={{ flexBasis: `${slideWidth}%` }}
              >
                <PortfolioCard category={category} project={project} />
              </div>
            );
          })}
        </div>
      </div>

      {canSlide && (
        <div
          className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between"
          onMouseEnter={pause}
          onMouseLeave={() => resume()}
        >
          <button
            type="button"
            onClick={() => {
              pause();
              moveBy(-1);
              resume(800);
            }}
            aria-label={`Previous ${category} projects`}
            className="pointer-events-auto -ml-2 flex h-10 w-10 transform-gpu items-center justify-center rounded-full border border-white/20 bg-black/45 text-white shadow-lg shadow-black/20 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-x-1 hover:scale-105 hover:bg-white hover:text-neutral-950 sm:-ml-4 sm:h-12 sm:w-12 lg:-ml-5 dark:shadow-black/50"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => {
              pause();
              moveBy(1);
              resume(800);
            }}
            aria-label={`Next ${category} projects`}
            className="pointer-events-auto -mr-2 flex h-10 w-10 transform-gpu items-center justify-center rounded-full border border-white/20 bg-black/45 text-white shadow-lg shadow-black/20 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-1 hover:scale-105 hover:bg-white hover:text-neutral-950 sm:-mr-4 sm:h-12 sm:w-12 lg:-mr-5 dark:shadow-black/50"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      )}

      {canSlide && (
        <div className="mt-7 flex justify-center gap-2">
          {projects.map((project, index) => (
            <button
              key={`${category}-${project.slug || project.title}-${index}`}
              type="button"
              aria-label={`Show ${category} slide ${index + 1}`}
              onClick={() => {
                pause();
                goTo(index);
                resume(800);
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                index === activeIndex
                  ? "w-8 bg-[var(--text-primary)]"
                  : "w-2 bg-[var(--border-color)] hover:bg-[var(--text-secondary)]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default memo(PortfolioCarousel);
