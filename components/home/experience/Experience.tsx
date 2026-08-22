import { experience } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SectionHeader from "@/components/SectionHeader";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";

const getInitials = (name: string) => {
  const prefix = name.split(/[-–—\s]/)[0];
  return prefix.length <= 3 ? prefix : prefix.charAt(0);
};

// Two treatments only: a real wordmark where one exists, serif initials
// otherwise. A third style (brand icon fonts) made the column look assembled.
const CompanyMark = ({ logo, name }: { logo: string; name: string }) => {
  const initials = logo ? "" : getInitials(name);

  return (
    <div className="w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-sm bg-surface-sunken border border-border flex items-center justify-center shrink-0">
      {logo ? (
        <Image
          src={logo}
          alt={name}
          width={48}
          height={48}
          className="object-contain w-full h-full"
        />
      ) : (
        <span
          aria-hidden
          className={`font-serif leading-none text-subtle-foreground -translate-y-[1px] ${
            initials.length > 1
              ? "text-subhead tracking-[-0.03em]"
              : "text-heading"
          }`}
        >
          {initials}
        </span>
      )}
    </div>
  );
};

const Experience = () => {
  return (
    <section aria-labelledby="experience-heading" className="py-12 md:py-16">
      <SectionHeader
        index="02"
        title="Professional Record"
        meta="2024 - Present"
      />

      <h2 id="experience-heading" className="sr-only">
        Experience
      </h2>

      <ol className="flex flex-col gap-12 md:gap-14">
        {experience.map((item, idx) => (
          <li
            key={`${item.company}-${idx}`}
            className="grid gap-6 md:gap-10 md:grid-cols-[160px_minmax(0,1fr)]"
          >
            <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-5">
              <span className="label-eyebrow num-tabular">
                {item.duration}
              </span>
              <CompanyMark logo={item.companyLogo} name={item.company} />
            </div>

            <article className="flex flex-col gap-3 md:gap-4">
              <header className="flex flex-col gap-1">
                <h3 className="text-heading font-serif leading-tight">
                  {item.role}
                </h3>
                <p className="text-small text-muted-foreground">
                  {item.companyLink ? (
                    <Link
                      href={item.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline inline-flex items-center gap-1 text-foreground/90"
                    >
                      {item.company}
                      <ArrowUpRight
                        size={12}
                        className="opacity-60"
                        aria-hidden
                      />
                    </Link>
                  ) : (
                    <span className="text-foreground/90">{item.company}</span>
                  )}
                  <span className="mx-2 text-subtle-foreground">/</span>
                  <span>{item.location}</span>
                </p>
              </header>

              <p className="text-small text-foreground/85 leading-relaxed max-w-[62ch]">
                {item.summary}
              </p>

              {/* Specifics sit under the summary as a scannable list rather than
                  a paragraph. Hairlines would over-rule the section, so the
                  indent alone carries the grouping. */}
              <ul className="flex flex-col gap-2 max-w-[68ch]">
                {item.highlights.map((point) => (
                  <li
                    key={point}
                    className="relative pl-5 text-small text-muted-foreground leading-relaxed"
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-[0.7em] h-px w-2.5 bg-[color:var(--rule-soft)]"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
