import { education } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SectionHeader from "@/components/SectionHeader";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";

const Education = () => {
  return (
    <section aria-labelledby="education-heading" className="py-12 md:py-16">
      <SectionHeader index="03" title="Formation" meta="2020 - 2024" />

      <h2 id="education-heading" className="sr-only">
        Education
      </h2>

      <ol className="flex flex-col gap-12 md:gap-14">
        {education.map((item) => (
          <li
            key={item.institution}
            className="grid gap-6 md:gap-10 md:grid-cols-[160px_minmax(0,1fr)]"
          >
            <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-5">
              <span className="label-eyebrow num-tabular">
                {item.duration}
              </span>
              <div className="w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-sm bg-surface-sunken border border-border flex items-center justify-center shrink-0">
                <Image
                  src={item.institutionLogo}
                  alt={item.institution}
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>

            <article className="flex flex-col gap-3 md:gap-4">
              <header className="flex flex-col gap-1">
                <h3 className="text-heading font-serif leading-tight">
                  {item.degree}
                </h3>
                <p className="text-small text-muted-foreground">
                  <Link
                    href={item.institutionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-solid inline-flex items-center gap-1 text-foreground/90"
                  >
                    {item.institution}
                    <ArrowUpRight
                      size={12}
                      className="opacity-60"
                      aria-hidden
                    />
                  </Link>
                </p>
              </header>

              <p className="text-small text-foreground/80 leading-relaxed max-w-[68ch]">
                {item.description}
              </p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Education;
