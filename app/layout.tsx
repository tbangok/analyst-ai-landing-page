import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./(landing)/_components/navbar";
import { Footer } from "./(landing)/_components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AnaLystAI",
  description: "Relentless AI Analysts for Investment World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-full dark:bg-[#1F1F1F]">
          <Navbar />
          <main className="h-full pt-40">{children}</main>
        </div>
      </body>
    </html>
  );
}
