"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  description?: string;
  details?: string;
}

export function Timeline({ items }: { items: TimelineItemProps[] }) {
  return (
    <div className="relative border-l border-border ml-3 md:ml-0 space-y-12">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-8 md:pl-10"
        >
          {/* Timeline Dot */}
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1.5 ring-4 ring-background" />
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
            <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
            <span className="text-sm font-medium text-muted-foreground mt-1 md:mt-0 whitespace-nowrap md:ml-4">
              {item.date}
            </span>
          </div>
          <h4 className="text-base font-medium text-muted-foreground mb-4">{item.subtitle}</h4>
          {item.description && (
            <p className="text-sm text-foreground/80 leading-relaxed mb-2">
              {item.description}
            </p>
          )}
          {item.details && (
            <p className="text-sm text-muted-foreground italic">
              {item.details}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
}
