import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/lib/store";
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Missing Billionaires — Study Lab",
  description:
    "An interactive study guide to Victor Haghani & James White's The Missing Billionaires: expected utility, the Merton share, Kelly betting, spending rules, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StoreProvider>
          <Header />
          <main className="flex-1 w-full max-w-5xl mx-auto px-4 pb-16">{children}</main>
          <footer className="border-t border-line py-6 text-center text-xs text-muted">
            An unofficial study companion to <em>The Missing Billionaires</em> by Victor
            Haghani &amp; James White. Educational use only — not investment advice.
          </footer>
        </StoreProvider>
      </body>
    </html>
  );
}
