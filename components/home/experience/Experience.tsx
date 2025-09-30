"use client";
import SectionTitle from "@/components/SectionTitle";
import { experience } from "@/data";
import {
  ArrowLeft,
  ArrowLeftIcon,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const ExperienceItem = ({
  company,
  location,
  companyLogo,
  role,
  duration,
  description,
}: {
  company: string;
  location: string;
  companyLogo: string;
  role: string;
  duration: string;
  description: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded((val) => !val);
  };

  return (
    <div className="">
      <div
        className="flex items-start justify-between cursor-pointer min-h-[48px]"
        onClick={toggleExpanded}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex gap-3 items-start flex-1 min-w-0">
          <div className="flex-shrink-0">
            <Image
              src={companyLogo}
              alt={company}
              width={36}
              height={36}
              className="rounded-full object-contain"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-base font-medium truncate">{company}</h3>
              <motion.span
                className="text-muted-foreground/55 flex-shrink-0"
                animate={{
                  opacity: isHovered || isExpanded ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                {isExpanded ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </motion.span>
            </div>
            <p className="text-sm text-muted-foreground">{role}</p>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <p className="text-sm text-muted-foreground">{description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex-shrink-0 text-right ml-4">
          <p className="text-sm text-muted-foreground whitespace-nowrap">
            {duration}
          </p>
          <p className="text-xs text-muted-foreground italic whitespace-nowrap">
            {location}
          </p>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="pt-20">
      <SectionTitle title="Experience" />
      <div className="flex flex-col gap-6">
        {experience.map((item, index) => (
          <ExperienceItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
