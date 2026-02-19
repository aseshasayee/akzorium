"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Megaphone, Globe, Bot, Rocket } from "lucide-react";
import TextReveal from "./TextReveal";
import Link from "next/link";

const services = [
    {
        id: "marketing",
        title: "Digital Marketing",
        icon: Megaphone,
        items: ["Online ADs", "SEO", "AEO & GEO", "Social Media Management", "Content Creation", "Personal Branding"],
        desc: "We help people find your business online. We run ads on Google, Instagram, and more to get you leads.",
        link: "/services/marketing",
        buttonText: "Explore Marketing"
    },
    {
        id: "web",
        title: "Website Development",
        icon: Globe,
        items: ["Website Development", "Landing Pages", "E-commerce Websites"],
        desc: "We build websites that help you get customers. Professional sites and pages made to convert.",
        link: "/services/web-development",
        buttonText: "View Web Solutions"
    },
    {
        id: "tech",
        title: "AI & Automation",
        icon: Bot,
        items: ["Business Automations", "Chatbots", "AI Agent Solutions", "Custom AI Solutions"],
        desc: "We use smart technology to save your time. Automate follow-ups, emails, and repetitive work.",
        link: "/services/ai-automation",
        buttonText: "See AI Agents"
    },
    {
        id: "growth",
        title: "Growth & Funnels",
        icon: Rocket,
        items: ["Lead Generation Systems", "Sales Funnels", "Growth Strategy & Funnels"],
        desc: "We build systems that turn visitors into customers. Strategies to bring you consistent leads.",
        link: "/services/growth-funnels",
        buttonText: "Grow Your Business"
    }
];

export default function Services() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <section id="services" className="relative py-32 px-6 text-white overflow-visible min-h-[80vh] flex flex-col justify-center bg-black">
            {/* Header */}
            <div className="mb-24 text-center">
                <TextReveal
                    text="Our Services"
                    className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 font-grand"
                />
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg md:text-xl font-light"
                >
                    Solutions designed for business growth.
                </motion.p>
            </div>

            {/* Simplified Grid */}
            {/* Simplified Grid -> Interactive Flex Layout */}
            <div className="flex flex-col lg:flex-row gap-4 w-full max-w-[90rem] mx-auto min-h-[600px]">
                {services.map((service, index) => {
                    const isHovered = hoveredId === service.id;

                    return (
                        <Link
                            href={service.link}
                            key={service.id}
                            className={`relative transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] flex flex-col ${isHovered ? 'lg:flex-[2.5]' : 'lg:flex-1'}`}
                            onMouseEnter={() => setHoveredId(service.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div
                                className={`relative h-full flex flex-col justify-between p-8 rounded-3xl overflow-hidden border transition-all duration-500 ${isHovered ? 'border-white/80 bg-white/10 shadow-[0_0_30px_rgba(255,255,255,0.3),inset_0_0_20px_rgba(255,255,255,0.1)]' : 'border-white/30 bg-white/5 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]'} backdrop-blur-md group`}
                            >
                                {/* Fluid Hover Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-b from-white/5 to-transparent transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

                                {/* Content Top */}
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className={`p-4 rounded-2xl transition-all duration-500 ${isHovered ? 'bg-white text-black scale-110' : 'bg-white/10 text-white'}`}>
                                            <service.icon size={isHovered ? 32 : 28} />
                                        </div>
                                        <ArrowUpRight className={`transition-all duration-500 ${isHovered ? 'text-white rotate-45' : 'text-gray-500'}`} />
                                    </div>

                                    <h3 className={`font-bold mb-4 leading-tight transition-all duration-500 ${isHovered ? 'text-3xl text-white' : 'text-2xl text-gray-200'}`}>
                                        {service.title}
                                    </h3>

                                    <p className={`text-gray-400 leading-relaxed transition-all duration-500 ${isHovered ? 'text-lg opacity-100 max-h-48' : 'text-base opacity-80 lg:max-h-24 overflow-hidden'}`}>
                                        {service.desc}
                                    </p>
                                </div>

                                {/* Content Bottom */}
                                <div className="relative z-10 mt-auto pt-8">
                                    {isHovered ? (
                                        <div className="mb-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                                                Services We offer:
                                            </p>
                                            <ul className="grid grid-cols-1 gap-y-2">
                                                {service.items.map(item => (
                                                    <li key={item} className="text-sm text-gray-200 flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : (
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {service.items.slice(0, 3).map(item => (
                                                <span key={item} className="text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/10 bg-black/40 text-gray-400">
                                                    {item}
                                                </span>
                                            ))}
                                            {service.items.length > 3 && (
                                                <span className="text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/10 bg-black/40 text-gray-400">
                                                    +{service.items.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    )}

                                    {/* Reveal Button */}
                                    <div className={`overflow-hidden transition-all duration-500 ease-out ${isHovered ? 'max-h-20 opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-4'}`}>
                                        <button className="w-full py-4 rounded-xl bg-white text-black font-bold uppercase tracking-wide hover:bg-gray-200 transition-colors shadow-lg">
                                            {service.buttonText}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>

            <div className="mt-16 text-center">
                <Link href="/contact">
                    <button className="px-8 py-3 rounded-full bg-white text-black font-bold uppercase tracking-wide hover:scale-105 transition-transform duration-300">
                        Get a Quote
                    </button>
                </Link>
            </div>
        </section>
    );
}
