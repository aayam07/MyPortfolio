"use client";

import { useState } from "react";
import { getJsonData } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";
import { Mail, MapPin, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const contact = getJsonData("contact.json");
  const socials = getJsonData("socials.json");

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value;

    if (!contact?.formspreeEndpoint) {
      // Seamless fallback: open pre-filled mail client if Formspree endpoint is not configured yet
      window.location.href = `mailto:${contact?.email || "aayamadhikari07@gmail.com"}?subject=${encodeURIComponent(
        `Portfolio Inquiry from ${name}`
      )}&body=${encodeURIComponent(`${message}\n\nSender: ${name} (${email})`)}`;
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const formData = new FormData(form);
      const res = await fetch(contact.formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await res.json().catch(() => null);
        setErrorMessage(data?.errors?.[0]?.message || "Failed to send message. Please email me directly.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please email me directly.");
      setStatus("error");
    }
  };

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
        {status === "success" ? (
          <div className="p-8 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
            <h3 className="text-lg font-semibold text-foreground">Message Sent!</h3>
            <p className="text-sm text-muted-foreground">
              Thank you for reaching out. I&apos;ll get back to you as soon as possible.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="text-xs text-foreground underline underline-offset-4 pt-2"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            {status === "error" && (
              <div className="p-4 rounded-xl border border-destructive/20 bg-destructive/5 text-destructive text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
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
            </div>
            <button 
              type="submit" 
              disabled={status === "loading"}
              className="w-full inline-flex items-center justify-center gap-2 bg-foreground text-background font-medium rounded-xl px-4 py-3 hover:bg-foreground/90 transition-colors disabled:opacity-50"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
            <p className="text-xs text-center text-muted-foreground mt-4">
              Sends directly to aayamadhikari07@gmail.com.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
