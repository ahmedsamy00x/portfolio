"use client";

import * as React from "react";
import { Moon, Sun } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { useTheme } from "next-themes";

// next-themes' `disableTransitionOnChange` (app/layout.tsx) injects
// `*{transition:none!important}` for the frame in which the theme class flips,
// so a CSS transition on these icons can never play. Motion drives inline
// transforms instead, which that suppression does not reach.
const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const SWAP = { duration: 0.22, ease: EASE_OUT };
const FADE = { duration: 0.15, ease: EASE_OUT }; // reduced motion: opacity only
const INSTANT = { duration: 0 };

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const reduceMotion = useReducedMotion();
  // Only a real click should animate. The first paint and the hydration-time
  // correction of `isDark` must both land silently.
  const interacted = React.useRef(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;
  const transition = !interacted.current
    ? INSTANT
    : reduceMotion
      ? FADE
      : SWAP;

  // Under reduced motion the icons cross-fade in place: no rotation, no scale.
  const hidden = reduceMotion
    ? { opacity: 0, scale: 1 }
    : { opacity: 0, scale: 0.7 };

  const shown = { opacity: 1, rotate: 0, scale: 1 };

  return (
    <button
      type="button"
      onClick={() => {
        interacted.current = true;
        setTheme(isDark ? "light" : "dark");
      }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-sm text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-offset-1"
    >
      <motion.span
        aria-hidden
        className="absolute inline-flex"
        initial={false}
        animate={isDark ? { ...hidden, rotate: reduceMotion ? 0 : -70 } : shown}
        transition={transition}
      >
        <Sun className="h-4 w-4" />
      </motion.span>

      <motion.span
        aria-hidden
        className="absolute inline-flex"
        initial={false}
        animate={isDark ? shown : { ...hidden, rotate: reduceMotion ? 0 : 70 }}
        transition={transition}
      >
        <Moon className="h-4 w-4" />
      </motion.span>
    </button>
  );
}
