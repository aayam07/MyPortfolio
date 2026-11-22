import { getJsonData } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";

export default function Projects() {
  const projectsData = getJsonData("projects.json") || [];
  
  return (
    <div className="max-w-4xl mx-auto px-6 space-y-16">
      <SectionHeader title="Projects" description="A collection of things I've built, from web platforms to iOS applications." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project: any, i: number) => (
          <ProjectCard key={project.id} {...project} index={i} />
        ))}
      </div>
    </div>
  );
}