"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { SearchDialog } from "./SearchDialog";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Research", href: "/research" },
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/skills" },
  { name: "Writing", href: "/writing" },
];

export function Navigation() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(true);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Reveal navigation after scrolling down 100px on the home page,
    // or always show on other pages.
    if (!isHome || latest > 150) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 max-w-[100vw]"
    >
      <div className="flex flex-row items-center gap-3 md:gap-6 px-4 md:px-6 py-3 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-sm max-w-full">
        <ul className="flex items-center gap-4 md:gap-6 text-sm font-medium overflow-x-auto no-scrollbar whitespace-nowrap mask-image-linear-gradient">
          {links.map((link) => (
            <li key={link.href} className="shrink-0">
              <Link
                href={link.href}
                className={`transition-colors hover:text-foreground ${
                  pathname === link.href ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="shrink-0 w-[1px] h-4 bg-border mx-1 md:mx-2" />
        <div className="flex items-center gap-2 shrink-0">
          <SearchDialog />
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
