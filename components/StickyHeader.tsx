"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { ModeToggle } from "@/components/ui/mode-toggle";

const navItems = [
  { href: "/", label: "Index" },
  { href: "/blog", label: "Notes" },
];

const StickyHeader = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-[background-color,border-color] duration-200 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-[color:var(--border)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-page h-16 flex items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="Ahmed Samy, home"
          className="flex items-baseline gap-2 group"
        >
          <span className="font-serif text-subhead leading-none tracking-tight group-hover:text-accent transition-colors duration-200">
            Ahmed Samy
          </span>
          <span
            aria-hidden
            className="label-eyebrow hidden sm:inline text-subtle-foreground/80"
          >
            / Frontend Engineer
          </span>
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-1">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative px-3 py-2 label-eyebrow transition-colors duration-200 ${
                      active
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        aria-hidden
                        className="absolute left-3 right-3 -bottom-[1px] h-px bg-foreground"
                        transition={{
                          type: "spring",
                          stiffness: 520,
                          damping: 40,
                        }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          <span
            aria-hidden
            className="mx-2 h-5 w-px bg-[color:var(--border)]"
          />
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
};

export default StickyHeader;
