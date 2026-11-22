import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PersonJsonLd } from "@/components/PersonJsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://aayamadhikari.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Aayam Adhikari | Computer Engineer & Researcher",
    template: "%s | Aayam Adhikari",
  },
  description: "Personal engineering portfolio and research of Aayam Adhikari — focused on live holographic streaming, 5G wireless systems, and intelligent computing architectures.",
  keywords: [
    "Aayam Adhikari",
    "Aayam",
    "Adhikari",
    "Computer Engineer",
    "Researcher",
    "Holographic Telepresence",
    "5G Standalone",
    "Point Cloud Compression",
    "Semantic Communication",
    "Machine Learning",
    "University of Nebraska-Lincoln"
  ],
  authors: [{ name: "Aayam Adhikari", url: "https://aayamadhikari.com" }],
  creator: "Aayam Adhikari",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aayamadhikari.com",
    title: "Aayam Adhikari | Computer Engineer & Researcher",
    description: "Personal portfolio and research of Aayam Adhikari — focused on live holographic streaming, 5G wireless systems, and intelligent computing architectures.",
    siteName: "Aayam Adhikari",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aayam Adhikari | Computer Engineer & Researcher",
    description: "Personal portfolio and research of Aayam Adhikari — focused on live holographic streaming, 5G wireless systems, and intelligent computing architectures.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head>
        <PersonJsonLd />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-[calc(100vh-200px)] pt-32 pb-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
