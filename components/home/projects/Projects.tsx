import React from "react";
import { projects } from "@/data";
import SectionHeader from "@/components/SectionHeader";
import WorkLedger from "./WorkLedger";

const Projects = () => (
  <section aria-labelledby="projects-heading" className="py-12 md:py-16">
    <SectionHeader
      index="04"
      title="Selected Work"
      meta={`${projects.length.toString().padStart(2, "0")} Entries`}
    />

    <h2 id="projects-heading" className="sr-only">
      Selected Work
    </h2>

    <WorkLedger entries={projects} />
  </section>
);

export default Projects;
