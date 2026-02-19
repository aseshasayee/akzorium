"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
    {
        name: "Starter",
        desc: "For startups establishing a foundation.",
        price: "Custom",
        features: ["Digital Marketing Strategy", "Basic Web Presence", "Social Media Setup", "Monthly Reporting"]
    },
    {
        name: "Growth",
        desc: "For scaling businesses ready to accelerate.",
        price: "Custom",
        popular: true,
        features: ["Advanced SEO & SEM", "Custom Web Development", "Automation Workflows", "Content Creation", "Weekly Reporting"]
    },
    {
        name: "Enterprise",
        desc: "Full-scale systems for market leaders.",
        price: "Custom",
        features: ["Full-Service Marketing", "AI Agent Integration", "Custom Platform Development", "Dedicated Support Team", "Real-time Analytics"]
    }
];

export default function Pricing() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />

            <section className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold uppercase font-grand mb-6"
                    >
                        Invest in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Growth</span>
                    </motion.h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-16">
                        Flexible solutions tailored to your specific stage and goals.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        {plans.map((plan, idx) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className={`relative p-8 rounded-3xl border text-left h-full flex flex-col ${plan.popular ? 'bg-white/10 border-blue-500 shadow-2xl shadow-blue-900/20' : 'bg-white/5 border-white/10'}`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <div className="text-4xl font-bold mb-4 font-grand">{plan.price}</div>
                                <p className="text-gray-400 text-sm mb-8">{plan.desc}</p>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((opt) => (
                                        <li key={opt} className="flex items-start gap-3 text-sm text-gray-300">
                                            <Check className="text-blue-500 w-5 h-5 shrink-0" />
                                            {opt}
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/contact" className={`w-full block text-center py-3 rounded-xl font-bold uppercase tracking-wide transition-colors ${plan.popular ? 'bg-white text-black hover:bg-gray-200' : 'bg-white/10 hover:bg-white/20'}`}>
                                    Get Started
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
