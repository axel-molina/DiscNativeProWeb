import type { Variants } from "framer-motion";

/** Contenedor que despliega sus hijos con efecto cascado. */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

/** Caja estándar: se desvanece y sube suavemente. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Escalado sutil para ventanas/capturas de la app. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Opción de viewport para reveals al entrar en pantalla (una sola vez). */
export const viewportOnce = { once: true, margin: "-80px" } as const;
