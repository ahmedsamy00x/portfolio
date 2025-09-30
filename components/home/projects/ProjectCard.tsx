"use client";
import { Button } from "@/components/ui/button";
import { GithubLogoIcon } from "@phosphor-icons/react";
import { Navigation } from "lucide-react";
// import { Globe } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  previewLink,
  repoLink,
}: {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  previewLink: string;
  repoLink: string;
}) => {
  return (
    <div className="bg-card  rounded-lg border overflow-hidden hover:shadow-sm transition">
      <Image src={image} alt={title} width={500} height={300} />
      <div className="p-2 mt-3">
        <h3 className="text-base font-semibold mb-4">{title}</h3>
        <p className="text-muted-foreground mb-4 text-sm">{description}</p>
        <div className="flex gap-2 text-xs flex-wrap">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-primary/10 rounded text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <Link
            href={repoLink}
            target="_blank"
            className="p-1 hover:text-primary rounded-full cursor-pointer bg-primary/20 w-8 h-8 flex items-center justify-center"
          >
            <GithubLogoIcon size={16} />
          </Link>
          <Link
            href={previewLink}
            target="_blank"
            className="p-1 hover:text-primary rounded-full cursor-pointer bg-primary/20 w-8 h-8 flex items-center justify-center"
          >
            <Navigation size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
