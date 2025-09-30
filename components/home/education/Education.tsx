"use client";
import SectionTitle from "@/components/SectionTitle";
import { education } from "@/data";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

const EducationItem = ({
  institution,
  institutionLink,
  institutionLogo,
  degree,
  duration,
  description,
}: {
  institution: string;
  institutionLink: string;
  institutionLogo: string;
  degree: string;
  duration: string;
  description: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open(institutionLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="">
      <Link
        className="flex items-start justify-between cursor-pointer min-h-[48px]"
        href={institutionLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex gap-3 items-start flex-1 min-w-0">
          <div className="flex-shrink-0">
            <Image
              src={institutionLogo}
              alt={institution}
              width={40}
              height={40}
              className="rounded-full object-contain"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-base font-medium truncate">{institution}</h3>
              <motion.span
                className="text-muted-foreground/55 flex-shrink-0"
                animate={{
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                <ExternalLink size={16} />
              </motion.span>
            </div>
            <p className="text-sm text-muted-foreground">{degree}</p>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
        </div>

        <div className="flex-shrink-0 text-right ml-4">
          <p className="text-sm text-muted-foreground whitespace-nowrap">
            {duration}
          </p>
        </div>
      </Link>
    </div>
  );
};

const Education = () => {
  return (
    <div className="pt-20">
      <SectionTitle title="Education" />
      <div className="flex flex-col gap-6">
        {education.map((item, index) => (
          <EducationItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Education;
