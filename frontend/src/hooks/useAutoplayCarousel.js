import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const AUTOPLAY_DELAY = 2600;
const RESUME_DELAY = 1000;
const SWIPE_THRESHOLD = 42;

const getVisibleCount = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
};

const wrapIndex = (index, length) => ((index % length) + length) % length;

export default function useAutoplayCarousel(itemCount) {
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);
  const [trackIndex, setTrackIndex] = useState(getVisibleCount);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const animationFrameRef = useRef(null);
  const elapsedRef = useRef(0);
  const lastFrameTimeRef = useRef(null);
  const resumeTimerRef = useRef(null);
  const transitionTimerRef = useRef(null);
  const touchStartRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const activeIndexRef = useRef(0);

  const canSlide = itemCount > 1;
  const cloneCount = canSlide ? visibleCount : 0;
  const slideWidth = 100 / visibleCount;
  const translateIndex = canSlide ? trackIndex : 0;
  const activeIndex = canSlide
    ? wrapIndex(trackIndex - cloneCount, itemCount)
    : 0;

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const clonedIndexes = useMemo(() => {
    if (!canSlide) return Array.from({ length: itemCount }, (_, index) => index);

    const leading = Array.from({ length: cloneCount }, (_, index) =>
      wrapIndex(itemCount - cloneCount + index, itemCount)
    );
    const main = Array.from({ length: itemCount }, (_, index) => index);
    const trailing = Array.from({ length: cloneCount }, (_, index) =>
      wrapIndex(index, itemCount)
    );

    return [...leading, ...main, ...trailing];
  }, [canSlide, cloneCount, itemCount]);

  const pause = useCallback(() => {
    window.clearTimeout(resumeTimerRef.current);
    elapsedRef.current = 0;
    lastFrameTimeRef.current = null;
    setIsPaused(true);
  }, []);

  const resume = useCallback((delay = RESUME_DELAY) => {
    window.clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = window.setTimeout(() => {
      elapsedRef.current = 0;
      lastFrameTimeRef.current = null;
      setIsPaused(false);
    }, delay);
  }, []);

  const finishAnimation = useCallback(() => {
    window.clearTimeout(transitionTimerRef.current);
    isAnimatingRef.current = false;
    setIsAnimating(false);
  }, []);

  const armTransitionFallback = useCallback(() => {
    window.clearTimeout(transitionTimerRef.current);
    transitionTimerRef.current = window.setTimeout(() => {
      setIsTransitioning(false);
      setTrackIndex(cloneCount + activeIndexRef.current);
      window.requestAnimationFrame(() => {
        setIsTransitioning(true);
        finishAnimation();
      });
    }, 950);
  }, [cloneCount, finishAnimation]);

  const moveBy = useCallback(
    (direction) => {
      if (!canSlide) return;

      const nextIndex = activeIndexRef.current + direction;
      let nextTrackIndex = cloneCount + nextIndex;

      if (nextIndex < 0) {
        nextTrackIndex = cloneCount - 1;
        activeIndexRef.current = itemCount - 1;
      } else if (nextIndex >= itemCount) {
        nextTrackIndex = cloneCount + itemCount;
        activeIndexRef.current = 0;
      } else {
        activeIndexRef.current = nextIndex;
      }

      isAnimatingRef.current = true;
      setIsAnimating(true);
      setIsTransitioning(true);
      setTrackIndex(nextTrackIndex);
      armTransitionFallback();
    },
    [armTransitionFallback, canSlide, cloneCount, itemCount]
  );

  const goTo = useCallback(
    (nextIndex) => {
      if (!canSlide) return;

      const normalizedIndex = wrapIndex(nextIndex, itemCount);
      if (normalizedIndex === activeIndex) return;

      activeIndexRef.current = normalizedIndex;
      isAnimatingRef.current = true;
      setIsAnimating(true);
      setIsTransitioning(true);
      setTrackIndex(cloneCount + normalizedIndex);
      armTransitionFallback();
    },
    [activeIndex, armTransitionFallback, canSlide, cloneCount, itemCount]
  );

  const handleTransitionEnd = useCallback(() => {
    if (!canSlide) return;

    let normalizedIndex = null;
    if (trackIndex >= itemCount + cloneCount || trackIndex < cloneCount) {
      normalizedIndex =
        cloneCount + wrapIndex(trackIndex - cloneCount, itemCount);
    }

    if (normalizedIndex !== null) {
      activeIndexRef.current = wrapIndex(normalizedIndex - cloneCount, itemCount);
      setIsTransitioning(false);
      setTrackIndex(normalizedIndex);
      window.requestAnimationFrame(() => {
        setIsTransitioning(true);
        finishAnimation();
      });
      return;
    }

    finishAnimation();
  }, [canSlide, cloneCount, finishAnimation, itemCount, trackIndex]);

  const handleTouchStart = useCallback(
    (clientX) => {
      touchStartRef.current = clientX;
      pause();
    },
    [pause]
  );

  const handleTouchEnd = useCallback(
    (clientX) => {
      if (touchStartRef.current === null) {
        resume(1400);
        return;
      }

      const distance = touchStartRef.current - clientX;
      touchStartRef.current = null;

      if (Math.abs(distance) > SWIPE_THRESHOLD) {
        moveBy(distance > 0 ? 1 : -1);
      }

      resume(1600);
    },
    [moveBy, resume]
  );

  useEffect(() => {
    const updateVisibleCount = () => {
      const nextVisibleCount = getVisibleCount();
      setVisibleCount(nextVisibleCount);
      setIsTransitioning(false);
      setTrackIndex(nextVisibleCount);
      isAnimatingRef.current = false;
      setIsAnimating(false);
      window.requestAnimationFrame(() => setIsTransitioning(true));
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, [itemCount]);

  useEffect(() => {
    if (!canSlide || isPaused || isAnimating) {
      lastFrameTimeRef.current = null;
      return undefined;
    }

    const tick = (timestamp) => {
      if (lastFrameTimeRef.current === null) {
        lastFrameTimeRef.current = timestamp;
      }

      elapsedRef.current += timestamp - lastFrameTimeRef.current;
      lastFrameTimeRef.current = timestamp;

      if (elapsedRef.current >= AUTOPLAY_DELAY) {
        elapsedRef.current = 0;
        moveBy(1);
      }

      animationFrameRef.current = window.requestAnimationFrame(tick);
    };

    animationFrameRef.current = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(animationFrameRef.current);
  }, [canSlide, isAnimating, isPaused, moveBy]);

  useEffect(() => {
    return () => {
      window.cancelAnimationFrame(animationFrameRef.current);
      window.clearTimeout(resumeTimerRef.current);
      window.clearTimeout(transitionTimerRef.current);
    };
  }, []);

  return {
    activeIndex,
    canSlide,
    clonedIndexes,
    goTo,
    handleTouchEnd,
    handleTouchStart,
    handleTransitionEnd,
    isAnimating,
    isTransitioning,
    moveBy,
    pause,
    resume,
    slideWidth,
    translateIndex,
    visibleCount,
  };
}
