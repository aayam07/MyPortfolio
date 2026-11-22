import { getJsonData } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";
import { Timeline } from "@/components/Timeline";

export default function Experience() {
  const experienceData = getJsonData("experience.json") || [];
  const leadershipData = getJsonData("leadership.json") || [];
  const educationData = getJsonData("education.json") || [];
  
  return (
    <div className="max-w-4xl mx-auto px-6 space-y-24">
      <SectionHeader title="Experience" description="Professional history, leadership roles, and academic background." />
      
      <section>
        <h2 className="text-2xl font-semibold tracking-tight mb-8">Professional & Research</h2>
        <Timeline items={experienceData.map((exp: any) => ({
          title: exp.role,
          subtitle: exp.company,
          date: exp.period,
          description: exp.description,
          details: `${exp.type} • ${exp.location}`
        }))} />
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight mb-8">Leadership & Volunteering</h2>
        <Timeline items={leadershipData.map((item: any) => ({
          title: item.role,
          subtitle: item.organization,
          date: item.year,
          description: item.description
        }))} />
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold tracking-tight mb-8">Education</h2>
        <Timeline items={educationData.map((edu: any) => ({
          title: edu.degree,
          subtitle: edu.institution,
          date: edu.period,
          description: edu.details,
          details: edu.location
        }))} />
      </section>
    </div>
  );
}