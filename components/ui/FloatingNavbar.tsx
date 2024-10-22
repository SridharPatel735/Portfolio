"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    const offset = 100;
    if (link === "#about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const targetElement = document.querySelector(link);
      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-full md:max-w-[70vw] lg:max-w-fit fixed z-[5000] top-4 inset-x-0 mx-auto px-2 md:px-6 py-2 md:py-3 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-1 md:space-x-3",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`-${idx}`}
            href={navItem.link}
            onClick={(e) => handleClick(e, navItem.link)}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            {/* Add Framer Motion animation for the icon */}
            <motion.span
              className="block sm:hidden"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {navItem.icon}
            </motion.span>
            {/* Add hover animation for text */}
            <motion.span
              className="text-sm !cursor-pointer"
              whileHover={{ scale: 1.1, color: "#00aaff" }} // change color to your preferred hover color
              transition={{ type: "spring", stiffness: 200 }}
            >
              {navItem.name}
            </motion.span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};