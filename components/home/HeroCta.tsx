import React from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const HeroText = () => {
  return (
    <motion.div className="order-2 md:order-1 text-start space-y-3">
      <div>
        <h1 className="text-xl font-medium sm:text-3xl font-lora">
          Hey there, Welcome to my playground!
        </h1>
        <p className="mt-4 text-base max-w-xl leading-6">
          I&rsquo;m a software developer specializing in building exceptional
          digital experiences. Currently, I&rsquo;m focused on building
          responsive web applications.
        </p>
      </div>

      <Button variant="link" className="cursor-pointer px-0 transition">
        <span className="text-base">Let&rsquo;s collaborate</span>
        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowRight />
        </motion.div>
      </Button>
    </motion.div>
  );
};

export default HeroText;
