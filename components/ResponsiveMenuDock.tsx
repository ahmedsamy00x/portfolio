"use client";

import { MenuDock } from "@/components/ui/shadcn-io/menu-dock";
import { Home, User, FolderOpen, Mail } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const menuItems = [
  {
    label: "Home",
    icon: Home,
    href: "/",
  },
  {
    label: "About",
    icon: User,
    href: "/about",
  },
  {
    label: "Projects",
    icon: FolderOpen,
    href: "/projects",
  },
  {
    label: "Contact",
    icon: Mail,
    href: "/contact",
  },
];

const ResponsiveMenuDock = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);

  // Update active index based on current pathname
  useEffect(() => {
    const currentIndex = menuItems.findIndex((item) => item.href === pathname);
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }
  }, [pathname]);

  // Create navigation items with onClick handlers
  const navigationItems = menuItems.map((item, index) => ({
    label: item.label,
    icon: item.icon,
    onClick: () => {
      setActiveIndex(index);
      router.push(item.href);
    },
  }));

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 lg:hidden">
      <MenuDock
        items={navigationItems}
        variant="default"
        orientation="horizontal"
        showLabels={false}
        animated={true}
        className="bg-background/90 backdrop-blur-md border border-border/50 shadow-lg"
      />
    </div>
  );
};

export default ResponsiveMenuDock;
