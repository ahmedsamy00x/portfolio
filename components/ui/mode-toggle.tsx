"use client";

import * as React from "react";
import { Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-sm text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-offset-1"
    >
      <Sun
        aria-hidden
        className="h-4 w-4 rotate-0 scale-100 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] dark:-rotate-90 dark:scale-0"
      />
      <Moon
        aria-hidden
        className="absolute h-4 w-4 rotate-90 scale-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] dark:rotate-0 dark:scale-100"
      />
    </button>
  );
}
