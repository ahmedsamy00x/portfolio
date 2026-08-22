import React from "react";

type Props = {
  index: string;
  title: string;
  meta?: string;
};

const SectionHeader = ({ index, title, meta }: Props) => {
  return (
    <header className="mb-10 md:mb-12">
      <div className="flex items-baseline justify-between gap-6">
        <span className="label-eyebrow">
          § {index} / {title}
        </span>
        {meta && (
          <span className="label-eyebrow num-tabular">{meta}</span>
        )}
      </div>
      <div
        aria-hidden
        className="mt-3 h-px w-full bg-[color:var(--border)]"
      />
    </header>
  );
};

export default SectionHeader;
