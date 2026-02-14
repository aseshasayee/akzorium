"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Megaphone, Globe, Bot, Rocket } from "lucide-react";
import TextReveal from "./TextReveal";

const services = [
    {
        id: "marketing",
        title: "Marketing",
        icon: Megaphone,
        items: ["Online ADs", "SEO", "Social Media Management", "Content Creation", "Personal Branding"],
        desc: "We drive growth by turning attention into measurable results."
    },
    {
        id: "web",
        title: "Web",
        icon: Globe,
        items: ["Website Development", "Landing Pages", "E-commerce Websites"],
        desc: "High-performance digital platforms engineered for scale."
    },
    {
        id: "ai",
        title: "AI & Automation",
        icon: Bot,
        items: ["Business Automations", "Chatbots", "AI Agent Solutions", "Custom AI Solutions"],
        desc: "Leverage analytics to make informed, strategic decisions."
    },
    {
        id: "growth",
        title: "Growth",
        icon: Rocket,
        items: ["Lead Generation Systems", "Sales Funnels", "Growth Strategy & Funnels"],
        desc: "Build a scalable identity that resonates with premium audiences."
    }
];

export default function Services() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <section className="relative py-32 px-4 md:px-10 text-white overflow-hidden min-h-screen flex flex-col">
            {/* Header */}
            <div className="mb-20 text-center">
                <TextReveal
                    text="Services"
                    className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 font-grand"
                />
            </div>

            {/* Cards Container - Flex for Expansion Effect */}
            <div className="flex-1 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 min-h-[600px] items-stretch">
                {services.map((service, index) => {
                    const isHovered = hoveredId === service.id;

                    return (
                        <motion.div
                            key={service.id}
                            layout
                            initial={{
                                opacity: 0,
                                x: (1.5 - index) * 100,
                                scale: 0.9,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                scale: 1,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                layout: { duration: 0.4, type: "spring", stiffness: 200, damping: 25 },
                                opacity: { duration: 0.5, delay: index * 0.1 }
                            }}
                            onHoverStart={() => setHoveredId(service.id)}
                            onHoverEnd={() => setHoveredId(null)}
                            onClick={() => setHoveredId(isHovered ? null : service.id)} // Mobile tap
                            className={`relative border border-white/20 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 group bg-black/40 hover:bg-white/5 hover:border-white/40 shadow-2xl ${isHovered ? "flex-[3]" : "flex-1"}`}
                        >
                            {/* Card Background Image */}
                            <div className="absolute inset-0 z-0">
                                <motion.div
                                    className="absolute inset-0 bg-black/80 z-10"
                                    animate={{ opacity: isHovered ? 0.4 : 0.8 }}
                                />
                                <Image
                                    src="/card bg.png"
                                    alt="Card Background"
                                    fill
                                    className="object-cover opacity-50"
                                />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col z-20">
                                {/* Top: Icon and Arrow */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm transition-colors duration-300 ${isHovered ? "bg-white text-black" : "text-gray-400 group-hover:text-white"}`}>
                                        <service.icon size={20} />
                                    </div>
                                    <div className={`p-2 rounded-full border border-white/20 bg-black/20 transition-all duration-300 ${isHovered ? "bg-white text-black rotate-45" : "text-gray-400"}`}>
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>

                                {/* Vertical Title - Centered in Card */}
                                <AnimatePresence>
                                    {!isHovered && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
                                        >
                                            <h3 className="text-2xl font-bold uppercase tracking-wider font-grand -rotate-90 whitespace-nowrap text-white/50">
                                                {service.title}
                                            </h3>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="mt-auto relative z-30">
                                    {/* Horizontal Title - Visible on Hover */}
                                    <AnimatePresence>
                                        {isHovered && (
                                            <motion.h3
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="text-3xl md:text-5xl font-black uppercase tracking-tighter font-grand text-white mb-4"
                                            >
                                                {service.title}
                                            </motion.h3>
                                        )}
                                    </AnimatePresence>

                                    {/* Description vs Detailed List */}
                                    <AnimatePresence mode="wait">
                                        {isHovered && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ delay: 0.1, duration: 0.3 }}
                                                className="mt-4 space-y-4"
                                            >
                                                <p className="text-sm text-gray-300 font-sans max-w-lg mb-6">
                                                    {service.desc}
                                                </p>

                                                <div className="h-[1px] w-full bg-white/10" />

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {service.items.map((item, idx) => (
                                                        <motion.div
                                                            key={item}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.2 + (idx * 0.05) }}
                                                            className="flex items-center gap-3 text-sm md:text-base text-gray-200"
                                                        >
                                                            <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                                                            <span>{item}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>

                                                <div className="pt-6">
                                                    <button className="px-8 py-3 rounded-full bg-white text-black text-sm font-bold uppercase tracking-wide hover:bg-gray-200 transition-colors w-max">
                                                        Explore {service.title}
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
