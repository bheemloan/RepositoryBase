import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // 👈 Navbar component import karein
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KeshvaCredit - Quick Loans & Credit Score",
  description: "Get instant loans and free credit score check on KeshvaCredit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* 👈 Yahan Navbar add kar diya */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
