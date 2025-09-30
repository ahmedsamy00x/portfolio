import SectionTitle from "@/components/SectionTitle";
import React from "react";

const About = () => {
  return (
    <section className=" flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="About Me" />
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4">
              I&rsquo;m a passionate software developer with expertise in modern
              web technologies. I love creating beautiful, functional, and
              user-friendly applications.
            </p>
            <p className="text-lg">
              My journey in tech started with curiosity and has evolved into a
              career focused on building exceptional digital experiences.
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Node.js",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
