"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TextReveal from "./TextReveal";

const steps = [
    {
        id: 1,
        title: "Discovery",
        desc: "We dive deep into your brand's core to understand your vision and objectives.",
    },
    {
        id: 2,
        title: "Strategy",
        desc: "We architecture a roadmap that aligns technology with business growth.",
    },
    {
        id: 3,
        title: "Execution",
        desc: "Our team builds high-performance assets with precision and premium aesthetics.",
    },
    {
        id: 4,
        title: "Scale",
        desc: "We optimize and expand your digital ecosystem for long-term success.",
    },
];

export default function Process() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]); // Reduced travel distance slightly

    return (
        <section ref={targetRef} className="relative h-[300vh] text-white">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                {/* Title */}
                <div className="absolute top-20 left-0 right-0 z-20 flex justify-center pointer-events-none">
                    <TextReveal
                        text="Our Process"
                        className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 font-grand text-center"
                    />
                </div>

                <motion.div style={{ x }} className="flex gap-12 pl-[100vw] items-center h-full pt-32">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="group relative h-[50vh] w-[300px] flex-shrink-0 flex flex-col justify-between p-8 border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl hover:border-white/30 transition-all duration-500"
                        >
                            <div className="relative z-10 space-y-4">
                                {/* Minimal Number */}
                                <div className="text-sm font-bold tracking-widest text-gray-500 font-grand group-hover:text-white transition-colors">
                                    0{step.id}
                                </div>

                                <h3 className="text-2xl font-bold uppercase tracking-wide font-grand leading-none">
                                    {step.title}
                                </h3>
                            </div>

                            <p className="text-sm text-gray-400 font-sans leading-relaxed">
                                {step.desc}
                            </p>

                            {/* Hove glow */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
