"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubLogo } from "@phosphor-icons/react";

type Props = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  previewLink: string;
  repoLink: string;
  index: number;
  isLast: boolean;
};

const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  previewLink,
  repoLink,
  index,
  isLast,
}: Props) => {
  const previewHost = previewLink
    ? previewLink.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : "";
  const hasAnyLink = Boolean(previewLink || repoLink);

  return (
    <li
      className={`grid gap-6 md:gap-8 lg:gap-10 md:grid-cols-[40px_minmax(0,1.35fr)_minmax(0,1fr)] md:items-start py-10 md:py-12 ${
        !isLast ? "border-b border-[color:var(--border)]" : ""
      }`}
    >
      <div className="numeral text-subhead md:text-heading text-subtle-foreground md:pt-1">
        {index.toString().padStart(2, "0")}
      </div>

      <div className="flex flex-col gap-5 min-w-0 order-3 md:order-none">
        <h3 className="text-heading font-serif leading-[1.1]">{title}</h3>

        <p className="text-small text-foreground/85 leading-relaxed max-w-[56ch]">
          {description}
        </p>

        <ul className="flex flex-wrap items-center gap-x-2 gap-y-1 text-caption font-mono text-muted-foreground">
          {technologies.map((tech, i) => (
            <li key={tech} className="inline-flex items-center">
              <span>{tech}</span>
              {i < technologies.length - 1 && (
                <span
                  className="ml-2 text-subtle-foreground/50 select-none"
                  aria-hidden
                >
                  ·
                </span>
              )}
            </li>
          ))}
        </ul>

        {hasAnyLink ? (
          <div className="flex items-center gap-6 pt-1">
            {previewLink && (
              <Link
                href={previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-small inline-flex items-baseline gap-1.5"
              >
                <span>Visit {previewHost}</span>
                <ArrowUpRight
                  size={13}
                  className="translate-y-[2px]"
                  aria-hidden
                />
              </Link>
            )}
            {repoLink && (
              <Link
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-small inline-flex items-center gap-1.5 text-muted-foreground"
              >
                <GithubLogo size={14} weight="regular" />
                <span>Source</span>
              </Link>
            )}
          </div>
        ) : (
          <p className="label-eyebrow pt-1">Private repository</p>
        )}
      </div>

      <figure className="w-full md:order-none">
        {image ? (
          <div className="relative w-full aspect-[16/10] overflow-hidden border border-[color:var(--border)] bg-surface-sunken">
            <Image
              src={image}
              alt={`${title} preview`}
              fill
              sizes="(min-width: 1024px) 420px, (min-width: 768px) 40vw, 100vw"
              className="object-cover transition-[transform,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] grayscale-[0.15] hover:grayscale-0 hover:scale-[1.015]"
            />
          </div>
        ) : (
          <div
            className="relative w-full aspect-[16/10] overflow-hidden border border-dashed border-[color:var(--border)] bg-surface-sunken flex items-center justify-center"
            aria-hidden
          >
            <span className="label-eyebrow text-subtle-foreground">
              Preview forthcoming
            </span>
          </div>
        )}
      </figure>
    </li>
  );
};

export default ProjectCard;
