import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
import Image from "next/image";
import React from "react";
import nextjs from "../../../public/next.svg";
import react from "../../../public/re.svg";
import typescript from "../../../public/ts.svg";
import tailwind from "../../../public/tail.svg";
import nodejs from "../../../public/three.svg";
import SectionTitle from "@/components/SectionTitle";

const stack = [nextjs, react, typescript, tailwind, nodejs];

const Stack = () => {
  return (
    <div>
      <SectionTitle title="Tech Stack" />
      <div className="flex size-full items-center justify-center bg-background">
        <Marquee>
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />
          <MarqueeContent>
            {stack.map((item, index) => (
              <MarqueeItem className="-mx-2 h-16 w-16" key={index}>
                <Image
                  alt={`Placeholder ${index}`}
                  className="overflow-hidden rounded-full ring-2 w-10 h-10 ring-background"
                  src={item}
                />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
    </div>
  );
};

export default Stack;
