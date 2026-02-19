import { ReactNode } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import Cursor from "@/components/Cursor";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const agrandirGrand = localFont({
  src: "../public/fonts/Agrandir-GrandHeavy.otf",
  variable: "--font-grand",
  display: "swap",
});

const agrandirTextBold = localFont({
  src: "../public/fonts/Agrandir-TextBold.otf",
  variable: "--font-text-bold",
  display: "swap",
});

const agrandirRegular = localFont({
  src: "../public/fonts/Agrandir-Regular.otf",
  variable: "--font-regular",
  display: "swap",
});

const agrandirLight = localFont({
  src: "../public/fonts/Agrandir-GrandLight.otf",
  variable: "--font-light",
  display: "swap",
});

const garetBook = localFont({
  src: "../public/fonts/Garet-Book.otf",
  variable: "--font-garet-book",
  display: "swap",
});

const garetHeavy = localFont({
  src: "../public/fonts/Garet-Heavy.otf",
  variable: "--font-garet-heavy",
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
        className={`${agrandirGrand.variable} ${agrandirTextBold.variable} ${agrandirRegular.variable} ${agrandirLight.variable} ${garetBook.variable} ${garetHeavy.variable} antialiased bg-black text-white selection:bg-white selection:text-black font-sans overflow-x-hidden`}
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
        <WhatsAppButton />
      </body>
    </html>
  );
}
