"use client";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import React from "react";
import da from "../../../public/darkatlas.webp";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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

        <Link
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
        </Link>
      </div>
    </section>
  );
};

export default Projects;
