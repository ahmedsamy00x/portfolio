import React from "react";

const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <div className="mb-12 space-y-3">
      <div className="  py-1  px-2.5 rounded-lg bg-primary/20 w-fit">
        <h2 className="font-medium text-sm text-primary font-lora">{title}</h2>
      </div>
      {subtitle && <p className="text-xl font-lora text-primary">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
