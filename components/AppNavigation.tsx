"use client";
import {
  Home,
  User,
  FolderOpen,
  Mail,
  Navigation,
  Navigation2,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", icon: Home, label: "Home", position: "top" },
  { href: "/about", icon: User, label: "About", position: "right" },
  {
    href: "/projects",
    icon: FolderOpen,
    label: "Projects",
    position: "left",
  },
  // { href: "/contact", icon: Mail, label: "Contact", position: "left" },
];

// Rotation angles for center navigation icon based on link position
const rotationAngles = {
  top: 0,
  right: 90,
  bottom: 180,
  left: 270,
};

const AppNavigation = () => {
  const pathname = usePathname();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [activeLink, setActiveLink] = useState<string>("/");

  console.log(activeLink);

  // Initialize active link from pathname
  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const getPositionClasses = (position: string, activeLink: string) => {
    switch (position) {
      case "top":
        return "-top-4 left-1/2 transform -translate-x-1/2";
      case "bottom":
        return "-bottom-4 left-1/2 transform -translate-x-1/2";
      case "left":
        return `top-1/2 ${
          activeLink === "/contact" ? "-left-14" : "-left-4"
        } transform -translate-y-1/2`;
      case "right":
        return `top-1/2 ${
          activeLink === "/about" ? "-right-14" : "-right-4"
        } transform -translate-y-1/2`;
      default:
        return "";
    }
  };

  const getCurrentRotation = () => {
    if (hoveredLink) {
      const link = links.find((l) => l.href === hoveredLink);
      return link
        ? rotationAngles[link.position as keyof typeof rotationAngles]
        : 0;
    }
    const activeNavLink = links.find((l) => l.href === activeLink);
    return activeNavLink
      ? rotationAngles[activeNavLink.position as keyof typeof rotationAngles]
      : 0;
  };

  return (
    <div className="hidden lg:flex w-32 h-32 rounded-full border border-border items-center justify-center sticky top-10 left-10">
      {/* Center Navigation Icon */}
      <motion.div
        animate={{
          rotate: getCurrentRotation(),
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        className="flex items-center justify-center"
      >
        <Navigation2 size={20} className="text-foreground" />
      </motion.div>

      {/* Navigation Links */}
      {links.map((link) => {
        const isHovered = hoveredLink === link.href;
        const isActive = activeLink === link.href;
        const isExpanded = isActive;

        return (
          <motion.div
            key={link.href}
            className={`absolute ${getPositionClasses(
              link.position,
              activeLink
            )} cursor-pointer`}
            onMouseEnter={() => setHoveredLink(link.href)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Link href={link.href}>
              <motion.div
                className={`
                  flex
                  items-center justify-center gap-2
                  bg-background rounded-full border
                  transition-colors duration-200
                  ${isHovered ? "border-foreground" : "border-border"}
                  ${isActive ? "border-foreground" : ""}
                `}
                animate={{
                  width: isExpanded ? "auto" : "40px",
                  height: isExpanded ? "auto" : "40px",
                  paddingLeft: isExpanded ? "12px" : "0px",
                  paddingRight: isExpanded ? "12px" : "0px",
                  paddingTop: isExpanded ? "8px" : "0px",
                  paddingBottom: isExpanded ? "8px" : "0px",
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Icon Container */}
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <link.icon size={18} className="text-foreground" />
                </div>

                {/* Expanded Label */}
                {isExpanded && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{
                      opacity: { delay: 0.1, duration: 0.2 },
                      width: { duration: 0.3 },
                    }}
                    className="text-sm font-medium text-foreground whitespace-nowrap"
                  >
                    {link.label}
                  </motion.span>
                )}
              </motion.div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AppNavigation;
