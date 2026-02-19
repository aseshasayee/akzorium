"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />

            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                {/* Background Element */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-black uppercase font-grand mb-12"
                    >
                        The Core of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Momentum</span>
                    </motion.h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-lg text-gray-300 leading-relaxed font-light">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                            <p className="mb-6">
                                <strong className="text-white block mb-2 text-xl">Akzorium</strong> represents a modern hub where growth, technology, and intelligent systems converge. The name is inspired by the idea of a central forum — a place where multiple forces work together in alignment.
                            </p>
                            <p>
                                <span className="text-blue-400 font-bold">"Akz"</span> conveys acceleration, edge, sharp thinking, and forward momentum.
                            </p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                            <p className="mb-6">
                                <span className="text-purple-400 font-bold">"orium"</span> traditionally refers to a collective or shared space.
                            </p>
                            <p>
                                Together, we stand for a scalable ecosystem — not tied to one service, trend, or platform. We are built for long-term partnerships, handling complex, high-value brands with structure and enterprise-grade clarity.
                            </p>
                        </motion.div>
                    </div>

                    <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
                            <h3 className="text-2xl font-bold mb-4">Premium</h3>
                            <p className="text-gray-400 text-sm">Quality that speaks for itself. No shortcuts.</p>
                        </div>
                        <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
                            <h3 className="text-2xl font-bold mb-4">Intelligent</h3>
                            <p className="text-gray-400 text-sm">Driven by data, magnified by technology.</p>
                        </div>
                        <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
                            <h3 className="text-2xl font-bold mb-4">Scalable</h3>
                            <p className="text-gray-400 text-sm">Built for growth today and dominance tomorrow.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
