import Hero from "@/components/home/Hero";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <div className="">
      <TracingBeam className="px-12 md:px-6">
        {/* Hero Section */}
        <section className=" flex items-center py-20">
          <Hero />
        </section>

        {/* About Section */}
        <section className=" flex items-center justify-center py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 font-roboto">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg mb-4">
                  I&rsquo;m a passionate software developer with expertise in
                  modern web technologies. I love creating beautiful,
                  functional, and user-friendly applications.
                </p>
                <p className="text-lg">
                  My journey in tech started with curiosity and has evolved into
                  a career focused on building exceptional digital experiences.
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

        {/* Projects Section */}
        <section className=" flex items-center justify-center py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 font-roboto">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Project One</h3>
                <p className="text-muted-foreground mb-4">
                  A modern web application built with React and Next.js
                  featuring real-time updates and responsive design.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-primary/10 rounded text-xs">
                    React
                  </span>
                  <span className="px-2 py-1 bg-primary/10 rounded text-xs">
                    Next.js
                  </span>
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Project Two</h3>
                <p className="text-muted-foreground mb-4">
                  An innovative mobile-first application with advanced
                  animations and intuitive user interface design.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-primary/10 rounded text-xs">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-primary/10 rounded text-xs">
                    Framer Motion
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className=" flex items-center justify-center py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 font-roboto">
              Get In Touch
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              I&rsquo;m always interested in hearing about new opportunities and
              connecting with fellow developers. Let&rsquo;s build something
              amazing together!
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Contact Me
              </button>
              <button className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors">
                View Resume
              </button>
            </div>
          </div>
        </section>
      </TracingBeam>
    </div>
  );
}
