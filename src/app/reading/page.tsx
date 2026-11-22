import { getJsonData } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";

export default function Reading() {
  const reading = getJsonData("reading.json") || [];
  
  return (
    <div className="max-w-4xl mx-auto px-6 space-y-16">
      <SectionHeader title="Reading" description="Books I've read, am currently reading, or plan to read." />
      
      {reading.length === 0 ? (
        <div className="p-12 text-center rounded-3xl border border-dashed border-border bg-muted/20">
          <p className="text-muted-foreground">Library is currently being updated. Check back soon.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Future reading rendering */}
        </div>
      )}
    </div>
  );
}