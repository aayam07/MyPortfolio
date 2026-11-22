import { getJsonData } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";
import { Target, Compass, Lightbulb, Rocket, Milestone } from "lucide-react";

export default function Roadmap() {
  const roadmap = getJsonData("roadmap.json");
  
  return (
    <div className="max-w-4xl mx-auto px-6 space-y-20">
      <SectionHeader 
        title="Roadmap" 
        description="A transparent glimpse into what I'm aiming for—immediate milestones, future research, startup concepts, and long-term vision." 
      />
      
      {/* Current Goals */}
      {roadmap?.currentGoals?.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-emerald-500" />
            <h2 className="text-xl font-semibold tracking-tight text-foreground">Current Goals</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roadmap.currentGoals.map((item: any, idx: number) => (
              <div key={idx} className="p-6 rounded-2xl border border-border bg-card/70 flex flex-col justify-between space-y-4 hover:border-foreground/20 transition-colors">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-emerald-500 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      {item.status}
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm text-foreground">{item.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed pt-2 border-t border-border/50">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Future Projects & Research Plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Rocket className="w-5 h-5 text-foreground/80" />
            <h2 className="text-xl font-semibold tracking-tight text-foreground">Future Projects</h2>
          </div>
          <div className="space-y-4">
            {roadmap?.futureProjects?.map((item: any, idx: number) => (
              <div key={idx} className="p-6 rounded-2xl border border-border bg-card/50 space-y-2 hover:border-foreground/20 transition-colors">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm text-foreground">{item.title}</h3>
                  <span className="text-[10px] font-semibold text-muted-foreground px-2 py-0.5 rounded-full bg-muted">
                    {item.status}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-foreground/80" />
            <h2 className="text-xl font-semibold tracking-tight text-foreground">Research Plans</h2>
          </div>
          <div className="space-y-4">
            {roadmap?.researchPlans?.map((item: any, idx: number) => (
              <div key={idx} className="p-6 rounded-2xl border border-border bg-card/50 space-y-2 hover:border-foreground/20 transition-colors">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm text-foreground">{item.title}</h3>
                  <span className="text-[10px] font-semibold text-muted-foreground px-2 py-0.5 rounded-full bg-muted">
                    {item.status}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Startup Ideas */}
      {roadmap?.startupIdeas?.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-amber-500" />
            <h2 className="text-xl font-semibold tracking-tight text-foreground">Startup Ideas & Commercial Concepts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roadmap.startupIdeas.map((item: any, idx: number) => (
              <div key={idx} className="p-6 rounded-2xl border border-border bg-card/60 space-y-3 hover:border-foreground/20 transition-colors">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-base text-foreground">{item.title}</h3>
                  <span className="text-[10px] font-semibold text-amber-500 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                    {item.status}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Long-Term Vision Banner */}
      {roadmap?.longTermVision && (
        <div className="p-8 md:p-10 bg-muted/40 border border-border rounded-3xl space-y-3 relative overflow-hidden">
          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            <Milestone className="w-4 h-4 text-foreground/70" />
            Long-Term North Star
          </div>
          <p className="text-lg md:text-xl font-medium leading-relaxed text-foreground">
            "{roadmap.longTermVision}"
          </p>
        </div>
      )}
    </div>
  );
}
