"use client";

import React from "react";
import { Plus } from "lucide-react";

// Install radix-ui accordion if needed or build simple custom one. 
// Using simple custom for now to avoid dependency install issues if tool fails.
// Let's use standard state-based accordion for simplicity and zero-deps.

const faqs = [
    { q: "Do you offer fixed pricing packages?", a: "No. Every project is different. Pricing depends on your requirements and the scope of work." },
    { q: "How can I get a quote?", a: "Contact us through the form or WhatsApp. Share your needs, and we’ll send you a proposal." },
    { q: "How long does it take to start?", a: "Most projects can begin within a few days after approval." },
    { q: "What industries do you work with?", a: "We work with startups, small businesses, and established brands across various industries." },
    { q: "Do you guarantee results?", a: "We focus on strategies that drive measurable growth. Results depend on factors like budget, market, and competition." },
    { q: "Can I choose only one service?", a: "Yes. You can work with us for a single service or a complete growth solution." },
    { q: "Do you handle ads and creatives together?", a: "Yes. We can manage campaigns, designs, and optimisation." },
    { q: "Will my website be mobile-friendly?", a: "Yes. All websites are fully responsive and optimised for mobile devices." },
    { q: "Do you provide ongoing support?", a: "Yes. Support and maintenance options are available based on your needs." },
    { q: "How soon will you respond after I contact you?", a: "We usually respond within 24 hours." },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    return (
        <section id="faq" className="py-16 md:py-24 px-6 bg-black relative max-w-[90rem] mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold uppercase font-grand mb-4 text-white">Common Questions</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">Everything you need to know about our process and services.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div className="space-y-4">
                    {faqs.slice(0, 5).map((faq, idx) => (
                        <div key={idx} className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden group hover:border-white/20 transition-colors">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`font-bold text-sm md:text-base pr-4 uppercase tracking-wide transition-colors ${openIndex === idx ? "text-white" : "text-gray-300 group-hover:text-white"}`}>
                                    {faq.q}
                                </span>
                                <Plus
                                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === idx ? "rotate-45 text-white" : "group-hover:text-white"}`}
                                />
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out px-6 ${openIndex === idx ? "max-h-40 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"}`}
                            >
                                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="space-y-4">
                    {faqs.slice(5, 10).map((faq, idx) => {
                        const realIdx = idx + 5;
                        return (
                            <div key={realIdx} className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden group hover:border-white/20 transition-colors">
                                <button
                                    onClick={() => setOpenIndex(openIndex === realIdx ? null : realIdx)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className={`font-bold text-sm md:text-base pr-4 uppercase tracking-wide transition-colors ${openIndex === realIdx ? "text-white" : "text-gray-300 group-hover:text-white"}`}>
                                        {faq.q}
                                    </span>
                                    <Plus
                                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === realIdx ? "rotate-45 text-white" : "group-hover:text-white"}`}
                                    />
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out px-6 ${openIndex === realIdx ? "max-h-40 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"}`}
                                >
                                    <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="mt-12 text-center">
                <p className="text-gray-400 text-sm mb-4">Still have questions?</p>
                <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-white text-black font-bold uppercase tracking-wide rounded-full text-xs hover:bg-gray-200 transition-all hover:scale-105">
                    Contact Support
                </a>
            </div>
        </section>
    );
}
