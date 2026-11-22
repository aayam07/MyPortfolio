import { SectionHeader } from "@/components/SectionHeader";
import { Download, ExternalLink } from "lucide-react";

export default function Resume() {
  return (
    <div className="max-w-5xl mx-auto px-6 space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <SectionHeader title="Resume" description="My professional and academic timeline." />
        <div className="flex items-center gap-4 pb-4">
          <a href="/resume/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground font-medium rounded-full hover:bg-muted transition-colors text-sm">
            <ExternalLink className="w-4 h-4" />
            Open in new tab
          </a>
          <a href="/resume/resume.pdf" download className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background font-medium rounded-full hover:bg-foreground/90 transition-colors text-sm">
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>
      </div>
      
      <div className="w-full h-[800px] border border-border rounded-2xl overflow-hidden bg-muted/20">
        <iframe src="/resume/resume.pdf" className="w-full h-full" title="Resume PDF Viewer" />
      </div>
    </div>
  );
}