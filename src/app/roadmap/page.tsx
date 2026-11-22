import { getJsonData } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";

export default function Roadmap() {
  const roadmap = getJsonData("roadmap.json");
  
  return (
    <div className="max-w-4xl mx-auto px-6 space-y-16">
      <SectionHeader title="Roadmap" description="A glimpse into the future. Goals, ideas, and long-term vision." />
      
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            Current Goals
          </h2>
          <ul className="space-y-3 pl-6">
            {roadmap?.currentGoals.map((item: string) => (
              <li key={item} className="list-disc text-lg text-foreground/80">{item}</li>
            ))}
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-muted-foreground">Future Projects</h2>
          <ul className="space-y-3 pl-6">
            {roadmap?.futureProjects.map((item: string) => (
              <li key={item} className="list-disc text-lg text-foreground/80">{item}</li>
            ))}
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-muted-foreground">Research Plans</h2>
          <ul className="space-y-3 pl-6">
            {roadmap?.researchPlans.map((item: string) => (
              <li key={item} className="list-disc text-lg text-foreground/80">{item}</li>
            ))}
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-muted-foreground">Startup Ideas</h2>
          <ul className="space-y-3 pl-6">
            {roadmap?.startupIdeas.map((item: string) => (
              <li key={item} className="list-disc text-lg text-foreground/80">{item}</li>
            ))}
          </ul>
        </section>
        
        <div className="p-8 bg-muted/30 border border-border rounded-2xl mt-12">
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-medium">Long-Term Vision</h2>
          <p className="text-xl font-medium leading-relaxed">{roadmap?.longTermVision}</p>
        </div>
      </div>
    </div>
  );
}