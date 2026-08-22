import React from "react";
import SectionHeader from "@/components/SectionHeader";
import { stack } from "@/data";

const Stack = () => {
  return (
    <section aria-labelledby="stack-heading" className="py-12 md:py-16">
      <SectionHeader index="01" title="Tools of the Trade" meta="Current" />

      <h2 id="stack-heading" className="sr-only">
        Tools and technologies
      </h2>

      <dl className="grid gap-y-6 md:gap-y-7 md:grid-cols-[160px_minmax(0,1fr)] md:gap-x-10">
        {stack.map((group, i) => (
          <React.Fragment key={group.category}>
            <dt className="label-eyebrow md:pt-[0.35rem]">{group.category}</dt>
            {/* Flex-wrap rather than inline flow: the items and their middot
                separators carry no whitespace between them, so in inline flow
                a row like "Node.js·Express·REST·GraphQL" has no break
                opportunity and its min-content widens the grid track past the
                container. As flex items each one can start a new line. */}
            <dd
              className={`flex flex-wrap items-baseline gap-x-3 gap-y-1 min-w-0 text-heading font-serif text-foreground/95 ${
                i !== stack.length - 1
                  ? "pb-6 md:pb-7 border-b border-[color:var(--border)]"
                  : ""
              }`}
            >
              {group.items.map((item, idx) => (
                <React.Fragment key={item}>
                  <span>{item}</span>
                  {idx < group.items.length - 1 && (
                    <span
                      aria-hidden
                      className="text-muted-foreground/60 font-body text-subhead"
                    >
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </dd>
          </React.Fragment>
        ))}
      </dl>
    </section>
  );
};

export default Stack;
