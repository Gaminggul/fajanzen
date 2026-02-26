import { useEffect } from "react";

export function useScrollReveal(key: string) {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-animate]"),
    );
    if (elements.length === 0) {
      return;
    }

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    if (prefersReduced.matches) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );

    elements.forEach((el) => {
      const delay = el.dataset.delay;
      if (delay) {
        el.style.transitionDelay = `${delay}ms`;
      }
      observer.observe(el);
    });

    const fallbackTimer = window.setTimeout(() => {
      elements.forEach((el) => el.classList.add("is-visible"));
    }, 1200);

    return () => {
      window.clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, [key]);
}
