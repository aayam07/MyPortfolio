"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  index: number;
}

export function ProjectCard({ title, description, tags, link, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col justify-between p-6 rounded-2xl bg-card border border-border hover:border-foreground/20 transition-colors shadow-sm"
    >
      <div>
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          {link && (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={`View ${title}`}
            >
              <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
            </Link>
          )}
        </div>
        <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
