import { getJsonData } from "@/lib/data";

export function PersonJsonLd() {
  const contact = getJsonData("contact.json");
  const socials = getJsonData("socials.json");
  const education = getJsonData("education.json") || [];
  const site = getJsonData("site.json");

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://aayamadhikari.com/#person",
    name: "Aayam Adhikari",
    givenName: "Aayam",
    familyName: "Adhikari",
    url: "https://aayamadhikari.com",
    image: "https://aayamadhikari.com/images/profile/my_image.png",
    email: `mailto:${contact?.email || "aayamadhikari07@gmail.com"}`,
    jobTitle: "Computer Science Graduate Researcher & Software Engineer",
    worksFor: {
      "@type": "EducationalOrganization",
      name: "University of Nebraska-Lincoln",
      url: "https://www.unl.edu",
    },
    alumniOf: education.map((edu: any) => ({
      "@type": "EducationalOrganization",
      name: edu.institution,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lincoln",
      addressRegion: "NE",
      addressCountry: "USA",
    },
    sameAs: [
      socials?.linkedin || "https://linkedin.com/in/aayam-adhikari-588aa11ba",
      socials?.github || "https://github.com/aayam07",
    ],
    knowsAbout: [
      "Live Holographic Video Streaming",
      "Semantic Communication",
      "5G Standalone Wireless Networks",
      "OpenAirInterface (OAI)",
      "Reinforcement Learning (CQL)",
      "Point Cloud Compression & Streaming",
      "Distributed Systems",
      "Computer Science",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://aayamadhikari.com/#website",
    url: "https://aayamadhikari.com",
    name: "Aayam Adhikari | Personal Website & Research",
    description: site?.description || "Personal engineering portfolio and research of Aayam Adhikari.",
    publisher: {
      "@id": "https://aayamadhikari.com/#person",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
