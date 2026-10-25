import { useEffect, useRef, useState } from "react";

// Número que cuenta desde 0 hasta "value" cuando aparece en pantalla (solo la primera vez)
export function AnimatedCounter({ value, label, duration = 1600 }) {
  const ref = useRef(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const element = ref.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame;

    // IntersectionObserver avisa cuando el contador entra en la pantalla
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if (reduceMotion) {
          setCurrent(value);
          return;
        }

        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          // Empieza rápido y frena al final
          const eased = 1 - Math.pow(1 - progress, 3);
          setCurrent(Math.round(eased * value));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <p ref={ref} className="counter">
      {/* El lector de pantalla lee el número final, no cada paso de la animación */}
      <span className="counter-number" aria-hidden="true">{current}</span>
      <span className="visually-hidden">{value}</span>
      <span className="counter-label">{label}</span>
    </p>
  );
}
