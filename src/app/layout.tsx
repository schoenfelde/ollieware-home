import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultTitle =
  "Ollieware | Full-stack Product Consultancy";
const defaultDescription =
  "Senior engineer helping regulated teams ship the software their customers needed yesterday. React, Node, cloud, and mobile expertise — with a free discovery call.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ollieware.com"),
  title: {
    default: defaultTitle,
    template: "%s | Ollieware",
  },
  description: defaultDescription,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: "https://ollieware.com",
    siteName: "Ollieware",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  authors: [{ name: "Elliot Schoenfeld", url: "https://ollieware.com" }],
  keywords: [
    "Ollieware",
    "software consultant",
    "React",
    "Node.js",
    "TypeScript",
    "healthcare software",
    "fintech",
    "full-stack engineer",
    "design systems",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background font-sans text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
