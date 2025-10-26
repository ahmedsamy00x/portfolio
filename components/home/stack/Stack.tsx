import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
import React from "react";
import {
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiSupabase,
  SiGreensock,
} from "react-icons/si";
import SectionTitle from "@/components/SectionTitle";

const stack = [
  { icon: SiReact, name: "React" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiGit, name: "Git" },
  { icon: SiSupabase, name: "Supabase" },
  { icon: SiGreensock, name: "GSAP" },
];

const Stack = () => {
  return (
    <div>
      <SectionTitle title="Tech Stack" />
      <div className="flex size-full items-center justify-center bg-background">
        <Marquee>
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />
          <MarqueeContent>
            {stack.map((item, index) => {
              const Icon = item.icon;
              return (
                <MarqueeItem className="-mx-1 h-16 w-16" key={index}>
                  <Icon className="w-10 h-10" aria-label={item.name} />
                </MarqueeItem>
              );
            })}
          </MarqueeContent>
        </Marquee>
      </div>
    </div>
  );
};

export default Stack;
