import React from "react";
import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "Notes — Ahmed Samy",
  description: "Writing on frontend engineering, craft, and small experiments.",
};

const BlogPage = () => {
  return (
    <div className="container-page pb-24 md:pb-32">
      <section aria-labelledby="notes-heading" className="py-12 md:py-16">
        <SectionHeader index="—" title="Notes" meta="Forthcoming" />

        <div className="grid gap-10 md:grid-cols-[1fr_minmax(0,1fr)] md:items-start">
          <h1
            id="notes-heading"
            className="text-title font-serif leading-[1.05]"
          >
            A journal on
            <br />
            <span className="italic text-accent">interface craft</span>.
          </h1>
          <p className="text-small text-muted-foreground leading-relaxed max-w-[54ch] md:pt-2">
            This space is being set. Short pieces on frontend engineering,
            animation, typography, and the small decisions that separate work
            that ships from work that lasts. First entries due later this year.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
