"use client";

import React from "react";
import Image from "next/image";

const clients = [
    // Placeholder images - replace with real client logos
    { name: "Client 1", src: "/logos/1.png" },
    { name: "Client 2", src: "/logos/2.png" },
    { name: "Client 3", src: "/logos/3.png" },
    { name: "Client 4", src: "/logos/4.png" },
    { name: "Client 5", src: "/logos/5.png" },
    { name: "Client 6", src: "/logos/6.png" },
];

export default function TrustSection() {
    return (
        <section className="py-20 bg-black/50 border-t border-b border-white/5 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h3 className="text-2xl md:text-3xl font-bold uppercase font-grand mb-4">Trusted by Businesses</h3>
                <p className="text-gray-400 mb-12">Delivering measurable growth and performance.</p>

                {/* Placeholder for Logos Grid - User can add images */}
                <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    {/* Creating text placeholders if no images exist */}
                    <div className="text-2xl font-bold font-grand text-gray-500">LOGO</div>
                    <div className="text-2xl font-bold font-grand text-gray-500">LOGO</div>
                    <div className="text-2xl font-bold font-grand text-gray-500">LOGO</div>
                    <div className="text-2xl font-bold font-grand text-gray-500">LOGO</div>
                    <div className="text-2xl font-bold font-grand text-gray-500">LOGO</div>
                </div>
            </div>
        </section>
    );
}
