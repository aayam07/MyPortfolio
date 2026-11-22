import { getJsonData } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";
import { PenLine, ArrowUpRight } from "lucide-react";

export default function Writing() {
  const writingData = getJsonData("writing.json") || [];
  
  return (
    <div className="max-w-4xl mx-auto px-6 space-y-16">
      <SectionHeader 
        title="Writing" 
        description="Thoughts, essays, and technical breakdowns on computing systems, wireless networks, and engineering craft." 
      />
      
      {writingData.length === 0 ? (
        <div className="p-12 md:p-16 text-center rounded-3xl border border-dashed border-border bg-card/40 space-y-4">
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto text-muted-foreground">
            <PenLine className="w-6 h-6" />
          </div>
          <div className="space-y-1.5 max-w-md mx-auto">
            <h3 className="text-base font-semibold text-foreground">Articles in progress</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I&apos;m currently working on in-depth technical essays regarding live 5G point cloud streaming, semantic communication architectures, and high-velocity engineering.
            </p>
          </div>
          <p className="text-xs text-muted-foreground pt-2">
            Check back soon or follow my updates on{" "}
            <a 
              href="https://linkedin.com/in/aayam-adhikari-588aa11ba" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>{" "}
            and{" "}
            <a 
              href="https://github.com/aayam07" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              GitHub
            </a>.
          </p>
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
