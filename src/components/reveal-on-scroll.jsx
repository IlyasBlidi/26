import { useEffect, useRef, useState } from "react";

export const RevealOnScroll = ({
  children,
  threshold = 0.2,
  rootMargin = "0px 0px -50px 0px",
  visibleClass = "visible",
  hiddenClass = "reveal",
  once = true,
}) => {
  const ref = useRef(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          ref.current.classList.add(visibleClass);
          if (once) {
            observer.unobserve(ref.current);
            setHasRevealed(true);
          }
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current && !(once && hasRevealed)) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
      observer.disconnect();
    };
  }, [threshold, rootMargin, visibleClass, once, hasRevealed]);

  return (
    <div ref={ref} className={hiddenClass}>
      {children}
    </div>
  );
};

export default RevealOnScroll;
