"use client";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="pb-20">
      <SectionTitle title="Get In Touch" />
      <div className="space-y-4">
        <p className="text-base max-w-xl leading-6">
          I&rsquo;m always interested in hearing about new opportunities and
          connecting with fellow developers. Let&rsquo;s build something amazing
          together!
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="mailto:ahmedsamy446x@gmail.com"
            className="cursor-pointer px-0 transition flex items-center text-primary"
          >
            <Button className="cursor-pointer pl-1">
              <Mail />
              <span className="text-sm font-medium">Email Me</span>
            </Button>
          </Link>
          <Link
            href="https://drive.google.com/file/d/1QO00XdoVby7wjLXu_cg0E7EgBVg7EqgU/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="cursor-pointer">
              <span className="text-sm font-medium">View Resume</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight size={16} />
              </motion.div>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
