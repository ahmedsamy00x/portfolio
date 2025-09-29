import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import me from "../../public/me.jpg";
import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  XLogo,
  XLogoIcon,
} from "@phosphor-icons/react";
import Link from "next/link";

const HeroImage = () => {
  return (
    <div className="flex items-center justify-between">
      <motion.div
        animate={{ scale: 1.1 }}
        className="w-24 h-24 relative overflow-hidden cursor-pointer group"
        whileHover={{ scale: 1.15 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Image
          src={me}
          alt="Picture of the author"
          className="rounded-full w-full relative z-10 grayscale-50 hover:grayscale-0 transition-all duration-300"
        />
      </motion.div>

      <ul className="flex items-center gap-1">
        <li className="hover:text-primary  cursor-pointer transition">
          <Link
            href="https://x.com/lowkeylu__"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XLogoIcon size={24} weight="duotone" />
          </Link>
        </li>
        <li className="hover:text-primary  cursor-pointer transition">
          <Link
            href="https://www.linkedin.com/in/ahmed-samy-a58302201/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogoIcon size={24} weight="duotone" />
          </Link>
        </li>
        <li className="hover:text-primary  cursor-pointer transition">
          <Link
            href="https://github.com/ahmedsamy00x"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogoIcon size={24} weight="duotone" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeroImage;
