"use client";
import React from 'react';
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MarketingPage() {
    return (
        <main className="min-h-screen bg-black text-white relative flex flex-col items-center justify-center p-6 overflow-hidden">
            {/* Nav */}
            <div className="absolute top-8 left-8 z-50">
                <Link href="/#services" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <ArrowLeft size={20} />
                    <span className="uppercase tracking-widest text-xs font-bold">Back</span>
                </Link>
            </div>

            {/* Hero */}
            <div className="text-center z-10 max-w-4xl relative">
                <h1 className="text-6xl md:text-8xl font-black uppercase font-grand tracking-tighter mb-8 bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent leading-[0.9]">
                    Digital <br /> Marketing
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
                    Strategy. Precision. Impact. We craft data-driven campaigns that amplify your brand and drive actual revenue.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-20">
                    {[
                        "Online ADs",
                        "SEO",
                        "AEO & GEO",
                        "Social Media Management",
                        "Content Creation",
                        "Personal Branding"
                    ].map((item) => (
                        <div key={item} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors uppercase font-grand">{item}</h3>
                            <div className="w-8 h-1 bg-white/20 rounded-full group-hover:w-16 group-hover:bg-blue-500 transition-all duration-300" />
                        </div>
                    ))}
                </div>

                <Link href="/contact">
                    <button className="px-10 py-4 rounded-full bg-white text-black font-bold uppercase tracking-wide hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                        Launch Campaign
                    </button>
                </Link>
            </div>

            {/* Background Glows */}
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
        </main>
    );
}
