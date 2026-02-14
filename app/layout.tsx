import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import Cursor from "@/components/Cursor";
import "./globals.css";

const agrandirGrand = localFont({
  src: "../public/fonts/Agrandir-GrandHeavy.otf",
  variable: "--font-grand",
  display: "swap",
});

const agrandirRegular = localFont({
  src: "../public/fonts/Agrandir-Regular.otf",
  variable: "--font-regular",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akzorium | Media and Technology",
  description: "Premium growth and technology ecosystem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${agrandirGrand.variable} ${agrandirRegular.variable} antialiased bg-black text-white selection:bg-white selection:text-black font-sans overflow-x-hidden`}
      >
        <div className="fixed inset-0 z-[-1]">
          <Image
            src="/main bg.png"
            alt="Global Background"
            fill
            className="object-cover opacity-40"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
