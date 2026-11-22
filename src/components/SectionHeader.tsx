"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({ title, description, align = "left" }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${align === "center" ? "text-center" : ""}`}
    >
      <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className={`text-muted-foreground text-lg max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
