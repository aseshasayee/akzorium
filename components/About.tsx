"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
    return (
        <section id="about" className="relative z-10 max-w-[90rem] mx-auto px-6 py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-6 items-center min-h-[80vh]">

            {/* Left Content - Headline & Identity */}
            <div className="md:col-span-4 flex flex-col justify-center h-full space-y-8 sticky top-32">
                <div>
                    <div className="w-12 h-1 bg-white/20 mb-6" />
                    <p className="text-gray-500 text-xs tracking-[0.2em] uppercase mb-4 font-bold">
                        About Akzorium
                    </p>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase font-grand leading-[0.9] text-white tracking-tighter">
                        The <br /> Ecosystem <br /> of Momentum.
                    </h3>
                </div>

                {/* M x T x S Tagline */}
                <div className="border-l border-white/20 pl-6 py-2 space-y-2">
                    <p className="text-gray-500 text-xs uppercase tracking-wider font-medium">
                        Operating at the intersection of
                    </p>
                    <p className="text-lg md:text-xl font-bold text-white font-grand leading-tight">
                        Marketing <span className="text-gray-700 px-1">×</span> Technology <span className="text-gray-700 px-1">×</span> Systems
                    </p>
                </div>
            </div>

            {/* Spacer - Expanded to reveal center logo */}
            <div className="md:col-span-4 hidden md:block" />

            {/* Right Content - Narrative & Grid */}
            <div className="md:col-span-4 flex flex-col justify-center h-full pt-4 md:pt-0">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    {/* Positioning */}
                    <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
                        We build <span className="text-gray-400">scalable revenue engines</span> for brands that demand enterprise-grade clarity.
                    </p>

                    {/* Offerings Grid - Focused on deliverables */}
                    <div className="flex flex-col gap-5">
                        {/* Marketing */}
                        <div className="pl-5 border-l border-white/20 space-y-1">
                            <h4 className="text-lg font-bold text-white font-grand">Intelligent Marketing</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Performance media, SEO, and content strategies that drive verifiable ROI.
                            </p>
                        </div>

                        {/* Technology */}
                        <div className="pl-5 border-l border-white/20 space-y-1">
                            <h4 className="text-lg font-bold text-white font-grand">Advanced Technology</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Custom AI agents, automations, and web systems designed for efficiency.
                            </p>
                        </div>

                        {/* Systems */}
                        <div className="pl-5 border-l border-white/20 space-y-1">
                            <h4 className="text-lg font-bold text-white font-grand">Systematic Growth</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Infrastructure built for long-term scale, reducing chaos and complexity.
                            </p>
                        </div>
                    </div>

                    {/* Closing Statement & CTA */}
                    <div className="space-y-6 pt-4 border-t border-white/5">
                        <p className="text-base text-gray-400 leading-relaxed max-w-lg">
                            We don't just run ads. We engineer your entire growth ecosystem.
                        </p>

                        <Link href="/contact" className="inline-block">
                            <button className="flex items-center gap-3 text-white uppercase tracking-[0.15em] text-xs font-bold hover:text-gray-300 transition-colors duration-300 group">
                                Get a Quote
                                <span className="block w-8 h-[1px] bg-white group-hover:w-12 transition-all duration-300 ease-out" />
                            </button>
                        </Link>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
