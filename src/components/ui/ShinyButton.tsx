"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface ShinyButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export const ShinyButton = ({ children, href, className, onClick }: ShinyButtonProps) => {
  const content = (
    <motion.button
      initial={{ "--x": "100%", scale: 1 } as any}
      animate={{ "--x": "-100%" } as any}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className={cn(
        "relative rounded-lg px-6 py-3 font-medium backdrop-blur-xl transition-[box-shadow] duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsl(var(--primary)/10%)]",
        "bg-[radial-gradient(circle_at_50%_0%,hsla(var(--suma-blue)/10%)_0%,transparent_60%)] hover:shadow-[0_0_20px_hsla(var(--suma-blue)/20%)]",
        className
      )}
      onClick={onClick}
    >
      <span
        className="relative block h-full w-full text-sm uppercase tracking-wide text-neutral-100 dark:font-light dark:text-[rgb(255,255,255,90%)]"
        style={{
          maskImage:
            "linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/10%)_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),hsl(var(--primary)/10%)_calc(var(--x)+100%))] p-px"
      ></span>
    </motion.button>
  );

  if (href) {
    return (
      <Link href={href} className={cn("block", className)}>
        {content}
      </Link>
    );
  }

  return content;
};
