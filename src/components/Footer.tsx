"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getJsonData } from "@/lib/data";

// Note: since this is a client component, we will fetch thoughts from an API route or pass it as a prop.
// For simplicity in a static export, we'll just fetch the JSON file directly from the public folder.

export function Footer() {
  const [randomThought, setRandomThought] = useState<string | null>(null);
  const thoughts = getJsonData("thoughts.json") || [];
  const socials = getJsonData("socials.json");
  const startYear = 2019;
  const currentYear = new Date().getFullYear();
  const yearsActive = currentYear - startYear;

  const handleRandomThought = () => {
    if (thoughts.length > 0) {
      const randomIndex = Math.floor(Math.random() * thoughts.length);
      setRandomThought(thoughts[randomIndex]);
    }
  };

  return (
    <footer className="w-full max-w-4xl mx-auto px-6 py-12 mt-20 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
      <div className="flex flex-col items-center md:items-start gap-2">
        <p>© {currentYear} Aayam Adhikari. All rights reserved.</p>
        <p>Building things since {startYear} ({yearsActive} years).</p>
        
        {/* Sitewide Social Connections */}
        <div className="flex items-center gap-3 pt-1 text-xs">
          {socials?.github && (
            <a 
              href={socials.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          )}
          <span className="text-border">•</span>
          {socials?.linkedin && (
            <a 
              href={socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
          )}
          {socials?.instagram && (
            <>
              <span className="text-border">•</span>
              <a 
                href={socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-foreground transition-colors"
              >
                Instagram
              </a>
            </>
          )}
          {socials?.facebook && (
            <>
              <span className="text-border">•</span>
              <a 
                href={socials.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-foreground transition-colors"
              >
                Facebook
              </a>
            </>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center md:items-end gap-2">
        {randomThought ? (
          <p className="italic text-foreground max-w-xs text-center md:text-right">
            "{randomThought}"
          </p>
        ) : (
          <button
            onClick={handleRandomThought}
            className="hover:text-foreground transition-colors group flex items-center gap-1 cursor-pointer"
          >
            Random Thought <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        )}
        <div className="flex gap-4 mt-2">
          <Link href="/skills" className="hover:text-foreground transition-colors">
            Skills
          </Link>
          <Link href="/now" className="hover:text-foreground transition-colors">
            Now
          </Link>
          <Link href="/contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
