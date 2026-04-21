import Contact from "@/components/home/contact/Contact";
import Education from "@/components/home/education/Education";
import Experience from "@/components/home/experience/Experience";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/projects/Projects";
import Stack from "@/components/home/stack/Stack";

export default function Home() {
  return (
    <div className="container-page pb-24 md:pb-32">
      <Hero />
      <Stack />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}
