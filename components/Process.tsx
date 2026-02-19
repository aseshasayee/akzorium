"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
    {
        id: "01",
        title: "Discovery",
        desc: "We analyze your business, goals, and bottlenecks to find the highest-leverage opportunities."
    },
    {
        id: "02",
        title: "Strategy",
        desc: "We build a custom roadmap for growth, efficiency, and system architecture."
    },
    {
        id: "03",
        title: "Execution",
        desc: "We deploy systems, launch campaigns, and build assets with precision."
    },
    {
        id: "04",
        title: "Scale",
        desc: "We optimize, automate, and expand what works to drive compounding returns."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Process() {
    return (
        <section id="process" className="relative z-10 max-w-[90rem] mx-auto px-6 py-24 md:py-32 min-h-[70vh] flex flex-col justify-center">

            <motion.div
                className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full items-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >

                {/* Left Side: Title & Steps 1-2 */}
                <div className="md:col-span-4 flex flex-col justify-center space-y-16">
                    <motion.div variants={itemVariants}>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white font-grand mb-6 leading-[0.9]">
                            Our <br /> Process
                        </h2>
                        <p className="text-gray-400 text-lg font-light tracking-wide">
                            Simple. Predictable. Effective.
                        </p>
                    </motion.div>

                    <div className="space-y-12">
                        {steps.slice(0, 2).map((step) => (
                            <motion.div
                                key={step.id}
                                variants={itemVariants}
                                className="group relative pl-6 border-l border-white/10 hover:border-white/40 transition-colors duration-300"
                            >
                                <span className="absolute -left-[1.25rem] -top-2 text-6xl font-black text-white/5 z-[-1] font-grand select-none group-hover:text-white/10 transition-colors duration-300">
                                    {step.id}
                                </span>
                                <h3 className="text-2xl font-bold uppercase font-grand mb-2 text-white group-hover:text-gray-200 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 text-base leading-relaxed max-w-sm">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Center: Spacer for Graphic */}
                <div className="md:col-span-4 hidden md:block" />

                {/* Right Side: Steps 3-4 */}
                <div className="md:col-span-4 flex flex-col justify-center items-start md:items-end text-left md:text-right space-y-12 mt-12 md:mt-0 pt-0 md:pt-32">
                    <div className="space-y-12">
                        {steps.slice(2, 4).map((step) => (
                            <motion.div
                                key={step.id}
                                variants={itemVariants}
                                className="group relative pr-0 md:pr-6 md:pl-0 pl-6 border-l md:border-l-0 md:border-r border-white/10 hover:border-white/40 transition-colors duration-300"
                            >
                                <span className="absolute -left-[1.25rem] md:left-auto md:-right-[1.25rem] -top-2 text-6xl font-black text-white/5 z-[-1] font-grand select-none group-hover:text-white/10 transition-colors duration-300">
                                    {step.id}
                                </span>
                                <h3 className="text-2xl font-bold uppercase font-grand mb-2 text-white group-hover:text-gray-200 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 text-base leading-relaxed max-w-sm ml-auto">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </motion.div>
        </section>
    );
}
