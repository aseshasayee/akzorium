"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import TextReveal from "@/components/TextReveal";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Data
const serviceData = {
    marketing: {
        title: "Marketing",
        desc: "We drive growth by turning attention into measurable results through strategic campaigns.",
        features: [
            { title: "Online Ads", desc: "Meta, Google, and performance media campaigns optimized for ROI." },
            { title: "SEO", desc: "Rank high and dominate search results with future-proof strategies." },
            { title: "Social Media", desc: "End-to-end management to build community and brand loyalty." },
            { title: "Content Strategy", desc: "Compelling storytelling that resonates with your audience." }
        ]
    },
    web: {
        title: "Web Development",
        desc: "High-performance digital platforms engineered for scale and conversion.",
        features: [
            { title: "Business Websites", desc: "Premium, responsive, and fast corporate websites." },
            { title: "Landing Pages", desc: "Conversion-focused pages designed to sell." },
            { title: "E-Commerce", desc: "Robust online stores built on Shopify or Custom stacks." },
            { title: "Web Systems", desc: "Scalable web applications for complex business needs." }
        ]
    },
    tech: {
        title: "Technology Solutions",
        desc: "Intelligent systems and automations to streamline operations and enhance efficiency.",
        features: [
            { title: "AI Agents", desc: "Custom AI assistants to handle support and operations." },
            { title: "Automations", desc: "Workflow automations to save time and reduce error." },
            { title: "Chatbots", desc: "Smart conversational interfaces for 24/7 engagement." },
            { title: "Internal Tools", desc: "Dashboards and tools tailored to your business processes." }
        ]
    },
    growth: {
        title: "Growth Systems",
        desc: "Building scalable identities and infrastructures that resonate with premium audiences.",
        features: [
            { title: "Lead Generation", desc: "Automated systems to capture and nurture high-quality leads." },
            { title: "Sales Funnels", desc: "Optimized pathways to convert visitors into customers." },
            { title: "Growth Strategy", desc: "Data-driven roadmaps for sustainable scaling." },
            { title: "Revenue Ops", desc: "Aligning marketing, sales, and success for revenue growth." }
        ]
    }
};

export default function ServiceDomainPage() {
    const params = useParams();
    const domain = params.domain as string;
    const data = serviceData[domain as keyof typeof serviceData];

    if (!data) {
        return <div className="min-h-screen bg-black text-white flex items-center justify-center">Service not found.</div>;
    }

    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />

            <section className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <span className="text-blue-500 font-mono mb-4 block uppercase tracking-widest text-sm">Service Domain</span>
                        <h1 className="text-5xl md:text-7xl font-bold uppercase font-grand mb-6">{data.title}</h1>
                        <p className="text-xl text-gray-400 max-w-2xl">{data.desc}</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-800 pt-12">
                        {data.features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                                    <CheckCircle2 className="text-gray-600 group-hover:text-blue-500 transition-colors" />
                                </div>
                                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 p-10 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-3xl border border-white/10 text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready to scale your {data.title}?</h2>
                        <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-gray-200 transition-colors">
                            Get Started
                            <ArrowUpRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
