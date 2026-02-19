"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AttentionHook() {
    return (
        <section className="py-20 bg-black text-center px-4">
            <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-2xl md:text-4xl lg:text-5xl font-bold font-grand leading-tight text-white max-w-4xl mx-auto"
            >
                “Traffic alone doesn’t grow a business. <br />
                <span className="text-blue-500">Conversions do.</span>”
            </motion.p>
        </section>
    );
}
