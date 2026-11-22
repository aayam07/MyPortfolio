import { getJsonData } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";

export default function Writing() {
  const writingData = getJsonData("writing.json") || [];
  
  return (
    <div className="max-w-4xl mx-auto px-6 space-y-16">
      <SectionHeader title="Writing" description="Thoughts, essays, and technical articles." />
      
      {writingData.length === 0 ? (
        <div className="p-12 text-center rounded-3xl border border-dashed border-border bg-muted/20">
          <p className="text-muted-foreground">No posts yet. I'll be publishing here soon.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Future blog post rendering */}
        </div>
      )}
    </div>
  );
}