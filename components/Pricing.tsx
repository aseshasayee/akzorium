"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import TextReveal from "./TextReveal";

const retainers = [
    {
        name: "Starter",
        desc: "For startups establishing a foundation.",
        price: "Custom",
        items: ["Digital Marketing Strategy", "Basic Web Presence", "Social Media Setup", "Monthly Reporting"]
    },
    {
        name: "Growth",
        desc: "For scaling businesses ready to accelerate.",
        price: "Custom",
        popular: true,
        items: ["Advanced SEO & SEM", "Custom Web Development", "Automation Workflows", "Content Creation", "Weekly Reporting"]
    },
    {
        name: "Enterprise",
        desc: "Full-scale systems for market leaders.",
        price: "Custom",
        items: ["Full-Service Marketing", "AI Agent Integration", "Custom Platform Development", "Dedicated Support Team", "Real-time Analytics"]
    }
];

const individualServices = [
    {
        name: "Web Development",
        desc: "High-performance websites & apps.",
        price: "From $X,XXX",
        items: ["Custom UI/UX Design", "Next.js / React Development", "CMS Integration", "Performance Optimization"]
    },
    {
        name: "AI & Automation",
        desc: "Custom bots and workflow systems.",
        price: "From $X,XXX",
        items: ["Chatbot Development", "Workflow Automation", "CRM Integration", "Data Scraping & Analysis"]
    },
    {
        name: "Digital Marketing",
        desc: "Targeted campaigns for ROI.",
        price: "From $X,XXX",
        items: ["PPC Campaign Management", "SEO Audits & Strategy", "Content Marketing", "Social Media Management"]
    }
];

const PricingCard = ({ plan, highlight = false }: { plan: any, highlight?: boolean }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`group relative p-8 rounded-3xl border text-left flex flex-col backdrop-blur-md transition-all duration-500 hover:-translate-y-2 overflow-hidden ${highlight ? 'bg-white/10 border-blue-500 shadow-2xl shadow-blue-900/20' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
        >
            {highlight && (
                <div className="absolute top-4 right-4 bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-blue-500/30">
                    Most Popular
                </div>
            )}

            <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-white font-grand">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.desc}</p>
            </div>

            {/* Expandable Content Container */}
            <div className="max-h-0 group-hover:max-h-[300px] transition-[max-height] duration-500 ease-in-out opacity-0 group-hover:opacity-100 overflow-hidden">
                <div className="h-px w-full bg-white/10 mb-4" />
                <ul className="space-y-3 mb-6">
                    {plan.items.map((item: string) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                            <Check className="text-blue-500 w-4 h-4 shrink-0 mt-0.5" />
                            {item}
                        </li>
                    ))}
                </ul>
                <Link href="/contact" className={`w-full block text-center py-3 rounded-xl font-bold uppercase tracking-wide transition-colors mb-4 ${highlight ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-white text-black hover:bg-gray-200'}`}>
                    Get Started
                </Link>
            </div>

            {/* Collapsed State Indication (Optional - keeps card looking clean when closed) */}
            <div className="group-hover:opacity-0 transition-opacity duration-300 absolute bottom-8 left-8 right-8">
                <div className="flex justify-between items-center text-gray-500 text-xs uppercase tracking-widest font-bold">
                    <span>{plan.price}</span>
                    <span className="flex items-center gap-1">View Details <span className="text-lg leading-none">↓</span></span>
                </div>
            </div>
            {/* Spacer to maintain height if needed, or let flex handle it. Fixed height for uniform look? */}
            {/* Let's try dynamic height but with a min-height to accommodate the collapsed state nicely */}
            <div className="min-h-[40px] group-hover:min-h-0 transition-all duration-300" />
        </motion.div>
    );
};

export default function Pricing() {
    return (
        <section id="pricing" className="relative py-32 px-6">
            <div className="max-w-[90rem] mx-auto space-y-24">

                {/* Header */}
                <div className="text-center">
                    <TextReveal
                        text="Invest in Growth"
                        className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 font-grand"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mt-6 font-light"
                    >
                        Flexible solutions tailored to your specific stage and goals.
                    </motion.p>
                </div>

                {/* Section 1: Monthly Retainers */}
                <div className="space-y-12">
                    <div className="flex items-center gap-4">
                        <div className="h-px flex-grow bg-white/10" />
                        <span className="text-gray-500 uppercase tracking-[0.2em] text-sm font-bold">Monthly Retainers</span>
                        <div className="h-px flex-grow bg-white/10" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {retainers.map((plan, idx) => (
                            <PricingCard key={plan.name} plan={plan} highlight={plan.popular} />
                        ))}
                    </div>
                </div>

                {/* Section 2: Individual Services */}
                <div className="space-y-12">
                    <div className="flex items-center gap-4">
                        <div className="h-px flex-grow bg-white/10" />
                        <span className="text-gray-500 uppercase tracking-[0.2em] text-sm font-bold">Individual Projects</span>
                        <div className="h-px flex-grow bg-white/10" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {individualServices.map((service, idx) => (
                            <PricingCard key={service.name} plan={service} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
