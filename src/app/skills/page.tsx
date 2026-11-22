import { getJsonData } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";

export default function Skills() {
  const uses = getJsonData("uses.json");
  
  return (
    <div className="max-w-4xl mx-auto px-6 space-y-20">
      <SectionHeader 
        title="Skills & Toolchain" 
        description="A comprehensive overview of my technical proficiencies, research testbed hardware, and development environment." 
      />
      
      {/* Programming Languages */}
      <section>
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <span>Languages</span>
        </h2>
        <div className="flex flex-wrap gap-2.5">
          {uses?.languages?.map((lang: string) => (
            <span 
              key={lang} 
              className="px-4 py-2 bg-card border border-border text-foreground font-medium rounded-xl text-sm shadow-xs"
            >
              {lang}
            </span>
          ))}
        </div>
      </section>

      {/* Core Technical Domains */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <section className="p-6 rounded-2xl border border-border bg-card/50">
          <h2 className="text-lg font-semibold mb-4 text-foreground">Machine Learning & Deep Learning</h2>
          <ul className="space-y-3">
            {uses?.machineLearning?.map((item: string) => (
              <li key={item} className="flex items-center gap-3 text-sm text-foreground/80 before:content-[''] before:w-1.5 before:h-1.5 before:bg-foreground/40 before:rounded-full">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="p-6 rounded-2xl border border-border bg-card/50">
          <h2 className="text-lg font-semibold mb-4 text-foreground">Wireless, 5G & Spatial Computing (XR)</h2>
          <ul className="space-y-3">
            {uses?.wirelessAndXR?.map((item: string) => (
              <li key={item} className="flex items-center gap-3 text-sm text-foreground/80 before:content-[''] before:w-1.5 before:h-1.5 before:bg-foreground/40 before:rounded-full">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="p-6 rounded-2xl border border-border bg-card/50">
          <h2 className="text-lg font-semibold mb-4 text-foreground">Systems, Cloud & DevOps</h2>
          <ul className="space-y-3">
            {uses?.systemsAndCloud?.map((item: string) => (
              <li key={item} className="flex items-center gap-3 text-sm text-foreground/80 before:content-[''] before:w-1.5 before:h-1.5 before:bg-foreground/40 before:rounded-full">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="p-6 rounded-2xl border border-border bg-card/50">
          <h2 className="text-lg font-semibold mb-4 text-foreground">AI Toolchain</h2>
          <ul className="space-y-3">
            {uses?.aiTools?.map((item: string) => (
              <li key={item} className="flex items-center gap-3 text-sm text-foreground/80 before:content-[''] before:w-1.5 before:h-1.5 before:bg-foreground/40 before:rounded-full">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Hardware & Testbed Setup */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Hardware & Testbed Systems</h2>
        <div className="space-y-3">
          {uses?.hardware?.map((item: string) => (
            <div key={item} className="p-4 rounded-xl border border-border bg-card flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
              <p className="text-sm font-medium text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Development & Productivity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <section>
          <h2 className="text-xl font-semibold mb-4">Development Environment</h2>
          <ul className="space-y-3">
            {uses?.softwareAndDev?.map((item: string) => (
              <li key={item} className="flex items-center gap-3 text-sm text-foreground/80 before:content-[''] before:w-1.5 before:h-1.5 before:bg-foreground/40 before:rounded-full">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Productivity & Workflow</h2>
          <ul className="space-y-3">
            {uses?.productivity?.map((item: string) => (
              <li key={item} className="flex items-center gap-3 text-sm text-foreground/80 before:content-[''] before:w-1.5 before:h-1.5 before:bg-foreground/40 before:rounded-full">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
