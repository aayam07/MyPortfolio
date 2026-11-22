"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectLink {
  label: string;
  url: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  links?: ProjectLink[];
  index: number;
}

export function ProjectCard({ title, description, tags, link, links, index }: ProjectCardProps) {
  const primaryLink = link || links?.[0]?.url;
  const hasMultipleLinks = links && links.length > 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col justify-between p-6 rounded-2xl bg-card border border-border hover:border-foreground/20 transition-colors shadow-sm"
    >
      <div>
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {primaryLink ? (
              <a href={primaryLink} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">
                {title}
              </a>
            ) : (
              title
            )}
          </h3>
          {primaryLink && !hasMultipleLinks && (
            <a
              href={primaryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-1 shrink-0"
              aria-label={`View ${title}`}
            >
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          )}
        </div>

        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {links.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium border border-border rounded-full hover:bg-muted text-foreground/90 transition-colors"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
              </a>
            ))}
          </div>
        )}

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
