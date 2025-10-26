import React from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroText = () => {
  return (
    <motion.div className="order-2 md:order-1 text-start space-y-3">
      <div>
        <h1 className="text-xl font-medium sm:text-3xl font-lora">
          Hey there, Welcome to my playground!
        </h1>
        <p className="mt-4 text-base max-w-xl leading-6">
          I&rsquo;m <strong className="italic">Ahmed Samy</strong>, and this is
          a quick introduction about me. I started my journey with curiosity
          years ago, and I&rsquo;ve been passionate about learning and creating
          since then. Graduated as a Computer Science Engineer from{" "}
          <strong className="italic">University Of Sadat City</strong>, and
          I&rsquo;ve been working as a Frontend Engineer for over 2 years{" "}
          <Link
            href="https://buguard.io"
            target="_blank"
            className="font-bold italic hover:text-primary transition"
          >
            @BuguardLLC
          </Link>
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
