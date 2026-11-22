import { getJsonData } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";
import { Timeline } from "@/components/Timeline";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileText, Mail } from "lucide-react";

export default async function Home() {
  const homeData = getJsonData("home.json");
  const statusData = getJsonData("status.json");
  const projectsData = getJsonData("projects.json");
  const experienceData = getJsonData("experience.json");
  const researchData = getJsonData("research.json");

  const featuredProjects = projectsData?.filter((p: any) => p.featured) || [];
  const selectedExperience = experienceData?.slice(0, 3) || [];

  return (
    <div className="max-w-4xl mx-auto px-6 space-y-32">
      {/* Hero Section */}
      <section className="pt-20 md:pt-32">
        <Image 
          src="/images/profile/my_image.png" 
          alt="Aayam Adhikari" 
          width={80} 
          height={80} 
          className="rounded-full object-cover mb-8 border border-border bg-muted shadow-sm"
        />
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
          {homeData?.hero.greeting}
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">
          {homeData?.hero.headline}
        </h2>
        <p className="text-lg text-foreground/80 max-w-2xl leading-relaxed mb-10">
          {homeData?.hero.bio}
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Link href="/resume" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-full hover:bg-foreground/90 transition-colors">
            <FileText className="w-4 h-4" />
            Resume
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-muted text-foreground font-medium rounded-full hover:bg-muted/80 transition-colors">
            <Mail className="w-4 h-4" />
            Contact
          </Link>
          <Link href="/research" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-full hover:bg-muted transition-colors">
            Research
          </Link>
          <Link href="/projects" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-full hover:bg-muted transition-colors">
            Projects
          </Link>
        </div>
      </section>

      {/* Current Status */}
      <section>
        <div className="p-8 rounded-3xl bg-muted/30 border border-border">
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Current Status
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.isArray(statusData) ? (
              statusData.map((item: any, i: number) => (
                <div key={i}>
                  <p className="text-sm text-muted-foreground mb-1">{item.title}</p>
                  <p className="font-medium">{item.description}</p>
                </div>
              ))
            ) : (
              Object.entries(statusData || {}).map(([key, val]: [string, any], i: number) => (
                <div key={i}>
                  <p className="text-sm text-muted-foreground mb-1 capitalize">{key}</p>
                  <p className="font-medium">{val}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Research & Innovation */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Research & Innovation</h2>
          <Link href="/research" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors group">
            View all <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchData?.projects.slice(0, 2).map((project: any, i: number) => (
            <div key={i} className="p-6 rounded-2xl border border-border bg-card hover:border-foreground/20 transition-colors">
              <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
              <p className="text-xs font-medium text-foreground">{project.role} @ {project.institution}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
          <Link href="/projects" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors group">
            View all <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project: any, i: number) => (
            <ProjectCard key={project.id} {...project} index={i} />
          ))}
        </div>
      </section>

      {/* Selected Experience */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Selected Experience</h2>
          <Link href="/experience" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors group">
            View all <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <Timeline items={selectedExperience.map((exp: any) => ({
          title: exp.role,
          subtitle: exp.company,
          date: exp.period,
          description: exp.description
        }))} />
      </section>
    </div>
  );
}
