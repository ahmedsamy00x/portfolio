import About from "@/components/home/about/About";
import Education from "@/components/home/education/Education";
import Experience from "@/components/home/experience/Experience";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/projects/Projects";
import Stack from "@/components/home/stack/Stack";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <div className="">
      <TracingBeam className="px-12 md:px-6">
        {/* Hero Section */}
        <section className=" flex items-center py-20">
          <Hero />
        </section>

        <section>
          <Stack />
        </section>

        {/* About Section */}
        {/* <About /> */}

        <section>
          <Experience />
        </section>
        <section>
          <Education />
        </section>
        {/* Projects Section */}
        <Projects />

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
