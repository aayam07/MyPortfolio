import { getJsonData } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const projects = getJsonData("projects.json") || [];
  return projects.map((project: any) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const projects = getJsonData("projects.json") || [];
  const project = projects.find((p: any) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const projects = getJsonData("projects.json") || [];
  const project = projects.find((p: any) => p.id === id);

  if (!project) {
    notFound();
  }

  const allLinks = project.links && project.links.length > 0 
    ? project.links 
    : project.link 
      ? [{ label: "Visit Project", url: project.link }] 
      : [];

  return (
    <div className="max-w-3xl mx-auto px-6 space-y-12">
      {/* Back button */}
      <Link 
        href="/projects" 
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to all projects
      </Link>

      {/* Header */}
      <div className="space-y-4">
        <div className="space-y-2">
          {project.role && (
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {project.role}
            </span>
          )}
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            {project.title}
          </h1>
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Action Links */}
        {allLinks.length > 0 && (
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {allLinks.map((item: any, idx: number) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-foreground text-background font-medium rounded-full text-sm hover:bg-foreground/90 transition-colors"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Deep Narrative Overview */}
      {project.longDescription && (
        <section className="space-y-4 pt-8 border-t border-border">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Overview & Background</h2>
          <p className="text-base text-foreground/85 leading-relaxed">
            {project.longDescription}
          </p>
        </section>
      )}

      {/* Engineering Highlights */}
      {project.keyHighlights && project.keyHighlights.length > 0 && (
        <section className="space-y-4 pt-8 border-t border-border">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Key Architecture & Engineering Highlights</h2>
          <div className="space-y-3">
            {project.keyHighlights.map((highlight: string, idx: number) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                <p className="text-sm text-foreground/85 leading-relaxed">{highlight}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Tech Stack */}
      <section className="space-y-4 pt-8 border-t border-border">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">Technologies & Frameworks</h2>
        <div className="flex flex-wrap gap-2">
          {project.tags?.map((tag: string) => (
            <span 
              key={tag}
              className="px-3 py-1.5 text-xs font-medium border border-border bg-card rounded-lg text-foreground/90"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Footer Navigation */}
      <div className="pt-8 border-t border-border flex justify-between items-center text-sm text-muted-foreground">
        <Link href="/projects" className="hover:text-foreground transition-colors">
          ← All Projects
        </Link>
        <Link href="/contact" className="hover:text-foreground transition-colors">
          Discuss this project →
        </Link>
      </div>
    </div>
  );
}
