"use client";

import { getJsonData } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  const contact = getJsonData("contact.json");
  const socials = getJsonData("socials.json");
  
  return (
    <div className="max-w-2xl mx-auto px-6 space-y-16">
      <SectionHeader title="Contact" description="Get in touch for collaborations, research, or just to say hi." align="center" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <a href={`mailto:${contact?.email}`} className="flex flex-col items-center justify-center p-8 rounded-3xl bg-card border border-border hover:border-foreground/20 transition-colors text-center group">
          <Mail className="w-8 h-8 mb-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          <p className="font-medium">{contact?.email}</p>
        </a>
        <div className="flex flex-col items-center justify-center p-8 rounded-3xl bg-card border border-border text-center">
          <MapPin className="w-8 h-8 mb-4 text-muted-foreground" />
          <p className="font-medium">{contact?.location}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {socials?.linkedin && (
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border border-border rounded-full hover:bg-muted transition-colors"
          >
            LinkedIn <span className="text-muted-foreground">↗</span>
          </a>
        )}
        {socials?.github && (
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border border-border rounded-full hover:bg-muted transition-colors"
          >
            GitHub <span className="text-muted-foreground">↗</span>
          </a>
        )}
      </div>

      <form className="space-y-6 max-w-xl mx-auto pt-8 border-t border-border" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
          <input type="text" id="name" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow" placeholder="Jane Doe" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <input type="email" id="email" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow" placeholder="jane@example.com" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
          <textarea id="message" rows={5} className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow resize-none" placeholder="How can I help you?"></textarea>
        </div>
        <button type="submit" className="w-full bg-foreground text-background font-medium rounded-xl px-4 py-3 hover:bg-foreground/90 transition-colors">
          Send Message
        </button>
        <p className="text-xs text-center text-muted-foreground mt-4">Formspree integration ready. Connect your endpoint in contact.json.</p>
      </form>
    </div>
  );
}