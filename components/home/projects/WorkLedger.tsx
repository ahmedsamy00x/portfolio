import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowUpRight, GithubLogo, Plus } from "@phosphor-icons/react/ssr";
import type { projects } from "@/data";
import ProductSwitcher from "./ProductSwitcher";

type Entry = (typeof projects)[number];

const TechList = ({ items }: { items: string[] }) => (
  <span className="flex flex-wrap gap-x-2 gap-y-1 text-caption font-mono text-muted-foreground">
    {items.map((tech, i) => (
      <React.Fragment key={tech}>
        <span>{tech}</span>
        {i < items.length - 1 && (
          <span className="text-subtle-foreground/50 select-none" aria-hidden>
            ·
          </span>
        )}
      </React.Fragment>
    ))}
  </span>
);

const Links = ({ entry }: { entry: Entry }) => {
  const host = entry.previewLink
    ? entry.previewLink.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : "";
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
      {entry.previewLink && (
        <Link
          href={entry.previewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline text-small inline-flex items-baseline gap-1.5"
        >
          <span>Visit {host}</span>
          <ArrowUpRight size={13} className="translate-y-[2px]" aria-hidden />
        </Link>
      )}
      {entry.repoLink && (
        <Link
          href={entry.repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline text-small inline-flex items-center gap-1.5 text-muted-foreground"
        >
          <GithubLogo size={14} aria-hidden />
          <span>Source</span>
        </Link>
      )}
      {!entry.previewLink && entry.repoLink && (
        <span className="label-eyebrow">Deploy offline</span>
      )}
    </div>
  );
};

/**
 * Selected work as a ledger rather than a stack of cards.
 *
 * At rest the whole section is three typographic rows in roughly one screen,
 * which is the point: the structure is legible before any copy is read. Rows
 * open in place using native `details`, so expansion needs no JavaScript and
 * keyboard and screen-reader behaviour come for free. The only client code in
 * the section is the product switcher inside the lead row.
 */
const WorkLedger = ({ entries }: { entries: Entry[] }) => {
  const cols =
    "grid-cols-[34px_minmax(0,1fr)_18px] md:grid-cols-[34px_minmax(0,1.5fr)_minmax(0,0.8fr)_minmax(0,1.15fr)_18px]";

  return (
    <div>
      {/* Column heads. Hidden below md, where the rows collapse to two columns. */}
      <div
        aria-hidden
        className={`hidden md:grid ${cols} gap-4 pb-2.5`}
      >
        <span className="label-eyebrow">No.</span>
        <span className="label-eyebrow">Project</span>
        <span className="label-eyebrow">Role</span>
        <span className="label-eyebrow">Stack</span>
        <span />
      </div>

      <ol className="border-t border-[color:var(--rule)]">
        {entries.map((entry, i) => (
          <li key={entry.title} className="border-b border-[color:var(--border)]">
            <details open={i === 0} className="group">
              <summary
                className={`grid ${cols} gap-4 items-baseline py-5 md:py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden focus-visible:outline-offset-4`}
              >
                <span className="numeral text-subhead text-subtle-foreground">
                  {(i + 1).toString().padStart(2, "0")}
                </span>

                <span className="min-w-0">
                  <span className="block text-heading font-serif leading-[1.12] transition-colors duration-200 group-hover:text-accent group-open:text-accent">
                    {entry.title}
                  </span>
                  {/* Below md the role and stack columns are gone, so the
                      one-line summary stands in for them. */}
                  <span className="md:hidden mt-1.5 block text-small text-muted-foreground leading-relaxed">
                    {entry.summary}
                  </span>
                </span>

                <span className="hidden md:block text-small text-muted-foreground">
                  {entry.role}
                </span>

                {/* Three items keeps every closed row one line tall, so the
                    ledger reads as a table rather than a ragged list. The full
                    stack is in the open row. */}
                <span className="hidden md:block">
                  <TechList items={entry.technologies.slice(0, 3)} />
                </span>

                <Plus
                  size={14}
                  aria-hidden
                  className="justify-self-end text-subtle-foreground transition-transform duration-250 group-open:rotate-45"
                />
              </summary>

              <div className="grid gap-6 md:gap-8 pb-8 md:pb-10 md:grid-cols-[34px_minmax(0,1fr)_minmax(0,1.15fr)]">
                <span aria-hidden className="hidden md:block" />

                <div className="flex flex-col gap-4 min-w-0">
                  <p className="text-small text-foreground/85 leading-relaxed max-w-[56ch]">
                    {entry.description}
                  </p>
                  {entry.meta?.map(({ label, value }) => (
                    <p key={label} className="text-small text-muted-foreground">
                      <span className="label-eyebrow mr-2">{label}</span>
                      {value}
                    </p>
                  ))}
                  <TechList items={entry.technologies} />
                  <Links entry={entry} />
                </div>

                {entry.products ? (
                  <ProductSwitcher products={entry.products} />
                ) : (
                  <figure className="relative w-full aspect-[16/10] overflow-hidden border border-[color:var(--border)] bg-surface-sunken">
                    <Image
                      src={entry.image}
                      alt={entry.imageAlt}
                      fill
                      sizes="(min-width: 768px) 640px, 100vw"
                      className="object-cover object-top"
                    />
                  </figure>
                )}
              </div>
            </details>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default WorkLedger;
