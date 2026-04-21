"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data";
import SectionHeader from "@/components/SectionHeader";

const Projects = () => {
  return (
    <section aria-labelledby="projects-heading" className="py-12 md:py-16">
      <SectionHeader
        index="04"
        title="Selected Work"
        meta={`${projects.length.toString().padStart(2, "0")} Entries`}
      />

      <h2 id="projects-heading" className="sr-only">
        Selected Work
      </h2>

      <ol className="flex flex-col">
        {projects.map((project, idx) => (
          <ProjectCard
            key={project.title}
            {...project}
            index={idx + 1}
            isLast={idx === projects.length - 1}
          />
        ))}
      </ol>
    </section>
  );
};

export default Projects;
