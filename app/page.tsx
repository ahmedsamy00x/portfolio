import About from "@/components/home/about/About";
import Contact from "@/components/home/contact/Contact";
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
        <Contact />
      </TracingBeam>
    </div>
  );
}
