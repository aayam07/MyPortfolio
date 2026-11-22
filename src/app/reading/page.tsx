import { getJsonData } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";
import { BookOpen, CheckCircle2, Bookmark } from "lucide-react";

export default function Reading() {
  const reading = getJsonData("reading.json");
  
  return (
    <div className="max-w-4xl mx-auto px-6 space-y-20">
      <SectionHeader 
        title="Reading" 
        description="Books that shape my thinking on engineering, distributed systems, research, and company building." 
      />
      
      {/* Currently Reading */}
      {reading?.currentlyReading?.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-500" />
            <h2 className="text-xl font-semibold tracking-tight text-foreground">Currently Reading</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reading.currentlyReading.map((book: any, idx: number) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl border border-border bg-card/70 space-y-3 hover:border-foreground/20 transition-colors"
              >
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-emerald-500 uppercase tracking-wider block">
                    {book.category}
                  </span>
                  <h3 className="text-base font-semibold text-foreground leading-snug">{book.title}</h3>
                  <p className="text-xs text-muted-foreground">by {book.author}</p>
                </div>
                <p className="text-xs md:text-sm text-foreground/80 leading-relaxed pt-2 border-t border-border/50">
                  {book.notes}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Recently Finished */}
      {reading?.recentlyFinished?.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-foreground/70" />
            <h2 className="text-xl font-semibold tracking-tight text-foreground">Recently Finished</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reading.recentlyFinished.map((book: any, idx: number) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl border border-border bg-card/50 space-y-3 hover:border-foreground/20 transition-colors"
              >
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block">
                    {book.category}
                  </span>
                  <h3 className="text-base font-semibold text-foreground leading-snug">{book.title}</h3>
                  <p className="text-xs text-muted-foreground">by {book.author}</p>
                </div>
                <p className="text-xs md:text-sm text-foreground/80 leading-relaxed pt-2 border-t border-border/50">
                  {book.notes}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Recommended Books */}
      {reading?.recommended?.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-foreground/70" />
            <h2 className="text-xl font-semibold tracking-tight text-foreground">Recommended Books</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reading.recommended.map((book: any, idx: number) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl border border-border bg-card/40 flex flex-col justify-between space-y-3 hover:border-foreground/20 transition-colors"
              >
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block">
                    {book.category}
                  </span>
                  <h3 className="text-sm font-semibold text-foreground leading-snug">{book.title}</h3>
                  <p className="text-xs text-muted-foreground">by {book.author}</p>
                </div>
                <p className="text-xs text-foreground/75 leading-relaxed pt-2 border-t border-border/50">
                  {book.notes}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
