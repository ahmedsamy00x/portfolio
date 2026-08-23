"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import type { projects } from "@/data";

type Product = NonNullable<(typeof projects)[number]["products"]>[number];

/**
 * The only client island in the work section. Everything around it is a
 * server-rendered ledger row.
 *
 * The switcher mirrors the rail inside the real product. Tabs follow the APG
 * pattern: roving tabindex, arrow keys, automatic activation. Panels are just
 * images, so activating on focus costs nothing.
 */
const ProductSwitcher = ({ products }: { products: Product[] }) => {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = products[active];
  const reduceMotion = useReducedMotion();

  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = products.length - 1;
    const next =
      e.key === "ArrowRight" ? (active === last ? 0 : active + 1)
      : e.key === "ArrowLeft" ? (active === 0 ? last : active - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  // Index of the first marketing site, so the tab row can rule between the
  // platform's apps and the sites in front of them.
  const firstSite = products.findIndex((p) => p.kind === "site");

  return (
    <div className="flex flex-col gap-4">
      <figure
        id={`product-panel-${active}`}
        role="tabpanel"
        aria-labelledby={`product-tab-${active}`}
        className="relative w-full aspect-[16/10] overflow-hidden border border-[color:var(--border)] bg-surface-sunken"
      >
        {products.map((p, i) => (
          <Image
            key={p.code}
            src={p.image}
            alt={i === active ? p.imageAlt : ""}
            aria-hidden={i !== active}
            fill
            sizes="(min-width: 1024px) 700px, 100vw"
            priority={i === 0}
            className={`object-cover object-top transition-opacity duration-300 ease-[var(--ease-out)] motion-reduce:transition-none ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </figure>

      <div
        role="tablist"
        aria-label="Products and sites in the platform"
        onKeyDown={onKeyDown}
        className="flex flex-wrap items-center gap-x-1 gap-y-1 border-b border-[color:var(--border)]"
      >
        {products.map((p, i) => (
          <React.Fragment key={p.code}>
            {i === firstSite && firstSite > 0 && (
              <span
                aria-hidden
                className="mx-2 h-4 w-px bg-[color:var(--border)] self-center"
              />
            )}
            <button
              ref={(el) => { tabRefs.current[i] = el; }}
              id={`product-tab-${i}`}
              role="tab"
              type="button"
              aria-selected={i === active}
              aria-controls={`product-panel-${i}`}
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={`relative label-eyebrow px-2.5 py-2.5 -mb-px border-b border-transparent transition-colors duration-200 ${
                i === active
                  ? "text-foreground"
                  : "text-subtle-foreground hover:text-foreground"
              }`}
            >
              {p.code}
              {i === active && (
                <motion.span
                  layoutId="product-tab-indicator"
                  aria-hidden
                  className="absolute inset-x-0 -bottom-px h-px bg-accent"
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 520, damping: 40 }
                  }
                />
              )}
            </button>
          </React.Fragment>
        ))}
      </div>

      <p className="text-small text-muted-foreground leading-relaxed max-w-[62ch]">
        <span className="text-foreground/90">{current.name}.</span> {current.blurb}
        {current.href && (
          <>
            {" "}
            <Link
              href={current.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex items-baseline gap-1 whitespace-nowrap"
            >
              <span>Visit</span>
              <ArrowUpRight size={12} className="translate-y-[2px]" aria-hidden />
            </Link>
          </>
        )}
      </p>
    </div>
  );
};

export default ProductSwitcher;
