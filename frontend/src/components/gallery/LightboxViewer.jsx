import { AnimatePresence, motion } from "framer-motion";
import { createElement, useCallback, useEffect, useRef } from "react";

import {
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Building2,
  Tag,
  Heart,
  Share2,
} from "lucide-react";

const MotionDiv = motion.div;
const MotionImg = motion.img;

const fallbackDescription =
  "Every project we create reflects our commitment to cinematic storytelling, creative excellence, and meaningful visual experiences. From documentaries and corporate films to premium brand campaigns, every frame is carefully crafted to tell a story that leaves a lasting impression.";

export default function LightboxViewer({
  images,
  currentIndex,
  setCurrentIndex,
  isOpen,
  onClose,
}) {
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const image = images?.[currentIndex] || images?.[0];
  const totalImages = images?.length || 0;
  const SWIPE_THRESHOLD = 50;

  const nextImage = useCallback(() => {
    if (!totalImages) return;
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  }, [setCurrentIndex, totalImages]);

  const prevImage = useCallback(() => {
    if (!totalImages) return;
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  }, [setCurrentIndex, totalImages]);

  const handleShare = useCallback(async () => {
    if (!image) return;

    if (navigator.share) {
      await navigator.share({
        title: image.title,
        text: image.description,
        url: window.location.href,
      });
      return;
    }

    navigator.clipboard?.writeText(window.location.href);
    console.info("Gallery link copied");
  }, [image]);

  const handleTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0].clientX;
  };

  const handleTouchMove = (event) => {
    touchEndX.current = event.changedTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;

    if (distance > SWIPE_THRESHOLD) nextImage();
    if (distance < -SWIPE_THRESHOLD) prevImage();

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowRight":
          nextImage();
          break;
        case "ArrowLeft":
          prevImage();
          break;
        case "Escape":
          onClose();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, nextImage, onClose, prevImage]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen || !totalImages || !image) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <MotionDiv
          className="fixed inset-0 z-[9999] overflow-y-auto bg-black/92 text-white overscroll-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <MotionDiv
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl"
          />

          <div className="relative z-10 min-h-[100dvh] w-full px-4 py-4 pb-[max(env(safe-area-inset-bottom),1.5rem)] pt-[max(env(safe-area-inset-top),1rem)] md:px-10 lg:flex lg:items-center lg:justify-center">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close gallery lightbox"
              className="fixed right-4 top-[max(env(safe-area-inset-top),1rem)] z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition hover:bg-[var(--accent-color)]"
            >
              <X size={22} />
            </button>

            <button
              type="button"
              onClick={prevImage}
              aria-label="Previous image"
              className="hidden absolute left-6 top-1/2 z-30 h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white transition hover:bg-[var(--accent-color)] md:flex"
            >
              <ChevronLeft size={26} />
            </button>

            <button
              type="button"
              onClick={nextImage}
              aria-label="Next image"
              className="hidden absolute right-6 top-1/2 z-30 h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white transition hover:bg-[var(--accent-color)] md:flex"
            >
              <ChevronRight size={26} />
            </button>

            <MotionDiv
              layout
              initial={{ scale: 0.94, opacity: 0, y: 28 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="mx-auto w-full max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-[0_25px_80px_rgba(0,0,0,0.45)] lg:bg-[var(--card-bg)] lg:text-[var(--text-primary)]"
            >
              <div className="lg:hidden">
                <div className="relative overflow-hidden rounded-t-[2rem] bg-black px-0 pt-0">
                  <MotionImg
                    key={image.id}
                    src={image.image}
                    alt={image.title}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35 }}
                    className="h-auto max-h-[58dvh] w-full object-contain select-none"
                  />
                </div>

                <div className="space-y-5 px-4 py-5">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        onClick={prevImage}
                        aria-label="Previous image"
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition active:scale-95"
                      >
                        <ChevronLeft size={22} />
                      </button>

                      <p className="text-base font-bold tracking-wide text-white">
                        {String(currentIndex + 1).padStart(2, "0")} /{" "}
                        {String(totalImages).padStart(2, "0")}
                      </p>

                      <button
                        type="button"
                        onClick={nextImage}
                        aria-label="Next image"
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition active:scale-95"
                      >
                        <ChevronRight size={22} />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                    <ChevronLeft size={15} />
                    Swipe to browse
                    <ChevronRight size={15} />
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-color)]/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--accent-color)]">
                      <Tag size={13} />
                      {image.category}
                    </span>

                    <h2 className="mt-5 text-2xl font-black leading-tight text-white">
                      {image.title}
                    </h2>

                    <div className="mt-6 space-y-4">
                      <MobileDetail icon={Building2} label="Client" value={image.client} />
                      <MobileDetail
                        icon={MapPin}
                        label="Location"
                        value={image.location || "Lucknow, Uttar Pradesh"}
                      />
                      <MobileDetail
                        icon={Calendar}
                        label="Year"
                        value={image.year || "2025"}
                      />
                    </div>

                    <div className="mt-6 border-t border-white/10 pt-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/45">
                        About this project
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white/75">
                        {image.description || fallbackDescription}
                      </p>
                    </div>
                  </div>

                  <div className="sticky bottom-0 rounded-3xl border border-white/10 bg-black/70 p-3 shadow-[0_10px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl pb-[max(env(safe-area-inset-bottom),1rem)]">
                    <div className="grid grid-cols-3 gap-3">
                      <MobileAction icon={Heart} label="Favorite" />
                      <MobileAction icon={Share2} label="Share" onClick={handleShare} />
                      <MobileAction icon={X} label="Close" onClick={onClose} danger />
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:grid lg:grid-cols-[2fr_420px]">
                <div className="relative flex items-center justify-center bg-black">
                  <div className="absolute left-5 top-5 z-20 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-sm text-white backdrop-blur-md">
                    {String(currentIndex + 1).padStart(2, "0")} /{" "}
                    {String(totalImages).padStart(2, "0")}
                  </div>

                  <MotionImg
                    key={image.id}
                    src={image.image}
                    alt={image.title}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35 }}
                    className="max-h-[85vh] w-full select-none object-contain"
                  />
                </div>

                <div className="flex flex-col border-l border-[var(--border-color)] bg-[var(--card-bg)]">
                  <div className="border-b border-[var(--border-color)] p-8">
                    <span className="inline-block rounded-full bg-[var(--accent-color)]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--accent-color)]">
                      {image.category}
                    </span>

                    <h2 className="mt-5 text-3xl font-bold leading-tight text-[var(--text-primary)]">
                      {image.title}
                    </h2>

                    <p className="mt-4 leading-7 text-[var(--text-secondary)]">
                      {image.description || fallbackDescription}
                    </p>
                  </div>

                  <div className="flex-1 space-y-7 p-8">
                    <DesktopDetail icon={Building2} label="Client" value={image.client} />
                    <DesktopDetail
                      icon={MapPin}
                      label="Location"
                      value={image.location || "Lucknow, Uttar Pradesh"}
                    />
                    <DesktopDetail
                      icon={Calendar}
                      label="Year"
                      value={image.year || "2025"}
                    />

                    <div className="border-t border-[var(--border-color)]" />

                    <div className="grid grid-cols-2 gap-4">
                      <InfoCard label="Category" value={image.category} />
                      <InfoCard label="Client" value={image.client} />
                    </div>
                  </div>

                  <div className="border-t border-[var(--border-color)] bg-black/20 p-6 backdrop-blur-md">
                    <div className="flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={prevImage}
                        className="flex items-center gap-2 rounded-xl border border-[var(--border-color)] px-5 py-3 transition-all hover:bg-[var(--accent-color)] hover:text-white"
                      >
                        <ChevronLeft size={18} />
                        Previous
                      </button>

                      <button
                        type="button"
                        onClick={handleShare}
                        className="rounded-xl bg-[var(--accent-color)] px-5 py-3 font-medium text-white transition hover:opacity-90"
                      >
                        Share Project
                      </button>

                      <button
                        type="button"
                        onClick={nextImage}
                        className="flex items-center gap-2 rounded-xl border border-[var(--border-color)] px-5 py-3 transition-all hover:bg-[var(--accent-color)] hover:text-white"
                      >
                        Next
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </MotionDiv>
          </div>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
}

