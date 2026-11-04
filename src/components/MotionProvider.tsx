"use client";

import React from "react";
import { MotionConfig } from "framer-motion";

/** Respeta la preferencia del sistema `prefers-reduced-motion`. */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
