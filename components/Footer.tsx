"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative py-20 px-6 border-t border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">

                {/* Left: Branding */}
                <div className="space-y-8">
                    <div className="flex items-center gap-2">
                        <div className="relative w-8 h-8">
                            <Image src="/metalic logo.png" alt="Akzorium Logo" width={32} height={32} className="object-contain" />
                        </div>
                        <span className="text-xl font-bold tracking-widest uppercase font-grand">Akzorium</span>
                    </div>
                    <p className="text-gray-400 text-sm max-w-xs font-sans">
                        Elevating brands through premium digital infrastructure and intelligent growth strategies.
                    </p>
                    <div className="pt-8">
                        <button className="text-xs font-bold uppercase tracking-[0.2em] border-b border-white pb-1 hover:text-gray-300 transition-colors">
                            Start a Project
                        </button>
                    </div>
                </div>

                {/* Right: Links */}
                <div className="flex gap-16 text-sm font-sans">
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-white uppercase tracking-wider mb-2">Sitemap</h4>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">Home</Link>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">Services</Link>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">Projects</Link>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-white uppercase tracking-wider mb-2">Socials</h4>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</Link>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</Link>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-sans">
                <p>&copy; {new Date().getFullYear()} Akzorium. All rights reserved.</p>
                <p>Designed & Developed in-house.</p>
            </div>

            {/* Big Watermark */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none select-none">
                <span className="text-[20vw] font-black uppercase tracking-tighter whitespace-nowrap font-grand">Akzorium</span>
            </div>
        </footer>
    );
}
