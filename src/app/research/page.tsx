import { getJsonData } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";
import { Timeline } from "@/components/Timeline";

export default function Research() {
  const researchData = getJsonData("research.json");
  
  return (
    <div className="max-w-4xl mx-auto px-6 space-y-24">
      <SectionHeader title="Research" description="Exploring the frontiers of semantic communication and real-time holographic networks." />
      
      <section>
        <h2 className="text-2xl font-semibold tracking-tight mb-8">Current Focus</h2>
        <div className="flex flex-wrap gap-3">
          {researchData?.interests.map((interest: string) => (
            <span key={interest} className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium">
              {interest}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight mb-8">Projects</h2>
        <Timeline items={researchData?.projects.map((p: any) => ({
          title: p.title,
          subtitle: `${p.role} @ ${p.institution}`,
          date: p.period,
          description: p.description
        })) || []} />
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight mb-8">Publications</h2>
        <div className="space-y-6">
          {researchData?.publications.map((pub: any, i: number) => (
            <div key={i} className="p-6 rounded-2xl border border-border bg-card">
              <h3 className="font-semibold text-lg mb-2">{pub.title}</h3>
              <p className="text-sm text-foreground mb-2">{pub.authors}</p>
              <p className="text-sm text-muted-foreground italic mb-3">
                {pub.conference} ({pub.year})
                {pub.doi && (
                  <>
                    {" "}•{" "}
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 hover:text-foreground"
                    >
                      DOI: {pub.doi}
                    </a>
                  </>
                )}
              </p>
              <p className="text-sm text-foreground/80 bg-muted/50 p-4 rounded-xl border border-border/50">{pub.details}</p>
            </div>
          ))}
        </div>
      </section>

      {researchData?.presentations && researchData.presentations.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold tracking-tight mb-8">Presentations & Talks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchData.presentations.map((pres: any, i: number) => (
              <div key={i} className="p-6 rounded-2xl border border-border bg-card">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2">{pres.date}</span>
                <h3 className="font-semibold text-base mb-2">{pres.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{pres.event}</p>
                <p className="text-xs text-foreground/80">{pres.details}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}