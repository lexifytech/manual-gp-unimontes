import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { baseMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VLibrasWidget } from "@/components/a11y/VLibrasWidget";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${sourceSans.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <a href="#conteudo" className="skip-link">
          Ir para o conteúdo
        </a>
        <Header />
        <div id="conteudo" className="flex-1">
          {children}
        </div>
        <Footer />
        <VLibrasWidget />
      </body>
    </html>
  );
}