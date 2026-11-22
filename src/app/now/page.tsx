import { getJsonData } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";
import { MapPin, Calendar, Sparkles, Heart } from "lucide-react";

export default function Now() {
  const now = getJsonData("now.json");
  
  return (
    <div className="max-w-3xl mx-auto px-6 space-y-16">
      <div className="space-y-4">
        <SectionHeader 
          title="Now" 
          description="A public snapshot of what I'm focused on, building, and exploring at this exact moment in time." 
        />
        
        {/* Meta Status Badge */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-2">
          {now?.statusTag && (
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 font-medium border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {now.statusTag}
            </span>
          )}
          {now?.location && (
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              {now.location}
            </span>
          )}
          {now?.lastUpdated && (
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              Updated {now.lastUpdated}
            </span>
          )}
        </div>
      </div>
      
      {/* Dynamic Sections */}
      <div className="space-y-8">
        {now?.sections?.map((section: any, idx: number) => (
          <div 
            key={idx} 
            className="p-6 md:p-8 rounded-2xl border border-border bg-card/60 space-y-2 hover:border-foreground/20 transition-colors"
          >
            <h3 className="text-base font-semibold text-foreground tracking-tight">
              {section.title}
            </h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              {section.description}
            </p>
          </div>
        ))}
      </div>

      {/* What Excites Me */}
      {now?.excites && (
        <div className="p-8 rounded-3xl border border-border bg-muted/30 relative overflow-hidden">
          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-foreground/70" />
            What excites me right now
          </div>
          <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed italic">
            "{now.excites}"
          </p>
        </div>
      )}

      {/* Personal Motto */}
      {now?.motto && (
        <div className="p-8 rounded-3xl border border-border bg-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 text-rose-500" />
              Guiding Principle
            </div>
            <p className="text-base font-medium text-foreground">
              "{now.motto}"
            </p>
          </div>
          <span className="text-xs text-muted-foreground px-3 py-1 bg-muted rounded-full shrink-0">
            My Motto
          </span>
        </div>
      )}

      {/* Sivers Credit */}
      <p className="text-xs text-center text-muted-foreground pt-4">
        Inspired by Derek Sivers'{" "}
        <a 
          href="https://nownownow.com/about" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="underline underline-offset-4 hover:text-foreground transition-colors"
        >
          /now page movement
        </a>.
      </p>
    </div>
  );
}
