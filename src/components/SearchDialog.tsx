"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { getJsonData } from "@/lib/data";

export function SearchDialog() {
  const [open, setOpen] = React.useState(false);
  const projectsData = getJsonData("projects.json") || [];
  const researchData = getJsonData("research.json")?.projects || [];
  const experienceData = getJsonData("experience.json") || [];
  
  const [data, setData] = React.useState<any>({ projects: projectsData, research: researchData, experience: experienceData });
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground bg-muted/50 rounded-full hover:bg-muted transition-colors border border-border"
      >
        <Search className="w-4 h-4" />
        <span className="hidden sm:inline-flex">Search...</span>
        <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 font-mono text-[10px] font-medium bg-background border border-border rounded">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Search projects, research, skills..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            
            <CommandGroup heading="Pages">
              <CommandItem onSelect={() => runCommand(() => router.push(`/skills`))}>
                <span className="font-medium">Skills & Toolchain</span>
              </CommandItem>
              <CommandItem onSelect={() => runCommand(() => router.push(`/projects`))}>
                <span className="font-medium">Projects</span>
              </CommandItem>
              <CommandItem onSelect={() => runCommand(() => router.push(`/research`))}>
                <span className="font-medium">Research</span>
              </CommandItem>
              <CommandItem onSelect={() => runCommand(() => router.push(`/experience`))}>
                <span className="font-medium">Experience</span>
              </CommandItem>
              <CommandItem onSelect={() => runCommand(() => router.push(`/resume`))}>
                <span className="font-medium">Resume</span>
              </CommandItem>
            </CommandGroup>
            
            {data.projects.length > 0 && (
              <CommandGroup heading="Projects">
                {data.projects.map((project: any) => (
                  <CommandItem
                    key={project.id}
                    onSelect={() => runCommand(() => router.push(`/projects`))}
                  >
                    <span className="font-medium">{project.title}</span>
                    <span className="ml-2 text-muted-foreground text-xs">{project.tags?.join(", ")}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}

            {data.research.length > 0 && (
              <CommandGroup heading="Research">
                {data.research.map((item: any, idx: number) => (
                  <CommandItem
                    key={idx}
                    onSelect={() => runCommand(() => router.push(`/research`))}
                  >
                    <span className="font-medium">{item.title}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}

            {data.experience.length > 0 && (
              <CommandGroup heading="Experience">
                {data.experience.map((exp: any, idx: number) => (
                  <CommandItem
                    key={idx}
                    onSelect={() => runCommand(() => router.push(`/experience`))}
                  >
                    <span className="font-medium">{exp.role} at {exp.company}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
