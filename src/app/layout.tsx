import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Victor Reno | Software & Cloud Engineer",
  description:
    "Victor Reno Ogara builds reliable business systems, cloud-native applications, payment workflows, ecommerce platforms and operational tools.",
  openGraph: {
    title: "Victor Reno Ogara | Software & Cloud Engineer | Business Technology Strategist",
    description:
      "Business technology strategy, software engineering, cloud systems, payments, ecommerce and workflow automation.",
    type: "website",
    locale: "en_US"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${bricolage.variable} ${hanken.variable} ${jetbrains.variable} scroll-smooth antialiased light`}
    >
      <body className="bg-background text-on-surface min-h-screen flex flex-col font-body-md text-body-md selection:bg-secondary-container selection:text-on-secondary-container">
        <TopNavBar />
        <main className="grow flex flex-col pt-24 pb-section-gap w-full min-w-0 overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
