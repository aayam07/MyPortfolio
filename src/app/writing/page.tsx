import { getJsonData } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";
import { ArrowUpRight } from "lucide-react";

export default function Writing() {
  const writingData = getJsonData("writing.json") || [];
  
  return (
    <div className="max-w-4xl mx-auto px-6 space-y-16">
      <SectionHeader 
        title="Writing" 
        description="Thoughts, essays, and technical breakdowns on systems, wireless networks, and engineering craft." 
      />
      
      {writingData.length === 0 ? (
        <div className="p-12 text-center rounded-3xl border border-dashed border-border bg-muted/20">
          <p className="text-muted-foreground">No posts yet. I'll be publishing here soon.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {writingData.map((post: any, idx: number) => (
            <article 
              key={idx} 
              className="p-6 md:p-8 rounded-2xl border border-border bg-card/60 hover:border-foreground/20 transition-colors group space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-muted-foreground">
                <span className="font-medium">{post.date}</span>
                <span>{post.readTime}</span>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors flex items-center justify-between gap-2">
                  <span>{post.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {post.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {post.tags?.map((tag: string) => (
                  <span 
                    key={tag} 
                    className="px-2.5 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
