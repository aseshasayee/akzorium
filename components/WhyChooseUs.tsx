"use client";

import React from "react";
import { CheckCircle } from "lucide-react";

const reasons = [
    "Growth-focused strategies",
    "Marketing + Technology expertise",
    "Custom-built solutions",
    "Performance-driven execution"
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 px-6 bg-black/40 backdrop-blur-sm relative overflow-hidden text-center">
            <div className="max-w-5xl mx-auto flex flex-col items-center">
                <h2 className="text-4xl md:text-6xl font-bold uppercase font-grand mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">Why Akzorium</h2>
                <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-3xl border-b border-white/10 pb-8">
                    We don't just deliver services; we build ecosystems. Our approach combines marketing intelligence with technological precision to ensure your business doesn't just grow, but thrives.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-left inline-grid mx-auto">
                    {reasons.map((reason) => (
                        <div key={reason} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                            <CheckCircle className="text-white w-6 h-6 shrink-0" />
                            <span className="text-lg font-medium text-gray-200">{reason}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