function MobileDetail({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-color)]/15">
        {createElement(icon, {
          size: 19,
          className: "text-[var(--accent-color)]",
        })}
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-white/45">{label}</p>
        <h4 className="mt-1 font-semibold text-white">{value}</h4>
      </div>
    </div>
  );
}

function MobileAction({ icon, label, onClick, danger = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl py-4 transition-all active:scale-95 ${
        danger
          ? "bg-red-500/10 hover:bg-red-500/20"
          : "bg-white/5 hover:bg-[var(--accent-color)]/15"
      }`}
    >
      {createElement(icon, {
        size: 22,
        className: danger ? "text-red-400" : "text-[var(--accent-color)]",
      })}
      <span className="text-xs font-medium text-white/80">{label}</span>
    </button>
  );
}

function DesktopDetail({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent-color)]/15">
        {createElement(icon, {
          size: 20,
          className: "text-[var(--accent-color)]",
        })}
      </div>
      <div>
        <p className="text-xs uppercase text-[var(--text-secondary)]">{label}</p>
        <h4 className="text-lg font-semibold">{value}</h4>
      </div>
    </div>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-[var(--border-color)] bg-black/20 p-5">
      <p className="text-xs uppercase tracking-wider text-[var(--text-secondary)]">
        {label}
      </p>
      <h3 className="mt-2 text-lg font-semibold">{value}</h3>
    </div>
  );
}
