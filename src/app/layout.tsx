import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alvaro Ybañez | Frontend Developer",
  description:
    "Portfolio profesional de Alvaro Ybañez. Especializado en React, React Native y desarrollo web de alto impacto.",
  openGraph: {
    title: "Alvaro Ybañez | Frontend Developer",
    description: "Especializado en React, React Native y desarrollo web de alto impacto.",
    url: "https://alvaroybanez.vercel.app",
    siteName: "Alvaro Ybañez Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio de Alvaro Ybañez",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alvaro Ybañez | Frontend Developer",
    description: "Especializado en React, React Native y desarrollo web de alto impacto.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}