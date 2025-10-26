"use client";
import SectionTitle from "@/components/SectionTitle";

import React from "react";

import ProjectCard from "./ProjectCard";
import { projects } from "@/data";

const Projects = () => {
  return (
    <section className=" flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Projects" />
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* <Link
          href="/projects"
          className="cursor-pointer mt-4 px-0 transition flex items-center text-primary"
        >
          <Button variant="link" className="cursor-pointer pl-1">
            <span className="text-base font-medium">All Projects</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowRight size={16} />
            </motion.div>
          </Button>
        </Link> */}
      </div>
    </section>
  );
};

export default Projects;
