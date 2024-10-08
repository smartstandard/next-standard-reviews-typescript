import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar"
import Link from "next/link";
import {orbitron} from '@/app/fonts'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable}`}>
      <body className={`${inter.className} bg-orange-50 h-screen text-black px-4 py-2 flex flex-col min-h-screen`}>
        <header>
          <NavBar />
        </header>
        <main className="grow py-3">
        {children}
        </main>
        <footer className="text-center text-xs text-slate-500 border-t py-3">
          Game data and images courtery of <a href="" className="text-orange-800 hover:underline">RAWG</a>
        </footer>
      </body>
    </html>
  );
}
