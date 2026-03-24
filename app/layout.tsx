import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adaptiv.company"),
  title: {
    default: "Adaptiv AI Technologies — The AI That Shows Up",
    template: "%s | Adaptiv AI Technologies",
  },
  description:
    "Merlin is the AI that runs alongside your team — watching every sensor, understanding every space, responding to every situation. Physical AI for buildings and industrial operations.",
  keywords: [
    "Physical AI",
    "Merlin AI",
    "Smart Display",
    "building intelligence",
    "industrial IoT",
    "facility management",
    "Adaptiv AI Technologies",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adaptiv.company",
    siteName: "Adaptiv AI Technologies",
    title: "Adaptiv AI Technologies — The AI That Shows Up",
    description: "Physical AI for buildings and industrial operations. Meet Merlin.",
    images: [{ url: "/brand/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adaptiv AI Technologies — The AI That Shows Up",
    description: "Physical AI for buildings and industrial operations. Meet Merlin.",
  },
  icons: { icon: "/brand/favicon.ico", shortcut: "/brand/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-white text-[#111827]`}>
        <Navbar />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
