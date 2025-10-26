import React from "react";
import { Terminal, AnimatedSpan } from "@/components/ui/shadcn-io/terminal";
const page = () => {
  return (
    <div className="flex justify-center items-center">
      <Terminal>
        <AnimatedSpan delay={100}>$ blog is coming soon...</AnimatedSpan>
      </Terminal>
    </div>
  );
};

export default page;
