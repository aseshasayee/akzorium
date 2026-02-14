"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section className="relative py-24 px-6 overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8"
                >
                    Ready to Scale?
                </motion.h2>
                <button className="px-12 py-4 rounded-full bg-white text-black font-bold uppercase tracking-wide hover:scale-105 transition-transform duration-300">
                    Contact Us
                </button>
            </div>
        </section>
    );
}
