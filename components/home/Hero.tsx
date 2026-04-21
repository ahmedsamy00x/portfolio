"use client";
import Image from "next/image";
import Link from "next/link";
import me from "../../public/me.jpg";

const Hero = () => {
  return (
    <section
      aria-labelledby="masthead"
      className="py-12 md:py-16"
    >
      {/* Section meta row — index + locality, Werkstatt / are.na TOC feel */}
      <div className="flex items-baseline justify-between gap-6 mb-10 md:mb-14">
        <span className="label-eyebrow">§ 00 — Masthead</span>
        <span className="label-eyebrow num-tabular">
          Egypt · GMT+02
        </span>
      </div>

      <div className="grid gap-10 md:gap-12 md:grid-cols-[1fr_auto] md:items-end">
        {/* Masthead */}
        <div className="flex flex-col">
          <h1
            id="masthead"
            className="text-display font-serif"
            style={{ fontWeight: 500 }}
          >
            Ahmed
            <br />
            Samy<span className="text-accent">.</span>
          </h1>

          <p className="mt-6 md:mt-8 text-subhead max-w-[54ch] text-foreground/90">
            <span className="font-serif italic text-muted-foreground">—&nbsp;</span>
            Frontend engineer building considered web interfaces at{" "}
            <Link
              href="https://buguard.io"
              target="_blank"
              rel="noopener noreferrer"
              className="link-solid"
            >
              Buguard
            </Link>
            . Two years into it. Computer Science, University of Sadat City,
            class of 2024.
          </p>

          <p className="mt-4 text-small text-muted-foreground max-w-[58ch]">
            I care about typography, motion that serves meaning, and shipping
            things that feel considered. Currently open to selective
            collaborations.
          </p>
        </div>

        {/* Editorial byline portrait — small, offset, NOT a round avatar */}
        <figure className="md:w-[168px] md:self-end shrink-0">
          <div className="relative w-[120px] md:w-[168px] aspect-[4/5] overflow-hidden">
            <Image
              src={me}
              alt="Portrait of Ahmed Samy"
              fill
              sizes="(min-width: 768px) 168px, 120px"
              className="object-cover grayscale contrast-[1.05]"
              priority
            />
          </div>
          <figcaption className="label-eyebrow mt-3">
            Fig. 01 — Portrait
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
