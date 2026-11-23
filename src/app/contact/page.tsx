"use client";

import { useForm, ValidationError } from "@formspree/react";
import { getJsonData } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";
import { Mail, MapPin, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

// Active Formspree form ID
const FORMSPREE_FORM_ID = "mljboggv";

export default function Contact() {
  const contact = getJsonData("contact.json");
  const socials = getJsonData("socials.json");

  // Extract Formspree form ID (e.g. "mljboggv" from "https://formspree.io/f/mljboggv" or direct ID)
  const rawEndpoint = contact?.formspreeEndpoint || "mljboggv";
  const formKey = rawEndpoint.includes("/f/") 
    ? rawEndpoint.split("/f/")[1]?.split("/")[0] || "mljboggv"
    : rawEndpoint;

  const [state, handleSubmit, reset] = useForm(formKey);

  return (
    <div className="max-w-2xl mx-auto px-6 space-y-16">
      <SectionHeader 
        title="Contact" 
        description="Get in touch for research inquiries, collaborations, systems engineering, or just to say hi." 
        align="center" 
      />
      
      {/* Primary Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <a 
          href={`mailto:${contact?.email}`} 
          className="flex flex-col items-center justify-center p-8 rounded-3xl bg-card border border-border hover:border-foreground/20 transition-colors text-center group"
        >
          <Mail className="w-8 h-8 mb-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          <p className="font-medium">{contact?.email}</p>
        </a>
        <div className="flex flex-col items-center justify-center p-8 rounded-3xl bg-card border border-border text-center">
          <MapPin className="w-8 h-8 mb-4 text-muted-foreground" />
          <p className="font-medium">{contact?.location}</p>
        </div>
      </div>

      {/* Social Verification Links */}
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

      {/* Interactive Form */}
      <div className="pt-8 border-t border-border max-w-xl mx-auto w-full">
        {state.succeeded ? (
          <div className="p-8 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
            <h3 className="text-lg font-semibold text-foreground">Message Sent!</h3>
            <p className="text-sm text-muted-foreground">
              Thank you for reaching out. I&apos;ll get back to you as soon as possible.
            </p>
            <button
              type="button"
              onClick={() => reset()}
              className="text-xs text-foreground underline underline-offset-4 pt-2 cursor-pointer hover:opacity-80 transition-opacity"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form 
            action={`https://formspree.io/f/${formKey}`} 
            method="POST"
            onSubmit={handleSubmit} 
            className="space-y-6"
          >
            {state.errors && Object.keys(state.errors).length > 0 && (
              <div className="p-4 rounded-xl border border-destructive/20 bg-destructive/5 text-destructive text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <ValidationError errors={state.errors} />
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input 
                type="text" 
                name="name"
                id="name" 
                required
                className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow text-foreground" 
                placeholder="Jane Doe" 
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-destructive mt-1" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                name="email"
                id="email" 
                required
                className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow text-foreground" 
                placeholder="jane@example.com" 
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-destructive mt-1" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                name="message"
                id="message" 
                rows={5} 
                required
                className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow resize-none text-foreground" 
                placeholder="How can I help you?"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-destructive mt-1" />
            </div>

            <button 
              type="submit" 
              disabled={state.submitting}
              className="w-full inline-flex items-center justify-center gap-2 bg-foreground text-background font-medium rounded-xl px-4 py-3 hover:bg-foreground/90 transition-colors disabled:opacity-50 cursor-pointer"
            >
              {state.submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
            <p className="text-xs text-center text-muted-foreground mt-4">
              Sends directly to {contact?.email || "aayamadhikari07@gmail.com"}.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
